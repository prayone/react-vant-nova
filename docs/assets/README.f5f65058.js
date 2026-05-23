import{j as n,a as u}from"./main.929296ee.js";import{eb as c,db as a,dc as e,f as l,cE as h,a6 as o,aH as F,D as E,ec as p}from"./TreeSelect.6eee9680.js";var d=()=>n("div",{children:u(c,{anchors:[170,320,window.innerHeight*.8],children:[n(a,{}),u(e,{gutter:8,children:[n(e.Item,{icon:n(l,{}),onClick:()=>0,text:"\u9644\u8FD1"}),n(e.Item,{icon:n(h,{}),onClick:()=>0,text:"\u6536\u85CF"}),n(e.Item,{icon:n(o,{}),onClick:()=>0,text:"\u8D2D\u7269\u8F66"}),n(e.Item,{icon:n(F,{}),onClick:()=>0,text:"\u4F18\u60E0"})]}),n(E,{children:"\u597D\u7269\u63A8\u8350"}),Array.from(Array(5)).map((t,i)=>n(p,{title:"\u70ED\u5356\u5546\u54C1"+i,thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",desc:"\u70ED\u5356\u5546\u54C1\uFF0C\u4F18\u60E0\u540E 2.00",num:3,price:"2.00"},i))]})});const C=`import React from 'react'
import {
  ProductCard,
  Grid,
  FloatingPanel,
  Search,
  Divider,
} from 'react-vant-nova'
import { LocationO, StarO, CartO, Discount } from '@react-vant/icons'

export default () => {
  return (
    <div>
      <FloatingPanel anchors={[170, 320, window.innerHeight * 0.8]}>
        <Search />
        <Grid gutter={8}>
          <Grid.Item icon={<LocationO />} onClick={() => 0} text='\u9644\u8FD1' />
          <Grid.Item icon={<StarO />} onClick={() => 0} text='\u6536\u85CF' />
          <Grid.Item icon={<CartO />} onClick={() => 0} text='\u8D2D\u7269\u8F66' />
          <Grid.Item icon={<Discount />} onClick={() => 0} text='\u4F18\u60E0' />
        </Grid>
        <Divider>\u597D\u7269\u63A8\u8350</Divider>
        {Array.from(Array(5)).map((_, index) => (
          <ProductCard
            key={index}
            title={'\u70ED\u5356\u5546\u54C1' + index}
            thumb='https://img.yzcdn.cn/vant/ipad.jpeg'
            desc='\u70ED\u5356\u5546\u54C1\uFF0C\u4F18\u60E0\u540E 2.00'
            num={3}
            price='2.00'
          />
        ))}
      </FloatingPanel>
    </div>
  )
}
`,D={code:C,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.1.0"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React from 'react'
import {
  ProductCard,
  Grid,
  FloatingPanel,
  Search,
  Divider,
} from 'react-vant-nova'
import { LocationO, StarO, CartO, Discount } from '@react-vant/icons'

export default () => {
  return (
    <div>
      <FloatingPanel anchors={[170, 320, window.innerHeight * 0.8]}>
        <Search />
        <Grid gutter={8}>
          <Grid.Item icon={<LocationO />} onClick={() => 0} text='\u9644\u8FD1' />
          <Grid.Item icon={<StarO />} onClick={() => 0} text='\u6536\u85CF' />
          <Grid.Item icon={<CartO />} onClick={() => 0} text='\u8D2D\u7269\u8F66' />
          <Grid.Item icon={<Discount />} onClick={() => 0} text='\u4F18\u60E0' />
        </Grid>
        <Divider>\u597D\u7269\u63A8\u8350</Divider>
        {Array.from(Array(5)).map((_, index) => (
          <ProductCard
            key={index}
            title={'\u70ED\u5356\u5546\u54C1' + index}
            thumb='https://img.yzcdn.cn/vant/ipad.jpeg'
            desc='\u70ED\u5356\u5546\u54C1\uFF0C\u4F18\u60E0\u540E 2.00'
            num={3}
            price='2.00'
          />
        ))}
      </FloatingPanel>
    </div>
  )
}
`}},key:"floating-panel-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},m=function({previewer:t=()=>null,api:i=()=>null}){const r=t;return n("div",{children:u("div",{children:[n("h1",{id:"floatingpanel-\u6D6E\u52A8\u9762\u677F","data-anchor":"floatingpanel-\u6D6E\u52A8\u9762\u677F",children:"FloatingPanel \u6D6E\u52A8\u9762\u677F"}),n("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),n("p",{children:"\u53EF\u4EE5\u4E0A\u4E0B\u62D6\u52A8\u7684\u6D6E\u52A8\u9762\u677F\u3002"}),n("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),n(r,{code:"import { FloatingPanel } from 'react-vant-nova';",lang:"js"}),n("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),n(r,{...D,children:n(d,{})}),n("h2",{id:"api","data-anchor":"api",children:"API"}),n("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"anchors"}),u("td",{children:["\u53EF\u62D6\u62FD\u81F3\u54EA\u4E9B\u9AD8\u5EA6\uFF0C\u5355\u4F4D\u4E3A ",n("code",{children:"px"})]}),n("td",{children:n("em",{children:"number[]"})}),n("td",{children:n("code",{children:"[100]"})})]}),u("tr",{children:[n("td",{children:"onHeightChange"}),n("td",{children:"\u9762\u677F\u9AD8\u5EA6\u53D8\u5316\u65F6\u89E6\u53D1"}),n("td",{children:n("em",{children:"(height: number) => void"})}),n("td",{children:"-"})]})]})]}),n("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),u("p",{children:["\u901A\u8FC7 ",n("code",{children:"ref"})," \u53EF\u4EE5\u83B7\u53D6\u5230 ",n("code",{children:"FloatingPanel"})," \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1",n("a",{href:"/guide/advanced-usage#zu-jian-shi-li-fang-fa",children:"\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5"}),"\u3002"]}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u65B9\u6CD5\u540D"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"})]})}),n("tbody",{children:u("tr",{children:[n("td",{children:"moveTo"}),n("td",{children:"\u79FB\u52A8\u5230\u6307\u5B9A\u9AD8\u5EA6"}),n("td",{children:n("em",{children:"(height: number) => void"})})]})})]}),n("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),n("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",n("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u540D\u79F0"}),n("th",{children:"\u9ED8\u8BA4\u503C"}),n("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"--rv-floating-panel-z-index"}),n("td",{children:"1001"}),n("td",{children:"\u9762\u677F\u5806\u53E0\u663E\u793A\u4F18\u5148\u7EA7"})]}),u("tr",{children:[n("td",{children:"--rv-floating-panel-background-color"}),n("td",{children:"var(--rv-white)"}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-floating-panel-header-background-color"}),n("td",{children:"var(--rv-white)"}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-floating-panel-header-padding"}),n("td",{children:"8px"}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-floating-panel-thumb-background-color"}),n("td",{children:"var(--rv-gray-5)"}),n("td",{children:"\u6ED1\u5757\u989C\u8272"})]}),u("tr",{children:[n("td",{children:"--rv-floating-panel-thumb-width"}),n("td",{children:"20px"}),n("td",{children:"\u6ED1\u5757\u5BBD\u5EA6"})]}),u("tr",{children:[n("td",{children:"--rv-floating-panel-thumb-height"}),n("td",{children:"4px"}),n("td",{children:"\u6ED1\u5757\u9AD8\u5EA6"})]})]})]})]})})},s=[{Component:d,key:"floating-panel-base",title:"\u57FA\u7840\u7528\u6CD5"}],g=void 0,v=[{depth:1,text:"FloatingPanel \u6D6E\u52A8\u9762\u677F",id:"floatingpanel-\u6D6E\u52A8\u9762\u677F"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],A="/src/components/floating-panel/README.md",B="FloatingPanel \u6D6E\u52A8\u9762\u677F",f="1766203394000";var b=t=>t.children({MdContent:m,demos:s,frontmatter:g,slugs:v,filePath:A,title:B,updatedTime:f});export{m as MdContent,b as default,s as demos,A as filePath,g as frontmatter,v as slugs,B as title,f as updatedTime};
