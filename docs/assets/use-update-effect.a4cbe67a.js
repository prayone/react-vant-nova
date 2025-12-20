import{j as e,a as t}from"./main.6f38626e.js";const d=function({previewer:u=()=>null,api:f=()=>null}){const n=u;return e("div",{children:t("div",{children:[e("h1",{id:"","data-anchor":"",children:"useUpdateEffect"}),e("h3",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),t("p",{children:["\u53EA\u5728\u4F9D\u8D56\u66F4\u65B0\u65F6\u6267\u884C\u7684 ",e("code",{children:"useEffect"})," hook\u3002"]}),e("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u672C\u7528\u6CD5"}),t("p",{children:["\u4F7F\u7528\u4E0A\u4E0E ",e("code",{children:"useEffect"})," \u5B8C\u5168\u76F8\u540C\uFF0C\u53EA\u662F\u5B83\u5FFD\u7565\u4E86\u9996\u6B21\u6E32\u67D3\uFF0C\u4E14\u53EA\u5728\u4F9D\u8D56\u9879\u66F4\u65B0\u65F6\u8FD0\u884C\u3002"]}),e(n,{code:`import React from 'react';
import { hooks } from 'react-vant-nova';

export default () => {
  const [count, setCount] = React.useState(0);
  const [effectCount, setEffectCount] = React.useState(0);
  const [updateEffectCount, setUpdateEffectCount] = React.useState(0);

  React.useEffect(() => {
    setEffectCount((c) => c + 1);
  }, [count]);

  hooks.useUpdateEffect(() => {
    setUpdateEffectCount((c) => c + 1);
  }, [count]);

  return (
    <div>
      <p>effectCount: {effectCount}</p>
      <p>updateEffectCount: {updateEffectCount}</p>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
        </button>
      </p>
    </div>
  );
};`,lang:"jsx"}),e("h2",{id:"-4","data-anchor":"-4",children:"API"}),e("h3",{id:"-5","data-anchor":"-5",children:"\u7C7B\u578B\u5B9A\u4E49"}),e(n,{code:"function useUpdateEffect(effect: () => void | (() => void | undefined), deps?: deps);",lang:"ts"}),e("h3",{id:"-6","data-anchor":"-6",children:"\u53C2\u6570"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"effect"}),e("td",{children:"\u53EF\u6267\u884C\u51FD\u6570"}),e("td",{children:e("em",{children:"() => void"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"deps"}),e("td",{children:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u4F9D\u8D56\u53D8\u5316\u7684\u5BF9\u8C61"}),e("td",{children:e("em",{children:"Array|undefined"})}),e("td",{children:"-"})]})]})]})]})})},c=[],i=void 0,r=[{depth:1,id:""},{depth:3,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:2,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"}],o="/docs/hooks/use-update-effect.md",h="undefined",a="1766203394000";var s=u=>u.children({MdContent:d,demos:c,frontmatter:i,slugs:r,filePath:o,title:h,updatedTime:a});export{d as MdContent,s as default,c as demos,o as filePath,i as frontmatter,r as slugs,h as title,a as updatedTime};
