import{r as c,a as u,F as d,j as e}from"./main.80adbde3.js";import{C as o,dS as l}from"./FloatingPanel.c796e2d9.js";const F=[{name:"\u5FAE\u4FE1",icon:"wechat"},{name:"\u5FAE\u535A",icon:"weibo"},{name:"\u590D\u5236\u94FE\u63A5",icon:"link"},{name:"\u5206\u4EAB\u6D77\u62A5",icon:"poster"},{name:"\u4E8C\u7EF4\u7801",icon:"qrcode"}];var h=()=>{const[t,n]=c.exports.useState(!1);return u(d,{children:[e(o,{isLink:!0,title:"\u663E\u793A\u5206\u4EAB\u9762\u677F",onClick:()=>n(!0)}),e(l,{visible:t,options:F,title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",onCancel:()=>n(!1),onSelect:(i,r)=>{console.log("option",i),console.log("index",r),n(!1)}})]})};const p=`import React, { useState } from 'react'
import { ShareSheet, Cell } from 'react-vant-nova'

const options = [
  { name: '\u5FAE\u4FE1', icon: 'wechat' },
  { name: '\u5FAE\u535A', icon: 'weibo' },
  { name: '\u590D\u5236\u94FE\u63A5', icon: 'link' },
  { name: '\u5206\u4EAB\u6D77\u62A5', icon: 'poster' },
  { name: '\u4E8C\u7EF4\u7801', icon: 'qrcode' },
]

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell isLink title='\u663E\u793A\u5206\u4EAB\u9762\u677F' onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title='\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB'
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option)
          console.log('index', index)
          setVisible(false)
        }}
      />
    </>
  )
}
`,C={code:p,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { ShareSheet, Cell } from 'react-vant-nova'

const options = [
  { name: '\u5FAE\u4FE1', icon: 'wechat' },
  { name: '\u5FAE\u535A', icon: 'weibo' },
  { name: '\u590D\u5236\u94FE\u63A5', icon: 'link' },
  { name: '\u5206\u4EAB\u6D77\u62A5', icon: 'poster' },
  { name: '\u4E8C\u7EF4\u7801', icon: 'qrcode' },
]

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell isLink title='\u663E\u793A\u5206\u4EAB\u9762\u677F' onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title='\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB'
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option)
          console.log('index', index)
          setVisible(false)
        }}
      />
    </>
  )
}
`}},key:"share-sheet-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},A=[[{name:"\u5FAE\u4FE1",icon:"wechat"},{name:"\u670B\u53CB\u5708",icon:"wechat-moments"},{name:"\u5FAE\u535A",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"\u590D\u5236\u94FE\u63A5",icon:"link"},{name:"\u5206\u4EAB\u6D77\u62A5",icon:"poster"},{name:"\u4E8C\u7EF4\u7801",icon:"qrcode"},{name:"\u5C0F\u7A0B\u5E8F\u7801",icon:"weapp-qrcode"}]];var s=()=>{const[t,n]=c.exports.useState(!1);return u(d,{children:[e(o,{isLink:!0,title:"\u663E\u793A\u5206\u4EAB\u9762\u677F",onClick:()=>n(!0)}),e(l,{visible:t,options:A,title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",onCancel:()=>n(!1),onSelect:(i,r)=>{console.log("option",i),console.log("index",r),n(!1)}})]})};const m=`import React, { useState } from 'react'
import { ShareSheet, Cell } from 'react-vant-nova'

const options = [
  [
    { name: '\u5FAE\u4FE1', icon: 'wechat' },
    { name: '\u670B\u53CB\u5708', icon: 'wechat-moments' },
    { name: '\u5FAE\u535A', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '\u590D\u5236\u94FE\u63A5', icon: 'link' },
    { name: '\u5206\u4EAB\u6D77\u62A5', icon: 'poster' },
    { name: '\u4E8C\u7EF4\u7801', icon: 'qrcode' },
    { name: '\u5C0F\u7A0B\u5E8F\u7801', icon: 'weapp-qrcode' },
  ],
]

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell isLink title='\u663E\u793A\u5206\u4EAB\u9762\u677F' onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title='\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB'
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option)
          console.log('index', index)
          setVisible(false)
        }}
      />
    </>
  )
}
`,B={code:m,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { ShareSheet, Cell } from 'react-vant-nova'

const options = [
  [
    { name: '\u5FAE\u4FE1', icon: 'wechat' },
    { name: '\u670B\u53CB\u5708', icon: 'wechat-moments' },
    { name: '\u5FAE\u535A', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '\u590D\u5236\u94FE\u63A5', icon: 'link' },
    { name: '\u5206\u4EAB\u6D77\u62A5', icon: 'poster' },
    { name: '\u4E8C\u7EF4\u7801', icon: 'qrcode' },
    { name: '\u5C0F\u7A0B\u5E8F\u7801', icon: 'weapp-qrcode' },
  ],
]

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell isLink title='\u663E\u793A\u5206\u4EAB\u9762\u677F' onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title='\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB'
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option)
          console.log('index', index)
          setVisible(false)
        }}
      />
    </>
  )
}
`}},key:"share-sheet-mulit",meta:{title:"\u5C55\u793A\u591A\u884C\u9009\u9879"}},v=[{name:"\u540D\u79F0",icon:"https://img.yzcdn.cn/vant/custom-icon-fire.png"},{name:"\u540D\u79F0",icon:"https://img.yzcdn.cn/vant/custom-icon-light.png"},{name:"\u540D\u79F0",icon:"https://img.yzcdn.cn/vant/custom-icon-water.png"}];var a=()=>{const[t,n]=c.exports.useState(!1);return u(d,{children:[e(o,{isLink:!0,title:"\u663E\u793A\u5206\u4EAB\u9762\u677F",onClick:()=>n(!0)}),e(l,{visible:t,options:v,title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",onCancel:()=>n(!1),onSelect:(i,r)=>{console.log("option",i),console.log("index",r),n(!1)}})]})};const D=`import React, { useState } from 'react'
import { ShareSheet, Cell } from 'react-vant-nova'

const options = [
  {
    name: '\u540D\u79F0',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
  },
  {
    name: '\u540D\u79F0',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
  },
  {
    name: '\u540D\u79F0',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
  },
]

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell isLink title='\u663E\u793A\u5206\u4EAB\u9762\u677F' onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title='\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB'
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option)
          console.log('index', index)
          setVisible(false)
        }}
      />
    </>
  )
}
`,b={code:D,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { ShareSheet, Cell } from 'react-vant-nova'

const options = [
  {
    name: '\u540D\u79F0',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
  },
  {
    name: '\u540D\u79F0',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
  },
  {
    name: '\u540D\u79F0',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
  },
]

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell isLink title='\u663E\u793A\u5206\u4EAB\u9762\u677F' onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title='\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB'
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option)
          console.log('index', index)
          setVisible(false)
        }}
      />
    </>
  )
}
`}},key:"share-sheet-custom",meta:{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"}},f=[{name:"\u5FAE\u4FE1",icon:"wechat"},{name:"\u5FAE\u535A",icon:"weibo"},{name:"\u590D\u5236\u94FE\u63A5",icon:"link",description:"\u63CF\u8FF0\u4FE1\u606F"},{name:"\u5206\u4EAB\u6D77\u62A5",icon:"poster"},{name:"\u4E8C\u7EF4\u7801",icon:"qrcode"}];var E=()=>{const[t,n]=c.exports.useState(!1);return u(d,{children:[e(o,{isLink:!0,title:"\u663E\u793A\u5206\u4EAB\u9762\u677F",onClick:()=>n(!0)}),e(l,{visible:t,options:f,title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",description:"\u63CF\u8FF0\u4FE1\u606F",onCancel:()=>n(!1),onSelect:(i,r)=>{console.log("option",i),console.log("index",r),n(!1)}})]})};const g=`import React, { useState } from 'react'
import { Cell, ShareSheet } from 'react-vant-nova'

const options = [
  { name: '\u5FAE\u4FE1', icon: 'wechat' },
  { name: '\u5FAE\u535A', icon: 'weibo' },
  { name: '\u590D\u5236\u94FE\u63A5', icon: 'link', description: '\u63CF\u8FF0\u4FE1\u606F' },
  { name: '\u5206\u4EAB\u6D77\u62A5', icon: 'poster' },
  { name: '\u4E8C\u7EF4\u7801', icon: 'qrcode' },
]

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell isLink title='\u663E\u793A\u5206\u4EAB\u9762\u677F' onClick={() => setVisible(true)} />
      <ShareSheet
        visible={visible}
        options={options}
        title='\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB'
        description='\u63CF\u8FF0\u4FE1\u606F'
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option)
          console.log('index', index)
          setVisible(false)
        }}
      />
    </>
  )
}
`,S={code:g,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { Cell, ShareSheet } from 'react-vant-nova'

const options = [
  { name: '\u5FAE\u4FE1', icon: 'wechat' },
  { name: '\u5FAE\u535A', icon: 'weibo' },
  { name: '\u590D\u5236\u94FE\u63A5', icon: 'link', description: '\u63CF\u8FF0\u4FE1\u606F' },
  { name: '\u5206\u4EAB\u6D77\u62A5', icon: 'poster' },
  { name: '\u4E8C\u7EF4\u7801', icon: 'qrcode' },
]

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell isLink title='\u663E\u793A\u5206\u4EAB\u9762\u677F' onClick={() => setVisible(true)} />
      <ShareSheet
        visible={visible}
        options={options}
        title='\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB'
        description='\u63CF\u8FF0\u4FE1\u606F'
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option)
          console.log('index', index)
          setVisible(false)
        }}
      />
    </>
  )
}
`}},key:"share-sheet-description",meta:{title:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"}},x=function({previewer:t=()=>null,api:n=()=>null}){const i=t;return e("div",{children:u("div",{children:[e("h1",{id:"","data-anchor":"",children:"ShareSheet \u5206\u4EAB\u9762\u677F"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5E95\u90E8\u5F39\u8D77\u7684\u5206\u4EAB\u9762\u677F\uFF0C\u7528\u4E8E\u5C55\u793A\u5404\u5206\u4EAB\u6E20\u9053\u5BF9\u5E94\u7684\u64CD\u4F5C\u6309\u94AE\uFF0C\u4E0D\u542B\u5177\u4F53\u7684\u5206\u4EAB\u903B\u8F91\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(i,{code:"import { ShareSheet } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:["\u5206\u4EAB\u9762\u677F\u901A\u8FC7 ",e("code",{children:"options"})," \u5C5E\u6027\u6765\u5B9A\u4E49\u5206\u4EAB\u9009\u9879\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u683C\u5F0F\u89C1\u6587\u6863\u4E0B\u65B9\u8868\u683C\u3002"]}),e(i,{...C,children:e(h,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u5C55\u793A\u591A\u884C\u9009\u9879"}),u("p",{children:["\u5F53\u5206\u4EAB\u9009\u9879\u7684\u6570\u91CF\u8F83\u591A\u65F6\uFF0C\u53EF\u4EE5\u5C06 ",e("code",{children:"options"})," \u5B9A\u4E49\u4E3A\u6570\u7EC4\u5D4C\u5957\u7684\u683C\u5F0F\uFF0C\u6BCF\u4E2A\u5B50\u6570\u7EC4\u4F1A\u4F5C\u4E3A\u4E00\u884C\u9009\u9879\u5C55\u793A\u3002"]}),e(i,{...B,children:e(s,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u81EA\u5B9A\u4E49\u56FE\u6807"}),u("p",{children:["\u9664\u4E86\u4F7F\u7528\u5185\u7F6E\u7684\u51E0\u79CD\u56FE\u6807\u5916\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 ",e("code",{children:"icon"})," \u4E2D\u4F20\u5165\u56FE\u7247 URL \u6765\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u56FE\u6807\u3002"]}),e(i,{...b,children:e(a,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"description"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u9898\u4E0B\u65B9\u7684\u63CF\u8FF0\u6587\u5B57, \u5728 ",e("code",{children:"options"})," \u5185\u8BBE\u7F6E ",e("code",{children:"description"})," \u5C5E\u6027\u53EF\u4EE5\u6DFB\u52A0\u5206\u4EAB\u9009\u9879\u63CF\u8FF0\u3002"]}),e(i,{...S,children:e(E,{})}),e("h2",{id:"-8","data-anchor":"-8",children:"API"}),e("h3",{id:"-9","data-anchor":"-9",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"visible"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5206\u4EAB\u9762\u677F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"options"}),e("td",{children:"\u5206\u4EAB\u9009\u9879"}),e("td",{children:e("em",{children:"Option[]"})}),e("td",{children:e("code",{children:"[]"})})]}),u("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u9876\u90E8\u6807\u9898"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"cancelText"}),e("td",{children:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57\uFF0C\u4F20\u5165\u7A7A\u5B57\u7B26\u4E32\u53EF\u4EE5\u9690\u85CF\u6309\u94AE"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"'\u53D6\u6D88'"})})]}),u("tr",{children:[e("td",{children:"description"}),e("td",{children:"\u6807\u9898\u4E0B\u65B9\u7684\u8F85\u52A9\u63CF\u8FF0\u6587\u5B57"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"duration"}),e("td",{children:"\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0.3"})})]}),u("tr",{children:[e("td",{children:"overlay"}),e("td",{children:"\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"overlayClass"}),e("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"overlayStyle"}),e("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F"}),e("td",{children:e("em",{children:"CSSProperties"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"lockScroll"}),e("td",{children:"\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"closeOnPopstate"}),e("td",{children:"\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"closeOnClickOverlay"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"safeAreaInsetBottom"}),u("td",{children:["\u662F\u5426\u5F00\u542F",e("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h3",{id:"-10","data-anchor":"-10",children:"Option \u6570\u636E\u7ED3\u6784"}),u("p",{children:[e("code",{children:"options"})," \u5C5E\u6027\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u5217\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u952E\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u5206\u4EAB\u6E20\u9053\u540D\u79F0"}),e("td",{children:e("em",{children:"string"})})]}),u("tr",{children:[e("td",{children:"description"}),e("td",{children:"\u5206\u4EAB\u9009\u9879\u63CF\u8FF0"}),e("td",{children:e("em",{children:"string"})})]}),u("tr",{children:[e("td",{children:"icon"}),u("td",{children:["\u56FE\u6807\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"wechat"})," ",e("code",{children:"weibo"})," ",e("code",{children:"qq"})," ",e("code",{children:"link"})," ",e("code",{children:"qrcode"})," ",e("code",{children:"poster"})," ",e("code",{children:"weapp-qrcode"})," ",e("code",{children:"wechat-moments"})," \u6216\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u652F\u6301\u4F20\u5165\u56FE\u7247 URL"]}),e("td",{children:e("em",{children:"string| ReactNode"})})]}),u("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u4EAB\u9009\u9879\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})})]})]})]}),e("h3",{id:"-11","data-anchor":"-11",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onSelect"}),e("td",{children:"\u70B9\u51FB\u5206\u4EAB\u9009\u9879\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"option: Option, index: number"})})]}),u("tr",{children:[e("td",{children:"onCancel"}),e("td",{children:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-12","data-anchor":"-12",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-13","data-anchor":"-13",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-share-sheet-header-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-sm) var(--rv-padding-md) var(--rv-padding-base)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-title-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-title-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-description-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-description-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-description-line-height"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-icon-size"}),e("td",{children:e("em",{children:"48px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-option-name-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-option-name-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-option-description-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-option-description-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-cancel-button-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-lg)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-cancel-button-height"}),e("td",{children:e("em",{children:"48px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-share-sheet-cancel-button-background"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-14","data-anchor":"-14",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"-15","data-anchor":"-15",children:"\u5982\u4F55\u5B9E\u73B0\u5206\u4EAB\u903B\u8F91\uFF1F"}),e("p",{children:"\u5728\u4E0D\u540C\u7684 App \u6216\u6D4F\u89C8\u5668\u4E2D\uFF0C\u5B58\u5728\u5404\u5F0F\u5404\u6837\u7684\u5206\u4EAB\u63A5\u53E3\u6216\u5206\u4EAB\u65B9\u5F0F\uFF0C\u56E0\u6B64 ShareSheet \u7EC4\u4EF6\u4E0D\u63D0\u4F9B\u5177\u4F53\u7684\u5206\u4EAB\u903B\u8F91\uFF0C\u9700\u8981\u5F00\u53D1\u8005\u6839\u636E\u4E1A\u52A1\u573A\u666F\u81EA\u884C\u5B9E\u73B0\u3002"}),e("h4",{id:"-16","data-anchor":"-16",children:"\u5FAE\u4FE1\u5185\u5206\u4EAB"}),e("p",{children:"\u7531\u4E8E\u5FAE\u4FE1\u672A\u63D0\u4F9B\u5206\u4EAB\u76F8\u5173\u7684 API\uFF0C\u9700\u8981\u5F15\u5BFC\u7528\u6237\u70B9\u51FB\u53F3\u4E0A\u89D2\u8FDB\u884C\u5206\u4EAB\u3002"}),e("h4",{id:"-17","data-anchor":"-17",children:"App \u5185\u5206\u4EAB"}),e("p",{children:"\u53EF\u4EE5\u901A\u8FC7 JSBridge \u8C03\u7528\u539F\u751F\u5E94\u7528\u7684 SDK \u8FDB\u884C\u5206\u4EAB\u3002"}),e("h4",{id:"-18","data-anchor":"-18",children:"\u5206\u4EAB\u6D77\u62A5\u6216\u4E8C\u7EF4\u7801"}),u("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("a",{href:"/components/popup",children:"Popup"})," \u7EC4\u4EF6\u4EE5\u5F39\u5C42\u7684\u5F62\u5F0F\u5C55\u793A\u56FE\u7247\uFF0C\u7136\u540E\u5F15\u5BFC\u7528\u6237\u4FDD\u5B58\u56FE\u7247\u8FDB\u884C\u5206\u4EAB\u3002"]})]})})},k=[{Component:h,key:"share-sheet-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:s,key:"share-sheet-mulit",title:"\u5C55\u793A\u591A\u884C\u9009\u9879"},{Component:a,key:"share-sheet-custom",title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{Component:E,key:"share-sheet-description",title:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"}],y=void 0,w=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:2,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:2,id:"-12"},{depth:3,id:"-13"},{depth:2,id:"-14"},{depth:3,id:"-15"},{depth:4,id:"-16"},{depth:4,id:"-17"},{depth:4,id:"-18"}],V="/src/components/share-sheet/README.md",P="undefined",_="1766203394000";var R=t=>t.children({MdContent:x,demos:k,frontmatter:y,slugs:w,filePath:V,title:P,updatedTime:_});export{x as MdContent,R as default,k as demos,V as filePath,y as frontmatter,w as slugs,P as title,_ as updatedTime};
