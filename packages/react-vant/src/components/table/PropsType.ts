import React from 'react'
import { BaseTypeProps } from '../utils'

export interface TableColumn {
  /** 列标题 */
  title: React.ReactNode
  /** 列数据对应的字段名 */
  dataIndex: string
  /** 列宽度 */
  width?: string | number
  /** 自定义单元格渲染函数 */
  render?: (text: any, record: any, index: number) => React.ReactNode
  /** 自定义表头渲染函数 */
  titleRender?: (column: TableColumn) => React.ReactNode
}

export interface TableProps<T = any> extends BaseTypeProps {
  /** 表格数据 */
  dataSource: T[]
  /** 列配置 */
  columns: TableColumn[]
  /** 表格行Key的取值字段 */
  rowKey?: string | ((record: T, index: number) => string)
  /** 是否显示边框 */
  bordered?: boolean
  /** 是否显示表头 */
  showHeader?: boolean
  /** 空数据时显示的内容 */
  emptyText?: React.ReactNode
}
