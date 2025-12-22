import{a as e,F as r,j as u,r as A}from"./main.80adbde3.js";import{C as n,dL as t,dc as c,aj as m}from"./FloatingPanel.c796e2d9.js";var o=()=>e(r,{children:[u(n,{title:"\u5F39\u7A97\u63D0\u793A",isLink:!0,onClick:()=>t.confirm({title:"\u6807\u9898",message:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C",onCancel:()=>console.log("cancel"),onConfirm:()=>console.log("confirm")})}),u(n,{title:"\u5F39\u7A97\u63D0\u793A\uFF08\u65E0\u6807\u9898\uFF09",isLink:!0,onClick:()=>t.alert({message:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"})}),u(n,{title:"\u786E\u8BA4\u5F39\u6846",isLink:!0,onClick:()=>t.confirm({title:"\u6807\u9898",message:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"})})]});const D=`import React from 'react'
import { Cell, Dialog } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell
        title='\u5F39\u7A97\u63D0\u793A'
        isLink
        onClick={() =>
          Dialog.confirm({
            title: '\u6807\u9898',
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
            onCancel: () => console.log('cancel'),
            onConfirm: () => console.log('confirm'),
          })
        }
      />
      <Cell
        title='\u5F39\u7A97\u63D0\u793A\uFF08\u65E0\u6807\u9898\uFF09'
        isLink
        onClick={() =>
          Dialog.alert({
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
          })
        }
      />
      <Cell
        title='\u786E\u8BA4\u5F39\u6846'
        isLink
        onClick={() =>
          Dialog.confirm({
            title: '\u6807\u9898',
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
          })
        }
      />
    </>
  )
}
`,g={code:D,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell, Dialog } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell
        title='\u5F39\u7A97\u63D0\u793A'
        isLink
        onClick={() =>
          Dialog.confirm({
            title: '\u6807\u9898',
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
            onCancel: () => console.log('cancel'),
            onConfirm: () => console.log('confirm'),
          })
        }
      />
      <Cell
        title='\u5F39\u7A97\u63D0\u793A\uFF08\u65E0\u6807\u9898\uFF09'
        isLink
        onClick={() =>
          Dialog.alert({
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
          })
        }
      />
      <Cell
        title='\u786E\u8BA4\u5F39\u6846'
        isLink
        onClick={() =>
          Dialog.confirm({
            title: '\u6807\u9898',
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
          })
        }
      />
    </>
  )
}
`}},key:"dialog-base",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var a=()=>e(r,{children:[u(n,{title:"Dialog.alert",isLink:!0,onClick:async()=>{await t.alert({title:"\u6807\u9898",message:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"}),console.log("confirm")}}),u(n,{title:"Dialog.confirm",isLink:!0,onClick:async()=>{try{await t.confirm({title:"\u6807\u9898",message:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"}),console.log("confirm")}catch{console.log("cancel")}}})]});const B=`import React from 'react'
import { Cell, Dialog } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell
        title='Dialog.alert'
        isLink
        onClick={async () => {
          await Dialog.alert({
            title: '\u6807\u9898',
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
          })
          console.log('confirm')
        }}
      />
      <Cell
        title='Dialog.confirm'
        isLink
        onClick={async () => {
          try {
            await Dialog.confirm({
              title: '\u6807\u9898',
              message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
            })
            console.log('confirm')
          } catch (error) {
            console.log('cancel')
          }
        }}
      />
    </>
  )
}
`,p={code:B,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell, Dialog } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell
        title='Dialog.alert'
        isLink
        onClick={async () => {
          await Dialog.alert({
            title: '\u6807\u9898',
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
          })
          console.log('confirm')
        }}
      />
      <Cell
        title='Dialog.confirm'
        isLink
        onClick={async () => {
          try {
            await Dialog.confirm({
              title: '\u6807\u9898',
              message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
            })
            console.log('confirm')
          } catch (error) {
            console.log('cancel')
          }
        }}
      />
    </>
  )
}
`}},key:"dialog-promise",meta:{title:"Promise\u8C03\u7528",card:!0}};var h=()=>e(r,{children:[u(n,{title:"\u5706\u89D2\u6309\u94AE\u5F39\u7A97",isLink:!0,onClick:()=>t.alert({title:"\u6807\u9898",theme:"round-button",showCancelButton:!0,message:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"})}),u(n,{title:"\u5706\u89D2\u6309\u94AE\u5F39\u7A97\uFF08\u65E0\u6807\u9898\uFF09",isLink:!0,onClick:()=>t.alert({message:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C",theme:"round-button"})})]});const v=`import React from 'react'
import { Cell, Dialog } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell
        title='\u5706\u89D2\u6309\u94AE\u5F39\u7A97'
        isLink
        onClick={() =>
          Dialog.alert({
            title: '\u6807\u9898',
            theme: 'round-button',
            showCancelButton: true,
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
          })
        }
      />
      <Cell
        title='\u5706\u89D2\u6309\u94AE\u5F39\u7A97\uFF08\u65E0\u6807\u9898\uFF09'
        isLink
        onClick={() =>
          Dialog.alert({
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
            theme: 'round-button',
          })
        }
      />
    </>
  )
}
`,f={code:v,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell, Dialog } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell
        title='\u5706\u89D2\u6309\u94AE\u5F39\u7A97'
        isLink
        onClick={() =>
          Dialog.alert({
            title: '\u6807\u9898',
            theme: 'round-button',
            showCancelButton: true,
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
          })
        }
      />
      <Cell
        title='\u5706\u89D2\u6309\u94AE\u5F39\u7A97\uFF08\u65E0\u6807\u9898\uFF09'
        isLink
        onClick={() =>
          Dialog.alert({
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
            theme: 'round-button',
          })
        }
      />
    </>
  )
}
`}},key:"dialog-theme",meta:{title:"\u5706\u89D2\u6309\u94AE\u98CE\u683C",card:!0}};var s=()=>u(n,{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",isLink:!0,onClick:()=>t.alert({title:"\u6807\u9898",closeable:!0,theme:"round-button",message:u("div",{style:{textAlign:"center",margin:"16px"},children:"\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF1A\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"})})});const k=`import React from 'react'
import { Cell, Dialog } from 'react-vant-nova'

export default () => {
  return (
    <Cell
      title='\u81EA\u5B9A\u4E49\u5185\u5BB9'
      isLink
      onClick={() =>
        Dialog.alert({
          title: '\u6807\u9898',
          closeable: true,
          theme: 'round-button',
          message: (
            <div style={{ textAlign: 'center', margin: '16px' }}>
              \u81EA\u5B9A\u4E49\u5185\u5BB9\uFF1A\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
            </div>
          ),
        })
      }
    />
  )
}
`,b={code:k,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell, Dialog } from 'react-vant-nova'

export default () => {
  return (
    <Cell
      title='\u81EA\u5B9A\u4E49\u5185\u5BB9'
      isLink
      onClick={() =>
        Dialog.alert({
          title: '\u6807\u9898',
          closeable: true,
          theme: 'round-button',
          message: (
            <div style={{ textAlign: 'center', margin: '16px' }}>
              \u81EA\u5B9A\u4E49\u5185\u5BB9\uFF1A\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
            </div>
          ),
        })
      }
    />
  )
}
`}},key:"dialog-custom",meta:{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",card:!0}};var E=()=>e(r,{children:[u(n,{title:"\u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03",isLink:!0,onClick:()=>t.alert({title:"\u6807\u9898",message:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C",onClosed:()=>console.log("onClosed")})}),u(n,{title:"\u5F02\u6B65\u5173\u95ED",isLink:!0,onClick:()=>t.show({title:"\u6807\u9898",message:"\u5F39\u7A97\u5185\u5BB9",showCancelButton:!0,onCancel:()=>new Promise(i=>{setTimeout(()=>{i(!0),c.success({message:"\u53D6\u6D88\u6309\u94AE\u5F02\u6B65"})},3e3)}),onConfirm:()=>new Promise(i=>{setTimeout(()=>{i(!0),c.success({message:"\u786E\u8BA4\u6309\u94AE\u5F02\u6B65"})},3e3)})})})]});const y=`import React from 'react'
import { Cell, Dialog, Toast } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell
        title='\u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03'
        isLink
        onClick={() =>
          Dialog.alert({
            title: '\u6807\u9898',
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
            onClosed: () => console.log('onClosed'),
          })
        }
      />
      <Cell
        title='\u5F02\u6B65\u5173\u95ED'
        isLink
        onClick={() =>
          Dialog.show({
            title: '\u6807\u9898',
            message: '\u5F39\u7A97\u5185\u5BB9',
            showCancelButton: true,
            onCancel: () => {
              return new Promise(res => {
                setTimeout(() => {
                  res(true)
                  Toast.success({ message: '\u53D6\u6D88\u6309\u94AE\u5F02\u6B65' })
                }, 3000)
              })
            },
            onConfirm: () => {
              return new Promise(res => {
                setTimeout(() => {
                  res(true)
                  Toast.success({ message: '\u786E\u8BA4\u6309\u94AE\u5F02\u6B65' })
                }, 3000)
              })
            },
          })
        }
      />
    </>
  )
}
`,x={code:y,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell, Dialog, Toast } from 'react-vant-nova'

export default () => {
  return (
    <>
      <Cell
        title='\u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03'
        isLink
        onClick={() =>
          Dialog.alert({
            title: '\u6807\u9898',
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
            onClosed: () => console.log('onClosed'),
          })
        }
      />
      <Cell
        title='\u5F02\u6B65\u5173\u95ED'
        isLink
        onClick={() =>
          Dialog.show({
            title: '\u6807\u9898',
            message: '\u5F39\u7A97\u5185\u5BB9',
            showCancelButton: true,
            onCancel: () => {
              return new Promise(res => {
                setTimeout(() => {
                  res(true)
                  Toast.success({ message: '\u53D6\u6D88\u6309\u94AE\u5F02\u6B65' })
                }, 3000)
              })
            },
            onConfirm: () => {
              return new Promise(res => {
                setTimeout(() => {
                  res(true)
                  Toast.success({ message: '\u786E\u8BA4\u6309\u94AE\u5F02\u6B65' })
                }, 3000)
              })
            },
          })
        }
      />
    </>
  )
}
`}},key:"dialog-close",meta:{title:"\u5173\u95ED\u5F39\u51FA\u6846",card:!0}};var F=()=>e(r,{children:[u(n,{title:"\u5173\u95ED\u6309\u94AE",isLink:!0,onClick:()=>t.alert({title:"\u6807\u9898",closeable:!0,theme:"round-button",message:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"})}),u(n,{title:"\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE",isLink:!0,onClick:()=>t.alert({title:"\u6807\u9898",closeable:!0,closeIcon:u(m,{}),theme:"round-button",message:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"})})]});const L=`import React from 'react'
import { Cell, Dialog } from 'react-vant-nova'
import { Close } from '@react-vant/icons'

export default () => {
  return (
    <>
      <Cell
        title='\u5173\u95ED\u6309\u94AE'
        isLink
        onClick={() =>
          Dialog.alert({
            title: '\u6807\u9898',
            closeable: true,
            theme: 'round-button',
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
          })
        }
      />
      <Cell
        title='\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE'
        isLink
        onClick={() =>
          Dialog.alert({
            title: '\u6807\u9898',
            closeable: true,
            closeIcon: <Close />,
            theme: 'round-button',
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
          })
        }
      />
    </>
  )
}
`,P={code:L,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell, Dialog } from 'react-vant-nova'
import { Close } from '@react-vant/icons'

export default () => {
  return (
    <>
      <Cell
        title='\u5173\u95ED\u6309\u94AE'
        isLink
        onClick={() =>
          Dialog.alert({
            title: '\u6807\u9898',
            closeable: true,
            theme: 'round-button',
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
          })
        }
      />
      <Cell
        title='\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE'
        isLink
        onClick={() =>
          Dialog.alert({
            title: '\u6807\u9898',
            closeable: true,
            closeIcon: <Close />,
            theme: 'round-button',
            message: '\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C',
          })
        }
      />
    </>
  )
}
`}},key:"dialog-closeicon",meta:{title:"\u5173\u95ED\u6309\u94AE",card:!0}};var C=()=>{const[i,d]=A.exports.useState(!1);return e(r,{children:[u(n,{title:"\u7EC4\u4EF6\u8C03\u7528",isLink:!0,onClick:()=>d(!0)}),u(t,{visible:i,title:"\u6807\u9898",showCancelButton:!0,onConfirm:()=>{c.info("\u70B9\u51FB\u786E\u8BA4\u6309\u94AE"),d(!1)},onCancel:()=>d(!1),children:u("img",{className:"demo-dialog-img",src:"https://img.yzcdn.cn/vant/apple-3.jpg",alt:"2131"})})]})};const w=`import React, { useState } from 'react'
import { Cell, Dialog, Toast } from 'react-vant-nova'
import './style.less'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Cell title='\u7EC4\u4EF6\u8C03\u7528' isLink onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        title='\u6807\u9898'
        showCancelButton
        onConfirm={() => {
          Toast.info('\u70B9\u51FB\u786E\u8BA4\u6309\u94AE')
          setVisible(false)
        }}
        onCancel={() => setVisible(false)}
      >
        <img
          className='demo-dialog-img'
          src='https://img.yzcdn.cn/vant/apple-3.jpg'
          alt='2131'
        />
      </Dialog>
    </>
  )
}
`,_={code:w,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { Cell, Dialog, Toast } from 'react-vant-nova'
import './style.less'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Cell title='\u7EC4\u4EF6\u8C03\u7528' isLink onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        title='\u6807\u9898'
        showCancelButton
        onConfirm={() => {
          Toast.info('\u70B9\u51FB\u786E\u8BA4\u6309\u94AE')
          setVisible(false)
        }}
        onCancel={() => setVisible(false)}
      >
        <img
          className='demo-dialog-img'
          src='https://img.yzcdn.cn/vant/apple-3.jpg'
          alt='2131'
        />
      </Dialog>
    </>
  )
}
`},"style.less":{type:"FILE",value:`.demo-dialog-img {
  box-sizing: border-box;
  width: 100%;
  padding: 25px 20px 0;
}
`}},key:"dialog-component",meta:{title:"\u7EC4\u4EF6\u8C03\u7528",card:!0}},M=function({previewer:i=()=>null,api:d=()=>null}){const l=i;return u("div",{children:e("div",{children:[u("h1",{id:"","data-anchor":"",children:"Dialog \u5F39\u51FA\u6846"}),u("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),u("p",{children:"\u5F39\u51FA\u6A21\u6001\u6846\uFF0C\u5E38\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3001\u6D88\u606F\u786E\u8BA4\uFF0C\u6216\u5728\u5F53\u524D\u9875\u9762\u5185\u5B8C\u6210\u7279\u5B9A\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002"}),u("p",{children:"\u5F39\u51FA\u6846\u7EC4\u4EF6\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002"}),u("h3",{id:"-2","data-anchor":"-2",children:"\u51FD\u6570\u8C03\u7528"}),u("p",{children:"Dialog \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8C03\u7528\u540E\u4F1A\u76F4\u63A5\u5728\u9875\u9762\u4E2D\u5F39\u51FA\u76F8\u5E94\u7684\u6A21\u6001\u6846\u3002"}),u(l,{code:"import { Dialog } from 'react-vant-nova';",lang:"js"}),u("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"-4","data-anchor":"-4",children:"\u6D88\u606F\u63D0\u793A"}),u("p",{children:"\u7528\u4E8E\u63D0\u793A\u4E00\u4E9B\u6D88\u606F\uFF0C\u53EA\u5305\u542B\u4E00\u4E2A\u786E\u8BA4\u6309\u94AE\u3002"}),u(l,{...g,children:u(o,{})}),u("h3",{id:"-5","data-anchor":"-5",children:"Promise \u8C03\u7528"}),u("p",{children:"Dialog \u652F\u6301 promise"}),u(l,{...p,children:u(a,{})}),u("h3",{id:"-6","data-anchor":"-6",children:"\u5706\u89D2\u6309\u94AE\u98CE\u683C"}),e("p",{children:["\u5C06 theme \u9009\u9879\u8BBE\u7F6E\u4E3A ",u("code",{children:"round-button"})," \u53EF\u4EE5\u5C55\u793A\u5706\u89D2\u6309\u94AE\u98CE\u683C\u7684\u5F39\u7A97\u3002"]}),u(l,{...f,children:u(h,{})}),u("h3",{id:"-7","data-anchor":"-7",children:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"children"})," \u5C5E\u6027\u53EF\u4EE5\u4F20\u5165 ",u("code",{children:"ReactNode"}),", \u6765\u81EA\u5B9A\u4E49\u663E\u793A\u7684\u5185\u5BB9\u3002"]}),u(l,{...b,children:u(s,{})}),u("h3",{id:"-8","data-anchor":"-8",children:"\u5173\u95ED\u5F39\u51FA\u6846"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"onConfirm"})," \u548C ",u("code",{children:"onCancel"})," \u5C5E\u6027\u8FD4\u56DE",u("code",{children:"Promise"}),"\u51FD\u6570\uFF0C\u5728\u5F39\u7A97\u5173\u95ED\u524D\u8FDB\u884C\u7279\u5B9A\u64CD\u4F5C\u3002"]}),u(l,{...x,children:u(E,{})}),u("h3",{id:"-9","data-anchor":"-9",children:"\u5173\u95ED\u6309\u94AE"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"closeable"})," \u53EF\u4EE5\u663E\u793A\u5173\u95ED\u6309\u94AE\u4F60\uFF0C\u901A\u8FC7 ",u("code",{children:"closeIcon"})," \u53EF\u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9\u3002"]}),u(l,{...P,children:u(F,{})}),u("h3",{id:"-10","data-anchor":"-10",children:"\u7EC4\u4EF6\u8C03\u7528"}),u("p",{children:"\u5982\u679C\u9700\u8981\u5728\u5F39\u7A97\u5185\u5D4C\u5165\u7EC4\u4EF6\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u8C03\u7528\u7684\u65B9\u5F0F\u3002"}),u(l,{..._,children:u(C,{})}),u("h2",{id:"-11","data-anchor":"-11",children:"API"}),u("h3",{id:"-12","data-anchor":"-12",children:"\u65B9\u6CD5"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"Dialog"}),u("td",{children:"\u5F39\u7A97\u7EC4\u4EF6"}),u("td",{children:u("code",{children:"options"})}),u("td",{children:u("code",{children:"React.ReactNode"})})]}),e("tr",{children:[u("td",{children:"Dialog.show"}),u("td",{children:"\u5C55\u793A\u63D0\u793A\u5F39\u7A97"}),u("td",{children:u("code",{children:"options"})}),u("td",{children:u("code",{children:"Promise"})})]}),e("tr",{children:[u("td",{children:"Dialog.alert"}),u("td",{children:"\u5C55\u793A\u6D88\u606F\u63D0\u793A\u5F39\u7A97"}),u("td",{children:u("code",{children:"options"})}),u("td",{children:u("code",{children:"Promise"})})]}),e("tr",{children:[u("td",{children:"Dialog.confirm"}),u("td",{children:"\u5C55\u793A\u6D88\u606F\u786E\u8BA4\u5F39\u7A97"}),u("td",{children:u("code",{children:"options"})}),u("td",{children:u("code",{children:"Promise"})})]})]})]}),u("h4",{id:"-13","data-anchor":"-13",children:"\u6CE8\u610F"}),e("p",{children:["\u5BF9\u4E8E\u6307\u4EE4\u5F0F\u521B\u5EFA\u51FA\u6765\u7684 ",u("code",{children:"Dialog"}),"\uFF0C\u5E76\u4E0D\u4F1A\u611F\u77E5\u7236\u7EC4\u4EF6\u7684\u91CD\u6E32\u67D3\u548C\u5176\u4E2D ",u("code",{children:"state"})," \u7684\u66F4\u65B0\uFF0C\u56E0\u6B64\u4E0B\u9762\u8FD9\u79CD\u5199\u6CD5\u662F\u5B8C\u5168\u9519\u8BEF\u7684\uFF1A"]}),u(l,{code:`export default function App() {
  const [captcha, setCaptcha] = useState('');
  const showCaptcha = () => {
    return Dialog.confirm({
      title: '\u77ED\u4FE1\u9A8C\u8BC1',
      message: (
        <Field
          placeholder="\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
          value={captcha} // App \u4E2D captcha \u7684\u66F4\u65B0\u662F\u4E0D\u4F1A\u4F20\u9012\u5230 Dialog \u4E2D\u7684
          onChange={setCaptcha}
        />
      ),
    });
  };
  return <Button onClick={showCaptcha}>Show Dialog</Button>;
}`,lang:"jsx"}),u("blockquote",{children:e("p",{children:["\u5982\u679C\u4F60\u9700\u8981\u5728 ",u("code",{children:"Dialog"})," \u4E2D\u5305\u542B\u5F88\u591A\u590D\u6742\u7684\u72B6\u6001\u548C\u903B\u8F91\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528",u("strong",{children:"\u58F0\u660E\u5F0F"}),"\u7684\u8BED\u6CD5\uFF0C\u6216\u8005\u8003\u8651\u81EA\u5DF1\u5C06\u5185\u90E8\u72B6\u6001\u548C\u903B\u8F91\u5355\u72EC\u5C01\u88C5\u4E00\u4E2A\u7EC4\u4EF6\u51FA\u6765(",u("a",{href:"https://stackblitz.com/edit/react-ubsjro-tbmdt8?file=src%2FApp.tsx",children:"demo"}),")"]})}),u("h3",{id:"-14","data-anchor":"-14",children:"Props"}),e("p",{children:["\u901A\u8FC7\u51FD\u6570\u8C03\u7528 ",u("code",{children:"Dialog"})," \u65F6\uFF0C\u652F\u6301\u4F20\u5165\u4EE5\u4E0B\u9009\u9879\uFF1A"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"visible"}),u("td",{children:"\u662F\u5426\u663E\u793A\u5F39\u7A97"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"title"}),u("td",{children:"\u6807\u9898"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"width"}),e("td",{children:["\u5F39\u7A97\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"320px"})})]}),e("tr",{children:[u("td",{children:"message"}),e("td",{children:["\u6587\u672C\u5185\u5BB9\uFF0C\u652F\u6301\u901A\u8FC7",u("code",{children:"\\n"}),"\u6362\u884C"]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"messageAlign"}),e("td",{children:["\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A",u("code",{children:"left"})," ",u("code",{children:"right"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"center"})})]}),e("tr",{children:[u("td",{children:"theme"}),e("td",{children:["\u6837\u5F0F\u98CE\u683C\uFF0C\u53EF\u9009\u503C\u4E3A",u("code",{children:"round"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"default"})})]}),e("tr",{children:[u("td",{children:"className"}),u("td",{children:"\u81EA\u5B9A\u4E49\u7C7B\u540D"}),u("td",{children:u("em",{children:"any"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"showConfirmButton"}),u("td",{children:"\u662F\u5426\u5C55\u793A\u786E\u8BA4\u6309\u94AE"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"showCancelButton"}),u("td",{children:"\u662F\u5426\u5C55\u793A\u53D6\u6D88\u6309\u94AE"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"confirmButtonText"}),u("td",{children:"\u786E\u8BA4\u6309\u94AE\u6587\u6848"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"\u786E\u8BA4"})})]}),e("tr",{children:[u("td",{children:"confirmButtonColor"}),u("td",{children:"\u786E\u8BA4\u6309\u94AE\u989C\u8272"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"#ee0a24"})})]}),e("tr",{children:[u("td",{children:"cancelButtonText"}),u("td",{children:"\u53D6\u6D88\u6309\u94AE\u6587\u6848"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"\u53D6\u6D88"})})]}),e("tr",{children:[u("td",{children:"cancelButtonColor"}),u("td",{children:"\u53D6\u6D88\u6309\u94AE\u989C\u8272"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"black"})})]}),e("tr",{children:[u("td",{children:"overlay"}),u("td",{children:"\u662F\u5426\u5C55\u793A\u906E\u7F69\u5C42"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"overlayClass"}),u("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"overlayStyle"}),u("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F"}),u("td",{children:u("em",{children:"object"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"closeable"}),u("td",{children:"\u662F\u5426\u5C55\u793A\u5173\u95ED\u56FE\u6807"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"closeOnPopstate"}),u("td",{children:"\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"closeOnClickOverlay"}),u("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED\u5F39\u7A97"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"lockScroll"}),u("td",{children:"\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"transition"}),e("td",{children:["\u52A8\u753B\u7C7B\u540D ",u("a",{href:"https://reactcommunity.org/react-transition-group/",children:"see"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"onCancel"}),u("td",{children:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"Function"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"onConfirm"}),u("td",{children:"\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"Function"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"onClose"}),u("td",{children:"Dialog \u5173\u95ED\u65F6\u7684\u56DE\u8C03"}),u("td",{children:u("em",{children:"Function"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"onClosed"}),u("td",{children:"Dialog \u5B8C\u5168\u5173\u95ED\u65F6\u7684\u56DE\u8C03"}),u("td",{children:u("em",{children:"Function"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"teleport"}),u("td",{children:"\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9"}),u("td",{children:u("em",{children:"HTMLElement | () => HTMLElement"})}),u("td",{children:u("code",{children:"body"})})]}),e("tr",{children:[u("td",{children:"footer"}),u("td",{children:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u533A\u57DF"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"-15","data-anchor":"-15",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"-16","data-anchor":"-16",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-dialog-width"}),u("td",{children:u("em",{children:"320px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-small-screen-width"}),u("td",{children:u("em",{children:"90%"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-lg)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-transition"}),u("td",{children:u("em",{children:"var(--rv-animation-duration-base)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-border-radius"}),u("td",{children:u("em",{children:"16px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-background-color"}),u("td",{children:u("em",{children:"var(--rv-white)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-header-font-weight"}),u("td",{children:u("em",{children:"var(--rv-font-weight-bold)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-header-line-height"}),u("td",{children:u("em",{children:"24px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-header-padding-top"}),u("td",{children:u("em",{children:"26px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-header-isolated-padding"}),u("td",{children:u("em",{children:"var(--rv-padding-lg) 0"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-message-padding"}),u("td",{children:u("em",{children:"var(--rv-padding-lg)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-message-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-message-line-height"}),u("td",{children:u("em",{children:"var(--rv-line-height-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-message-max-height"}),u("td",{children:u("em",{children:"60vh"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-has-title-message-text-color"}),u("td",{children:u("em",{children:"var(--rv-gray-7)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-has-title-message-padding-top"}),u("td",{children:u("em",{children:"var(--rv-padding-xs)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-button-height"}),u("td",{children:u("em",{children:"48px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-round-button-height"}),u("td",{children:u("em",{children:"36px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-dialog-confirm-button-text-color"}),u("td",{children:u("em",{children:"var(--rv-danger-color)"})}),u("td",{children:"-"})]})]})]})]})})},R=[{Component:o,key:"dialog-base",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:a,key:"dialog-promise",title:"Promise\u8C03\u7528",card:!0},{Component:h,key:"dialog-theme",title:"\u5706\u89D2\u6309\u94AE\u98CE\u683C",card:!0},{Component:s,key:"dialog-custom",title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",card:!0},{Component:E,key:"dialog-close",title:"\u5173\u95ED\u5F39\u51FA\u6846",card:!0},{Component:F,key:"dialog-closeicon",title:"\u5173\u95ED\u6309\u94AE",card:!0},{Component:C,key:"dialog-component",title:"\u7EC4\u4EF6\u8C03\u7528",card:!0}],N=void 0,T=[{depth:1,id:""},{depth:2,id:"-1"},{depth:3,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:2,id:"-11"},{depth:3,id:"-12"},{depth:4,id:"-13"},{depth:3,id:"-14"},{depth:2,id:"-15"},{depth:3,id:"-16"}],I="/src/components/dialog/README.md",S="undefined",$="1766203394000";var V=i=>i.children({MdContent:M,demos:R,frontmatter:N,slugs:T,filePath:I,title:S,updatedTime:$});export{M as MdContent,V as default,R as demos,I as filePath,N as frontmatter,T as slugs,S as title,$ as updatedTime};
