import{j as e,a as u,F as l,r as s}from"./main.6f38626e.js";import{C as t,dO as i,F as C,P as E,aj as F}from"./FloatingPanel.cc4d0a22.js";var c=()=>e(t,{title:"\u57FA\u7840\u7528\u6CD5",isLink:!0,onClick:()=>i.show("\u901A\u77E5\u5185\u5BB9")});const p={code:`import React from 'react';
import { Notify, Cell } from 'react-vant-nova';

export default () => {
  return <Cell title="\u57FA\u7840\u7528\u6CD5" isLink onClick={() => Notify.show('\u901A\u77E5\u5185\u5BB9')} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Notify, Cell } from 'react-vant-nova';

export default () => {
  return <Cell title="\u57FA\u7840\u7528\u6CD5" isLink onClick={() => Notify.show('\u901A\u77E5\u5185\u5BB9')} />;
};`}},key:"notify-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var o=()=>u(l,{children:[e(t,{title:"\u4E3B\u8981\u901A\u77E5",isLink:!0,onClick:()=>i.show({type:"primary",message:"\u901A\u77E5\u5185\u5BB9"})}),e(t,{title:"\u6210\u529F\u901A\u77E5",isLink:!0,onClick:()=>i.show({type:"success",message:"\u901A\u77E5\u5185\u5BB9"})}),e(t,{title:"\u5371\u9669\u901A\u77E5",isLink:!0,onClick:()=>i.show({type:"danger",message:"\u901A\u77E5\u5185\u5BB9"})}),e(t,{title:"\u8B66\u544A\u901A\u77E5",isLink:!0,onClick:()=>i.show({type:"warning",message:"\u901A\u77E5\u5185\u5BB9"})})]});const m={code:`import React from 'react';
import { Notify, Cell } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell
        title="\u4E3B\u8981\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'primary', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
      <Cell
        title="\u6210\u529F\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'success', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
      <Cell
        title="\u5371\u9669\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'danger', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
      <Cell
        title="\u8B66\u544A\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'warning', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Notify, Cell } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell
        title="\u4E3B\u8981\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'primary', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
      <Cell
        title="\u6210\u529F\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'success', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
      <Cell
        title="\u5371\u9669\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'danger', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
      <Cell
        title="\u8B66\u544A\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'warning', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
    </>
  );
};`}},key:"notify-demo-1",meta:{title:"\u901A\u77E5\u7C7B\u578B",card:!0}};var h=()=>u(l,{children:[e(t,{title:"\u81EA\u5B9A\u4E49\u989C\u8272",isLink:!0,onClick:()=>i.show({message:"\u81EA\u5B9A\u4E49\u989C\u8272",color:"#ad0000",background:"#ffe1e1"})}),e(t,{title:"\u81EA\u5B9A\u4E49\u65F6\u957F",isLink:!0,onClick:()=>i.show({message:"\u81EA\u5B9A\u4E49\u65F6\u957F",duration:1e3})})]});const f={code:`import React from 'react';
import { Notify, Cell } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell
        title="\u81EA\u5B9A\u4E49\u989C\u8272"
        isLink
        onClick={() =>
          Notify.show({ message: '\u81EA\u5B9A\u4E49\u989C\u8272', color: '#ad0000', background: '#ffe1e1' })
        }
      />
      <Cell
        title="\u81EA\u5B9A\u4E49\u65F6\u957F"
        isLink
        onClick={() => Notify.show({ message: '\u81EA\u5B9A\u4E49\u65F6\u957F', duration: 1000 })}
      />
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Notify, Cell } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell
        title="\u81EA\u5B9A\u4E49\u989C\u8272"
        isLink
        onClick={() =>
          Notify.show({ message: '\u81EA\u5B9A\u4E49\u989C\u8272', color: '#ad0000', background: '#ffe1e1' })
        }
      />
      <Cell
        title="\u81EA\u5B9A\u4E49\u65F6\u957F"
        isLink
        onClick={() => Notify.show({ message: '\u81EA\u5B9A\u4E49\u65F6\u957F', duration: 1000 })}
      />
    </>
  );
};`}},key:"notify-demo-2",meta:{title:"\u81EA\u5B9A\u4E49\u901A\u77E5",card:!0}};var a=()=>{const[r,d]=s.exports.useState(!1);return u(l,{children:[e(t,{title:"\u7EC4\u4EF6\u8C03\u7528",isLink:!0,onClick:()=>d(!0)}),e(i,{visible:r,type:"success",children:u(C,{style:{width:"100%"},align:"center",justify:"between",children:[e("div",{}),u("div",{children:[e(E,{style:{marginRight:4}}),e("span",{children:"\u901A\u77E5\u5185\u5BB9"})]}),e(F,{onClick:()=>d(!1)})]})})]})};const y=`import React, { useState } from 'react'
import { Notify, Cell, Flex } from 'react-vant-nova'
import { Bell, Close } from '@react-vant/icons'

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell title='\u7EC4\u4EF6\u8C03\u7528' isLink onClick={() => setVisible(true)} />
      <Notify visible={visible} type='success'>
        <Flex style={{ width: '100%' }} align='center' justify='between'>
          <div />
          <div>
            <Bell style={{ marginRight: 4 }} />
            <span>\u901A\u77E5\u5185\u5BB9</span>
          </div>
          <Close onClick={() => setVisible(false)} />
        </Flex>
      </Notify>
    </>
  )
}
`,A={code:y,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { Notify, Cell, Flex } from 'react-vant-nova'
import { Bell, Close } from '@react-vant/icons'

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell title='\u7EC4\u4EF6\u8C03\u7528' isLink onClick={() => setVisible(true)} />
      <Notify visible={visible} type='success'>
        <Flex style={{ width: '100%' }} align='center' justify='between'>
          <div />
          <div>
            <Bell style={{ marginRight: 4 }} />
            <span>\u901A\u77E5\u5185\u5BB9</span>
          </div>
          <Close onClick={() => setVisible(false)} />
        </Flex>
      </Notify>
    </>
  )
}
`}},key:"notify-component",meta:{title:"\u7EC4\u4EF6\u8C03\u7528",card:!0}},B=function({previewer:r=()=>null,api:d=()=>null}){const n=r;return e("div",{children:u("div",{children:[e("h1",{id:"","data-anchor":"",children:"Notify \u6D88\u606F\u63D0\u793A"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5728\u9875\u9762\u9876\u90E8\u5C55\u793A\u6D88\u606F\u63D0\u793A\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002"}),e("h3",{id:"-2","data-anchor":"-2",children:"\u51FD\u6570\u8C03\u7528"}),e("p",{children:"Notify \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8C03\u7528\u540E\u4F1A\u76F4\u63A5\u5728\u9875\u9762\u4E2D\u5F39\u51FA\u76F8\u5E94\u7684\u6D88\u606F\u63D0\u793A\u3002"}),e(n,{code:`import { Notify } from 'react-vant-nova';

Notify.show('\u901A\u77E5\u5185\u5BB9');`,lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),e(n,{...p,children:e(c,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u901A\u77E5\u7C7B\u578B"}),u("p",{children:["\u652F\u6301 ",e("code",{children:"primary"}),"\u3001",e("code",{children:"success"}),"\u3001",e("code",{children:"warning"}),"\u3001",e("code",{children:"danger"})," \u56DB\u79CD\u901A\u77E5\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A ",e("code",{children:"danger"}),"\u3002"]}),e(n,{...m,children:e(o,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u81EA\u5B9A\u4E49\u901A\u77E5"}),e("p",{children:"\u81EA\u5B9A\u4E49\u6D88\u606F\u901A\u77E5\u7684\u989C\u8272\u548C\u5C55\u793A\u65F6\u957F\u3002"}),e(n,{...f,children:e(h,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u7EC4\u4EF6\u8C03\u7528"}),e("p",{children:"\u901A\u8FC7\u7EC4\u4EF6\u8C03\u7528 Notify \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u8FDB\u884C\u6CE8\u518C\uFF1A"}),e(n,{...A,children:e(a,{})}),e("h2",{id:"-8","data-anchor":"-8",children:"API"}),e("h3",{id:"-9","data-anchor":"-9",children:"\u65B9\u6CD5"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"Notify.show"}),e("td",{children:"\u5C55\u793A\u63D0\u793A"}),e("td",{children:e("code",{children:"options | message"})}),e("td",{children:"notify \u5B9E\u4F8B"})]}),u("tr",{children:[e("td",{children:"Notify.clear"}),e("td",{children:"\u5173\u95ED\u63D0\u793A"}),e("td",{children:"-"}),e("td",{children:e("code",{children:"void"})})]}),u("tr",{children:[e("td",{children:"Notify.setDefaultOptions"}),e("td",{children:"\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5BF9\u6240\u6709 Notify \u751F\u6548"}),e("td",{children:e("code",{children:"options"})}),e("td",{children:e("code",{children:"void"})})]}),u("tr",{children:[e("td",{children:"Notify.resetDefaultOptions"}),e("td",{children:"\u91CD\u7F6E\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5BF9\u6240\u6709 Notify \u751F\u6548"}),e("td",{children:"-"}),e("td",{children:e("code",{children:"void"})})]})]})]}),e("h3",{id:"-10","data-anchor":"-10",children:"Options"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"type"}),u("td",{children:["\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"primary"})," ",e("code",{children:"success"})," ",e("code",{children:"warning"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"danger"})})]}),u("tr",{children:[e("td",{children:"message"}),u("td",{children:["\u5C55\u793A\u6587\u6848\uFF0C\u652F\u6301\u901A\u8FC7",e("code",{children:"\\n"}),"\u6362\u884C"]}),e("td",{children:e("em",{children:"string|React.ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"duration"}),e("td",{children:"\u5C55\u793A\u65F6\u957F(ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0Cnotify \u4E0D\u4F1A\u6D88\u5931"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"3000"})})]}),u("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u5B57\u4F53\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"white"})})]}),u("tr",{children:[e("td",{children:"background"}),e("td",{children:"\u80CC\u666F\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u81EA\u5B9A\u4E49\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"lockScroll"}),e("td",{children:"\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570"}),e("td",{children:e("em",{children:"(event: MouseEvent): void"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570"}),e("td",{children:e("em",{children:"() => void"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"teleport"}),e("td",{children:"\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9"}),e("td",{children:e("em",{children:"HTMLElement | () => HTMLElement"})}),e("td",{children:e("code",{children:"body"})})]})]})]}),e("h3",{id:"-11","data-anchor":"-11",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(n,{code:"import type { NotifyType, NotifyProps } from 'react-vant-nova';",lang:"ts"}),e("h2",{id:"-12","data-anchor":"-12",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-13","data-anchor":"-13",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-notify-text-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-notify-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-xs) var(--rv-padding-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-notify-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-notify-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-notify-primary-background-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-notify-success-background-color"}),e("td",{children:e("em",{children:"var(--rv-success-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-notify-danger-background-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-notify-warning-background-color"}),e("td",{children:e("em",{children:"var(--rv-warning-color)"})}),e("td",{children:"-"})]})]})]})]})})},v=[{Component:c,key:"notify-demo",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:o,key:"notify-demo-1",title:"\u901A\u77E5\u7C7B\u578B",card:!0},{Component:h,key:"notify-demo-2",title:"\u81EA\u5B9A\u4E49\u901A\u77E5",card:!0},{Component:a,key:"notify-component",title:"\u7EC4\u4EF6\u8C03\u7528",card:!0}],g=void 0,k=[{depth:1,id:""},{depth:2,id:"-1"},{depth:3,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:2,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:2,id:"-12"},{depth:3,id:"-13"}],D="/src/components/notify/README.md",N="undefined",w="1766203394000";var L=r=>r.children({MdContent:B,demos:v,frontmatter:g,slugs:k,filePath:D,title:N,updatedTime:w});export{B as MdContent,L as default,v as demos,D as filePath,g as frontmatter,k as slugs,N as title,w as updatedTime};
