import{r as n,a as t,j as e}from"./main.6d1ac2ec.js";import{ef as d,dc as c}from"./FloatingPanel.f57aae97.js";var l=()=>{const[u,i]=n.exports.useState(2);return t(d,{value:u,onChange:r=>{i(r),c.info(`\u6807\u7B7E\u540D ${r+1}`)},children:[e(d.Item,{title:"\u6807\u7B7E\u540D1"}),e(d.Item,{title:"\u6807\u7B7E\u540D2"}),e(d.Item,{title:"\u6807\u7B7E\u540D3"})]})};const m={code:`import React, { useState } from 'react';
import { Sidebar, Toast } from 'react-vant-nova';

export default () => {
  const [active, setActive] = useState(2);
  return (
    <Sidebar
      value={active}
      onChange={(v) => {
        setActive(v);
        Toast.info(\`\u6807\u7B7E\u540D \${v + 1}\`);
      }}
    >
      <Sidebar.Item title="\u6807\u7B7E\u540D1" />
      <Sidebar.Item title="\u6807\u7B7E\u540D2" />
      <Sidebar.Item title="\u6807\u7B7E\u540D3" />
    </Sidebar>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Sidebar, Toast } from 'react-vant-nova';

export default () => {
  const [active, setActive] = useState(2);
  return (
    <Sidebar
      value={active}
      onChange={(v) => {
        setActive(v);
        Toast.info(\`\u6807\u7B7E\u540D \${v + 1}\`);
      }}
    >
      <Sidebar.Item title="\u6807\u7B7E\u540D1" />
      <Sidebar.Item title="\u6807\u7B7E\u540D2" />
      <Sidebar.Item title="\u6807\u7B7E\u540D3" />
    </Sidebar>
  );
};`}},key:"sidebar-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var a=()=>t(d,{children:[e(d.Item,{title:"\u6807\u7B7E\u540D",dot:!0}),e(d.Item,{title:"\u6807\u7B7E\u540D",badge:5}),e(d.Item,{title:"\u6807\u7B7E\u540D",badge:20})]});const s={code:`import React from 'react';
import { Sidebar } from 'react-vant-nova';

export default () => {
  return (
    <Sidebar>
      <Sidebar.Item title="\u6807\u7B7E\u540D" dot />
      <Sidebar.Item title="\u6807\u7B7E\u540D" badge={5} />
      <Sidebar.Item title="\u6807\u7B7E\u540D" badge={20} />
    </Sidebar>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Sidebar } from 'react-vant-nova';

export default () => {
  return (
    <Sidebar>
      <Sidebar.Item title="\u6807\u7B7E\u540D" dot />
      <Sidebar.Item title="\u6807\u7B7E\u540D" badge={5} />
      <Sidebar.Item title="\u6807\u7B7E\u540D" badge={20} />
    </Sidebar>
  );
};`}},key:"sidebar-demo-1",meta:{title:"\u5FBD\u6807\u63D0\u793A"}};var h=()=>t(d,{children:[e(d.Item,{title:"\u6807\u7B7E\u540D"}),e(d.Item,{title:"\u6807\u7B7E\u540D",disabled:!0}),e(d.Item,{title:"\u6807\u7B7E\u540D"})]});const B={code:`import React from 'react';
import { Sidebar } from 'react-vant-nova';

export default () => {
  return (
    <Sidebar>
      <Sidebar.Item title="\u6807\u7B7E\u540D" />
      <Sidebar.Item title="\u6807\u7B7E\u540D" disabled />
      <Sidebar.Item title="\u6807\u7B7E\u540D" />
    </Sidebar>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Sidebar } from 'react-vant-nova';

export default () => {
  return (
    <Sidebar>
      <Sidebar.Item title="\u6807\u7B7E\u540D" />
      <Sidebar.Item title="\u6807\u7B7E\u540D" disabled />
      <Sidebar.Item title="\u6807\u7B7E\u540D" />
    </Sidebar>
  );
};`}},key:"sidebar-demo-2",meta:{title:"\u5FBD\u6807\u63D0\u793A"}};var o=()=>{const[u,i]=n.exports.useState(0);return t(d,{value:u,onChange:r=>{i(r),c.info(`\u5185\u5BB9\u533A ${r+1}`)},children:[e(d.Item,{contentStyle:{backgroundColor:"#fff",padding:"18px 10px"},title:"\u5185\u5BB91",children:"\u6211\u662F\u5185\u5BB9\u533A1"}),e(d.Item,{contentStyle:{backgroundColor:"#fff",padding:"18px 10px"},title:"\u5185\u5BB92",children:"\u6211\u662F\u5185\u5BB9\u533A2"}),e(d.Item,{contentStyle:{backgroundColor:"#fff",padding:"18px 10px"},title:"\u5185\u5BB93",children:"\u6211\u662F\u5185\u5BB9\u533A3"})]})};const b={code:`import React, { useState } from 'react';
import { Sidebar, Toast } from 'react-vant-nova';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Sidebar
      value={active}
      onChange={(v) => {
        setActive(v);
        Toast.info(\`\u5185\u5BB9\u533A \${v + 1}\`);
      }}
    >
      <Sidebar.Item contentStyle={{ backgroundColor: '#fff', padding: '18px 10px' }} title="\u5185\u5BB91">
        \u6211\u662F\u5185\u5BB9\u533A1
      </Sidebar.Item>
      <Sidebar.Item contentStyle={{ backgroundColor: '#fff', padding: '18px 10px' }} title="\u5185\u5BB92">
        \u6211\u662F\u5185\u5BB9\u533A2
      </Sidebar.Item>
      <Sidebar.Item contentStyle={{ backgroundColor: '#fff', padding: '18px 10px' }} title="\u5185\u5BB93">
        \u6211\u662F\u5185\u5BB9\u533A3
      </Sidebar.Item>
    </Sidebar>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Sidebar, Toast } from 'react-vant-nova';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Sidebar
      value={active}
      onChange={(v) => {
        setActive(v);
        Toast.info(\`\u5185\u5BB9\u533A \${v + 1}\`);
      }}
    >
      <Sidebar.Item contentStyle={{ backgroundColor: '#fff', padding: '18px 10px' }} title="\u5185\u5BB91">
        \u6211\u662F\u5185\u5BB9\u533A1
      </Sidebar.Item>
      <Sidebar.Item contentStyle={{ backgroundColor: '#fff', padding: '18px 10px' }} title="\u5185\u5BB92">
        \u6211\u662F\u5185\u5BB9\u533A2
      </Sidebar.Item>
      <Sidebar.Item contentStyle={{ backgroundColor: '#fff', padding: '18px 10px' }} title="\u5185\u5BB93">
        \u6211\u662F\u5185\u5BB9\u533A3
      </Sidebar.Item>
    </Sidebar>
  );
};`}},key:"sidebar-demo-3",meta:{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A"}},v=function({previewer:u=()=>null,api:i=()=>null}){const r=u;return e("div",{children:t("div",{children:[e("h1",{id:"","data-anchor":"",children:"Sidebar \u4FA7\u8FB9\u5BFC\u822A"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5782\u76F4\u5C55\u793A\u7684\u5BFC\u822A\u680F\uFF0C\u7528\u4E8E\u5728\u4E0D\u540C\u7684\u5185\u5BB9\u533A\u57DF\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(r,{code:"import { Sidebar, SidebarItem } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"value"})," \u7ED1\u5B9A\u5F53\u524D\u9009\u4E2D\u9879\u7684\u7D22\u5F15\u3002"]}),e(r,{...m,children:e(l,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u5FBD\u6807\u63D0\u793A"}),t("p",{children:["\u8BBE\u7F6E ",e("code",{children:"dot"})," \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u53F3\u4E0A\u89D2\u5C55\u793A\u4E00\u4E2A\u5C0F\u7EA2\u70B9\uFF1B\u8BBE\u7F6E ",e("code",{children:"badge"})," \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u53F3\u4E0A\u89D2\u5C55\u793A\u76F8\u5E94\u7684\u5FBD\u6807\u3002"]}),e(r,{...s,children:e(a,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u7981\u7528\u9009\u9879"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"disabled"})," \u5C5E\u6027\u7981\u7528\u9009\u9879\u3002"]}),e(r,{...B,children:e(h,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A"}),e(r,{...b,children:e(o,{})}),e("h2",{id:"-8","data-anchor":"-8",children:"API"}),e("h3",{id:"-9","data-anchor":"-9",children:"Sidebar Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u81EA\u5B9A\u4E49\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"style"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}),e("td",{children:e("em",{children:"CSSProperties"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"sideClassName"}),e("td",{children:"\u5DE6\u4FA7\u5BB9\u5668\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"sideStyle"}),e("td",{children:"\u5DE6\u4FA7\u5BB9\u5668\u6837\u5F0F"}),e("td",{children:e("em",{children:"CSSProperties"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u5BFC\u822A\u9879\u7684\u7D22\u5F15"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]})]})]}),e("h3",{id:"-10","data-anchor":"-10",children:"Sidebar Events"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:t("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5207\u6362\u5BFC\u822A\u9879\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"index: number"})})]})})]}),e("h3",{id:"-11","data-anchor":"-11",children:"SidebarItem Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u5185\u5BB9"}),e("td",{children:e("em",{children:"string | React.ReactNode"})}),e("td",{children:e("code",{children:"''"})})]}),t("tr",{children:[e("td",{children:"dot"}),e("td",{children:"\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u5C0F\u7EA2\u70B9"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),t("tr",{children:[e("td",{children:"badge"}),e("td",{children:"\u56FE\u6807\u53F3\u4E0A\u89D2\u5FBD\u6807\u7684\u5185\u5BB9"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u8BE5\u9879"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),t("tr",{children:[e("td",{children:"contentClassName"}),e("td",{children:"\u5185\u5BB9\u533A\u57DF\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"contentStyle"}),e("td",{children:"\u5185\u5BB9\u533A\u57DF\u6837\u5F0F"}),e("td",{children:e("em",{children:"CSSProperties"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-12","data-anchor":"-12",children:"SidebarItem Events"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:t("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"index: number"})})]})})]}),e("h2",{id:"-13","data-anchor":"-13",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-14","data-anchor":"-14",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-sidebar-width"}),e("td",{children:e("em",{children:"80px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-padding"}),e("td",{children:e("em",{children:"20px var(--rv-padding-sm)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-active-color"}),e("td",{children:e("em",{children:"var(--rv-active-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-background-color"}),e("td",{children:e("em",{children:"var(--rv-background-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-selected-font-weight"}),e("td",{children:e("em",{children:"var(--rv-font-weight-bold)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-selected-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-selected-border-width"}),e("td",{children:e("em",{children:"4px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-selected-border-height"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-selected-border-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-sidebar-selected-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]})]})]})]})})},p=[{Component:l,key:"sidebar-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:a,key:"sidebar-demo-1",title:"\u5FBD\u6807\u63D0\u793A"},{Component:h,key:"sidebar-demo-2",title:"\u5FBD\u6807\u63D0\u793A"},{Component:o,key:"sidebar-demo-3",title:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A"}],E={"mobile-className":"vant-doc-demo-section--card"},F=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:2,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:3,id:"-12"},{depth:2,id:"-13"},{depth:3,id:"-14"}],S="/src/components/sidebar/README.md",D="undefined",f="1766203394000";var g=u=>u.children({MdContent:v,demos:p,frontmatter:E,slugs:F,filePath:S,title:D,updatedTime:f});export{v as MdContent,g as default,p as demos,S as filePath,E as frontmatter,F as slugs,D as title,f as updatedTime};
