import React from 'react'
import { Space } from 'react-vant-nova'
import { LocationO, LikeO, StarO } from '@react-vant/icons'

export default () => {
  return (
    <Space className='demo-icon' gap={20}>
      <LocationO />
      <LikeO />
      <StarO />
    </Space>
  )
}
