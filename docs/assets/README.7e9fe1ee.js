import{a as r,F as i,j as e,R as C}from"./main.af98c409.js";import{C as u,e7 as l}from"./FloatingPanel.788cd8cb.js";var c=()=>r(i,{children:[e(u,{title:"primary \u7C7B\u578B",children:e(l,{type:"primary",children:"\u6807\u7B7E"})}),e(u,{title:"success \u7C7B\u578B",children:e(l,{type:"success",children:"\u6807\u7B7E"})}),e(u,{title:"danger  \u7C7B\u578B",children:e(l,{type:"danger",children:"\u6807\u7B7E"})}),e(u,{title:"warning  \u7C7B\u578B",children:e(l,{type:"warning",children:"\u6807\u7B7E"})})]});const p={code:`import React from 'react';
import { Cell, Tag } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell title="primary \u7C7B\u578B">
        <Tag type="primary">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="success \u7C7B\u578B">
        <Tag type="success">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="danger  \u7C7B\u578B">
        <Tag type="danger">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="warning  \u7C7B\u578B">
        <Tag type="warning">\u6807\u7B7E</Tag>
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Cell, Tag } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell title="primary \u7C7B\u578B">
        <Tag type="primary">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="success \u7C7B\u578B">
        <Tag type="success">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="danger  \u7C7B\u578B">
        <Tag type="danger">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="warning  \u7C7B\u578B">
        <Tag type="warning">\u6807\u7B7E</Tag>
      </Cell>
    </>
  );
};`}},key:"tag-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var a=()=>{const[d,n]=C.useState(!0);return r(i,{children:[e(u,{title:"\u7A7A\u5FC3\u6837\u5F0F",children:e(l,{plain:!0,type:"primary",children:"\u6807\u7B7E"})}),e(u,{title:"\u5706\u89D2\u6837\u5F0F",children:e(l,{round:!0,type:"primary",children:"\u6807\u7B7E"})}),e(u,{title:"\u6807\u8BB0\u6837\u5F0F",children:e(l,{mark:!0,type:"primary",children:"\u6807\u7B7E"})}),e(u,{title:"\u53EF\u5173\u95ED\u6807\u7B7E",children:e(l,{show:d,plain:!0,closeable:!0,size:"medium",type:"primary",onClose:()=>n(!1),children:"\u6807\u7B7E"})})]})};const E={code:`import React from 'react';
import { Cell, Tag } from 'react-vant-nova';

export default () => {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <Cell title="\u7A7A\u5FC3\u6837\u5F0F">
        <Tag plain type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u5706\u89D2\u6837\u5F0F">
        <Tag round type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u6807\u8BB0\u6837\u5F0F">
        <Tag mark type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u53EF\u5173\u95ED\u6807\u7B7E">
        <Tag
          show={show}
          plain
          closeable
          size="medium"
          type="primary"
          onClose={() => setShow(false)}
        >
          \u6807\u7B7E
        </Tag>
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Cell, Tag } from 'react-vant-nova';

export default () => {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <Cell title="\u7A7A\u5FC3\u6837\u5F0F">
        <Tag plain type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u5706\u89D2\u6837\u5F0F">
        <Tag round type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u6807\u8BB0\u6837\u5F0F">
        <Tag mark type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u53EF\u5173\u95ED\u6807\u7B7E">
        <Tag
          show={show}
          plain
          closeable
          size="medium"
          type="primary"
          onClose={() => setShow(false)}
        >
          \u6807\u7B7E
        </Tag>
      </Cell>
    </>
  );
};`}},key:"tag-demo-1",meta:{title:"\u6837\u5F0F\u98CE\u683C",card:!0}};var h=()=>r(i,{children:[e(u,{title:"\u5C0F\u53F7\u6807\u7B7E",children:e(l,{type:"primary",children:"\u6807\u7B7E"})}),e(u,{title:"\u4E2D\u53F7\u6807\u7B7E",children:e(l,{size:"medium",type:"primary",children:"\u6807\u7B7E"})}),e(u,{title:"\u5927\u53F7\u6807\u7B7E",children:e(l,{size:"large",type:"primary",children:"\u6807\u7B7E"})})]});const m={code:`import React from 'react';
import { Cell, Tag } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell title="\u5C0F\u53F7\u6807\u7B7E">
        <Tag type="primary">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="\u4E2D\u53F7\u6807\u7B7E">
        <Tag size="medium" type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u5927\u53F7\u6807\u7B7E">
        <Tag size="large" type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Cell, Tag } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell title="\u5C0F\u53F7\u6807\u7B7E">
        <Tag type="primary">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="\u4E2D\u53F7\u6807\u7B7E">
        <Tag size="medium" type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u5927\u53F7\u6807\u7B7E">
        <Tag size="large" type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
    </>
  );
};`}},key:"tag-demo-2",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var o=()=>r(i,{children:[e(u,{title:"\u80CC\u666F\u989C\u8272",children:e(l,{color:"#7232dd",children:"\u6807\u7B7E"})}),e(u,{title:"\u6587\u5B57\u989C\u8272",children:e(l,{color:"#ffe1e1",textColor:"#ad0000",children:"\u6807\u7B7E"})}),e(u,{title:"\u7A7A\u5FC3\u989C\u8272",children:e(l,{color:"#7232dd",plain:!0,children:"\u6807\u7B7E"})})]});const s={code:`import React from 'react';
import { Cell, Tag } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell title="\u80CC\u666F\u989C\u8272">
        <Tag color="#7232dd">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="\u6587\u5B57\u989C\u8272">
        <Tag color="#ffe1e1" textColor="#ad0000">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u7A7A\u5FC3\u989C\u8272">
        <Tag color="#7232dd" plain>
          \u6807\u7B7E
        </Tag>
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Cell, Tag } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell title="\u80CC\u666F\u989C\u8272">
        <Tag color="#7232dd">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="\u6587\u5B57\u989C\u8272">
        <Tag color="#ffe1e1" textColor="#ad0000">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u7A7A\u5FC3\u989C\u8272">
        <Tag color="#7232dd" plain>
          \u6807\u7B7E
        </Tag>
      </Cell>
    </>
  );
};`}},key:"tag-demo-3",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}},g=function({previewer:d=()=>null,api:n=()=>null}){const t=d;return e("div",{children:r("div",{children:[e("h1",{id:"","data-anchor":"",children:"Tag \u6807\u7B7E"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u5F15\u5165"}),e(t,{code:"import { Tag } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u7840\u7528\u6CD5"}),r("p",{children:["\u901A\u8FC7 ",e("code",{children:"type"})," \u5C5E\u6027\u63A7\u5236\u6807\u7B7E\u989C\u8272\u3002"]}),e(t,{...p,children:e(c,{})}),e("h3",{id:"-4","data-anchor":"-4",children:"\u6837\u5F0F\u98CE\u683C"}),r("ul",{children:[r("li",{children:["\u8BBE\u7F6E ",e("code",{children:"plain"})," \u5C5E\u6027\u8BBE\u7F6E\u4E3A\u7A7A\u5FC3\u6837\u5F0F\u3002"]}),r("li",{children:["\u901A\u8FC7 ",e("code",{children:"round"})," \u8BBE\u7F6E\u4E3A\u5706\u89D2\u6837\u5F0F\u3002"]}),r("li",{children:["\u901A\u8FC7 ",e("code",{children:"mark"})," \u8BBE\u7F6E\u4E3A\u6807\u8BB0\u6837\u5F0F(\u534A\u5706\u89D2)\u3002"]}),r("li",{children:["\u6DFB\u52A0 ",e("code",{children:"closeable"})," \u5C5E\u6027\u8868\u793A\u6807\u7B7E\u662F\u53EF\u5173\u95ED\u7684\uFF0C\u5173\u95ED\u6807\u7B7E\u65F6\u4F1A\u89E6\u53D1 ",e("code",{children:"onClose"})," \u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u6267\u884C\u9690\u85CF\u6807\u7B7E\u7684\u903B\u8F91\u3002"]})]}),e(t,{...E,children:e(a,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u6807\u7B7E\u5927\u5C0F"}),r("p",{children:["\u901A\u8FC7 ",e("code",{children:"size"})," \u5C5E\u6027\u8C03\u6574\u6807\u7B7E\u5927\u5C0F\u3002"]}),e(t,{...m,children:e(h,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),r("p",{children:["\u901A\u8FC7 ",e("code",{children:"color"})," \u548C ",e("code",{children:"textColor"})," \u5C5E\u6027\u8BBE\u7F6E\u6807\u7B7E\u989C\u8272\u3002"]}),e(t,{...s,children:e(o,{})}),e("h2",{id:"-7","data-anchor":"-7",children:"API"}),e("h3",{id:"-8","data-anchor":"-8",children:"Props"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"type"}),r("td",{children:["\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"primary"})," ",e("code",{children:"success"})," ",e("code",{children:"danger"})," ",e("code",{children:"warning"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"default"})})]}),r("tr",{children:[e("td",{children:"size"}),r("td",{children:["\u5927\u5C0F, \u53EF\u9009\u503C\u4E3A ",e("code",{children:"large"})," ",e("code",{children:"medium"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u6807\u7B7E\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"show"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u6807\u7B7E"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),r("tr",{children:[e("td",{children:"plain"}),e("td",{children:"\u662F\u5426\u4E3A\u7A7A\u5FC3\u6837\u5F0F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"round"}),e("td",{children:"\u662F\u5426\u4E3A\u5706\u89D2\u6837\u5F0F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"mark"}),e("td",{children:"\u662F\u5426\u4E3A\u6807\u8BB0\u6837\u5F0F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"textColor"}),r("td",{children:["\u6587\u672C\u989C\u8272\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E ",e("code",{children:"color"})," \u5C5E\u6027"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"white"})})]}),r("tr",{children:[e("td",{children:"closeable"}),e("td",{children:"\u662F\u5426\u4E3A\u53EF\u5173\u95ED\u6807\u7B7E"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"-9","data-anchor":"-9",children:"Events"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),r("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u6807\u7B7E\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]})]})]}),e("h2",{id:"-10","data-anchor":"-10",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-11","data-anchor":"-11",children:"\u6837\u5F0F\u53D8\u91CF"}),r("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"--rv-tag-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-base)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-text-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-border-radius"}),e("td",{children:e("em",{children:"2px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-line-height"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-medium-padding"}),e("td",{children:e("em",{children:"2px 6px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-large-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-base) var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-large-border-radius"}),e("td",{children:e("em",{children:"var(--rv-border-radius-md)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-large-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-round-border-radius"}),e("td",{children:e("em",{children:"var(--rv-border-radius-max)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-danger-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-primary-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-success-color"}),e("td",{children:e("em",{children:"var(--rv-success-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-warning-color"}),e("td",{children:e("em",{children:"var(--rv-warning-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-default-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-tag-plain-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]})]})]})]})})},F=[{Component:c,key:"tag-demo",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:a,key:"tag-demo-1",title:"\u6837\u5F0F\u98CE\u683C",card:!0},{Component:h,key:"tag-demo-2",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:o,key:"tag-demo-3",title:"\u57FA\u7840\u7528\u6CD5",card:!0}],B=void 0,v=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:2,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:2,id:"-10"},{depth:3,id:"-11"}],y="/src/components/tag/README.md",T="undefined",f="1766203394000";var x=d=>d.children({MdContent:g,demos:F,frontmatter:B,slugs:v,filePath:y,title:T,updatedTime:f});export{g as MdContent,x as default,F as demos,y as filePath,B as frontmatter,v as slugs,T as title,f as updatedTime};
