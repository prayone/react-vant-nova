import{j as e,r as p,a as t}from"./main.a88292eb.js";import{d9 as u,dL as F,C as v}from"./FloatingPanel.3fa823e5.js";var c=()=>e(u,{defaultChecked:!0});const C={code:`import React from 'react';
import { Switch } from 'react-vant-nova';

export default () => {
  return <Switch defaultChecked />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'react-vant-nova';

export default () => {
  return <Switch defaultChecked />;
};`}},key:"switch-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var i=()=>e(u,{disabled:!0,defaultChecked:!0});const f={code:`import React from 'react';
import { Switch } from 'react-vant-nova';

export default () => {
  return <Switch disabled defaultChecked />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'react-vant-nova';

export default () => {
  return <Switch disabled defaultChecked />;
};`}},key:"switch-demo-1",meta:{title:"\u7981\u7528\u72B6\u6001",card:!0}};var a=()=>e(u,{loading:!0,defaultChecked:!0});const E={code:`import React from 'react';
import { Switch } from 'react-vant-nova';

export default () => {
  return <Switch loading defaultChecked />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'react-vant-nova';

export default () => {
  return <Switch loading defaultChecked />;
};`}},key:"switch-demo-2",meta:{title:"\u52A0\u8F7D\u72B6\u6001",card:!0}};var h=()=>e(u,{size:"24px",defaultChecked:!0});const w={code:`import React from 'react';
import { Switch } from 'react-vant-nova';

export default () => {
  return <Switch size="24px" defaultChecked />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'react-vant-nova';

export default () => {
  return <Switch size="24px" defaultChecked />;
};`}},key:"switch-demo-3",meta:{title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",card:!0}};var l=()=>e(u,{activeColor:"#ee0a24",inactiveColor:"#dcdee0",defaultChecked:!0});const D={code:`import React from 'react';
import { Switch } from 'react-vant-nova';

export default () => {
  return <Switch activeColor="#ee0a24" inactiveColor="#dcdee0" defaultChecked />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'react-vant-nova';

export default () => {
  return <Switch activeColor="#ee0a24" inactiveColor="#dcdee0" defaultChecked />;
};`}},key:"switch-demo-4",meta:{title:"\u81EA\u5B9A\u4E49\u989C\u8272",card:!0}};var o=()=>{const[d,n]=p.exports.useState(!1);return e(u,{checked:d,onChange:async m=>{try{await F.confirm({title:"\u63D0\u9192",message:"\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F"}),n(m)}catch{}}})};const B={code:`import React, { useState } from 'react';
import { Switch, Dialog } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState(false);
  const onChange = async (checked) => {
    try {
      await Dialog.confirm({
        title: '\u63D0\u9192',
        message: '\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F',
      });
      setValue(checked);
    } catch {
      // \u53D6\u6D88dialog
    }
  };
  return <Switch checked={value} onChange={onChange} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Switch, Dialog } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState(false);
  const onChange = async (checked) => {
    try {
      await Dialog.confirm({
        title: '\u63D0\u9192',
        message: '\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F',
      });
      setValue(checked);
    } catch {
      // \u53D6\u6D88dialog
    }
  };
  return <Switch checked={value} onChange={onChange} />;
};`}},key:"switch-demo-5",meta:{title:"\u5F02\u6B65\u63A7\u5236",card:!0}};var s=()=>e(v,{center:!0,title:"\u6807\u9898",rightIcon:e(u,{size:24,defaultChecked:!0,onChange:d=>console.log(`switch to ${d}`)})});const g={code:`import React from 'react';
import { Cell, Switch } from 'react-vant-nova';

export default () => {
  return (
    <Cell
      center
      title="\u6807\u9898"
      rightIcon={
        <Switch
          size={24}
          defaultChecked
          onChange={(checked) => console.log(\`switch to \${checked}\`)}
        />
      }
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Cell, Switch } from 'react-vant-nova';

export default () => {
  return (
    <Cell
      center
      title="\u6807\u9898"
      rightIcon={
        <Switch
          size={24}
          defaultChecked
          onChange={(checked) => console.log(\`switch to \${checked}\`)}
        />
      }
    />
  );
};`}},key:"switch-demo-6",meta:{title:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",card:!0}},k=function({previewer:d=()=>null,api:n=()=>null}){const r=d;return e("div",{children:t("div",{children:[e("h1",{id:"","data-anchor":"",children:"Switch \u5F00\u5173"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5728\u6253\u5F00\u548C\u5173\u95ED\u72B6\u6001\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(r,{code:"import { Switch } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"defaultChecked"})," \u9ED8\u8BA4\u5F00\u5173\u7684\u9009\u4E2D\u72B6\u6001\uFF0C",e("code",{children:"true"})," \u8868\u793A\u5F00\uFF0C",e("code",{children:"false"})," \u8868\u793A\u5173\u3002"]}),e(r,{...C,children:e(c,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u7981\u7528\u72B6\u6001"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"disabled"})," \u5C5E\u6027\u6765\u7981\u7528\u5F00\u5173\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u5F00\u5173\u4E0D\u53EF\u70B9\u51FB\u3002"]}),e(r,{...f,children:e(i,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u52A0\u8F7D\u72B6\u6001"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"loading"})," \u5C5E\u6027\u8BBE\u7F6E\u5F00\u5173\u4E3A\u52A0\u8F7D\u72B6\u6001\uFF0C\u52A0\u8F7D\u72B6\u6001\u4E0B\u5F00\u5173\u4E0D\u53EF\u70B9\u51FB\u3002"]}),e(r,{...E,children:e(a,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u81EA\u5B9A\u4E49\u5927\u5C0F"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"size"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\u5F00\u5173\u7684\u5927\u5C0F\u3002"]}),e(r,{...w,children:e(h,{})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),t("p",{children:[e("code",{children:"activeColor"})," \u5C5E\u6027\u8868\u793A\u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272\uFF0C",e("code",{children:"inactiveColor"})," \u8868\u793A\u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272\u3002"]}),e(r,{...D,children:e(l,{})}),e("h3",{id:"-9","data-anchor":"-9",children:"\u5F02\u6B65\u63A7\u5236"}),t("p",{children:["\u9700\u8981\u5F02\u6B65\u63A7\u5236\u5F00\u5173\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",e("code",{children:"checked"})," \u5C5E\u6027\u548C ",e("code",{children:"onChange"})," \u4E8B\u4EF6\u4EE3\u66FF ",e("code",{children:"defaultChecked"}),"\uFF0C\u5E76\u5728\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u4E2D\u624B\u52A8\u5904\u7406\u5F00\u5173\u72B6\u6001\u3002"]}),e(r,{...B,children:e(o,{})}),e("h3",{id:"-10","data-anchor":"-10",children:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528"}),e(r,{...g,children:e(s,{})}),e("h2",{id:"-11","data-anchor":"-11",children:"API"}),e("h3",{id:"-12","data-anchor":"-12",children:"Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"checked"}),e("td",{children:"\u5F00\u5173\u9009\u4E2D\u72B6\u6001"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:e("code",{children:"false"})})]}),t("tr",{children:[e("td",{children:"defaultChecked"}),e("td",{children:"\u5F00\u5173\u9009\u4E2D\u72B6\u6001"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:e("code",{children:"false"})})]}),t("tr",{children:[e("td",{children:"loading"}),e("td",{children:"\u662F\u5426\u4E3A\u52A0\u8F7D\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),t("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),t("tr",{children:[e("td",{children:"size"}),t("td",{children:["\u5F00\u5173\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"30px"})})]}),t("tr",{children:[e("td",{children:"activeColor"}),e("td",{children:"\u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),t("tr",{children:[e("td",{children:"inactiveColor"}),e("td",{children:"\u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"white"})})]}),t("tr",{children:[e("td",{children:"activeValue"}),e("td",{children:"\u6253\u5F00\u65F6\u5BF9\u5E94\u7684\u503C"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:e("code",{children:"true"})})]}),t("tr",{children:[e("td",{children:"inactiveValue"}),e("td",{children:"\u5173\u95ED\u65F6\u5BF9\u5E94\u7684\u503C"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"-13","data-anchor":"-13",children:"Events"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F00\u5173\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"value: any"})})]}),t("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]})]})]}),e("h2",{id:"-14","data-anchor":"-14",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-15","data-anchor":"-15",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-switch-size"}),e("td",{children:e("em",{children:"30px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-switch-width"}),e("td",{children:e("em",{children:"2em"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-switch-height"}),e("td",{children:e("em",{children:"1em"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-switch-node-size"}),e("td",{children:e("em",{children:"1em"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-switch-node-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-switch-node-box-shadow"}),e("td",{children:e("em",{children:"0 3px 1px 0 rgba(0, 0, 0, 0.05)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-switch-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-switch-on-background-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-switch-transition-duration"}),e("td",{children:e("em",{children:"var(--rv-animation-duration-base)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-switch-disabled-opacity"}),e("td",{children:e("em",{children:"var(--rv-disabled-opacity)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-switch-border"}),e("td",{children:e("em",{children:"var(--rv-border-width-base) solid rgba(0, 0, 0, 0.1)"})}),e("td",{children:"-"})]})]})]})]})})},y=[{Component:c,key:"switch-demo",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:i,key:"switch-demo-1",title:"\u7981\u7528\u72B6\u6001",card:!0},{Component:a,key:"switch-demo-2",title:"\u52A0\u8F7D\u72B6\u6001",card:!0},{Component:h,key:"switch-demo-3",title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",card:!0},{Component:l,key:"switch-demo-4",title:"\u81EA\u5B9A\u4E49\u989C\u8272",card:!0},{Component:o,key:"switch-demo-5",title:"\u5F02\u6B65\u63A7\u5236",card:!0},{Component:s,key:"switch-demo-6",title:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",card:!0}],x={simulator:{compact:!1,style:{background:"#fff"}}},A=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:2,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"},{depth:2,id:"-14"},{depth:3,id:"-15"}],S="/src/components/switch/README.md",b="undefined",P="1766203394000";var R=d=>d.children({MdContent:k,demos:y,frontmatter:x,slugs:A,filePath:S,title:b,updatedTime:P});export{k as MdContent,R as default,y as demos,S as filePath,x as frontmatter,A as slugs,b as title,P as updatedTime};
