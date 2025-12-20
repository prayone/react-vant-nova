import{a as e,j as n}from"./main.7a53fb72.js";const r=function({previewer:t=()=>null,api:a=()=>null}){const d=t;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"useScrollParent"}),e("h3",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u83B7\u53D6\u5143\u7D20\u6700\u8FD1\u7684\u53EF\u6EDA\u52A8\u7236\u5143\u7D20\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u672C\u7528\u6CD5"}),e(d,{code:`import React from 'react';
import { hooks } from 'react-vant-nova';

export default () => {
  const root = React.useRef();
  const scrollParent = hooks.useScrollParent(root);

  hooks.useEventListener(
    'scroll',
    () => {
      console.log('scroll');
    },
    { target: scrollParent },
  );

  return <div ref={root} />;
};`,lang:"jsx"}),e("h2",{id:"-4","data-anchor":"-4",children:"API"}),e("h3",{id:"-5","data-anchor":"-5",children:"\u7C7B\u578B\u5B9A\u4E49"}),e(d,{code:`function useScrollParent(
  element: React.MutableRefObject<Element | undefined>,
): Element | HTMLElement | Window;`,lang:"ts"}),e("h3",{id:"-6","data-anchor":"-6",children:"\u53C2\u6570"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:n("tr",{children:[e("td",{children:"element"}),e("td",{children:"\u5F53\u524D\u5143\u7D20"}),e("td",{children:e("em",{children:"MutableRefObject|Element"})}),e("td",{children:"-"})]})})]}),e("h3",{id:"-7","data-anchor":"-7",children:"\u8FD4\u56DE\u503C"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:n("tr",{children:[e("td",{children:"scrollParent"}),e("td",{children:"\u6700\u8FD1\u7684\u53EF\u6EDA\u52A8\u7236\u5143\u7D20"}),e("td",{children:e("em",{children:"Element"})})]})})]})]})})},u=[],l=void 0,c=[{depth:1,id:""},{depth:3,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:2,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"}],h="/docs/hooks/use-scroll-parent.md",i="undefined",o="1766203394000";var m=t=>t.children({MdContent:r,demos:u,frontmatter:l,slugs:c,filePath:h,title:i,updatedTime:o});export{r as MdContent,m as default,u as demos,h as filePath,l as frontmatter,c as slugs,i as title,o as updatedTime};
