# Avatar 头像

## 介绍

用于展示用户或事物的头像，支持图片、文字和自定义兜底内容。

## 引入

```js
import { Avatar } from 'react-vant-nova';
```

## 代码演示

### 基础用法

<code src="./demo/base.tsx"></code>

### 头像形状

<code src="./demo/shape.tsx"></code>

### 头像大小

<code src="./demo/size.tsx"></code>

### 加载失败

<code src="./demo/fallback.tsx"></code>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片地址 | _string_ | - |
| alt | 图片描述 | _string_ | - |
| shape | 头像形状，可选值为 `square` | _circle \| square_ | `circle` |
| size | 头像大小，可选值为 `mini` `small` `normal` `large`，也可以传入数字或字符串 | _string \| number_ | `normal` |
| fit | 图片填充模式 | _contain \| cover \| fill \| none \| scale-down_ | `cover` |
| fallback | 图片加载失败时显示的内容 | _ReactNode_ | - |
| className | 组件 class | _string_ | - |
| style | 组件样式 | _CSSProperties_ | - |
| onClick | 点击头像时触发 | _(event: MouseEvent) => void_ | - |
| onLoad | 图片加载成功时触发 | _(event: Event) => void_ | - |
| onError | 图片加载失败时触发 | _(event: Event) => void_ | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                         | 默认值                       | 描述         |
| ---------------------------- | ---------------------------- | ------------ |
| --rv-avatar-size-mini        | _24px_                       | 迷你头像大小 |
| --rv-avatar-size-small       | _32px_                       | 小头像大小   |
| --rv-avatar-size-normal      | _40px_                       | 默认头像大小 |
| --rv-avatar-size-large       | _56px_                       | 大头像大小   |
| --rv-avatar-background-color | _var(--rv-gray-3)_           | 背景色       |
| --rv-avatar-color            | _var(--rv-gray-7)_           | 文本色       |
| --rv-avatar-font-size        | _var(--rv-font-size-md)_     | 字号         |
| --rv-avatar-border-radius    | _var(--rv-border-radius-md)_ | 方形头像圆角 |
