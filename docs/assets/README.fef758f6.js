import{R as i,j as e,r as s,a as u}from"./main.1ee7503a.js";import{dl as a,i as C}from"./FloatingPanel.3ae6a5fa.js";var d=()=>{const[t,n]=i.useState(new Date);return e(a,{title:"\u9009\u62E9\u5E74\u6708\u65E5",type:"date",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:t,onChange:n})};const v=`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  const [value, setValue] = React.useState(new Date())

  return (
    <DatetimePicker
      title='\u9009\u62E9\u5E74\u6708\u65E5'
      type='date'
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  )
}
`,B={code:v,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  const [value, setValue] = React.useState(new Date())

  return (
    <DatetimePicker
      title='\u9009\u62E9\u5E74\u6708\u65E5'
      type='date'
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  )
}
`}},key:"datetime-picker-date",meta:{title:"\u9009\u62E9\u5E74\u6708\u65E5"}};var c=()=>{const[t,n]=s.exports.useState(new Date);return e(a,{popup:{round:!0},type:"date",title:"\u9009\u62E9\u5E74\u6708\u65E5",minDate:new Date(2021,0,1),maxDate:new Date(2025,10,1),value:t,onConfirm:n,children:(r,z,D)=>e(C,{readOnly:!0,clickable:!0,label:"\u9009\u62E9\u5E74\u6708\u65E5",value:r.toLocaleDateString(),placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>D.open()})})};const y=`import React, { useState } from 'react'
import { DatetimePicker, Field } from 'react-vant-nova'

export default () => {
  const [value, setValue] = useState(new Date())
  return (
    <DatetimePicker
      popup={{
        round: true,
      }}
      type='date'
      title='\u9009\u62E9\u5E74\u6708\u65E5'
      minDate={new Date(2021, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onConfirm={setValue}
    >
      {(val, _, actions) => {
        return (
          <Field
            readOnly
            clickable
            label='\u9009\u62E9\u5E74\u6708\u65E5'
            value={val.toLocaleDateString()}
            placeholder='\u8BF7\u9009\u62E9\u65E5\u671F'
            onClick={() => actions.open()}
          />
        )
      }}
    </DatetimePicker>
  )
}
`,f={code:y,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { DatetimePicker, Field } from 'react-vant-nova'

export default () => {
  const [value, setValue] = useState(new Date())
  return (
    <DatetimePicker
      popup={{
        round: true,
      }}
      type='date'
      title='\u9009\u62E9\u5E74\u6708\u65E5'
      minDate={new Date(2021, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onConfirm={setValue}
    >
      {(val, _, actions) => {
        return (
          <Field
            readOnly
            clickable
            label='\u9009\u62E9\u5E74\u6708\u65E5'
            value={val.toLocaleDateString()}
            placeholder='\u8BF7\u9009\u62E9\u65E5\u671F'
            onClick={() => actions.open()}
          />
        )
      }}
    </DatetimePicker>
  )
}
`}},key:"datetime-picker-popup",meta:{title:"\u542F\u7528\u5F39\u51FA\u5C42"}};var l=()=>e(a,{type:"year-month",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),defaultValue:new Date,formatter:(t,n)=>t==="year"?`${n}\u5E74`:t==="month"?`${n}\u6708`:n});const k=`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  return (
    <DatetimePicker
      type='year-month'
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      defaultValue={new Date()}
      formatter={(type: string, val: string) => {
        if (type === 'year') {
          return \`\${val}\u5E74\`
        }
        if (type === 'month') {
          return \`\${val}\u6708\`
        }
        return val
      }}
    />
  )
}
`,A={code:k,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  return (
    <DatetimePicker
      type='year-month'
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      defaultValue={new Date()}
      formatter={(type: string, val: string) => {
        if (type === 'year') {
          return \`\${val}\u5E74\`
        }
        if (type === 'month') {
          return \`\${val}\u6708\`
        }
        return val
      }}
    />
  )
}
`}},key:"datetime-picker-yearmonth",meta:{title:"\u9009\u62E9\u5E74\u6708"}};var o=()=>{const[t,n]=i.useState(new Date);return e(a,{type:"month-day",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:t,onChange:n})};const P=`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  const [value, setValue] = React.useState(new Date())
  return (
    <DatetimePicker
      type='month-day'
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  )
}
`,x={code:P,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  const [value, setValue] = React.useState(new Date())
  return (
    <DatetimePicker
      type='month-day'
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  )
}
`}},key:"datetime-picker-monthday",meta:{title:"\u9009\u62E9\u6708\u65E5"}};var h=()=>e(a,{defaultValue:"12:00",type:"time",minHour:"10",maxHour:"20"});const w=`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  return (
    <DatetimePicker
      defaultValue='12:00'
      type='time'
      minHour='10'
      maxHour='20'
    />
  )
}
`,g={code:w,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  return (
    <DatetimePicker
      defaultValue='12:00'
      type='time'
      minHour='10'
      maxHour='20'
    />
  )
}
`}},key:"datetime-picker-time",meta:{title:"\u9009\u62E9\u65F6\u95F4"}};var m=()=>{const[t,n]=i.useState(new Date);return e(a,{type:"datetime",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:t,onChange:n})};const _=`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  const [value, setValue] = React.useState(new Date())
  return (
    <DatetimePicker
      type='datetime'
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  )
}
`,R={code:_,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  const [value, setValue] = React.useState(new Date())
  return (
    <DatetimePicker
      type='datetime'
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  )
}
`}},key:"datetime-picker-datetime",meta:{title:"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4"}};var E=()=>{const[t,n]=i.useState(new Date);return e(a,{type:"datehour",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:t,onChange:n})};const M=`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  const [value, setValue] = React.useState(new Date())
  return (
    <DatetimePicker
      type='datehour'
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  )
}
`,V={code:M,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  const [value, setValue] = React.useState(new Date())
  return (
    <DatetimePicker
      type='datehour'
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  )
}
`}},key:"datetime-picker-datehour",meta:{title:"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6"}};var F=()=>e(a,{type:"time",minHour:"10",maxHour:"20",defaultValue:"12:00",filter:(t,n)=>t==="minute"?n.filter(r=>+r%5===0):n});const b=`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  return (
    <DatetimePicker
      type='time'
      minHour='10'
      maxHour='20'
      defaultValue='12:00'
      filter={(type, options) => {
        if (type === 'minute') {
          return options.filter(option => +option % 5 === 0)
        }
        return options
      }}
    />
  )
}
`,S={code:b,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  return (
    <DatetimePicker
      type='time'
      minHour='10'
      maxHour='20'
      defaultValue='12:00'
      filter={(type, options) => {
        if (type === 'minute') {
          return options.filter(option => +option % 5 === 0)
        }
        return options
      }}
    />
  )
}
`}},key:"datetime-picker-filter",meta:{title:"\u9009\u9879\u8FC7\u6EE4\u5668"}};var p=()=>{const[t,n]=i.useState(new Date);return e(a,{type:"date",columnsOrder:["month","day","year"],minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:t,onChange:n})};const N=`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  const [value, setValue] = React.useState(new Date())
  return (
    <DatetimePicker
      type='date'
      columnsOrder={['month', 'day', 'year']}
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  )
}
`,$={code:N,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { DatetimePicker } from 'react-vant-nova'

export default () => {
  const [value, setValue] = React.useState(new Date())
  return (
    <DatetimePicker
      type='date'
      columnsOrder={['month', 'day', 'year']}
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  )
}
`}},key:"datetime-picker-columnsorder",meta:{title:"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F"}},H=function({previewer:t=()=>null,api:n=()=>null}){const r=t;return e("div",{children:u("div",{children:[e("h1",{id:"","data-anchor":"",children:"DatetimePicker \u65F6\u95F4\u9009\u62E9"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),u("p",{children:["\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u652F\u6301\u65E5\u671F\u3001\u5E74\u6708\u3001\u65F6\u5206\u7B49\u7EF4\u5EA6\uFF0C\u901A\u5E38\u4E0E",e("a",{href:"/components/popup",children:"\u5F39\u51FA\u5C42"}),"\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002"]}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(r,{code:"import { DatetimePicker } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u9009\u62E9\u5E74\u6708\u65E5"}),u("p",{children:["DatetimePicker \u901A\u8FC7 type \u5C5E\u6027\u6765\u5B9A\u4E49\u9700\u8981\u9009\u62E9\u7684\u65F6\u95F4\u7C7B\u578B\uFF0Ctype \u4E3A ",e("code",{children:"date"})," \u8868\u793A\u9009\u62E9\u5E74\u6708\u65E5\u3002\u901A\u8FC7 minDate \u548C maxDate \u5C5E\u6027\u53EF\u4EE5\u786E\u5B9A\u53EF\u9009\u7684\u65F6\u95F4\u8303\u56F4\u3002"]}),e(r,{...B,children:e(d,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u542F\u7528\u5F39\u51FA\u5C42"}),u("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"popup"})," \u5C5E\u6027\u542F\u7528\u5F39\u51FA\u5C42\u7279\u6027"]}),e(r,{...f,children:e(c,{})}),e("blockquote",{children:u("p",{children:["\u542F\u7528 ",e("code",{children:"popup"})," \u5C5E\u6027\u540E\uFF0C\u4E00\u822C\u4F7F\u7528 ",e("code",{children:"onConfirm"})," \u4E8B\u4EF6\u4EE3\u66FF ",e("code",{children:"onChange"})," \u66F4\u65B0\u5916\u90E8\u503C"]})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u9009\u62E9\u5E74\u6708"}),u("p",{children:["\u5C06 type \u8BBE\u7F6E\u4E3A ",e("code",{children:"year-month"})," \u5373\u53EF\u9009\u62E9\u5E74\u4EFD\u548C\u6708\u4EFD\u3002\u901A\u8FC7\u4F20\u5165 ",e("code",{children:"formatter"})," \u51FD\u6570\uFF0C\u53EF\u4EE5\u5BF9\u9009\u9879\u6587\u5B57\u8FDB\u884C\u683C\u5F0F\u5316\u5904\u7406\u3002"]}),e(r,{...A,children:e(l,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u9009\u62E9\u6708\u65E5"}),u("p",{children:["\u5C06 type \u8BBE\u7F6E\u4E3A ",e("code",{children:"month-day"})," \u5373\u53EF\u9009\u62E9\u6708\u4EFD\u548C\u65E5\u671F\u3002"]}),e(r,{...x,children:e(o,{})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u9009\u62E9\u65F6\u95F4"}),u("p",{children:["\u5C06 type \u8BBE\u7F6E\u4E3A ",e("code",{children:"time"})," \u5373\u53EF\u9009\u62E9\u65F6\u95F4\uFF08\u5C0F\u65F6\u548C\u5206\u949F\uFF09\u3002"]}),e(r,{...g,children:e(h,{})}),e("h3",{id:"-9","data-anchor":"-9",children:"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4"}),u("p",{children:["\u5C06 type \u8BBE\u7F6E\u4E3A ",e("code",{children:"datetime"})," \u5373\u53EF\u9009\u62E9\u5B8C\u6574\u65F6\u95F4\uFF0C\u5305\u62EC\u5E74\u6708\u65E5\u548C\u5C0F\u65F6\u3001\u5206\u949F\u3002"]}),e(r,{...R,children:e(m,{})}),e("h3",{id:"-10","data-anchor":"-10",children:"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6"}),u("p",{children:["\u5C06 type \u8BBE\u7F6E\u4E3A ",e("code",{children:"datehour"})," \u5373\u53EF\u9009\u62E9\u65E5\u671F\u548C\u5C0F\u65F6\uFF0C\u5305\u62EC\u5E74\u6708\u65E5\u548C\u5C0F\u65F6\u3002"]}),e(r,{...V,children:e(E,{})}),e("h3",{id:"-11","data-anchor":"-11",children:"\u9009\u9879\u8FC7\u6EE4\u5668"}),u("p",{children:["\u901A\u8FC7\u4F20\u5165 ",e("code",{children:"filter"})," \u51FD\u6570\uFF0C\u53EF\u4EE5\u5BF9\u9009\u9879\u6570\u7EC4\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u65F6\u95F4\u95F4\u9694\u3002"]}),e(r,{...S,children:e(F,{})}),e("h3",{id:"-12","data-anchor":"-12",children:"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F"}),e(r,{...$,children:e(p,{})}),e("h2",{id:"-13","data-anchor":"-13",children:"API"}),e("h3",{id:"-14","data-anchor":"-14",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"type"}),u("td",{children:["\u65F6\u95F4\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"date"})," ",e("code",{children:"time"})," ",e("br",{})," ",e("code",{children:"year-month"})," ",e("code",{children:"month-day"})," ",e("code",{children:"datehour"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"datetime"})})]}),u("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u9876\u90E8\u680F\u6807\u9898"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"''"})})]}),u("tr",{children:[e("td",{children:"confirmButtonText"}),e("td",{children:"\u786E\u8BA4\u6309\u94AE\u6587\u5B57"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"\u786E\u8BA4"})})]}),u("tr",{children:[e("td",{children:"cancelButtonText"}),e("td",{children:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"\u53D6\u6D88"})})]}),u("tr",{children:[e("td",{children:"showToolbar"}),e("td",{children:"\u662F\u5426\u663E\u793A\u9876\u90E8\u680F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"loading"}),e("td",{children:"\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"readOnly"}),e("td",{children:"\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u5207\u6362\u9009\u9879"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"filter"}),e("td",{children:"\u9009\u9879\u8FC7\u6EE4\u51FD\u6570"}),e("td",{children:e("em",{children:"(type: string, values: string[]) => string[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"formatter"}),e("td",{children:"\u9009\u9879\u683C\u5F0F\u5316\u51FD\u6570"}),e("td",{children:e("em",{children:"(type: string, value: string) => string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"columnsOrder"}),u("td",{children:["\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F\u6570\u7EC4, \u5B50\u9879\u53EF\u9009\u503C\u4E3A",e("br",{})," ",e("code",{children:"year"}),"\u3001",e("code",{children:"month"}),"\u3001",e("code",{children:"day"}),"\u3001",e("code",{children:"hour"}),"\u3001",e("code",{children:"minute"})]}),e("td",{children:e("em",{children:"string[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"itemHeight"}),u("td",{children:["\u9009\u9879\u9AD8\u5EA6\uFF0C\u652F\u6301 ",e("code",{children:"px"})," ",e("code",{children:"vw"})," ",e("code",{children:"vh"})," ",e("code",{children:"rem"})," \u5355\u4F4D\uFF0C\u9ED8\u8BA4 ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"44"})})]}),u("tr",{children:[e("td",{children:"visibleItemCount"}),e("td",{children:"\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"6"})})]}),u("tr",{children:[e("td",{children:"swipeDuration"}),u("td",{children:["\u5FEB\u901F\u6ED1\u52A8\u65F6\u60EF\u6027\u6EDA\u52A8\u7684\u65F6\u957F\uFF0C\u5355\u4F4D",e("code",{children:"ms"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"1000"})})]}),u("tr",{children:[e("td",{children:"columnsTop"}),e("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"columnsBottom"}),e("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u4E0B\u65B9\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"optionRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u5185\u5BB9"}),e("td",{children:e("em",{children:"(option: string | object) => ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-15","data-anchor":"-15",children:"DatePicker Props"}),e("p",{children:"\u5F53\u65F6\u95F4\u9009\u62E9\u5668\u7C7B\u578B\u4E3A date \u6216 datetime \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"minDate"}),e("td",{children:"\u53EF\u9009\u7684\u6700\u5C0F\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u5206\u949F"}),e("td",{children:e("em",{children:"Date"})}),e("td",{children:"\u5341\u5E74\u524D"})]}),u("tr",{children:[e("td",{children:"maxDate"}),e("td",{children:"\u53EF\u9009\u7684\u6700\u5927\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u5206\u949F"}),e("td",{children:e("em",{children:"Date"})}),e("td",{children:"\u5341\u5E74\u540E"})]})]})]}),e("h3",{id:"-16","data-anchor":"-16",children:"TimePicker Props"}),e("p",{children:"\u5F53\u65F6\u95F4\u9009\u62E9\u5668\u7C7B\u578B\u4E3A time \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"minHour"}),e("td",{children:"\u53EF\u9009\u7684\u6700\u5C0F\u5C0F\u65F6"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),u("tr",{children:[e("td",{children:"maxHour"}),e("td",{children:"\u53EF\u9009\u7684\u6700\u5927\u5C0F\u65F6"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"23"})})]}),u("tr",{children:[e("td",{children:"minMinute"}),e("td",{children:"\u53EF\u9009\u7684\u6700\u5C0F\u5206\u949F"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),u("tr",{children:[e("td",{children:"maxMinute"}),e("td",{children:"\u53EF\u9009\u7684\u6700\u5927\u5206\u949F"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"59"})})]})]})]}),e("h3",{id:"-17","data-anchor":"-17",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:"value: \u5F53\u524D\u9009\u4E2D\u7684\u65F6\u95F4"})]}),u("tr",{children:[e("td",{children:"onConfirm"}),e("td",{children:"\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:"value: \u5F53\u524D\u9009\u4E2D\u7684\u65F6\u95F4"})]}),u("tr",{children:[e("td",{children:"onCancel"}),e("td",{children:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{}),e("td",{}),e("td",{})]})]})]}),e("h2",{id:"-18","data-anchor":"-18",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"-19","data-anchor":"-19",children:"\u8BBE\u7F6E minDate \u6216 maxDate \u540E\u51FA\u73B0\u9875\u9762\u5361\u6B7B\u7684\u60C5\u51B5\uFF1F"}),u("p",{children:["\u8BF7\u6CE8\u610F\u4E0D\u8981\u5728\u6A21\u677F\u4E2D\u76F4\u63A5\u4F7F\u7528\u7C7B\u4F3C",e("code",{children:'minDate="new Date()"'}),"\u7684\u5199\u6CD5\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u6BCF\u6B21\u6E32\u67D3\u7EC4\u4EF6\u65F6\u4F20\u5165\u4E00\u4E2A\u65B0\u7684 Date \u5BF9\u8C61\uFF0C\u800C\u4F20\u5165\u65B0\u7684\u6570\u636E\u4F1A\u89E6\u53D1\u4E0B\u4E00\u6B21\u6E32\u67D3\uFF0C\u4ECE\u800C\u9677\u5165\u6B7B\u5FAA\u73AF\u3002"]}),u("p",{children:["\u6B63\u786E\u7684\u505A\u6CD5\u662F\u5C06",e("code",{children:"minDate"}),"\u4F5C\u4E3A\u4E00\u4E2A\u6570\u636E\u5B9A\u4E49\u5728",e("code",{children:"data"}),"\u51FD\u6570\u4E2D\u3002"]}),e("h3",{id:"-20","data-anchor":"-20",children:"\u5728 iOS \u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25\uFF1F"}),u("p",{children:["\u5982\u679C\u4F60\u9047\u5230\u4E86\u5728 iOS \u4E0A\u65E0\u6CD5\u6E32\u67D3\u7EC4\u4EF6\u7684\u95EE\u9898\uFF0C\u8BF7\u786E\u8BA4\u5728\u521B\u5EFA Date \u5BF9\u8C61\u65F6\u6CA1\u6709\u4F7F\u7528",e("code",{children:"new Date('2020-01-01')"}),"\u8FD9\u6837\u7684\u5199\u6CD5\uFF0CiOS \u4E0D\u652F\u6301\u4EE5\u4E2D\u5212\u7EBF\u5206\u9694\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u6B63\u786E\u5199\u6CD5\u662F",e("code",{children:"new Date('2020/01/01')"}),"\u3002"]}),u("p",{children:["\u5BF9\u6B64\u95EE\u9898\u7684\u8BE6\u7EC6\u89E3\u91CA\uFF1A",e("a",{href:"https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios",children:"stackoverflow"}),"\u3002"]}),e("h3",{id:"-21","data-anchor":"-21",children:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F"}),u("p",{children:["\u53C2\u89C1",e("a",{href:"/guide/advanced-usage",children:"\u684C\u9762\u7AEF\u9002\u914D"}),"\u3002"]}),e("h3",{id:"-22","data-anchor":"-22",children:"\u662F\u5426\u6709\u5E74\u4EFD\u6216\u6708\u4EFD\u9009\u62E9\u5668\uFF1F"}),u("p",{children:["\u5982\u679C\u4EC5\u9700\u8981\u9009\u62E9\u5E74\u4EFD\u6216\u8005\u6708\u4EFD\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 ",e("a",{href:"/components/picker",children:"Picker"})," \u7EC4\u4EF6\u3002"]})]})})},L=[{Component:d,key:"datetime-picker-date",title:"\u9009\u62E9\u5E74\u6708\u65E5"},{Component:c,key:"datetime-picker-popup",title:"\u542F\u7528\u5F39\u51FA\u5C42"},{Component:l,key:"datetime-picker-yearmonth",title:"\u9009\u62E9\u5E74\u6708"},{Component:o,key:"datetime-picker-monthday",title:"\u9009\u62E9\u6708\u65E5"},{Component:h,key:"datetime-picker-time",title:"\u9009\u62E9\u65F6\u95F4"},{Component:m,key:"datetime-picker-datetime",title:"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4"},{Component:E,key:"datetime-picker-datehour",title:"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6"},{Component:F,key:"datetime-picker-filter",title:"\u9009\u9879\u8FC7\u6EE4\u5668"},{Component:p,key:"datetime-picker-columnsorder",title:"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F"}],I=void 0,O=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:3,id:"-12"},{depth:2,id:"-13"},{depth:3,id:"-14"},{depth:3,id:"-15"},{depth:3,id:"-16"},{depth:3,id:"-17"},{depth:2,id:"-18"},{depth:3,id:"-19"},{depth:3,id:"-20"},{depth:3,id:"-21"},{depth:3,id:"-22"}],T="/src/components/datetime-picker/README.md",j="undefined",q="1766203394000";var K=t=>t.children({MdContent:H,demos:L,frontmatter:I,slugs:O,filePath:T,title:j,updatedTime:q});export{H as MdContent,K as default,L as demos,T as filePath,I as frontmatter,O as slugs,j as title,q as updatedTime};
