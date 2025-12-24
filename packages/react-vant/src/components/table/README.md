# Table 表格

### 介绍

用于展示结构化数据的组件，支持自定义列渲染、边框显示等功能。

### 基础用法

```jsx
import React from 'react'
import { Table } from 'react-vant-nova'

export default () => {
  // 模拟表格数据
  const dataSource = [
    {
      id: 1,
      name: '张三',
      age: 28,
      gender: '男',
      email: 'zhangsan@example.com',
      phone: '13800138001'
    },
    {
      id: 2,
      name: '李四',
      age: 25,
      gender: '女',
      email: 'lisi@example.com',
      phone: '13800138002'
    }
  ]

  // 列配置
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: '20%'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: '15%'
    },
    {
      title: '性别',
      dataIndex: 'gender',
      width: '15%'
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: '30%',
      render: (text) => <a href={`mailto:${text}`}>{text}</a>
    },
    {
      title: '电话',
      dataIndex: 'phone',
      width: '20%',
      render: (text) => <a href={`tel:${text}`}>{text}</a>
    }
  ]

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      bordered
    />
  )
}
```

#### 空表格

<code src="./demo/empty.tsx" title="空表格"></code>

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
| width | 列宽度 | `string \| number` | - |
| render | 自定义单元格渲染函数 | `(text: any, record: any, index: number) => ReactNode` | - |
| titleRender | 自定义表头渲染函数 | `(column: TableColumn) => ReactNode` | - |
