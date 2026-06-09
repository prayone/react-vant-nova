import { ReactElement } from 'react'
import * as ReactDOM from 'react-dom'
import type { Root } from 'react-dom/client'

import { createRoot } from 'react-dom/client'

// React 19 下，客户端渲染入口统一迁移到 react-dom/client 下的 createRoot 体系，
// 旧的 ReactDOM.render 和 unmountComponentAtNode 已经不再适合作为动态挂载和卸载入口。
// 但 React-Vant 用的还是老 API。所以升级后会直接报错，组件无法正常挂载、更新和卸载。
// 我的改造方式比较明确，就是把所有动态弹层的挂载逻辑，统一切换成 React 19 的新标准：
// 用 createRoot 创建 root 实例，用 root.render 渲染组件，用 root.unmount 卸载组件。

const fullClone = {
  ...ReactDOM,
} as typeof ReactDOM & {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?: {
    usingClientEntryPoint?: boolean
  }
}

const { render: reactRender, unmountComponentAtNode } = fullClone

function toggleWarning(skip: boolean) {
  const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = fullClone

  if (
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
    typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object'
  ) {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint =
      skip
  }
}

const MARK = '__react_vant_root__'

// ========================== Render ==========================
type ContainerType = (Element | DocumentFragment) & {
  [MARK]?: Root
}
function legacyRender(node: ReactElement, container: ContainerType) {
  if (reactRender) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    reactRender(node, container)
  }
}
function concurrentRender(node: ReactElement, container: ContainerType) {
  toggleWarning(true)
  // 复用绑定在容器上的 root，避免重复 createRoot 挂载。
  const root = container[MARK] || createRoot(container)
  toggleWarning(false)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  root.render(node)
  container[MARK] = root
}
export function render(node: ReactElement, container: ContainerType) {
  // @ts-ignore
  if (createRoot) {
    concurrentRender(node, container)
    return
  }
  legacyRender(node, container)
}

// ========================== Unmount =========================
function legacyUnmount(container: ContainerType) {
  return unmountComponentAtNode ? unmountComponentAtNode(container) : false
}

async function concurrentUnmount(container: ContainerType) {
  // Delay to unmount to avoid React 18 sync warning
  return Promise.resolve().then(() => {
    // React 19 推荐通过 root.unmount() 完成卸载。
    container[MARK]?.unmount()
    delete container[MARK]
  })
}

export function unmount(container: ContainerType) {
  // @ts-ignore
  if (createRoot || container[MARK]) {
    return concurrentUnmount(container)
  }

  return legacyUnmount(container)
}
