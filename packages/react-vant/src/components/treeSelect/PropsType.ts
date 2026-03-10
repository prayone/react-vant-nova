import React from 'react'
import { BaseTypeProps } from '../utils'

export type TreeSelectNode = {
  /** 节点标题 */
  title?: React.ReactNode
  /** 节点值 */
  value?: string | number
  /** 节点键值 */
  key?: string | number
  /** 子节点列表 */
  children?: TreeSelectNode[]
  /** 是否禁用节点 */
  disabled?: boolean
  /** 是否为叶子节点 */
  isLeaf?: boolean
  /** 自定义图标 */
  icon?: React.ReactNode
  /** 节点的自定义类名 */
  className?: string
  /** 节点的自定义样式 */
  style?: React.CSSProperties
  /** 扩展字段 */
  [key: string]: any
}

export type TreeSelectFieldNames = {
  title?: string
  value?: string
  key?: string
  children?: string
}

export interface TreeSelectProps extends Omit<BaseTypeProps, 'children'> {
  /** 当前选中的值 */
  value?: string | number | Array<string | number>
  /** 默认选中的值 */
  defaultValue?: string | number | Array<string | number>
  /** 树形数据 */
  treeData?: TreeSelectNode[]
  /** 自定义树节点的字段 */
  fieldNames?: TreeSelectFieldNames
  /** 选择框默认文字 */
  placeholder?: string
  /** 是否支持多选 */
  multiple?: boolean
  /** 是否可以清除 */
  allowClear?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 高度，默认 272px */
  height?: number | string
  /** 左侧导航宽度 */
  navWidth?: number | string
  /** 自定义右侧区域内容 */
  contentRender?: (item: TreeSelectNode) => React.ReactNode
  /** 选中项改变时触发 */
  onChange?: (
    value: string | number | Array<string | number>,
    selectedNodes: TreeSelectNode[]
  ) => void
  /** 点击左侧导航时触发 */
  onNavClick?: (index: number) => void
  /** 左侧导航当前选中项的索引 */
  activeIndex?: number
  /** 默认选中的左侧导航索引 */
  defaultActiveIndex?: number
  /** 左侧导航样式 */
  navStyle?: React.CSSProperties
  /** 右侧内容样式 */
  contentStyle?: React.CSSProperties
  /** 左侧导航类名 */
  navClassName?: string
  /** 右侧内容类名 */
  contentClassName?: string
  children?: React.ReactNode
}

export interface TreeSelectItemProps {
  /** 节点数据 */
  node: TreeSelectNode
  /** 是否选中 */
  selected: boolean
  /** 是否多选模式 */
  multiple?: boolean
  /** 层级 */
  level?: number
  /** 点击回调 */
  onClick?: (node: TreeSelectNode) => void
  /** 字段映射 */
  fieldNames?: TreeSelectFieldNames
}
