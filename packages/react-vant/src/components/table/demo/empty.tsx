import React from 'react'
import { Table } from 'react-vant-nova'
import './style.less'

export default () => {
  // 模拟表格数据
  const dataSource = []
  // 列配置
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '性别',
      dataIndex: 'gender',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      render: (text: string) => <a href={`mailto:${text}`}>{text}</a>,
    },
    {
      title: '电话',
      dataIndex: 'phone',
      render: (text: string) => <a href={`tel:${text}`}>{text}</a>,
    },
  ]

  return (
    <div className='demo-table'>
      <h2>空表格</h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        emptyText='暂无数据'
        emptyImage='https://resource.xdfgk.cn/%E8%B5%84%E6%BA%90%201.png'
      />
    </div>
  )
}
