import{a as n,F as i,j as e}from"./main.af98c409.js";import{h as l,C as r,dc as E}from"./FloatingPanel.788cd8cb.js";var c=()=>n(i,{children:[e(l,{children:(u,d)=>e(r,{isLink:!0,title:"\u5355\u4E2A\u65E5\u671F",value:u?u.toLocaleDateString():"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>d.open()})}),e(l,{type:"multiple",children:(u,d)=>e(r,{isLink:!0,title:"\u591A\u4E2A\u65E5\u671F",value:u?`\u5DF2\u9009${u.length}\u4E2A\u65E5\u671F`:"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>d.open()})}),e(l,{type:"range",children:(u,d)=>e(r,{isLink:!0,title:"\u65E5\u671F\u533A\u95F4",titleStyle:{flex:"none"},value:u?u.map(t=>t.toLocaleDateString()).join("~"):"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>d.open()})})]});const F=`import React from 'react'
import { Calendar, Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Calendar>
        {(val: Date, actions) => (
          <Cell
            isLink
            title='\u5355\u4E2A\u65E5\u671F'
            value={val ? val.toLocaleDateString() : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
      <Calendar type='multiple'>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u591A\u4E2A\u65E5\u671F'
            value={val ? \`\u5DF2\u9009\${val.length}\u4E2A\u65E5\u671F\` : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
      <Calendar type='range'>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u65E5\u671F\u533A\u95F4'
            titleStyle={{ flex: 'none' }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join('~')
                : '\u8BF7\u9009\u62E9\u65E5\u671F'
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    </>
  )
}
`,C={code:F,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Calendar, Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Calendar>
        {(val: Date, actions) => (
          <Cell
            isLink
            title='\u5355\u4E2A\u65E5\u671F'
            value={val ? val.toLocaleDateString() : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
      <Calendar type='multiple'>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u591A\u4E2A\u65E5\u671F'
            value={val ? \`\u5DF2\u9009\${val.length}\u4E2A\u65E5\u671F\` : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
      <Calendar type='range'>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u65E5\u671F\u533A\u95F4'
            titleStyle={{ flex: 'none' }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join('~')
                : '\u8BF7\u9009\u62E9\u65E5\u671F'
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    </>
  )
}
`}},key:"calendar-base",meta:{title:"\u9009\u62E9\u5355\u4E2A\u65E5\u671F"}};var a=()=>n(i,{children:[e(l,{showConfirm:!1,children:(u,d)=>e(r,{isLink:!0,title:"\u5355\u4E2A\u65E5\u671F",value:u?u.toLocaleDateString():"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>d.open()})}),e(l,{showConfirm:!1,type:"range",children:(u,d)=>e(r,{isLink:!0,title:"\u65E5\u671F\u533A\u95F4",titleStyle:{flex:"none"},value:u?u.map(t=>t.toLocaleDateString()).join("~"):"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>d.open()})})]});const s=`import React from 'react'
import { Calendar, Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Calendar showConfirm={false}>
        {(val: Date, actions) => (
          <Cell
            isLink
            title='\u5355\u4E2A\u65E5\u671F'
            value={val ? val.toLocaleDateString() : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar showConfirm={false} type='range'>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u65E5\u671F\u533A\u95F4'
            titleStyle={{ flex: 'none' }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join('~')
                : '\u8BF7\u9009\u62E9\u65E5\u671F'
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    </>
  )
}
`,p={code:s,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Calendar, Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Calendar showConfirm={false}>
        {(val: Date, actions) => (
          <Cell
            isLink
            title='\u5355\u4E2A\u65E5\u671F'
            value={val ? val.toLocaleDateString() : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar showConfirm={false} type='range'>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u65E5\u671F\u533A\u95F4'
            titleStyle={{ flex: 'none' }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join('~')
                : '\u8BF7\u9009\u62E9\u65E5\u671F'
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    </>
  )
}
`}},key:"calendar-quick",meta:{title:"\u5FEB\u6377\u9009\u62E9"}},D=u=>{const d=u.date.getMonth()+1,t=u.date.getDate();return d===5&&(t===1?u.topInfo="\u52B3\u52A8\u8282":t===4?u.topInfo="\u9752\u5E74\u8282":t===11&&(u.text="\u4ECA\u5929")),u.type==="start"?u.bottomInfo="\u5165\u4F4F":u.type==="end"&&(u.bottomInfo="\u79BB\u5E97"),u};var h=()=>n(i,{children:[e(l,{type:"range",color:"#1989fa",children:(u,d)=>e(r,{isLink:!0,title:"\u989C\u8272",titleStyle:{flex:"none"},value:u?u.map(t=>t.toLocaleDateString()).join("~"):"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>d.open()})}),e(l,{type:"multiple",minDate:new Date(2010,0,1),maxDate:new Date(2010,0,31),children:(u,d)=>e(r,{isLink:!0,title:"\u65E5\u671F\u8303\u56F4",value:u?`\u5DF2\u9009${u.length}\u4E2A\u65E5\u671F`:"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>d.open()})}),e(l,{type:"range",maxRange:3,children:(u,d)=>e(r,{isLink:!0,title:"\u533A\u95F4\u8303\u56F4",titleStyle:{flex:"none"},value:u?u.map(t=>t.toLocaleDateString()).join("~"):"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>d.open()})}),e(l,{firstDayOfWeek:1,children:(u,d)=>e(r,{isLink:!0,title:"\u5468\u8D77\u59CB\u65E5",value:u?u.toLocaleDateString():"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>d.open()})}),e(l,{type:"range",formatter:D,children:(u,d)=>e(r,{isLink:!0,title:"\u65E5\u671F\u6587\u6848",titleStyle:{flex:"none"},value:u?u.map(t=>t.toLocaleDateString()).join("~"):"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>d.open()})}),e(l,{formatMonthTitle:u=>`${u.getFullYear()}\u{1F951}${u.getMonth()+1}\u{1F36A}`,weekdays:["\u{1F315}","\u{1F316}","\u{1F317}","\u{1F318}","\u{1F311}","\u{1F312}","\u{1F313}"],children:(u,d)=>e(r,{isLink:!0,title:"\u5468/\u6708\u6587\u6848",value:u?u.toLocaleDateString():"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>d.open()})}),e(l,{horizontal:!0,children:(u,d)=>e(r,{isLink:!0,title:"\u6C34\u5E73\u6ED1\u52A8",value:u?u.toLocaleDateString():"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>d.open()})})]});const m=`import React from 'react'
import { Calendar, Cell } from 'react-vant-nova'

const formatter = day => {
  const month = day.date.getMonth() + 1
  const date = day.date.getDate()

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '\u52B3\u52A8\u8282'
    } else if (date === 4) {
      day.topInfo = '\u9752\u5E74\u8282'
    } else if (date === 11) {
      day.text = '\u4ECA\u5929'
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '\u5165\u4F4F'
  } else if (day.type === 'end') {
    day.bottomInfo = '\u79BB\u5E97'
  }

  return day
}

export default () => {
  return (
    <>
      <Calendar type='range' color='#1989fa'>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u989C\u8272'
            titleStyle={{ flex: 'none' }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join('~')
                : '\u8BF7\u9009\u62E9\u65E5\u671F'
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar
        type='multiple'
        minDate={new Date(2010, 0, 1)}
        maxDate={new Date(2010, 0, 31)}
      >
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u65E5\u671F\u8303\u56F4'
            value={val ? \`\u5DF2\u9009\${val.length}\u4E2A\u65E5\u671F\` : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar type='range' maxRange={3}>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u533A\u95F4\u8303\u56F4'
            titleStyle={{ flex: 'none' }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join('~')
                : '\u8BF7\u9009\u62E9\u65E5\u671F'
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar firstDayOfWeek={1}>
        {(val: Date, actions) => (
          <Cell
            isLink
            title='\u5468\u8D77\u59CB\u65E5'
            value={val ? val.toLocaleDateString() : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar type='range' formatter={formatter}>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u65E5\u671F\u6587\u6848'
            titleStyle={{ flex: 'none' }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join('~')
                : '\u8BF7\u9009\u62E9\u65E5\u671F'
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar
        formatMonthTitle={date =>
          \`\${date.getFullYear()}\u{1F951}\${date.getMonth() + 1}\u{1F36A}\`
        }
        weekdays={['\u{1F315}', '\u{1F316}', '\u{1F317}', '\u{1F318}', '\u{1F311}', '\u{1F312}', '\u{1F313}']}
      >
        {(val: Date, actions) => (
          <Cell
            isLink
            title='\u5468/\u6708\u6587\u6848'
            value={val ? val.toLocaleDateString() : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
      <Calendar horizontal>
        {(val: Date, actions) => (
          <Cell
            isLink
            title='\u6C34\u5E73\u6ED1\u52A8'
            value={val ? val.toLocaleDateString() : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    </>
  )
}
`,v={code:m,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Calendar, Cell } from 'react-vant-nova'

const formatter = day => {
  const month = day.date.getMonth() + 1
  const date = day.date.getDate()

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '\u52B3\u52A8\u8282'
    } else if (date === 4) {
      day.topInfo = '\u9752\u5E74\u8282'
    } else if (date === 11) {
      day.text = '\u4ECA\u5929'
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '\u5165\u4F4F'
  } else if (day.type === 'end') {
    day.bottomInfo = '\u79BB\u5E97'
  }

  return day
}

export default () => {
  return (
    <>
      <Calendar type='range' color='#1989fa'>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u989C\u8272'
            titleStyle={{ flex: 'none' }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join('~')
                : '\u8BF7\u9009\u62E9\u65E5\u671F'
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar
        type='multiple'
        minDate={new Date(2010, 0, 1)}
        maxDate={new Date(2010, 0, 31)}
      >
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u65E5\u671F\u8303\u56F4'
            value={val ? \`\u5DF2\u9009\${val.length}\u4E2A\u65E5\u671F\` : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar type='range' maxRange={3}>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u533A\u95F4\u8303\u56F4'
            titleStyle={{ flex: 'none' }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join('~')
                : '\u8BF7\u9009\u62E9\u65E5\u671F'
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar firstDayOfWeek={1}>
        {(val: Date, actions) => (
          <Cell
            isLink
            title='\u5468\u8D77\u59CB\u65E5'
            value={val ? val.toLocaleDateString() : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar type='range' formatter={formatter}>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='\u65E5\u671F\u6587\u6848'
            titleStyle={{ flex: 'none' }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join('~')
                : '\u8BF7\u9009\u62E9\u65E5\u671F'
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar
        formatMonthTitle={date =>
          \`\${date.getFullYear()}\u{1F951}\${date.getMonth() + 1}\u{1F36A}\`
        }
        weekdays={['\u{1F315}', '\u{1F316}', '\u{1F317}', '\u{1F318}', '\u{1F311}', '\u{1F312}', '\u{1F313}']}
      >
        {(val: Date, actions) => (
          <Cell
            isLink
            title='\u5468/\u6708\u6587\u6848'
            value={val ? val.toLocaleDateString() : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
      <Calendar horizontal>
        {(val: Date, actions) => (
          <Cell
            isLink
            title='\u6C34\u5E73\u6ED1\u52A8'
            value={val ? val.toLocaleDateString() : '\u8BF7\u9009\u62E9\u65E5\u671F'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    </>
  )
}
`}},key:"calendar-custom",meta:{title:"\u81EA\u5B9A\u4E49"}},B=u=>`${u.getMonth()+1}/${u.getDate()}`;var o=()=>e(l,{style:{height:500},showConfirm:!1,poppable:!1,onConfirm:u=>{E.info(B(u))}});const A=`import React from 'react'
import { Toast, Calendar } from 'react-vant-nova'

const formatDate = date => \`\${date.getMonth() + 1}/\${date.getDate()}\`

export default () => {
  return (
    <Calendar
      style={{ height: 500 }}
      showConfirm={false}
      poppable={false}
      onConfirm={v => {
        Toast.info(formatDate(v))
      }}
    />
  )
}
`,f={code:A,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Toast, Calendar } from 'react-vant-nova'

const formatDate = date => \`\${date.getMonth() + 1}/\${date.getDate()}\`

export default () => {
  return (
    <Calendar
      style={{ height: 500 }}
      showConfirm={false}
      poppable={false}
      onConfirm={v => {
        Toast.info(formatDate(v))
      }}
    />
  )
}
`}},key:"calendar-poppable",meta:{title:"\u5E73\u94FA\u5C55\u793A"}},g=function({previewer:u=()=>null,api:d=()=>null}){const t=u;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"Calendar \u65E5\u5386"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u65E5\u5386\u7EC4\u4EF6\u7528\u4E8E\u9009\u62E9\u65E5\u671F\u6216\u65E5\u671F\u533A\u95F4\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(t,{code:"import { Calendar } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u4F7F\u7528"}),n("p",{children:["\u4E0B\u9762\u6F14\u793A\u4E86\u7ED3\u5408\u5355\u5143\u683C\u6765\u4F7F\u7528\u65E5\u5386\u7EC4\u4EF6\u7684\u7528\u6CD5\uFF0C\u65E5\u671F\u9009\u62E9\u5B8C\u6210\u540E\u4F1A\u89E6\u53D1 ",e("code",{children:"onConfirm"})," \u4E8B\u4EF6\u3002"]}),e(t,{...C,children:e(c,{})}),e("blockquote",{children:n("p",{children:["Tips: \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u65E5\u671F\u533A\u95F4\u7684\u8D77\u6B62\u65F6\u95F4\u4E0D\u80FD\u4E3A\u540C\u4E00\u5929\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E ",e("code",{children:"allowSameDay"})," \u5C5E\u6027\u6765\u5141\u8BB8\u9009\u62E9\u540C\u4E00\u5929\u3002"]})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u5FEB\u6377\u9009\u62E9"}),n("p",{children:["\u5C06 ",e("code",{children:"showConfirm"})," \u8BBE\u7F6E\u4E3A ",e("code",{children:"false"})," \u53EF\u4EE5\u9690\u85CF\u786E\u8BA4\u6309\u94AE\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u9009\u62E9\u5B8C\u6210\u540E\u4F1A\u7ACB\u5373\u89E6\u53D1 ",e("code",{children:"onConfirm"})," \u4E8B\u4EF6\u3002"]}),e(t,{...p,children:e(a,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u81EA\u5B9A\u4E49\u65E5\u5386"}),n("ul",{children:[n("li",{children:["\u901A\u8FC7 ",e("code",{children:"color"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u5386\u7684\u989C\u8272\uFF0C\u5BF9\u9009\u4E2D\u65E5\u671F\u548C\u5E95\u90E8\u6309\u94AE\u751F\u6548"]}),n("li",{children:["\u901A\u8FC7 ",e("code",{children:"minDate"})," \u548C ",e("code",{children:"maxDate"})," \u5B9A\u4E49\u65E5\u5386\u7684\u8303\u56F4"]}),n("li",{children:["\u901A\u8FC7\u4F20\u5165 ",e("code",{children:"formatter"})," \u51FD\u6570\u6765\u5BF9\u65E5\u5386\u4E0A\u6BCF\u4E00\u683C\u7684\u5185\u5BB9\u8FDB\u884C\u683C\u5F0F\u5316"]}),n("li",{children:["\u901A\u8FC7 ",e("code",{children:"weekdays"})," \u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u5468\u6807\u9898\u81EA\u5B9A\u4E49\uFF0C\u901A\u8FC7 formatMonthTitle \u51FD\u6570\u53EF\u4EE5\u5B9E\u73B0\u6708\u6807\u9898\u81EA\u5B9A\u4E49"]})]}),e(t,{...v,children:e(h,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u5E73\u94FA\u5C55\u793A"}),n("p",{children:["\u5C06 ",e("code",{children:"poppable"})," \u8BBE\u7F6E\u4E3A ",e("code",{children:"false"}),"\uFF0C\u65E5\u5386\u4F1A\u76F4\u63A5\u5C55\u793A\u5728\u9875\u9762\u5185\uFF0C\u800C\u4E0D\u662F\u4EE5\u5F39\u5C42\u7684\u5F62\u5F0F\u51FA\u73B0\u3002"]}),e(t,{...f,children:e(o,{})}),e("h2",{id:"-8","data-anchor":"-8",children:"API"}),e("h3",{id:"-9","data-anchor":"-9",children:"Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"value"}),n("td",{children:["\u9009\u4E2D\u7684\u65E5\u671F\uFF0C",e("code",{children:"type"})," \u4E3A ",e("code",{children:"multiple"})," \u6216 ",e("code",{children:"range"})," \u65F6\u4E3A\u6570\u7EC4\uFF0C\u4F20\u5165 ",e("code",{children:"null"})," \u8868\u793A\u9ED8\u8BA4\u4E0D\u9009\u62E9"]}),e("td",{children:e("em",{children:"Date | Date[] | null"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"defaultValue"}),n("td",{children:["\u9ED8\u8BA4\u9009\u4E2D\u7684\u65E5\u671F\uFF0C\u540C ",e("code",{children:"value"})]}),e("td",{children:e("em",{children:"Date | Date[] | null"})}),e("td",{children:e("code",{children:"new Date()"})})]}),n("tr",{children:[e("td",{children:"type"}),n("td",{children:["\u9009\u62E9\u7C7B\u578B:",e("br",{}),e("code",{children:"single"})," \u8868\u793A\u9009\u62E9\u5355\u4E2A\u65E5\u671F\uFF0C",e("br",{}),e("code",{children:"multiple"})," \u8868\u793A\u9009\u62E9\u591A\u4E2A\u65E5\u671F\uFF0C",e("br",{}),e("code",{children:"range"})," \u8868\u793A\u9009\u62E9\u65E5\u671F\u533A\u95F4"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"single"})})]}),n("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u65E5\u5386\u6807\u9898"}),e("td",{children:e("em",{children:"string|React.ReactNode"})}),e("td",{children:e("code",{children:"\u65E5\u671F\u9009\u62E9"})})]}),n("tr",{children:[e("td",{children:"subtitle"}),e("td",{children:"\u81EA\u5B9A\u4E49\u65E5\u5386\u526F\u6807\u9898"}),e("td",{children:e("em",{children:"string|React.ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"weekdays"}),e("td",{children:"\u81EA\u5B9A\u4E49\u661F\u671F\u6587\u6848"}),e("td",{children:e("em",{children:"React.ReactNode[]"})}),e("td",{children:e("code",{children:"['\u65E5', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D']"})})]}),n("tr",{children:[e("td",{children:"formatMonthTitle"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6708\u6807\u9898"}),e("td",{children:e("em",{children:"(date: Date) => React.ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"footer"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u533A\u57DF\u5185\u5BB9"}),e("td",{children:e("em",{children:"string|React.ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"topInfoRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u65E5\u671F\u4E0A\u65B9\u7684\u63D0\u793A\u4FE1\u606F"}),e("td",{children:e("em",{children:"(day: Day) => React.ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"bottomInfoRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u65E5\u671F\u4E0B\u65B9\u7684\u63D0\u793A\u4FE1\u606F"}),e("td",{children:e("em",{children:"(day: Day) => React.ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u4E3B\u9898\u8272\uFF0C\u5BF9\u5E95\u90E8\u6309\u94AE\u548C\u9009\u4E2D\u65E5\u671F\u751F\u6548"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#ee0a24"})})]}),n("tr",{children:[e("td",{children:"minDate"}),e("td",{children:"\u53EF\u9009\u62E9\u7684\u6700\u5C0F\u65E5\u671F"}),e("td",{children:e("em",{children:"Date"})}),e("td",{children:"\u5F53\u524D\u65E5\u671F"})]}),n("tr",{children:[e("td",{children:"maxDate"}),e("td",{children:"\u53EF\u9009\u62E9\u7684\u6700\u5927\u65E5\u671F"}),e("td",{children:e("em",{children:"Date"})}),e("td",{children:"\u5F53\u524D\u65E5\u671F\u7684\u516D\u4E2A\u6708\u540E"})]}),n("tr",{children:[e("td",{children:"rowHeight"}),e("td",{children:"\u65E5\u671F\u884C\u9AD8"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"64"})})]}),n("tr",{children:[e("td",{children:"formatter"}),e("td",{children:"\u65E5\u671F\u683C\u5F0F\u5316\u51FD\u6570"}),e("td",{children:e("em",{children:"(day: Day) => Day"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"horizontal"}),e("td",{children:"\u6C34\u5E73\u6ED1\u52A8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"poppable"}),e("td",{children:"\u662F\u5426\u4EE5\u5F39\u5C42\u7684\u5F62\u5F0F\u5C55\u793A\u65E5\u5386"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"lazyRender"}),e("td",{children:"\u662F\u5426\u53EA\u6E32\u67D3\u53EF\u89C6\u533A\u57DF\u7684\u5185\u5BB9"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"showMark"}),e("td",{children:"\u662F\u5426\u663E\u793A\u6708\u4EFD\u80CC\u666F\u6C34\u5370"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"showTitle"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u65E5\u5386\u6807\u9898"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"showSubtitle"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u65E5\u5386\u526F\u6807\u9898\uFF08\u5E74\u6708\uFF09"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"showConfirm"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u786E\u8BA4\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"readOnly"}),e("td",{children:"\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u4E0D\u80FD\u9009\u62E9\u65E5\u671F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"confirmText"}),e("td",{children:"\u786E\u8BA4\u6309\u94AE\u7684\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u786E\u5B9A"})})]}),n("tr",{children:[e("td",{children:"confirmDisabledText"}),e("td",{children:"\u786E\u8BA4\u6309\u94AE\u5904\u4E8E\u7981\u7528\u72B6\u6001\u65F6\u7684\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u786E\u5B9A"})})]}),n("tr",{children:[e("td",{children:"firstDayOfWeek"}),e("td",{children:"\u8BBE\u7F6E\u5468\u8D77\u59CB\u65E5"}),e("td",{children:e("em",{children:"0-6"})}),e("td",{children:e("code",{children:"0"})})]}),n("tr",{children:[e("td",{children:"children"}),e("td",{children:"\u6E32\u67D3\u51FD\u6570"}),e("td",{children:e("em",{children:"(val: Date|Date[], actions: PickerActions) => ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-10","data-anchor":"-10",children:"Calendar Poppable Props"}),n("p",{children:["\u5F53 Calendar \u7684 ",e("code",{children:"poppable"})," \u4E3A ",e("code",{children:"true"})," \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"visible"}),e("td",{children:"\u662F\u5426\u663E\u793A\u65E5\u5386\u5F39\u7A97"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"position"}),n("td",{children:["\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"top"})," ",e("code",{children:"right"})," ",e("code",{children:"left"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"bottom"})})]}),n("tr",{children:[e("td",{children:"round"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5706\u89D2\u5F39\u7A97"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"closeOnPopstate"}),e("td",{children:"\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"closeOnClickOverlay"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"safeAreaInsetBottom"}),n("td",{children:["\u662F\u5426\u5F00\u542F",e("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h3",{id:"-11","data-anchor":"-11",children:"Calendar Range Props"}),n("p",{children:["\u5F53 Calendar \u7684 ",e("code",{children:"type"})," \u4E3A ",e("code",{children:"range"})," \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"maxRange"}),e("td",{children:"\u65E5\u671F\u533A\u95F4\u6700\u591A\u53EF\u9009\u5929\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"\u65E0\u9650\u5236"})]}),n("tr",{children:[e("td",{children:"rangePrompt"}),e("td",{children:"\u8303\u56F4\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\u7684\u63D0\u793A\u6587\u6848"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 xx \u5929"})})]}),n("tr",{children:[e("td",{children:"showRangePrompt"}),e("td",{children:"\u8303\u56F4\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\uFF0C\u662F\u5426\u5C55\u793A\u63D0\u793A\u6587\u6848"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"allowSameDay"}),e("td",{children:"\u662F\u5426\u5141\u8BB8\u65E5\u671F\u8303\u56F4\u7684\u8D77\u6B62\u65F6\u95F4\u4E3A\u540C\u4E00\u5929"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"-12","data-anchor":"-12",children:"Calendar Multiple Props"}),n("p",{children:["\u5F53 Calendar \u7684 ",e("code",{children:"type"})," \u4E3A ",e("code",{children:"multiple"})," \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"maxRange"}),e("td",{children:"\u65E5\u671F\u6700\u591A\u53EF\u9009\u5929\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"\u65E0\u9650\u5236"})]}),n("tr",{children:[e("td",{children:"rangePrompt"}),e("td",{children:"\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\u7684\u63D0\u793A\u6587\u6848"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 xx \u5929"})})]})]})]}),e("h3",{id:"-13","data-anchor":"-13",children:"Day \u6570\u636E\u7ED3\u6784"}),n("p",{children:["\u65E5\u5386\u4E2D\u7684\u6BCF\u4E2A\u65E5\u671F\u90FD\u5BF9\u5E94\u4E00\u4E2A Day \u5BF9\u8C61\uFF0C\u901A\u8FC7",e("code",{children:"formatter"}),"\u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49 Day \u5BF9\u8C61\u7684\u5185\u5BB9"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u952E\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"date"}),e("td",{children:"\u65E5\u671F\u5BF9\u5E94\u7684 Date \u5BF9\u8C61"}),e("td",{children:e("em",{children:"Date"})})]}),n("tr",{children:[e("td",{children:"type"}),n("td",{children:["\u65E5\u671F\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"selected"}),"\u3001",e("code",{children:"start"}),"\u3001",e("code",{children:"middle"}),"\u3001",e("code",{children:"end"}),"\u3001",e("code",{children:"disabled"})]}),e("td",{children:e("em",{children:"string"})})]}),n("tr",{children:[e("td",{children:"text"}),e("td",{children:"\u4E2D\u95F4\u663E\u793A\u7684\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})})]}),n("tr",{children:[e("td",{children:"topInfo"}),e("td",{children:"\u4E0A\u65B9\u7684\u63D0\u793A\u4FE1\u606F"}),e("td",{children:e("em",{children:"string"})})]}),n("tr",{children:[e("td",{children:"bottomInfo"}),e("td",{children:"\u4E0B\u65B9\u7684\u63D0\u793A\u4FE1\u606F"}),e("td",{children:e("em",{children:"string"})})]}),n("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u989D\u5916\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})})]})]})]}),e("h3",{id:"-14","data-anchor":"-14",children:"Events"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"onSelect"}),e("td",{children:"\u70B9\u51FB\u5E76\u9009\u4E2D\u4EFB\u610F\u65E5\u671F\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"value: Date | Date[]"})})]}),n("tr",{children:[e("td",{children:"onConfirm"}),n("td",{children:["\u65E5\u671F\u9009\u62E9\u5B8C\u6210\u540E\u89E6\u53D1\uFF0C\u82E5 ",e("code",{children:"showConfirm"})," \u4E3A ",e("code",{children:"true"}),"\uFF0C\u5219\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u540E\u89E6\u53D1"]}),e("td",{children:e("em",{children:"value: Date | Date[]"})})]}),n("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onClosed"}),e("td",{children:"\u5173\u95ED\u5F39\u51FA\u5C42\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onUnselect"}),n("td",{children:["\u5F53\u65E5\u5386\u7EC4\u4EF6\u7684 ",e("code",{children:"type"})," \u4E3A ",e("code",{children:"multiple"})," \u65F6\uFF0C\u53D6\u6D88\u9009\u4E2D\u65E5\u671F\u65F6\u89E6\u53D1"]}),e("td",{children:e("em",{children:"value: Date"})})]}),n("tr",{children:[e("td",{children:"onMonthShow"}),e("td",{children:"\u5F53\u67D0\u4E2A\u6708\u4EFD\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\u65F6\u89E6\u53D1"}),e("td",{children:n("em",{children:["{"," date: Date, title: string ","}"]})})]}),n("tr",{children:[e("td",{children:"onOverRange"}),e("td",{children:"\u8303\u56F4\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onClickSubtitle"}),e("td",{children:"\u70B9\u51FB\u65E5\u5386\u526F\u6807\u9898\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]})]})]}),e("h3",{id:"-15","data-anchor":"-15",children:"\u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Calendar \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"reset"}),e("td",{children:"\u5C06\u9009\u4E2D\u7684\u65E5\u671F\u91CD\u7F6E\u5230\u6307\u5B9A\u65E5\u671F\uFF0C\u672A\u4F20\u53C2\u65F6\u4F1A\u91CD\u7F6E\u5230\u9ED8\u8BA4\u65E5\u671F"}),e("td",{children:e("em",{children:"(date?: Date | Date[]) => void"})})]}),n("tr",{children:[e("td",{children:"scrollToDate"}),e("td",{children:"\u6EDA\u52A8\u5230\u67D0\u4E2A\u65E5\u671F"}),e("td",{children:e("em",{children:"(date: Date) => void"})})]}),n("tr",{children:[e("td",{children:"open"}),n("td",{children:[e("code",{children:"poppable"})," \u5F00\u542F\u65F6\uFF0C \u663E\u793A ",e("code",{children:"Calendar"})]}),e("td",{children:e("em",{children:"() => void"})})]}),n("tr",{children:[e("td",{children:"close"}),n("td",{children:[e("code",{children:"poppable"})," \u5F00\u542F\u65F6\uFF0C\u5173\u95ED ",e("code",{children:"Calendar"})]}),e("td",{children:e("em",{children:"() => void"})})]}),n("tr",{children:[e("td",{children:"toggle"}),n("td",{children:[e("code",{children:"poppable"})," \u5F00\u542F\u65F6\uFF0C\u5207\u6362 ",e("code",{children:"Calendar"})," \u7684\u663E\u793A\u548C\u9690\u85CF\u72B6\u6001"]}),e("td",{children:e("em",{children:"() => void"})})]})]})]}),e("h3",{id:"-16","data-anchor":"-16",children:"\u7C7B\u578B\u5B9A\u4E49"}),n("p",{children:["\u901A\u8FC7 ",e("code",{children:"CalendarInstance"})," \u83B7\u53D6 Calendar \u5B9E\u4F8B\u7684\u7C7B\u578B\u3002"]}),e(t,{code:`import { useRef } from 'react';
import type { CalendarInstance } from 'react-vant-nova';

const calendarRef = ref<CalendarInstance>();

calendarRef.value?.reset();`,lang:"js"}),e("h2",{id:"-17","data-anchor":"-17",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-18","data-anchor":"-18",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"--rv-calendar-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-popup-height"}),e("td",{children:e("em",{children:"80%"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-header-box-shadow"}),e("td",{children:e("em",{children:"0 2px 10px rgba(125, 126, 128, 0.16)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-header-title-height"}),e("td",{children:e("em",{children:"44px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-header-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-lg)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-header-subtitle-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-weekdays-height"}),e("td",{children:e("em",{children:"30px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-weekdays-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-month-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-month-mark-color"}),e("td",{children:e("em",{children:"fade(var(--rv-gray-2), 80%)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-month-mark-font-size"}),e("td",{children:e("em",{children:"160px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-day-height"}),e("td",{children:e("em",{children:"64px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-day-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-lg)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-range-edge-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-range-edge-background-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-range-middle-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-range-middle-background-opacity"}),e("td",{children:e("em",{children:"0.1"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-selected-day-size"}),e("td",{children:e("em",{children:"54px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-selected-day-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-info-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-xs)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-info-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-xs)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-selected-day-background-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-day-disabled-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-confirm-button-height"}),e("td",{children:e("em",{children:"36px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-calendar-confirm-button-margin"}),e("td",{children:e("em",{children:"7px 0"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-19","data-anchor":"-19",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"-20","data-anchor":"-20",children:"\u5728 iOS \u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25\uFF1F"}),n("p",{children:["\u5982\u679C\u4F60\u9047\u5230\u4E86\u5728 iOS \u4E0A\u65E0\u6CD5\u6E32\u67D3\u7EC4\u4EF6\u7684\u95EE\u9898\uFF0C\u8BF7\u786E\u8BA4\u5728\u521B\u5EFA Date \u5BF9\u8C61\u65F6\u6CA1\u6709\u4F7F\u7528",e("code",{children:"new Date('2020-01-01')"}),"\u8FD9\u6837\u7684\u5199\u6CD5\uFF0CiOS \u4E0D\u652F\u6301\u4EE5\u4E2D\u5212\u7EBF\u5206\u9694\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u6B63\u786E\u5199\u6CD5\u662F",e("code",{children:"new Date('2020/01/01')"}),"\u3002"]}),n("p",{children:["\u5BF9\u6B64\u95EE\u9898\u7684\u8BE6\u7EC6\u89E3\u91CA\uFF1A",e("a",{href:"https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios",children:"stackoverflow"}),"\u3002"]})]})})},y=[{Component:c,key:"calendar-base",title:"\u9009\u62E9\u5355\u4E2A\u65E5\u671F"},{Component:a,key:"calendar-quick",title:"\u5FEB\u6377\u9009\u62E9"},{Component:h,key:"calendar-custom",title:"\u81EA\u5B9A\u4E49"},{Component:o,key:"calendar-poppable",title:"\u5E73\u94FA\u5C55\u793A"}],k=void 0,b=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:2,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"},{depth:3,id:"-14"},{depth:3,id:"-15"},{depth:3,id:"-16"},{depth:2,id:"-17"},{depth:3,id:"-18"},{depth:2,id:"-19"},{depth:3,id:"-20"}],x="/src/components/calendar/README.md",L="undefined",S="1766203394000";var M=u=>u.children({MdContent:g,demos:y,frontmatter:k,slugs:b,filePath:x,title:L,updatedTime:S});export{g as MdContent,M as default,y as demos,x as filePath,k as frontmatter,b as slugs,L as title,S as updatedTime};
