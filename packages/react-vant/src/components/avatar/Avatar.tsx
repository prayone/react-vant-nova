import React, { CSSProperties, useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { AvatarProps } from './PropsType'
import { addUnit, createNamespace } from '../utils'

const [bem] = createNamespace('avatar')

const presetSizes = ['mini', 'small', 'normal', 'large']

const Avatar: React.FC<AvatarProps> = props => {
  const {
    alt,
    children,
    className,
    fallback,
    fit = 'cover',
    shape = 'circle',
    size = 'normal',
    src,
    style,
    onClick,
    onError,
    onLoad,
  } = props
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  const avatarStyle = useMemo(() => {
    const internalStyle: CSSProperties = { ...style }

    if (!presetSizes.includes(String(size))) {
      const sizeValue = addUnit(size)
      internalStyle.width = sizeValue
      internalStyle.height = sizeValue
    }

    return internalStyle
  }, [style, size])

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    onLoad?.(event)
  }

  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setFailed(true)
    onError?.(event)
  }

  const renderContent = () => {
    if (src && !failed) {
      return (
        <img
          className={clsx(bem('img'))}
          src={src}
          alt={alt || ''}
          style={{ objectFit: fit }}
          onLoad={handleLoad}
          onError={handleError}
        />
      )
    }

    return fallback ?? children
  }

  return (
    <div
      className={clsx(
        className,
        bem({
          [shape]: !!shape,
          [String(size)]: presetSizes.includes(String(size)),
        })
      )}
      style={avatarStyle}
      onClick={onClick}
    >
      {renderContent()}
    </div>
  )
}

export default Avatar
