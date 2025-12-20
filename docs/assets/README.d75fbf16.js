import{a as e,j as n}from"./main.7a53fb72.js";import{e9 as u,a4 as i}from"./FloatingPanel.c7f80ee3.js";var a=()=>e(u,{onSubmit:t=>{i.alert({message:t})}});const v={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} />;
};`}},key:"password-input-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var o=()=>e(u,{length:4,onSubmit:t=>{i.alert({message:t})}});const g={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput length={4} onSubmit={onSubmit} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput length={4} onSubmit={onSubmit} />;
};`}},key:"password-input-demo-1",meta:{title:"\u9650\u5236\u957F\u5EA6"}};var l=()=>e(u,{gutter:10,onSubmit:t=>{i.alert({message:t})}});const b={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput gutter={10} onSubmit={onSubmit} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput gutter={10} onSubmit={onSubmit} />;
};`}},key:"password-input-demo-2",meta:{title:"\u683C\u5B50\u95F4\u8DDD"}};var c=()=>e(u,{value:"123",mask:!1,onSubmit:t=>{i.alert({message:t})}});const D={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput value="123" mask={false} onSubmit={onSubmit} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput value="123" mask={false} onSubmit={onSubmit} />;
};`}},key:"password-input-demo-3",meta:{title:"\u660E\u6587\u5C55\u793A"}};var s=()=>e(u,{type:"number",value:"12",mask:!1,length:4,onSubmit:t=>{i.alert({message:t})}});const f={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput type="number" value="12" mask={false} length={4} onSubmit={onSubmit} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput type="number" value="12" mask={false} length={4} onSubmit={onSubmit} />;
};`}},key:"password-input-demo-4",meta:{title:"\u53EA\u5141\u8BB8\u6570\u5B57"}};var h=()=>e(u,{value:123,mask:!1,length:4,validator:t=>/^[0-3]{0,4}$/.test(t),onSubmit:t=>{i.alert({message:t})}});const E={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return (
    <PasswordInput
      value={123}
      mask={false}
      length={4}
      validator={(val) => {
        return /^[0-3]{0,4}$/.test(val);
      }}
      onSubmit={onSubmit}
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return (
    <PasswordInput
      value={123}
      mask={false}
      length={4}
      validator={(val) => {
        return /^[0-3]{0,4}$/.test(val);
      }}
      onSubmit={onSubmit}
    />
  );
};`}},key:"password-input-demo-5",meta:{title:"\u53EA\u5141\u8BB8\u6570\u5B57"}};var m=()=>e(u,{length:4,autoFocus:!0,onSubmit:t=>{i.alert({message:t})}});const w={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput length={4} autoFocus onSubmit={onSubmit} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput length={4} autoFocus onSubmit={onSubmit} />;
};`}},key:"password-input-demo-6",meta:{title:"\u53EA\u5141\u8BB8\u6570\u5B57"}};var p=()=>e(u,{onSubmit:t=>{i.alert({message:t})},info:e("div",{children:"\u5BC6\u7801\u4E3A6\u4F4D\u6570\u5B57"})});const F={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} info={<div>\u5BC6\u7801\u4E3A6\u4F4D\u6570\u5B57</div>} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant-nova';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} info={<div>\u5BC6\u7801\u4E3A6\u4F4D\u6570\u5B57</div>} />;
};`}},key:"password-input-demo-7",meta:{title:"\u63D0\u793A\u4FE1\u606F"}},S=function({previewer:r=()=>null,api:t=()=>null}){const d=r;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"PasswordInput \u5BC6\u7801\u8F93\u5165\u6846"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5BC6\u7801\u8F93\u5165\u6846"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(d,{code:"import { PasswordInput } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),e(d,{...v,children:e(a,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u9650\u5236\u957F\u5EA6"}),e(d,{...g,children:e(o,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u683C\u5B50\u95F4\u8DDD"}),e(d,{...b,children:e(l,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u660E\u6587\u5C55\u793A"}),e(d,{...D,children:e(c,{})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u53EA\u5141\u8BB8\u6570\u5B57"}),e(d,{...f,children:e(s,{})}),e("h3",{id:"-9","data-anchor":"-9",children:"\u81EA\u5B9A\u4E49\u89C4\u5219"}),e("blockquote",{children:e("p",{children:"\u5982\u679C\u8BBE\u7F6E\u7684\u521D\u59CB\u503C\u4E0D\u7B26\u5408\u89C4\u5219, \u5C06\u4E0D\u4F1A\u5C55\u793A"})}),e(d,{...E,children:e(h,{})}),e("h3",{id:"-10","data-anchor":"-10",children:"\u81EA\u52A8\u805A\u7126"}),e(d,{...w,children:e(m,{})}),e("h3",{id:"-11","data-anchor":"-11",children:"\u63D0\u793A\u4FE1\u606F"}),e(d,{...F,children:e(p,{})}),e("h2",{id:"-12","data-anchor":"-12",children:"API"}),e("h3",{id:"-13","data-anchor":"-13",children:"Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u503C"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"type"}),e("td",{children:"\u7C7B\u578B \u9ED8\u8BA4\u4E3A text"}),e("td",{children:e("em",{children:"string"})}),n("td",{children:[e("code",{children:"number"})," ",e("code",{children:"text"})]})]}),n("tr",{children:[e("td",{children:"info"}),e("td",{children:"\u8F93\u5165\u6846\u4E0B\u65B9\u6587\u5B57\u63D0\u793A"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"length"}),e("td",{children:"\u5BC6\u7801\u6700\u5927\u957F\u5EA6"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"6"})})]}),n("tr",{children:[e("td",{children:"gutter"}),n("td",{children:["\u8F93\u5165\u6846\u683C\u5B50\u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u5982 ",e("code",{children:"20px"})," ",e("code",{children:"2em"}),"\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),n("tr",{children:[e("td",{children:"autoFocus"}),e("td",{children:"\u81EA\u52A8\u805A\u7126"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"false"})]}),n("tr",{children:[e("td",{children:"mask"}),e("td",{children:"\u662F\u5426\u9690\u85CF\u5BC6\u7801"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"true"})]}),n("tr",{children:[e("td",{children:"validator"}),e("td",{children:"\u81EA\u5B9A\u4E49\u89C4\u5219, \u8FD9\u4E2A\u89C4\u5219\u5E76\u975E\u5355\u4E2A\u8F93\u5165\u6846\u7684"}),e("td",{children:e("em",{children:"function"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"highlightClass"}),e("td",{children:"\u9AD8\u4EAE\u6837\u5F0F(mask=true \u65F6\u4E0D\u751F\u6548)"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-14","data-anchor":"-14",children:"Events"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u6570\u636E\u6539\u53D8\u65F6\u89E6\u53D1"}),n("td",{children:["val: ",e("em",{children:"string"})]})]}),n("tr",{children:[e("td",{children:"onSubmit"}),e("td",{children:"\u6570\u636E\u8F93\u6EE1\u65F6\u89E6\u53D1"}),n("td",{children:["val: ",e("em",{children:"string"})]})]}),n("tr",{children:[e("td",{children:"onFocus"}),e("td",{children:"\u8F93\u5165\u6846\u805A\u7126\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-15","data-anchor":"-15",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-16","data-anchor":"-16",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"--rv-password-input-height"}),e("td",{children:e("em",{children:"50px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-margin"}),e("td",{children:e("em",{children:"0 var(--rv-padding-md)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-font-size"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-border-radius"}),e("td",{children:e("em",{children:"6px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-info-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-info-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-error-info-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-dot-size"}),e("td",{children:e("em",{children:"10px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-dot-color"}),e("td",{children:e("em",{children:"var(--rv-black)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-cursor-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-cursor-width"}),e("td",{children:e("em",{children:"1px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-cursor-height"}),e("td",{children:e("em",{children:"40%"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-cursor-animation-duration"}),e("td",{children:e("em",{children:"1s"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-password-input-item-border-radius"}),e("td",{children:e("em",{children:"0px"})}),e("td",{children:"-"})]})]})]})]})})},P=[{Component:a,key:"password-input-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:o,key:"password-input-demo-1",title:"\u9650\u5236\u957F\u5EA6"},{Component:l,key:"password-input-demo-2",title:"\u683C\u5B50\u95F4\u8DDD"},{Component:c,key:"password-input-demo-3",title:"\u660E\u6587\u5C55\u793A"},{Component:s,key:"password-input-demo-4",title:"\u53EA\u5141\u8BB8\u6570\u5B57"},{Component:h,key:"password-input-demo-5",title:"\u53EA\u5141\u8BB8\u6570\u5B57"},{Component:m,key:"password-input-demo-6",title:"\u53EA\u5141\u8BB8\u6570\u5B57"},{Component:p,key:"password-input-demo-7",title:"\u63D0\u793A\u4FE1\u606F"}],C=void 0,x=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:2,id:"-12"},{depth:3,id:"-13"},{depth:3,id:"-14"},{depth:2,id:"-15"},{depth:3,id:"-16"}],B="/src/components/password-input/README.md",y="undefined",A="1766203394000";var M=r=>r.children({MdContent:S,demos:P,frontmatter:C,slugs:x,filePath:B,title:y,updatedTime:A});export{S as MdContent,M as default,P as demos,B as filePath,C as frontmatter,x as slugs,y as title,A as updatedTime};
