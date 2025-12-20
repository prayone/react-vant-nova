import{a as u,F as r,j as n}from"./main.9eb8bb9a.js";import{C as e,dc as t,f as p,I as A,d9 as m}from"./FloatingPanel.9e7a63ee.js";var a=()=>u(r,{children:[n(e,{title:"\u6587\u5B57\u63D0\u793A",isLink:!0,onClick:()=>t.info("\u63D0\u793A\u5185\u5BB9")}),n(e,{title:"\u52A0\u8F7D\u63D0\u793A",isLink:!0,onClick:()=>{t.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0})}}),n(e,{title:"\u6210\u529F\u63D0\u793A",isLink:!0,onClick:()=>t.success("\u6210\u529F\u6587\u6848")}),n(e,{title:"\u5931\u8D25\u63D0\u793A",isLink:!0,onClick:()=>t.fail("\u5931\u8D25\u6587\u6848")})]});const B=`import React from 'react'
import { Toast, Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell title='\u6587\u5B57\u63D0\u793A' isLink onClick={() => Toast.info('\u63D0\u793A\u5185\u5BB9')} />
      <Cell
        title='\u52A0\u8F7D\u63D0\u793A'
        isLink
        onClick={() => {
          Toast.loading({
            message: '\u52A0\u8F7D\u4E2D...',
            forbidClick: true,
          })
        }}
      />
      <Cell title='\u6210\u529F\u63D0\u793A' isLink onClick={() => Toast.success('\u6210\u529F\u6587\u6848')} />
      <Cell title='\u5931\u8D25\u63D0\u793A' isLink onClick={() => Toast.fail('\u5931\u8D25\u6587\u6848')} />
    </>
  )
}
`,D={code:B,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Toast, Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell title='\u6587\u5B57\u63D0\u793A' isLink onClick={() => Toast.info('\u63D0\u793A\u5185\u5BB9')} />
      <Cell
        title='\u52A0\u8F7D\u63D0\u793A'
        isLink
        onClick={() => {
          Toast.loading({
            message: '\u52A0\u8F7D\u4E2D...',
            forbidClick: true,
          })
        }}
      />
      <Cell title='\u6210\u529F\u63D0\u793A' isLink onClick={() => Toast.success('\u6210\u529F\u6587\u6848')} />
      <Cell title='\u5931\u8D25\u63D0\u793A' isLink onClick={() => Toast.fail('\u5931\u8D25\u6587\u6848')} />
    </>
  )
}
`}},key:"toast-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var s=()=>n(r,{children:n(e,{title:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A",isLink:!0,onClick:()=>{let l=4,i;const C=t.info({message:`\u8FD8\u5269 ${l+1} \u79D2`,duration:5e3,onClose:()=>{clearInterval(i)}});i=setInterval(()=>{C.config({message:`\u8FD8\u5269 ${l--} \u79D2`})},1e3)}})});const v=`import React from 'react'
import { Toast, Cell } from 'react-vant-nova'

export default () => {
  const onDynicUpdate = () => {
    let remain = 4
    let timer = undefined
    const update = Toast.info({
      message: \`\u8FD8\u5269 \${remain + 1} \u79D2\`,
      duration: 5000,
      onClose: () => {
        clearInterval(timer)
      },
    })
    timer = setInterval(() => {
      // eslint-disable-next-line no-plusplus
      update.config({ message: \`\u8FD8\u5269 \${remain--} \u79D2\` })
    }, 1000)
  }

  return (
    <>
      <Cell title='\u52A8\u6001\u66F4\u65B0\u63D0\u793A' isLink onClick={onDynicUpdate} />
    </>
  )
}
`,g={code:v,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Toast, Cell } from 'react-vant-nova'

export default () => {
  const onDynicUpdate = () => {
    let remain = 4
    let timer = undefined
    const update = Toast.info({
      message: \`\u8FD8\u5269 \${remain + 1} \u79D2\`,
      duration: 5000,
      onClose: () => {
        clearInterval(timer)
      },
    })
    timer = setInterval(() => {
      // eslint-disable-next-line no-plusplus
      update.config({ message: \`\u8FD8\u5269 \${remain--} \u79D2\` })
    }, 1000)
  }

  return (
    <>
      <Cell title='\u52A8\u6001\u66F4\u65B0\u63D0\u793A' isLink onClick={onDynicUpdate} />
    </>
  )
}
`}},key:"toast-dynic",meta:{title:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A"}};var h=()=>u(r,{children:[n(e,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",isLink:!0,onClick:()=>t({message:"\u81EA\u5B9A\u4E49\u56FE\u6807",icon:n(p,{})})}),n(e,{title:"\u81EA\u5B9A\u4E49\u56FE\u7247",isLink:!0,onClick:()=>t({message:"\u81EA\u5B9A\u4E49\u56FE\u7247",icon:n(A,{width:36,src:"https://img01.yzcdn.cn/vant/logo.png"})})}),n(e,{title:"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807",isLink:!0,onClick:()=>t.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0,loadingType:"spinner"})})]});const T=`import { FireO } from '@react-vant/icons'
import React from 'react'
import { Toast, Cell, Image } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell
        title='\u81EA\u5B9A\u4E49\u56FE\u6807'
        isLink
        onClick={() =>
          Toast({
            message: '\u81EA\u5B9A\u4E49\u56FE\u6807',
            icon: <FireO />,
          })
        }
      />

      <Cell
        title='\u81EA\u5B9A\u4E49\u56FE\u7247'
        isLink
        onClick={() =>
          Toast({
            message: '\u81EA\u5B9A\u4E49\u56FE\u7247',
            icon: (
              <Image width={36} src='https://img01.yzcdn.cn/vant/logo.png' />
            ),
          })
        }
      />
      <Cell
        title='\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807'
        isLink
        onClick={() =>
          Toast.loading({
            message: '\u52A0\u8F7D\u4E2D...',
            forbidClick: true,
            loadingType: 'spinner',
          })
        }
      />
    </>
  )
}
`,k={code:T,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.1.0"},react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import { FireO } from '@react-vant/icons'
import React from 'react'
import { Toast, Cell, Image } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell
        title='\u81EA\u5B9A\u4E49\u56FE\u6807'
        isLink
        onClick={() =>
          Toast({
            message: '\u81EA\u5B9A\u4E49\u56FE\u6807',
            icon: <FireO />,
          })
        }
      />

      <Cell
        title='\u81EA\u5B9A\u4E49\u56FE\u7247'
        isLink
        onClick={() =>
          Toast({
            message: '\u81EA\u5B9A\u4E49\u56FE\u7247',
            icon: (
              <Image width={36} src='https://img01.yzcdn.cn/vant/logo.png' />
            ),
          })
        }
      />
      <Cell
        title='\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807'
        isLink
        onClick={() =>
          Toast.loading({
            message: '\u52A0\u8F7D\u4E2D...',
            forbidClick: true,
            loadingType: 'spinner',
          })
        }
      />
    </>
  )
}
`}},key:"toast-icon",meta:{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"}};var E=()=>u(r,{children:[n(e,{title:"\u9876\u90E8\u5C55\u793A",isLink:!0,onClick:()=>t({message:"\u9876\u90E8\u5C55\u793A",position:"top"})}),n(e,{title:"\u5E95\u90E8\u5C55\u793A",isLink:!0,onClick:()=>t({message:"\u5E95\u90E8\u5C55\u793A",position:"bottom"})})]});const f=`import React from 'react'
import { Toast, Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell
        title='\u9876\u90E8\u5C55\u793A'
        isLink
        onClick={() =>
          Toast({
            message: '\u9876\u90E8\u5C55\u793A',
            position: 'top',
          })
        }
      />
      <Cell
        title='\u5E95\u90E8\u5C55\u793A'
        isLink
        onClick={() =>
          Toast({
            message: '\u5E95\u90E8\u5C55\u793A',
            position: 'bottom',
          })
        }
      />
    </>
  )
}
`,y={code:f,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Toast, Cell } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell
        title='\u9876\u90E8\u5C55\u793A'
        isLink
        onClick={() =>
          Toast({
            message: '\u9876\u90E8\u5C55\u793A',
            position: 'top',
          })
        }
      />
      <Cell
        title='\u5E95\u90E8\u5C55\u793A'
        isLink
        onClick={() =>
          Toast({
            message: '\u5E95\u90E8\u5C55\u793A',
            position: 'bottom',
          })
        }
      />
    </>
  )
}
`}},key:"toast-position",meta:{title:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"}};let c,o;var F=()=>u(r,{children:[n(e,{title:"\u5F00\u542F",children:n(m,{style:{display:"block",float:"right"},size:20,onChange:d=>{t.allowMultiple(d)}})}),n(e,{title:"\u7B2C\u4E00\u4E2AToast",isLink:!0,onClick:()=>c=t({type:"loading",message:"\u7B2C\u4E00\u4E2AToast",duration:0,position:"top"})}),n(e,{title:"\u7B2C\u4E8C\u4E2AToast",isLink:!0,onClick:()=>o=t({message:"\u7B2C\u4E8C\u4E2AToast",duration:0,position:"bottom"})}),n(e,{title:"\u6E05\u9664\u7B2C\u4E00\u4E2AToast",isLink:!0,onClick:()=>c.clear()}),n(e,{title:"\u6E05\u695A\u7B2C\u4E8C\u4E2AToast",isLink:!0,onClick:()=>o.clear()})]});const L=`import React from 'react'
import { Cell, Toast, Switch } from 'react-vant-nova'
import { ToastReturnType } from '../PropsType'

let t1: ToastReturnType
let t2: ToastReturnType

export default () => {
  return (
    <>
      <Cell title='\u5F00\u542F'>
        <Switch
          style={{ display: 'block', float: 'right' }}
          size={20}
          onChange={v => {
            Toast.allowMultiple(v)
          }}
        />
      </Cell>
      <Cell
        title='\u7B2C\u4E00\u4E2AToast'
        isLink
        onClick={() =>
          (t1 = Toast({
            type: 'loading',
            message: '\u7B2C\u4E00\u4E2AToast',
            duration: 0,
            position: 'top',
          }))
        }
      />
      <Cell
        title='\u7B2C\u4E8C\u4E2AToast'
        isLink
        onClick={() =>
          (t2 = Toast({
            message: '\u7B2C\u4E8C\u4E2AToast',
            duration: 0,
            position: 'bottom',
          }))
        }
      />

      <Cell title='\u6E05\u9664\u7B2C\u4E00\u4E2AToast' isLink onClick={() => t1.clear()} />
      <Cell title='\u6E05\u695A\u7B2C\u4E8C\u4E2AToast' isLink onClick={() => t2.clear()} />
    </>
  )
}
`,b={code:L,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell, Toast, Switch } from 'react-vant-nova'
import { ToastReturnType } from '../PropsType'

let t1: ToastReturnType
let t2: ToastReturnType

export default () => {
  return (
    <>
      <Cell title='\u5F00\u542F'>
        <Switch
          style={{ display: 'block', float: 'right' }}
          size={20}
          onChange={v => {
            Toast.allowMultiple(v)
          }}
        />
      </Cell>
      <Cell
        title='\u7B2C\u4E00\u4E2AToast'
        isLink
        onClick={() =>
          (t1 = Toast({
            type: 'loading',
            message: '\u7B2C\u4E00\u4E2AToast',
            duration: 0,
            position: 'top',
          }))
        }
      />
      <Cell
        title='\u7B2C\u4E8C\u4E2AToast'
        isLink
        onClick={() =>
          (t2 = Toast({
            message: '\u7B2C\u4E8C\u4E2AToast',
            duration: 0,
            position: 'bottom',
          }))
        }
      />

      <Cell title='\u6E05\u9664\u7B2C\u4E00\u4E2AToast' isLink onClick={() => t1.clear()} />
      <Cell title='\u6E05\u695A\u7B2C\u4E8C\u4E2AToast' isLink onClick={() => t2.clear()} />
    </>
  )
}
`}},key:"toast-multiple",meta:{title:"\u5355\u4F8B\u6A21\u5F0F"}},x=function({previewer:d=()=>null,api:l=()=>null}){const i=d;return n("div",{children:u("div",{children:[n("h1",{id:"","data-anchor":"",children:"Toast \u8F7B\u63D0\u793A"}),n("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),n("p",{children:"\u5728\u9875\u9762\u4E2D\u95F4\u5F39\u51FA\u9ED1\u8272\u534A\u900F\u660E\u63D0\u793A\uFF0C\u7528\u4E8E\u6D88\u606F\u901A\u77E5\u3001\u52A0\u8F7D\u63D0\u793A\u3001\u64CD\u4F5C\u7ED3\u679C\u63D0\u793A\u7B49\u573A\u666F\u3002"}),n("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),n(i,{code:"import { Toast } from 'react-vant-nova';",lang:"js"}),n("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),n("div",{children:n(i,{...D,children:n(a,{})})}),n("h3",{id:"-5","data-anchor":"-5",children:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A"}),n("p",{children:"\u6267\u884C Toast \u65B9\u6CD5\u65F6\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u7684 Toast \u5B9E\u4F8B\uFF0C\u901A\u8FC7\u4FEE\u6539\u5B9E\u4F8B\u4E0A\u7684 message \u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u66F4\u65B0\u63D0\u793A\u7684\u6548\u679C\u3002"}),n("div",{children:n(i,{...g,children:n(s,{})})}),n("h3",{id:"-6","data-anchor":"-6",children:"\u81EA\u5B9A\u4E49\u56FE\u6807"}),u("p",{children:["\u901A\u8FC7 ",n("code",{children:"icon"})," \u9009\u9879\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u901A\u8FC7",n("code",{children:"loadingType"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807\u7C7B\u578B\u3002"]}),n("div",{children:n(i,{...k,children:n(h,{})})}),n("h3",{id:"-7","data-anchor":"-7",children:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"}),u("p",{children:["Toast \u9ED8\u8BA4\u6E32\u67D3\u5728\u5C4F\u5E55\u6B63\u4E2D\u4F4D\u7F6E\uFF0C\u901A\u8FC7 ",n("code",{children:"position"})," \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236 Toast \u5C55\u793A\u7684\u4F4D\u7F6E\u3002"]}),n("div",{children:n(i,{...y,children:n(E,{})})}),n("h3",{id:"-8","data-anchor":"-8",children:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A"}),u("p",{children:["\u6267\u884C Toast \u65B9\u6CD5\u65F6\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u7684 Toast \u5B9E\u4F8B\uFF0C\u901A\u8FC7\u4FEE\u6539\u5B9E\u4F8B\u4E0A\u7684 ",n("code",{children:"message"})," \u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u66F4\u65B0\u63D0\u793A\u7684\u6548\u679C\u3002"]}),n(i,{code:`let remain = 4;
let timer;
const toast = Toast.info({
  message: \`\u8FD8\u5269 \${remain + 1} \u79D2\`,
  duration: 5000,
  onClose: () => clearInterval(timer),
});
timer = setInterval(() => {
  toast.config({ message: \`\u8FD8\u5269 \${remain--} \u79D2\` });
}, 1000);`,lang:"js"}),n("h3",{id:"-9","data-anchor":"-9",children:"\u591A\u4F8B\u6A21\u5F0F"}),n("p",{children:"Toast \u9ED8\u8BA4\u91C7\u7528\u5355\u4F8B\u6A21\u5F0F\uFF0C\u5373\u540C\u4E00\u65F6\u95F4\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A Toast\uFF0C\u5982\u679C\u9700\u8981\u5728\u540C\u4E00\u65F6\u95F4\u5F39\u51FA\u591A\u4E2A Toast\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u793A\u4F8B\uFF1A"}),n("div",{children:n(i,{...b,children:n(F,{})})}),n("h3",{id:"-10","data-anchor":"-10",children:"\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E"}),u("p",{children:["\u901A\u8FC7 ",n("code",{children:"Toast.setDefaultOptions"})," \u51FD\u6570\u53EF\u4EE5\u5168\u5C40\u4FEE\u6539 Toast \u7684\u9ED8\u8BA4\u914D\u7F6E\u3002"]}),n(i,{code:`Toast.setDefaultOptions({ duration: 2000 });

Toast.setDefaultOptions('loading', { forbidClick: true });

Toast.resetDefaultOptions();

Toast.resetDefaultOptions('loading');`,lang:"js"}),n("h2",{id:"-11","data-anchor":"-11",children:"API"}),n("h3",{id:"-12","data-anchor":"-12",children:"\u65B9\u6CD5"}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u65B9\u6CD5\u540D"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"Toast"}),n("td",{children:"\u5C55\u793A\u63D0\u793A"}),n("td",{children:n("code",{children:"options | message"})}),n("td",{children:"toast \u5B9E\u4F8B"})]}),u("tr",{children:[n("td",{children:"Toast.info"}),n("td",{children:"\u5C55\u793A\u6587\u5B57\u63D0\u793A"}),n("td",{children:n("code",{children:"options | message"})}),n("td",{children:"toast \u5B9E\u4F8B"})]}),u("tr",{children:[n("td",{children:"Toast.loading"}),n("td",{children:"\u5C55\u793A\u52A0\u8F7D\u63D0\u793A"}),n("td",{children:n("code",{children:"options | message"})}),n("td",{children:"toast \u5B9E\u4F8B"})]}),u("tr",{children:[n("td",{children:"Toast.success"}),n("td",{children:"\u5C55\u793A\u6210\u529F\u63D0\u793A"}),n("td",{children:n("code",{children:"options | message"})}),n("td",{children:"toast \u5B9E\u4F8B"})]}),u("tr",{children:[n("td",{children:"Toast.fail"}),n("td",{children:"\u5C55\u793A\u5931\u8D25\u63D0\u793A"}),n("td",{children:n("code",{children:"options | message"})}),n("td",{children:"toast \u5B9E\u4F8B"})]}),u("tr",{children:[n("td",{children:"Toast.clear"}),n("td",{children:"\u5173\u95ED\u63D0\u793A"}),n("td",{children:n("code",{children:"clearAll: boolean"})}),n("td",{children:n("code",{children:"void"})})]}),u("tr",{children:[n("td",{children:"Toast.allowMultiple"}),n("td",{children:"\u5141\u8BB8\u540C\u65F6\u5B58\u5728\u591A\u4E2A Toast"}),n("td",{children:"-"}),n("td",{children:n("code",{children:"void"})})]}),u("tr",{children:[n("td",{children:"Toast.setDefaultOptions"}),u("td",{children:["\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5BF9\u6240\u6709 Toast \u751F\u6548\u3002",n("br",{}),"\u4F20\u5165 type \u53EF\u4EE5\u4FEE\u6539\u6307\u5B9A\u7C7B\u578B\u7684\u9ED8\u8BA4\u914D\u7F6E"]}),n("td",{children:n("code",{children:"type | options"})}),n("td",{children:n("code",{children:"void"})})]}),u("tr",{children:[n("td",{children:"Toast.resetDefaultOptions"}),u("td",{children:["\u91CD\u7F6E\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5BF9\u6240\u6709 Toast \u751F\u6548\u3002",n("br",{}),"\u4F20\u5165 type \u53EF\u4EE5\u91CD\u7F6E\u6307\u5B9A\u7C7B\u578B\u7684\u9ED8\u8BA4\u914D\u7F6E"]}),n("td",{children:n("code",{children:"type"})}),n("td",{children:n("code",{children:"void"})})]})]})]}),n("h3",{id:"-13","data-anchor":"-13",children:"Options"}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"type"}),u("td",{children:["\u63D0\u793A\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",n("code",{children:"loading"})," ",n("code",{children:"success"})," ",n("code",{children:"fail"})," ",n("code",{children:"info"})]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"info"})})]}),u("tr",{children:[n("td",{children:"position"}),u("td",{children:["\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",n("code",{children:"top"})," ",n("code",{children:"bottom"})]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"middle"})})]}),u("tr",{children:[n("td",{children:"message"}),u("td",{children:["\u6587\u672C\u5185\u5BB9\uFF0C\u652F\u6301\u901A\u8FC7",n("code",{children:"\\n"}),"\u6362\u884C"]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"''"})})]}),u("tr",{children:[n("td",{children:"icon"}),n("td",{children:"\u81EA\u5B9A\u4E49\u56FE\u6807"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"iconSize"}),u("td",{children:["\u56FE\u6807\u5927\u5C0F\uFF0C\u5982 ",n("code",{children:"20px"})," ",n("code",{children:"2em"}),"\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",n("code",{children:"px"})]}),n("td",{children:n("em",{children:"number | string"})}),n("td",{children:n("code",{children:"36px"})})]}),u("tr",{children:[n("td",{children:"forbidClick"}),n("td",{children:"\u662F\u5426\u7981\u6B62\u80CC\u666F\u70B9\u51FB"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),u("tr",{children:[n("td",{children:"closeOnClick"}),n("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u540E\u5173\u95ED"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),u("tr",{children:[n("td",{children:"closeOnClickOverlay"}),n("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),u("tr",{children:[n("td",{children:"loadingType"}),u("td",{children:[n("a",{href:"/components/loading",children:"\u52A0\u8F7D\u56FE\u6807\u7C7B\u578B"}),", \u53EF\u9009\u503C\u4E3A ",n("code",{children:"spinner"})]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"circular"})})]}),u("tr",{children:[n("td",{children:"duration"}),n("td",{children:"\u5C55\u793A\u65F6\u957F(ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0Ctoast \u4E0D\u4F1A\u6D88\u5931"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:n("code",{children:"2000"})})]}),u("tr",{children:[n("td",{children:"className"}),n("td",{children:"\u81EA\u5B9A\u4E49\u7C7B\u540D"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"overlay"}),n("td",{children:"\u662F\u5426\u663E\u793A\u80CC\u666F\u906E\u7F69\u5C42"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),u("tr",{children:[n("td",{children:"overlayClass"}),n("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"overlayStyle"}),n("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F"}),n("td",{children:n("em",{children:"object"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"onOpened"}),n("td",{children:"\u5B8C\u5168\u5C55\u793A\u540E\u7684\u56DE\u8C03\u51FD\u6570"}),n("td",{children:n("em",{children:"Function"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"onClose"}),n("td",{children:"\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570"}),n("td",{children:n("em",{children:"Function"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"transition"}),n("td",{children:"\u52A8\u753B\u7C7B\u540D"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"rv-fade"})})]}),u("tr",{children:[n("td",{children:"teleport"}),n("td",{children:"\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9"}),u("td",{children:[n("em",{children:"HTMLElement"})," ",n("em",{children:"(() => HTMLElement))"})]}),n("td",{children:n("code",{children:"document.body"})})]})]})]}),n("h3",{id:"-14","data-anchor":"-14",children:"\u7C7B\u578B\u5B9A\u4E49"}),n("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),n(i,{code:"import type { ToastType, ToastOptions, ToastPosition } from 'react-vant-nova';",lang:"js"}),n("h2",{id:"-15","data-anchor":"-15",children:"\u4E3B\u9898\u5B9A\u5236"}),n("h3",{id:"-16","data-anchor":"-16",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",n("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u540D\u79F0"}),n("th",{children:"\u9ED8\u8BA4\u503C"}),n("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"--rv-toast-max-width"}),n("td",{children:n("em",{children:"70%"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-font-size"}),n("td",{children:n("em",{children:"var(--rv-font-size-md)"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-text-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-loading-icon-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-line-height"}),n("td",{children:n("em",{children:"var(--rv-line-height-md)"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-border-radius"}),n("td",{children:n("em",{children:"var(--rv-border-radius-lg)"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-background-color"}),n("td",{children:n("em",{children:"fade(var(--rv-black), 70%)"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-icon-size"}),n("td",{children:n("em",{children:"36px"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-text-min-width"}),n("td",{children:n("em",{children:"96px"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-text-padding"}),n("td",{children:n("em",{children:"var(--rv-padding-xs) var(--rv-padding-sm)"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-default-padding"}),n("td",{children:n("em",{children:"var(--rv-padding-md)"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-default-width"}),n("td",{children:n("em",{children:"88px"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-default-min-height"}),n("td",{children:n("em",{children:"88px"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-position-top-distance"}),n("td",{children:n("em",{children:"20%"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"--rv-toast-position-bottom-distance"}),n("td",{children:n("em",{children:"20%"})}),n("td",{children:"-"})]})]})]})]})})},M=[{Component:a,key:"toast-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:s,key:"toast-dynic",title:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A"},{Component:h,key:"toast-icon",title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{Component:E,key:"toast-position",title:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"},{Component:F,key:"toast-multiple",title:"\u5355\u4F8B\u6A21\u5F0F"}],_=void 0,P=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:2,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"},{depth:3,id:"-14"},{depth:2,id:"-15"},{depth:3,id:"-16"}],R="/src/components/toast/README.md",w="undefined",I="1766203394000";var N=d=>d.children({MdContent:x,demos:M,frontmatter:_,slugs:P,filePath:R,title:w,updatedTime:I});export{x as MdContent,N as default,M as demos,R as filePath,_ as frontmatter,P as slugs,w as title,I as updatedTime};
