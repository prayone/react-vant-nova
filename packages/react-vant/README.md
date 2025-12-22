<p align="center">
    <img alt="logo" src="https://cdn.jsdelivr.net/gh/3lang3/react-vant@main/public/logo.svg" width="200" style="margin-bottom: 10px;">
</p>

<h1 align="center">React Vant Nova （此版本兼容 React 19）</h1>

<p align="center">📱 A mobile component library based on the <strong>React</strong> framework according to <a href="https://github.com/youzan/vant">Vant</a>.</p>

<p align="center">
  <a href="https://npmjs.org/package/react-vant-nova" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/npm/v/react-vant/latest?style=flat-square" alt="npm version" />
  </a>
  <a href="https://npmjs.org/package/react-vant-nova" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/npm/dm/react-vant.svg?style=flat-square" alt="npm download" />
  </a>
  <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg?style=flat-square" alt="renovate" />
</p>

<p align="center">
  🔥 <a href="https://react-vant-gitee.3lang.dev">Documentation (Domestic)</a>
  &nbsp;
  🌈 <a href="https://react-vant.3lang.dev">Documentation（GitHub）</a>
</p>

## 🧑‍💻 Project Status

Due to personal reasons and limited energy, the project entered maintenance mode and no longer accepted new functions, only accepted PRs that fixed bugs.

## ✨ Feature

- 🚀 The average component size is less than 1KB（min+gzip）.
- 💎 70+ high-quality components, covering mainstream mobile scenes.
- 💪 Written in TypeScript, providing a complete type definition.
- 📝 Provide complete documentation and component examples.
- 🎨 Support theme customization, built-in 700+ theme designers.
- 😎 Support on-demand import and Tree Shaking.
- ⚡️ Support [Vite](https://github.com/3lang3/react-vant-template/tree/main/template/vite) and Parcel@2.
- 🌵 Modern browsers
- 🌝 Support SSR([nextjs](https://github.com/3lang3/react-vant-template/tree/main/next/nextjs), [remix](https://github.com/3lang3/react-vant-template/tree/main/next/remix)).

## 🖥 Environment Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br> Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/a94987f29719142668cdf960b3f624ce1a3c6aa8/src/safari-ios/safari-ios.svg" alt="Safari for iOS" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| --- | --- | --- | --- |

Support modern browsers and Chrome >= 51, iOS >= 10.0.

## 📱 Preview

Scan the QR code on your mobile phone to access the demo:

<img src="https://github.com/3lang3/react-vant/blob/main/public/preview_qrcode.png?raw=true" width="200" />

## 📦 Install

Recommended **pin** version:

```bash
# npm
npm i react-vant-nova --save

# pnpm
pnpm add react-vant-nova
```

## 🚀 Quick start

The following are some code examples of react-vant:

#### Code Snippet:

```jsx
import ReactDOM from 'react-dom';
import { Button } from 'react-vant-nova';

function App() {
  return <Button>Default Button</Button>;
}

ReactDOM.render(<App />, mountNode);
// 🔔 注意：React 19 与 React 18 及以下的导入/渲染方式存在差异，但组件的使用方法同React 18
```

#### Code Examples:

- [Create React App](https://github.com/3lang3/react-vant-template/tree/main/next/cra)
- [Umi](https://github.com/3lang3/react-vant-template/tree/main/next/umijs)
- [Next.js](https://github.com/3lang3/react-vant-template/tree/main/next/nextjs)
- [Remix](https://github.com/3lang3/react-vant-template/tree/main/next/remix)
- [Astro](https://github.com/3lang3/react-vant-template/tree/main/next/astro)
- [Vite](https://github.com/3lang3/react-vant-template/tree/main/next/vite)

For more information, please refer to [QuickStart](https://react-vant.fenewbee.com//guide/quickstart).

## 🤝 交流与支持

- 反馈问题：[GitHub Issues](https://github.com/prayone/react-vant-nova/issues)
- 开发交流：添加微信 wpp_rvn（备注「react-vant-nova」）
- 文档地址：[https://react-vant.fenewbee.com//](https://react-vant.fenewbee.com/)
