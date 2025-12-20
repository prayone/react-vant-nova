import{r as a,j as e,a as t}from"./main.6f38626e.js";import{ee as u,b as h,d as s}from"./FloatingPanel.cc4d0a22.js";var i=()=>{const[n,r]=a.exports.useState(1);return e(u,{value:n,onChange:r,totalItems:24,itemsPerPage:5})};const p={code:`import React, { useState } from 'react';
import { Pagination } from 'react-vant-nova';

export default () => {
  const [page, setPage] = useState(1);
  return <Pagination value={page} onChange={setPage} totalItems={24} itemsPerPage={5} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Pagination } from 'react-vant-nova';

export default () => {
  const [page, setPage] = useState(1);
  return <Pagination value={page} onChange={setPage} totalItems={24} itemsPerPage={5} />;
};`}},key:"pagination-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var c=()=>{const[n,r]=a.exports.useState(1);return e(u,{value:n,mode:"simple",onChange:r,pageCount:12})};const g={code:`import React, { useState } from 'react';
import { Pagination } from 'react-vant-nova';

export default () => {
  const [page, setPage] = useState(1);
  return <Pagination value={page} mode="simple" onChange={setPage} pageCount={12} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Pagination } from 'react-vant-nova';

export default () => {
  const [page, setPage] = useState(1);
  return <Pagination value={page} mode="simple" onChange={setPage} pageCount={12} />;
};`}},key:"pagination-demo-1",meta:{title:"\u7B80\u5355\u6A21\u5F0F"}};var o=()=>{const[n,r]=a.exports.useState(1);return e(u,{forceEllipses:!0,value:n,onChange:r,totalItems:125,showPageSize:3})};const m={code:`import React, { useState } from 'react';
import { Pagination } from 'react-vant-nova';

export default () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination forceEllipses value={page} onChange={setPage} totalItems={125} showPageSize={3} />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Pagination } from 'react-vant-nova';

export default () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination forceEllipses value={page} onChange={setPage} totalItems={125} showPageSize={3} />
  );
};`}},key:"pagination-demo-2",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var l=()=>{const[n,r]=a.exports.useState(1);return e(u,{value:n,onChange:r,totalItems:125,showPageSize:5,prevText:e(h,{}),nextText:e(s,{}),pageRender:({text:d})=>`${d} \u{1F600}`})};const v=`import React, { useState } from 'react'
import { Arrow, ArrowLeft } from '@react-vant/icons'
import { Pagination } from 'react-vant-nova'

export default () => {
  const [page, setPage] = useState(1)
  return (
    <Pagination
      value={page}
      onChange={setPage}
      totalItems={125}
      showPageSize={5}
      prevText={<ArrowLeft />}
      nextText={<Arrow />}
      pageRender={({ text }) => \`\${text} \u{1F600}\`}
    />
  )
}
`,E={code:v,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { Arrow, ArrowLeft } from '@react-vant/icons'
import { Pagination } from 'react-vant-nova'

export default () => {
  const [page, setPage] = useState(1)
  return (
    <Pagination
      value={page}
      onChange={setPage}
      totalItems={125}
      showPageSize={5}
      prevText={<ArrowLeft />}
      nextText={<Arrow />}
      pageRender={({ text }) => \`\${text} \u{1F600}\`}
    />
  )
}
`}},key:"pagination-custom",meta:{title:"\u81EA\u5B9A\u4E49\u6309\u94AE"}},F=function({previewer:n=()=>null,api:r=()=>null}){const d=n;return e("div",{children:t("div",{children:[e("h1",{id:"","data-anchor":"",children:"Pagination \u5206\u9875"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u6570\u636E\u91CF\u8FC7\u591A\u65F6\uFF0C\u91C7\u7528\u5206\u9875\u7684\u5F62\u5F0F\u5C06\u6570\u636E\u5206\u9694\uFF0C\u6BCF\u6B21\u53EA\u52A0\u8F7D\u4E00\u4E2A\u9875\u9762\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(d,{code:"import { Pagination } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"value"})," \u6765\u7ED1\u5B9A\u5F53\u524D\u9875\u7801\u3002"]}),e(d,{...p,children:e(i,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u7B80\u5355\u6A21\u5F0F"}),t("p",{children:["\u5C06 ",e("code",{children:"mode"})," \u8BBE\u7F6E\u4E3A ",e("code",{children:"simple"})," \u6765\u5207\u6362\u5230\u7B80\u5355\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5206\u9875\u5668\u4E0D\u4F1A\u5C55\u793A\u5177\u4F53\u7684\u9875\u7801\u6309\u94AE\u3002"]}),e(d,{...g,children:e(c,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u663E\u793A\u7701\u7565\u53F7"}),e(d,{...m,children:e(o,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u81EA\u5B9A\u4E49\u6309\u94AE"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"prevText"}),"\u3001",e("code",{children:"nextText"})," \u7B49\u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u5206\u9875\u6309\u94AE\u7684\u5185\u5BB9\u3002"]}),e(d,{...E,children:e(l,{})}),e("h2",{id:"-8","data-anchor":"-8",children:"API"}),e("h3",{id:"-9","data-anchor":"-9",children:"Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u9875\u7801"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"mode"}),t("td",{children:["\u663E\u793A\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"simple"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"multi"})})]}),t("tr",{children:[e("td",{children:"prevText"}),e("td",{children:"\u4E0A\u4E00\u9875\u6309\u94AE\u6587\u5B57"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"\u4E0A\u4E00\u9875"})})]}),t("tr",{children:[e("td",{children:"nextText"}),e("td",{children:"\u4E0B\u4E00\u9875\u6309\u94AE\u6587\u5B57"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"\u4E0B\u4E00\u9875"})})]}),t("tr",{children:[e("td",{children:"pageRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u9875\u7801"}),e("td",{children:t("em",{children:["(","{"," number: number, text: string, active: boolean ","}",") => ReactNode"]})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"pageCount"}),e("td",{children:"\u603B\u9875\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"\u6839\u636E\u9875\u6570\u8BA1\u7B97"})]}),t("tr",{children:[e("td",{children:"totalItems"}),e("td",{children:"\u603B\u8BB0\u5F55\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),t("tr",{children:[e("td",{children:"itemsPerPage"}),e("td",{children:"\u6BCF\u9875\u8BB0\u5F55\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"10"})})]}),t("tr",{children:[e("td",{children:"showPageSize"}),e("td",{children:"\u663E\u793A\u7684\u9875\u7801\u4E2A\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"5"})})]}),t("tr",{children:[e("td",{children:"forceEllipses"}),e("td",{children:"\u662F\u5426\u663E\u793A\u7701\u7565\u53F7"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"-10","data-anchor":"-10",children:"Events"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:t("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u9875\u7801\u6539\u53D8\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"page:number"})})]})})]}),e("h3",{id:"-11","data-anchor":"-11",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(d,{code:"import type { PaginationMode } from 'react-vant-nova';",lang:"ts"}),e("h2",{id:"-12","data-anchor":"-12",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-13","data-anchor":"-13",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-pagination-height"}),e("td",{children:e("em",{children:"40px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-item-width"}),e("td",{children:e("em",{children:"36px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-item-default-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-item-disabled-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-item-disabled-background-color"}),e("td",{children:e("em",{children:"var(--rv-background-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-desc-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-disabled-opacity"}),e("td",{children:e("em",{children:"var(--rv-disabled-opacity)"})}),e("td",{children:"-"})]})]})]})]})})},P=[{Component:i,key:"pagination-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:c,key:"pagination-demo-1",title:"\u7B80\u5355\u6A21\u5F0F"},{Component:o,key:"pagination-demo-2",title:"\u57FA\u7840\u7528\u6CD5"},{Component:l,key:"pagination-custom",title:"\u81EA\u5B9A\u4E49\u6309\u94AE"}],C={simulator:{compact:!1}},A=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:2,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:2,id:"-12"},{depth:3,id:"-13"}],f="/src/components/pagination/README.md",B="undefined",x="1766203394000";var D=n=>n.children({MdContent:F,demos:P,frontmatter:C,slugs:A,filePath:f,title:B,updatedTime:x});export{F as MdContent,D as default,P as demos,f as filePath,C as frontmatter,A as slugs,B as title,x as updatedTime};
