import{j as e,a as u}from"./main.af98c409.js";const t=function({previewer:n=()=>null,api:l=()=>null}){const d=n;return e("div",{children:u("div",{children:[e("h1",{id:"","data-anchor":"",children:"useInViewport"}),e("h3",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5224\u65AD dom \u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u4E4B\u5185"}),e("blockquote",{children:u("p",{children:[e("a",{href:"/components/lazyload",children:"Lazyload \u61D2\u52A0\u8F7D"}),"\u7EC4\u4EF6\u57FA\u4E8E\u6B64 hook \u5B9E\u73B0"]})}),e("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u672C\u7528\u6CD5"}),u("p",{children:["\u4F7F\u7528 ",e("code",{children:"ref"})," \u76D1\u542C\u8282\u70B9\u5728\u89C6\u56FE\u53D8\u5316\u6216\u8005\u6EDA\u52A8\u65F6\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u4E4B\u5185"]}),e(d,{code:`import React from 'react';
import { hooks } from 'react-vant-nova';

export default () => {
  const ref = React.useRef();
  const inViewPort = hooks.useInViewport(ref);
  return (
    <div>
      <div ref={ref}>observer dom</div>
      <div style={{ marginTop: 70, color: inViewPort ? '#87d068' : '#f50' }}>
        {inViewPort ? 'visible' : 'hidden'}
      </div>
    </div>
  );
};`,lang:"jsx"}),e("h2",{id:"-4","data-anchor":"-4",children:"API"}),e("h3",{id:"-5","data-anchor":"-5",children:"\u7C7B\u578B\u5B9A\u4E49"}),e(d,{code:"function useInViewport(target): boolean;",lang:"ts"}),e("h3",{id:"-6","data-anchor":"-6",children:"\u53C2\u6570"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"target"}),e("td",{children:"\u9700\u8981\u76D1\u542C\u7684\u5143\u7D20"}),e("td",{children:e("em",{children:"HTMLElement | () => HTMLElement | React.MutableRefObject"})}),e("td",{children:"-"})]})})]})]})})},i=[],r=void 0,o=[{depth:1,id:""},{depth:3,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:2,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"}],h="/docs/hooks/use-in-viewport.md",c="undefined",a="1766203394000";var p=n=>n.children({MdContent:t,demos:i,frontmatter:r,slugs:o,filePath:h,title:c,updatedTime:a});export{t as MdContent,p as default,i as demos,h as filePath,r as frontmatter,o as slugs,c as title,a as updatedTime};
