import{j as n,a as d}from"./main.1ee7503a.js";const i=function({previewer:e=()=>null,api:a=()=>null}){const u=e;return n("div",{children:d("div",{children:[n("h1",{id:"","data-anchor":"",children:"useWindowSize"}),n("h3",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),n("p",{children:"\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u89C6\u53E3\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u5E76\u5728\u7A97\u53E3\u5927\u5C0F\u53D8\u5316\u65F6\u81EA\u52A8\u66F4\u65B0\u3002"}),n("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u672C\u7528\u6CD5"}),n(u,{code:`import React from 'react';
import { hooks } from 'react-vant-nova';

export default () => {
  const { width, height } = hooks.useWindowSize();

  console.log(width); // \u7A97\u53E3\u5BBD\u5EA6
  console.log(height); // \u7A97\u53E3\u9AD8\u5EA6

  React.useEffect(
    [width, height],
    () => {
      console.log('window resized');
    },
    [width, height],
  );

  return null;
};`,lang:"jsx"}),n("h2",{id:"-4","data-anchor":"-4",children:"API"}),n("h3",{id:"-5","data-anchor":"-5",children:"\u7C7B\u578B\u5B9A\u4E49"}),n(u,{code:`function useWindowSize(): {
  width: number;
  height: number;
};`,lang:"ts"}),n("h3",{id:"-6","data-anchor":"-6",children:"\u8FD4\u56DE\u503C"}),d("table",{children:[n("thead",{children:d("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"})]})}),d("tbody",{children:[d("tr",{children:[n("td",{children:"width"}),n("td",{children:"\u6D4F\u89C8\u5668\u7A97\u53E3\u5BBD\u5EA6"}),n("td",{children:n("em",{children:"number"})})]}),d("tr",{children:[n("td",{children:"height"}),n("td",{children:"\u6D4F\u89C8\u5668\u7A97\u53E3\u9AD8\u5EA6"}),n("td",{children:n("em",{children:"number"})})]})]})]})]})})},t=[],h=void 0,r=[{depth:1,id:""},{depth:3,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:2,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"}],c="/docs/hooks/use-window-size.md",o="undefined",l="1766203394000";var E=e=>e.children({MdContent:i,demos:t,frontmatter:h,slugs:r,filePath:c,title:o,updatedTime:l});export{i as MdContent,E as default,t as demos,c as filePath,h as frontmatter,r as slugs,o as title,l as updatedTime};
