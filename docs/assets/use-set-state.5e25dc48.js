import{j as t,a as u}from"./main.7fa1bdd8.js";const a=function({previewer:e=()=>null,api:l=()=>null}){const n=e;return t("div",{children:u("div",{children:[t("h1",{id:"","data-anchor":"",children:"useSetState"}),t("h3",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),u("p",{children:["\u7BA1\u7406 ",t("code",{children:"object"})," \u7C7B\u578B state \u7684 Hooks\uFF0C\u540C\u65F6\u652F\u6301\u8FD4\u56DE state \u6700\u65B0\u72B6\u6001\u3002"]}),t("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),t("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u672C\u7528\u6CD5"}),t(n,{code:`import React from 'react';
import { hooks } from 'react-vant-nova';

export default () => {
  const [state, setState] = hooks.useSetState({
    hello: '',
    count: 0,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button type="button" onClick={() => setState({ hello: 'world' })}>
        set hello
      </button>
      <button type="button" onClick={() => setState((prev) => ({ count: prev.count + 1 }))}>
        count + 1
      </button>
    </div>
  );
};`,lang:"jsx"}),t("h3",{id:"-4","data-anchor":"-4",children:"\u83B7\u53D6 state \u6700\u65B0\u72B6\u6001"}),t(n,{code:`import React from 'react';
import { hooks } from 'react-vant-nova';

export default () => {
  const [state, setState, stateRef] = hooks.useSetState({ count: 0 });
  React.useEffect(() => {
    setInterval(() => {
      setState((prev) => ({ count: prev.count + 1 }));
      console.log(state.count, stateRef.current.count);
    }, 1000);
  }, []);

  return null;
};`,lang:"jsx"}),t("h2",{id:"-5","data-anchor":"-5",children:"API"}),t("h3",{id:"-6","data-anchor":"-6",children:"\u7C7B\u578B\u5B9A\u4E49"}),t("p",{children:"\u7528\u6CD5\u4E0E class \u7EC4\u4EF6\u7684 this.setState \u57FA\u672C\u4E00\u81F4"}),t(n,{code:`function useSetState<T extends object>(
  initialState: T = {} as T,
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void, React.MutableRefObject<T>];`,lang:"ts"})]})})},o=[],d=void 0,c=[{depth:1,id:""},{depth:3,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:3,id:"-4"},{depth:2,id:"-5"},{depth:3,id:"-6"}],r="/docs/hooks/use-set-state.md",s="undefined",i="1766203394000";var p=e=>e.children({MdContent:a,demos:o,frontmatter:d,slugs:c,filePath:r,title:s,updatedTime:i});export{a as MdContent,p as default,o as demos,r as filePath,d as frontmatter,c as slugs,s as title,i as updatedTime};
