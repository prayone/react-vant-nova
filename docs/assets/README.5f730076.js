import{j as e,r as d,F as o,a as u}from"./main.af98c409.js";import{i as l,C as E,g as h,d3 as y,dc as F,F as S,v as P,B as p,df as M,dp as R}from"./FloatingPanel.788cd8cb.js";var C=()=>e(l,{label:"\u6587\u672C",tooltip:"\u63D0\u793Atooltip",intro:e("div",{children:"We must make sure that your are a human."}),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"});const k={code:`import React, { useState } from 'react';
import { Field } from 'react-vant-nova';

export default () => {
  return (
    <Field
      label="\u6587\u672C"
      tooltip="\u63D0\u793Atooltip"
      intro={<div>We must make sure that your are a human.</div>}
      placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Field } from 'react-vant-nova';

export default () => {
  return (
    <Field
      label="\u6587\u672C"
      tooltip="\u63D0\u793Atooltip"
      intro={<div>We must make sure that your are a human.</div>}
      placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
    />
  );
};`}},key:"field-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var m=()=>{const[n,t]=d.exports.useState(""),[r,i]=d.exports.useState("");return e(o,{children:u(E.Group,{children:[e(l,{value:n,onChange:t,label:"\u6587\u672C",leftIcon:e(h,{}),rightIcon:e(y,{}),placeholder:"\u663E\u793A\u56FE\u6807",onClickLeftIcon:()=>F.info("\u5DE6\u4FA7\u56FE\u6807\u70B9\u51FB"),onClickRightIcon:()=>F.info("\u53F3\u4FA7\u56FE\u6807\u70B9\u51FB")}),e(l,{value:r,onChange:i,clearable:!0,label:"\u6587\u672C",leftIcon:e(h,{}),placeholder:"\u663E\u793A\u6E05\u9664\u56FE\u6807"})]})})};const w=`import { ShopO, WarningO } from '@react-vant/icons'
import React, { useState } from 'react'
import { Cell, Field, Toast } from 'react-vant-nova'

export default () => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  return (
    <>
      <Cell.Group>
        <Field
          value={value1}
          onChange={setValue1}
          label='\u6587\u672C'
          leftIcon={<ShopO />}
          rightIcon={<WarningO />}
          placeholder='\u663E\u793A\u56FE\u6807'
          onClickLeftIcon={() => Toast.info('\u5DE6\u4FA7\u56FE\u6807\u70B9\u51FB')}
          onClickRightIcon={() => Toast.info('\u53F3\u4FA7\u56FE\u6807\u70B9\u51FB')}
        />
        <Field
          value={value2}
          onChange={setValue2}
          clearable
          label='\u6587\u672C'
          leftIcon={<ShopO />}
          placeholder='\u663E\u793A\u6E05\u9664\u56FE\u6807'
        />
      </Cell.Group>
    </>
  )
}
`,I={code:w,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.1.0"},react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import { ShopO, WarningO } from '@react-vant/icons'
import React, { useState } from 'react'
import { Cell, Field, Toast } from 'react-vant-nova'

export default () => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  return (
    <>
      <Cell.Group>
        <Field
          value={value1}
          onChange={setValue1}
          label='\u6587\u672C'
          leftIcon={<ShopO />}
          rightIcon={<WarningO />}
          placeholder='\u663E\u793A\u56FE\u6807'
          onClickLeftIcon={() => Toast.info('\u5DE6\u4FA7\u56FE\u6807\u70B9\u51FB')}
          onClickRightIcon={() => Toast.info('\u53F3\u4FA7\u56FE\u6807\u70B9\u51FB')}
        />
        <Field
          value={value2}
          onChange={setValue2}
          clearable
          label='\u6587\u672C'
          leftIcon={<ShopO />}
          placeholder='\u663E\u793A\u6E05\u9664\u56FE\u6807'
        />
      </Cell.Group>
    </>
  )
}
`}},key:"field-icon",meta:{title:"\u663E\u793A\u56FE\u6807"}};var B=()=>{const[n,t]=d.exports.useState(""),[r,i]=d.exports.useState("");return e(o,{children:u(E.Group,{children:[e(l,{value:n,error:!0,required:!0,label:"\u7528\u6237\u540D",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",onChange:t}),e(l,{value:r,required:!0,label:"\u624B\u673A\u53F7",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",errorMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF",onChange:i})]})})};const V=`import React, { useState } from 'react'
import { Cell, Field } from 'react-vant-nova'

export default () => {
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  return (
    <>
      <Cell.Group>
        <Field
          value={username}
          error
          required
          label='\u7528\u6237\u540D'
          placeholder='\u8BF7\u8F93\u5165\u7528\u6237\u540D'
          onChange={setUsername}
        />
        <Field
          value={phone}
          required
          label='\u624B\u673A\u53F7'
          placeholder='\u8BF7\u8F93\u5165\u624B\u673A\u53F7'
          errorMessage='\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF'
          onChange={setPhone}
        />
      </Cell.Group>
    </>
  )
}
`,L={code:V,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { Cell, Field } from 'react-vant-nova'

export default () => {
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  return (
    <>
      <Cell.Group>
        <Field
          value={username}
          error
          required
          label='\u7528\u6237\u540D'
          placeholder='\u8BF7\u8F93\u5165\u7528\u6237\u540D'
          onChange={setUsername}
        />
        <Field
          value={phone}
          required
          label='\u624B\u673A\u53F7'
          placeholder='\u8BF7\u8F93\u5165\u624B\u673A\u53F7'
          errorMessage='\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF'
          onChange={setPhone}
        />
      </Cell.Group>
    </>
  )
}
`}},key:"field-error",meta:{title:"\u9519\u8BEF\u63D0\u793A"}},s=["86 \u{1F1E8}\u{1F1F3}","87 \u{1F1FA}\u{1F1F8}","88 \u{1F3F3}\uFE0F\u200D\u{1F308}","89 \u{1F3F3}\uFE0F\u200D\u26A7\uFE0F","90 \u{1F1F4}\u{1F1F2}","91 \u{1F1F5}\u{1F1EA}","92 \u{1F1E9}\u{1F1EA}"];var v=()=>{const[n,t]=d.exports.useState(""),[r,i]=d.exports.useState(!1),[c,a]=d.exports.useState(s[0]);return u(o,{children:[e(l,{value:n,center:!0,label:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",placeholder:"\u624B\u673A\u53F7",onChange:t,prefix:u(S,{align:"center",onClick:()=>i(!0),children:["+",c," ",e(P,{style:{paddingLeft:8}})]}),suffix:e(p,{size:"small",type:"primary",children:"\u53D1\u9001"})}),e(M,{round:!0,visible:r,position:"bottom",onClose:()=>i(!1),children:e(R,{title:"\u6807\u9898",onConfirm:x=>{a(x),i(!1)},columns:s})})]})};const _=`import React, { useState } from 'react'
import { Field, Flex, Popup, Picker, Button } from 'react-vant-nova'
import { ArrowDown } from '@react-vant/icons'

const columns = ['86 \u{1F1E8}\u{1F1F3}', '87 \u{1F1FA}\u{1F1F8}', '88 \u{1F3F3}\uFE0F\u200D\u{1F308}', '89 \u{1F3F3}\uFE0F\u200D\u26A7\uFE0F', '90 \u{1F1F4}\u{1F1F2}', '91 \u{1F1F5}\u{1F1EA}', '92 \u{1F1E9}\u{1F1EA}']

export default () => {
  const [sms, setSms] = useState('')
  const [visible, setVisible] = useState(false)
  const [field, setVield] = useState(columns[0])

  return (
    <>
      <Field
        value={sms}
        center
        label='\u77ED\u4FE1\u9A8C\u8BC1\u7801'
        placeholder='\u624B\u673A\u53F7'
        onChange={setSms}
        prefix={
          <Flex align='center' onClick={() => setVisible(true)}>
            +{field} <ArrowDown style={{ paddingLeft: 8 }} />
          </Flex>
        }
        suffix={
          <Button size='small' type='primary'>
            \u53D1\u9001
          </Button>
        }
      />
      <Popup
        round
        visible={visible}
        position='bottom'
        onClose={() => setVisible(false)}
      >
        <Picker
          title='\u6807\u9898'
          onConfirm={(value: string) => {
            setVield(value)
            setVisible(false)
          }}
          columns={columns}
        />
      </Popup>
    </>
  )
}
`,N={code:_,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { Field, Flex, Popup, Picker, Button } from 'react-vant-nova'
import { ArrowDown } from '@react-vant/icons'

const columns = ['86 \u{1F1E8}\u{1F1F3}', '87 \u{1F1FA}\u{1F1F8}', '88 \u{1F3F3}\uFE0F\u200D\u{1F308}', '89 \u{1F3F3}\uFE0F\u200D\u26A7\uFE0F', '90 \u{1F1F4}\u{1F1F2}', '91 \u{1F1F5}\u{1F1EA}', '92 \u{1F1E9}\u{1F1EA}']

export default () => {
  const [sms, setSms] = useState('')
  const [visible, setVisible] = useState(false)
  const [field, setVield] = useState(columns[0])

  return (
    <>
      <Field
        value={sms}
        center
        label='\u77ED\u4FE1\u9A8C\u8BC1\u7801'
        placeholder='\u624B\u673A\u53F7'
        onChange={setSms}
        prefix={
          <Flex align='center' onClick={() => setVisible(true)}>
            +{field} <ArrowDown style={{ paddingLeft: 8 }} />
          </Flex>
        }
        suffix={
          <Button size='small' type='primary'>
            \u53D1\u9001
          </Button>
        }
      />
      <Popup
        round
        visible={visible}
        position='bottom'
        onClose={() => setVisible(false)}
      >
        <Picker
          title='\u6807\u9898'
          onConfirm={(value: string) => {
            setVield(value)
            setVisible(false)
          }}
          columns={columns}
        />
      </Popup>
    </>
  )
}
`}},key:"field-button",meta:{title:"\u63D2\u5165\u6309\u94AE"}};var f=()=>{const[n,t]=d.exports.useState(""),[r,i]=d.exports.useState(""),c=a=>a.replace(/\d/g,"");return u(o,{children:[e(l,{value:n,label:"\u6587\u672C",formatter:c,placeholder:"\u5728\u8F93\u5165\u65F6\u6267\u884C\u683C\u5F0F\u5316",onChange:t}),e(l,{value:r,label:"\u6587\u672C",formatter:c,formatTrigger:"onBlur",placeholder:"\u5728\u5931\u7126\u65F6\u6267\u884C\u683C\u5F0F\u5316",onChange:i})]})};const T=`import React, { useState } from 'react'
import { Field } from 'react-vant-nova'

export default () => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  const formatter = val => val.replace(/\\d/g, '')

  return (
    <>
      <Field
        value={value1}
        label='\u6587\u672C'
        formatter={formatter}
        placeholder='\u5728\u8F93\u5165\u65F6\u6267\u884C\u683C\u5F0F\u5316'
        onChange={setValue1}
      />
      <Field
        value={value2}
        label='\u6587\u672C'
        formatter={formatter}
        formatTrigger='onBlur'
        placeholder='\u5728\u5931\u7126\u65F6\u6267\u884C\u683C\u5F0F\u5316'
        onChange={setValue2}
      />
    </>
  )
}
`,z={code:T,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { Field } from 'react-vant-nova'

export default () => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  const formatter = val => val.replace(/\\d/g, '')

  return (
    <>
      <Field
        value={value1}
        label='\u6587\u672C'
        formatter={formatter}
        placeholder='\u5728\u8F93\u5165\u65F6\u6267\u884C\u683C\u5F0F\u5316'
        onChange={setValue1}
      />
      <Field
        value={value2}
        label='\u6587\u672C'
        formatter={formatter}
        formatTrigger='onBlur'
        placeholder='\u5728\u5931\u7126\u65F6\u6267\u884C\u683C\u5F0F\u5316'
        onChange={setValue2}
      />
    </>
  )
}
`}},key:"field-formatter",meta:{title:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9"}};var A=()=>{const[n,t]=d.exports.useState("");return e(l,{rows:1,value:n,onChange:t,label:"\u7559\u8A00",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u7559\u8A00"})};const O={code:`import React, { useState } from 'react';
import { Field } from 'react-vant-nova';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={1}
      value={content}
      onChange={setContent}
      label="\u7559\u8A00"
      type="textarea"
      placeholder="\u8BF7\u8F93\u5165\u7559\u8A00"
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Field } from 'react-vant-nova';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={1}
      value={content}
      onChange={setContent}
      label="\u7559\u8A00"
      type="textarea"
      placeholder="\u8BF7\u8F93\u5165\u7559\u8A00"
    />
  );
};`}},key:"field-demo-1",meta:{title:"\u9AD8\u5EA6\u81EA\u9002\u5E94"}};var g=()=>{const[n,t]=d.exports.useState("");return e(l,{rows:2,autoSize:!0,label:"\u7559\u8A00",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u7559\u8A00",value:n,onChange:t,maxLength:50,showWordLimit:!0})};const W={code:`import React, { useState } from 'react';
import { Field } from 'react-vant-nova';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={2}
      autoSize
      label="\u7559\u8A00"
      type="textarea"
      placeholder="\u8BF7\u8F93\u5165\u7559\u8A00"
      value={content}
      onChange={setContent}
      maxLength={50}
      showWordLimit
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Field } from 'react-vant-nova';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={2}
      autoSize
      label="\u7559\u8A00"
      type="textarea"
      placeholder="\u8BF7\u8F93\u5165\u7559\u8A00"
      value={content}
      onChange={setContent}
      maxLength={50}
      showWordLimit
    />
  );
};`}},key:"field-demo-2",meta:{title:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1"}};var D=()=>e(l,{label:"\u6587\u672C",placeholder:"\u8F93\u5165\u6846\u5185\u5BB9\u53F3\u5BF9\u9F50",align:"right"});const j={code:`import React from 'react';
import { Field } from 'react-vant-nova';

export default () => {
  return <Field label="\u6587\u672C" placeholder="\u8F93\u5165\u6846\u5185\u5BB9\u53F3\u5BF9\u9F50" align="right" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Field } from 'react-vant-nova';

export default () => {
  return <Field label="\u6587\u672C" placeholder="\u8F93\u5165\u6846\u5185\u5BB9\u53F3\u5BF9\u9F50" align="right" />;
};`}},key:"field-demo-3",meta:{title:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50"}};var b=()=>{const n=d.exports.useRef(null);return e(l,{center:!0,ref:n,placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",label:"\u6587\u672C",suffix:e(p,{size:"small",onClick:()=>{var t;(t=n==null?void 0:n.current)==null||t.focus()},children:"\u805A\u7126"})})};const G=`import React, { useRef } from 'react'
import { Field, Button } from 'react-vant-nova'
import type { FieldInstance } from 'react-vant-nova'

export default () => {
  const fieldRef = useRef<FieldInstance>(null)

  return (
    <Field
      center
      ref={fieldRef}
      placeholder='\u8BF7\u8F93\u5165\u6587\u672C'
      label='\u6587\u672C'
      suffix={
        <Button
          size='small'
          onClick={() => {
            fieldRef?.current?.focus()
          }}
        >
          \u805A\u7126
        </Button>
      }
    />
  )
}
`,$={code:G,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react'
import { Field, Button } from 'react-vant-nova'
import type { FieldInstance } from 'react-vant-nova'

export default () => {
  const fieldRef = useRef<FieldInstance>(null)

  return (
    <Field
      center
      ref={fieldRef}
      placeholder='\u8BF7\u8F93\u5165\u6587\u672C'
      label='\u6587\u672C'
      suffix={
        <Button
          size='small'
          onClick={() => {
            fieldRef?.current?.focus()
          }}
        >
          \u805A\u7126
        </Button>
      }
    />
  )
}
`}},key:"field-ref",meta:{title:"ref\u8C03\u7528"}},q=function({previewer:n=()=>null,api:t=()=>null}){const r=n;return e("div",{children:u("div",{children:[e("h1",{id:"","data-anchor":"",children:"Field \u8868\u5355\u9879"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),u("p",{children:["\u8868\u5355\u4E2D\u7684\u8F93\u5165\u6846\u7EC4\u4EF6, ",e("code",{children:"Field"})," \u662F\u57FA\u4E8E ",e("code",{children:"Cell"})," \u5B9E\u73B0\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",e("code",{children:"Cell.Group"})," \u4F5C\u4E3A\u5BB9\u5668\u6765\u63D0\u4F9B\u5916\u8FB9\u6846\u3002"]}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(r,{code:"import { Field } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"value"})," \u548C ",e("code",{children:"onChange"})," \u53CC\u5411\u7ED1\u5B9A\u8F93\u5165\u6846\u7684\u503C\uFF0C\u901A\u8FC7 ",e("code",{children:"placeholder"})," \u8BBE\u7F6E\u5360\u4F4D\u63D0\u793A\u6587\u5B57\u3002"]}),e(r,{...k,children:e(C,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u663E\u793A\u56FE\u6807"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"leftIcon"})," \u548C ",e("code",{children:"rightIcon"})," \u914D\u7F6E\u8F93\u5165\u6846\u4E24\u4FA7\u7684\u56FE\u6807\uFF0C\u901A\u8FC7\u8BBE\u7F6E ",e("code",{children:"clearable"})," \u5728\u8F93\u5165\u8FC7\u7A0B\u4E2D\u5C55\u793A\u6E05\u9664\u56FE\u6807\u3002"]}),e(r,{...I,children:e(m,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u9519\u8BEF\u63D0\u793A"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"required"})," \u5C5E\u6027\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u5FC5\u586B\u9879\uFF0C\u53EF\u4EE5\u914D\u5408 ",e("code",{children:"error"})," \u6216 ",e("code",{children:"errorMessage"})," \u5C5E\u6027\u663E\u793A\u5BF9\u5E94\u7684\u9519\u8BEF\u63D0\u793A\u3002"]}),e(r,{...L,children:e(B,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u63D2\u5165\u6309\u94AE"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"prefix"})," ",e("code",{children:"suffix"})," \u5C5E\u6027\u53EF\u4EE5\u5728\u8F93\u5165\u6846\u524D\u9762\u548C\u5C3E\u90E8\u63D2\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002"]}),e(r,{...N,children:e(v,{})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"formatter"})," \u5C5E\u6027\u53EF\u4EE5\u5BF9\u8F93\u5165\u7684\u5185\u5BB9\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u901A\u8FC7 ",e("code",{children:"format-trigger"})," \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u6267\u884C\u683C\u5F0F\u5316\u7684\u65F6\u673A\uFF0C\u9ED8\u8BA4\u5728\u8F93\u5165\u65F6\u8FDB\u884C\u683C\u5F0F\u5316\u3002"]}),e(r,{...z,children:e(f,{})}),e("h3",{id:"-9","data-anchor":"-9",children:"\u9AD8\u5EA6\u81EA\u9002\u5E94"}),u("p",{children:["\u5BF9\u4E8E textarea\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"autoSize"})," \u5C5E\u6027\u8BBE\u7F6E\u9AD8\u5EA6\u81EA\u9002\u5E94\u3002"]}),e(r,{...O,children:e(A,{})}),e("h3",{id:"-10","data-anchor":"-10",children:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"maxLength"})," \u548C ",e("code",{children:"showWordLimit"})," \u5C5E\u6027\u540E\u4F1A\u5728\u5E95\u90E8\u663E\u793A\u5B57\u6570\u7EDF\u8BA1\u3002"]}),e(r,{...W,children:e(g,{})}),e("h3",{id:"-11","data-anchor":"-11",children:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"align"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8F93\u5165\u6846\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"}),"\u3001",e("code",{children:"right"}),"\u3002"]}),e(r,{...j,children:e(D,{})}),e("h3",{id:"-12","data-anchor":"-12",children:"ref \u8C03\u7528"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Field \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),e(r,{...$,children:e(b,{})}),e("h2",{id:"-13","data-anchor":"-13",children:"API"}),e("h3",{id:"-14","data-anchor":"-14",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u8F93\u5165\u7684\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"label"}),e("td",{children:"\u8F93\u5165\u6846\u5DE6\u4FA7\u6587\u672C"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u540D\u79F0\uFF0C\u63D0\u4EA4\u8868\u5355\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"type"}),u("td",{children:["\u8F93\u5165\u6846\u7C7B\u578B, \u53EF\u9009\u503C\u4E3A ",e("code",{children:"tel"})," ",e("code",{children:"digit"}),e("br",{}),e("code",{children:"number"})," ",e("code",{children:"textarea"})," ",e("code",{children:"password"})," \u7B49"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"text"})})]}),u("tr",{children:[e("td",{children:"size"}),u("td",{children:["\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"large"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"maxLength"}),e("td",{children:"\u8F93\u5165\u7684\u6700\u5927\u5B57\u7B26\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"placeholder"}),e("td",{children:"\u8F93\u5165\u6846\u5360\u4F4D\u63D0\u793A\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u8F93\u5165\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"readOnly"}),e("td",{children:"\u662F\u5426\u53EA\u8BFB"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"colon"}),e("td",{children:"\u662F\u5426\u5728 label \u540E\u9762\u6DFB\u52A0\u5192\u53F7"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"intro"}),e("td",{children:"\u989D\u5916\u7684\u8F93\u5165\u6846\u63D0\u793A\u4FE1\u606F"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"tooltip"}),e("td",{children:"\u5B57\u6BB5\u63D0\u793A\u4FE1\u606F"}),u("td",{children:[e("em",{children:"ReactNode |"})," ",u("a",{href:"/components/dialog#props",children:["DialogProps & ","{"," icon: ReactNode ","}"]})]}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"required"}),e("td",{children:"\u662F\u5426\u663E\u793A\u8868\u5355\u5FC5\u586B\u661F\u53F7"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"center"}),e("td",{children:"\u662F\u5426\u4F7F\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"clearable"}),e("td",{children:"\u662F\u5426\u542F\u7528\u6E05\u9664\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u540E\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"clearIcon"}),e("td",{children:"\u6E05\u9664\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"<Clear />"})})]}),u("tr",{children:[e("td",{children:"clearTrigger"}),u("td",{children:["\u663E\u793A\u6E05\u9664\u56FE\u6807\u7684\u65F6\u673A\uFF0C",e("code",{children:"always"})," \u8868\u793A\u8F93\u5165\u6846\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A\uFF0C",e("code",{children:"focus"})," \u8868\u793A\u8F93\u5165\u6846\u805A\u7126\u4E14\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A"]}),e("td",{children:"FieldClearTrigger"}),e("td",{children:e("code",{children:"focus"})})]}),u("tr",{children:[e("td",{children:"clickable"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u70B9\u51FB\u53CD\u9988"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"isLink"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"autoFocus"}),e("td",{children:"\u662F\u5426\u81EA\u52A8\u805A\u7126\uFF0CiOS \u7CFB\u7EDF\u4E0D\u652F\u6301\u8BE5\u5C5E\u6027"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"showWordLimit"}),u("td",{children:["\u662F\u5426\u663E\u793A\u5B57\u6570\u7EDF\u8BA1\uFF0C\u9700\u8981\u8BBE\u7F6E",e("code",{children:"maxLength"}),"\u5C5E\u6027"]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"error"}),e("td",{children:"\u662F\u5426\u5C06\u8F93\u5165\u5185\u5BB9\u6807\u7EA2"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"errorMessage"}),e("td",{children:"\u5E95\u90E8\u9519\u8BEF\u63D0\u793A\u6587\u6848\uFF0C\u4E3A\u7A7A\u65F6\u4E0D\u5C55\u793A"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"formatter"}),e("td",{children:"\u8F93\u5165\u5185\u5BB9\u683C\u5F0F\u5316\u51FD\u6570"}),e("td",{children:e("em",{children:"Function"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"formatTrigger"}),u("td",{children:["\u683C\u5F0F\u5316\u51FD\u6570\u89E6\u53D1\u7684\u65F6\u673A\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"onBlur"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"onChange"})})]}),u("tr",{children:[e("td",{children:"arrowDirection"}),u("td",{children:["\u7BAD\u5934\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"left"})," ",e("code",{children:"up"})," ",e("code",{children:"down"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"right"})})]}),u("tr",{children:[e("td",{children:"labelClass"}),e("td",{children:"\u5DE6\u4FA7\u6587\u672C\u989D\u5916\u7C7B\u540D"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"labelWidth"}),u("td",{children:["\u5DE6\u4FA7\u6587\u672C\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"6.2em"})})]}),u("tr",{children:[e("td",{children:"labelAlign"}),u("td",{children:["\u5DE6\u4FA7\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"})," ",e("code",{children:"right"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"left"})})]}),u("tr",{children:[e("td",{children:"controlAlign"}),u("td",{children:["\u53F3\u4FA7\u8F93\u5165\u63A7\u4EF6\u5BB9\u5668\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"})," ",e("code",{children:"right"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"left"})})]}),u("tr",{children:[e("td",{children:"errorMessageAlign"}),u("td",{children:["\u9519\u8BEF\u63D0\u793A\u6587\u6848\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"})," ",e("code",{children:"right"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"left"})})]}),u("tr",{children:[e("td",{children:"autoSize"}),u("td",{children:["\u662F\u5426\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EA\u5BF9 textarea \u6709\u6548\uFF0C",e("br",{}),"\u53EF\u4F20\u5165\u5BF9\u8C61,\u5982 ",u("code",{children:["{"," maxHeight: 100, minHeight: 50 ","}"]}),"\uFF0C",e("br",{}),"\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"boolean | object"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"rows"}),e("td",{children:"\u8F93\u5165\u6846\u884C\u6570\uFF0C\u53EA\u5BF9 textarea \u6709\u6548"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"2"})]}),u("tr",{children:[e("td",{children:"leftIcon"}),e("td",{children:"\u5DE6\u4FA7\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"rightIcon"}),e("td",{children:"\u53F3\u4FA7\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"prefix"}),e("td",{children:"\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u524D\u90E8\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"suffix"}),e("td",{children:"\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-15","data-anchor":"-15",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u503C\u53D8\u5316\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"val: string | number"})})]}),u("tr",{children:[e("td",{children:"onFocus"}),e("td",{children:"\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onBlur"}),e("td",{children:"\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClear"}),e("td",{children:"\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB Field \u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClickInput"}),e("td",{children:"\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClickLeftIcon"}),e("td",{children:"\u70B9\u51FB\u5DE6\u4FA7\u56FE\u6807\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClickRightIcon"}),e("td",{children:"\u70B9\u51FB\u53F3\u4FA7\u56FE\u6807\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onOverlimit"}),u("td",{children:["\u5F53\u8F93\u5165\u503C\u8D85\u51FA ",e("code",{children:"maxLength"})," \u65F6\u89E6\u53D1"]}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-16","data-anchor":"-16",children:"\u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Field \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"focus"}),e("td",{children:"\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9"}),e("td",{children:"-"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"blur"}),e("td",{children:"\u53D6\u6D88\u8F93\u5165\u6846\u7126\u70B9"}),e("td",{children:"-"}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-17","data-anchor":"-17",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-18","data-anchor":"-18",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-field-label-width"}),e("td",{children:e("em",{children:"6.2em"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-label-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-label-margin-right"}),e("td",{children:e("em",{children:"var(--rv-padding-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-input-error-text-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-icon-size"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-right-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-error-message-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-error-message-font-size"}),e("td",{children:e("em",{children:"12px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-required-mark-color"}),e("td",{children:e("em",{children:"var(--rv-red)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-intro-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-tooltip-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-19","data-anchor":"-19",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"-20","data-anchor":"-20",children:"\u8BBE\u7F6E type \u4E3A number \u540E\uFF0C\u4E3A\u4EC0\u4E48 input \u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A text?"}),u("p",{children:["HTML \u539F\u751F\u7684 ",e("code",{children:'type="number"'})," \u5C5E\u6027\u5728 iOS \u548C Android \u7CFB\u7EDF\u4E0A\u90FD\u5B58\u5728\u4E00\u5B9A\u95EE\u9898\uFF0C\u6BD4\u5982 maxLength \u5C5E\u6027\u4E0D\u751F\u6548\u3001\u65E0\u6CD5\u83B7\u53D6\u5230\u5B8C\u6574\u7684\u8F93\u5165\u5185\u5BB9\u7B49\u3002\u56E0\u6B64\u8BBE\u7F6E type \u4E3A ",e("code",{children:"number"})," \u65F6\uFF0C",e("code",{children:"Field"})," \u4E0D\u4F1A\u4F7F\u7528\u539F\u751F\u7684 ",e("code",{children:'type="number"'})," \u5C5E\u6027\uFF0C\u800C\u662F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u652F\u6301\u7684 ",e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode",children:"inputmode \u5C5E\u6027"}),"\u6765\u63A7\u5236\u8F93\u5165\u952E\u76D8\u7684\u7C7B\u578B\u3002"]}),e("h3",{id:"-21","data-anchor":"-21",children:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F"}),u("p",{children:["\u6E05\u9664\u6309\u94AE\u76D1\u542C\u662F\u7684\u79FB\u52A8\u7AEF Touch \u4E8B\u4EF6\uFF0C\u53C2\u89C1",e("a",{href:"/guide/advanced-usage",children:"\u684C\u9762\u7AEF\u9002\u914D"}),"\u3002"]})]})})},U=[{Component:C,key:"field-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:m,key:"field-icon",title:"\u663E\u793A\u56FE\u6807"},{Component:B,key:"field-error",title:"\u9519\u8BEF\u63D0\u793A"},{Component:v,key:"field-button",title:"\u63D2\u5165\u6309\u94AE"},{Component:f,key:"field-formatter",title:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9"},{Component:A,key:"field-demo-1",title:"\u9AD8\u5EA6\u81EA\u9002\u5E94"},{Component:g,key:"field-demo-2",title:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1"},{Component:D,key:"field-demo-3",title:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50"},{Component:b,key:"field-ref",title:"ref\u8C03\u7528"}],H=void 0,J=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:3,id:"-12"},{depth:2,id:"-13"},{depth:3,id:"-14"},{depth:3,id:"-15"},{depth:3,id:"-16"},{depth:2,id:"-17"},{depth:3,id:"-18"},{depth:2,id:"-19"},{depth:3,id:"-20"},{depth:3,id:"-21"}],K="/src/components/field/README.md",Q="undefined",X="1766203394000";var ee=n=>n.children({MdContent:q,demos:U,frontmatter:H,slugs:J,filePath:K,title:Q,updatedTime:X});export{q as MdContent,ee as default,U as demos,K as filePath,H as frontmatter,J as slugs,Q as title,X as updatedTime};
