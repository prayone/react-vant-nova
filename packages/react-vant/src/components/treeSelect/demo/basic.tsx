import React, { useState } from 'react'
import { TreeSelect, type TreeSelectNode } from 'react-vant-nova'

import './style.less'

export default () => {
  const [value, setValue] = useState<string | number>('1-1')

  const treeData: TreeSelectNode[] = [
    {
      title: '浙江省',
      value: 'zhejiang',
      children: [
        { title: '杭州市', value: '1-1' },
        { title: '温州市', value: '1-2' },
        { title: '宁波市', value: '1-3' },
        { title: '义乌市', value: '1-4' },
      ],
    },
    {
      title: '江苏省',
      value: 'jiangsu',
      children: [
        { title: '南京市', value: '2-1' },
        { title: '无锡市', value: '2-2' },
        { title: '苏州市', value: '2-3' },
        { title: '南通市', value: '2-4' },
      ],
    },
    {
      title: '福建省',
      value: 'fujian',
      children: [
        { title: '福州市', value: '3-1' },
        { title: '厦门市', value: '3-2' },
        { title: '泉州市', value: '3-3' },
        { title: '漳州市', value: '3-4' },
      ],
    },
  ]

  return (
    <div className='demo-tree-select'>
      <h2>基础用法</h2>
      <TreeSelect
        treeData={treeData}
        value={value}
        onChange={val => {
          if (!Array.isArray(val)) {
            setValue(val)
          }
          console.log('选中值:', val)
        }}
      />
      <p style={{ marginTop: 16 }}>当前选中值: {value}</p>
    </div>
  )
}
