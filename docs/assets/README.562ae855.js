import{r as i,a as t,F as l,j as e}from"./main.7fa1bdd8.js";import{e3 as u,B as h}from"./Table.5f9604fd.js";var o=()=>{const[d,c]=i.exports.useState(1),r=()=>c(n=>n>=3?0:n+1);return t(l,{children:[t(u,{active:d,children:[e(u.Item,{children:"\u4E70\u5BB6\u4E0B\u5355"}),e(u.Item,{children:"\u5546\u5BB6\u63A5\u5355"}),e(u.Item,{children:"\u4E70\u5BB6\u63D0\u8D27"}),e(u.Item,{children:"\u4EA4\u6613\u5B8C\u6210"})]}),e("div",{style:{padding:20},children:e(h,{round:!0,block:!0,onClick:r,children:"\u4E0B\u4E00\u6B65"})})]})};const s={code:`import React, { useState } from 'react';
import { Steps, Button } from 'react-vant-nova';

export default () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((prev) => (prev >= 3 ? 0 : prev + 1));
  return (
    <>
      <Steps active={active}>
        <Steps.Item>\u4E70\u5BB6\u4E0B\u5355</Steps.Item>
        <Steps.Item>\u5546\u5BB6\u63A5\u5355</Steps.Item>
        <Steps.Item>\u4E70\u5BB6\u63D0\u8D27</Steps.Item>
        <Steps.Item>\u4EA4\u6613\u5B8C\u6210</Steps.Item>
      </Steps>
      <div style={{ padding: 20 }}>
        <Button round block onClick={nextStep}>
          \u4E0B\u4E00\u6B65
        </Button>
      </div>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Steps, Button } from 'react-vant-nova';

export default () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((prev) => (prev >= 3 ? 0 : prev + 1));
  return (
    <>
      <Steps active={active}>
        <Steps.Item>\u4E70\u5BB6\u4E0B\u5355</Steps.Item>
        <Steps.Item>\u5546\u5BB6\u63A5\u5355</Steps.Item>
        <Steps.Item>\u4E70\u5BB6\u63D0\u8D27</Steps.Item>
        <Steps.Item>\u4EA4\u6613\u5B8C\u6210</Steps.Item>
      </Steps>
      <div style={{ padding: 20 }}>
        <Button round block onClick={nextStep}>
          \u4E0B\u4E00\u6B65
        </Button>
      </div>
    </>
  );
};`}},key:"steps-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var a=()=>{const[d,c]=i.exports.useState(1),r=()=>c(n=>n>=3?0:n+1);return t(l,{children:[t(u,{active:d,activeIcon:e("div",{children:"!"}),activeColor:"#3f45ff",children:[e(u.Item,{children:"\u4E70\u5BB6\u4E0B\u5355"}),e(u.Item,{children:"\u5546\u5BB6\u63A5\u5355"}),e(u.Item,{children:"\u4E70\u5BB6\u63D0\u8D27"}),e(u.Item,{children:"\u4EA4\u6613\u5B8C\u6210"})]}),e("div",{style:{padding:20},children:e(h,{round:!0,block:!0,onClick:r,children:"\u4E0B\u4E00\u6B65"})})]})};const v={code:`import React, { useState } from 'react';
import { Steps, Button } from 'react-vant-nova';

export default () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((prev) => (prev >= 3 ? 0 : prev + 1));
  return (
    <>
      <Steps active={active} activeIcon={<div>!</div>} activeColor="#3f45ff">
        <Steps.Item>\u4E70\u5BB6\u4E0B\u5355</Steps.Item>
        <Steps.Item>\u5546\u5BB6\u63A5\u5355</Steps.Item>
        <Steps.Item>\u4E70\u5BB6\u63D0\u8D27</Steps.Item>
        <Steps.Item>\u4EA4\u6613\u5B8C\u6210</Steps.Item>
      </Steps>
      <div style={{ padding: 20 }}>
        <Button round block onClick={nextStep}>
          \u4E0B\u4E00\u6B65
        </Button>
      </div>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Steps, Button } from 'react-vant-nova';

export default () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((prev) => (prev >= 3 ? 0 : prev + 1));
  return (
    <>
      <Steps active={active} activeIcon={<div>!</div>} activeColor="#3f45ff">
        <Steps.Item>\u4E70\u5BB6\u4E0B\u5355</Steps.Item>
        <Steps.Item>\u5546\u5BB6\u63A5\u5355</Steps.Item>
        <Steps.Item>\u4E70\u5BB6\u63D0\u8D27</Steps.Item>
        <Steps.Item>\u4EA4\u6613\u5B8C\u6210</Steps.Item>
      </Steps>
      <div style={{ padding: 20 }}>
        <Button round block onClick={nextStep}>
          \u4E0B\u4E00\u6B65
        </Button>
      </div>
    </>
  );
};`}},key:"steps-demo-1",meta:{title:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}};var p=()=>t(u,{direction:"vertical",active:0,children:[t(u.Item,{children:[e("h3",{children:"\u3010\u57CE\u5E02\u3011\u7269\u6D41\u72B6\u60011"}),e("p",{children:"2016-07-12 12:40"})]}),t(u.Item,{children:[e("h3",{children:"\u3010\u57CE\u5E02\u3011\u7269\u6D41\u72B6\u60012"}),e("p",{children:"2016-07-11 10:00"})]}),t(u.Item,{children:[e("h3",{children:"\u5FEB\u4EF6\u5DF2\u53D1\u8D27"}),e("p",{children:"2016-07-10 09:30"})]})]});const E={code:`import React from 'react';
import { Steps } from 'react-vant-nova';

export default () => {
  return (
    <Steps direction="vertical" active={0}>
      <Steps.Item>
        <h3>\u3010\u57CE\u5E02\u3011\u7269\u6D41\u72B6\u60011</h3>
        <p>2016-07-12 12:40</p>
      </Steps.Item>
      <Steps.Item>
        <h3>\u3010\u57CE\u5E02\u3011\u7269\u6D41\u72B6\u60012</h3>
        <p>2016-07-11 10:00</p>
      </Steps.Item>
      <Steps.Item>
        <h3>\u5FEB\u4EF6\u5DF2\u53D1\u8D27</h3>
        <p>2016-07-10 09:30</p>
      </Steps.Item>
    </Steps>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Steps } from 'react-vant-nova';

export default () => {
  return (
    <Steps direction="vertical" active={0}>
      <Steps.Item>
        <h3>\u3010\u57CE\u5E02\u3011\u7269\u6D41\u72B6\u60011</h3>
        <p>2016-07-12 12:40</p>
      </Steps.Item>
      <Steps.Item>
        <h3>\u3010\u57CE\u5E02\u3011\u7269\u6D41\u72B6\u60012</h3>
        <p>2016-07-11 10:00</p>
      </Steps.Item>
      <Steps.Item>
        <h3>\u5FEB\u4EF6\u5DF2\u53D1\u8D27</h3>
        <p>2016-07-10 09:30</p>
      </Steps.Item>
    </Steps>
  );
};`}},key:"steps-demo-2",meta:{title:"\u7AD6\u5411\u6B65\u9AA4\u6761"}},B=function({previewer:d=()=>null,api:c=()=>null}){const r=d;return e("div",{children:t("div",{children:[e("h1",{id:"","data-anchor":"",children:"Steps \u6B65\u9AA4\u6761"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5C55\u793A\u64CD\u4F5C\u6D41\u7A0B\u7684\u5404\u4E2A\u73AF\u8282\uFF0C\u8BA9\u7528\u6237\u4E86\u89E3\u5F53\u524D\u7684\u64CD\u4F5C\u5728\u6574\u4F53\u6D41\u7A0B\u4E2D\u7684\u4F4D\u7F6E\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(r,{code:"import { Step, Steps } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),t("p",{children:[e("code",{children:"active"})," \u5C5E\u6027\u8868\u793A\u5F53\u524D\u6B65\u9AA4\u7684\u7D22\u5F15\uFF0C\u4ECE 0 \u8D77\u8BA1\u3002"]}),e(r,{...s,children:e(o,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}),t("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"activeIcon"})," \u548C ",e("code",{children:"activeColor"})," \u5C5E\u6027\u8BBE\u7F6E\u6FC0\u6D3B\u72B6\u6001\u4E0B\u7684\u56FE\u6807\u548C\u989C\u8272\u3002"]}),e(r,{...v,children:e(a,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u7AD6\u5411\u6B65\u9AA4\u6761"}),t("p",{children:["\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E ",e("code",{children:"direction"})," \u5C5E\u6027\u6765\u6539\u53D8\u6B65\u9AA4\u6761\u7684\u663E\u793A\u65B9\u5411\u3002"]}),e(r,{...E,children:e(p,{})}),e("h2",{id:"-7","data-anchor":"-7",children:"API"}),e("h3",{id:"-8","data-anchor":"-8",children:"Steps Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"active"}),e("td",{children:"\u5F53\u524D\u6B65\u9AA4\u5BF9\u5E94\u7684\u7D22\u5F15\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),t("tr",{children:[e("td",{children:"direction"}),t("td",{children:["\u6B65\u9AA4\u6761\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"vertical"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"horizontal"})})]}),t("tr",{children:[e("td",{children:"activeIcon"}),e("td",{children:"\u5F53\u524D\u6B65\u9AA4\u5BF9\u5E94\u7684\u5E95\u90E8\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"<Checked />"})})]}),t("tr",{children:[e("td",{children:"inactiveIcon"}),e("td",{children:"\u975E\u5F53\u524D\u6B65\u9AA4\u5BF9\u5E94\u7684\u5E95\u90E8\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"finishIcon"}),t("td",{children:["\u5DF2\u5B8C\u6210\u6B65\u9AA4\u5BF9\u5E94\u7684\u5E95\u90E8\u56FE\u6807\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E ",e("code",{children:"inactiveIcon"})]}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"activeColor"}),e("td",{children:"\u5F53\u524D\u6B65\u9AA4\u548C\u5DF2\u5B8C\u6210\u6B65\u9AA4\u7684\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#07c160"})})]}),t("tr",{children:[e("td",{children:"inactiveColor"}),e("td",{children:"\u672A\u6FC0\u6D3B\u6B65\u9AA4\u7684\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#969799"})})]})]})]}),e("h3",{id:"-9","data-anchor":"-9",children:"Steps.Item Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"activeIcon"}),e("td",{children:"\u652F\u6301\u81EA\u5B9A\u4E49\u6FC0\u6D3B\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"inactiveIcon"}),e("td",{children:"\u652F\u6301\u81EA\u5B9A\u4E49\u975E\u6FC0\u6D3B\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"finishIcon"}),e("td",{children:"\u652F\u6301\u81EA\u5B9A\u4E49\u5DF2\u5B8C\u6210\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-10","data-anchor":"-10",children:"Steps Events"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:t("tr",{children:[e("td",{children:"onClickStep"}),e("td",{children:"\u70B9\u51FB\u6B65\u9AA4\u7684\u6807\u9898\u6216\u56FE\u6807\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"index: number"})})]})})]}),e("h2",{id:"-11","data-anchor":"-11",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-12","data-anchor":"-12",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-step-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-active-color"}),e("td",{children:e("em",{children:"var(--rv-success-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-process-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-line-color"}),e("td",{children:e("em",{children:"var(--rv-border-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-finish-line-color"}),e("td",{children:e("em",{children:"var(--rv-success-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-finish-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-icon-size"}),e("td",{children:e("em",{children:"12px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-circle-size"}),e("td",{children:e("em",{children:"5px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-circle-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-horizontal-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-steps-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]})]})]})]})})},m=[{Component:o,key:"steps-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:a,key:"steps-demo-1",title:"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{Component:p,key:"steps-demo-2",title:"\u7AD6\u5411\u6B65\u9AA4\u6761"}],F=void 0,S=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:2,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:2,id:"-11"},{depth:3,id:"-12"}],A="/src/components/steps/README.md",C="undefined",D="1766203394000";var x=d=>d.children({MdContent:B,demos:m,frontmatter:F,slugs:S,filePath:A,title:C,updatedTime:D});export{B as MdContent,x as default,m as demos,A as filePath,F as frontmatter,S as slugs,C as title,D as updatedTime};
