import{a as n,j as e}from"./main.9eb8bb9a.js";import{F as t}from"./FloatingPanel.9e7a63ee.js";var d=()=>n("div",{className:"demo-flex",children:[n(t,{justify:"center",align:"center",children:[e(t.Item,{span:12,children:"span: 12"}),e(t.Item,{span:12,children:"span: 12"})]}),n(t,{children:[e(t.Item,{span:8,children:"span: 8"}),e(t.Item,{span:8,children:"span: 8"}),e(t.Item,{span:8,children:"span: 8"})]})]});const i=`import React from 'react'
import { Flex } from 'react-vant-nova'
import './style.less'

export default () => {
  return (
    <div className='demo-flex'>
      <Flex justify='center' align='center'>
        <Flex.Item span={12}>span: 12</Flex.Item>
        <Flex.Item span={12}>span: 12</Flex.Item>
      </Flex>

      <Flex>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
      </Flex>
    </div>
  )
}
`,a={code:i,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Flex } from 'react-vant-nova'
import './style.less'

export default () => {
  return (
    <div className='demo-flex'>
      <Flex justify='center' align='center'>
        <Flex.Item span={12}>span: 12</Flex.Item>
        <Flex.Item span={12}>span: 12</Flex.Item>
      </Flex>

      <Flex>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
      </Flex>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`@blue: #3f45ff;

.demo-flex {
  .rv-flexbox {
    margin-bottom: 10px;
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    .rv-flexitem {
      background-clip: content-box;

      &:nth-child(odd) {
        background-color: @blue;
      }
      &:nth-child(even) {
        background-color: lighten(@blue, 8%);
      }
    }
  }
}
`}},key:"flex-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var u=()=>e("div",{className:"demo-flex",children:n(t,{gutter:16,wrap:"wrap",children:[e(t.Item,{span:8,children:"span: 8"}),e(t.Item,{span:8,children:"span: 8"}),e(t.Item,{span:8,children:"span: 8"}),e(t.Item,{span:8,children:"span: 8"}),e(t.Item,{span:8,children:"span: 8"}),e(t.Item,{span:8,children:"span: 8"})]})});const o=`import React from 'react'
import { Flex } from 'react-vant-nova'
import './style.less'

export default () => {
  return (
    <div className='demo-flex'>
      <Flex gutter={16} wrap='wrap'>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
      </Flex>
    </div>
  )
}
`,s={code:o,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Flex } from 'react-vant-nova'
import './style.less'

export default () => {
  return (
    <div className='demo-flex'>
      <Flex gutter={16} wrap='wrap'>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
      </Flex>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`@blue: #3f45ff;

.demo-flex {
  .rv-flexbox {
    margin-bottom: 10px;
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    .rv-flexitem {
      background-clip: content-box;

      &:nth-child(odd) {
        background-color: @blue;
      }
      &:nth-child(even) {
        background-color: lighten(@blue, 8%);
      }
    }
  }
}
`}},key:"flex-gutter",meta:{title:"\u533A\u57DF\u95F4\u9694"}};var c=()=>n("div",{className:"demo-flex",children:[n(t,{direction:"row",children:[e(t.Item,{span:8,children:"span: 8-1"}),e(t.Item,{span:8,children:"span: 8-2"}),e(t.Item,{span:8,children:"span: 8-3"})]}),n(t,{direction:"row-reverse",children:[e(t.Item,{span:8,children:"span: 8-1"}),e(t.Item,{span:8,children:"span: 8-2"}),e(t.Item,{span:8,children:"span: 8-3"})]})]});const h=`import React from 'react'
import { Flex } from 'react-vant-nova'
import './style.less'

export default () => {
  return (
    <div className='demo-flex'>
      <Flex direction='row'>
        <Flex.Item span={8}>span: 8-1</Flex.Item>
        <Flex.Item span={8}>span: 8-2</Flex.Item>
        <Flex.Item span={8}>span: 8-3</Flex.Item>
      </Flex>
      <Flex direction='row-reverse'>
        <Flex.Item span={8}>span: 8-1</Flex.Item>
        <Flex.Item span={8}>span: 8-2</Flex.Item>
        <Flex.Item span={8}>span: 8-3</Flex.Item>
      </Flex>
    </div>
  )
}
`,F={code:h,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Flex } from 'react-vant-nova'
import './style.less'

export default () => {
  return (
    <div className='demo-flex'>
      <Flex direction='row'>
        <Flex.Item span={8}>span: 8-1</Flex.Item>
        <Flex.Item span={8}>span: 8-2</Flex.Item>
        <Flex.Item span={8}>span: 8-3</Flex.Item>
      </Flex>
      <Flex direction='row-reverse'>
        <Flex.Item span={8}>span: 8-1</Flex.Item>
        <Flex.Item span={8}>span: 8-2</Flex.Item>
        <Flex.Item span={8}>span: 8-3</Flex.Item>
      </Flex>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`@blue: #3f45ff;

.demo-flex {
  .rv-flexbox {
    margin-bottom: 10px;
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    .rv-flexitem {
      background-clip: content-box;

      &:nth-child(odd) {
        background-color: @blue;
      }
      &:nth-child(even) {
        background-color: lighten(@blue, 8%);
      }
    }
  }
}
`}},key:"flex-direction",meta:{title:"\u65B9\u5411"}},p=function({previewer:r=()=>null,api:C=()=>null}){const l=r;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"Flex \u5E03\u5C40"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),n("p",{children:[e("code",{children:"Flex"})," \u7EC4\u4EF6\u662F CSS ",e("code",{children:"flex"})," \u5E03\u5C40\u7684\u4E00\u4E2A\u5C01\u88C5\u3002"]}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(l,{code:"import { Flex } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),n("p",{children:[e("code",{children:"Flex"})," \u7EC4\u4EF6\u63D0\u4F9B\u4E86",e("code",{children:"24\u5217\u6805\u683C"}),"\u3002\u4F7F\u7528\u5355\u4E00\u7684\u4E00\u7EC4 ",e("code",{children:"Flex"})," \u548C ",e("code",{children:"Flex.Item"})," \u6805\u683C\u7EC4\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u57FA\u672C\u7684\u6805\u683C\u7CFB\u7EDF\uFF0C\u6240\u6709\u5217\uFF08",e("code",{children:"Flex.Item"}),"\uFF09\u5FC5\u987B\u653E\u5728 ",e("code",{children:"Flex"})," \u5185\u3002"]}),e("div",{children:e(l,{...a,children:e(d,{})})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u533A\u57DF\u95F4\u9694"}),n("p",{children:["\u901A\u8FC7",e("code",{children:"gutter"}),"\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5217\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u9ED8\u8BA4\u95F4\u8DDD\u4E3A ",e("code",{children:"0"}),"; \u5982\u679C\u9700\u8981\u5782\u76F4\u95F4\u8DDD\uFF0C\u53EF\u4EE5\u5199\u6210\u6570\u7EC4\u5F62\u5F0F ",e("code",{children:"[\u6C34\u5E73\u95F4\u8DDD, \u5782\u76F4\u95F4\u8DDD]"})]}),e("div",{children:e(l,{...s,children:e(u,{})})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u65B9\u5411"}),n("p",{children:["\u901A\u8FC7",e("code",{children:"direction"}),"\u5C5E\u6027\u8BBE\u7F6E\u5F39\u6027\u5E03\u5C40\u65B9\u5411\u3002\u9ED8\u8BA4\u662F ",e("code",{children:"row"})]}),e("div",{children:e(l,{...F,children:e(c,{})})}),e("h2",{id:"-7","data-anchor":"-7",children:"API"}),e("h3",{id:"-8","data-anchor":"-8",children:"Flex"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u6210\u5458"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"direction"}),n("td",{children:["\u9879\u76EE\u5B9A\u4F4D\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"row"})," ",e("code",{children:"row-reverse"})," ",e("code",{children:"column"})," ",e("code",{children:"column-reverse"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"row"})})]}),n("tr",{children:[e("td",{children:"wrap"}),n("td",{children:["\u5B50\u5143\u7D20\u7684\u6362\u884C\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"nowrap"})," ",e("code",{children:"wrap"})," ",e("code",{children:"wrap-reverse"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"nowrap"})})]}),n("tr",{children:[e("td",{children:"gutter"}),n("td",{children:["\u5217\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u8DDD\u3002\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u5F62\u5F0F\u540C\u65F6\u8BBE\u7F6E ",e("code",{children:"[\u6C34\u5E73\u95F4\u8DDD, \u5782\u76F4\u95F4\u8DDD]"})]}),e("td",{children:e("em",{children:"number | array"})}),e("td",{children:e("code",{children:"0"})})]}),n("tr",{children:[e("td",{children:"align"}),n("td",{children:["\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"start"})," ",e("code",{children:"center"})," ",e("code",{children:"end"})," ",e("code",{children:"baseline"})," ",e("code",{children:"stretch"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"start"})})]}),n("tr",{children:[e("td",{children:"justify"}),n("td",{children:["\u6C34\u5E73\u6392\u5217\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"start"})," ",e("code",{children:"end"})," ",e("code",{children:"center"})," ",e("code",{children:"around"})," ",e("code",{children:"between"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"start"})})]})]})]}),e("h3",{id:"-9","data-anchor":"-9",children:"Flex.Item"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u6210\u5458"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"flex"}),e("td",{children:"flex \u5E03\u5C40\u5C5E\u6027"}),e("td",{children:e("em",{children:"string | number"})}),e("td",{children:e("code",{children:"-"})})]}),n("tr",{children:[e("td",{children:"span"}),n("td",{children:["\u6805\u683C\u5360\u4F4D\u683C\u6570\uFF0C\u4E3A 0 \u65F6\u76F8\u5F53\u4E8E ",e("code",{children:"display: none"})]}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"-"})})]})]})]})]})})},m=[{Component:d,key:"flex-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:u,key:"flex-gutter",title:"\u533A\u57DF\u95F4\u9694"},{Component:c,key:"flex-direction",title:"\u65B9\u5411"}],x=void 0,I=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:2,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"}],E="/src/components/flex/README.md",f="undefined",v="1766203394000";var b=r=>r.children({MdContent:p,demos:m,frontmatter:x,slugs:I,filePath:E,title:f,updatedTime:v});export{p as MdContent,b as default,m as demos,E as filePath,x as frontmatter,I as slugs,f as title,v as updatedTime};
