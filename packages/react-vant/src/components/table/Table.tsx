import React from 'react'
import cls from 'clsx'
import { TableProps } from './PropsType'
import { createNamespace } from '../utils'
import { useMemo, useRef, useState, useEffect } from 'react'

const [bem] = createNamespace('table')

const Table: React.FC<TableProps> = props => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState<number>(0)

  // 监听容器尺寸变化（适配窗口缩放/响应式）
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 初始化宽度
    const updateWidth = () => {
      setContainerWidth(container.clientWidth)
    }
    updateWidth()

    // 监听窗口缩放
    const resizeObserver = new ResizeObserver(updateWidth)
    resizeObserver.observe(container)

    return () => {
      resizeObserver.unobserve(container)
    }
  }, [])

  const {
    className,
    style,
    dataSource = [],
    columns = [],
    rowKey = 'id',
    bordered = false,
    showHeader = true,
    emptyText = '暂无数据',
    emptyImage,
    ...restProps
  } = props

  // 检查是否有列设置了宽度
  const hasColumnWithWidth = useMemo(() => {
    return columns.some(col => col.width)
  }, [columns])

  // 核心：计算每列的最终宽度
  const columnStyles = useMemo(() => {
    if (!hasColumnWithWidth) return columns.map(() => ({ width: '0px' }))
    if (containerWidth === 0) return columns.map(() => ({ width: '0px' }))

    let fixedWidthTotal = 0 // 已配置列宽总和（像素）
    const flexibleColumns: number[] = [] // 未配置宽度的列索引
    const finalWidths: number[] = []

    // 第一步：解析用户配置的宽度（转像素）
    columns.forEach((col, index) => {
      if (col.width) {
        let widthPx = 0
        const width = col.width.toString()

        // 处理百分比宽度：容器宽度 × 百分比
        if (width.endsWith('%')) {
          const percent = parseFloat(width) / 100
          widthPx = containerWidth * percent
        }
        // 处理像素宽度：数字/px字符串
        else if (width.endsWith('px')) {
          widthPx = parseFloat(width)
        }
        // 纯数字（默认px）
        else {
          widthPx = parseFloat(width)
        }

        fixedWidthTotal += widthPx
        finalWidths.push(widthPx)
      } else {
        // 未配置宽度的列，先占位，后续均分
        flexibleColumns.push(index)
        finalWidths.push(0)
      }
    })

    // 第二步：给未配置宽度的列均分剩余宽度
    const flexCount = flexibleColumns.length
    if (flexCount > 0) {
      // 剩余宽度 = 容器宽度 - 已配置宽度总和（最小为0）
      const remainingWidth = Math.max(0, containerWidth - fixedWidthTotal)
      const flexWidthPerCol = remainingWidth / flexCount

      // 赋值给未配置宽度的列
      flexibleColumns.forEach(index => {
        finalWidths[index] = flexWidthPerCol > 70 ? flexWidthPerCol : 70
      })
    }

    // 转成样式对象（px）
    return finalWidths.map(width => ({
      width: `${width}px`,
      minWidth: `${width}px`, // 关键：防止列宽被压缩
    }))
  }, [columns, containerWidth])

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
      <thead className={cls(bem('header'))}>
        <tr>
          {columns.map((column, index) => (
            // 渲染表头时
            <th
              key={column.dataIndex || index}
              className={cls(bem('header-cell'))}
              style={{
                ...columnStyles[index],
                textAlign: column.align || 'left',
              }}
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
        <tbody className={cls(bem('body'))}>
          <tr>
            <td colSpan={columns.length} className={cls(bem('empty-cell'))}>
              <div className={cls(bem('empty-image'))}>
                {emptyImage && <img src={emptyImage} />}
              </div>
              <div>{emptyText}</div>
            </td>
          </tr>
        </tbody>
      )
    }

    return (
      <tbody className={cls(bem('body'))}>
        {dataSource.map((record, rowIndex) => (
          <tr key={getRowKey(record, rowIndex)} className={cls(bem('row'))}>
            {columns.map((column, colIndex) => {
              const text = record[column.dataIndex]
              return (
                <td
                  key={column.dataIndex || colIndex}
                  className={cls(bem('cell'))}
                  style={{
                    ...columnStyles[colIndex],
                    textAlign: column.align || 'left',
                  }}
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

  const classes = cls(
    className,
    bem([
      {
        bordered,
      },
    ])
  )

  return (
    <div className={cls(bem('wrapper'))} ref={containerRef}>
      <table
        className={classes}
        style={{
          ...style,
          ...(!hasColumnWithWidth && { tableLayout: 'auto' }),
        }}
        {...restProps}
      >
        {renderHeader()}
        {renderBody()}
      </table>
    </div>
  )
}

export default Table
