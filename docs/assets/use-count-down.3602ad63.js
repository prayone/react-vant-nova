import{j as n,a as u}from"./main.6f38626e.js";const r=function({previewer:e=()=>null,api:a=()=>null}){const d=e;return n("div",{children:u("div",{children:[n("h1",{id:"","data-anchor":"",children:"useCountDown"}),n("h3",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),n("p",{children:"\u63D0\u4F9B\u5012\u8BA1\u65F6\u6BEB\u79D2\u7EA7\u7BA1\u7406\u80FD\u529B"}),n("blockquote",{children:u("p",{children:[n("a",{href:"/components/count-down",children:"CountDown \u5012\u8BA1\u65F6"}),"\u7EC4\u4EF6\u57FA\u4E8E\u6B64 hook \u5B9E\u73B0\u3002"]})}),n("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u672C\u7528\u6CD5"}),n(d,{code:`import React from 'react';
import { hooks } from 'react-vant-nova';

export default () => {
  const { current } = hooks.useCountDown({
    // \u5012\u8BA1\u65F6 24 \u5C0F\u65F6
    time: 24 * 60 * 60 * 1000,
    // \u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6
    autostart: true,
  });

  return (
    <>
      <span>\u603B\u65F6\u95F4\uFF1A{current.total}</span>
      <span>\u5269\u4F59\u5929\u6570\uFF1A{current.days}</span>
      <span>\u5269\u4F59\u5C0F\u65F6\uFF1A{current.hours}</span>
      <span>\u5269\u4F59\u5206\u949F\uFF1A{current.minutes}</span>
      <span>\u5269\u4F59\u79D2\u6570\uFF1A{current.seconds}</span>
      <span>\u5269\u4F59\u6BEB\u79D2\uFF1A{current.milliseconds}</span>
    </>
  );
};`,lang:"jsx"}),n("h3",{id:"-4","data-anchor":"-4",children:"\u6BEB\u79D2\u7EA7\u6E32\u67D3"}),n("p",{children:"\u5012\u8BA1\u65F6\u9ED8\u8BA4\u6BCF\u79D2\u6E32\u67D3\u4E00\u6B21\uFF0C\u8BBE\u7F6E millisecond \u9009\u9879\u53EF\u4EE5\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3\u3002"}),n(d,{code:`import React from 'react';
import { useCountDown } from 'react-vant-nova';

export default () => {
  const { current } = useCountDown({
    // \u5012\u8BA1\u65F6 24 \u5C0F\u65F6
    time: 24 * 60 * 60 * 1000,
    // \u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6
    autostart: true,
    // \u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3
    millisecond: true,
  });

  return (
    <>
      <span>\u603B\u65F6\u95F4\uFF1A{current.total}</span>
      <span>\u5269\u4F59\u5929\u6570\uFF1A{current.days}</span>
      <span>\u5269\u4F59\u5C0F\u65F6\uFF1A{current.hours}</span>
      <span>\u5269\u4F59\u5206\u949F\uFF1A{current.minutes}</span>
      <span>\u5269\u4F59\u79D2\u6570\uFF1A{current.seconds}</span>
      <span>\u5269\u4F59\u6BEB\u79D2\uFF1A{current.milliseconds}</span>
    </>
  );
};`,lang:"jsx"}),n("h2",{id:"-5","data-anchor":"-5",children:"API"}),n("h3",{id:"-6","data-anchor":"-6",children:"\u7C7B\u578B\u5B9A\u4E49"}),n(d,{code:`type CurrentTime = {
  days: number;
  hours: number;
  total: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

type CountDown = {
  start: () => void;
  pause: () => void;
  reset: (totalTime: number) => void;
  current: ComputedRef<CurrentTime>;
};

type UseCountDownOptions = {
  time: number;
  millisecond?: boolean;
  onChange?: (current: CurrentTime) => void;
  onFinish?: () => void;
};

function useCountDown(options: UseCountDownOptions): CountDown;`,lang:"ts"}),n("h3",{id:"-7","data-anchor":"-7",children:"\u53C2\u6570"}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"time"}),n("td",{children:"\u5012\u8BA1\u65F6\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"millisecond"}),n("td",{children:"\u662F\u5426\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),u("tr",{children:[n("td",{children:"onChange"}),n("td",{children:"\u5012\u8BA1\u65F6\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"}),n("td",{children:n("em",{children:"(current: CurrentTime) => void"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"onFinish"}),n("td",{children:"\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"}),n("td",{children:"-"}),n("td",{})]})]})]}),n("h3",{id:"-8","data-anchor":"-8",children:"\u8FD4\u56DE\u503C"}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"current"}),n("td",{children:"\u5F53\u524D\u5269\u4F59\u7684\u65F6\u95F4"}),n("td",{children:n("em",{children:"CurrentTime"})})]}),u("tr",{children:[n("td",{children:"start"}),n("td",{children:"\u5F00\u59CB\u5012\u8BA1\u65F6"}),n("td",{children:n("em",{children:"() => void"})})]}),u("tr",{children:[n("td",{children:"pause"}),n("td",{children:"\u6682\u505C\u5012\u8BA1\u65F6"}),n("td",{children:n("em",{children:"() => void"})})]}),u("tr",{children:[n("td",{children:"reset"}),n("td",{children:"\u91CD\u7F6E\u5012\u8BA1\u65F6\uFF0C\u652F\u6301\u4F20\u5165\u65B0\u7684\u5012\u8BA1\u65F6\u65F6\u957F"}),n("td",{children:n("em",{children:"(time?: number): void"})})]})]})]}),n("h3",{id:"-9","data-anchor":"-9",children:"CurrentTime \u683C\u5F0F"}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u540D\u79F0"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"total"}),n("td",{children:"\u5269\u4F59\u603B\u65F6\u95F4\uFF08\u5355\u4F4D\u6BEB\u79D2\uFF09"}),n("td",{children:n("em",{children:"number"})})]}),u("tr",{children:[n("td",{children:"days"}),n("td",{children:"\u5269\u4F59\u5929\u6570"}),n("td",{children:n("em",{children:"number"})})]}),u("tr",{children:[n("td",{children:"hours"}),n("td",{children:"\u5269\u4F59\u5C0F\u65F6"}),n("td",{children:n("em",{children:"number"})})]}),u("tr",{children:[n("td",{children:"minutes"}),n("td",{children:"\u5269\u4F59\u5206\u949F"}),n("td",{children:n("em",{children:"number"})})]}),u("tr",{children:[n("td",{children:"seconds"}),n("td",{children:"\u5269\u4F59\u79D2\u6570"}),n("td",{children:n("em",{children:"number"})})]}),u("tr",{children:[n("td",{children:"milliseconds"}),n("td",{children:"\u5269\u4F59\u6BEB\u79D2"}),n("td",{children:n("em",{children:"number"})})]})]})]})]})})},t=[],i=void 0,c=[{depth:1,id:""},{depth:3,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:3,id:"-4"},{depth:2,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"}],h="/docs/hooks/use-count-down.md",l="undefined",o="1766203394000";var F=e=>e.children({MdContent:r,demos:t,frontmatter:i,slugs:c,filePath:h,title:l,updatedTime:o});export{r as MdContent,F as default,t as demos,h as filePath,i as frontmatter,c as slugs,l as title,o as updatedTime};
