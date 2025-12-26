import{j as n,a as t}from"./main.7fa1bdd8.js";const e=function({previewer:u=()=>null,api:l=()=>null}){const d=u;return n("div",{children:t("div",{children:[n("h1",{id:"","data-anchor":"",children:"useMount"}),n("h3",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),t("p",{children:["\u53EA\u5728\u7EC4\u4EF6 ",n("code",{children:"mount"})," \u65F6\u6267\u884C\u7684 hook\u3002"]}),n("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u672C\u7528\u6CD5"}),n("p",{children:"\u5728\u7EC4\u4EF6\u9996\u6B21\u6E32\u67D3\u65F6\uFF0C\u6267\u884C\u65B9\u6CD5\u3002"}),n(d,{code:`import React from 'react';
import { hooks, Toast } from 'react-vant-nova';

const MyComponent = () => {
  hooks.useMount(() => {
    Toast.info('mount');
  });
  return <div>Hello World</div>;
};

export default () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => setShow((v) => !v)}>
        {show ? 'unmount' : 'mount'}
      </button>
      {show && <MyComponent />}
    </>
  );
};`,lang:"jsx"}),n("h2",{id:"-4","data-anchor":"-4",children:"API"}),n("h3",{id:"-5","data-anchor":"-5",children:"\u7C7B\u578B\u5B9A\u4E49"}),n(d,{code:"function useMount(fn: () => void);",lang:"ts"}),n("h3",{id:"-6","data-anchor":"-6",children:"\u53C2\u6570"}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:t("tr",{children:[n("td",{children:"fn"}),n("td",{children:"mount \u65F6\u6267\u884C\u7684\u51FD\u6570"}),n("td",{children:n("em",{children:"() => void"})}),n("td",{children:"-"})]})})]})]})})},o=[],h=void 0,i=[{depth:1,id:""},{depth:3,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:2,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"}],r="/docs/hooks/use-mount.md",c="undefined",a="1766203394000";var C=u=>u.children({MdContent:e,demos:o,frontmatter:h,slugs:i,filePath:r,title:c,updatedTime:a});export{e as MdContent,C as default,o as demos,r as filePath,h as frontmatter,i as slugs,c as title,a as updatedTime};
