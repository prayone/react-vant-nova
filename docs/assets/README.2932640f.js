import{a as e,j as r,F as h}from"./main.7a53fb72.js";import{ei as d,ck as a,h as o}from"./FloatingPanel.c7f80ee3.js";var i=()=>e("div",{className:"demo-submit-bar",children:e(d,{price:"3050",buttonText:"\u63D0\u4EA4\u8BA2\u5355"})});const m={code:`import React from 'react';
import { SubmitBar } from 'react-vant-nova';

export default () => {
  return <div className="demo-submit-bar"><SubmitBar price="3050" buttonText="\u63D0\u4EA4\u8BA2\u5355" /></div>;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { SubmitBar } from 'react-vant-nova';

export default () => {
  return <div className="demo-submit-bar"><SubmitBar price="3050" buttonText="\u63D0\u4EA4\u8BA2\u5355" /></div>;
};`}},key:"submit-bar-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var n=()=>e("div",{className:"demo-submit-bar",children:e(d,{disabled:!0,price:"3050",tip:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u540C\u57CE\u9001, \u6211\u4EEC\u5DF2\u4E3A\u4F60\u63A8\u8350\u5FEB\u9012",tipIcon:e(a,{}),buttonText:"\u63D0\u4EA4\u8BA2\u5355"})});const s=`import React from 'react'
import { InfoO } from '@react-vant/icons'
import { SubmitBar } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-submit-bar'>
      <SubmitBar
        disabled
        price='3050'
        tip='\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u540C\u57CE\u9001, \u6211\u4EEC\u5DF2\u4E3A\u4F60\u63A8\u8350\u5FEB\u9012'
        tipIcon={<InfoO />}
        buttonText='\u63D0\u4EA4\u8BA2\u5355'
      />
    </div>
  )
}
`,b={code:s,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { InfoO } from '@react-vant/icons'
import { SubmitBar } from 'react-vant-nova'

export default () => {
  return (
    <div className='demo-submit-bar'>
      <SubmitBar
        disabled
        price='3050'
        tip='\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u540C\u57CE\u9001, \u6211\u4EEC\u5DF2\u4E3A\u4F60\u63A8\u8350\u5FEB\u9012'
        tipIcon={<InfoO />}
        buttonText='\u63D0\u4EA4\u8BA2\u5355'
      />
    </div>
  )
}
`}},key:"submit-bar-disabled",meta:{title:"\u7981\u7528\u72B6\u6001"}};var c=()=>e("div",{className:"demo-submit-bar",children:e(d,{loading:!0,price:"3050",buttonText:"\u63D0\u4EA4\u8BA2\u5355"})});const p={code:`import React from 'react';
import { SubmitBar } from 'react-vant-nova';

export default () => {
  return <div className="demo-submit-bar"><SubmitBar loading price="3050" buttonText="\u63D0\u4EA4\u8BA2\u5355" /></div>;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { SubmitBar } from 'react-vant-nova';

export default () => {
  return <div className="demo-submit-bar"><SubmitBar loading price="3050" buttonText="\u63D0\u4EA4\u8BA2\u5355" /></div>;
};`}},key:"submit-bar-demo-1",meta:{title:"\u52A0\u8F7D\u72B6\u6001"}};var l=()=>e("div",{className:"demo-submit-bar",children:e(d,{price:"3050",buttonText:"\u63D0\u4EA4\u8BA2\u5355",tip:r(h,{children:["\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u540C\u57CE\u9001,",e("span",{style:{color:"#1989fa"},children:"\u4FEE\u6539\u5730\u5740"})]}),children:e(o,{children:"\u5168\u9009"})})});const E={code:`import React from 'react';
import { SubmitBar, Checkbox } from 'react-vant-nova';
import './demo/style.less';

export default () => {
  return (
    <div className="demo-submit-bar">
    <SubmitBar
      price="3050"
      buttonText="\u63D0\u4EA4\u8BA2\u5355"
      tip={
        <>
          \u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u540C\u57CE\u9001,
          <span style={{ color: '#1989fa' }}>\u4FEE\u6539\u5730\u5740</span>
        </>
      }
    >
      <Checkbox>\u5168\u9009</Checkbox>
    </SubmitBar>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { SubmitBar, Checkbox } from 'react-vant-nova';
import './demo/style.less';

export default () => {
  return (
    <div className="demo-submit-bar">
    <SubmitBar
      price="3050"
      buttonText="\u63D0\u4EA4\u8BA2\u5355"
      tip={
        <>
          \u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u540C\u57CE\u9001,
          <span style={{ color: '#1989fa' }}>\u4FEE\u6539\u5730\u5740</span>
        </>
      }
    >
      <Checkbox>\u5168\u9009</Checkbox>
    </SubmitBar>
    </div>
  );
};`},"demo/style.less":{type:"FILE",value:`.demo-submit-bar {
  .rv-submit-bar {
    position: relative;
    padding-bottom: 0;
  }
}
`}},key:"submit-bar-demo-2",meta:{title:"\u9AD8\u7EA7\u7528\u6CD5"}},v=function({previewer:t=()=>null,api:x=()=>null}){const u=t;return e("div",{children:r("div",{children:[e("h1",{id:"","data-anchor":"",children:"SubmitBar \u63D0\u4EA4\u8BA2\u5355\u680F"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5C55\u793A\u8BA2\u5355\u91D1\u989D\u4E0E\u63D0\u4EA4\u8BA2\u5355\u3002"}),e(u,{code:"import { SubmitBar } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u7840\u7528\u6CD5"}),e(u,{...m,children:e(i,{})}),e("h3",{id:"-4","data-anchor":"-4",children:"\u7981\u7528\u72B6\u6001"}),r("p",{children:["\u7981\u7528\u72B6\u6001\u4E0B\u4E0D\u4F1A\u89E6\u53D1 ",e("code",{children:"onSubmit"})," \u4E8B\u4EF6\u3002"]}),e(u,{...b,children:e(n,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u52A0\u8F7D\u72B6\u6001"}),r("p",{children:["\u52A0\u8F7D\u72B6\u6001\u4E0B\u4E0D\u4F1A\u89E6\u53D1 ",e("code",{children:"onSubmit"})," \u4E8B\u4EF6\u3002"]}),e(u,{...p,children:e(c,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u9AD8\u7EA7\u7528\u6CD5"}),e("p",{children:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002"}),e(u,{...E,children:e(l,{})}),e("h2",{id:"-7","data-anchor":"-7",children:"API"}),e("h3",{id:"-8","data-anchor":"-8",children:"Props"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"price"}),e("td",{children:"\u91D1\u989D\uFF08\u5355\u4F4D\u5206\uFF09"}),e("td",{children:e("em",{children:"number| string"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"decimalLength"}),e("td",{children:"\u91D1\u989D\u5C0F\u6570\u70B9\u4F4D\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"2"})})]}),r("tr",{children:[e("td",{children:"label"}),e("td",{children:"\u91D1\u989D\u5DE6\u4FA7\u6587\u6848"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"\u5408\u8BA1\uFF1A"})})]}),r("tr",{children:[e("td",{children:"suffixLabel"}),e("td",{children:"\u91D1\u989D\u53F3\u4FA7\u6587\u6848"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"textAlign"}),r("td",{children:["\u91D1\u989D\u6587\u6848\u5BF9\u9F50\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"left"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"right"})})]}),r("tr",{children:[e("td",{children:"buttonText"}),e("td",{children:"\u6309\u94AE\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"buttonType"}),e("td",{children:"\u6309\u94AE\u7C7B\u578B"}),e("td",{children:e("em",{children:e("a",{href:"/components/button",children:"ButtonType"})})}),e("td",{children:e("code",{children:"danger"})})]}),r("tr",{children:[e("td",{children:"buttonColor"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"tip"}),e("td",{children:"\u5728\u8BA2\u5355\u680F\u4E0A\u65B9\u7684\u63D0\u793A\u6587\u6848"}),e("td",{children:e("em",{children:"string|ReactNode"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"tipIcon"}),e("td",{children:"\u63D0\u793A\u6587\u6848\u5DE6\u4FA7\u7684\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"currency"}),e("td",{children:"\u8D27\u5E01\u7B26\u53F7"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\xA5"})})]}),r("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"loading"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5C06\u6309\u94AE\u663E\u793A\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"safeAreaInsetBottom"}),r("td",{children:["\u662F\u5426\u5F00\u542F",e("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),r("tr",{children:[e("td",{children:"button"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6309\u94AE"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"top"}),e("td",{children:"\u81EA\u5B9A\u4E49\u8BA2\u5355\u680F\u4E0A\u65B9\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-9","data-anchor":"-9",children:"Events"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:r("tr",{children:[e("td",{children:"onSubmit"}),e("td",{children:"\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6\u56DE\u8C03"}),e("td",{children:"-"})]})})]}),e("h2",{id:"-10","data-anchor":"-10",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-11","data-anchor":"-11",children:"\u6837\u5F0F\u53D8\u91CF"}),r("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"--rv-submit-bar-height"}),e("td",{children:e("em",{children:"50px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-z-index"}),e("td",{children:e("em",{children:"100"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-button-width"}),e("td",{children:e("em",{children:"110px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-price-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-price-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-price-integer-font-size"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-price-font-family"}),e("td",{children:e("em",{children:"var(--rv-price-integer-font-family)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-text-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-tip-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-xs) var(--rv-padding-sm)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-tip-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-tip-line-height"}),e("td",{children:e("em",{children:"1.5"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-tip-color"}),e("td",{children:e("em",{children:"#f56723"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-tip-background-color"}),e("td",{children:e("em",{children:"#fff7cc"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-tip-icon-size"}),e("td",{children:e("em",{children:"12px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-button-height"}),e("td",{children:e("em",{children:"40px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-submit-bar-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-md)"})}),e("td",{children:"-"})]})]})]})]})})},F=[{Component:i,key:"submit-bar-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:n,key:"submit-bar-disabled",title:"\u7981\u7528\u72B6\u6001"},{Component:c,key:"submit-bar-demo-1",title:"\u52A0\u8F7D\u72B6\u6001"},{Component:l,key:"submit-bar-demo-2",title:"\u9AD8\u7EA7\u7528\u6CD5"}],A=void 0,B=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:2,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:2,id:"-10"},{depth:3,id:"-11"}],D="/src/components/submit-bar/README.md",f="undefined",C="1766203394000";var N=t=>t.children({MdContent:v,demos:F,frontmatter:A,slugs:B,filePath:D,title:f,updatedTime:C});export{v as MdContent,N as default,F as demos,D as filePath,A as frontmatter,B as slugs,f as title,C as updatedTime};
