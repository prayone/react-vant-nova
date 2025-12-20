import { defineConfig } from '@rcdoc/cli'

export default defineConfig({
  title: 'react vant',
  description: '轻量、可靠的移动端 React 组件库',
  logo: '/logo.svg',
  locales: [
    ['zh', '🇨🇳 中文'],
    ['en', '🇺🇸 English'],
  ],
  navs: {
    zh: [
      {
        title: '首页',
        path: '/react-vant-nova',
        index: true,
      },
      {
        title: '文档',
        path: '/react-vant-nova/guide',
      },
      {
        title: '组件',
        path: '/react-vant-nova/components',
      },
      {
        title: 'Hooks',
        path: '/react-vant-nova/hooks',
      },
      {
        title: 'Vant',
        path: 'https://github.com/youzan/vant',
      },
      {
        title: 'Taroify',
        path: 'https://github.com/mallfoundry/taroify',
      },
    ],
    en: [
      {
        title: 'Home',
        path: '/react-vant-nova/en',
        index: true,
      },
      {
        title: 'Guide',
        path: '/react-vant-nova/en/guide',
      },
      {
        title: 'Components',
        path: '/react-vant-nova/en/components',
      },
      {
        title: 'Hooks',
        path: '/react-vant-nova/en/hooks',
      },
      {
        title: 'Vant',
        path: 'https://github.com/ant-design/ant-design',
      },
      {
        title: 'Taroify',
        path: 'https://github.com/mallfoundry/taroify',
      },
    ],
  },
  menus: {
    '/react-vant-nova/guide': [
      {
        children: [
          '/react-vant-nova/guide/about',
          '/react-vant-nova/guide/quickstart',
          '/react-vant-nova/guide/migrate',
          '/react-vant-nova/guide/theme',
          '/react-vant-nova/guide/advanced-usage',
        ],
      },
    ],
    '/react-vant-nova/components': [
      {
        title: '布局组件',
        children: [
          '/react-vant-nova/components/flex',
          '/react-vant-nova/components/space',
        ],
      },
      {
        title: '基础组件',
        children: [
          '/react-vant-nova/components/button',
          '/react-vant-nova/components/cell',
          '/react-vant-nova/components/config-provider',
          '/react-vant-nova/components/typography',
          '/react-vant-nova/components/icon',
          '/react-vant-nova/components/image',
          '/react-vant-nova/components/popup',
          '/react-vant-nova/components/styles',
          '/react-vant-nova/components/toast',
        ],
      },
      {
        title: '表单组件',
        children: [
          '/react-vant-nova/components/calendar',
          '/react-vant-nova/components/cascader',
          '/react-vant-nova/components/checkbox',
          '/react-vant-nova/components/datetime-picker',
          '/react-vant-nova/components/form',
          '/react-vant-nova/components/input',
          '/react-vant-nova/components/number-keyboard',
          '/react-vant-nova/components/password-input',
          '/react-vant-nova/components/picker',
          '/react-vant-nova/components/radio',
          '/react-vant-nova/components/rate',
          '/react-vant-nova/components/search',
          '/react-vant-nova/components/selector',
          '/react-vant-nova/components/slider',
          '/react-vant-nova/components/stepper',
          '/react-vant-nova/components/switch',
          '/react-vant-nova/components/uploader',
        ],
      },
      {
        title: '反馈组件',
        children: [
          '/react-vant-nova/components/action-sheet',
          '/react-vant-nova/components/dialog',
          '/react-vant-nova/components/dropdown-menu',
          '/react-vant-nova/components/loading',
          '/react-vant-nova/components/notify',
          '/react-vant-nova/components/overlay',
          '/react-vant-nova/components/pull-refresh',
          '/react-vant-nova/components/share-sheet',
          '/react-vant-nova/components/swipe-cell',
        ],
      },
      {
        title: '展示组件',
        children: [
          '/react-vant-nova/components/badge',
          '/react-vant-nova/components/card',
          '/react-vant-nova/components/circle',
          '/react-vant-nova/components/collapse',
          '/react-vant-nova/components/count-down',
          '/react-vant-nova/components/divider',
          '/react-vant-nova/components/empty',
          '/react-vant-nova/components/floating-ball',
          '/react-vant-nova/components/field',
          '/react-vant-nova/components/image-preview',
          '/react-vant-nova/components/lazyload',
          '/react-vant-nova/components/image-preview',
          '/react-vant-nova/components/lazyload',
          '/react-vant-nova/components/list',
          '/react-vant-nova/components/skeleton',
          '/react-vant-nova/components/steps',
          '/react-vant-nova/components/notice-bar',
          '/react-vant-nova/components/popover',
          '/react-vant-nova/components/progress',
          '/react-vant-nova/components/sticky',
          '/react-vant-nova/components/swiper',
          '/react-vant-nova/components/tag',
          '/react-vant-nova/components/water-mark',
          '/react-vant-nova/components/floating-panel',
        ],
      },
      {
        title: '导航组件',
        children: [
          '/react-vant-nova/components/action-bar',
          '/react-vant-nova/components/grid',
          '/react-vant-nova/components/index-bar',
          '/react-vant-nova/components/nav-bar',
          '/react-vant-nova/components/pagination',
          '/react-vant-nova/components/sidebar',
          '/react-vant-nova/components/tabs',
          '/react-vant-nova/components/tabbar',
        ],
      },
      {
        title: '业务组件',
        children: [
          '/react-vant-nova/components/area',
          '/react-vant-nova/components/product-card',
          '/react-vant-nova/components/coupon-list',
          '/react-vant-nova/components/submit-bar',
          '/react-vant-nova/components/sku',
        ],
      },
    ],
    '/react-vant-nova/hooks': [
      {
        children: ['/react-vant-nova/hooks/intro'],
      },
    ],
  },
  site: {
    injectComponentCss: false,
    favicon: '/react-vant-nova/favicon.png',
    github: 'https://github.com/3lang3/react-vant',
    versions: [
      { title: 'v1', path: 'https://react-vant-v1.3lang.dev' },
      { title: 'v2 alpha', path: 'https://react-vant-v2.surge.sh' },
    ],
    themeConfig: {
      simulator: {
        include: [
          '/react-vant-nova/components',
          '/react-vant-nova/en/components',
        ],
        compact: true,
      },
    },
    // algolia: {
    //   appId: 'XTQTEX7VE6',
    //   apiKey: 'ce7bcb03b0899b14a9198b12a717f7c4',
    //   indexName: 'react-vant-nova',
    // },
    sitemap: {
      hostname: 'https://react-vant.3lang.dev',
    },
  },
  resolve: {
    stackblitz: {
      extra: 'import "react-vant/lib/index.css";',
    },
  },
  build: {
    cjs: {
      dist: 'lib',
    },
    entry: './src/components',
    bundleDir: 'bundle',
    style: './style/index.less',
  },
  vite: {
    optimizeDeps: {
      include: [
        '@react-vant/icons',
        'react-transition-group',
        'rc-field-form',
        '@react-spring/web',
        '@use-gesture/react',
      ],
    },
    server: {
      host: true,
    },
    base: '/react-vant-nova',
  },
})
