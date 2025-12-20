import{j as n,a as e}from"./main.9eb8bb9a.js";import{e9 as c,da as a,db as u,e as h,cD as l,a5 as o,aG as F,D as E,ea as p}from"./FloatingPanel.9e7a63ee.js";var d=()=>n("div",{children:e(c,{anchors:[170,320,window.innerHeight*.8],children:[n(a,{}),e(u,{gutter:8,children:[n(u.Item,{icon:n(h,{}),onClick:()=>0,text:"\u9644\u8FD1"}),n(u.Item,{icon:n(l,{}),onClick:()=>0,text:"\u6536\u85CF"}),n(u.Item,{icon:n(o,{}),onClick:()=>0,text:"\u8D2D\u7269\u8F66"}),n(u.Item,{icon:n(F,{}),onClick:()=>0,text:"\u4F18\u60E0"})]}),n(E,{children:"\u597D\u7269\u63A8\u8350"}),Array.from(Array(5)).map((t,i)=>n(p,{title:"\u70ED\u5356\u5546\u54C1"+i,thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",desc:"\u70ED\u5356\u5546\u54C1\uFF0C\u4F18\u60E0\u540E 2.00",num:3,price:"2.00"},i))]})});const C=`import React from 'react'
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
`,D={code:C,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React from 'react'
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
`}},key:"floating-panel-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},m=function({previewer:t=()=>null,api:i=()=>null}){const r=t;return n("div",{children:e("div",{children:[n("h1",{id:"","data-anchor":"",children:"FloatingPanel \u6D6E\u52A8\u9762\u677F"}),n("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),n("p",{children:"\u53EF\u4EE5\u4E0A\u4E0B\u62D6\u52A8\u7684\u6D6E\u52A8\u9762\u677F\u3002"}),n("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),n(r,{code:"import { FloatingPanel } from 'react-vant-nova';",lang:"js"}),n("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),n(r,{...D,children:n(d,{})}),n("h2",{id:"-5","data-anchor":"-5",children:"API"}),n("h3",{id:"-6","data-anchor":"-6",children:"Props"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"anchors"}),e("td",{children:["\u53EF\u62D6\u62FD\u81F3\u54EA\u4E9B\u9AD8\u5EA6\uFF0C\u5355\u4F4D\u4E3A ",n("code",{children:"px"})]}),n("td",{children:n("em",{children:"number[]"})}),n("td",{children:n("code",{children:"[100]"})})]}),e("tr",{children:[n("td",{children:"onHeightChange"}),n("td",{children:"\u9762\u677F\u9AD8\u5EA6\u53D8\u5316\u65F6\u89E6\u53D1"}),n("td",{children:n("em",{children:"(height: number) => void"})}),n("td",{children:"-"})]})]})]}),n("h3",{id:"-7","data-anchor":"-7",children:"\u65B9\u6CD5"}),e("p",{children:["\u901A\u8FC7 ",n("code",{children:"ref"})," \u53EF\u4EE5\u83B7\u53D6\u5230 ",n("code",{children:"FloatingPanel"})," \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1",n("a",{href:"/guide/advanced-usage#zu-jian-shi-li-fang-fa",children:"\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5"}),"\u3002"]}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u65B9\u6CD5\u540D"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"})]})}),n("tbody",{children:e("tr",{children:[n("td",{children:"moveTo"}),n("td",{children:"\u79FB\u52A8\u5230\u6307\u5B9A\u9AD8\u5EA6"}),n("td",{children:n("em",{children:"(height: number) => void"})})]})})]}),n("h2",{id:"-8","data-anchor":"-8",children:"\u4E3B\u9898\u5B9A\u5236"}),n("h3",{id:"-9","data-anchor":"-9",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",n("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u540D\u79F0"}),n("th",{children:"\u9ED8\u8BA4\u503C"}),n("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"--rv-floating-panel-z-index"}),n("td",{children:"1001"}),n("td",{children:"\u9762\u677F\u5806\u53E0\u663E\u793A\u4F18\u5148\u7EA7"})]}),e("tr",{children:[n("td",{children:"--rv-floating-panel-background-color"}),n("td",{children:"var(--rv-white)"}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-floating-panel-header-background-color"}),n("td",{children:"var(--rv-white)"}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-floating-panel-header-padding"}),n("td",{children:"8px"}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-floating-panel-thumb-background-color"}),n("td",{children:"var(--rv-gray-5)"}),n("td",{children:"\u6ED1\u5757\u989C\u8272"})]}),e("tr",{children:[n("td",{children:"--rv-floating-panel-thumb-width"}),n("td",{children:"20px"}),n("td",{children:"\u6ED1\u5757\u5BBD\u5EA6"})]}),e("tr",{children:[n("td",{children:"--rv-floating-panel-thumb-height"}),n("td",{children:"4px"}),n("td",{children:"\u6ED1\u5757\u9AD8\u5EA6"})]})]})]})]})})},s=[{Component:d,key:"floating-panel-base",title:"\u57FA\u7840\u7528\u6CD5"}],v=void 0,g=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:2,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:2,id:"-8"},{depth:3,id:"-9"}],A="/src/components/floating-panel/README.md",f="undefined",B="1766203394000";var b=t=>t.children({MdContent:m,demos:s,frontmatter:v,slugs:g,filePath:A,title:f,updatedTime:B});export{m as MdContent,b as default,s as demos,A as filePath,v as frontmatter,g as slugs,f as title,B as updatedTime};
