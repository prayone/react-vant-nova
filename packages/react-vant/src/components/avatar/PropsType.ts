import React from 'react'
import { BaseTypeProps } from '../utils'

export type AvatarShape = 'circle' | 'square'
export type AvatarFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
export type AvatarSize = 'mini' | 'small' | 'normal' | 'large' | number | string

export interface AvatarProps extends BaseTypeProps {
  /** 图片地址 */
  src?: string
  /** 图片描述 */
  alt?: string
  /**
   * 头像形状
   * @default circle
   */
  shape?: AvatarShape
  /**
   * 头像大小
   * @default normal
   */
  size?: AvatarSize
  /**
   * 图片填充模式
   * @default cover
   */
  fit?: AvatarFit
  /** 图片加载失败时显示的内容 */
  fallback?: React.ReactNode
  /** 点击头像时触发 */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  /** 图片加载成功时触发 */
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
  /** 图片加载失败时触发 */
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
}
