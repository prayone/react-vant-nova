import{a as i,j as e}from"./main.7a53fb72.js";const n=function({previewer:t=()=>null,api:o=()=>null}){const d=t;return i("div",{children:e("div",{children:[i("h1",{id:"","data-anchor":"",children:"usePageVisibility"}),i("h3",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),i("p",{children:"\u83B7\u53D6\u9875\u9762\u7684\u53EF\u89C1\u72B6\u6001\u3002"}),i("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),i("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u672C\u7528\u6CD5"}),i(d,{code:`import React from 'react';
import { hooks } from 'react-vant-nova';

export default () => {
  const pageVisibility = hooks.usePageVisibility();

  React.useEffect(() => {
    console.log('page visibility: ', value);
  }, [pageVisibility]);

  return null;
};`,lang:"js"}),i("h2",{id:"-4","data-anchor":"-4",children:"API"}),i("h3",{id:"-5","data-anchor":"-5",children:"\u7C7B\u578B\u5B9A\u4E49"}),i(d,{code:`type VisibilityState = 'visible' | 'hidden';

function usePageVisibility(): VisibilityState;`,lang:"ts"}),i("h3",{id:"-6","data-anchor":"-6",children:"\u8FD4\u56DE\u503C"}),e("table",{children:[i("thead",{children:e("tr",{children:[i("th",{children:"\u53C2\u6570"}),i("th",{children:"\u8BF4\u660E"}),i("th",{children:"\u7C7B\u578B"})]})}),i("tbody",{children:e("tr",{children:[i("td",{children:"visibilityState"}),e("td",{children:["\u9875\u9762\u5F53\u524D\u7684\u53EF\u89C1\u72B6\u6001\uFF0C",i("code",{children:"visible"})," \u4E3A\u53EF\u89C1\uFF0C",i("code",{children:"hidden"})," \u4E3A\u9690\u85CF"]}),i("td",{children:i("em",{children:"VisibilityState"})})]})})]})]})})},u=[],h=void 0,l=[{depth:1,id:""},{depth:3,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:2,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"}],a="/docs/hooks/use-page-visibility.md",r="undefined",c="1766203394000";var p=t=>t.children({MdContent:n,demos:u,frontmatter:h,slugs:l,filePath:a,title:r,updatedTime:c});export{n as MdContent,p as default,u as demos,a as filePath,h as frontmatter,l as slugs,r as title,c as updatedTime};
