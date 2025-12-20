import{j as n,a as u}from"./main.a88292eb.js";const d=function({previewer:e=()=>null,api:h=()=>null}){const t=e;return n("div",{children:u("div",{children:[n("h1",{id:"","data-anchor":"",children:"useFormSmart"}),n("h3",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),u("p",{children:["\u66F4\u52A0\u8F7B\u677E\u7BA1\u7406",n("code",{children:"Form"}),"\u7EC4\u4EF6,\u63D0\u4F9B\u6570\u636E\u540C\u6B65\u529F\u80FD,\u6BCF\u6B21 value \u53D8\u5316\u90FD\u4F1A\u66F4\u65B0\u8868\u5355"]}),n("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u672C\u7528\u6CD5"}),n("blockquote",{children:n("p",{children:"\u9ED8\u8BA4\u60C5\u51B5 value \u88AB\u8BBE\u7F6E\u503C\u540E\u518D\u6B21\u53D8\u5316\u4E0D\u518D\u91CD\u590D\u8BBE\u7F6E,\u548C Form initialValues \u884C\u4E3A\u4E00\u81F4,\u53EA\u662F\u589E\u52A0\u4E86\u7A7A\u503C\u5224\u5B9A"})}),n(t,{code:`import React from 'react';
import { Field, Form, hooks } from 'react-vant-nova';

function useRequest() {
  const [data, setData] = React.useState({});
  const run = React.useCallback(() => {
    setTimeout(() => {
      setData({
        age: 32,
        name: '\u5F20\u695A\u5C9A',
      });
    }, 2000);
  }, []);

  return [data, run];
}

export default () => {
  const [data, run] = useRequest(); //\u6A21\u62DF\u8BF7\u6C42
  const [ref, { set, get, getAll, clear, submit }] = hooks.useFormSmart({ value: data });
  // \u5F53\u6709\u6570\u636E\u8FD4\u56DE\u4E14\u4E0D\u4E3A\u7A7A\u65F6,\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u8868\u5355
  return (
    <div>
      <Form ref={ref}>
        <Form.Item name="name" label="\u540D\u5B57">
          <Field />
        </Form.Item>
        <Form.Item name="name" label="\u540D\u5B57">
          <Field />
        </Form.Item>
      </Form>
      <button onClick={run}>\u8BF7\u6C42\u6570\u636E</button>
      <button onClick={() => set({ age: 30 })}>\u8BBE\u7F6E\u6570\u636E</button>
      <button onClick={() => get('name')}>\u83B7\u53D6\u6570\u636E</button>
      <button onClick={() => clear()}>\u6E05\u7A7A\u8868\u5355</button>
      <button onClick={() => submit()}>\u63D0\u4EA4\u8868\u5355</button>
      <button onClick={() => getAll()}>\u83B7\u53D6\u8868\u5355\u6570\u636E</button>
    </div>
  );
};`,lang:"jsx"}),n("h3",{id:"-4","data-anchor":"-4",children:"\u6570\u636E\u7684\u540C\u6B65"}),n("blockquote",{children:n("p",{children:"\u67D0\u4E9B\u573A\u666F\u4E0B\u9700\u8981\u5C06\u6BCF\u6B21\u53D8\u5316\u7684\u6570\u636E\u90FD\u8BBE\u7F6E\u5230\u8868\u5355\u4E2D,useFormSmart \u63D0\u4F9B\u4E86\u7ED1\u5B9A\u529F\u80FD"})}),n(t,{code:`import React from 'react';
import { Field, Form, hooks } from 'react-vant-nova';

export default () => {
  const [data, run] = useRequest(); //\u6A21\u62DF\u8BF7\u6C42
  const [ref] = hooks.useFormSmart({ value: data, sync: true });
  // \u5F53\u6709\u6570\u636E\u8FD4\u56DE\u4E14\u4E0D\u4E3A\u7A7A\u65F6,\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u8868\u5355
  return (
    <div>
      <Form ref={ref}>
        <Form.Item name="name" label="\u540D\u5B57">
          <Field />
        </Form.Item>
        <Form.Item name="name" label="\u540D\u5B57">
          <Field />
        </Form.Item>
      </Form>
      <button onClick={run}>\u5237\u65B0\u6570\u636E</button>
    </div>
  );
};`,lang:"jsx"}),n("h2",{id:"-5","data-anchor":"-5",children:"API"}),n("h3",{id:"-6","data-anchor":"-6",children:"\u7C7B\u578B\u5B9A\u4E49"}),n(t,{code:`export type FormOption = {
  /**
   * initialValues
   */
  value?: Record<string, unknown>;
  /**
   * sync
   */
  sync?: boolean;
};
export type FormMethod = {
  set: (values: unknown) => void;
  get: (name: string) => unknown;
  submit: () => void;
  getAll: () => Record<string, unknown>;
  clear: () => void;
};

function useFormSmart(options?: FormOption): [ref, FormMethod];`,lang:"ts"}),n("h3",{id:"-7","data-anchor":"-7",children:"\u53C2\u6570"}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"value"}),n("td",{children:"\u9700\u8981\u8BBE\u7F6E\u5230\u8868\u5355\u7684\u503C"}),n("td",{children:n("em",{children:"object"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"sync"}),n("td",{children:"\u5F00\u542F value \u540C\u6B65\u6A21\u5F0F,\u6BCF\u6B21 value \u53D8\u5316\u90FD\u4F1A\u8BBE\u7F6E\u8868\u5355"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]})]})]}),n("h3",{id:"-8","data-anchor":"-8",children:"\u8FD4\u56DE\u503C"}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"ref"}),n("td",{children:"ref \u5F15\u7528,\u5FC5\u987B\u5C06\u5176\u6302\u8F7D\u5728 Form \u4E0A"}),n("td",{children:n("em",{children:"Ref"})})]}),u("tr",{children:[n("td",{children:"set"}),n("td",{children:"\u8BBE\u7F6E\u8868\u5355\u503C"}),n("td",{children:n("em",{children:"(object) => void"})})]}),u("tr",{children:[n("td",{children:"get"}),u("td",{children:["\u83B7\u53D6\u6307\u5B9A",n("code",{children:"name"}),"\u8868\u5355\u503C"]}),n("td",{children:n("em",{children:"(name) => unknown"})})]}),u("tr",{children:[n("td",{children:"clear"}),n("td",{children:"\u91CD\u7F6E\u8868\u5355"}),n("td",{children:n("em",{children:"() => void"})})]}),u("tr",{children:[n("td",{children:"getAll"}),n("td",{children:"\u83B7\u53D6\u6240\u6709\u8868\u5355\u503C"}),n("td",{children:n("em",{children:"() => object"})})]}),u("tr",{children:[n("td",{children:"submit"}),n("td",{children:"\u63D0\u4EA4\u8868\u5355"}),n("td",{children:n("em",{children:"() => void"})})]})]})]})]})})},r=[],i=void 0,l=[{depth:1,id:""},{depth:3,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:3,id:"-4"},{depth:2,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"}],o="/docs/hooks/use-form-smart.md",c="undefined",a="1766203394000";var F=e=>e.children({MdContent:d,demos:r,frontmatter:i,slugs:l,filePath:o,title:c,updatedTime:a});export{d as MdContent,F as default,r as demos,o as filePath,i as frontmatter,l as slugs,c as title,a as updatedTime};
