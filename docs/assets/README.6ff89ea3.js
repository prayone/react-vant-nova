import{j as n,a as t}from"./main.af98c409.js";import{eb as e,ac as c,a5 as o,g as d,cE as B}from"./FloatingPanel.788cd8cb.js";var u=()=>n("div",{className:"demo-action-bar",children:t(e,{children:[n(e.Icon,{icon:n(c,{}),text:"\u5BA2\u670D",onClick:()=>console.log("chat click")}),n(e.Icon,{icon:n(o,{}),text:"\u8D2D\u7269\u8F66",onClick:()=>console.log("cart click")}),n(e.Icon,{icon:n(d,{}),text:"\u5E97\u94FA",onClick:()=>console.log("shop click")}),n(e.Button,{type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70",onClick:()=>console.log("button click")})]})});const A=`import React from 'react'
import { CartO, ChatO, ShopO } from '@react-vant/icons'
import { ActionBar } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon
          icon={<ChatO />}
          text='\u5BA2\u670D'
          onClick={() => console.log('chat click')}
        />
        <ActionBar.Icon
          icon={<CartO />}
          text='\u8D2D\u7269\u8F66'
          onClick={() => console.log('cart click')}
        />
        <ActionBar.Icon
          icon={<ShopO />}
          text='\u5E97\u94FA'
          onClick={() => console.log('shop click')}
        />
        <ActionBar.Button
          type='danger'
          text='\u7ACB\u5373\u8D2D\u4E70'
          onClick={() => console.log('button click')}
        />
      </ActionBar>
    </div>
  )
}
`,p={code:A,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { CartO, ChatO, ShopO } from '@react-vant/icons'
import { ActionBar } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon
          icon={<ChatO />}
          text='\u5BA2\u670D'
          onClick={() => console.log('chat click')}
        />
        <ActionBar.Icon
          icon={<CartO />}
          text='\u8D2D\u7269\u8F66'
          onClick={() => console.log('cart click')}
        />
        <ActionBar.Icon
          icon={<ShopO />}
          text='\u5E97\u94FA'
          onClick={() => console.log('shop click')}
        />
        <ActionBar.Button
          type='danger'
          text='\u7ACB\u5373\u8D2D\u4E70'
          onClick={() => console.log('button click')}
        />
      </ActionBar>
    </div>
  )
}
`}},key:"action-bar-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var a=()=>n("div",{className:"demo-action-bar",children:t(e,{children:[n(e.Icon,{icon:n(c,{}),badge:{dot:!0},text:"\u5BA2\u670D"}),n(e.Icon,{icon:n(o,{}),badge:{content:5},text:"\u8D2D\u7269\u8F66"}),n(e.Icon,{icon:n(d,{}),badge:{content:12},text:"\u5E97\u94FA"}),n(e.Button,{type:"warning",text:"\u52A0\u5165\u8D2D\u7269\u8F66"}),n(e.Button,{type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]})});const v=`import React from 'react'
import { CartO, ChatO, ShopO } from '@react-vant/icons'
import { ActionBar } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} badge={{ dot: true }} text='\u5BA2\u670D' />
        <ActionBar.Icon icon={<CartO />} badge={{ content: 5 }} text='\u8D2D\u7269\u8F66' />
        <ActionBar.Icon icon={<ShopO />} badge={{ content: 12 }} text='\u5E97\u94FA' />
        <ActionBar.Button type='warning' text='\u52A0\u5165\u8D2D\u7269\u8F66' />
        <ActionBar.Button type='danger' text='\u7ACB\u5373\u8D2D\u4E70' />
      </ActionBar>
    </div>
  )
}
`,s={code:v,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { CartO, ChatO, ShopO } from '@react-vant/icons'
import { ActionBar } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} badge={{ dot: true }} text='\u5BA2\u670D' />
        <ActionBar.Icon icon={<CartO />} badge={{ content: 5 }} text='\u8D2D\u7269\u8F66' />
        <ActionBar.Icon icon={<ShopO />} badge={{ content: 12 }} text='\u5E97\u94FA' />
        <ActionBar.Button type='warning' text='\u52A0\u5165\u8D2D\u7269\u8F66' />
        <ActionBar.Button type='danger' text='\u7ACB\u5373\u8D2D\u4E70' />
      </ActionBar>
    </div>
  )
}
`}},key:"action-bar-badge",meta:{title:"\u5FBD\u6807\u63D0\u793A"}};var l=()=>n("div",{className:"demo-action-bar",children:t(e,{children:[n(e.Icon,{icon:n(c,{color:"red"}),text:"\u5BA2\u670D"}),n(e.Icon,{icon:n(o,{color:"red"}),text:"\u8D2D\u7269\u8F66"}),n(e.Icon,{icon:n(B,{color:"red"}),text:"\u5E97\u94FA"}),n(e.Button,{type:"warning",text:"\u52A0\u5165\u8D2D\u7269\u8F66"}),n(e.Button,{type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]})});const m=`import React from 'react'
import { CartO, ChatO, Star } from '@react-vant/icons'
import { ActionBar } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO color='red' />} text='\u5BA2\u670D' />
        <ActionBar.Icon icon={<CartO color='red' />} text='\u8D2D\u7269\u8F66' />
        <ActionBar.Icon icon={<Star color='red' />} text='\u5E97\u94FA' />
        <ActionBar.Button type='warning' text='\u52A0\u5165\u8D2D\u7269\u8F66' />
        <ActionBar.Button type='danger' text='\u7ACB\u5373\u8D2D\u4E70' />
      </ActionBar>
    </div>
  )
}
`,E={code:m,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { CartO, ChatO, Star } from '@react-vant/icons'
import { ActionBar } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO color='red' />} text='\u5BA2\u670D' />
        <ActionBar.Icon icon={<CartO color='red' />} text='\u8D2D\u7269\u8F66' />
        <ActionBar.Icon icon={<Star color='red' />} text='\u5E97\u94FA' />
        <ActionBar.Button type='warning' text='\u52A0\u5165\u8D2D\u7269\u8F66' />
        <ActionBar.Button type='danger' text='\u7ACB\u5373\u8D2D\u4E70' />
      </ActionBar>
    </div>
  )
}
`}},key:"action-bar-iconcolor",meta:{title:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272"}};var h=()=>n("div",{className:"demo-action-bar",children:t(e,{children:[n(e.Icon,{icon:n(c,{}),text:"\u5BA2\u670D"}),n(e.Icon,{icon:n(o,{}),text:"\u8D2D\u7269\u8F66"}),n(e.Button,{color:"#be99ff",type:"warning",text:"\u52A0\u5165\u8D2D\u7269\u8F66"}),n(e.Button,{color:"#7232dd",type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]})});const C=`import React from 'react'
import { CartO, ChatO } from '@react-vant/icons'
import { ActionBar } from 'react-vant-nova'
import './style.less'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} text='\u5BA2\u670D' />
        <ActionBar.Icon icon={<CartO />} text='\u8D2D\u7269\u8F66' />
        <ActionBar.Button color='#be99ff' type='warning' text='\u52A0\u5165\u8D2D\u7269\u8F66' />
        <ActionBar.Button color='#7232dd' type='danger' text='\u7ACB\u5373\u8D2D\u4E70' />
      </ActionBar>
    </div>
  )
}
`,F={code:C,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { CartO, ChatO } from '@react-vant/icons'
import { ActionBar } from 'react-vant-nova'
import './style.less'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} text='\u5BA2\u670D' />
        <ActionBar.Icon icon={<CartO />} text='\u8D2D\u7269\u8F66' />
        <ActionBar.Button color='#be99ff' type='warning' text='\u52A0\u5165\u8D2D\u7269\u8F66' />
        <ActionBar.Button color='#7232dd' type='danger' text='\u7ACB\u5373\u8D2D\u4E70' />
      </ActionBar>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-action-bar {
  .rv-action-bar {
    position: relative;
    padding-bottom: 0;
  }
}
`}},key:"action-bar-btncolor",meta:{title:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"}},D=function({previewer:i=()=>null,api:O=()=>null}){const r=i;return n("div",{children:t("div",{children:[n("h1",{id:"","data-anchor":"",children:"ActionBar \u52A8\u4F5C\u680F"}),n("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),n("p",{children:"\u7528\u4E8E\u4E3A\u9875\u9762\u76F8\u5173\u64CD\u4F5C\u63D0\u4F9B\u4FBF\u6377\u4EA4\u4E92\u3002"}),n("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),n(r,{code:"import { ActionBar } from 'react-vant-nova';",lang:"js"}),n("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),n(r,{...p,children:n(u,{})}),n("h3",{id:"-5","data-anchor":"-5",children:"\u5FBD\u6807\u63D0\u793A"}),t("p",{children:["\u5728 ActionBar.Icon \u7EC4\u4EF6\u4E0A\u53EF\u4EE5\u8BBE\u7F6E ",n("code",{children:"badge"})," \u5C5E\u6027\u3002"]}),n(r,{...s,children:n(a,{})}),n("h3",{id:"-6","data-anchor":"-6",children:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272"}),t("p",{children:["\u901A\u8FC7 ",n("code",{children:"ActionBar.Icon"})," \u7684 ",n("code",{children:"icon"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u7075\u6D3B\u8BBE\u7F6E icon\u3002"]}),n(r,{...E,children:n(l,{})}),n("h3",{id:"-7","data-anchor":"-7",children:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"}),t("p",{children:["\u901A\u8FC7 ",n("code",{children:"ActionBar.Button"})," \u7684 ",n("code",{children:"color"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u7684\u989C\u8272\uFF0C\u652F\u6301\u4F20\u5165 ",n("code",{children:"linear-gradient"})," \u6E10\u53D8\u8272\u3002"]}),n(r,{...F,children:n(h,{})}),n("h2",{id:"-8","data-anchor":"-8",children:"API"}),n("h3",{id:"-9","data-anchor":"-9",children:"ActionBar Props"}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:t("tr",{children:[n("td",{children:"safeAreaInsetBottom"}),t("td",{children:["\u662F\u5426\u5F00\u542F",n("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]})})]}),n("h3",{id:"-10","data-anchor":"-10",children:"ActionBarIcon Props"}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[n("td",{children:"text"}),n("td",{children:"\u6309\u94AE\u6587\u5B57"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"icon"}),n("td",{children:"\u56FE\u6807"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"badge"}),n("td",{children:"\u56FE\u6807\u53F3\u4E0A\u89D2\u5FBD\u6807\u8BBE\u7F6E"}),n("td",{children:n("em",{children:"BadgeProps"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"onClick"}),n("td",{children:"\u70B9\u51FB\u4E8B\u4EF6"}),n("td",{children:n("em",{children:"(event) => void"})}),n("td",{children:"-"})]})]})]}),n("h3",{id:"-11","data-anchor":"-11",children:"ActionBarButton Props"}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[n("td",{children:"text"}),n("td",{children:"\u6309\u94AE\u6587\u5B57"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"type"}),t("td",{children:["\u6309\u94AE\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",n("code",{children:"primary"})," ",n("code",{children:"info"})," ",n("code",{children:"warning"})," ",n("code",{children:"danger"})]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"default"})})]}),t("tr",{children:[n("td",{children:"color"}),t("td",{children:["\u6309\u94AE\u989C\u8272\uFF0C\u652F\u6301\u4F20\u5165 ",n("code",{children:"linear-gradient"})," \u6E10\u53D8\u8272"]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"icon"}),n("td",{children:"\u5DE6\u4FA7\u56FE\u6807"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"disabled"}),n("td",{children:"\u662F\u5426\u7981\u7528\u6309\u94AE"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"loading"}),n("td",{children:"\u662F\u5426\u663E\u793A\u4E3A\u52A0\u8F7D\u72B6\u6001"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"onClick"}),n("td",{children:"\u70B9\u51FB\u4E8B\u4EF6"}),n("td",{children:n("em",{children:"(event) => void"})}),n("td",{children:"-"})]})]})]}),n("h2",{id:"-12","data-anchor":"-12",children:"\u4E3B\u9898\u5B9A\u5236"}),n("h3",{id:"-13","data-anchor":"-13",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",n("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u540D\u79F0"}),n("th",{children:"\u9ED8\u8BA4\u503C"}),n("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[n("td",{children:"--rv-action-bar-background-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-height"}),n("td",{children:n("em",{children:"50px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-width"}),n("td",{children:n("em",{children:"48px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-height"}),n("td",{children:n("em",{children:"100%"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-color"}),n("td",{children:n("em",{children:"var(--rv-text-color)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-size"}),n("td",{children:n("em",{children:"18px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-font-size"}),n("td",{children:n("em",{children:"var(--rv-font-size-xs)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-active-color"}),n("td",{children:n("em",{children:"var(--rv-active-color)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-text-color"}),n("td",{children:n("em",{children:"var(--rv-gray-7)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-background-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-button-height"}),n("td",{children:n("em",{children:"40px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-button-warning-color"}),n("td",{children:n("em",{children:"var(--rv-gradient-orange)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-button-danger-color"}),n("td",{children:n("em",{children:"var(--rv-gradient-red)"})}),n("td",{children:"-"})]})]})]})]})})},g=[{Component:u,key:"action-bar-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:a,key:"action-bar-badge",title:"\u5FBD\u6807\u63D0\u793A"},{Component:l,key:"action-bar-iconcolor",title:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272"},{Component:h,key:"action-bar-btncolor",title:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"}],x=void 0,b=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:2,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:2,id:"-12"},{depth:3,id:"-13"}],f="/src/components/action-bar/README.md",y="undefined",I="1766203394000";var P=i=>i.children({MdContent:D,demos:g,frontmatter:x,slugs:b,filePath:f,title:y,updatedTime:I});export{D as MdContent,P as default,g as demos,f as filePath,x as frontmatter,b as slugs,y as title,I as updatedTime};
