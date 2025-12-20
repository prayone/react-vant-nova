import{R as D,a as n,j as e,r as o}from"./main.6f38626e.js";import{dk as u,dc as h,B as i,C as l,g as a}from"./FloatingPanel.cc4d0a22.js";var C=()=>{const[c,r]=D.useState(!1);return n("div",{className:"demo-checkbox",children:[e(u,{checked:c,onChange:r,children:"\u590D\u9009\u6846"}),e(u,{defaultChecked:!0,onChange:t=>console.log(t),children:"\u9ED8\u8BA4\u52FE\u9009"}),e("br",{}),e(u,{disabled:!0,children:"\u7981\u7528\u590D\u9009\u6846"}),e("br",{}),e(u,{defaultChecked:!0,labelDisabled:!0,children:"\u7981\u6B62\u6587\u672C\u70B9\u51FB"})]})};const B=`/* eslint-disable no-console */
import React from 'react'
import { Checkbox } from 'react-vant-nova'
import './style.less'

export default () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <div className='demo-checkbox'>
      <Checkbox checked={checked} onChange={setChecked}>
        \u590D\u9009\u6846
      </Checkbox>
      <Checkbox defaultChecked onChange={val => console.log(val)}>
        \u9ED8\u8BA4\u52FE\u9009
      </Checkbox>
      <br />
      <Checkbox disabled>\u7981\u7528\u590D\u9009\u6846</Checkbox>
      <br />
      <Checkbox defaultChecked labelDisabled>
        \u7981\u6B62\u6587\u672C\u70B9\u51FB
      </Checkbox>
    </div>
  )
}
`,f={code:B,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`/* eslint-disable no-console */
import React from 'react'
import { Checkbox } from 'react-vant-nova'
import './style.less'

export default () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <div className='demo-checkbox'>
      <Checkbox checked={checked} onChange={setChecked}>
        \u590D\u9009\u6846
      </Checkbox>
      <Checkbox defaultChecked onChange={val => console.log(val)}>
        \u9ED8\u8BA4\u52FE\u9009
      </Checkbox>
      <br />
      <Checkbox disabled>\u7981\u7528\u590D\u9009\u6846</Checkbox>
      <br />
      <Checkbox defaultChecked labelDisabled>
        \u7981\u6B62\u6587\u672C\u70B9\u51FB
      </Checkbox>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-checkbox {
  background: #fff;

  .rv-checkbox {
    margin: 0 0 8px 20px;
  }

  .rv-cell {
    .rv-checkbox {
      margin: 0;
    }
  }

  &-buttons {
    margin-top: 16px;

    .rv-button {
      margin-left: 16px;
    }
  }

  .rv-doc-demo-block__title {
    margin-top: -8px;
  }
}
`}},key:"checkbox-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};const g="https://img.yzcdn.cn/vant/user-active.png",A="https://img.yzcdn.cn/vant/user-inactive.png";var s=()=>n("div",{className:"demo-checkbox",children:[e(u,{defaultChecked:!0,shape:"square",children:"\u81EA\u5B9A\u4E49\u5F62\u72B6"}),e("br",{}),e(u,{defaultChecked:!0,checkedColor:"#ee0a24",children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),e("br",{}),e(u,{defaultChecked:!0,iconSize:"24px",children:"\u81EA\u5B9A\u4E49\u5927\u5C0F"}),e("br",{}),e(u,{defaultChecked:!0,iconRender:({checked:c})=>e("img",{alt:"",src:c?g:A}),children:"\u81EA\u5B9A\u4E49\u56FE\u6807"})]});const y=`import React from 'react'
import { Checkbox } from 'react-vant-nova'
import './custom.less'

const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png'
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png'

export default () => {
  return (
    <div className='demo-checkbox'>
      <Checkbox defaultChecked shape='square'>
        \u81EA\u5B9A\u4E49\u5F62\u72B6
      </Checkbox>
      <br />
      <Checkbox defaultChecked checkedColor='#ee0a24'>
        \u81EA\u5B9A\u4E49\u989C\u8272
      </Checkbox>
      <br />
      <Checkbox defaultChecked iconSize='24px'>
        \u81EA\u5B9A\u4E49\u5927\u5C0F
      </Checkbox>
      <br />
      <Checkbox
        defaultChecked
        iconRender={({ checked: isActive }) => (
          <img alt='' src={isActive ? activeIcon : inactiveIcon} />
        )}
      >
        \u81EA\u5B9A\u4E49\u56FE\u6807
      </Checkbox>
    </div>
  )
}
`,_={code:y,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Checkbox } from 'react-vant-nova'
import './custom.less'

const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png'
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png'

export default () => {
  return (
    <div className='demo-checkbox'>
      <Checkbox defaultChecked shape='square'>
        \u81EA\u5B9A\u4E49\u5F62\u72B6
      </Checkbox>
      <br />
      <Checkbox defaultChecked checkedColor='#ee0a24'>
        \u81EA\u5B9A\u4E49\u989C\u8272
      </Checkbox>
      <br />
      <Checkbox defaultChecked iconSize='24px'>
        \u81EA\u5B9A\u4E49\u5927\u5C0F
      </Checkbox>
      <br />
      <Checkbox
        defaultChecked
        iconRender={({ checked: isActive }) => (
          <img alt='' src={isActive ? activeIcon : inactiveIcon} />
        )}
      >
        \u81EA\u5B9A\u4E49\u56FE\u6807
      </Checkbox>
    </div>
  )
}
`},"custom.less":{type:"FILE",value:`.demo-checkbox {
  .rv-checkbox {
    margin: 0 0 8px 20px;
  }

  img {
    height: 20px;
  }
}
`}},key:"checkbox-custom",meta:{title:"\u81EA\u5B9A\u4E49"}};var b=()=>{const[c,r]=o.exports.useState(!1);return e("div",{className:"demo-checkbox",children:e(u,{checked:c,onChange:t=>{h.loading({forbidClick:!0,duration:0}),setTimeout(()=>{h.clear(),r(t)},500)},children:"\u590D\u9009\u6846"})})};const R=`import React, { useState } from 'react'
import { Checkbox, Toast } from 'react-vant-nova'

export default () => {
  const [value, setValue] = useState(false)

  return (
    <div className='demo-checkbox'>
      <Checkbox
        checked={value}
        onChange={val => {
          Toast.loading({ forbidClick: true, duration: 0 })

          setTimeout(() => {
            Toast.clear()
            setValue(val)
          }, 500)
        }}
      >
        \u590D\u9009\u6846
      </Checkbox>
    </div>
  )
}
`,G={code:R,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { Checkbox, Toast } from 'react-vant-nova'

export default () => {
  const [value, setValue] = useState(false)

  return (
    <div className='demo-checkbox'>
      <Checkbox
        checked={value}
        onChange={val => {
          Toast.loading({ forbidClick: true, duration: 0 })

          setTimeout(() => {
            Toast.clear()
            setValue(val)
          }, 500)
        }}
      >
        \u590D\u9009\u6846
      </Checkbox>
    </div>
  )
}
`}},key:"checkbox-async",meta:{title:"\u5F02\u6B65\u66F4\u65B0"}};var k=()=>e("div",{className:"demo-checkbox",children:n(u.Group,{onChange:c=>console.log(c),defaultValue:["a","b"],children:[e(u,{name:"a",children:"\u590D\u9009\u6846\u7EC4a"}),e(u,{name:"b",children:"\u590D\u9009\u6846\u7EC4b"}),e(u,{name:"c",children:"\u590D\u9009\u6846\u7EC4c"})]})});const N=`/* eslint-disable no-console */
import React from 'react'
import { Checkbox } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-checkbox'>
      <Checkbox.Group onChange={v => console.log(v)} defaultValue={['a', 'b']}>
        <Checkbox name='a'>\u590D\u9009\u6846\u7EC4a</Checkbox>
        <Checkbox name='b'>\u590D\u9009\u6846\u7EC4b</Checkbox>
        <Checkbox name='c'>\u590D\u9009\u6846\u7EC4c</Checkbox>
      </Checkbox.Group>
    </div>
  )
}
`,P={code:N,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`/* eslint-disable no-console */
import React from 'react'
import { Checkbox } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-checkbox'>
      <Checkbox.Group onChange={v => console.log(v)} defaultValue={['a', 'b']}>
        <Checkbox name='a'>\u590D\u9009\u6846\u7EC4a</Checkbox>
        <Checkbox name='b'>\u590D\u9009\u6846\u7EC4b</Checkbox>
        <Checkbox name='c'>\u590D\u9009\u6846\u7EC4c</Checkbox>
      </Checkbox.Group>
    </div>
  )
}
`}},key:"checkbox-group",meta:{title:"\u590D\u9009\u6846\u7EC4"}};var m=()=>e("div",{className:"demo-checkbox",children:n(u.Group,{defaultValue:[],direction:"horizontal",children:[e(u,{name:"a",children:"\u590D\u9009\u6846a"}),e(u,{name:"b",children:"\u590D\u9009\u6846b"})]})});const I=`import React from 'react'
import { Checkbox } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-checkbox'>
      <Checkbox.Group defaultValue={[]} direction='horizontal'>
        <Checkbox name='a'>\u590D\u9009\u6846a</Checkbox>
        <Checkbox name='b'>\u590D\u9009\u6846b</Checkbox>
      </Checkbox.Group>
    </div>
  )
}
`,M={code:I,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Checkbox } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-checkbox'>
      <Checkbox.Group defaultValue={[]} direction='horizontal'>
        <Checkbox name='a'>\u590D\u9009\u6846a</Checkbox>
        <Checkbox name='b'>\u590D\u9009\u6846b</Checkbox>
      </Checkbox.Group>
    </div>
  )
}
`}},key:"checkbox-direction",meta:{title:"\u6C34\u5E73\u6392\u5217"}};var x=()=>e("div",{className:"demo-checkbox",children:n(u.Group,{defaultValue:[],max:2,children:[e(u,{name:"a",children:"\u590D\u9009\u6846a"}),e(u,{name:"b",children:"\u590D\u9009\u6846b"}),e(u,{name:"c",children:"\u590D\u9009\u6846c"})]})});const S=`import React from 'react'
import { Checkbox } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-checkbox'>
      <Checkbox.Group defaultValue={[]} max={2}>
        <Checkbox name='a'>\u590D\u9009\u6846a</Checkbox>
        <Checkbox name='b'>\u590D\u9009\u6846b</Checkbox>
        <Checkbox name='c'>\u590D\u9009\u6846c</Checkbox>
      </Checkbox.Group>
    </div>
  )
}
`,V={code:S,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Checkbox } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-checkbox'>
      <Checkbox.Group defaultValue={[]} max={2}>
        <Checkbox name='a'>\u590D\u9009\u6846a</Checkbox>
        <Checkbox name='b'>\u590D\u9009\u6846b</Checkbox>
        <Checkbox name='c'>\u590D\u9009\u6846c</Checkbox>
      </Checkbox.Group>
    </div>
  )
}
`}},key:"checkbox-max",meta:{title:"\u6700\u5927\u53EF\u9009\u6570"}};var p=()=>{const c=o.exports.useRef(null),[r,t]=o.exports.useState(["a"]);return n("div",{className:"demo-checkbox",children:[n(u.Group,{ref:c,value:r,onChange:t,children:[e(u,{name:"a",children:"\u590D\u9009\u6846\u7EC4a"}),e(u,{name:"b",children:"\u590D\u9009\u6846\u7EC4b"}),e(u,{name:"c",children:"\u590D\u9009\u6846\u7EC4c"})]}),n("div",{className:"demo-checkbox-buttons",children:[e(i,{type:"primary",onClick:()=>{var d;return(d=c.current)==null?void 0:d.toggleAll(!0)},children:"\u5168\u9009"}),e(i,{type:"primary",onClick:()=>{var d;return(d=c.current)==null?void 0:d.toggleAll()},children:"\u53CD\u9009"})]})]})};const z=`import React, { useRef, useState } from 'react'
import { Checkbox, Button } from 'react-vant-nova'
import { CheckboxGroupInstance } from '../PropsType'

export default () => {
  const ref = useRef<CheckboxGroupInstance>(null)
  const [checkAll, setCheckAll] = useState(['a'])

  return (
    <div className='demo-checkbox'>
      <Checkbox.Group ref={ref} value={checkAll} onChange={setCheckAll}>
        <Checkbox name='a'>\u590D\u9009\u6846\u7EC4a</Checkbox>
        <Checkbox name='b'>\u590D\u9009\u6846\u7EC4b</Checkbox>
        <Checkbox name='c'>\u590D\u9009\u6846\u7EC4c</Checkbox>
      </Checkbox.Group>
      <div className='demo-checkbox-buttons'>
        <Button type='primary' onClick={() => ref.current?.toggleAll(true)}>
          \u5168\u9009
        </Button>
        <Button type='primary' onClick={() => ref.current?.toggleAll()}>
          \u53CD\u9009
        </Button>
      </div>
    </div>
  )
}
`,w={code:z,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useRef, useState } from 'react'
import { Checkbox, Button } from 'react-vant-nova'
import { CheckboxGroupInstance } from '../PropsType'

export default () => {
  const ref = useRef<CheckboxGroupInstance>(null)
  const [checkAll, setCheckAll] = useState(['a'])

  return (
    <div className='demo-checkbox'>
      <Checkbox.Group ref={ref} value={checkAll} onChange={setCheckAll}>
        <Checkbox name='a'>\u590D\u9009\u6846\u7EC4a</Checkbox>
        <Checkbox name='b'>\u590D\u9009\u6846\u7EC4b</Checkbox>
        <Checkbox name='c'>\u590D\u9009\u6846\u7EC4c</Checkbox>
      </Checkbox.Group>
      <div className='demo-checkbox-buttons'>
        <Button type='primary' onClick={() => ref.current?.toggleAll(true)}>
          \u5168\u9009
        </Button>
        <Button type='primary' onClick={() => ref.current?.toggleAll()}>
          \u53CD\u9009
        </Button>
      </div>
    </div>
  )
}
`}},key:"checkbox-ref",meta:{title:"\u5168\u9009\u4E0E\u53CD\u9009"}};var E=()=>{const[c,r]=o.exports.useState([]),t=d=>{const v=c.includes(d)?c.filter(F=>F!==d):[...c,d];r(v)};return e("div",{className:"demo-checkbox",children:e(u.Group,{value:c,onChange:r,children:n(l.Group,{children:[e(l,{clickable:!0,title:"\u5355\u9009\u68461",icon:e(a,{}),onClick:()=>t("a"),rightIcon:e(u,{name:"a"})}),e(l,{clickable:!0,title:"\u5355\u9009\u68462",icon:e(a,{}),onClick:()=>t("b"),rightIcon:e(u,{name:"b"})})]})})})};const $=`import React, { useState } from 'react'
import { Checkbox, Cell } from 'react-vant-nova'
import { ShopO } from '@react-vant/icons'

export default () => {
  const [cellCheck, setCellCheck] = useState([])

  const toggle = name => {
    const newValue = cellCheck.includes(name)
      ? cellCheck.filter(el => el !== name)
      : [...cellCheck, name]
    setCellCheck(newValue)
  }

  return (
    <div className='demo-checkbox'>
      <Checkbox.Group value={cellCheck} onChange={setCellCheck}>
        <Cell.Group>
          <Cell
            clickable
            title='\u5355\u9009\u68461'
            icon={<ShopO />}
            onClick={() => toggle('a')}
            rightIcon={<Checkbox name='a' />}
          />
          <Cell
            clickable
            title='\u5355\u9009\u68462'
            icon={<ShopO />}
            onClick={() => toggle('b')}
            rightIcon={<Checkbox name='b' />}
          />
        </Cell.Group>
      </Checkbox.Group>
    </div>
  )
}
`,T={code:$,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { Checkbox, Cell } from 'react-vant-nova'
import { ShopO } from '@react-vant/icons'

export default () => {
  const [cellCheck, setCellCheck] = useState([])

  const toggle = name => {
    const newValue = cellCheck.includes(name)
      ? cellCheck.filter(el => el !== name)
      : [...cellCheck, name]
    setCellCheck(newValue)
  }

  return (
    <div className='demo-checkbox'>
      <Checkbox.Group value={cellCheck} onChange={setCellCheck}>
        <Cell.Group>
          <Cell
            clickable
            title='\u5355\u9009\u68461'
            icon={<ShopO />}
            onClick={() => toggle('a')}
            rightIcon={<Checkbox name='a' />}
          />
          <Cell
            clickable
            title='\u5355\u9009\u68462'
            icon={<ShopO />}
            onClick={() => toggle('b')}
            rightIcon={<Checkbox name='b' />}
          />
        </Cell.Group>
      </Checkbox.Group>
    </div>
  )
}
`}},key:"checkbox-cell",meta:{title:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528"}},L=function({previewer:c=()=>null,api:r=()=>null}){const t=c;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"Checkbox \u590D\u9009\u6846"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5728\u9009\u4E2D\u548C\u975E\u9009\u4E2D\u72B6\u6001\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(t,{code:"import { Checkbox } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),n("ul",{children:[n("li",{children:["\u901A\u8FC7 ",e("code",{children:"defaultChecked"})," \u503C\u9ED8\u8BA4\u590D\u9009\u6846\u7684\u52FE\u9009\u72B6\u6001\u3002"]}),n("li",{children:["\u901A\u8FC7\u8BBE\u7F6E ",e("code",{children:"disabled"})," \u5C5E\u6027\u53EF\u4EE5\u7981\u7528\u590D\u9009\u6846\u3002"]}),n("li",{children:["\u8BBE\u7F6E ",e("code",{children:"labelDisabled"})," \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u56FE\u6807\u4EE5\u5916\u7684\u5185\u5BB9\u4E0D\u4F1A\u89E6\u53D1\u590D\u9009\u6846\u5207\u6362\u3002"]})]}),e(t,{...f,children:e(C,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u81EA\u5B9A\u4E49"}),n("ul",{children:[n("li",{children:["\u5C06 ",e("code",{children:"shape"})," \u5C5E\u6027\u8BBE\u7F6E\u4E3A ",e("code",{children:"square"}),"\uFF0C\u590D\u9009\u6846\u7684\u5F62\u72B6\u4F1A\u53D8\u6210\u65B9\u5F62\u3002"]}),n("li",{children:["\u901A\u8FC7 ",e("code",{children:"checkedColor"})," \u5C5E\u6027\u8BBE\u7F6E\u9009\u4E2D\u72B6\u6001\u7684\u56FE\u6807\u989C\u8272\u3002"]}),n("li",{children:["\u901A\u8FC7 ",e("code",{children:"iconSize"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u5927\u5C0F\u3002"]})]}),e(t,{..._,children:e(s,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u5F02\u6B65\u66F4\u65B0"}),n("p",{children:["\u8BBE\u7F6E ",e("code",{children:"checked"})," \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u56FE\u6807\u72B6\u6001\u4E0D\u4F1A\u6539\u53D8\uFF0C\u800C\u662F\u76F4\u63A5\u6267\u884C ",e("code",{children:"onChange"})," \u65B9\u6CD5\uFF0C\u5728\u6B64\u65B9\u6CD5\u4E2D\u66F4\u6362\u72B6\u6001"]}),e(t,{...G,children:e(b,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u590D\u9009\u6846\u7EC4"}),n("p",{children:["\u590D\u9009\u6846\u53EF\u4EE5\u4E0E\u590D\u9009\u6846\u7EC4\u4E00\u8D77\u4F7F\u7528\uFF0C\u590D\u9009\u6846\u7EC4\u901A\u8FC7 ",e("code",{children:"defaultChecked"})," \u6570\u7EC4\u9ED8\u8BA4\u590D\u9009\u6846\u7684\u52FE\u9009\u72B6\u6001\u3002"]}),e(t,{...P,children:e(k,{})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u6C34\u5E73\u6392\u5217"}),n("p",{children:["\u5C06 ",e("code",{children:"direction"})," \u5C5E\u6027\u8BBE\u7F6E\u4E3A ",e("code",{children:"horizontal"})," \u540E\uFF0C\u590D\u9009\u6846\u7EC4\u4F1A\u53D8\u6210\u6C34\u5E73\u6392\u5217\u3002"]}),e(t,{...M,children:e(m,{})}),e("h3",{id:"-9","data-anchor":"-9",children:"\u6700\u5927\u53EF\u9009\u6570"}),n("p",{children:["\u901A\u8FC7 ",e("code",{children:"max"})," \u5C5E\u6027\u53EF\u4EE5\u9650\u5236\u590D\u9009\u6846\u7EC4\u7684\u6700\u5927\u53EF\u9009\u6570\u3002"]}),e(t,{...V,children:e(x,{})}),e("h3",{id:"-10","data-anchor":"-10",children:"\u5168\u9009\u4E0E\u53CD\u9009"}),n("p",{children:["\u901A\u8FC7 ",e("code",{children:"CheckboxGroup"})," \u5B9E\u4F8B\u4E0A\u7684",e("code",{children:"toggleAll"}),"\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5168\u9009\u4E0E\u53CD\u9009\u3002"]}),e(t,{...w,children:e(p,{})}),e("h3",{id:"-11","data-anchor":"-11",children:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528"}),n("p",{children:["\u6B64\u65F6\u4F60\u9700\u8981\u518D\u5F15\u5165 ",e("code",{children:"Cell"})," \u548C ",e("code",{children:"Cell.Group"})," \u7EC4\u4EF6\u3002"]}),e(t,{...T,children:e(E,{})}),e("h2",{id:"-12","data-anchor":"-12",children:"API"}),e("h3",{id:"-13","data-anchor":"-13",children:"Checkbox Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"checked"}),e("td",{children:"\u662F\u5426\u4E3A\u9009\u4E2D\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"defaultChecked"}),e("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"any[]"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"shape"}),n("td",{children:["\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"square"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"round"})})]}),n("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u590D\u9009\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"labelDisabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u590D\u9009\u6846\u6587\u672C\u70B9\u51FB"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"labelPosition"}),n("td",{children:["\u6587\u672C\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"left"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"right"})})]}),n("tr",{children:[e("td",{children:"iconSize"}),n("td",{children:["\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"20px"})})]}),n("tr",{children:[e("td",{children:"iconRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u56FE\u6807"}),e("td",{children:n("em",{children:["(","{"," checked, disabled ","}",") => ReactNode"]})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"checkedColor"}),e("td",{children:"\u9009\u4E2D\u72B6\u6001\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),n("tr",{children:[e("td",{children:"bindGroup"}),e("td",{children:"\u662F\u5426\u4E0E\u590D\u9009\u6846\u7EC4\u7ED1\u5B9A"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h3",{id:"-14","data-anchor":"-14",children:"CheckboxGroup Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u6240\u6709\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"any[]"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"defaultChecked"}),e("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"any[]"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6240\u6709\u590D\u9009\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"max"}),e("td",{children:"\u6700\u5927\u53EF\u9009\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"direction"}),n("td",{children:["\u6392\u5217\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"horizontal"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"vertical"})})]}),n("tr",{children:[e("td",{children:"iconSize"}),n("td",{children:["\u6240\u6709\u590D\u9009\u6846\u7684\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"20px"})})]}),n("tr",{children:[e("td",{children:"checkedColor"}),e("td",{children:"\u6240\u6709\u590D\u9009\u6846\u7684\u9009\u4E2D\u72B6\u6001\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]})]})]}),e("h3",{id:"-15","data-anchor":"-15",children:"Checkbox Events"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:e("em",{children:"checked: boolean"})})]}),n("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u590D\u9009\u6846\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]})]})]}),e("h3",{id:"-16","data-anchor":"-16",children:"CheckboxGroup Events"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:n("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:e("em",{children:"names: any[]"})})]})})]}),e("h3",{id:"-17","data-anchor":"-17",children:"CheckboxGroup \u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 CheckboxGroup \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:n("tr",{children:[e("td",{children:"toggleAll"}),n("td",{children:["\u5207\u6362\u6240\u6709\u590D\u9009\u6846\uFF0C\u4F20 ",e("code",{children:"true"})," \u4E3A\u9009\u4E2D\uFF0C",e("code",{children:"false"})," \u4E3A\u53D6\u6D88\u9009\u4E2D\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u53D6\u53CD"]}),e("td",{children:e("em",{children:"options?: boolean | object"})}),e("td",{children:"-"})]})})]}),e("h3",{id:"-18","data-anchor":"-18",children:"Checkbox \u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Checkbox \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:n("tr",{children:[e("td",{children:"toggle"}),n("td",{children:["\u5207\u6362\u9009\u4E2D\u72B6\u6001\uFF0C\u4F20 ",e("code",{children:"true"})," \u4E3A\u9009\u4E2D\uFF0C",e("code",{children:"false"})," \u4E3A\u53D6\u6D88\u9009\u4E2D\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u53D6\u53CD"]}),e("td",{children:e("em",{children:"checked?: boolean"})}),e("td",{children:"-"})]})})]}),e("h3",{id:"-19","data-anchor":"-19",children:"\u7C7B\u578B\u5B9A\u4E49"}),n("p",{children:["\u901A\u8FC7 ",e("code",{children:"CheckboxInstance"})," \u548C ",e("code",{children:"CheckboxGroupInstance"})," \u83B7\u53D6 Checkbox \u5B9E\u4F8B\u7684\u7C7B\u578B\u5B9A\u4E49\uFF08\u4ECE 3.2.0 \u7248\u672C\u5F00\u59CB\u652F\u6301\uFF09\u3002"]}),e(t,{code:`import { useRef } from 'react';
import type { CheckboxInstance, CheckboxGroupInstance } from 'react-vant-nova';

const checkboxRef = useRef<CheckboxInstance>();
const checkboxGroupRef = useRef<CheckboxGroupInstance>();

checkboxRef.current?.toggle();
checkboxGroupRef.current?.toggleAll();`,lang:"ts"}),e("h2",{id:"-20","data-anchor":"-20",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-21","data-anchor":"-21",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"--rv-checkbox-size"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-checkbox-border-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-checkbox-transition-duration"}),e("td",{children:e("em",{children:"var(--rv-animation-duration-fast)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-checkbox-label-margin"}),e("td",{children:e("em",{children:"var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-checkbox-label-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-checkbox-checked-icon-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-checkbox-disabled-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-checkbox-disabled-label-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-checkbox-disabled-background-color"}),e("td",{children:e("em",{children:"var(--rv-border-color)"})}),e("td",{children:"-"})]})]})]})]})})},O=[{Component:C,key:"checkbox-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:s,key:"checkbox-custom",title:"\u81EA\u5B9A\u4E49"},{Component:b,key:"checkbox-async",title:"\u5F02\u6B65\u66F4\u65B0"},{Component:k,key:"checkbox-group",title:"\u590D\u9009\u6846\u7EC4"},{Component:m,key:"checkbox-direction",title:"\u6C34\u5E73\u6392\u5217"},{Component:x,key:"checkbox-max",title:"\u6700\u5927\u53EF\u9009\u6570"},{Component:p,key:"checkbox-ref",title:"\u5168\u9009\u4E0E\u53CD\u9009"},{Component:E,key:"checkbox-cell",title:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528"}],j={simulator:{style:{background:"#fff"}}},q=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:2,id:"-12"},{depth:3,id:"-13"},{depth:3,id:"-14"},{depth:3,id:"-15"},{depth:3,id:"-16"},{depth:3,id:"-17"},{depth:3,id:"-18"},{depth:3,id:"-19"},{depth:2,id:"-20"},{depth:3,id:"-21"}],H="/src/components/checkbox/README.md",J="undefined",K="1766203394000";var W=c=>c.children({MdContent:L,demos:O,frontmatter:j,slugs:q,filePath:H,title:J,updatedTime:K});export{L as MdContent,W as default,O as demos,H as filePath,j as frontmatter,q as slugs,J as title,K as updatedTime};
