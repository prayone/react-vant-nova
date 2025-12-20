import{a as r,j as e,F as l}from"./main.6d1ac2ec.js";import{C as u,I as E,e as s,f as B,g}from"./FloatingPanel.f57aae97.js";var i=()=>r(u.Group,{children:[e(u,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"}),e(u,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9",label:"\u63CF\u8FF0\u4FE1\u606F"})]});const A=`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <Cell.Group>
      <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' />
      <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' label='\u63CF\u8FF0\u4FE1\u606F' />
    </Cell.Group>
  )
}
`,f={code:A,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <Cell.Group>
      <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' />
      <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' label='\u63CF\u8FF0\u4FE1\u606F' />
    </Cell.Group>
  )
}
`}},key:"cell-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var c=()=>e(l,{children:Array.from({length:4}).map((t,d)=>e(u,{center:!0,title:`Avatar ${d}`,label:"Deserunt dolor ea eaque eos",icon:e(E,{width:44,height:44,src:"/demo_1.jpg",round:!0}),isLink:!0},d))});const D=`import React from 'react'
import { Cell, Image } from 'react-vant-nova'

export default () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Cell
          center
          key={idx}
          title={\`Avatar \${idx}\`}
          label='Deserunt dolor ea eaque eos'
          icon={<Image width={44} height={44} src='/demo_1.jpg' round />}
          isLink
        />
      ))}
    </>
  )
}
`,x={code:D,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell, Image } from 'react-vant-nova'

export default () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Cell
          center
          key={idx}
          title={\`Avatar \${idx}\`}
          label='Deserunt dolor ea eaque eos'
          icon={<Image width={44} height={44} src='/demo_1.jpg' round />}
          isLink
        />
      ))}
    </>
  )
}
`}},key:"cell-list",meta:{title:"\u7528\u6237\u5217\u8868"}};var a=()=>r(l,{children:[e(u,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9",size:"large"}),e(u,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9",label:"\u63CF\u8FF0\u4FE1\u606F",size:"large"})]});const y=`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' size='large' />
      <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' label='\u63CF\u8FF0\u4FE1\u606F' size='large' />
    </>
  )
}
`,_={code:y,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' size='large' />
      <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' label='\u63CF\u8FF0\u4FE1\u606F' size='large' />
    </>
  )
}
`}},key:"cell-size",meta:{title:"\u5355\u5143\u683C\u5927\u5C0F"}};var o=()=>r(l,{children:[e(u,{title:"\u5355\u5143\u683C",icon:e(s,{})}),e(u,{title:"\u5355\u5143\u683C",icon:e(B,{})})]});const b=`import { FireO, LocationO } from '@react-vant/icons'
import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell title='\u5355\u5143\u683C' icon={<LocationO />} />
      <Cell title='\u5355\u5143\u683C' icon={<FireO />} />
    </>
  )
}
`,P={code:b,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.1.0"},react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import { FireO, LocationO } from '@react-vant/icons'
import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell title='\u5355\u5143\u683C' icon={<LocationO />} />
      <Cell title='\u5355\u5143\u683C' icon={<FireO />} />
    </>
  )
}
`}},key:"cell-icon",meta:{title:"\u5C55\u793A\u56FE\u6807"}};var h=()=>e(u,{value:"\u5185\u5BB9"});const M=`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return <Cell value='\u5185\u5BB9' />
}
`,k={code:M,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return <Cell value='\u5185\u5BB9' />
}
`}},key:"cell-value",meta:{title:"\u53EA\u8BBE\u7F6E value"}};var v=()=>r(l,{children:[e(u,{title:"\u5355\u5143\u683C",isLink:!0}),e(u,{title:"\u5355\u5143\u683C",isLink:!0,value:"\u5185\u5BB9"}),e(u,{title:"\u5355\u5143\u683C",isLink:!0,arrowDirection:"down",value:"\u5185\u5BB9"})]});const R=`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell title='\u5355\u5143\u683C' isLink />
      <Cell title='\u5355\u5143\u683C' isLink value='\u5185\u5BB9' />
      <Cell title='\u5355\u5143\u683C' isLink arrowDirection='down' value='\u5185\u5BB9' />
    </>
  )
}
`,w={code:R,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell title='\u5355\u5143\u683C' isLink />
      <Cell title='\u5355\u5143\u683C' isLink value='\u5185\u5BB9' />
      <Cell title='\u5355\u5143\u683C' isLink arrowDirection='down' value='\u5185\u5BB9' />
    </>
  )
}
`}},key:"cell-arrow",meta:{title:"\u5C55\u793A\u7BAD\u5934"}};var C=()=>r(l,{children:[e(u.Group,{title:"\u5206\u7EC41",children:e(u,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"})}),e(u.Group,{title:"\u5206\u7EC42",children:e(u,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"})})]});const L=`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell.Group title='\u5206\u7EC41'>
        <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' />
      </Cell.Group>
      <Cell.Group title='\u5206\u7EC42'>
        <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' />
      </Cell.Group>
    </>
  )
}
`,N={code:L,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell.Group title='\u5206\u7EC41'>
        <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' />
      </Cell.Group>
      <Cell.Group title='\u5206\u7EC42'>
        <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' />
      </Cell.Group>
    </>
  )
}
`}},key:"cell-group",meta:{title:"\u5206\u7EC4\u6807\u9898"}};var p=()=>r(u.Group,{card:!0,children:[e(u,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"}),e(u,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"})]});const G=`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <Cell.Group card>
      <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' />
      <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' />
    </Cell.Group>
  )
}
`,z={code:G,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <Cell.Group card>
      <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' />
      <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' />
    </Cell.Group>
  )
}
`}},key:"cell-card",meta:{title:"\u5361\u7247\u7C7B\u578B"}};var F=()=>e(u,{title:"\u5355\u5143\u683C",icon:e(g,{}),children:e("div",{children:"\u81EA\u5B9A\u4E49\u5185\u5BB9"})});const $=`import { ShopO } from '@react-vant/icons'
import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <Cell title='\u5355\u5143\u683C' icon={<ShopO />}>
      <div>\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
    </Cell>
  )
}
`,I={code:$,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.1.0"},react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import { ShopO } from '@react-vant/icons'
import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return (
    <Cell title='\u5355\u5143\u683C' icon={<ShopO />}>
      <div>\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
    </Cell>
  )
}
`}},key:"cell-children",meta:{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}};var m=()=>e(u,{center:!0,title:"\u5355\u5143\u683C",value:"\u5185\u5BB9",label:"\u63CF\u8FF0\u4FE1\u606F"});const O=`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return <Cell center title='\u5355\u5143\u683C' value='\u5185\u5BB9' label='\u63CF\u8FF0\u4FE1\u606F' />
}
`,S={code:O,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell } from 'react-vant-nova'

export default () => {
  return <Cell center title='\u5355\u5143\u683C' value='\u5185\u5BB9' label='\u63CF\u8FF0\u4FE1\u606F' />
}
`}},key:"cell-vertical",meta:{title:"\u5782\u76F4\u5C45\u4E2D"}},j=function({previewer:t=()=>null,api:d=()=>null}){const n=t;return e("div",{children:r("div",{children:[e("h1",{id:"","data-anchor":"",children:"Cell \u5355\u5143\u683C"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5355\u5143\u683C\u4E3A\u5217\u8868\u4E2D\u7684\u5355\u4E2A\u5C55\u793A\u9879\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(n,{code:"import { Cell } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),r("p",{children:[e("code",{children:"Cell"})," \u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u4E0E ",e("code",{children:"Cell.Group"})," \u642D\u914D\u4F7F\u7528\uFF0C",e("code",{children:"Cell.Group"})," \u53EF\u4EE5\u4E3A ",e("code",{children:"Cell"})," \u63D0\u4F9B\u4E0A\u4E0B\u5916\u8FB9\u6846\u3002"]}),e("div",{children:e(n,{...f,children:e(i,{})})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u7528\u6237\u5217\u8868"}),r("p",{children:["\u901A\u8FC7 ",e("code",{children:"icon"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9"]}),e("div",{children:e(n,{...x,children:e(c,{})})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u5355\u5143\u683C\u5927\u5C0F"}),r("p",{children:["\u901A\u8FC7 ",e("code",{children:"size"})," \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u5355\u5143\u683C\u7684\u5927\u5C0F\u3002"]}),e("div",{children:e(n,{..._,children:e(a,{})})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u5C55\u793A\u56FE\u6807"}),r("p",{children:["\u901A\u8FC7 ",e("code",{children:"icon"})," \u5C5E\u6027\u5728\u6807\u9898\u5DE6\u4FA7\u5C55\u793A\u56FE\u6807\u3002"]}),e("div",{children:e(n,{...P,children:e(o,{})})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u53EA\u8BBE\u7F6E value"}),r("p",{children:["\u53EA\u8BBE\u7F6E ",e("code",{children:"value"})," \u65F6\uFF0C\u5185\u5BB9\u4F1A\u9760\u5DE6\u5BF9\u9F50\u3002"]}),e("div",{children:e(n,{...k,children:e(h,{})})}),e("h3",{id:"-9","data-anchor":"-9",children:"\u5C55\u793A\u7BAD\u5934"}),r("p",{children:["\u8BBE\u7F6E ",e("code",{children:"isLink"})," \u5C5E\u6027\u540E\u4F1A\u5728\u5355\u5143\u683C\u53F3\u4FA7\u663E\u793A\u7BAD\u5934\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"arrowDirection"})," \u5C5E\u6027\u63A7\u5236\u7BAD\u5934\u65B9\u5411\u3002"]}),e("div",{children:e(n,{...w,children:e(v,{})})}),e("h3",{id:"-10","data-anchor":"-10",children:"\u5206\u7EC4\u6807\u9898"}),r("p",{children:["\u901A\u8FC7 ",e("code",{children:"Cell.Group"})," \u7684 ",e("code",{children:"title"})," \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u5206\u7EC4\u6807\u9898\u3002"]}),e("div",{children:e(n,{...N,children:e(C,{})})}),e("h3",{id:"-11","data-anchor":"-11",children:"\u5361\u7247\u7C7B\u578B"}),r("p",{children:["\u901A\u8FC7 ",e("code",{children:"Cell.Group"})," \u7684 ",e("code",{children:"card"})," \u5C5E\u6027\u53EF\u4EE5\u53EF\u4EE5\u5C55\u793A\u5361\u7247\u7C7B\u578B\u3002"]}),e("div",{children:e(n,{...z,children:e(p,{})})}),e("h3",{id:"-12","data-anchor":"-12",children:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}),e("p",{children:"\u5982\u4EE5\u4E0A\u7528\u6CD5\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u6765\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002"}),e("div",{children:e(n,{...I,children:e(F,{})})}),e("h3",{id:"-13","data-anchor":"-13",children:"\u5782\u76F4\u5C45\u4E2D"}),r("p",{children:["\u901A\u8FC7 ",e("code",{children:"center"})," \u5C5E\u6027\u53EF\u4EE5\u8BA9 ",e("code",{children:"Cell"})," \u7684\u5DE6\u53F3\u5185\u5BB9\u90FD\u5782\u76F4\u5C45\u4E2D\u3002"]}),e("div",{children:e(n,{...S,children:e(m,{})})}),e("h2",{id:"-14","data-anchor":"-14",children:"API"}),e("h3",{id:"-15","data-anchor":"-15",children:"CellGroup Props"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u5206\u7EC4\u6807\u9898"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5916\u8FB9\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),r("tr",{children:[e("td",{children:"inset"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u4E3A\u5706\u89D2\u5361\u7247\u98CE\u683C"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-16","data-anchor":"-16",children:"Cell Props"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u5DE6\u4FA7\u6807\u9898"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u53F3\u4FA7\u5185\u5BB9"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"label"}),e("td",{children:"\u6807\u9898\u4E0B\u65B9\u7684\u63CF\u8FF0\u4FE1\u606F"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"extra"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6700\u53F3\u4FA7\u7684\u989D\u5916\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"size"}),r("td",{children:["\u5355\u5143\u683C\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"large"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"icon"}),e("td",{children:"\u5DE6\u4FA7\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"rightIcon"}),r("td",{children:["\u81EA\u5B9A\u4E49\u53F3\u4FA7\u6309\u94AE\uFF0C\u9ED8\u8BA4\u4E3A",e("code",{children:"arrow"})]}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),r("tr",{children:[e("td",{children:"replace"}),e("td",{children:"\u662F\u5426\u5728\u8DF3\u8F6C\u65F6\u66FF\u6362\u5F53\u524D\u9875\u9762\u5386\u53F2"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"clickable"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u70B9\u51FB\u53CD\u9988"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"isLink"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"required"}),e("td",{children:"\u662F\u5426\u663E\u793A\u8868\u5355\u5FC5\u586B\u661F\u53F7"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"center"}),e("td",{children:"\u662F\u5426\u4F7F\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"arrowDirection"}),r("td",{children:["\u7BAD\u5934\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"left"})," ",e("code",{children:"up"})," ",e("code",{children:"down"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"right"})})]}),r("tr",{children:[e("td",{children:"titleStyle"}),e("td",{children:"\u5DE6\u4FA7\u6807\u9898\u989D\u5916\u6837\u5F0F"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"titleClass"}),e("td",{children:"\u5DE6\u4FA7\u6807\u9898\u989D\u5916\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"valueClass"}),e("td",{children:"\u53F3\u4FA7\u5185\u5BB9\u989D\u5916\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"labelClass"}),e("td",{children:"\u63CF\u8FF0\u4FE1\u606F\u989D\u5916\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-17","data-anchor":"-17",children:"Cell Events"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:r("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u5355\u5143\u683C\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]})})]}),e("h3",{id:"-18","data-anchor":"-18",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(n,{code:"import type { CellArrowDirection } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-19","data-anchor":"-19",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-20","data-anchor":"-20",children:"\u6837\u5F0F\u53D8\u91CF"}),r("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"--rv-cell-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-line-height"}),e("td",{children:e("em",{children:"24px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-vertical-padding"}),e("td",{children:e("em",{children:"10px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-horizontal-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-md)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-border-color"}),e("td",{children:e("em",{children:"var(--rv-border-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-active-color"}),e("td",{children:e("em",{children:"var(--rv-active-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-required-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-label-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-label-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-label-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-sm)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-label-margin-top"}),e("td",{children:e("em",{children:"var(--rv-padding-base)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-value-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-icon-size"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-right-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-large-vertical-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-sm)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-large-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-lg)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-large-label-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-group-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-group-title-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-group-title-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-md) var(--rv-padding-md) var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-group-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-group-title-line-height"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-group-inset-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-md)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-group-inset-border-radius"}),e("td",{children:e("em",{children:"var(--rv-border-radius-lg)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-cell-group-inset-title-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-md) var(--rv-padding-md) var(--rv-padding-xs) var(--rv-padding-xl)"})}),e("td",{children:"-"})]})]})]})]})})},q=[{Component:i,key:"cell-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:c,key:"cell-list",title:"\u7528\u6237\u5217\u8868"},{Component:a,key:"cell-size",title:"\u5355\u5143\u683C\u5927\u5C0F"},{Component:o,key:"cell-icon",title:"\u5C55\u793A\u56FE\u6807"},{Component:h,key:"cell-value",title:"\u53EA\u8BBE\u7F6E value"},{Component:v,key:"cell-arrow",title:"\u5C55\u793A\u7BAD\u5934"},{Component:C,key:"cell-group",title:"\u5206\u7EC4\u6807\u9898"},{Component:p,key:"cell-card",title:"\u5361\u7247\u7C7B\u578B"},{Component:F,key:"cell-children",title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{Component:m,key:"cell-vertical",title:"\u5782\u76F4\u5C45\u4E2D"}],T=void 0,H=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"},{depth:2,id:"-14"},{depth:3,id:"-15"},{depth:3,id:"-16"},{depth:3,id:"-17"},{depth:3,id:"-18"},{depth:2,id:"-19"},{depth:3,id:"-20"}],J="/src/components/cell/README.md",K="undefined",Q="1766203394000";var W=t=>t.children({MdContent:j,demos:q,frontmatter:T,slugs:H,filePath:J,title:K,updatedTime:Q});export{j as MdContent,W as default,q as demos,J as filePath,T as frontmatter,H as slugs,K as title,Q as updatedTime};
