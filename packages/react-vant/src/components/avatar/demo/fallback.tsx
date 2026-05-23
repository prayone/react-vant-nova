import React from 'react'
import { Avatar, Space } from 'react-vant-nova'
import { UserO } from '@react-vant/icons'

export default () => (
  <Space>
    <Avatar src='invalid-image' fallback={<UserO />} />
    <Avatar src='invalid-image'>用户</Avatar>
  </Space>
)
