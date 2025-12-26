# Table 表格

### 介绍

用于展示结构化数据的组件，支持自定义列渲染、边框显示等功能。

### 基础用法

<code src="./demo/basic.tsx"></code>

#### 空表格

<code src="./demo/empty.tsx"></code>

### API

#### Table Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 表格数据 | `Array` | `[]` |
| columns | 列配置 | `Array<TableColumn>` | `[]` |
| rowKey | 表格行 Key 的取值字段 | `string \| ((record: any, index: number) => string)` | `id` |
| bordered | 是否显示边框 | `boolean` | `false` |
| showHeader | 是否显示表头 | `boolean` | `true` |
| emptyText | 空数据时显示的内容 | `ReactNode` | `暂无数据` |

#### TableColumn Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 列标题 | `ReactNode` | - |
| dataIndex | 列数据对应的字段名 | `string` | - |
| width | 列宽度 | `string \| number \| %` | - |
| align | 列对齐方式 | `'left' \| 'center' \| 'right'` | `'left'` |
| render | 自定义单元格渲染函数 | `(text: any, record: any, index: number) => ReactNode` | - |
| titleRender | 自定义表头渲染函数 | `(column: TableColumn) => ReactNode` | - |
