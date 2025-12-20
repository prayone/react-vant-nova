import{r,a as n,F as l,j as e}from"./main.9eb8bb9a.js";import{C as d,dM as c}from"./FloatingPanel.9e7a63ee.js";const h=[{name:"\u9009\u9879\u4E00"},{name:"\u9009\u9879\u4E8C"},{name:"\u9009\u9879\u4E09"}],F=[{name:"\u9009\u9879\u4E00"},{name:"\u9009\u9879\u4E8C"},{name:"\u9009\u9879\u4E09",subname:"\u63CF\u8FF0\u4FE1\u606F"}];var o=()=>{const[u,i]=r.exports.useState(-1),t=()=>i(-1);return n(l,{children:[e(d,{title:"\u57FA\u7840\u7528\u6CD5",isLink:!0,onClick:()=>i(1)}),e(d,{title:"\u5C55\u793A\u53D6\u6D88\u6309\u94AE",isLink:!0,onClick:()=>i(2)}),e(d,{title:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F",isLink:!0,onClick:()=>i(3)}),e(c,{visible:u===1,onCancel:t,actions:h}),e(c,{visible:u===2,onCancel:t,actions:h,cancelText:"\u53D6\u6D88"}),e(c,{visible:u===3,onCancel:t,description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F",actions:F,cancelText:"\u53D6\u6D88"})]})};const E=`import React, { useState } from 'react'
import { ActionSheet, Cell } from 'react-vant-nova'

const actions = [{ name: '\u9009\u9879\u4E00' }, { name: '\u9009\u9879\u4E8C' }, { name: '\u9009\u9879\u4E09' }]
const actions1 = [
  { name: '\u9009\u9879\u4E00' },
  { name: '\u9009\u9879\u4E8C' },
  { name: '\u9009\u9879\u4E09', subname: '\u63CF\u8FF0\u4FE1\u606F' },
]

export default () => {
  const [visible, setVisible] = useState(-1)
  const onCancel = () => setVisible(-1)
  return (
    <>
      <Cell title='\u57FA\u7840\u7528\u6CD5' isLink onClick={() => setVisible(1)} />
      <Cell title='\u5C55\u793A\u53D6\u6D88\u6309\u94AE' isLink onClick={() => setVisible(2)} />
      <Cell title='\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F' isLink onClick={() => setVisible(3)} />

      <ActionSheet
        visible={visible === 1}
        onCancel={onCancel}
        actions={actions}
      />
      <ActionSheet
        visible={visible === 2}
        onCancel={onCancel}
        actions={actions}
        cancelText='\u53D6\u6D88'
      />
      <ActionSheet
        visible={visible === 3}
        onCancel={onCancel}
        description='\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F'
        actions={actions1}
        cancelText='\u53D6\u6D88'
      />
    </>
  )
}
`,C={code:E,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { ActionSheet, Cell } from 'react-vant-nova'

const actions = [{ name: '\u9009\u9879\u4E00' }, { name: '\u9009\u9879\u4E8C' }, { name: '\u9009\u9879\u4E09' }]
const actions1 = [
  { name: '\u9009\u9879\u4E00' },
  { name: '\u9009\u9879\u4E8C' },
  { name: '\u9009\u9879\u4E09', subname: '\u63CF\u8FF0\u4FE1\u606F' },
]

export default () => {
  const [visible, setVisible] = useState(-1)
  const onCancel = () => setVisible(-1)
  return (
    <>
      <Cell title='\u57FA\u7840\u7528\u6CD5' isLink onClick={() => setVisible(1)} />
      <Cell title='\u5C55\u793A\u53D6\u6D88\u6309\u94AE' isLink onClick={() => setVisible(2)} />
      <Cell title='\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F' isLink onClick={() => setVisible(3)} />

      <ActionSheet
        visible={visible === 1}
        onCancel={onCancel}
        actions={actions}
      />
      <ActionSheet
        visible={visible === 2}
        onCancel={onCancel}
        actions={actions}
        cancelText='\u53D6\u6D88'
      />
      <ActionSheet
        visible={visible === 3}
        onCancel={onCancel}
        description='\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F'
        actions={actions1}
        cancelText='\u53D6\u6D88'
      />
    </>
  )
}
`}},key:"action-sheet-base",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}},v=[{name:"\u9009\u9879\u4E00",color:"#ee0a24"},{name:"\u9009\u9879\u4E8C",disabled:!0},{loading:!0}];var a=()=>{const[u,i]=r.exports.useState(!1);return n(l,{children:[e(d,{title:"\u9009\u9879\u72B6\u6001",isLink:!0,onClick:()=>i(!0)}),e(c,{visible:u,onCancel:()=>i(!1),actions:v,cancelText:"\u53D6\u6D88"})]})};const m=`import React, { useState } from 'react'
import { ActionSheet, Cell } from 'react-vant-nova'

const actions2 = [
  { name: '\u9009\u9879\u4E00', color: '#ee0a24' },
  { name: '\u9009\u9879\u4E8C', disabled: true },
  { loading: true },
]

export default () => {
  const [visible, setVisible] = useState(false)
  const onCancel = () => setVisible(false)
  return (
    <>
      <Cell title='\u9009\u9879\u72B6\u6001' isLink onClick={() => setVisible(true)} />
      <ActionSheet
        visible={visible}
        onCancel={onCancel}
        actions={actions2}
        cancelText='\u53D6\u6D88'
      />
    </>
  )
}
`,A={code:m,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { ActionSheet, Cell } from 'react-vant-nova'

const actions2 = [
  { name: '\u9009\u9879\u4E00', color: '#ee0a24' },
  { name: '\u9009\u9879\u4E8C', disabled: true },
  { loading: true },
]

export default () => {
  const [visible, setVisible] = useState(false)
  const onCancel = () => setVisible(false)
  return (
    <>
      <Cell title='\u9009\u9879\u72B6\u6001' isLink onClick={() => setVisible(true)} />
      <ActionSheet
        visible={visible}
        onCancel={onCancel}
        actions={actions2}
        cancelText='\u53D6\u6D88'
      />
    </>
  )
}
`}},key:"action-sheet-status",meta:{title:"\u9009\u9879\u72B6\u6001",card:!0}};var s=()=>{const[u,i]=r.exports.useState(!1);return n(l,{children:[e(d,{title:"\u81EA\u5B9A\u4E49\u9762\u677F",isLink:!0,onClick:()=>i(!0)}),e(c,{visible:u,onCancel:()=>i(!1),children:e("div",{style:{padding:"16px 16px 160px"},children:"\u5185\u5BB9"})})]})};const D=`import React, { useState } from 'react'
import { ActionSheet, Cell } from 'react-vant-nova'

export default () => {
  const [visible, setVisible] = useState(false)
  const onCancel = () => setVisible(false)
  return (
    <>
      <Cell title='\u81EA\u5B9A\u4E49\u9762\u677F' isLink onClick={() => setVisible(true)} />
      <ActionSheet visible={visible} onCancel={onCancel}>
        <div style={{ padding: '16px 16px 160px' }}>\u5185\u5BB9</div>
      </ActionSheet>
    </>
  )
}
`,p={code:D,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { ActionSheet, Cell } from 'react-vant-nova'

export default () => {
  const [visible, setVisible] = useState(false)
  const onCancel = () => setVisible(false)
  return (
    <>
      <Cell title='\u81EA\u5B9A\u4E49\u9762\u677F' isLink onClick={() => setVisible(true)} />
      <ActionSheet visible={visible} onCancel={onCancel}>
        <div style={{ padding: '16px 16px 160px' }}>\u5185\u5BB9</div>
      </ActionSheet>
    </>
  )
}
`}},key:"action-sheet-custom",meta:{title:"\u81EA\u5B9A\u4E49\u9762\u677F",card:!0}},B=function({previewer:u=()=>null,api:i=()=>null}){const t=u;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"ActionSheet \u52A8\u4F5C\u9762\u677F"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5E95\u90E8\u5F39\u8D77\u7684\u6A21\u6001\u9762\u677F\uFF0C\u5305\u542B\u4E0E\u5F53\u524D\u60C5\u5883\u76F8\u5173\u7684\u591A\u4E2A\u9009\u9879\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(t,{code:"import { ActionSheet } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),n("ul",{children:[e("li",{children:n("p",{children:["\u52A8\u4F5C\u9762\u677F\u901A\u8FC7 ",e("code",{children:"actions"})," \u5C5E\u6027\u6765\u5B9A\u4E49\u9009\u9879\uFF0C",e("code",{children:"actions"})," \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u5217\uFF0C\u5BF9\u8C61\u683C\u5F0F\u89C1\u6587\u6863\u4E0B\u65B9\u8868\u683C\u3002"]})}),e("li",{children:n("p",{children:["\u8BBE\u7F6E ",e("code",{children:"cancelText"})," \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u5E95\u90E8\u5C55\u793A\u53D6\u6D88\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u5173\u95ED\u5F53\u524D\u9762\u677F\u5E76\u89E6\u53D1 ",e("code",{children:"onCancel"})," \u4E8B\u4EF6\u3002"]})}),e("li",{children:n("p",{children:["\u901A\u8FC7 ",e("code",{children:"description"})," \u53EF\u4EE5\u5728\u83DC\u5355\u9876\u90E8\u663E\u793A\u63CF\u8FF0\u4FE1\u606F\uFF0C\u901A\u8FC7\u9009\u9879\u7684 ",e("code",{children:"subname"})," \u5C5E\u6027\u53EF\u4EE5\u5728\u9009\u9879\u6587\u5B57\u7684\u53F3\u4FA7\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F\u3002"]})})]}),e(t,{...C,children:e(o,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u9009\u9879\u72B6\u6001"}),n("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"loading"})," \u548C ",e("code",{children:"disabled"})," \u5C06\u9009\u9879\u8BBE\u7F6E\u4E3A\u52A0\u8F7D\u72B6\u6001\u6216\u7981\u7528\u72B6\u6001\uFF0C\u6216\u8005\u901A\u8FC7",e("code",{children:"color"}),"\u8BBE\u7F6E\u9009\u9879\u7684\u989C\u8272"]}),e(t,{...A,children:e(a,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u81EA\u5B9A\u4E49\u9762\u677F"}),n("p",{children:["\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9762\u677F\u7684\u5C55\u793A\u5185\u5BB9\uFF0C\u540C\u65F6\u53EF\u4EE5\u4F7F\u7528",e("code",{children:"title"}),"\u5C5E\u6027\u5C55\u793A\u6807\u9898\u680F"]}),e(t,{...p,children:e(s,{})}),e("h2",{id:"-7","data-anchor":"-7",children:"API"}),e("h3",{id:"-8","data-anchor":"-8",children:"Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"visible"}),e("td",{children:"\u662F\u5426\u663E\u793A\u52A8\u4F5C\u9762\u677F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"actions"}),e("td",{children:"\u9762\u677F\u9009\u9879\u5217\u8868"}),e("td",{children:e("em",{children:"Action[]"})}),e("td",{children:e("code",{children:"[]"})})]}),n("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u9876\u90E8\u6807\u9898"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"cancelText"}),e("td",{children:"\u53D6\u6D88\u6309\u94AE"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"description"}),e("td",{children:"\u9009\u9879\u4E0A\u65B9\u7684\u63CF\u8FF0\u4FE1\u606F"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"closeable"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"closeIcon"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"<Cross />"})})]}),n("tr",{children:[e("td",{children:"duration"}),e("td",{children:"\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"300"})})]}),n("tr",{children:[e("td",{children:"round"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5706\u89D2"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"overlay"}),e("td",{children:"\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"overlayClass"}),e("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D"}),e("td",{children:e("em",{children:"string | Array | object"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"overlayStyle"}),e("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F"}),e("td",{children:e("em",{children:"object"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"lockScroll"}),e("td",{children:"\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"closeOnPopstate"}),e("td",{children:"\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"closeOnClickAction"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u9009\u9879\u540E\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"closeOnClickOverlay"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"safeAreaInsetBottom"}),n("td",{children:["\u662F\u5426\u5F00\u542F",e("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"beforeClose"}),n("td",{children:["\u5173\u95ED\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE ",e("code",{children:"false"})," \u53EF\u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u8FD4\u56DE Promise"]}),e("td",{children:e("em",{children:"(action: string) => boolean | Promise<boolean>"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-9","data-anchor":"-9",children:"Action \u6570\u636E\u7ED3\u6784"}),n("p",{children:[e("code",{children:"actions"})," \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u5217\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u952E\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u6807\u9898"}),e("td",{children:e("em",{children:"string"})})]}),n("tr",{children:[e("td",{children:"subname"}),e("td",{children:"\u4E8C\u7EA7\u6807\u9898"}),e("td",{children:e("em",{children:"string"})})]}),n("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u9009\u9879\u6587\u5B57\u989C\u8272"}),e("td",{children:e("em",{children:"string"})})]}),n("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u4E3A\u5BF9\u5E94\u5217\u6DFB\u52A0\u989D\u5916\u7684 class"}),e("td",{children:e("em",{children:"string"})})]}),n("tr",{children:[e("td",{children:"style"}),e("td",{children:"\u4E3A\u5BF9\u5E94\u5217\u6DFB\u52A0\u989D\u5916\u7684 style"}),e("td",{children:e("em",{children:"CSSProperties"})})]}),n("tr",{children:[e("td",{children:"loading"}),e("td",{children:"\u662F\u5426\u4E3A\u52A0\u8F7D\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})})]}),n("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})})]}),n("tr",{children:[e("td",{children:"callback"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"}),e("td",{children:e("em",{children:"action: Action"})})]})]})]}),e("h3",{id:"-10","data-anchor":"-10",children:"Events"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"onSelect"}),e("td",{children:"\u70B9\u51FB\u9009\u9879\u65F6\u89E6\u53D1\uFF0C\u7981\u7528\u6216\u52A0\u8F7D\u72B6\u6001\u4E0B\u4E0D\u4F1A\u89E6\u53D1"}),e("td",{children:e("em",{children:"action: Action, index: number"})})]}),n("tr",{children:[e("td",{children:"onCancel"}),e("td",{children:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onOpen"}),e("td",{children:"\u6253\u5F00\u9762\u677F\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u9762\u677F\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onOpened"}),e("td",{children:"\u6253\u5F00\u9762\u677F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onClosed"}),e("td",{children:"\u5173\u95ED\u9762\u677F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onClickOverlay"}),e("td",{children:"\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]})]})]}),e("h2",{id:"-11","data-anchor":"-11",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-12","data-anchor":"-12",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"--rv-action-sheet-max-height"}),e("td",{children:e("em",{children:"80%"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-header-height"}),e("td",{children:e("em",{children:"48px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-header-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-lg)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-description-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-description-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-description-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-item-background"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-item-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-lg)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-item-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-lg)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-item-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-item-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-subname-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-subname-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-subname-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-sm)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-close-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-close-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-close-icon-active-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-close-icon-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-md)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-cancel-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-cancel-padding-top"}),e("td",{children:e("em",{children:"var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-cancel-padding-color"}),e("td",{children:e("em",{children:"var(--rv-background-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-action-sheet-loading-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]})]})]})]})})},b=[{Component:o,key:"action-sheet-base",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:a,key:"action-sheet-status",title:"\u9009\u9879\u72B6\u6001",card:!0},{Component:s,key:"action-sheet-custom",title:"\u81EA\u5B9A\u4E49\u9762\u677F",card:!0}],f=void 0,g=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:2,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:2,id:"-11"},{depth:3,id:"-12"}],x="/src/components/action-sheet/README.md",k="undefined",S="1766203394000";var P=u=>u.children({MdContent:B,demos:b,frontmatter:f,slugs:g,filePath:x,title:k,updatedTime:S});export{B as MdContent,P as default,b as demos,x as filePath,f as frontmatter,g as slugs,k as title,S as updatedTime};
