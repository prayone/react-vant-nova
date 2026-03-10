import React, { useMemo, useState } from 'react'
import cls from 'clsx'
import { Success } from '@react-vant/icons'
import {
  TreeSelectProps,
  TreeSelectNode,
  TreeSelectItemProps,
} from './PropsType'
import { createNamespace, extend } from '../utils'
import { useMemoizedFn } from '../hooks'
import useMergedState from '../hooks/use-merged-state'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('tree-select')

// TreeSelect 子项组件
const TreeSelectItem: React.FC<TreeSelectItemProps> = ({
  node,
  selected,
  multiple,
  level = 0,
  onClick,
  fieldNames,
}) => {
  const {
    title: titleKey = 'title',
    value: valueKey = 'value',
    children: childrenKey = 'children',
  } = fieldNames || {}

  const title = node[titleKey]
  const children = node[childrenKey]
  const hasChildren = children && children.length > 0

  const handleClick = () => {
    if (!node.disabled) {
      onClick?.(node)
    }
  }

  return (
    <div className={cls(bem('item-wrapper'))}>
      <div
        className={cls(
          bem('item', {
            active: selected,
            disabled: node.disabled,
            level: `level-${level}`,
          }),
          node.className
        )}
        style={node.style}
        onClick={handleClick}
      >
        <div className={cls(bem('item-content'))}>
          {node.icon && (
            <span className={cls(bem('item-icon'))}>{node.icon}</span>
          )}
          <span className={cls(bem('item-title'))}>{title}</span>
        </div>
        {selected && !multiple && (
          <Success className={cls(bem('item-selected-icon'))} />
        )}
        {multiple && (
          <input
            type='checkbox'
            checked={selected}
            disabled={node.disabled}
            className={cls(bem('item-checkbox'))}
            readOnly
          />
        )}
      </div>
      {hasChildren && (
        <div className={cls(bem('item-children'))}>
          {children.map((child: TreeSelectNode, index: number) => (
            <TreeSelectItem
              key={child[valueKey] || index}
              node={child}
              selected={false}
              multiple={multiple}
              level={level + 1}
              onClick={onClick}
              fieldNames={fieldNames}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const TreeSelect: React.FC<TreeSelectProps> = p => {
  const props = mergeProps(p, {
    treeData: [],
    height: 272,
    navWidth: 80,
    defaultActiveIndex: 0,
    fieldNames: {
      title: 'title',
      value: 'value',
      key: 'key',
      children: 'children',
    },
  })

  const {
    title: titleKey,
    value: valueKey,
    key: keyKey,
    children: childrenKey,
  } = extend(
    {
      title: 'title',
      value: 'value',
      key: 'key',
      children: 'children',
    },
    props.fieldNames
  )

  // 当前选中的值
  const [selectedValue, setSelectedValue] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  })

  // 左侧导航当前选中的索引
  const [activeIndex, setActiveIndex] = useMergedState({
    value: props.activeIndex,
    defaultValue: props.defaultActiveIndex,
  })

  // 获取所有顶级节点（左侧导航）
  const navItems = useMemo(() => {
    return props.treeData || []
  }, [props.treeData])

  // 获取当前激活项的子节点（右侧内容）
  const contentItems = useMemo(() => {
    const currentNav = navItems[activeIndex]
    return (currentNav?.[childrenKey] || []) as TreeSelectNode[]
  }, [navItems, activeIndex, childrenKey])

  // 判断值是否选中
  const isValueSelected = useMemoizedFn((value: string | number): boolean => {
    if (props.multiple) {
      return Array.isArray(selectedValue) && selectedValue.includes(value)
    }
    return selectedValue === value
  })

  // 查找节点
  const findNode = useMemoizedFn(
    (
      nodes: TreeSelectNode[],
      value: string | number
    ): TreeSelectNode | null => {
      for (const node of nodes) {
        if (node[valueKey] === value) {
          return node
        }
        if (node[childrenKey]) {
          const found = findNode(node[childrenKey], value)
          if (found) return found
        }
      }
      return null
    }
  )

  // 获取所有选中的节点
  const getSelectedNodes = useMemoizedFn(
    (value: string | number | Array<string | number>): TreeSelectNode[] => {
      const values = Array.isArray(value) ? value : [value]
      const nodes: TreeSelectNode[] = []
      values.forEach(val => {
        const node = findNode(props.treeData || [], val)
        if (node) nodes.push(node)
      })
      return nodes
    }
  )

  // 左侧导航点击
  const handleNavClick = useMemoizedFn((index: number) => {
    setActiveIndex(index)
    props.onNavClick?.(index)
  })

  // 右侧内容项点击
  const handleItemClick = useMemoizedFn((node: TreeSelectNode) => {
    const value = node[valueKey]
    let newValue: string | number | Array<string | number>

    if (props.multiple) {
      const currentValues = Array.isArray(selectedValue) ? selectedValue : []
      if (currentValues.includes(value)) {
        newValue = currentValues.filter(v => v !== value)
      } else {
        newValue = [...currentValues, value]
      }
    } else {
      newValue = value
    }

    setSelectedValue(newValue)
    const selectedNodes = getSelectedNodes(newValue)
    props.onChange?.(newValue, selectedNodes)
  })

  // 渲染左侧导航
  const renderNav = () => (
    <div
      className={cls(bem('nav'), props.navClassName)}
      style={{
        width: props.navWidth,
        height: props.height,
        ...props.navStyle,
      }}
    >
      {navItems.map((item, index) => {
        const isActive = index === activeIndex
        const title = item[titleKey]

        return (
          <div
            key={item[keyKey] || item[valueKey] || index}
            className={cls(
              bem('nav-item', {
                active: isActive,
                disabled: item.disabled,
              }),
              item.className
            )}
            style={item.style}
            onClick={() => !item.disabled && handleNavClick(index)}
          >
            {item.icon && (
              <span className={cls(bem('nav-icon'))}>{item.icon}</span>
            )}
            <span className={cls(bem('nav-text'))}>{title}</span>
            {item.badge && (
              <span className={cls(bem('nav-badge'))}>{item.badge}</span>
            )}
          </div>
        )
      })}
    </div>
  )

  // 渲染右侧内容
  const renderContent = () => {
    const currentNav = navItems[activeIndex]

    if (props.contentRender && currentNav) {
      return (
        <div
          className={cls(bem('content'), props.contentClassName)}
          style={{
            height: props.height,
            ...props.contentStyle,
          }}
        >
          {props.contentRender(currentNav)}
        </div>
      )
    }

    return (
      <div
        className={cls(bem('content'), props.contentClassName)}
        style={{
          height: props.height,
          ...props.contentStyle,
        }}
      >
        {contentItems.length > 0 ? (
          <div className={cls(bem('items'))}>
            {contentItems.map((item: TreeSelectNode, index: number) => {
              const value = item[valueKey]
              const selected = isValueSelected(value)

              return (
                <TreeSelectItem
                  key={item[keyKey] || value || index}
                  node={item}
                  selected={selected}
                  multiple={props.multiple}
                  onClick={handleItemClick}
                  fieldNames={props.fieldNames}
                />
              )
            })}
          </div>
        ) : (
          <div className={cls(bem('content-empty'))}>
            {props.placeholder || '暂无数据'}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cls(props.className, bem())} style={props.style}>
      {renderNav()}
      {renderContent()}
    </div>
  )
}

export default TreeSelect
