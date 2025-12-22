import{r,a as u,j as e}from"./main.af98c409.js";import{C as t,dn as l,dc as h}from"./FloatingPanel.788cd8cb.js";let a;var o=()=>{const[i,c]=r.exports.useState(0),[d,s]=r.exports.useState(1),[p,F]=r.exports.useState(1),[v,C]=r.exports.useState(1),[E,m]=r.exports.useState(1),[B,g]=r.exports.useState(1),[A,b]=r.exports.useState(1),[S,D]=r.exports.useState(1);return u("div",{className:"demo-stepper",children:[e(t,{title:"\u57FA\u7840\u7528\u6CD5",center:!0,children:e(l,{onOverlimit:()=>console.log("overlimit"),onMinus:()=>console.log("minus"),onPlus:()=>console.log("plus"),onChange:n=>console.log(n)})}),e(t,{title:"\u8BBE\u7F6E\u6700\u5C0F\u503C",center:!0,children:e(l,{min:0,value:i,onChange:n=>{c(n)}})}),e(t,{title:"\u6B65\u957F\u8BBE\u7F6E",center:!0,children:e(l,{value:d,step:2,onChange:n=>s(n)})}),e(t,{title:"\u8BBE\u7F6E\u8F93\u5165\u8303\u56F4",center:!0,children:e(l,{value:p,step:2,min:5,max:8,onChange:n=>F(n)})}),e(t,{title:"\u7981\u7528\u72B6\u6001",center:!0,children:e(l,{value:1,disabled:!0})}),e(t,{title:"\u7981\u7528\u8F93\u5165\u6846",center:!0,children:e(l,{value:v,onChange:n=>C(n),disableInput:!0})}),e(t,{title:"\u56FA\u5B9A\u5C0F\u6570\u4F4D\u6570",center:!0,children:e(l,{value:E,onChange:n=>m(n),step:.2,decimalLength:1})}),e(t,{title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",center:!0,children:e(l,{value:B,onChange:n=>g(n),inputWidth:"44px",buttonSize:"28px"})}),e(t,{title:"\u5F02\u6B65\u53D8\u66F4",center:!0,children:e(l,{value:A,onChange:n=>{h.loading({forbidClick:!0}),clearTimeout(a),a=setTimeout(()=>{h.clear(),b(n)},500)}})}),e(t,{title:"\u5706\u89D2\u98CE\u683C",center:!0,children:e(l,{value:S,onChange:n=>D(n),theme:"round",buttonSize:"22",disableInput:!0})})]})};const f=`/* eslint-disable no-console */
import React, { useState } from 'react'
import { Stepper, Cell, Toast } from 'react-vant-nova'

let timer

export default () => {
  const [value9, setValue9] = useState(0)
  const [value2, setValue2] = useState(1)
  const [value3, setValue3] = useState(1)
  const [value4, setValue4] = useState(1)
  const [value5, setValue5] = useState(1)
  const [value6, setValue6] = useState(1)
  const [value7, setValue7] = useState(1)
  const [value8, setValue8] = useState(1)

  return (
    <div className='demo-stepper'>
      <Cell title='\u57FA\u7840\u7528\u6CD5' center>
        <Stepper
          onOverlimit={() => console.log('overlimit')}
          onMinus={() => console.log('minus')}
          onPlus={() => console.log('plus')}
          onChange={v => console.log(v)}
        />
      </Cell>
      <Cell title='\u8BBE\u7F6E\u6700\u5C0F\u503C' center>
        <Stepper
          min={0}
          value={value9}
          onChange={v => {
            setValue9(v)
          }}
        />
      </Cell>
      <Cell title='\u6B65\u957F\u8BBE\u7F6E' center>
        <Stepper value={value2} step={2} onChange={val => setValue2(val)} />
      </Cell>
      <Cell title='\u8BBE\u7F6E\u8F93\u5165\u8303\u56F4' center>
        <Stepper
          value={value3}
          step={2}
          min={5}
          max={8}
          onChange={val => setValue3(val)}
        />
      </Cell>
      <Cell title='\u7981\u7528\u72B6\u6001' center>
        <Stepper value={1} disabled />
      </Cell>
      <Cell title='\u7981\u7528\u8F93\u5165\u6846' center>
        <Stepper value={value4} onChange={val => setValue4(val)} disableInput />
      </Cell>
      <Cell title='\u56FA\u5B9A\u5C0F\u6570\u4F4D\u6570' center>
        <Stepper
          value={value5}
          onChange={val => setValue5(val)}
          step={0.2}
          decimalLength={1}
        />
      </Cell>
      <Cell title='\u81EA\u5B9A\u4E49\u5927\u5C0F' center>
        <Stepper
          value={value6}
          onChange={val => setValue6(val)}
          inputWidth='44px'
          buttonSize='28px'
        />
      </Cell>
      <Cell title='\u5F02\u6B65\u53D8\u66F4' center>
        <Stepper
          value={value7}
          onChange={val => {
            Toast.loading({ forbidClick: true })
            clearTimeout(timer)
            timer = setTimeout(() => {
              Toast.clear()
              setValue7(val)
            }, 500)
          }}
        />
      </Cell>
      <Cell title='\u5706\u89D2\u98CE\u683C' center>
        <Stepper
          value={value8}
          onChange={val => setValue8(val)}
          theme='round'
          buttonSize='22'
          disableInput
        />
      </Cell>
    </div>
  )
}
`,V={code:f,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`/* eslint-disable no-console */
import React, { useState } from 'react'
import { Stepper, Cell, Toast } from 'react-vant-nova'

let timer

export default () => {
  const [value9, setValue9] = useState(0)
  const [value2, setValue2] = useState(1)
  const [value3, setValue3] = useState(1)
  const [value4, setValue4] = useState(1)
  const [value5, setValue5] = useState(1)
  const [value6, setValue6] = useState(1)
  const [value7, setValue7] = useState(1)
  const [value8, setValue8] = useState(1)

  return (
    <div className='demo-stepper'>
      <Cell title='\u57FA\u7840\u7528\u6CD5' center>
        <Stepper
          onOverlimit={() => console.log('overlimit')}
          onMinus={() => console.log('minus')}
          onPlus={() => console.log('plus')}
          onChange={v => console.log(v)}
        />
      </Cell>
      <Cell title='\u8BBE\u7F6E\u6700\u5C0F\u503C' center>
        <Stepper
          min={0}
          value={value9}
          onChange={v => {
            setValue9(v)
          }}
        />
      </Cell>
      <Cell title='\u6B65\u957F\u8BBE\u7F6E' center>
        <Stepper value={value2} step={2} onChange={val => setValue2(val)} />
      </Cell>
      <Cell title='\u8BBE\u7F6E\u8F93\u5165\u8303\u56F4' center>
        <Stepper
          value={value3}
          step={2}
          min={5}
          max={8}
          onChange={val => setValue3(val)}
        />
      </Cell>
      <Cell title='\u7981\u7528\u72B6\u6001' center>
        <Stepper value={1} disabled />
      </Cell>
      <Cell title='\u7981\u7528\u8F93\u5165\u6846' center>
        <Stepper value={value4} onChange={val => setValue4(val)} disableInput />
      </Cell>
      <Cell title='\u56FA\u5B9A\u5C0F\u6570\u4F4D\u6570' center>
        <Stepper
          value={value5}
          onChange={val => setValue5(val)}
          step={0.2}
          decimalLength={1}
        />
      </Cell>
      <Cell title='\u81EA\u5B9A\u4E49\u5927\u5C0F' center>
        <Stepper
          value={value6}
          onChange={val => setValue6(val)}
          inputWidth='44px'
          buttonSize='28px'
        />
      </Cell>
      <Cell title='\u5F02\u6B65\u53D8\u66F4' center>
        <Stepper
          value={value7}
          onChange={val => {
            Toast.loading({ forbidClick: true })
            clearTimeout(timer)
            timer = setTimeout(() => {
              Toast.clear()
              setValue7(val)
            }, 500)
          }}
        />
      </Cell>
      <Cell title='\u5706\u89D2\u98CE\u683C' center>
        <Stepper
          value={value8}
          onChange={val => setValue8(val)}
          theme='round'
          buttonSize='22'
          disableInput
        />
      </Cell>
    </div>
  )
}
`}},key:"stepper-base",meta:{title:"\u57FA\u7840\u793A\u4F8B"}},x=function({previewer:i=()=>null,api:c=()=>null}){const d=i;return e("div",{children:u("div",{children:[e("h1",{id:"","data-anchor":"",children:"Stepper \u6B65\u8FDB\u5668"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u6B65\u8FDB\u5668\u7531\u589E\u52A0\u6309\u94AE\u3001\u51CF\u5C11\u6309\u94AE\u548C\u8F93\u5165\u6846\u7EC4\u6210\uFF0C\u7528\u4E8E\u5728\u4E00\u5B9A\u8303\u56F4\u5185\u8F93\u5165\u3001\u8C03\u6574\u6570\u5B57\uFF0C\u652F\u6301\u957F\u6309\u8C03\u6574\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(d,{code:"import { Stepper } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u793A\u4F8B"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"value"})," \u7ED1\u5B9A\u8F93\u5165\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"onChange"})," \u4E8B\u4EF6\u76D1\u542C\u5230\u8F93\u5165\u503C\u7684\u53D8\u5316\u3002"]}),e("div",{children:e(d,{...V,children:e(o,{})})}),e("h2",{id:"-5","data-anchor":"-5",children:"API"}),e("h3",{id:"-6","data-anchor":"-6",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u8F93\u5165\u7684\u503C"}),e("td",{children:e("em",{children:"number|null"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u9ED8\u8BA4\u503C"}),e("td",{children:e("em",{children:"number|null"})}),e("td",{children:e("code",{children:"0"})})]}),u("tr",{children:[e("td",{children:"min"}),e("td",{children:"\u6700\u5C0F\u503C"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"max"}),e("td",{children:"\u6700\u5927\u503C"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"step"}),e("td",{children:"\u6B65\u957F\uFF0C\u6BCF\u6B21\u70B9\u51FB\u65F6\u6539\u53D8\u7684\u503C"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"1"})})]}),u("tr",{children:[e("td",{children:"name"}),u("td",{children:["\u6807\u8BC6\u7B26\uFF0C\u53EF\u4EE5\u5728 ",e("code",{children:"change"})," \u4E8B\u4EF6\u56DE\u8C03\u53C2\u6570\u4E2D\u83B7\u53D6"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"inputWidth"}),u("td",{children:["\u8F93\u5165\u6846\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"32px"})})]}),u("tr",{children:[e("td",{children:"buttonSize"}),u("td",{children:["\u6309\u94AE\u5927\u5C0F\u4EE5\u53CA\u8F93\u5165\u6846\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"28px"})})]}),u("tr",{children:[e("td",{children:"decimalLength"}),e("td",{children:"\u56FA\u5B9A\u663E\u793A\u7684\u5C0F\u6570\u4F4D\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"theme"}),u("td",{children:["\u6837\u5F0F\u98CE\u683C\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"round"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"placeholder"}),e("td",{children:"\u8F93\u5165\u6846\u5360\u4F4D\u63D0\u793A\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"integer"}),e("td",{children:"\u662F\u5426\u53EA\u5141\u8BB8\u8F93\u5165\u6574\u6570"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6B65\u8FDB\u5668"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disablePlus"}),e("td",{children:"\u662F\u5426\u7981\u7528\u589E\u52A0\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disableMinus"}),e("td",{children:"\u662F\u5426\u7981\u7528\u51CF\u5C11\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disableInput"}),e("td",{children:"\u662F\u5426\u7981\u7528\u8F93\u5165\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"showPlus"}),e("td",{children:"\u662F\u5426\u663E\u793A\u589E\u52A0\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"showMinus"}),e("td",{children:"\u662F\u5426\u663E\u793A\u51CF\u5C11\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"showInput"}),e("td",{children:"\u662F\u5426\u663E\u793A\u8F93\u5165\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"longPress"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u957F\u6309\u624B\u52BF"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"allowEmpty"}),e("td",{children:"\u662F\u5426\u5141\u8BB8\u8F93\u5165\u7684\u503C\u4E3A\u7A7A"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"-7","data-anchor":"-7",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u8F93\u5165\u6846\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]}),u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:u("em",{children:["value: number|null, detail: ","{"," name: string ","}"]})})]}),u("tr",{children:[e("td",{children:"onOverlimit"}),e("td",{children:"\u70B9\u51FB\u4E0D\u53EF\u7528\u7684\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onPlus"}),e("td",{children:"\u70B9\u51FB\u589E\u52A0\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onMinus"}),e("td",{children:"\u70B9\u51FB\u51CF\u5C11\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onFocus"}),e("td",{children:"\u8F93\u5165\u6846\u805A\u7126\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]}),u("tr",{children:[e("td",{children:"onBlur"}),e("td",{children:"\u8F93\u5165\u6846\u5931\u7126\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]})]})]}),e("h3",{id:"-8","data-anchor":"-8",children:"Stepper \u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Swiper \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"focus"}),u("td",{children:["\u8F93\u5165\u6846 ",e("code",{children:"focus"})," \u4E8B\u4EF6"]}),e("td",{children:"-"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"blur"}),u("td",{children:["\u8F93\u5165\u6846 ",e("code",{children:"blur"})," \u4E8B\u4EF6"]}),e("td",{children:"-"}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-9","data-anchor":"-9",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(d,{code:"import type { StepperTheme, StepperInstance } from 'react-vant-nova';",lang:"ts"}),u("p",{children:[e("code",{children:"StepperInstance"})," \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A"]}),e(d,{code:`import { useRef } from 'react';
import type { StepperInstance } from 'react-vant-nova';

const stepperRef = useRef<StepperInstance>(null);

swipeRef.current?.focus();
swipeRef.current?.blur();`,lang:"ts"}),e("h2",{id:"-10","data-anchor":"-10",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-11","data-anchor":"-11",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-stepper-active-color"}),e("td",{children:e("em",{children:"#e8e8e8"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-background-color"}),e("td",{children:e("em",{children:"var(--rv-active-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-button-icon-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-button-disabled-color"}),e("td",{children:e("em",{children:"var(--rv-background-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-button-disabled-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-button-round-theme-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-width"}),e("td",{children:e("em",{children:"32px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-height"}),e("td",{children:e("em",{children:"28px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-line-height"}),e("td",{children:e("em",{children:"normal"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-disabled-background-color"}),e("td",{children:e("em",{children:"var(--rv-active-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-border-radius"}),e("td",{children:e("em",{children:"var(--rv-border-radius-md)"})}),e("td",{children:"-"})]})]})]})]})})},P=[{Component:o,key:"stepper-base",title:"\u57FA\u7840\u793A\u4F8B"}],T=void 0,y=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:2,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:2,id:"-10"},{depth:3,id:"-11"}],I="/src/components/stepper/README.md",M="undefined",w="1766203394000";var z=i=>i.children({MdContent:x,demos:P,frontmatter:T,slugs:y,filePath:I,title:M,updatedTime:w});export{x as MdContent,z as default,P as demos,I as filePath,T as frontmatter,y as slugs,M as title,w as updatedTime};
