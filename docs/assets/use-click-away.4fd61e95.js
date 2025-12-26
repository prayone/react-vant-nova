import{j as e,a as n}from"./main.7fa1bdd8.js";const u=function({previewer:t=()=>null,api:o=()=>null}){const d=t;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"useClickAway"}),e("h3",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7BA1\u7406\u76EE\u6807\u5143\u7D20\u5916\u70B9\u51FB\u4E8B\u4EF6\u7684 Hook\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u672C\u7528\u6CD5"}),e(d,{code:`import React from 'react';
import { useClickAway } from 'react-vant-nova';

export default () => {
  const ref = React.useRef();

  useClickAway(ref, () => {
    console.log('click outside!');
  });

  return <div ref={ref} />;
};`,lang:"jsx"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u81EA\u5B9A\u4E49\u4E8B\u4EF6"}),n("p",{children:["\u901A\u8FC7 ",e("code",{children:"eventName"})," \u9009\u9879\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9700\u8981\u76D1\u542C\u7684\u4E8B\u4EF6\u7C7B\u578B\u3002"]}),e(d,{code:`import React from 'react';
import { hooks } from 'react-vant-nova';

export default () => {
  const ref = React.useRef();

  hooks.useClickAway(
    ref,
    () => {
      console.log('click outside!');
    },
    'touchstart',
  );

  return <div ref={ref} />;
};`,lang:"jsx"}),e("h2",{id:"-5","data-anchor":"-5",children:"API"}),e("h3",{id:"-6","data-anchor":"-6",children:"\u7C7B\u578B\u5B9A\u4E49"}),e(d,{code:`function useClickAway(
  target: HTMLElement | React.MutableRefObject | () => HTMLElement,
  listener: EventListener,
  eventName?: string;
): void;`,lang:"ts"}),e("h3",{id:"-7","data-anchor":"-7",children:"\u53C2\u6570"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"target"}),e("td",{children:"\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20"}),e("td",{children:e("em",{children:"HTMLElement|React.MutableRefObject"})}),e("td",{children:e("code",{children:"() => HTMLElement"})})]}),n("tr",{children:[e("td",{children:"listener"}),e("td",{children:"\u70B9\u51FB\u5916\u90E8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"}),e("td",{children:e("em",{children:"EventListener"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"eventName"}),e("td",{children:"\u4E8B\u4EF6\u540D\u79F0"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"click"})})]})]})]})]})})},r=[],c=void 0,i=[{depth:1,id:""},{depth:3,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:3,id:"-4"},{depth:2,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"}],l="/docs/hooks/use-click-away.md",h="undefined",a="1766203394000";var E=t=>t.children({MdContent:u,demos:r,frontmatter:c,slugs:i,filePath:l,title:h,updatedTime:a});export{u as MdContent,E as default,r as demos,l as filePath,c as frontmatter,i as slugs,h as title,a as updatedTime};
