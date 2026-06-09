import { ReactElement } from 'react'

import { createRoot, Root } from 'react-dom/client'
// React 19 下，客户端渲染入口统一迁移到 react-dom/client 下的 createRoot 体系，
// 旧的 ReactDOM.render 和 unmountComponentAtNode 已经不再适合作为动态挂载和卸载入口。
// 但 React-Vant 用的还是老 API。所以升级后会直接报错，组件无法正常挂载、更新和卸载。
// 我的改造方式比较明确，就是把所有动态弹层的挂载逻辑，统一切换成 React 19 的新标准：
// 用 createRoot 创建 root 实例，用 root.render 渲染组件，用 root.unmount 卸载组件。
export function render(node: ReactElement, container: ContainerType) {
  const root = container[MARK] || createRoot(container)
  root.render(node) // 同时，底层会把 root 实例绑定到 dom 容器上，
  container[MARK] = root // 避免重复创建和重复挂载
}
export function unmount(container: ContainerType) {
  container[MARK]?.unmount()
  delete container[MARK]
}
