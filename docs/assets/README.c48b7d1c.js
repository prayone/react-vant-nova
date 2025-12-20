import{r as n,a as u,j as e}from"./main.7a53fb72.js";import{aA as c,H as l}from"./FloatingPanel.c7f80ee3.js";var a=()=>{const[r,d]=n.exports.useState("");return u(c,{value:r,onChange:d,clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})};const E={code:`import React, { useState } from 'react';
import { Search } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return <Search value={value} onChange={setValue} clearable placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Search } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return <Search value={value} onChange={setValue} clearable placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD" />;
};`}},key:"search-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var h=()=>{const[r,d]=n.exports.useState("");return u(c,{value:r,onChange:d,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",showAction:!0,onSearch:t=>{l(t),d(t)},onCancel:()=>{l("\u53D6\u6D88"),d("")},onClear:()=>{l("\u6E05\u9664"),d("")},onClickInput:()=>{l("\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1	")}})};const C={code:`import React, { useState } from 'react';
import { Search, Toast } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      value={value}
      onChange={setValue}
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
      showAction
      onSearch={(val) => {
        Toast(val);
        setValue(val);
      }}
      onCancel={() => {
        Toast('\u53D6\u6D88');
        setValue('');
      }}
      onClear={() => {
        Toast('\u6E05\u9664');
        setValue('');
      }}
      onClickInput={() => {
        Toast('\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1	');
      }}
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Search, Toast } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      value={value}
      onChange={setValue}
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
      showAction
      onSearch={(val) => {
        Toast(val);
        setValue(val);
      }}
      onCancel={() => {
        Toast('\u53D6\u6D88');
        setValue('');
      }}
      onClear={() => {
        Toast('\u6E05\u9664');
        setValue('');
      }}
      onClickInput={() => {
        Toast('\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1	');
      }}
    />
  );
};`}},key:"search-demo-1",meta:{title:"\u4E8B\u4EF6\u76D1\u542C"}};var i=()=>{const[r,d]=n.exports.useState("");return u(c,{value:r,onChange:d,align:"center",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})};const v={code:`import React, { useState } from 'react';
import { Search } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search value={value} onChange={setValue} align="center" placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD" />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Search } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search value={value} onChange={setValue} align="center" placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD" />
  );
};`}},key:"search-demo-2",meta:{title:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50"}};var o=()=>{const[r,d]=n.exports.useState("");return u(c,{disabled:!0,value:r,onChange:d,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})};const B={code:`import React, { useState } from 'react';
import { Search } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return <Search disabled value={value} onChange={setValue} placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Search } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return <Search disabled value={value} onChange={setValue} placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD" />;
};`}},key:"search-demo-3",meta:{title:"\u7981\u7528\u641C\u7D22\u6846"}};var F=()=>{const[r,d]=n.exports.useState("");return u(c,{shape:"round",background:"#4fc08d",value:r,onChange:d,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})};const p={code:`import React, { useState } from 'react';
import { Search } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      shape="round"
      background="#4fc08d"
      value={value}
      onChange={setValue}
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Search } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      shape="round"
      background="#4fc08d"
      value={value}
      onChange={setValue}
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
    />
  );
};`}},key:"search-demo-4",meta:{title:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272"}};var s=()=>{const[r,d]=n.exports.useState("");return u(c,{showAction:!0,label:"\u5730\u5740",actionText:u("div",{onClick:()=>l.info(r),children:"\u641C\u7D22"}),value:r,onChange:d,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})};const D={code:`import React, { useState } from 'react';
import { Search, Toast } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      showAction
      label="\u5730\u5740"
      actionText={<div onClick={() => Toast.info(value)}>\u641C\u7D22</div>}
      value={value}
      onChange={setValue}
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Search, Toast } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      showAction
      label="\u5730\u5740"
      actionText={<div onClick={() => Toast.info(value)}>\u641C\u7D22</div>}
      value={value}
      onChange={setValue}
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
    />
  );
};`}},key:"search-demo-5",meta:{title:"\u81EA\u5B9A\u4E49\u6309\u94AE"}},m=function({previewer:r=()=>null,api:d=()=>null}){const t=r;return u("div",{children:e("div",{children:[u("h1",{id:"","data-anchor":"",children:"Search \u641C\u7D22"}),u("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),u("p",{children:"\u7528\u4E8E\u641C\u7D22\u573A\u666F\u7684\u8F93\u5165\u6846\u7EC4\u4EF6\u3002"}),u("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),u(t,{code:"import { Search } from 'react-vant-nova';",lang:"js"}),u("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:[u("code",{children:"value"})," \u7528\u4E8E\u63A7\u5236\u641C\u7D22\u6846\u4E2D\u7684\u6587\u5B57\uFF0C",u("code",{children:"background"})," \u53EF\u4EE5\u81EA\u5B9A\u4E49\u641C\u7D22\u6846\u5916\u90E8\u80CC\u666F\u8272\u3002"]}),u(t,{...E,children:u(a,{})}),u("h3",{id:"-5","data-anchor":"-5",children:"\u4E8B\u4EF6\u76D1\u542C"}),e("p",{children:["Search \u7EC4\u4EF6\u63D0\u4F9B\u4E86 ",u("code",{children:"onSearch"})," \u548C ",u("code",{children:"onCancel"})," \u4E8B\u4EF6\uFF0C",u("code",{children:"onSearch"})," \u4E8B\u4EF6\u5728\u70B9\u51FB\u952E\u76D8\u4E0A\u7684\u641C\u7D22/\u56DE\u8F66\u6309\u94AE\u540E\u89E6\u53D1\uFF0C",u("code",{children:"onCancel"})," \u4E8B\u4EF6\u5728\u70B9\u51FB\u641C\u7D22\u6846\u53F3\u4FA7\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1\u3002"]}),u(t,{...C,children:u(h,{})}),u("h3",{id:"-6","data-anchor":"-6",children:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"align"})," \u5C5E\u6027\u8BBE\u7F6E\u641C\u7D22\u6846\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"}),"\u3001",u("code",{children:"right"}),"\u3002"]}),u(t,{...v,children:u(i,{})}),u("h3",{id:"-7","data-anchor":"-7",children:"\u7981\u7528\u641C\u7D22\u6846"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"disabled"})," \u5C5E\u6027\u7981\u7528\u641C\u7D22\u6846\u3002"]}),u(t,{...B,children:u(o,{})}),u("h3",{id:"-8","data-anchor":"-8",children:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"background"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u641C\u7D22\u6846\u5916\u90E8\u7684\u80CC\u666F\u8272\uFF0C\u901A\u8FC7 ",u("code",{children:"shape"})," \u5C5E\u6027\u8BBE\u7F6E\u641C\u7D22\u6846\u7684\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"round"}),"\u3002"]}),u(t,{...p,children:u(F,{})}),u("h3",{id:"-9","data-anchor":"-9",children:"\u81EA\u5B9A\u4E49\u6309\u94AE"}),e("p",{children:["\u4F7F\u7528 ",u("code",{children:"actionText"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u53F3\u4FA7\u6309\u94AE\u7684\u5185\u5BB9\u3002\u4F7F\u7528\u540E\uFF0C",u("code",{children:"onCancel"})," \u4E8B\u4EF6\u5C06\u4E0D\u518D\u89E6\u53D1\u3002"]}),u(t,{...D,children:u(s,{})}),u("h2",{id:"-10","data-anchor":"-10",children:"API"}),u("h3",{id:"-11","data-anchor":"-11",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"label"}),u("td",{children:"\u641C\u7D22\u6846\u5DE6\u4FA7\u6587\u672C"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"shape"}),e("td",{children:["\u641C\u7D22\u6846\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"round"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"square"})})]}),e("tr",{children:[u("td",{children:"background"}),u("td",{children:"\u641C\u7D22\u6846\u5916\u90E8\u80CC\u666F\u8272"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"#f2f2f2"})})]}),e("tr",{children:[u("td",{children:"maxLength"}),u("td",{children:"\u8F93\u5165\u7684\u6700\u5927\u5B57\u7B26\u6570"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"placeholder"}),u("td",{children:"\u5360\u4F4D\u63D0\u793A\u6587\u5B57"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"clearable"}),u("td",{children:"\u662F\u5426\u542F\u7528\u6E05\u9664\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u540E\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"clearIcon"}),u("td",{children:"\u6E05\u9664\u56FE\u6807"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"clear"})})]}),e("tr",{children:[u("td",{children:"clearTrigger"}),e("td",{children:["\u663E\u793A\u6E05\u9664\u56FE\u6807\u7684\u65F6\u673A\uFF0C",u("code",{children:"always"})," \u8868\u793A\u8F93\u5165\u6846\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A\uFF0C",u("br",{}),u("code",{children:"focus"})," \u8868\u793A\u8F93\u5165\u6846\u805A\u7126\u4E14\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A"]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"focus"})})]}),e("tr",{children:[u("td",{children:"autoFocus"}),u("td",{children:"\u662F\u5426\u81EA\u52A8\u805A\u7126\uFF0CiOS \u7CFB\u7EDF\u4E0D\u652F\u6301\u8BE5\u5C5E\u6027"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"showAction"}),u("td",{children:"\u662F\u5426\u5728\u641C\u7D22\u6846\u53F3\u4FA7\u663E\u793A\u53D6\u6D88\u6309\u94AE"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"actionText"}),u("td",{children:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"\u53D6\u6D88"})})]}),e("tr",{children:[u("td",{children:"action"}),e("td",{children:["\u81EA\u5B9A\u4E49\u53F3\u4FA7\u64CD\u4F5C\u5185\u5BB9\uFF0C\u4F1A\u8986\u76D6 ",u("code",{children:"showAction"})," \u548C ",u("code",{children:"actionText"})," \u884C\u4E3A"]}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"disabled"}),u("td",{children:"\u662F\u5426\u7981\u7528\u8F93\u5165\u6846"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"readOnly"}),u("td",{children:"\u662F\u5426\u5C06\u8F93\u5165\u6846\u8BBE\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u8F93\u5165\u5185\u5BB9"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"error"}),u("td",{children:"\u662F\u5426\u5C06\u8F93\u5165\u5185\u5BB9\u6807\u7EA2"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"errorMessage"}),u("td",{children:"\u5E95\u90E8\u9519\u8BEF\u63D0\u793A\u6587\u6848\uFF0C\u4E3A\u7A7A\u65F6\u4E0D\u5C55\u793A"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"formatter"}),u("td",{children:"\u8F93\u5165\u5185\u5BB9\u683C\u5F0F\u5316\u51FD\u6570"}),u("td",{children:u("em",{children:"(val: string) => string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"formatTrigger"}),e("td",{children:["\u683C\u5F0F\u5316\u51FD\u6570\u89E6\u53D1\u7684\u65F6\u673A\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"onBlur"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"onChange"})})]}),e("tr",{children:[u("td",{children:"align"}),e("td",{children:["\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"})," ",u("code",{children:"right"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"left"})})]}),e("tr",{children:[u("td",{children:"leftIcon"}),u("td",{children:"\u8F93\u5165\u6846\u5DE6\u4FA7"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"search"})})]}),e("tr",{children:[u("td",{children:"rightIcon"}),u("td",{children:"\u8F93\u5165\u6846\u53F3\u4FA7"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]})]})]}),u("h3",{id:"-12","data-anchor":"-12",children:"Events"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u4E8B\u4EF6\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"onSearch"}),u("td",{children:"\u786E\u5B9A\u641C\u7D22\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"value: string (\u5F53\u524D\u8F93\u5165\u7684\u503C)"})})]}),e("tr",{children:[u("td",{children:"onChange"}),u("td",{children:"\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"value: string (\u5F53\u524D\u8F93\u5165\u7684\u503C)"})})]}),e("tr",{children:[u("td",{children:"onFocus"}),u("td",{children:"\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: Event"})})]}),e("tr",{children:[u("td",{children:"onBlur"}),u("td",{children:"\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: Event"})})]}),e("tr",{children:[u("td",{children:"onClickInput"}),u("td",{children:"\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onClear"}),u("td",{children:"\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u540E\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onCancel"}),u("td",{children:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1"}),u("td",{children:"-"})]})]})]}),u("h3",{id:"-13","data-anchor":"-13",children:"\u65B9\u6CD5"}),u("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Search \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"focus"}),u("td",{children:"\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9"}),u("td",{children:"-"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"blur"}),u("td",{children:"\u53D6\u6D88\u8F93\u5165\u6846\u7126\u70B9"}),u("td",{children:"-"}),u("td",{children:"-"})]})]})]}),u("h3",{id:"-14","data-anchor":"-14",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"SearchInstance"})," \u83B7\u53D6 Search \u5B9E\u4F8B\u7684\u7C7B\u578B\u5B9A\u4E49\u3002"]}),u(t,{code:`import { useRef } from 'react';
import type { SearchInstance } from 'react-vant-nova';

const searchRef = useRef<SearchInstance>();

searchRef.current?.focus();`,lang:"ts"}),u("h2",{id:"-15","data-anchor":"-15",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"-16","data-anchor":"-16",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-search-padding"}),u("td",{children:u("em",{children:"10px var(--rv-padding-sm)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-background-color"}),u("td",{children:u("em",{children:"var(--rv-white)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-content-background-color"}),u("td",{children:u("em",{children:"var(--rv-gray-1)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-input-height"}),u("td",{children:u("em",{children:"34px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-label-padding"}),u("td",{children:u("em",{children:"0 5px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-label-color"}),u("td",{children:u("em",{children:"var(--rv-text-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-label-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-left-icon-color"}),u("td",{children:u("em",{children:"var(--rv-gray-6)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-action-padding"}),u("td",{children:u("em",{children:"0 var(--rv-padding-xs)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-action-text-color"}),u("td",{children:u("em",{children:"var(--rv-text-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-action-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"-17","data-anchor":"-17",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"-18","data-anchor":"-18",children:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F"}),e("p",{children:["\u6E05\u9664\u6309\u94AE\u76D1\u542C\u662F\u7684\u79FB\u52A8\u7AEF Touch \u4E8B\u4EF6\uFF0C\u53C2\u89C1",u("a",{href:"/guide/advanced-usage",children:"\u684C\u9762\u7AEF\u9002\u914D"}),"\u3002"]})]})})},A=[{Component:a,key:"search-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:h,key:"search-demo-1",title:"\u4E8B\u4EF6\u76D1\u542C"},{Component:i,key:"search-demo-2",title:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50"},{Component:o,key:"search-demo-3",title:"\u7981\u7528\u641C\u7D22\u6846"},{Component:F,key:"search-demo-4",title:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272"},{Component:s,key:"search-demo-5",title:"\u81EA\u5B9A\u4E49\u6309\u94AE"}],f=void 0,g=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:2,id:"-10"},{depth:3,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"},{depth:3,id:"-14"},{depth:2,id:"-15"},{depth:3,id:"-16"},{depth:2,id:"-17"},{depth:3,id:"-18"}],S="/src/components/search/README.md",x="undefined",b="1766203394000";var k=r=>r.children({MdContent:m,demos:A,frontmatter:f,slugs:g,filePath:S,title:x,updatedTime:b});export{m as MdContent,k as default,A as demos,S as filePath,f as frontmatter,g as slugs,x as title,b as updatedTime};
