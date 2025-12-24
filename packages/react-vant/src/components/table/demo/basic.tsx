import React from 'react'
import { Table } from 'react-vant-nova'
import './style.less'

export default () => {
  // 模拟表格数据
  const dataSource = [
    {
      id: 1,
      name: '张三',
      age: 28,
      gender: '男',
      email: 'zhangsan@example.com',
      phone: '13800138001',
    },
    {
      id: 2,
      name: '李四',
      age: 25,
      gender: '女',
      email: 'lisi@example.com',
      phone: '13800138002',
    },
    {
      id: 3,
      name: '王五',
      age: 30,
      gender: '男',
      email: 'wangwu@example.com',
      phone: '13800138003',
    },
    {
      id: 4,
      name: '赵六',
      age: 26,
      gender: '女',
      email: 'zhaoliu@example.com',
      phone: '13800138004',
    },
    {
      id: 5,
      name: '孙七',
      age: 32,
      gender: '男',
      email: 'sunqi@example.com',
      phone: '13800138005',
    },
  ]

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
      // width: '30%',
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
      <h2>基础表格</h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        style={{ marginTop: '16px' }}
      />
    </div>
  )
}
