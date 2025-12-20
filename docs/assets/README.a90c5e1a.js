import{j as e,a as n,R as v}from"./main.6d1ac2ec.js";import{eg as r,bf as c,ch as d,a$ as u,cm as i}from"./FloatingPanel.f57aae97.js";var h=()=>e("div",{className:"demo-tabbar",children:n(r,{children:[e(r.Item,{icon:e(c,{}),children:"\u6807\u7B7E"}),e(r.Item,{icon:e(d,{}),children:"\u6807\u7B7E"}),e(r.Item,{icon:e(u,{}),children:"\u6807\u7B7E"}),e(r.Item,{icon:e(i,{}),children:"\u6807\u7B7E"})]})});const E=`import React from 'react'
import { Tabbar } from 'react-vant-nova'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'

export default () => {
  return (
    <div className='demo-tabbar'>
      <Tabbar>
        <Tabbar.Item icon={<HomeO />}>\u6807\u7B7E</Tabbar.Item>
        <Tabbar.Item icon={<Search />}>\u6807\u7B7E</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>\u6807\u7B7E</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>\u6807\u7B7E</Tabbar.Item>
      </Tabbar>
    </div>
  )
}
`,F={code:E,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Tabbar } from 'react-vant-nova'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'

export default () => {
  return (
    <div className='demo-tabbar'>
      <Tabbar>
        <Tabbar.Item icon={<HomeO />}>\u6807\u7B7E</Tabbar.Item>
        <Tabbar.Item icon={<Search />}>\u6807\u7B7E</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>\u6807\u7B7E</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>\u6807\u7B7E</Tabbar.Item>
      </Tabbar>
    </div>
  )
}
`}},key:"tabbar-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var b=()=>{const[t,o]=v.useState("setting");return e("div",{className:"demo-tabbar",children:n(r,{value:t,onChange:a=>o(a),children:[e(r.Item,{name:"home",icon:e(c,{}),children:"\u6807\u7B7E"}),e(r.Item,{name:"search",icon:e(d,{}),children:"\u6807\u7B7E"}),e(r.Item,{name:"firends",icon:e(u,{}),children:"\u6807\u7B7E"}),e(r.Item,{name:"setting",icon:e(i,{}),children:"\u6807\u7B7E"})]})})};const p=`import React from 'react'
import { Tabbar } from 'react-vant-nova'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'

export default () => {
  const [name, setName] = React.useState('setting')
  return (
    <div className='demo-tabbar'>
      <Tabbar value={name} onChange={v => setName(v as string)}>
        <Tabbar.Item name='home' icon={<HomeO />}>
          \u6807\u7B7E
        </Tabbar.Item>
        <Tabbar.Item name='search' icon={<Search />}>
          \u6807\u7B7E
        </Tabbar.Item>
        <Tabbar.Item name='firends' icon={<FriendsO />}>
          \u6807\u7B7E
        </Tabbar.Item>
        <Tabbar.Item name='setting' icon={<SettingO />}>
          \u6807\u7B7E
        </Tabbar.Item>
      </Tabbar>
    </div>
  )
}
`,B={code:p,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Tabbar } from 'react-vant-nova'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'

export default () => {
  const [name, setName] = React.useState('setting')
  return (
    <div className='demo-tabbar'>
      <Tabbar value={name} onChange={v => setName(v as string)}>
        <Tabbar.Item name='home' icon={<HomeO />}>
          \u6807\u7B7E
        </Tabbar.Item>
        <Tabbar.Item name='search' icon={<Search />}>
          \u6807\u7B7E
        </Tabbar.Item>
        <Tabbar.Item name='firends' icon={<FriendsO />}>
          \u6807\u7B7E
        </Tabbar.Item>
        <Tabbar.Item name='setting' icon={<SettingO />}>
          \u6807\u7B7E
        </Tabbar.Item>
      </Tabbar>
    </div>
  )
}
`}},key:"tabbar-control",meta:{title:"\u53D7\u63A7\u7EC4\u4EF6"}};var m=()=>e("div",{className:"demo-tabbar",children:n(r,{children:[e(r.Item,{icon:e(c,{}),children:"\u6807\u7B7E"}),e(r.Item,{badge:{dot:!0},icon:e(d,{}),children:"\u6807\u7B7E"}),e(r.Item,{badge:{content:5},icon:e(u,{}),children:"\u6807\u7B7E"}),e(r.Item,{badge:{content:20},icon:e(i,{}),children:"\u6807\u7B7E"})]})});const T=`import React from 'react'
import { Tabbar } from 'react-vant-nova'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'

export default () => {
  return (
    <div className='demo-tabbar'>
      <Tabbar>
        <Tabbar.Item icon={<HomeO />}>\u6807\u7B7E</Tabbar.Item>
        <Tabbar.Item badge={{ dot: true }} icon={<Search />}>
          \u6807\u7B7E
        </Tabbar.Item>
        <Tabbar.Item badge={{ content: 5 }} icon={<FriendsO />}>
          \u6807\u7B7E
        </Tabbar.Item>
        <Tabbar.Item badge={{ content: 20 }} icon={<SettingO />}>
          \u6807\u7B7E
        </Tabbar.Item>
      </Tabbar>
    </div>
  )
}
`,I={code:T,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Tabbar } from 'react-vant-nova'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'

export default () => {
  return (
    <div className='demo-tabbar'>
      <Tabbar>
        <Tabbar.Item icon={<HomeO />}>\u6807\u7B7E</Tabbar.Item>
        <Tabbar.Item badge={{ dot: true }} icon={<Search />}>
          \u6807\u7B7E
        </Tabbar.Item>
        <Tabbar.Item badge={{ content: 5 }} icon={<FriendsO />}>
          \u6807\u7B7E
        </Tabbar.Item>
        <Tabbar.Item badge={{ content: 20 }} icon={<SettingO />}>
          \u6807\u7B7E
        </Tabbar.Item>
      </Tabbar>
    </div>
  )
}
`}},key:"tabbar-badge",meta:{title:"\u5FBD\u6807\u63D0\u793A"}};const l={active:"https://img.yzcdn.cn/vant/user-active.png",inactive:"https://img.yzcdn.cn/vant/user-inactive.png"};var s=()=>n("div",{className:"demo-tabbar",children:[n(r,{children:[e(r.Item,{icon:t=>e("img",{alt:"tab",src:t?l.active:l.inactive}),children:"\u56FE\u6807"}),e(r.Item,{icon:e(u,{}),children:"\u56FE\u6807"}),e(r.Item,{icon:e(i,{}),children:"\u56FE\u6807"})]}),e("br",{}),n(r,{activeColor:"#f44336",inactiveColor:"#000",children:[e(r.Item,{icon:e(c,{}),children:"\u989C\u8272"}),e(r.Item,{icon:e(d,{}),children:"\u989C\u8272"}),e(r.Item,{icon:e(u,{}),children:"\u989C\u8272"}),e(r.Item,{icon:e(i,{}),children:"\u989C\u8272"})]})]});const g=`import React from 'react'
import { Tabbar } from 'react-vant-nova'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'
import './style.less'

const icon = {
  active: 'https://img.yzcdn.cn/vant/user-active.png',
  inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
}

export default () => {
  return (
    <div className='demo-tabbar'>
      <Tabbar>
        <Tabbar.Item
          icon={ac => <img alt='tab' src={ac ? icon.active : icon.inactive} />}
        >
          \u56FE\u6807
        </Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>\u56FE\u6807</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>\u56FE\u6807</Tabbar.Item>
      </Tabbar>
      <br />
      <Tabbar activeColor='#f44336' inactiveColor='#000'>
        <Tabbar.Item icon={<HomeO />}>\u989C\u8272</Tabbar.Item>
        <Tabbar.Item icon={<Search />}>\u989C\u8272</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>\u989C\u8272</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>\u989C\u8272</Tabbar.Item>
      </Tabbar>
    </div>
  )
}
`,C={code:g,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Tabbar } from 'react-vant-nova'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'
import './style.less'

const icon = {
  active: 'https://img.yzcdn.cn/vant/user-active.png',
  inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
}

export default () => {
  return (
    <div className='demo-tabbar'>
      <Tabbar>
        <Tabbar.Item
          icon={ac => <img alt='tab' src={ac ? icon.active : icon.inactive} />}
        >
          \u56FE\u6807
        </Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>\u56FE\u6807</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>\u56FE\u6807</Tabbar.Item>
      </Tabbar>
      <br />
      <Tabbar activeColor='#f44336' inactiveColor='#000'>
        <Tabbar.Item icon={<HomeO />}>\u989C\u8272</Tabbar.Item>
        <Tabbar.Item icon={<Search />}>\u989C\u8272</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>\u989C\u8272</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>\u989C\u8272</Tabbar.Item>
      </Tabbar>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-tabbar {
  .rv-tabbar {
    position: relative;
    padding-bottom: 0;
  }
}
`}},key:"tabbar-custom",meta:{title:"\u81EA\u5B9A\u4E49"}},f=function({previewer:t=()=>null,api:o=()=>null}){const a=t;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"Tabbar \u6807\u7B7E\u680F"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5E95\u90E8\u5BFC\u822A\u680F\uFF0C\u7528\u4E8E\u5728\u4E0D\u540C\u9875\u9762\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(a,{code:"import { Tabbar } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),n("p",{children:["\u70B9\u51FB ",e("code",{children:"Tabbar.Item"})," \u5373\u53EF\u5207\u6362\u9009\u4E2D\u7684\u6807\u7B7E(\u975E\u53D7\u63A7\u72B6\u6001)\u3002"]}),e(a,{...F,children:e(h,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u53D7\u63A7\u7EC4\u4EF6"}),n("ul",{children:[n("li",{children:[e("code",{children:"value"})," \u9ED8\u8BA4\u7ED1\u5B9A\u9009\u4E2D\u6807\u7B7E\u7684\u7D22\u5F15\u503C\uFF0C\u901A\u8FC7\u4FEE\u6539 ",e("code",{children:"value"})," \u5373\u53EF\u5207\u6362\u9009\u4E2D\u7684\u6807\u7B7E\u3002"]}),n("li",{children:["\u5728\u6807\u7B7E\u6307\u5B9A ",e("code",{children:"name"})," \u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\uFF0C",e("code",{children:"value"})," \u7684\u503C\u4E3A\u5F53\u524D\u6807\u7B7E\u7684 ",e("code",{children:"name"}),"\u3002"]})]}),e(a,{...B,children:e(b,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u5FBD\u6807\u63D0\u793A"}),n("p",{children:["\u901A\u8FC7 ",e("code",{children:"badge"})," \u5C5E\u6027\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u6807\u76F8\u5E94\u7684\u5FBD\u6807\u5185\u5BB9\u3002"]}),e(a,{...I,children:e(m,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u81EA\u5B9A\u4E49"}),n("ul",{children:[n("li",{children:["\u901A\u8FC7 ",e("code",{children:"icon"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\u56FE\u6807\u3002"]}),n("li",{children:["\u901A\u8FC7 ",e("code",{children:"activeColor"})," \u5C5E\u6027\u8BBE\u7F6E\u9009\u4E2D\u6807\u7B7E\u7684\u989C\u8272\uFF0C\u901A\u8FC7 ",e("code",{children:"inactiveColor"})," \u5C5E\u6027\u8BBE\u7F6E\u672A\u9009\u4E2D\u6807\u7B7E\u7684\u989C\u8272\u3002"]})]}),e(a,{...C,children:e(s,{})}),e("h2",{id:"-8","data-anchor":"-8",children:"API"}),e("h3",{id:"-9","data-anchor":"-9",children:"Tabbar Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u9009\u4E2D\u6807\u7B7E\u7684\u540D\u79F0\u6216\u7D22\u5F15\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u6807\u7B7E\u7684\u540D\u79F0\u6216\u7D22\u5F15\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),n("tr",{children:[e("td",{children:"fixed"}),e("td",{children:"\u662F\u5426\u56FA\u5B9A\u5728\u5E95\u90E8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5916\u8FB9\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"zIndex"}),e("td",{children:"\u5143\u7D20 z-index"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"1"})})]}),n("tr",{children:[e("td",{children:"activeColor"}),e("td",{children:"\u9009\u4E2D\u6807\u7B7E\u7684\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),n("tr",{children:[e("td",{children:"inactiveColor"}),e("td",{children:"\u672A\u9009\u4E2D\u6807\u7B7E\u7684\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#7d7e80"})})]}),n("tr",{children:[e("td",{children:"placeholder"}),e("td",{children:"\u56FA\u5B9A\u5728\u5E95\u90E8\u65F6\uFF0C\u662F\u5426\u5728\u6807\u7B7E\u4F4D\u7F6E\u751F\u6210\u4E00\u4E2A\u7B49\u9AD8\u7684\u5360\u4F4D\u5143\u7D20"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"safeAreaInsetBottom"}),n("td",{children:["\u662F\u5426\u5F00\u542F",e("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"}),"\uFF0C\u8BBE\u7F6E fixed \u65F6\u9ED8\u8BA4\u5F00\u542F"]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"-10","data-anchor":"-10",children:"Tabbar Events"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:n("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5207\u6362\u6807\u7B7E\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"active: number | string"})})]})})]}),e("h3",{id:"-11","data-anchor":"-11",children:"TabbarItem Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u6807\u7B7E\u540D\u79F0\uFF0C\u4F5C\u4E3A\u5339\u914D\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"\u5F53\u524D\u6807\u7B7E\u7684\u7D22\u5F15\u503C"})]}),n("tr",{children:[e("td",{children:"icon"}),e("td",{children:"\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode | (active: boolean) => React.ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"badge"}),e("td",{children:"\u56FE\u6807\u53F3\u4E0A\u89D2\u5FBD\u6807\u7684\u5185\u5BB9"}),e("td",{children:e("em",{children:"BadgeProps"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-12","data-anchor":"-12",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-13","data-anchor":"-13",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"--rv-tabbar-height"}),e("td",{children:e("em",{children:"50px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-tabbar-z-index"}),e("td",{children:e("em",{children:"1"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-tabbar-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-tabbar-item-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-tabbar-item-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-tabbar-item-active-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-tabbar-item-active-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-tabbar-item-line-height"}),e("td",{children:e("em",{children:"1"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-tabbar-item-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-tabbar-item-icon-margin-bottom"}),e("td",{children:e("em",{children:"var(--rv-padding-base)"})}),e("td",{children:"-"})]})]})]})]})})},D=[{Component:h,key:"tabbar-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:b,key:"tabbar-control",title:"\u53D7\u63A7\u7EC4\u4EF6"},{Component:m,key:"tabbar-badge",title:"\u5FBD\u6807\u63D0\u793A"},{Component:s,key:"tabbar-custom",title:"\u81EA\u5B9A\u4E49"}],O=void 0,A=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:2,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:2,id:"-12"},{depth:3,id:"-13"}],S="/src/components/tabbar/README.md",y="undefined",x="1766203394000";var _=t=>t.children({MdContent:f,demos:D,frontmatter:O,slugs:A,filePath:S,title:y,updatedTime:x});export{f as MdContent,_ as default,D as demos,S as filePath,O as frontmatter,A as slugs,y as title,x as updatedTime};
