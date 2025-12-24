import React from 'react'
import clsx from 'clsx'
import { TableProps } from './PropsType'
import { createNamespace } from '../utils'

const [bem] = createNamespace('table')

const Table: React.FC<TableProps> = props => {
  const {
    className,
    style,
    dataSource = [],
    columns = [],
    rowKey = 'id',
    bordered = false,
    showHeader = true,
    emptyText = '暂无数据',
    ...restProps
  } = props

  // 获取行的key值
  const getRowKey = (record: any, index: number): string => {
    if (typeof rowKey === 'function') {
      return rowKey(record, index)
    }
    return String(record[rowKey] || index)
  }

  // 渲染表头
  const renderHeader = () => {
    if (!showHeader) return null

    return (
      <thead className={bem('header')}>
        <tr>
          {columns.map((column, index) => (
            <th
              key={column.dataIndex || index}
              className={bem('header-cell')}
              style={{ width: column.width }}
            >
              {column.titleRender ? column.titleRender(column) : column.title}
            </th>
          ))}
        </tr>
      </thead>
    )
  }

  // 渲染表格内容
  const renderBody = () => {
    if (dataSource.length === 0) {
      return (
        <tbody className={bem('body')}>
          <tr>
            <td colSpan={columns.length} className={bem('empty-cell')}>
              {emptyText}
            </td>
          </tr>
        </tbody>
      )
    }

    return (
      <tbody className={bem('body')}>
        {dataSource.map((record, rowIndex) => (
          <tr key={getRowKey(record, rowIndex)} className={bem('row')}>
            {columns.map((column, colIndex) => {
              const text = record[column.dataIndex]
              return (
                <td
                  key={column.dataIndex || colIndex}
                  className={bem('cell')}
                  style={{ width: column.width }}
                >
                  {column.render ? column.render(text, record, rowIndex) : text}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    )
  }

  const classes = clsx(
    className,
    bem([
      {
        bordered,
      },
    ])
  )

  return (
    <table className={classes} style={style} {...restProps}>
      {renderHeader()}
      {renderBody()}
    </table>
  )
}

export default Table
