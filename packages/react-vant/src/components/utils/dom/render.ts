import { ReactElement } from 'react'
import * as ReactDOM from 'react-dom'
import type { Root } from 'react-dom/client'
import { createRoot } from 'react-dom/client'

// Copy from rc-util to fix React 19 support
// https://github.com/react-component/util/blob/master/src/React/render.ts

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
