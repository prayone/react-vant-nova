import{j as e,a as r,r as m,F as g}from"./main.6d1ac2ec.js";import{e5 as n,S as v,F,B as o}from"./FloatingPanel.f57aae97.js";var a=()=>e(n,{percentage:"50"});const E={code:`import React from 'react';
import { Progress } from 'react-vant-nova';

export default () => {
  return <Progress percentage="50" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Progress } from 'react-vant-nova';

export default () => {
  return <Progress percentage="50" />;
};`}},key:"progress-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var l=()=>e(n,{strokeWidth:8,percentage:"50"});const C={code:`import React from 'react';
import { Progress } from 'react-vant-nova';

export default () => {
  return <Progress strokeWidth={8} percentage="50" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Progress } from 'react-vant-nova';

export default () => {
  return <Progress strokeWidth={8} percentage="50" />;
};`}},key:"progress-demo-1",meta:{title:"\u7EBF\u6761\u7C97\u7EC6"}};var h=()=>e(n,{inactive:!0,percentage:"50"});const B={code:`import React from 'react';
import { Progress } from 'react-vant-nova';

export default () => {
  return <Progress inactive percentage="50" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Progress } from 'react-vant-nova';

export default () => {
  return <Progress inactive percentage="50" />;
};`}},key:"progress-demo-2",meta:{title:"\u7F6E\u7070"}};var s=()=>r(v,{block:!0,gap:[0,20],direction:"vertical",children:[e(n,{style:{marginBottom:20},color:"#f2826a",percentage:"25",pivotText:"\u6A59\u8272"}),e(n,{style:{marginBottom:20},color:"#ee0a24",percentage:"50",pivotText:"\u7EA2\u8272"}),e(n,{color:"linear-gradient(to right, #be99ff, #7232dd)",percentage:"75",pivotColor:"#7232dd",pivotText:e("div",{children:"\u7D2B\u8272"})})]});const f={code:`import React from 'react';
import { Space, Progress } from 'react-vant-nova';

export default () => {
  return (
    <Space block gap={[0, 20]} direction="vertical">
      <Progress style={{ marginBottom: 20 }} color="#f2826a" percentage="25" pivotText="\u6A59\u8272" />
      <Progress style={{ marginBottom: 20 }} color="#ee0a24" percentage="50" pivotText="\u7EA2\u8272" />
      <Progress
        color="linear-gradient(to right, #be99ff, #7232dd)"
        percentage="75"
        pivotColor="#7232dd"
        pivotText={<div>\u7D2B\u8272</div>}
      />
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Progress } from 'react-vant-nova';

export default () => {
  return (
    <Space block gap={[0, 20]} direction="vertical">
      <Progress style={{ marginBottom: 20 }} color="#f2826a" percentage="25" pivotText="\u6A59\u8272" />
      <Progress style={{ marginBottom: 20 }} color="#ee0a24" percentage="50" pivotText="\u7EA2\u8272" />
      <Progress
        color="linear-gradient(to right, #be99ff, #7232dd)"
        percentage="75"
        pivotColor="#7232dd"
        pivotText={<div>\u7D2B\u8272</div>}
      />
    </Space>
  );
};`}},key:"progress-demo-3",meta:{title:"\u6837\u5F0F\u5B9A\u5236"}},i=t=>Math.min(Math.max(t,0),100);var p=()=>{const[t,u]=m.exports.useState(50);return r(g,{children:[e(n,{percentage:t}),r(F,{justify:"center",style:{marginTop:20},children:[e(o,{style:{marginRight:10},type:"primary",size:"small",onClick:()=>{u(c=>i(c+20))},children:"\u589E\u52A0"}),e(o,{type:"danger",size:"small",onClick:()=>{u(c=>i(c-20))},children:"\u51CF\u5C11"})]})]})};const x={code:`import React, { useState } from 'react';
import { Flex, Button, Progress } from 'react-vant-nova';

const format = (rate) => Math.min(Math.max(rate, 0), 100);

export default () => {
  const [percentage, setPercentage] = useState(50);

  const add = () => {
    setPercentage((value) => format(value + 20));
  };

  const reduce = () => {
    setPercentage((value) => format(value - 20));
  };
  return (
    <>
      <Progress percentage={percentage} />
      <Flex justify="center" style={{ marginTop: 20 }}>
        <Button style={{ marginRight: 10 }} type="primary" size="small" onClick={add}>
          \u589E\u52A0
        </Button>
        <Button type="danger" size="small" onClick={reduce}>
          \u51CF\u5C11
        </Button>
      </Flex>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Flex, Button, Progress } from 'react-vant-nova';

const format = (rate) => Math.min(Math.max(rate, 0), 100);

export default () => {
  const [percentage, setPercentage] = useState(50);

  const add = () => {
    setPercentage((value) => format(value + 20));
  };

  const reduce = () => {
    setPercentage((value) => format(value - 20));
  };
  return (
    <>
      <Progress percentage={percentage} />
      <Flex justify="center" style={{ marginTop: 20 }}>
        <Button style={{ marginRight: 10 }} type="primary" size="small" onClick={add}>
          \u589E\u52A0
        </Button>
        <Button type="danger" size="small" onClick={reduce}>
          \u51CF\u5C11
        </Button>
      </Flex>
    </>
  );
};`}},key:"progress-demo-4",meta:{title:"\u8FC7\u6E21\u6548\u679C"}},y=function({previewer:t=()=>null,api:u=()=>null}){const d=t;return e("div",{children:r("div",{children:[e("h1",{id:"","data-anchor":"",children:"Progress \u8FDB\u5EA6\u6761"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5C55\u793A\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(d,{code:"import { Progress } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),r("p",{children:["\u8FDB\u5EA6\u6761\u9ED8\u8BA4\u4E3A\u84DD\u8272\uFF0C\u4F7F\u7528 ",e("code",{children:"percentage"})," \u5C5E\u6027\u6765\u8BBE\u7F6E\u5F53\u524D\u8FDB\u5EA6\u3002"]}),e(d,{...E,children:e(a,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u7EBF\u6761\u7C97\u7EC6"}),r("p",{children:["\u901A\u8FC7 ",e("code",{children:"strokeWidth"})," \u53EF\u4EE5\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u7684\u7C97\u7EC6\u3002"]}),e(d,{...C,children:e(l,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u7F6E\u7070"}),r("p",{children:["\u8BBE\u7F6E ",e("code",{children:"inactive"})," \u5C5E\u6027\u540E\u8FDB\u5EA6\u6761\u5C06\u7F6E\u7070\u3002"]}),e(d,{...B,children:e(h,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u6837\u5F0F\u5B9A\u5236"}),r("p",{children:["\u53EF\u4EE5\u4F7F\u7528 ",e("code",{children:"pivotText"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\u6587\u5B57\uFF0C",e("code",{children:"color"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u989C\u8272\u3002"]}),e(d,{...f,children:e(s,{})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u8FC7\u6E21\u6548\u679C"}),e(d,{...x,children:e(p,{})}),e("h2",{id:"-9","data-anchor":"-9",children:"API"}),e("h3",{id:"-10","data-anchor":"-10",children:"Props"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"percentage"}),e("td",{children:"\u8FDB\u5EA6\u767E\u5206\u6BD4"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),r("tr",{children:[e("td",{children:"strokeWidth"}),r("td",{children:["\u8FDB\u5EA6\u6761\u7C97\u7EC6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"4px"})})]}),r("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u8FDB\u5EA6\u6761\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),r("tr",{children:[e("td",{children:"trackColor"}),e("td",{children:"\u8F68\u9053\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#e5e5e5"})})]}),r("tr",{children:[e("td",{children:"pivotText"}),e("td",{children:"\u8FDB\u5EA6\u6587\u5B57\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"\u767E\u5206\u6BD4"})]}),r("tr",{children:[e("td",{children:"pivotColor"}),e("td",{children:"\u8FDB\u5EA6\u6587\u5B57\u80CC\u666F\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"\u540C\u8FDB\u5EA6\u6761\u989C\u8272"})]}),r("tr",{children:[e("td",{children:"textColor"}),e("td",{children:"\u8FDB\u5EA6\u6587\u5B57\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"white"})})]}),r("tr",{children:[e("td",{children:"inactive"}),e("td",{children:"\u662F\u5426\u7F6E\u7070"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"showPivot"}),e("td",{children:"\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6587\u5B57"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h2",{id:"-11","data-anchor":"-11",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-12","data-anchor":"-12",children:"\u6837\u5F0F\u53D8\u91CF"}),r("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"--rv-progress-height"}),e("td",{children:e("em",{children:"4px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-background-color"}),e("td",{children:e("em",{children:"var(--rv-gray-3)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-pivot-padding"}),e("td",{children:e("em",{children:"0 5px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-pivot-text-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-pivot-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-xs)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-pivot-line-height"}),e("td",{children:e("em",{children:"1.6"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-pivot-background-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]})]})]})]})})},P=[{Component:a,key:"progress-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:l,key:"progress-demo-1",title:"\u7EBF\u6761\u7C97\u7EC6"},{Component:h,key:"progress-demo-2",title:"\u7F6E\u7070"},{Component:s,key:"progress-demo-3",title:"\u6837\u5F0F\u5B9A\u5236"},{Component:p,key:"progress-demo-4",title:"\u8FC7\u6E21\u6548\u679C"}],A={simulator:{compact:!1,style:{background:"#fff"}}},D=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:2,id:"-9"},{depth:3,id:"-10"},{depth:2,id:"-11"},{depth:3,id:"-12"}],k="/src/components/progress/README.md",M="undefined",b="1766203394000";var T=t=>t.children({MdContent:y,demos:P,frontmatter:A,slugs:D,filePath:k,title:M,updatedTime:b});export{y as MdContent,T as default,P as demos,k as filePath,A as frontmatter,D as slugs,M as title,b as updatedTime};
