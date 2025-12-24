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
      width: '15%',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: '10%',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      width: '10%',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: '30%',
      render: (text: string) => <a href={`mailto:${text}`}>{text}</a>,
    },
    {
      title: '电话',
      dataIndex: 'phone',
      width: '25%',
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
        style={{ marginTop: '16px' }}
        emptyText='暂无数据'
      />
    </div>
  )
}
