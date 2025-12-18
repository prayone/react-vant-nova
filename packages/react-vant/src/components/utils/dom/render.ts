import { ReactElement } from 'react'
import * as ReactDOM from 'react-dom'
import type { Root } from 'react-dom/client'
import { reactDomVersion } from './version'

// 移植自rc-util: https://github.com/react-component/util/blob/master/src/React/render.ts

type CreateRoot = (container: ContainerType) => Root

// Let compiler not to search module usage
const fullClone = {
  ...ReactDOM,
} as typeof ReactDOM & {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?: {
    usingClientEntryPoint?: boolean
  }
  createRoot?: CreateRoot
}

const { unmountComponentAtNode } = fullClone

let createRoot: CreateRoot

// 确保在React 18+版本中获取createRoot
if (fullClone.createRoot) {
  createRoot = fullClone.createRoot
} else {
  // 如果createRoot不可用，尝试从react-dom/client导入
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    createRoot = require('react-dom/client').createRoot
  } catch (e) {
    // 保留原有行为以兼容旧版本
  }
}

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

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * 使用ReactDOM.render的替代方案，仅用于旧版本React
 * 如果ReactDOM.render不可用，将降级使用createRoot（如果可用）
/*******  57770e2e-0e81-41a7-aee6-9175a4a59062  *******/ function legacyRender(
  node: ReactElement,
  container: ContainerType
) {
  // 使用ReactDOM.render的替代方案，仅用于旧版本React
  // @ts-ignore
  if (fullClone.render) {
    // @ts-ignore
    fullClone.render(node, container)
  } else {
    // 如果ReactDOM.render不可用，降级使用createRoot（如果可用）
    if (createRoot) {
      concurrentRender(node, container)
    }
  }
}

function concurrentRender(node: ReactElement, container: ContainerType) {
  toggleWarning(true)
  const root = container[MARK] || createRoot(container)
  toggleWarning(false)
  // @ts-ignore
  root.render(node)
  container[MARK] = root
}

export function render(node: ReactElement, container: ContainerType) {
  if (createRoot) {
    concurrentRender(node, container)
    return
  }
  legacyRender(node, container)
}

// ========================== Unmount =========================
function legacyUnmount(container: ContainerType) {
  return unmountComponentAtNode(container)
}

async function concurrentUnmount(container: ContainerType) {
  // Delay to unmount to avoid React 18 sync warning
  return Promise.resolve().then(() => {
    container[MARK]?.unmount()
    delete container[MARK]
  })
}

export function unmount(container: ContainerType) {
  if (createRoot) {
    return concurrentUnmount(container)
  }

  return legacyUnmount(container)
}
