import{r as d,a as u,j as e}from"./main.929296ee.js";import{eo as i}from"./TreeSelect.6eee9680.js";var c=()=>{const[t,r]=d.exports.useState("1-1");return u("div",{className:"demo-tree-select",children:[e("h2",{children:"\u57FA\u7840\u7528\u6CD5"}),e(i,{treeData:[{title:"\u6D59\u6C5F\u7701",value:"zhejiang",children:[{title:"\u676D\u5DDE\u5E02",value:"1-1"},{title:"\u6E29\u5DDE\u5E02",value:"1-2"},{title:"\u5B81\u6CE2\u5E02",value:"1-3"},{title:"\u4E49\u4E4C\u5E02",value:"1-4"}]},{title:"\u6C5F\u82CF\u7701",value:"jiangsu",children:[{title:"\u5357\u4EAC\u5E02",value:"2-1"},{title:"\u65E0\u9521\u5E02",value:"2-2"},{title:"\u82CF\u5DDE\u5E02",value:"2-3"},{title:"\u5357\u901A\u5E02",value:"2-4"}]},{title:"\u798F\u5EFA\u7701",value:"fujian",children:[{title:"\u798F\u5DDE\u5E02",value:"3-1"},{title:"\u53A6\u95E8\u5E02",value:"3-2"},{title:"\u6CC9\u5DDE\u5E02",value:"3-3"},{title:"\u6F33\u5DDE\u5E02",value:"3-4"}]}],value:t,onChange:l=>{Array.isArray(l)||r(l),console.log("\u9009\u4E2D\u503C:",l)}}),u("p",{style:{marginTop:16},children:["\u5F53\u524D\u9009\u4E2D\u503C: ",t]})]})};const h=`import React, { useState } from 'react'
import { TreeSelect, type TreeSelectNode } from 'react-vant-nova'

import './style.less'

export default () => {
  const [value, setValue] = useState<string | number>('1-1')

  const treeData: TreeSelectNode[] = [
    {
      title: '\u6D59\u6C5F\u7701',
      value: 'zhejiang',
      children: [
        { title: '\u676D\u5DDE\u5E02', value: '1-1' },
        { title: '\u6E29\u5DDE\u5E02', value: '1-2' },
        { title: '\u5B81\u6CE2\u5E02', value: '1-3' },
        { title: '\u4E49\u4E4C\u5E02', value: '1-4' },
      ],
    },
    {
      title: '\u6C5F\u82CF\u7701',
      value: 'jiangsu',
      children: [
        { title: '\u5357\u4EAC\u5E02', value: '2-1' },
        { title: '\u65E0\u9521\u5E02', value: '2-2' },
        { title: '\u82CF\u5DDE\u5E02', value: '2-3' },
        { title: '\u5357\u901A\u5E02', value: '2-4' },
      ],
    },
    {
      title: '\u798F\u5EFA\u7701',
      value: 'fujian',
      children: [
        { title: '\u798F\u5DDE\u5E02', value: '3-1' },
        { title: '\u53A6\u95E8\u5E02', value: '3-2' },
        { title: '\u6CC9\u5DDE\u5E02', value: '3-3' },
        { title: '\u6F33\u5DDE\u5E02', value: '3-4' },
      ],
    },
  ]

  return (
    <div className='demo-tree-select'>
      <h2>\u57FA\u7840\u7528\u6CD5</h2>
      <TreeSelect
        treeData={treeData}
        value={value}
        onChange={val => {
          if (!Array.isArray(val)) {
            setValue(val)
          }
          console.log('\u9009\u4E2D\u503C:', val)
        }}
      />
      <p style={{ marginTop: 16 }}>\u5F53\u524D\u9009\u4E2D\u503C: {value}</p>
    </div>
  )
}
`,E={code:h,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.1.0"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { TreeSelect, type TreeSelectNode } from 'react-vant-nova'

import './style.less'

export default () => {
  const [value, setValue] = useState<string | number>('1-1')

  const treeData: TreeSelectNode[] = [
    {
      title: '\u6D59\u6C5F\u7701',
      value: 'zhejiang',
      children: [
        { title: '\u676D\u5DDE\u5E02', value: '1-1' },
        { title: '\u6E29\u5DDE\u5E02', value: '1-2' },
        { title: '\u5B81\u6CE2\u5E02', value: '1-3' },
        { title: '\u4E49\u4E4C\u5E02', value: '1-4' },
      ],
    },
    {
      title: '\u6C5F\u82CF\u7701',
      value: 'jiangsu',
      children: [
        { title: '\u5357\u4EAC\u5E02', value: '2-1' },
        { title: '\u65E0\u9521\u5E02', value: '2-2' },
        { title: '\u82CF\u5DDE\u5E02', value: '2-3' },
        { title: '\u5357\u901A\u5E02', value: '2-4' },
      ],
    },
    {
      title: '\u798F\u5EFA\u7701',
      value: 'fujian',
      children: [
        { title: '\u798F\u5DDE\u5E02', value: '3-1' },
        { title: '\u53A6\u95E8\u5E02', value: '3-2' },
        { title: '\u6CC9\u5DDE\u5E02', value: '3-3' },
        { title: '\u6F33\u5DDE\u5E02', value: '3-4' },
      ],
    },
  ]

  return (
    <div className='demo-tree-select'>
      <h2>\u57FA\u7840\u7528\u6CD5</h2>
      <TreeSelect
        treeData={treeData}
        value={value}
        onChange={val => {
          if (!Array.isArray(val)) {
            setValue(val)
          }
          console.log('\u9009\u4E2D\u503C:', val)
        }}
      />
      <p style={{ marginTop: 16 }}>\u5F53\u524D\u9009\u4E2D\u503C: {value}</p>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-tree-select {
  padding: 16px;

  h2 {
    margin: 0 0 16px;
    font-size: 16px;
    font-weight: 500;
  }

  p {
    color: #666;
    font-size: 14px;
  }
}
`}},key:"treeselect-basic",meta:{}};var a=()=>{const[t,r]=d.exports.useState(["1-1","2-2"]);return u("div",{className:"demo-tree-select",children:[e("h2",{children:"\u591A\u9009\u6A21\u5F0F"}),e(i,{treeData:[{title:"\u6D59\u6C5F\u7701",value:"zhejiang",children:[{title:"\u676D\u5DDE\u5E02",value:"1-1"},{title:"\u6E29\u5DDE\u5E02",value:"1-2"},{title:"\u5B81\u6CE2\u5E02",value:"1-3"},{title:"\u4E49\u4E4C\u5E02",value:"1-4"}]},{title:"\u6C5F\u82CF\u7701",value:"jiangsu",children:[{title:"\u5357\u4EAC\u5E02",value:"2-1"},{title:"\u65E0\u9521\u5E02",value:"2-2"},{title:"\u82CF\u5DDE\u5E02",value:"2-3"},{title:"\u5357\u901A\u5E02",value:"2-4"}]},{title:"\u798F\u5EFA\u7701",value:"fujian",children:[{title:"\u798F\u5DDE\u5E02",value:"3-1"},{title:"\u53A6\u95E8\u5E02",value:"3-2"},{title:"\u6CC9\u5DDE\u5E02",value:"3-3"},{title:"\u6F33\u5DDE\u5E02",value:"3-4"}]}],value:t,multiple:!0,onChange:l=>{Array.isArray(l)&&r(l),console.log("\u9009\u4E2D\u503C:",l)}}),u("p",{style:{marginTop:16},children:["\u5F53\u524D\u9009\u4E2D\u503C: ",JSON.stringify(t)]})]})};const o=`import React, { useState } from 'react'
import { TreeSelect, type TreeSelectNode } from 'react-vant-nova'
import './style.less'

export default () => {
  const [value, setValue] = useState<Array<string | number>>(['1-1', '2-2'])

  const treeData: TreeSelectNode[] = [
    {
      title: '\u6D59\u6C5F\u7701',
      value: 'zhejiang',
      children: [
        { title: '\u676D\u5DDE\u5E02', value: '1-1' },
        { title: '\u6E29\u5DDE\u5E02', value: '1-2' },
        { title: '\u5B81\u6CE2\u5E02', value: '1-3' },
        { title: '\u4E49\u4E4C\u5E02', value: '1-4' },
      ],
    },
    {
      title: '\u6C5F\u82CF\u7701',
      value: 'jiangsu',
      children: [
        { title: '\u5357\u4EAC\u5E02', value: '2-1' },
        { title: '\u65E0\u9521\u5E02', value: '2-2' },
        { title: '\u82CF\u5DDE\u5E02', value: '2-3' },
        { title: '\u5357\u901A\u5E02', value: '2-4' },
      ],
    },
    {
      title: '\u798F\u5EFA\u7701',
      value: 'fujian',
      children: [
        { title: '\u798F\u5DDE\u5E02', value: '3-1' },
        { title: '\u53A6\u95E8\u5E02', value: '3-2' },
        { title: '\u6CC9\u5DDE\u5E02', value: '3-3' },
        { title: '\u6F33\u5DDE\u5E02', value: '3-4' },
      ],
    },
  ]

  return (
    <div className='demo-tree-select'>
      <h2>\u591A\u9009\u6A21\u5F0F</h2>
      <TreeSelect
        treeData={treeData}
        value={value}
        multiple
        onChange={val => {
          if (Array.isArray(val)) {
            setValue(val)
          }
          console.log('\u9009\u4E2D\u503C:', val)
        }}
      />
      <p style={{ marginTop: 16 }}>\u5F53\u524D\u9009\u4E2D\u503C: {JSON.stringify(value)}</p>
    </div>
  )
}
`,s={code:o,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.1.0"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { TreeSelect, type TreeSelectNode } from 'react-vant-nova'
import './style.less'

export default () => {
  const [value, setValue] = useState<Array<string | number>>(['1-1', '2-2'])

  const treeData: TreeSelectNode[] = [
    {
      title: '\u6D59\u6C5F\u7701',
      value: 'zhejiang',
      children: [
        { title: '\u676D\u5DDE\u5E02', value: '1-1' },
        { title: '\u6E29\u5DDE\u5E02', value: '1-2' },
        { title: '\u5B81\u6CE2\u5E02', value: '1-3' },
        { title: '\u4E49\u4E4C\u5E02', value: '1-4' },
      ],
    },
    {
      title: '\u6C5F\u82CF\u7701',
      value: 'jiangsu',
      children: [
        { title: '\u5357\u4EAC\u5E02', value: '2-1' },
        { title: '\u65E0\u9521\u5E02', value: '2-2' },
        { title: '\u82CF\u5DDE\u5E02', value: '2-3' },
        { title: '\u5357\u901A\u5E02', value: '2-4' },
      ],
    },
    {
      title: '\u798F\u5EFA\u7701',
      value: 'fujian',
      children: [
        { title: '\u798F\u5DDE\u5E02', value: '3-1' },
        { title: '\u53A6\u95E8\u5E02', value: '3-2' },
        { title: '\u6CC9\u5DDE\u5E02', value: '3-3' },
        { title: '\u6F33\u5DDE\u5E02', value: '3-4' },
      ],
    },
  ]

  return (
    <div className='demo-tree-select'>
      <h2>\u591A\u9009\u6A21\u5F0F</h2>
      <TreeSelect
        treeData={treeData}
        value={value}
        multiple
        onChange={val => {
          if (Array.isArray(val)) {
            setValue(val)
          }
          console.log('\u9009\u4E2D\u503C:', val)
        }}
      />
      <p style={{ marginTop: 16 }}>\u5F53\u524D\u9009\u4E2D\u503C: {JSON.stringify(value)}</p>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-tree-select {
  padding: 16px;

  h2 {
    margin: 0 0 16px;
    font-size: 16px;
    font-weight: 500;
  }

  p {
    color: #666;
    font-size: 14px;
  }
}
`}},key:"treeselect-multiple",meta:{}},v=function({previewer:t=()=>null,api:r=()=>null}){const n=t;return e("div",{children:u("div",{children:[e("h1",{id:"treeselect-\u6811\u5F62\u9009\u62E9","data-anchor":"treeselect-\u6811\u5F62\u9009\u62E9",children:"TreeSelect \u6811\u5F62\u9009\u62E9"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u4ECE\u4E00\u7EC4\u5C42\u7EA7\u7ED3\u6784\u6570\u636E\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u652F\u6301\u5355\u9009\u548C\u591A\u9009\u6A21\u5F0F\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(n,{code:"import { TreeSelect } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("div",{children:e(n,{...E,children:e(c,{})})}),e("h3",{id:"\u591A\u9009\u6A21\u5F0F","data-anchor":"\u591A\u9009\u6A21\u5F0F",children:"\u591A\u9009\u6A21\u5F0F"}),e("div",{children:e(n,{...s,children:e(a,{})})}),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u9009\u4E2D\u7684\u503C"}),u("td",{children:[e("code",{children:"string"})," | ",e("code",{children:"number"})," | ",e("code",{children:"string[]"})," | ",e("code",{children:"number[]"})]}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C"}),u("td",{children:[e("code",{children:"string"})," | ",e("code",{children:"number"})," | ",e("code",{children:"string[]"})," | ",e("code",{children:"number[]"})]}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"treeData"}),e("td",{children:"\u6811\u5F62\u6570\u636E"}),e("td",{children:e("code",{children:"TreeSelectNode[]"})}),e("td",{children:e("code",{children:"[]"})})]}),u("tr",{children:[e("td",{children:"fieldNames"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5B57\u6BB5"}),e("td",{children:e("code",{children:"TreeSelectFieldNames"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"placeholder"}),e("td",{children:"\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57"}),e("td",{children:e("code",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"multiple"}),e("td",{children:"\u662F\u5426\u652F\u6301\u591A\u9009"}),e("td",{children:e("code",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528"}),e("td",{children:e("code",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"height"}),e("td",{children:"\u9AD8\u5EA6"}),u("td",{children:[e("code",{children:"number"})," | ",e("code",{children:"string"})]}),e("td",{children:e("code",{children:"272"})})]}),u("tr",{children:[e("td",{children:"navWidth"}),e("td",{children:"\u5DE6\u4FA7\u5BFC\u822A\u5BBD\u5EA6"}),u("td",{children:[e("code",{children:"number"})," | ",e("code",{children:"string"})]}),e("td",{children:e("code",{children:"80"})})]}),u("tr",{children:[e("td",{children:"activeIndex"}),e("td",{children:"\u5DE6\u4FA7\u5BFC\u822A\u5F53\u524D\u9009\u4E2D\u9879\u7684\u7D22\u5F15"}),e("td",{children:e("code",{children:"number"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"defaultActiveIndex"}),e("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u5DE6\u4FA7\u5BFC\u822A\u7D22\u5F15"}),e("td",{children:e("code",{children:"number"})}),e("td",{children:e("code",{children:"0"})})]}),u("tr",{children:[e("td",{children:"navStyle"}),e("td",{children:"\u5DE6\u4FA7\u5BFC\u822A\u6837\u5F0F"}),e("td",{children:e("code",{children:"CSSProperties"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"contentStyle"}),e("td",{children:"\u53F3\u4FA7\u5185\u5BB9\u6837\u5F0F"}),e("td",{children:e("code",{children:"CSSProperties"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"navClassName"}),e("td",{children:"\u5DE6\u4FA7\u5BFC\u822A\u7C7B\u540D"}),e("td",{children:e("code",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"contentClassName"}),e("td",{children:"\u53F3\u4FA7\u5185\u5BB9\u7C7B\u540D"}),e("td",{children:e("code",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"contentRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u53F3\u4FA7\u533A\u57DF\u5185\u5BB9"}),e("td",{children:e("code",{children:"(item: TreeSelectNode) => ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u9009\u4E2D\u9879\u6539\u53D8\u65F6\u89E6\u53D1"}),e("td",{children:e("code",{children:"(value, selectedNodes) => void"})})]}),u("tr",{children:[e("td",{children:"onNavClick"}),e("td",{children:"\u70B9\u51FB\u5DE6\u4FA7\u5BFC\u822A\u65F6\u89E6\u53D1"}),e("td",{children:e("code",{children:"(index: number) => void"})})]})]})]}),e("h2",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("h3",{id:"treeselectnode","data-anchor":"treeselectnode",children:"TreeSelectNode"}),e(n,{code:`type TreeSelectNode = {
  title?: ReactNode
  value?: string | number
  key?: string | number
  children?: TreeSelectNode[]
  disabled?: boolean
  isLeaf?: boolean
  icon?: ReactNode
  className?: string
  style?: CSSProperties
}`,lang:"ts"}),e("h3",{id:"treeselectfieldnames","data-anchor":"treeselectfieldnames",children:"TreeSelectFieldNames"}),e(n,{code:`type TreeSelectFieldNames = {
  title?: string
  value?: string
  key?: string
  children?: string
}`,lang:"ts"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-tree-select-font-size"}),e("td",{children:"var(--rv-font-size-md)"}),e("td",{children:"\u5B57\u4F53\u5927\u5C0F"})]}),u("tr",{children:[e("td",{children:"--rv-tree-select-nav-width"}),e("td",{children:"80px"}),e("td",{children:"\u5DE6\u4FA7\u5BFC\u822A\u5BBD\u5EA6"})]}),u("tr",{children:[e("td",{children:"--rv-tree-select-nav-background-color"}),e("td",{children:"var(--rv-background-color)"}),e("td",{children:"\u5DE6\u4FA7\u5BFC\u822A\u80CC\u666F\u8272"})]}),u("tr",{children:[e("td",{children:"--rv-tree-select-content-background-color"}),e("td",{children:"var(--rv-white)"}),e("td",{children:"\u53F3\u4FA7\u5185\u5BB9\u80CC\u666F\u8272"})]}),u("tr",{children:[e("td",{children:"--rv-tree-select-nav-item-padding"}),e("td",{children:"14px var(--rv-padding-sm)"}),e("td",{children:"\u5BFC\u822A\u9879\u5185\u8FB9\u8DDD"})]}),u("tr",{children:[e("td",{children:"--rv-tree-select-item-height"}),e("td",{children:"48px"}),e("td",{children:"\u5185\u5BB9\u9879\u9AD8\u5EA6"})]}),u("tr",{children:[e("td",{children:"--rv-tree-select-item-active-color"}),e("td",{children:"var(--rv-red)"}),e("td",{children:"\u6FC0\u6D3B\u72B6\u6001\u989C\u8272"})]}),u("tr",{children:[e("td",{children:"--rv-tree-select-item-disabled-color"}),e("td",{children:"var(--rv-gray-5)"}),e("td",{children:"\u7981\u7528\u72B6\u6001\u989C\u8272"})]}),u("tr",{children:[e("td",{children:"--rv-tree-select-item-selected-size"}),e("td",{children:"16px"}),e("td",{children:"\u9009\u4E2D\u56FE\u6807\u5927\u5C0F"})]}),u("tr",{children:[e("td",{children:"--rv-tree-select-height"}),e("td",{children:"300px"}),e("td",{children:"\u7EC4\u4EF6\u9ED8\u8BA4\u9AD8\u5EA6"})]})]})]})]})})},D=[{Component:c,key:"treeselect-basic"},{Component:a,key:"treeselect-multiple"}],F=void 0,C=[{depth:1,text:"TreeSelect \u6811\u5F62\u9009\u62E9",id:"treeselect-\u6811\u5F62\u9009\u62E9"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u591A\u9009\u6A21\u5F0F",id:"\u591A\u9009\u6A21\u5F0F"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:2,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:3,text:"TreeSelectNode",id:"treeselectnode"},{depth:3,text:"TreeSelectFieldNames",id:"treeselectfieldnames"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],p="/src/components/treeSelect/README.md",A="TreeSelect \u6811\u5F62\u9009\u62E9",m="1773124895000";var y=t=>t.children({MdContent:v,demos:D,frontmatter:F,slugs:C,filePath:p,title:A,updatedTime:m});export{v as MdContent,y as default,D as demos,p as filePath,F as frontmatter,C as slugs,A as title,m as updatedTime};
