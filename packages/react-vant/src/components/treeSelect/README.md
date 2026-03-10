# TreeSelect 树形选择

## 介绍

用于从一组层级结构数据中进行选择，支持单选和多选模式。

## 引入

```js
import { TreeSelect } from 'react-vant-nova';
```

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 多选模式

<code src="./demo/multiple.tsx"></code>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值 | `string` \| `number` \| `string[]` \| `number[]` | - |
| defaultValue | 默认选中的值 | `string` \| `number` \| `string[]` \| `number[]` | - |
| treeData | 树形数据 | `TreeSelectNode[]` | `[]` |
| fieldNames | 自定义树节点的字段 | `TreeSelectFieldNames` | - |
| placeholder | 选择框默认文字 | `string` | - |
| multiple | 是否支持多选 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| height | 高度 | `number` \| `string` | `272` |
| navWidth | 左侧导航宽度 | `number` \| `string` | `80` |
| activeIndex | 左侧导航当前选中项的索引 | `number` | - |
| defaultActiveIndex | 默认选中的左侧导航索引 | `number` | `0` |
| navStyle | 左侧导航样式 | `CSSProperties` | - |
| contentStyle | 右侧内容样式 | `CSSProperties` | - |
| navClassName | 左侧导航类名 | `string` | - |
| contentClassName | 右侧内容类名 | `string` | - |
| contentRender | 自定义右侧区域内容 | `(item: TreeSelectNode) => ReactNode` | - |

### Events

| 事件名     | 说明               | 回调参数                         |
| ---------- | ------------------ | -------------------------------- |
| onChange   | 选中项改变时触发   | `(value, selectedNodes) => void` |
| onNavClick | 点击左侧导航时触发 | `(index: number) => void`        |

## 类型定义

### TreeSelectNode

```ts | pure
type TreeSelectNode = {
  title?: ReactNode
  value?: string | number
  key?: string | number
  children?: TreeSelectNode[]
  disabled?: boolean
  isLeaf?: boolean
  icon?: ReactNode
  className?: string
  style?: CSSProperties
}
```

### TreeSelectFieldNames

```ts | pure
type TreeSelectFieldNames = {
  title?: string
  value?: string
  key?: string
  children?: string
}
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-tree-select-font-size | var(--rv-font-size-md) | 字体大小 |
| --rv-tree-select-nav-width | 80px | 左侧导航宽度 |
| --rv-tree-select-nav-background-color | var(--rv-background-color) | 左侧导航背景色 |
| --rv-tree-select-content-background-color | var(--rv-white) | 右侧内容背景色 |
| --rv-tree-select-nav-item-padding | 14px var(--rv-padding-sm) | 导航项内边距 |
| --rv-tree-select-item-height | 48px | 内容项高度 |
| --rv-tree-select-item-active-color | var(--rv-red) | 激活状态颜色 |
| --rv-tree-select-item-disabled-color | var(--rv-gray-5) | 禁用状态颜色 |
| --rv-tree-select-item-selected-size | 16px | 选中图标大小 |
| --rv-tree-select-height | 300px | 组件默认高度 |
