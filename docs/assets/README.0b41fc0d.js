import{j as u,F as i,a as e,r as a}from"./main.7a53fb72.js";import{k as r,M as l,B as m,H as B}from"./FloatingPanel.c7f80ee3.js";import{h as A}from"./index.378ea700.js";var c=()=>{const[n,d]=A.useSetState({text:"",tel:"",digit:"",num:"",password:""});return u(i,{children:[e(r,{children:e(l,{value:n.text,onChange:t=>d({text:t}),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",clearable:!0})}),e(r,{children:e(l,{value:n.tel,type:"tel",onChange:t=>d({tel:t}),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"})}),e(r,{children:e(l,{value:n.digit,type:"digit",onChange:t=>d({digit:t}),placeholder:"\u8BF7\u8F93\u5165\u6574\u6570"})}),e(r,{children:e(l,{value:n.num,type:"number",onChange:t=>d({num:t}),placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"})}),e(r,{children:e(l,{value:n.password,type:"password",onChange:t=>d({password:t}),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})})]})};const v=`import React from 'react'
import { Cell, Input, hooks } from 'react-vant-nova'

export default () => {
  const [state, updateState] = hooks.useSetState({
    text: '',
    tel: '',
    digit: '',
    num: '',
    password: '',
  })
  return (
    <>
      <Cell>
        <Input
          value={state.text}
          onChange={text => updateState({ text })}
          placeholder='\u8BF7\u8F93\u5165\u6587\u672C'
          clearable
        />
      </Cell>
      <Cell>
        <Input
          value={state.tel}
          type='tel'
          onChange={tel => updateState({ tel })}
          placeholder='\u8BF7\u8F93\u5165\u624B\u673A\u53F7'
        />
      </Cell>
      <Cell>
        <Input
          value={state.digit}
          type='digit'
          onChange={digit => updateState({ digit })}
          placeholder='\u8BF7\u8F93\u5165\u6574\u6570'
        />
      </Cell>
      <Cell>
        <Input
          value={state.num}
          type='number'
          onChange={num => updateState({ num })}
          placeholder='\u8BF7\u8F93\u5165\u6570\u5B57'
        />
      </Cell>

      <Cell>
        <Input
          value={state.password}
          type='password'
          onChange={password => updateState({ password })}
          placeholder='\u8BF7\u8F93\u5165\u5BC6\u7801'
        />
      </Cell>
    </>
  )
}
`,g={code:v,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell, Input, hooks } from 'react-vant-nova'

export default () => {
  const [state, updateState] = hooks.useSetState({
    text: '',
    tel: '',
    digit: '',
    num: '',
    password: '',
  })
  return (
    <>
      <Cell>
        <Input
          value={state.text}
          onChange={text => updateState({ text })}
          placeholder='\u8BF7\u8F93\u5165\u6587\u672C'
          clearable
        />
      </Cell>
      <Cell>
        <Input
          value={state.tel}
          type='tel'
          onChange={tel => updateState({ tel })}
          placeholder='\u8BF7\u8F93\u5165\u624B\u673A\u53F7'
        />
      </Cell>
      <Cell>
        <Input
          value={state.digit}
          type='digit'
          onChange={digit => updateState({ digit })}
          placeholder='\u8BF7\u8F93\u5165\u6574\u6570'
        />
      </Cell>
      <Cell>
        <Input
          value={state.num}
          type='number'
          onChange={num => updateState({ num })}
          placeholder='\u8BF7\u8F93\u5165\u6570\u5B57'
        />
      </Cell>

      <Cell>
        <Input
          value={state.password}
          type='password'
          onChange={password => updateState({ password })}
          placeholder='\u8BF7\u8F93\u5165\u5BC6\u7801'
        />
      </Cell>
    </>
  )
}
`}},key:"input-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var h=()=>{const[n,d]=a.exports.useState("");return e(r,{children:e(l,{placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",value:n,onChange:d,clearable:!0,clearTrigger:"always"})})};const D={code:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Cell>
      <Input
        placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
        value={value}
        onChange={setValue}
        clearable
        clearTrigger="always"
      />
    </Cell>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Cell>
      <Input
        placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
        value={value}
        onChange={setValue}
        clearable
        clearTrigger="always"
      />
    </Cell>
  );
};`}},key:"input-demo",meta:{title:"\u6E05\u9664\u6309\u94AE"}};var o=()=>e(r,{children:e(l,{prefix:"\u{1F481}",suffix:e(m,{size:"small",type:"primary",children:"\u53D1\u9001"}),placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801"})});const x={code:`import React, { useState } from 'react';
import { CommentO } from '@react-vant/icons'
import { Input, Cell, Button } from 'react-vant-nova';

export default () => {
  return (
    <Cell>
      <Input
        prefix="\u{1F481}"
        suffix={<Button size="small" type="primary">\u53D1\u9001</Button>}
        placeholder="\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801"
      />
    </Cell>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { CommentO } from '@react-vant/icons'
import { Input, Cell, Button } from 'react-vant-nova';

export default () => {
  return (
    <Cell>
      <Input
        prefix="\u{1F481}"
        suffix={<Button size="small" type="primary">\u53D1\u9001</Button>}
        placeholder="\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801"
      />
    </Cell>
  );
};`}},key:"input-demo-1",meta:{title:"\u63D2\u5165\u5185\u5BB9"}};var F=()=>u(i,{children:[e(r,{children:e(l.TextArea,{placeholder:"\u591A\u884C\u8F93\u5165"})}),e(r,{style:{marginTop:10},children:e(l.TextArea,{placeholder:"\u81EA\u9002\u5E94\u9AD8\u5EA6",autoSize:!0})}),e(r,{style:{marginTop:10},children:e(l.TextArea,{placeholder:"\u6700\u5C0F\u9AD8\u5EA680\uFF0C\u6700\u5927\u9AD8\u5EA6120",autoSize:{minHeight:80,maxHeight:120}})})]});const f={code:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell>
        <Input.TextArea placeholder="\u591A\u884C\u8F93\u5165" />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea placeholder="\u81EA\u9002\u5E94\u9AD8\u5EA6" autoSize />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea
          placeholder="\u6700\u5C0F\u9AD8\u5EA680\uFF0C\u6700\u5927\u9AD8\u5EA6120"
          autoSize={{ minHeight: 80, maxHeight: 120 }}
        />
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell>
        <Input.TextArea placeholder="\u591A\u884C\u8F93\u5165" />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea placeholder="\u81EA\u9002\u5E94\u9AD8\u5EA6" autoSize />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea
          placeholder="\u6700\u5C0F\u9AD8\u5EA680\uFF0C\u6700\u5927\u9AD8\u5EA6120"
          autoSize={{ minHeight: 80, maxHeight: 120 }}
        />
      </Cell>
    </>
  );
};`}},key:"input-demo-2",meta:{title:"\u591A\u884C\u8F93\u5165"}};var p=()=>u(i,{children:[e(r,{children:e(l,{placeholder:"\u6700\u591A\u8F93\u516510\u4E2A\u5B57\u7B26",maxLength:10,onOverlimit:()=>B.info("\u4E0D\u80FD\u8D85\u8FC710\u4E2A\u5B57\u7B26\u54E6\u{1F37A}")})}),e(r,{style:{marginTop:10},children:e(l.TextArea,{placeholder:"\u5B57\u6570\u7EDF\u8BA1",maxLength:50,showWordLimit:!0})}),e(r,{style:{marginTop:10},children:e(l.TextArea,{placeholder:"\u81EA\u5B9A\u4E49\u8F93\u51FA",showWordLimit:({currentCount:n})=>u("span",{children:["\u5DF2\u7ECF\u8F93\u5165",n,"\u4E2A\u5B57\u5566 \u270D\uFE0F"]})})})]});const y={code:`import React, { useState } from 'react';
import { Toast, Input, Cell } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell>
        <Input
          placeholder="\u6700\u591A\u8F93\u516510\u4E2A\u5B57\u7B26"
          maxLength={10}
          onOverlimit={() => Toast.info('\u4E0D\u80FD\u8D85\u8FC710\u4E2A\u5B57\u7B26\u54E6\u{1F37A}')}
        />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea placeholder="\u5B57\u6570\u7EDF\u8BA1" maxLength={50} showWordLimit />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea
          placeholder="\u81EA\u5B9A\u4E49\u8F93\u51FA"
          showWordLimit={({ currentCount }) => <span>\u5DF2\u7ECF\u8F93\u5165{currentCount}\u4E2A\u5B57\u5566 \u270D\uFE0F</span>}
        />
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Toast, Input, Cell } from 'react-vant-nova';

export default () => {
  return (
    <>
      <Cell>
        <Input
          placeholder="\u6700\u591A\u8F93\u516510\u4E2A\u5B57\u7B26"
          maxLength={10}
          onOverlimit={() => Toast.info('\u4E0D\u80FD\u8D85\u8FC710\u4E2A\u5B57\u7B26\u54E6\u{1F37A}')}
        />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea placeholder="\u5B57\u6570\u7EDF\u8BA1" maxLength={50} showWordLimit />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea
          placeholder="\u81EA\u5B9A\u4E49\u8F93\u51FA"
          showWordLimit={({ currentCount }) => <span>\u5DF2\u7ECF\u8F93\u5165{currentCount}\u4E2A\u5B57\u5566 \u270D\uFE0F</span>}
        />
      </Cell>
    </>
  );
};`}},key:"input-demo-3",meta:{title:"\u5B57\u6570\u7EDF\u8BA1"}};var s=()=>{const[n,d]=a.exports.useState("");return u(i,{children:[e(r,{children:e(l,{placeholder:"\u5185\u5BB9\u5267\u4E2D",value:n,onChange:d,align:"center"})}),e(r,{children:e(l,{placeholder:"\u5185\u5BB9\u53F3\u5BF9\u9F50",value:n,onChange:d,align:"right"})})]})};const I={code:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Cell>
        <Input placeholder="\u5185\u5BB9\u5267\u4E2D" value={value} onChange={setValue} align="center" />
      </Cell>
      <Cell>
        <Input placeholder="\u5185\u5BB9\u53F3\u5BF9\u9F50" value={value} onChange={setValue} align="right" />
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant-nova';

export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Cell>
        <Input placeholder="\u5185\u5BB9\u5267\u4E2D" value={value} onChange={setValue} align="center" />
      </Cell>
      <Cell>
        <Input placeholder="\u5185\u5BB9\u53F3\u5BF9\u9F50" value={value} onChange={setValue} align="right" />
      </Cell>
    </>
  );
};`}},key:"input-demo-4",meta:{title:"\u5BF9\u9F50\u65B9\u5F0F"}};var C=()=>{const[n,d]=a.exports.useState("\u53EA\u8BFB\u6A21\u5F0F"),[t,E]=a.exports.useState("\u7981\u7528\u6A21\u5F0F");return u(i,{children:[e(r,{children:e(l,{value:n,onChange:d,readOnly:!0})}),e(r,{children:e(l,{value:t,onChange:E,disabled:!0})})]})};const S={code:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant-nova';

export default () => {
  const [value1, setValue1] = useState('\u53EA\u8BFB\u6A21\u5F0F');
  const [value2, setValue2] = useState('\u7981\u7528\u6A21\u5F0F');
  return (
    <>
      <Cell>
        <Input value={value1} onChange={setValue1} readOnly />
      </Cell>
      <Cell>
        <Input value={value2} onChange={setValue2} disabled />
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant-nova';

export default () => {
  const [value1, setValue1] = useState('\u53EA\u8BFB\u6A21\u5F0F');
  const [value2, setValue2] = useState('\u7981\u7528\u6A21\u5F0F');
  return (
    <>
      <Cell>
        <Input value={value1} onChange={setValue1} readOnly />
      </Cell>
      <Cell>
        <Input value={value2} onChange={setValue2} disabled />
      </Cell>
    </>
  );
};`}},key:"input-demo-5",meta:{title:"\u8F93\u5165\u6846\u72B6\u6001"}},b=function({previewer:n=()=>null,api:d=()=>null}){const t=n;return e("div",{children:u("div",{children:[e("h1",{id:"","data-anchor":"",children:"Input \u8F93\u5165\u6846"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u6237\u53EF\u4EE5\u5728\u6587\u672C\u6846\u5185\u8F93\u5165\u6216\u7F16\u8F91\u6587\u5B57\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(t,{code:"import { Input } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"value"})," \u548C ",e("code",{children:"onChange"})," \u53CC\u5411\u7ED1\u5B9A\u8F93\u5165\u6846\u7684\u503C\uFF0C\u901A\u8FC7 ",e("code",{children:"placeholder"})," \u8BBE\u7F6E\u5360\u4F4D\u63D0\u793A\u6587\u5B57\u3002"]}),e(t,{...g,children:e(c,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u6E05\u9664\u6309\u94AE"}),u("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"clearable"})," ",e("code",{children:"clearIcon"})," ",e("code",{children:"clearTrigger"})," \u53EF\u4EE5\u63A7\u5236\u6E05\u9664\u6309\u94AE\u7684\u5C55\u793A\u65F6\u673A\u4EE5\u53CA\u81EA\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9\u3002"]}),e(t,{...D,children:e(h,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u63D2\u5165\u5185\u5BB9"}),u("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"prefix"})," ",e("code",{children:"suffix"})," \u53EF\u4EE5\u63D2\u5165\u5185\u5BB9\u3002"]}),e(t,{...x,children:e(o,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u591A\u884C\u8F93\u5165"}),u("p",{children:[e("code",{children:"Input.TextArea"})," \u53EF\u7528\u4E8E\u591A\u884C\u8F93\u5165\uFF0C ",e("code",{children:"autoSize"})," \u53EF\u4EE5\u4F7F\u6587\u672C\u57DF\u81EA\u9002\u5E94\u9AD8\u5EA6\uFF0C\u8FD8\u80FD\u8BBE\u7F6E\u5176\u6700\u5C0F\u548C\u6700\u5927\u9AD8\u5EA6\u3002"]}),e(t,{...f,children:e(F,{})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u5B57\u6570\u7EDF\u8BA1"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"maxLength"})," \u548C ",e("code",{children:"showWordLimit"})," \u53EF\u4EE5\u5F00\u542F\u8F93\u5165\u6846\u5B57\u6570\u663E\u793A\u3002"]}),e(t,{...y,children:e(p,{})}),e("h3",{id:"-9","data-anchor":"-9",children:"\u5BF9\u9F50\u65B9\u5F0F"}),u("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"align"})," \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\u3002"]}),e(t,{...I,children:e(s,{})}),e("h3",{id:"-10","data-anchor":"-10",children:"\u8F93\u5165\u6846\u72B6\u6001"}),u("ul",{children:[u("li",{children:[e("code",{children:"readOnly"})," \u63A7\u5236\u53EA\u8BFB\u72B6\u6001"]}),u("li",{children:[e("code",{children:"disabled"})," \u63A7\u5236\u7981\u7528\u72B6\u6001"]})]}),e(t,{...S,children:e(C,{})}),e("h2",{id:"-11","data-anchor":"-11",children:"API"}),e("h3",{id:"-12","data-anchor":"-12",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u8F93\u5165\u7684\u503C"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u9ED8\u8BA4\u503C"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u540D\u79F0\uFF0C\u63D0\u4EA4\u8868\u5355\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"type"}),u("td",{children:["\u8F93\u5165\u6846\u7C7B\u578B, \u53EF\u9009\u503C\u4E3A ",e("code",{children:"tel"})," ",e("code",{children:"digit"})," ",e("code",{children:"number"})," ",e("code",{children:"textarea"})," ",e("code",{children:"password"})," \u7B49, ",e("br",{})," \u5BF9 ",e("code",{children:"Input.TextArea"})," \u65E0\u6548"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"text"})})]}),u("tr",{children:[e("td",{children:"maxLength"}),e("td",{children:"\u8F93\u5165\u7684\u6700\u5927\u5B57\u7B26\u6570"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"placeholder"}),e("td",{children:"\u8F93\u5165\u6846\u5360\u4F4D\u63D0\u793A\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u8F93\u5165\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"readOnly"}),e("td",{children:"\u662F\u5426\u53EA\u8BFB"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"clearable"}),e("td",{children:"\u662F\u5426\u542F\u7528\u6E05\u9664\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u540E\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"clearIcon"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6E05\u9664\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"<Clear />"})})]}),u("tr",{children:[e("td",{children:"clearTrigger"}),u("td",{children:["\u663E\u793A\u6E05\u9664\u56FE\u6807\u7684\u65F6\u673A\uFF0C",e("br",{})," ",e("code",{children:"always"})," \u8868\u793A\u8F93\u5165\u6846\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A\uFF0C",e("br",{})," ",e("code",{children:"focus"})," \u8868\u793A\u8F93\u5165\u6846\u805A\u7126\u4E14\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A"]}),u("td",{children:[e("code",{children:"always"})," ",e("code",{children:"focus"})]}),e("td",{children:e("code",{children:"focus"})})]}),u("tr",{children:[e("td",{children:"autoFocus"}),e("td",{children:"\u662F\u5426\u81EA\u52A8\u805A\u7126\uFF0CiOS \u7CFB\u7EDF\u4E0D\u652F\u6301\u8BE5\u5C5E\u6027"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"align"}),u("td",{children:["\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"})," ",e("code",{children:"right"}),"\uFF0C\u5BF9 ",e("code",{children:"Input.TextArea"})," \u65E0\u6548"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"left"})})]}),u("tr",{children:[e("td",{children:"prefix"}),u("td",{children:["\u63D2\u5165\u524D\u7F6E\u5185\u5BB9\uFF0C \u5BF9 ",e("code",{children:"Input.TextArea"})," \u65E0\u6548"]}),e("td",{children:e("em",{children:"ReactNodec"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"suffix"}),u("td",{children:["\u63D2\u5165\u540E\u7F6E\u5185\u5BB9\uFF0C \u5BF9 ",e("code",{children:"Input.TextArea"})," \u65E0\u6548"]}),e("td",{children:e("em",{children:"ReactNodec"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-13","data-anchor":"-13",children:"Input.TextArea Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"rows"}),e("td",{children:"\u8F93\u5165\u6846\u884C\u6570"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"2"})]}),u("tr",{children:[e("td",{children:"showWordLimit"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5B57\u6570\u7EDF\u8BA1\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5185\u5BB9"}),e("td",{children:u("em",{children:["boolean|(","{"," currentCount, maxLengh ","}",") => ReactNode"]})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"autoSize"}),u("td",{children:["\u662F\u5426\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u4F20\u5165\u5BF9\u8C61,\u5982 ",u("code",{children:["{"," maxHeight: 100, minHeight: 50 ","}"]}),"\uFF0C\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"boolean | object"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"-14","data-anchor":"-14",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u503C\u53D8\u5316\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"val: string"})})]}),u("tr",{children:[e("td",{children:"onFocus"}),e("td",{children:"\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onBlur"}),e("td",{children:"\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClear"}),e("td",{children:"\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClick"}),u("td",{children:["\u70B9\u51FB ",e("code",{children:"Input"})," \u65F6\u89E6\u53D1"]}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onOverlimit"}),u("td",{children:["\u5F53\u8F93\u5165\u503C\u8D85\u51FA ",e("code",{children:"maxLength"})," \u65F6\u89E6\u53D1"]}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-15","data-anchor":"-15",children:"\u65B9\u6CD5"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"ref"})," \u53EF\u4EE5\u83B7\u53D6\u5230 ",e("code",{children:"Input"})," \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"focus"}),e("td",{children:"\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9"}),e("td",{children:"-"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"blur"}),e("td",{children:"\u53D6\u6D88\u8F93\u5165\u6846\u7126\u70B9"}),e("td",{children:"-"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"clear"}),e("td",{children:"\u6E05\u7A7A\u8F93\u5165\u5185\u5BB9"}),e("td",{children:"-"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"nativeElement"}),u("td",{children:["\u83B7\u53D6\u539F\u59CB ",e("code",{children:"DOM"})," \u5143\u7D20"]}),e("td",{children:e("em",{children:"HTMLElement | null"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-16","data-anchor":"-16",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-17","data-anchor":"-17",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-input-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-input-background-color"}),e("td",{children:e("em",{children:"transparent"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-input-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-input-placeholder-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-input-clear-icon-size"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-input-clear-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-input-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-textaea-min-height"}),e("td",{children:e("em",{children:"60px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-textaea-word-limit-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-textaea-word-limit-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-textaea-word-limit-line-height"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-18","data-anchor":"-18",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"-19","data-anchor":"-19",children:"\u8BBE\u7F6E type \u4E3A number \u540E\uFF0C\u4E3A\u4EC0\u4E48 input \u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A text?"}),u("p",{children:["HTML \u539F\u751F\u7684 ",e("code",{children:'type="number"'})," \u5C5E\u6027\u5728 iOS \u548C Android \u7CFB\u7EDF\u4E0A\u90FD\u5B58\u5728\u4E00\u5B9A\u95EE\u9898\uFF0C\u6BD4\u5982 maxLength \u5C5E\u6027\u4E0D\u751F\u6548\u3001\u65E0\u6CD5\u83B7\u53D6\u5230\u5B8C\u6574\u7684\u8F93\u5165\u5185\u5BB9\u7B49\u3002\u56E0\u6B64\u8BBE\u7F6E type \u4E3A ",e("code",{children:"number"})," \u65F6\uFF0C",e("code",{children:"Input"})," \u4E0D\u4F1A\u4F7F\u7528\u539F\u751F\u7684 ",e("code",{children:'type="number"'})," \u5C5E\u6027\uFF0C\u800C\u662F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u652F\u6301\u7684 ",e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode",children:"inputmode \u5C5E\u6027"}),"\u6765\u63A7\u5236\u8F93\u5165\u952E\u76D8\u7684\u7C7B\u578B\u3002"]}),e("h3",{id:"-20","data-anchor":"-20",children:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F"}),u("p",{children:["\u6E05\u9664\u6309\u94AE\u76D1\u542C\u662F\u7684\u79FB\u52A8\u7AEF Touch \u4E8B\u4EF6\uFF0C\u53C2\u89C1",e("a",{href:"/guide/advanced-usage",children:"\u684C\u9762\u7AEF\u9002\u914D"}),"\u3002"]})]})})},T=[{Component:c,key:"input-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:h,key:"input-demo",title:"\u6E05\u9664\u6309\u94AE"},{Component:o,key:"input-demo-1",title:"\u63D2\u5165\u5185\u5BB9"},{Component:F,key:"input-demo-2",title:"\u591A\u884C\u8F93\u5165"},{Component:p,key:"input-demo-3",title:"\u5B57\u6570\u7EDF\u8BA1"},{Component:s,key:"input-demo-4",title:"\u5BF9\u9F50\u65B9\u5F0F"},{Component:C,key:"input-demo-5",title:"\u8F93\u5165\u6846\u72B6\u6001"}],w=void 0,M=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:2,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"},{depth:3,id:"-14"},{depth:3,id:"-15"},{depth:2,id:"-16"},{depth:3,id:"-17"},{depth:2,id:"-18"},{depth:3,id:"-19"},{depth:3,id:"-20"}],L="/src/components/input/README.md",P="undefined",V="1766203394000";var j=n=>n.children({MdContent:b,demos:T,frontmatter:w,slugs:M,filePath:L,title:P,updatedTime:V});export{b as MdContent,j as default,T as demos,L as filePath,w as frontmatter,M as slugs,P as title,V as updatedTime};
