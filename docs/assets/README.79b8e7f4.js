import{r as o,a as n,j as e}from"./main.a88292eb.js";import{dN as u,C as c,d9 as a}from"./FloatingPanel.3fa823e5.js";const i=[{text:"\u5168\u90E8\u5546\u54C1",value:0},{text:"\u65B0\u6B3E\u5546\u54C1",value:1},{text:"\u6D3B\u52A8\u5546\u54C1",value:2}],l=[{text:"\u9ED8\u8BA4\u6392\u5E8F",value:"a"},{text:"\u597D\u8BC4\u6392\u5E8F",value:"b"},{text:"\u9500\u91CF\u6392\u5E8F",value:"c"}];var h=()=>{const[d,r]=o.exports.useState({});return n(u,{value:d,onChange:t=>r(t),children:[e(u.Item,{name:"value1",options:i}),e(u.Item,{name:"value2",options:l})]})};const D=`import React, { useState } from 'react'
import { DropdownMenu } from 'react-vant-nova'
import { option1, option2 } from './options'

export default () => {
  const [value, setValue] = useState<Record<string, string | number>>({})

  return (
    <DropdownMenu value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item name='value1' options={option1} />
      <DropdownMenu.Item name='value2' options={option2} />
    </DropdownMenu>
  )
}
`,E={code:D,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { DropdownMenu } from 'react-vant-nova'
import { option1, option2 } from './options'

export default () => {
  const [value, setValue] = useState<Record<string, string | number>>({})

  return (
    <DropdownMenu value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item name='value1' options={option1} />
      <DropdownMenu.Item name='value2' options={option2} />
    </DropdownMenu>
  )
}
`},"options.tsx":{type:"FILE",value:`export const option1 = [
  { text: '\u5168\u90E8\u5546\u54C1', value: 0 },
  { text: '\u65B0\u6B3E\u5546\u54C1', value: 1 },
  { text: '\u6D3B\u52A8\u5546\u54C1', value: 2 },
]
export const option2 = [
  { text: '\u9ED8\u8BA4\u6392\u5E8F', value: 'a' },
  { text: '\u597D\u8BC4\u6392\u5E8F', value: 'b' },
  { text: '\u9500\u91CF\u6392\u5E8F', value: 'c' },
]
`}},key:"dropdown-menu-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var p=()=>{const[d,r]=o.exports.useState({});return n(u,{value:d,onChange:t=>r(t),children:[e(u.Item,{name:"value1",options:i}),n(u.Item,{title:"\u7B5B\u9009",name:"value2",children:[e(c,{center:!0,title:"\u5305\u90AE",rightIcon:e(a,{size:24})}),e(c,{center:!0,title:"\u56E2\u8D2D",rightIcon:e(a,{size:24})})]})]})};const C=`import React, { useState } from 'react'
import { DropdownMenu, Cell, Switch } from 'react-vant-nova'
import { option1 } from './options'

export default () => {
  const [value, setValue] = useState<Record<string, string | number>>({})

  return (
    <DropdownMenu value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item name='value1' options={option1} />
      <DropdownMenu.Item title='\u7B5B\u9009' name='value2'>
        <Cell center title='\u5305\u90AE' rightIcon={<Switch size={24} />} />
        <Cell center title='\u56E2\u8D2D' rightIcon={<Switch size={24} />} />
      </DropdownMenu.Item>
    </DropdownMenu>
  )
}
`,F={code:C,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { DropdownMenu, Cell, Switch } from 'react-vant-nova'
import { option1 } from './options'

export default () => {
  const [value, setValue] = useState<Record<string, string | number>>({})

  return (
    <DropdownMenu value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item name='value1' options={option1} />
      <DropdownMenu.Item title='\u7B5B\u9009' name='value2'>
        <Cell center title='\u5305\u90AE' rightIcon={<Switch size={24} />} />
        <Cell center title='\u56E2\u8D2D' rightIcon={<Switch size={24} />} />
      </DropdownMenu.Item>
    </DropdownMenu>
  )
}
`},"options.tsx":{type:"FILE",value:`export const option1 = [
  { text: '\u5168\u90E8\u5546\u54C1', value: 0 },
  { text: '\u65B0\u6B3E\u5546\u54C1', value: 1 },
  { text: '\u6D3B\u52A8\u5546\u54C1', value: 2 },
]
export const option2 = [
  { text: '\u9ED8\u8BA4\u6392\u5E8F', value: 'a' },
  { text: '\u597D\u8BC4\u6392\u5E8F', value: 'b' },
  { text: '\u9500\u91CF\u6392\u5E8F', value: 'c' },
]
`}},key:"dropdown-menu-custom",meta:{title:"\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9"}};var s=()=>{const[d,r]=o.exports.useState({});return n(u,{activeColor:"#f44336",value:d,onChange:t=>r(t),children:[e(u.Item,{name:"value1",options:i}),e(u.Item,{name:"value2",options:l})]})};const B=`import React, { useState } from 'react'
import { DropdownMenu } from 'react-vant-nova'
import { option1, option2 } from './options'

export default () => {
  const [value, setValue] = useState<Record<string, string | number>>({})

  return (
    <DropdownMenu
      activeColor='#f44336'
      value={value}
      onChange={v => setValue(v)}
    >
      <DropdownMenu.Item name='value1' options={option1} />
      <DropdownMenu.Item name='value2' options={option2} />
    </DropdownMenu>
  )
}
`,w={code:B,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { DropdownMenu } from 'react-vant-nova'
import { option1, option2 } from './options'

export default () => {
  const [value, setValue] = useState<Record<string, string | number>>({})

  return (
    <DropdownMenu
      activeColor='#f44336'
      value={value}
      onChange={v => setValue(v)}
    >
      <DropdownMenu.Item name='value1' options={option1} />
      <DropdownMenu.Item name='value2' options={option2} />
    </DropdownMenu>
  )
}
`},"options.tsx":{type:"FILE",value:`export const option1 = [
  { text: '\u5168\u90E8\u5546\u54C1', value: 0 },
  { text: '\u65B0\u6B3E\u5546\u54C1', value: 1 },
  { text: '\u6D3B\u52A8\u5546\u54C1', value: 2 },
]
export const option2 = [
  { text: '\u9ED8\u8BA4\u6392\u5E8F', value: 'a' },
  { text: '\u597D\u8BC4\u6392\u5E8F', value: 'b' },
  { text: '\u9500\u91CF\u6392\u5E8F', value: 'c' },
]
`}},key:"dropdown-menu-color",meta:{title:"\u81EA\u5B9A\u4E49\u9AD8\u4EAE\u989C\u8272"}};var v=()=>{const[d,r]=o.exports.useState({});return n(u,{direction:"up",value:d,onChange:t=>r(t),children:[e(u.Item,{name:"value1",options:i}),e(u.Item,{name:"value2",options:l})]})};const x=`import React, { useState } from 'react'
import { DropdownMenu } from 'react-vant-nova'
import { option1, option2 } from './options'

export default () => {
  const [value, setValue] = useState<Record<string, string | number>>({})
  return (
    <DropdownMenu direction='up' value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item name='value1' options={option1} />
      <DropdownMenu.Item name='value2' options={option2} />
    </DropdownMenu>
  )
}
`,M={code:x,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { DropdownMenu } from 'react-vant-nova'
import { option1, option2 } from './options'

export default () => {
  const [value, setValue] = useState<Record<string, string | number>>({})
  return (
    <DropdownMenu direction='up' value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item name='value1' options={option1} />
      <DropdownMenu.Item name='value2' options={option2} />
    </DropdownMenu>
  )
}
`},"options.tsx":{type:"FILE",value:`export const option1 = [
  { text: '\u5168\u90E8\u5546\u54C1', value: 0 },
  { text: '\u65B0\u6B3E\u5546\u54C1', value: 1 },
  { text: '\u6D3B\u52A8\u5546\u54C1', value: 2 },
]
export const option2 = [
  { text: '\u9ED8\u8BA4\u6392\u5E8F', value: 'a' },
  { text: '\u597D\u8BC4\u6392\u5E8F', value: 'b' },
  { text: '\u9500\u91CF\u6392\u5E8F', value: 'c' },
]
`}},key:"dropdown-menu-direction",meta:{title:"\u5411\u4E0A\u5C55\u5F00"}};var m=()=>{const[d,r]=o.exports.useState({});return n(u,{value:d,onChange:t=>r(t),children:[e(u.Item,{disabled:!0,name:"value1",options:i}),e(u.Item,{disabled:!0,name:"value2",options:l})]})};const g=`import React, { useState } from 'react'
import { DropdownMenu } from 'react-vant-nova'
import { option1, option2 } from './options'

export default () => {
  const [value, setValue] = useState<Record<string, string | number>>({})
  return (
    <DropdownMenu value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item disabled name='value1' options={option1} />
      <DropdownMenu.Item disabled name='value2' options={option2} />
    </DropdownMenu>
  )
}
`,f={code:g,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { DropdownMenu } from 'react-vant-nova'
import { option1, option2 } from './options'

export default () => {
  const [value, setValue] = useState<Record<string, string | number>>({})
  return (
    <DropdownMenu value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item disabled name='value1' options={option1} />
      <DropdownMenu.Item disabled name='value2' options={option2} />
    </DropdownMenu>
  )
}
`},"options.tsx":{type:"FILE",value:`export const option1 = [
  { text: '\u5168\u90E8\u5546\u54C1', value: 0 },
  { text: '\u65B0\u6B3E\u5546\u54C1', value: 1 },
  { text: '\u6D3B\u52A8\u5546\u54C1', value: 2 },
]
export const option2 = [
  { text: '\u9ED8\u8BA4\u6392\u5E8F', value: 'a' },
  { text: '\u597D\u8BC4\u6392\u5E8F', value: 'b' },
  { text: '\u9500\u91CF\u6392\u5E8F', value: 'c' },
]
`}},key:"dropdown-menu-disabled",meta:{title:"\u7981\u7528\u83DC\u5355"}},A=function({previewer:d=()=>null,api:r=()=>null}){const t=d;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"DropdownMenu \u4E0B\u62C9\u83DC\u5355"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5411\u4E0B\u5F39\u51FA\u7684\u83DC\u5355\u5217\u8868\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(t,{code:"import { DropdownMenu } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),e(t,{...E,children:e(h,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9"}),e(t,{...F,children:e(p,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u81EA\u5B9A\u4E49\u9AD8\u4EAE\u989C\u8272"}),e(t,{...w,children:e(s,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u5411\u4E0A\u5C55\u5F00"}),e(t,{...M,children:e(v,{})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u7981\u7528\u83DC\u5355"}),e(t,{...f,children:e(m,{})}),e("h2",{id:"-9","data-anchor":"-9",children:"API"}),e("h3",{id:"-10","data-anchor":"-10",children:"DropdownMenu Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u4E0B\u62C9\u83DC\u5355\u503C"}),e("td",{children:e("em",{children:"Record<any, any>"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u4E0B\u62C9\u83DC\u5355\u9ED8\u8BA4\u503C"}),e("td",{children:e("em",{children:"Record<any, any>"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u83DC\u5355"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"false"})]}),n("tr",{children:[e("td",{children:"activeColor"}),e("td",{children:"\u83DC\u5355\u6807\u9898\u548C\u9009\u9879\u7684\u9009\u4E2D\u6001\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#ee0a24"})})]}),n("tr",{children:[e("td",{children:"activeIcon"}),e("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u7684\u9009\u4E2D\u6001\u52FE\u9009 icon"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"direction"}),n("td",{children:["\u83DC\u5355\u5C55\u5F00\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A",e("code",{children:"up"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"down"})})]}),n("tr",{children:[e("td",{children:"zIndex"}),e("td",{children:"\u83DC\u5355\u680F z-index \u5C42\u7EA7"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"10"})})]}),n("tr",{children:[e("td",{children:"duration"}),e("td",{children:"\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0.2"})})]}),n("tr",{children:[e("td",{children:"overlay"}),e("td",{children:"\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"closeOnClickOverlay"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED\u83DC\u5355"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"closeOnClickOutside"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u5916\u90E8\u5143\u7D20\u540E\u5173\u95ED\u83DC\u5355"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h3",{id:"-11","data-anchor":"-11",children:"DropdownItem Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u5F53\u524D\u9009\u4E2D\u9879\u5BF9\u5E94\u7684 value key"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u83DC\u5355\u9879\u6807\u9898"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"\u5F53\u524D\u9009\u4E2D\u9879\u6587\u5B57"})]}),n("tr",{children:[e("td",{children:"placeholder"}),e("td",{children:"\u5360\u4F4D\u6587\u672C"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u8BF7\u9009\u62E9"})})]}),n("tr",{children:[e("td",{children:"options"}),e("td",{children:"\u9009\u9879\u6570\u7EC4"}),e("td",{children:e("em",{children:"Option[]"})}),e("td",{children:e("code",{children:"[]"})})]}),n("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u83DC\u5355"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"titleClass"}),e("td",{children:"\u6807\u9898\u989D\u5916\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"teleport"}),e("td",{children:"\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9"}),e("td",{children:e("em",{children:"HTMLElment () => HTMLElement"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-12","data-anchor":"-12",children:"DropdownMenu Events"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u7EC4\u4EF6 value \u53D8\u5316\u65F6\u89E6\u53D1"}),e("td",{children:"value"})]}),n("tr",{children:[e("td",{children:"onOpen"}),e("td",{children:"\u6253\u5F00\u83DC\u5355\u680F\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u83DC\u5355\u680F\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onOpened"}),e("td",{children:"\u6253\u5F00\u83DC\u5355\u680F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onClosed"}),e("td",{children:"\u5173\u95ED\u83DC\u5355\u680F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-13","data-anchor":"-13",children:"DropdownItem Events"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"onOpen"}),e("td",{children:"\u6253\u5F00\u83DC\u5355\u680F\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u83DC\u5355\u680F\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onOpened"}),e("td",{children:"\u6253\u5F00\u83DC\u5355\u680F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onClosed"}),e("td",{children:"\u5173\u95ED\u83DC\u5355\u680F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-14","data-anchor":"-14",children:"DropdownMenu \u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 DropdownMenu \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"toggleItem"}),e("td",{children:"\u5207\u6362\u6307\u5B9A\u83DC\u5355\u5C55\u793A\u72B6\u6001"}),e("td",{children:e("em",{children:"index:number"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"showItem"}),e("td",{children:"\u663E\u793A\u6307\u5B9A\u83DC\u5355\u5C55\u793A\u72B6\u6001"}),e("td",{children:e("em",{children:"index:number"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"close"}),e("td",{children:"\u5173\u95ED\u83DC\u5355"}),e("td",{}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-15","data-anchor":"-15",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(t,{code:"import type { DropdownMenuInstance, DropdownItemOption, DropdownMenuDirection } from 'react-vant-nova';",lang:"ts"}),n("p",{children:[e("code",{children:"DropdownMenuInstance"})," \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A"]}),e(t,{code:`import { useRef } from 'react';
import type { DropdownMenuInstance } from 'react-vant-nova';

const dropdownRef = useRef<DropdownMenuInstance>(null);

dropdownRef.current?.toggleItem(0);`,lang:"ts"}),e("h3",{id:"-16","data-anchor":"-16",children:"Option \u6570\u636E\u7ED3\u6784"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u952E\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"text"}),e("td",{children:"\u6587\u5B57"}),e("td",{children:e("em",{children:"ReactNode"})})]}),n("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"number | string"})})]}),n("tr",{children:[e("td",{children:"icon"}),e("td",{children:"\u5DE6\u4FA7\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})})]})]})]}),e("h2",{id:"-17","data-anchor":"-17",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-18","data-anchor":"-18",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"--rv-dropdown-menu-height"}),e("td",{children:e("em",{children:"48px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-dropdown-menu-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-dropdown-menu-box-shadow"}),e("td",{children:e("em",{children:"0 2px 12px fade(var(--rv-gray-7), 12)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-dropdown-menu-title-font-size"}),e("td",{children:e("em",{children:"15px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-dropdown-menu-title-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-dropdown-menu-title-active-text-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-dropdown-menu-title-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-dropdown-menu-title-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-dropdown-menu-title-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-lg)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-dropdown-menu-option-active-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-dropdown-menu-content-max-height"}),e("td",{children:e("em",{children:"80%"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-dropdown-item-z-index"}),e("td",{children:e("em",{children:"10"})}),e("td",{children:"-"})]})]})]})]})})},I=[{Component:h,key:"dropdown-menu-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:p,key:"dropdown-menu-custom",title:"\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9"},{Component:s,key:"dropdown-menu-color",title:"\u81EA\u5B9A\u4E49\u9AD8\u4EAE\u989C\u8272"},{Component:v,key:"dropdown-menu-direction",title:"\u5411\u4E0A\u5C55\u5F00"},{Component:m,key:"dropdown-menu-disabled",title:"\u7981\u7528\u83DC\u5355"}],b=void 0,y=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:2,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"},{depth:3,id:"-14"},{depth:3,id:"-15"},{depth:3,id:"-16"},{depth:2,id:"-17"},{depth:3,id:"-18"}],R="/src/components/dropdown-menu/README.md",S="undefined",_="1766203394000";var N=d=>d.children({MdContent:A,demos:I,frontmatter:b,slugs:y,filePath:R,title:S,updatedTime:_});export{A as MdContent,N as default,I as demos,R as filePath,b as frontmatter,y as slugs,S as title,_ as updatedTime};
