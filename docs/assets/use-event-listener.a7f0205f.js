import{j as e,a as n}from"./main.1ee7503a.js";const u=function({previewer:d=()=>null,api:a=()=>null}){const t=d;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"useEventListener"}),e("h3",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),n("p",{children:["\u65B9\u4FBF\u5730\u8FDB\u884C\u4E8B\u4EF6\u7ED1\u5B9A\uFF0C\u5728\u7EC4\u4EF6 ",e("code",{children:"mounted"})," \u65F6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C",e("code",{children:"unmounted"})," \u65F6\u89E3\u7ED1\u4E8B\u4EF6\u3002"]}),e("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u672C\u7528\u6CD5"}),e(t,{code:`import React from 'react';
import { hooks } from 'react-vant-nova';

export default () => {
  // \u5728 window \u4E0A\u7ED1\u5B9A resize \u4E8B\u4EF6
  // \u672A\u6307\u5B9A\u76D1\u542C\u5BF9\u8C61\u65F6\uFF0C\u9ED8\u8BA4\u4F1A\u76D1\u542C window \u7684\u4E8B\u4EF6
  hooks.useEventListener('resize', () => {
    console.log('window resize');
  });

  // \u5728 body \u5143\u7D20\u4E0A\u7ED1\u5B9A click \u4E8B\u4EF6
  hooks.useEventListener(
    'click',
    () => {
      console.log('click body');
    },
    { target: document.body },
  );
  return null;
};`,lang:"jsx"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u7C7B\u578B\u5B9A\u4E49"}),e(t,{code:`type Options = {
  target?: (() => HTMLElement) | HTMLElement | React.MutableRefObject | Window | Document;
  capture?: boolean;
  passive?: boolean;
};

function useEventListener(type: string, listener: EventListener, options?: Options): void;`,lang:"ts"}),e("h2",{id:"-5","data-anchor":"-5",children:"API"}),e("h3",{id:"-6","data-anchor":"-6",children:"\u53C2\u6570"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"type"}),e("td",{children:"\u76D1\u542C\u7684\u4E8B\u4EF6\u7C7B\u578B"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"listener"}),e("td",{children:"\u70B9\u51FB\u5916\u90E8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"}),e("td",{children:e("em",{children:"Function"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"options"}),e("td",{children:"\u53EF\u9009\u7684\u914D\u7F6E\u9879"}),e("td",{children:e("em",{children:"Options"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-7","data-anchor":"-7",children:"Options"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"target"}),e("td",{children:"\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20"}),e("td",{children:e("em",{children:"(() => HTMLElement) | HTMLElement | React.MutableRefObject | Window | Document"})}),e("td",{children:e("code",{children:"window"})})]}),n("tr",{children:[e("td",{children:"capture"}),e("td",{children:"\u662F\u5426\u5728\u4E8B\u4EF6\u6355\u83B7\u9636\u6BB5\u89E6\u53D1"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"passive"}),n("td",{children:["\u8BBE\u7F6E\u4E3A ",e("code",{children:"true"})," \u65F6\uFF0C\u8868\u793A ",e("code",{children:"listener"})," \u6C38\u8FDC\u4E0D\u4F1A\u8C03\u7528 ",e("code",{children:"preventDefault"})]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]})]})})},i=[],r=void 0,c=[{depth:1,id:""},{depth:3,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:3,id:"-4"},{depth:2,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"}],h="/docs/hooks/use-event-listener.md",l="undefined",o="1766203394000";var E=d=>d.children({MdContent:u,demos:i,frontmatter:r,slugs:c,filePath:h,title:l,updatedTime:o});export{u as MdContent,E as default,i as demos,h as filePath,r as frontmatter,c as slugs,l as title,o as updatedTime};
