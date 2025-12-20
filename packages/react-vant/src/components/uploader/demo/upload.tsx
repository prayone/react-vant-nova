import React from 'react'
import { Uploader } from 'react-vant-nova'
import { upload, demoData } from './utils'
import './style.less'

export default () => {
  return <Uploader defaultValue={demoData} upload={upload} />
}
