import{a as d,j as e}from"./main.6f38626e.js";import{S as r,dd as t,cI as B,ax as C,aH as m}from"./FloatingPanel.cc4d0a22.js";const u=()=>e("div",{style:{width:40,height:40,background:"#f2f3f5",borderRadius:4}});var h=()=>d(r,{gap:20,children:[e(t,{content:5,children:e(u,{})}),e(t,{content:10,children:e(u,{})}),e(t,{content:"hot",children:e(u,{})}),e(t,{dot:!0,children:e(u,{})})]});const f={code:`import React from 'react';
import { Space, Badge } from 'react-vant-nova';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge content={5}>
        <Child />
      </Badge>
      <Badge content={10}>
        <Child />
      </Badge>
      <Badge content="hot">
        <Child />
      </Badge>
      <Badge dot>
        <Child />
      </Badge>
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Badge } from 'react-vant-nova';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge content={5}>
        <Child />
      </Badge>
      <Badge content={10}>
        <Child />
      </Badge>
      <Badge content="hot">
        <Child />
      </Badge>
      <Badge dot>
        <Child />
      </Badge>
    </Space>
  );
};`}},key:"badge-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},i=()=>e("div",{style:{width:40,height:40,background:"#f2f3f5",borderRadius:4}});var l=()=>d(r,{gap:20,children:[e(t,{content:20,max:9,children:e(i,{})}),e(t,{content:"99",max:"20",children:e(i,{})}),e(t,{content:"9999",max:"99",children:e(i,{})})]});const F={code:`import React from 'react';
import { Space, Badge } from 'react-vant-nova';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge content={20} max={9}>
        <Child />
      </Badge>
      <Badge content="99" max="20">
        <Child />
      </Badge>
      <Badge content="9999" max="99">
        <Child />
      </Badge>
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Badge } from 'react-vant-nova';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge content={20} max={9}>
        <Child />
      </Badge>
      <Badge content="99" max="20">
        <Child />
      </Badge>
      <Badge content="9999" max="99">
        <Child />
      </Badge>
    </Space>
  );
};`}},key:"badge-demo-1",meta:{title:"\u6700\u5927\u503C"}},c=()=>e("div",{style:{width:40,height:40,background:"#f2f3f5",borderRadius:4}});var g=()=>d(r,{gap:20,children:[e(t,{dot:!0,offset:["100%",0],children:e(c,{})}),e(t,{dot:!0,color:"#87d068",children:e(c,{})}),e(t,{dot:!0,offset:[0,"100%"],color:"#3f45ff",children:e(c,{})}),e(t,{dot:!0,offset:["100%","100%"],color:"orange",children:e(c,{})})]});const v={code:`import React from 'react';
import { Space, Badge } from 'react-vant-nova';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge dot offset={['100%', 0]}>
        <Child />
      </Badge>

      <Badge dot color="#87d068">
        <Child />
      </Badge>

      <Badge dot offset={[0, '100%']} color="#3f45ff">
        <Child />
      </Badge>

      <Badge dot offset={['100%', '100%']} color="orange">
        <Child />
      </Badge>
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Badge } from 'react-vant-nova';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge dot offset={['100%', 0]}>
        <Child />
      </Badge>

      <Badge dot color="#87d068">
        <Child />
      </Badge>

      <Badge dot offset={[0, '100%']} color="#3f45ff">
        <Child />
      </Badge>

      <Badge dot offset={['100%', '100%']} color="orange">
        <Child />
      </Badge>
    </Space>
  );
};`}},key:"badge-demo-2",meta:{title:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u504F\u79FB\u91CF"}},o=()=>e("div",{style:{width:40,height:40,background:"#f2f3f5",borderRadius:4}});var p=()=>d(r,{gap:20,children:[e(t,{content:e(B,{}),children:e(o,{})}),e(t,{content:e(C,{}),children:e(o,{})}),e(t,{content:e(m,{}),children:e(o,{})})]});const E=`import React from 'react'
import { Badge, Space } from 'react-vant-nova'
import { Success, Cross, Down } from '@react-vant/icons'

const Child = () => (
  <div
    style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }}
  />
)

export default () => {
  return (
    <Space gap={20}>
      <Badge content={<Success />}>
        <Child />
      </Badge>
      <Badge content={<Cross />}>
        <Child />
      </Badge>
      <Badge content={<Down />}>
        <Child />
      </Badge>
    </Space>
  )
}
`,b={code:E,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Badge, Space } from 'react-vant-nova'
import { Success, Cross, Down } from '@react-vant/icons'

const Child = () => (
  <div
    style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }}
  />
)

export default () => {
  return (
    <Space gap={20}>
      <Badge content={<Success />}>
        <Child />
      </Badge>
      <Badge content={<Cross />}>
        <Child />
      </Badge>
      <Badge content={<Down />}>
        <Child />
      </Badge>
    </Space>
  )
}
`}},key:"badge-custom",meta:{title:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9"}};var s=()=>d(r,{gap:20,children:[e(t,{content:"20",style:{marginRight:16}}),e(t,{content:"200",max:"99"})]});const A={code:`import React from 'react';
import { Space, Badge } from 'react-vant-nova';

export default () => {
  return (
    <Space gap={20}>
      <Badge content="20" style={{ marginRight: 16 }} />
      <Badge content="200" max="99" />
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Badge } from 'react-vant-nova';

export default () => {
  return (
    <Space gap={20}>
      <Badge content="20" style={{ marginRight: 16 }} />
      <Badge content="200" max="99" />
    </Space>
  );
};`}},key:"badge-demo-3",meta:{title:"\u72EC\u7ACB\u5C55\u793A"}},x=function({previewer:a=()=>null,api:P=()=>null}){const n=a;return e("div",{children:d("div",{children:[e("h1",{id:"","data-anchor":"",children:"Badge \u5FBD\u6807"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5728\u53F3\u4E0A\u89D2\u5C55\u793A\u5FBD\u6807\u6570\u5B57\u6216\u5C0F\u7EA2\u70B9\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(n,{code:"import { Badge } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),d("p",{children:["\u8BBE\u7F6E ",e("code",{children:"content"})," \u5C5E\u6027\u540E\uFF0CBadge \u4F1A\u5728\u5B50\u5143\u7D20\u7684\u53F3\u4E0A\u89D2\u663E\u793A\u5BF9\u5E94\u7684\u5FBD\u6807\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"dot"})," \u6765\u663E\u793A\u5C0F\u7EA2\u70B9\u3002"]}),e(n,{...f,children:e(h,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u6700\u5927\u503C"}),d("p",{children:["\u8BBE\u7F6E ",e("code",{children:"max"})," \u5C5E\u6027\u540E\uFF0C\u5F53 ",e("code",{children:"content"})," \u7684\u6570\u503C\u8D85\u8FC7\u6700\u5927\u503C\u65F6\uFF0C\u4F1A\u81EA\u52A8\u663E\u793A\u4E3A ",d("code",{children:["{","max","}","+"]}),"\u3002"]}),e(n,{...F,children:e(l,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u504F\u79FB\u91CF"}),d("ul",{children:[d("li",{children:["\u901A\u8FC7 ",e("code",{children:"color"})," \u5C5E\u6027\u6765\u8BBE\u7F6E\u5FBD\u6807\u7684\u989C\u8272"]}),d("li",{children:["\u901A\u8FC7 ",e("code",{children:"offset"})," \u5C5E\u6027\u6765\u8C03\u6574\u5FBD\u6807\u7684\u504F\u79FB\u91CF"]})]}),e(n,{...v,children:e(g,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9"}),e(n,{...b,children:e(p,{})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u72EC\u7ACB\u5C55\u793A"}),e("p",{children:"\u5F53 Badge \u6CA1\u6709\u5B50\u5143\u7D20\u65F6\uFF0C\u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u5143\u7D20\u8FDB\u884C\u5C55\u793A\u3002"}),e(n,{...A,children:e(s,{})}),e("h2",{id:"-9","data-anchor":"-9",children:"API"}),e("h3",{id:"-10","data-anchor":"-10",children:"Props"}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),d("tbody",{children:[d("tr",{children:[e("td",{children:"content"}),e("td",{children:"\u5FBD\u6807\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u5FBD\u6807\u80CC\u666F\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#f44336"})})]}),d("tr",{children:[e("td",{children:"dot"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u4E3A\u5C0F\u7EA2\u70B9"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),d("tr",{children:[e("td",{children:"max"}),d("td",{children:["\u6700\u5927\u503C\uFF0C\u8D85\u8FC7\u6700\u5927\u503C\u4F1A\u663E\u793A ",d("code",{children:["{","max","}","+"]}),"\uFF0C\u4EC5\u5F53 content \u4E3A\u6570\u5B57\u65F6\u6709\u6548"]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"offset"}),d("td",{children:["\u8BBE\u7F6E\u5FBD\u6807\u7684\u504F\u79FB\u91CF\uFF0C\u6570\u7EC4\u7684\u4E24\u9879\u5206\u522B\u5BF9\u5E94\u6C34\u5E73\u548C\u5782\u76F4\u65B9\u5411\u7684\u504F\u79FB\u91CF\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"[number | string, number | string]"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"showZero"}),e("td",{children:"\u5F53 content \u4E3A\u6570\u5B57 0 \u65F6\uFF0C\u662F\u5426\u5C55\u793A\u5FBD\u6807"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h3",{id:"-11","data-anchor":"-11",children:"\u4E8B\u4EF6"}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:d("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]})})]}),e("h2",{id:"-12","data-anchor":"-12",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-13","data-anchor":"-13",children:"\u6837\u5F0F\u53D8\u91CF"}),d("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),d("tbody",{children:[d("tr",{children:[e("td",{children:"--rv-badge-size"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-padding"}),e("td",{children:e("em",{children:"0 3px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-font-weight"}),e("td",{children:e("em",{children:"var(--rv-font-weight-bold)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-border-width"}),e("td",{children:e("em",{children:"var(--rv-border-width-base)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-background-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-dot-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-dot-size"}),e("td",{children:e("em",{children:"8px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-font-family"}),e("td",{children:e("em",{children:"-apple-system-font, Helvetica Neue, Arial, sans-serif"})}),e("td",{children:"-"})]})]})]})]})})},y=[{Component:h,key:"badge-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:l,key:"badge-demo-1",title:"\u6700\u5927\u503C"},{Component:g,key:"badge-demo-2",title:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u504F\u79FB\u91CF"},{Component:p,key:"badge-custom",title:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9"},{Component:s,key:"badge-demo-3",title:"\u72EC\u7ACB\u5C55\u793A"}],D={simulator:{compact:!1,style:{background:"#fff"}}},S=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:2,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:2,id:"-12"},{depth:3,id:"-13"}],w="/src/components/badge/README.md",R="undefined",k="1766203394000";var j=a=>a.children({MdContent:x,demos:y,frontmatter:D,slugs:S,filePath:w,title:R,updatedTime:k});export{x as MdContent,j as default,y as demos,w as filePath,D as frontmatter,S as slugs,R as title,k as updatedTime};
