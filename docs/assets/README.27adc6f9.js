import{r as i,a as t,F as n,j as e}from"./main.1ee7503a.js";import{B as l,dP as c}from"./FloatingPanel.3ae6a5fa.js";var h=()=>{const[u,r]=i.exports.useState(!1);return t(n,{children:[e(l,{type:"primary",onClick:()=>r(!0),children:"\u663E\u793A\u906E\u7F69\u5C42"}),e(c,{visible:u,onClick:()=>r(!1)})]})};const o={code:`import React, { useState } from 'react';
import { Button, Overlay } from 'react-vant-nova';

export default () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setShow(true)}>
        \u663E\u793A\u906E\u7F69\u5C42
      </Button>
      <Overlay visible={show} onClick={() => setShow(false)} />
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Overlay } from 'react-vant-nova';

export default () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setShow(true)}>
        \u663E\u793A\u906E\u7F69\u5C42
      </Button>
      <Overlay visible={show} onClick={() => setShow(false)} />
    </>
  );
};`}},key:"overlay-demo",meta:{title:"\u663E\u793A\u906E\u7F69\u5C42"}};var a=()=>{const[u,r]=i.exports.useState(!1);return t(n,{children:[e(l,{type:"primary",onClick:()=>r(!0),children:"\u5D4C\u5165\u5185\u5BB9"}),e(c,{visible:u,onClick:()=>r(!1),style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:e("div",{style:{width:120,height:120,backgroundColor:"#fff",borderRadius:4}})})]})};const s={code:`import React, { useState } from 'react';
import { Button, Overlay } from 'react-vant-nova';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u5D4C\u5165\u5185\u5BB9
      </Button>
      <Overlay visible={visible} onClick={() => setVisible(false)}
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div style={{ width: 120, height: 120, backgroundColor: '#fff', borderRadius: 4 }} />
      </Overlay>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Overlay } from 'react-vant-nova';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u5D4C\u5165\u5185\u5BB9
      </Button>
      <Overlay visible={visible} onClick={() => setVisible(false)}
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div style={{ width: 120, height: 120, backgroundColor: '#fff', borderRadius: 4 }} />
      </Overlay>
    </>
  );
};`}},key:"overlay-demo-1",meta:{title:"\u5D4C\u5165\u5185\u5BB9"}},C=function({previewer:u=()=>null,api:r=()=>null}){const d=u;return e("div",{children:t("div",{children:[e("h1",{id:"","data-anchor":"",children:"Overlay \u906E\u7F69\u5C42"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u521B\u5EFA\u4E00\u4E2A\u906E\u7F69\u5C42\uFF0C\u7528\u4E8E\u5F3A\u8C03\u7279\u5B9A\u7684\u9875\u9762\u5143\u7D20\uFF0C\u5E76\u963B\u6B62\u7528\u6237\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(d,{code:"import { Overlay } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),e(d,{...o,children:e(h,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u5D4C\u5165\u5185\u5BB9"}),e("p",{children:"\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u53EF\u4EE5\u5728\u906E\u7F69\u5C42\u4E0A\u5D4C\u5165\u4EFB\u610F\u5185\u5BB9\u3002"}),e(d,{...s,children:e(a,{})}),e("h2",{id:"-6","data-anchor":"-6",children:"API"}),e("h3",{id:"-7","data-anchor":"-7",children:"Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"visible"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u906E\u7F69\u5C42"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),t("tr",{children:[e("td",{children:"zIndex"}),e("td",{children:"z-index \u5C42\u7EA7"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"1"})})]}),t("tr",{children:[e("td",{children:"duration"}),e("td",{children:"\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0.3"})})]}),t("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u81EA\u5B9A\u4E49\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"customStyle"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}),e("td",{children:e("em",{children:"object"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"lockScroll"}),e("td",{children:"\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8\uFF0C\u9501\u5B9A\u65F6\u8499\u5C42\u91CC\u7684\u5185\u5BB9\u4E5F\u5C06\u65E0\u6CD5\u6EDA\u52A8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h3",{id:"-8","data-anchor":"-8",children:"Events"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:t("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]})})]}),e("h2",{id:"-9","data-anchor":"-9",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-10","data-anchor":"-10",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-overlay-z-index"}),e("td",{children:e("em",{children:"1"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-overlay-background-color"}),e("td",{children:e("em",{children:"rgba(0, 0, 0, 0.7)"})}),e("td",{children:"-"})]})]})]})]})})},v=[{Component:h,key:"overlay-demo",title:"\u663E\u793A\u906E\u7F69\u5C42"},{Component:a,key:"overlay-demo-1",title:"\u5D4C\u5165\u5185\u5BB9"}],p={simulator:{compact:!1}},F=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:2,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:2,id:"-9"},{depth:3,id:"-10"}],E="/src/components/overlay/README.md",m="undefined",B="1766203394000";var b=u=>u.children({MdContent:C,demos:v,frontmatter:p,slugs:F,filePath:E,title:m,updatedTime:B});export{C as MdContent,b as default,v as demos,E as filePath,p as frontmatter,F as slugs,m as title,B as updatedTime};
