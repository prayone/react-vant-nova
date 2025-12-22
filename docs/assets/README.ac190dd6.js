import{j as u,R as d,F as k,r as g,a as e}from"./main.af98c409.js";import{dp as c,dc as o,i as y}from"./FloatingPanel.788cd8cb.js";const P=[{text:"\u5357\u4EAC",value:0},{text:"\u82CF\u5DDE",value:1},{text:"\u5E38\u5DDE",value:2},{text:"\u6DEE\u5B89",value:3},{text:"\u626C\u5DDE",value:4},{text:"\u5357\u901A",value:5},{text:"\u5BBF\u8FC1",value:6},{text:"\u6CF0\u5DDE",value:7},{text:"\u65E0\u9521",value:8},{text:"\u957F\u6C99",value:9}];var D=()=>u(c,{title:"\u57FA\u7840\u4F7F\u7528",columns:P,onChange:(n,r,t)=>{console.log("\u9009\u4E2D\u9879: ",r),o.info(`\u9009\u4E2D\u503C${n}\uFF0C\u7D22\u5F15: ${t}`)},onCancel:()=>o.info("\u70B9\u51FB\u53D6\u6D88\u6309\u94AE"),onConfirm:()=>o.info("\u70B9\u51FB\u786E\u8BA4\u6309\u94AE")});const N=`import React from 'react'
import { Picker, Toast } from 'react-vant-nova'

const columns = [
  { text: '\u5357\u4EAC', value: 0 },
  { text: '\u82CF\u5DDE', value: 1 },
  { text: '\u5E38\u5DDE', value: 2 },
  { text: '\u6DEE\u5B89', value: 3 },
  { text: '\u626C\u5DDE', value: 4 },
  { text: '\u5357\u901A', value: 5 },
  { text: '\u5BBF\u8FC1', value: 6 },
  { text: '\u6CF0\u5DDE', value: 7 },
  { text: '\u65E0\u9521', value: 8 },
  { text: '\u957F\u6C99', value: 9 },
]

export default () => {
  return (
    <Picker
      title='\u57FA\u7840\u4F7F\u7528'
      columns={columns}
      onChange={(val: string, selectRow, index: number) => {
        console.log('\u9009\u4E2D\u9879: ', selectRow)
        Toast.info(\`\u9009\u4E2D\u503C\${val}\uFF0C\u7D22\u5F15: \${index}\`)
      }}
      onCancel={() => Toast.info('\u70B9\u51FB\u53D6\u6D88\u6309\u94AE')}
      onConfirm={() => Toast.info('\u70B9\u51FB\u786E\u8BA4\u6309\u94AE')}
    />
  )
}
`,R={code:N,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Picker, Toast } from 'react-vant-nova'

const columns = [
  { text: '\u5357\u4EAC', value: 0 },
  { text: '\u82CF\u5DDE', value: 1 },
  { text: '\u5E38\u5DDE', value: 2 },
  { text: '\u6DEE\u5B89', value: 3 },
  { text: '\u626C\u5DDE', value: 4 },
  { text: '\u5357\u901A', value: 5 },
  { text: '\u5BBF\u8FC1', value: 6 },
  { text: '\u6CF0\u5DDE', value: 7 },
  { text: '\u65E0\u9521', value: 8 },
  { text: '\u957F\u6C99', value: 9 },
]

export default () => {
  return (
    <Picker
      title='\u57FA\u7840\u4F7F\u7528'
      columns={columns}
      onChange={(val: string, selectRow, index: number) => {
        console.log('\u9009\u4E2D\u9879: ', selectRow)
        Toast.info(\`\u9009\u4E2D\u503C\${val}\uFF0C\u7D22\u5F15: \${index}\`)
      }}
      onCancel={() => Toast.info('\u70B9\u51FB\u53D6\u6D88\u6309\u94AE')}
      onConfirm={() => Toast.info('\u70B9\u51FB\u786E\u8BA4\u6309\u94AE')}
    />
  )
}
`}},key:"picker-base",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var m=()=>{const[n,r]=d.useState(["\u5468\u4E8C","\u665A\u4E0A"]);return u(c,{value:n,onChange:(t,E,i)=>{o(`\u5F53\u524D\u503C\uFF1A${t}, \u5F53\u524D\u7D22\u5F15\uFF1A${i}`),r(t)},columns:[["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94"],["\u4E0A\u5348","\u4E0B\u5348","\u665A\u4E0A"]]})};const _=`import React from 'react'
import { Picker, Toast } from 'react-vant-nova'

export default () => {
  const [value, setValue] = React.useState(['\u5468\u4E8C', '\u665A\u4E0A'])
  return (
    <Picker
      value={value}
      onChange={(val: string[], _, index) => {
        Toast(\`\u5F53\u524D\u503C\uFF1A\${val}, \u5F53\u524D\u7D22\u5F15\uFF1A\${index}\`)
        setValue(val)
      }}
      columns={[
        ['\u5468\u4E00', '\u5468\u4E8C', '\u5468\u4E09', '\u5468\u56DB', '\u5468\u4E94'],
        ['\u4E0A\u5348', '\u4E0B\u5348', '\u665A\u4E0A'],
      ]}
    />
  )
}
`,b={code:_,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Picker, Toast } from 'react-vant-nova'

export default () => {
  const [value, setValue] = React.useState(['\u5468\u4E8C', '\u665A\u4E0A'])
  return (
    <Picker
      value={value}
      onChange={(val: string[], _, index) => {
        Toast(\`\u5F53\u524D\u503C\uFF1A\${val}, \u5F53\u524D\u7D22\u5F15\uFF1A\${index}\`)
        setValue(val)
      }}
      columns={[
        ['\u5468\u4E00', '\u5468\u4E8C', '\u5468\u4E09', '\u5468\u56DB', '\u5468\u4E94'],
        ['\u4E0A\u5348', '\u4E0B\u5348', '\u665A\u4E0A'],
      ]}
    />
  )
}
`}},key:"picker-columns",meta:{title:"\u591A\u5217\u9009\u62E9",card:!0}},M=[{text:"\u6C5F\u82CF",value:"1",children:[{text:"\u82CF\u5DDE",value:"1-1",children:[{text:"\u59D1\u82CF\u533A",value:"1-1-1"},{text:"\u5434\u4E2D\u533A",value:"1-1-2"}]},{text:"\u626C\u5DDE",value:"1-2",children:[{text:"\u5E7F\u9675\u533A",value:"1-2-1"},{text:"\u9097\u6C5F\u533A",value:"1-2-2"}]}]},{text:"\u6D59\u6C5F",value:"2",children:[{text:"\u676D\u5DDE",value:"2-1",children:[{text:"\u897F\u6E56\u533A",value:"2-1-1"},{text:"\u4F59\u676D\u533A",value:"2-1-2"}]},{text:"\u6E29\u5DDE",value:"2-2",children:[{text:"\u9E7F\u57CE\u533A",value:"2-2-1"},{text:"\u74EF\u6D77\u533A",value:"2-2-2"}]}]}],V=[{cityName:"\u6D59\u6C5F",cities:[{cityName:"\u676D\u5DDE",cities:[{cityName:"\u897F\u6E56\u533A"},{cityName:"\u4F59\u676D\u533A"}]},{cityName:"\u6E29\u5DDE",cities:[{cityName:"\u9E7F\u57CE\u533A"},{cityName:"\u74EF\u6D77\u533A"}]}]},{cityName:"\u798F\u5EFA",cities:[{cityName:"\u798F\u5DDE",cities:[{cityName:"\u9F13\u697C\u533A"},{cityName:"\u53F0\u6C5F\u533A"}]},{cityName:"\u53A6\u95E8",cities:[{cityName:"\u601D\u660E\u533A"},{cityName:"\u6D77\u6CA7\u533A"}]}]}];var C=()=>{const[n,r]=d.useState(["2","2-2","2-2-2"]);return u(c,{value:n,onChange:r,columns:M})};const w=`import React from 'react'
import { Picker } from 'react-vant-nova'
import { cascaderData } from './data'

export default () => {
  const [value, setValue] = React.useState(['2', '2-2', '2-2-2'])
  return <Picker value={value} onChange={setValue} columns={cascaderData} />
}
`,S={code:w,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Picker } from 'react-vant-nova'
import { cascaderData } from './data'

export default () => {
  const [value, setValue] = React.useState(['2', '2-2', '2-2-2'])
  return <Picker value={value} onChange={setValue} columns={cascaderData} />
}
`},"data.ts":{type:"FILE",value:`export const cascaderData = [
  {
    text: '\u6C5F\u82CF',
    value: '1',
    children: [
      {
        text: '\u82CF\u5DDE',
        value: '1-1',
        children: [
          { text: '\u59D1\u82CF\u533A', value: '1-1-1' },
          { text: '\u5434\u4E2D\u533A', value: '1-1-2' },
        ],
      },
      {
        text: '\u626C\u5DDE',
        value: '1-2',
        children: [
          { text: '\u5E7F\u9675\u533A', value: '1-2-1' },
          { text: '\u9097\u6C5F\u533A', value: '1-2-2' },
        ],
      },
    ],
  },
  {
    text: '\u6D59\u6C5F',
    value: '2',
    children: [
      {
        text: '\u676D\u5DDE',
        value: '2-1',
        children: [
          { text: '\u897F\u6E56\u533A', value: '2-1-1' },
          { text: '\u4F59\u676D\u533A', value: '2-1-2' },
        ],
      },
      {
        text: '\u6E29\u5DDE',
        value: '2-2',
        children: [
          { text: '\u9E7F\u57CE\u533A', value: '2-2-1' },
          { text: '\u74EF\u6D77\u533A', value: '2-2-2' },
        ],
      },
    ],
  },
]

export const fieldNamesData = [
  {
    cityName: '\u6D59\u6C5F',
    cities: [
      {
        cityName: '\u676D\u5DDE',
        cities: [{ cityName: '\u897F\u6E56\u533A' }, { cityName: '\u4F59\u676D\u533A' }],
      },
      {
        cityName: '\u6E29\u5DDE',
        cities: [{ cityName: '\u9E7F\u57CE\u533A' }, { cityName: '\u74EF\u6D77\u533A' }],
      },
    ],
  },
  {
    cityName: '\u798F\u5EFA',
    cities: [
      {
        cityName: '\u798F\u5DDE',
        cities: [{ cityName: '\u9F13\u697C\u533A' }, { cityName: '\u53F0\u6C5F\u533A' }],
      },
      {
        cityName: '\u53A6\u95E8',
        cities: [{ cityName: '\u601D\u660E\u533A' }, { cityName: '\u6D77\u6CA7\u533A' }],
      },
    ],
  },
]
`}},key:"picker-cascader",meta:{title:"\u7EA7\u8054\u9009\u62E9",card:!0}},$={\u6D59\u6C5F:["\u676D\u5DDE","\u5B81\u6CE2","\u6E29\u5DDE","\u5609\u5174","\u6E56\u5DDE"],\u798F\u5EFA:["\u798F\u5DDE","\u53A6\u95E8","\u8386\u7530","\u4E09\u660E","\u6CC9\u5DDE"]};async function T(n){return new Promise(r=>setTimeout(r,n))}async function L(n){return await T(1e3),$[n]}var v=()=>{const[n,r]=d.useState(!1),[t,E]=d.useState(),[i,x]=d.useState([{text:"\u6D59\u6C5F",children:[]},{text:"\u798F\u5EFA",children:[]}]);return u(k,{children:u(c,{loading:n,value:t,columns:i,onChange:async F=>{const l=F[0];if(!l)return;if(i.some(a=>a.text===l&&a.children.length>0)){E(F);return}r(!0);const f=await L(l);r(!1),x(a=>a.map(h=>h.text===l?{...h,children:f.map(s=>({text:s,value:s}))}:h))}})})};const I=`import React from 'react'
import { Picker } from 'react-vant-nova'

const cities = {
  \u6D59\u6C5F: ['\u676D\u5DDE', '\u5B81\u6CE2', '\u6E29\u5DDE', '\u5609\u5174', '\u6E56\u5DDE'],
  \u798F\u5EFA: ['\u798F\u5DDE', '\u53A6\u95E8', '\u8386\u7530', '\u4E09\u660E', '\u6CC9\u5DDE'],
}

async function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

async function request(key: string) {
  await sleep(1000)
  return cities[key]
}

export default () => {
  const [loading, setLoading] = React.useState(false)
  const [value, setValue] = React.useState<string[]>()
  const [columns, setColumns] = React.useState([
    { text: '\u6D59\u6C5F', children: [] },
    { text: '\u798F\u5EFA', children: [] },
  ])

  return (
    <>
      <Picker
        loading={loading}
        value={value}
        columns={columns}
        onChange={async (values: string[]) => {
          const key = values[0]
          if (!key) return
          // \u5DF2\u8BF7\u6C42\u7684\u5FFD\u7565request
          if (
            columns.some(
              column => column.text === key && column.children.length > 0
            )
          ) {
            setValue(values)
            return
          }
          setLoading(true)
          const data = await request(key)
          setLoading(false)
          setColumns(columns =>
            columns.map(column => {
              if (column.text === key) {
                return {
                  ...column,
                  children: data.map(x => ({ text: x, value: x })),
                }
              }
              return column
            })
          )
        }}
      />
    </>
  )
}
`,q={code:I,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Picker } from 'react-vant-nova'

const cities = {
  \u6D59\u6C5F: ['\u676D\u5DDE', '\u5B81\u6CE2', '\u6E29\u5DDE', '\u5609\u5174', '\u6E56\u5DDE'],
  \u798F\u5EFA: ['\u798F\u5DDE', '\u53A6\u95E8', '\u8386\u7530', '\u4E09\u660E', '\u6CC9\u5DDE'],
}

async function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

async function request(key: string) {
  await sleep(1000)
  return cities[key]
}

export default () => {
  const [loading, setLoading] = React.useState(false)
  const [value, setValue] = React.useState<string[]>()
  const [columns, setColumns] = React.useState([
    { text: '\u6D59\u6C5F', children: [] },
    { text: '\u798F\u5EFA', children: [] },
  ])

  return (
    <>
      <Picker
        loading={loading}
        value={value}
        columns={columns}
        onChange={async (values: string[]) => {
          const key = values[0]
          if (!key) return
          // \u5DF2\u8BF7\u6C42\u7684\u5FFD\u7565request
          if (
            columns.some(
              column => column.text === key && column.children.length > 0
            )
          ) {
            setValue(values)
            return
          }
          setLoading(true)
          const data = await request(key)
          setLoading(false)
          setColumns(columns =>
            columns.map(column => {
              if (column.text === key) {
                return {
                  ...column,
                  children: data.map(x => ({ text: x, value: x })),
                }
              }
              return column
            })
          )
        }}
      />
    </>
  )
}
`}},key:"picker-dynic",meta:{title:"\u52A8\u6001\u8BBE\u7F6E\u9009\u9879",card:!0}};var p=()=>u(c,{loading:!0,columns:[["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94"],["\u4E0A\u5348","\u4E0B\u5348","\u665A\u4E0A"]]});const j=`import React from 'react'
import { Picker } from 'react-vant-nova'

export default () => {
  return (
    <Picker
      loading
      columns={[
        ['\u5468\u4E00', '\u5468\u4E8C', '\u5468\u4E09', '\u5468\u56DB', '\u5468\u4E94'],
        ['\u4E0A\u5348', '\u4E0B\u5348', '\u665A\u4E0A'],
      ]}
    />
  )
}
`,z={code:j,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Picker } from 'react-vant-nova'

export default () => {
  return (
    <Picker
      loading
      columns={[
        ['\u5468\u4E00', '\u5468\u4E8C', '\u5468\u4E09', '\u5468\u56DB', '\u5468\u4E94'],
        ['\u4E0A\u5348', '\u4E0B\u5348', '\u665A\u4E0A'],
      ]}
    />
  )
}
`}},key:"picker-loading",meta:{title:"\u52A0\u8F7D\u72B6\u6001",card:!0}},O=["\u5357\u4EAC","\u82CF\u5DDE","\u5E38\u5DDE","\u6DEE\u5B89","\u626C\u5DDE","\u5357\u901A","\u5BBF\u8FC1","\u6CF0\u5DDE","\u65E0\u9521"];var A=()=>{const[n,r]=g.exports.useState("\u5BBF\u8FC1");return u(c,{popup:{round:!0},value:n,title:"\u6807\u9898",columns:O,onConfirm:r,children:(t,E,i)=>u(y,{readOnly:!0,clickable:!0,label:"\u9009\u62E9\u57CE\u5E02",value:t||"",placeholder:"\u8BF7\u9009\u62E9\u57CE\u5E02",onClick:()=>i.open()})})};const H=`import React, { useState } from 'react'
import { Picker, Field } from 'react-vant-nova'

const columns = [
  '\u5357\u4EAC',
  '\u82CF\u5DDE',
  '\u5E38\u5DDE',
  '\u6DEE\u5B89',
  '\u626C\u5DDE',
  '\u5357\u901A',
  '\u5BBF\u8FC1',
  '\u6CF0\u5DDE',
  '\u65E0\u9521',
]

export default () => {
  const [value, setValue] = useState('\u5BBF\u8FC1')
  return (
    <Picker
      popup={{
        round: true,
      }}
      value={value}
      title='\u6807\u9898'
      columns={columns}
      onConfirm={setValue}
    >
      {(val: string, _, actions) => {
        return (
          <Field
            readOnly
            clickable
            label='\u9009\u62E9\u57CE\u5E02'
            value={val || ''}
            placeholder='\u8BF7\u9009\u62E9\u57CE\u5E02'
            onClick={() => actions.open()}
          />
        )
      }}
    </Picker>
  )
}
`,G={code:H,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { Picker, Field } from 'react-vant-nova'

const columns = [
  '\u5357\u4EAC',
  '\u82CF\u5DDE',
  '\u5E38\u5DDE',
  '\u6DEE\u5B89',
  '\u626C\u5DDE',
  '\u5357\u901A',
  '\u5BBF\u8FC1',
  '\u6CF0\u5DDE',
  '\u65E0\u9521',
]

export default () => {
  const [value, setValue] = useState('\u5BBF\u8FC1')
  return (
    <Picker
      popup={{
        round: true,
      }}
      value={value}
      title='\u6807\u9898'
      columns={columns}
      onConfirm={setValue}
    >
      {(val: string, _, actions) => {
        return (
          <Field
            readOnly
            clickable
            label='\u9009\u62E9\u57CE\u5E02'
            value={val || ''}
            placeholder='\u8BF7\u9009\u62E9\u57CE\u5E02'
            onClick={() => actions.open()}
          />
        )
      }}
    </Picker>
  )
}
`}},key:"picker-popup",meta:{title:"\u542F\u7528\u5F39\u51FA\u5C42"}};var B=()=>{const[n,r]=d.useState(["\u798F\u5EFA","\u798F\u5DDE","\u53F0\u6C5F\u533A"]);return u(c,{title:"\u6807\u9898",value:n,onChange:r,columns:V,columnsFieldNames:{text:"cityName",children:"cities"}})};const J=`import React from 'react'
import { Picker } from 'react-vant-nova'
import { fieldNamesData } from './data'

export default () => {
  const [value, setValue] = React.useState(['\u798F\u5EFA', '\u798F\u5DDE', '\u53F0\u6C5F\u533A'])
  return (
    <Picker
      title='\u6807\u9898'
      value={value}
      onChange={setValue}
      columns={fieldNamesData}
      columnsFieldNames={{
        text: 'cityName',
        children: 'cities',
      }}
    />
  )
}
`,K={code:J,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Picker } from 'react-vant-nova'
import { fieldNamesData } from './data'

export default () => {
  const [value, setValue] = React.useState(['\u798F\u5EFA', '\u798F\u5DDE', '\u53F0\u6C5F\u533A'])
  return (
    <Picker
      title='\u6807\u9898'
      value={value}
      onChange={setValue}
      columns={fieldNamesData}
      columnsFieldNames={{
        text: 'cityName',
        children: 'cities',
      }}
    />
  )
}
`},"data.ts":{type:"FILE",value:`export const cascaderData = [
  {
    text: '\u6C5F\u82CF',
    value: '1',
    children: [
      {
        text: '\u82CF\u5DDE',
        value: '1-1',
        children: [
          { text: '\u59D1\u82CF\u533A', value: '1-1-1' },
          { text: '\u5434\u4E2D\u533A', value: '1-1-2' },
        ],
      },
      {
        text: '\u626C\u5DDE',
        value: '1-2',
        children: [
          { text: '\u5E7F\u9675\u533A', value: '1-2-1' },
          { text: '\u9097\u6C5F\u533A', value: '1-2-2' },
        ],
      },
    ],
  },
  {
    text: '\u6D59\u6C5F',
    value: '2',
    children: [
      {
        text: '\u676D\u5DDE',
        value: '2-1',
        children: [
          { text: '\u897F\u6E56\u533A', value: '2-1-1' },
          { text: '\u4F59\u676D\u533A', value: '2-1-2' },
        ],
      },
      {
        text: '\u6E29\u5DDE',
        value: '2-2',
        children: [
          { text: '\u9E7F\u57CE\u533A', value: '2-2-1' },
          { text: '\u74EF\u6D77\u533A', value: '2-2-2' },
        ],
      },
    ],
  },
]

export const fieldNamesData = [
  {
    cityName: '\u6D59\u6C5F',
    cities: [
      {
        cityName: '\u676D\u5DDE',
        cities: [{ cityName: '\u897F\u6E56\u533A' }, { cityName: '\u4F59\u676D\u533A' }],
      },
      {
        cityName: '\u6E29\u5DDE',
        cities: [{ cityName: '\u9E7F\u57CE\u533A' }, { cityName: '\u74EF\u6D77\u533A' }],
      },
    ],
  },
  {
    cityName: '\u798F\u5EFA',
    cities: [
      {
        cityName: '\u798F\u5DDE',
        cities: [{ cityName: '\u9F13\u697C\u533A' }, { cityName: '\u53F0\u6C5F\u533A' }],
      },
      {
        cityName: '\u53A6\u95E8',
        cities: [{ cityName: '\u601D\u660E\u533A' }, { cityName: '\u6D77\u6CA7\u533A' }],
      },
    ],
  },
]
`}},key:"picker-columnsfieldnames",meta:{title:"\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784",card:!0}},Q=function({previewer:n=()=>null,api:r=()=>null}){const t=n;return u("div",{children:e("div",{children:[u("h1",{id:"","data-anchor":"",children:"Picker \u9009\u62E9\u5668"}),u("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:["\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u652F\u6301\u5355\u5217\u9009\u62E9\u548C\u591A\u5217\u7EA7\u8054\uFF0C\u901A\u5E38\u4E0E",u("a",{href:"/components/popup",children:"\u5F39\u51FA\u5C42"}),"\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002"]}),u("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),u(t,{code:"import { Picker } from 'react-vant-nova';",lang:"js"}),u("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),e("ul",{children:[e("li",{children:["Picker \u7EC4\u4EF6\u901A\u8FC7 ",u("code",{children:"columns"})," \u5C5E\u6027\u914D\u7F6E\u9009\u9879\u6570\u636E\uFF0C",u("code",{children:"columns"})," \u662F\u4E00\u4E2A\u5305\u542B\u5B57\u7B26\u4E32\u6216\u5BF9\u8C61\u7684\u6570\u7EC4\u3002"]}),e("li",{children:["\u9876\u90E8\u680F\u5305\u542B\u6807\u9898\u3001\u786E\u8BA4\u6309\u94AE\u548C\u53D6\u6D88\u6309\u94AE\uFF0C\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u89E6\u53D1 ",u("code",{children:"confirm"})," \u4E8B\u4EF6\uFF0C\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u89E6\u53D1 ",u("code",{children:"cancel"})," \u4E8B\u4EF6\u3002"]}),e("li",{children:["\u9009\u9879\u53EF\u4EE5\u4E3A\u5BF9\u8C61\u7ED3\u6784\uFF0C\u901A\u8FC7\u8BBE\u7F6E ",u("code",{children:"disabled"})," \u6765\u7981\u7528\u8BE5\u9009\u9879\u3002"]})]}),u(t,{...R,children:u(D,{})}),u("h3",{id:"-5","data-anchor":"-5",children:"\u591A\u5217\u9009\u62E9"}),e("p",{children:[u("code",{children:"columns"})," \u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8C61\u6570\u7EC4\u7684\u5F62\u5F0F\u914D\u7F6E\u591A\u5217\u9009\u62E9\uFF0C\u5BF9\u8C61\u4E2D\u53EF\u4EE5\u914D\u7F6E\u9009\u9879\u6570\u636E\u3001\u521D\u59CB\u9009\u4E2D\u9879\u7B49\uFF0C\u8BE6\u7EC6\u683C\u5F0F\u89C1",u("a",{href:"/components/picker#pickercolumn-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84",children:"\u4E0B\u65B9\u8868\u683C"}),"\u3002"]}),u(t,{...b,children:u(m,{})}),u("h3",{id:"-6","data-anchor":"-6",children:"\u7EA7\u8054\u9009\u62E9"}),e("p",{children:["\u4F7F\u7528 ",u("code",{children:"columns"})," \u7684 ",u("code",{children:"children"})," \u5B57\u6BB5\u53EF\u4EE5\u5B9E\u73B0\u9009\u9879\u7EA7\u8054\u7684\u6548\u679C\uFF0C",u("code",{children:"value"})," \u5B57\u6BB5\u53EF\u4EE5\u6307\u5B9A\u9009\u9879\u8FD4\u56DE\u503C"]}),u(t,{...S,children:u(C,{})}),u("blockquote",{children:u("p",{children:"\u7EA7\u8054\u9009\u62E9\u7684\u6570\u636E\u5D4C\u5957\u6DF1\u5EA6\u9700\u8981\u4FDD\u6301\u4E00\u81F4\uFF0C\u5982\u679C\u90E8\u5206\u9009\u9879\u6CA1\u6709\u5B50\u9009\u9879\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7A7A\u5B57\u7B26\u4E32\u8FDB\u884C\u5360\u4F4D"})}),u("h3",{id:"-7","data-anchor":"-7",children:"\u52A8\u6001\u8BBE\u7F6E\u9009\u9879"}),e("p",{children:["\u901A\u8FC7 Picker \u4E0A\u7684\u5B9E\u4F8B\u65B9\u6CD5\u53EF\u4EE5\u66F4\u7075\u6D3B\u5730\u63A7\u5236\u9009\u62E9\u5668\uFF0C\u6BD4\u5982\u4F7F\u7528 ",u("code",{children:"setColumnValues"})," \u65B9\u6CD5\u5B9E\u73B0\u591A\u5217\u8054\u52A8\u3002"]}),u(t,{...q,children:u(v,{})}),u("h3",{id:"-8","data-anchor":"-8",children:"\u52A0\u8F7D\u72B6\u6001"}),e("p",{children:["\u82E5\u9009\u62E9\u5668\u6570\u636E\u662F\u5F02\u6B65\u83B7\u53D6\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"loading"})," \u5C5E\u6027\u663E\u793A\u52A0\u8F7D\u63D0\u793A\u3002"]}),u(t,{...z,children:u(p,{})}),u("h3",{id:"-9","data-anchor":"-9",children:"\u542F\u7528\u5F39\u51FA\u5C42"}),e("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"popup"})," \u5C5E\u6027\u542F\u7528\u5F39\u51FA\u5C42\u7279\u6027"]}),u(t,{...G,children:u(A,{})}),u("blockquote",{children:e("p",{children:["\u542F\u7528 ",u("code",{children:"popup"})," \u5C5E\u6027\u540E\uFF0C\u4E00\u822C\u4F7F\u7528 ",u("code",{children:"onConfirm"})," \u4E8B\u4EF6\u4EE3\u66FF ",u("code",{children:"onChange"})," \u66F4\u65B0\u5916\u90E8\u503C"]})}),u("h3",{id:"-10","data-anchor":"-10",children:"\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784"}),u(t,{...K,children:u(B,{})}),u("h2",{id:"-11","data-anchor":"-11",children:"API"}),u("h3",{id:"-12","data-anchor":"-12",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"value"}),u("td",{children:"\u9009\u4E2D\u9879"}),u("td",{children:u("em",{children:"string|string[]"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"defaultValue"}),u("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u9879"}),u("td",{children:u("em",{children:"string|string[]"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"columns"}),u("td",{children:"\u5BF9\u8C61\u6570\u7EC4\uFF0C\u914D\u7F6E\u6BCF\u4E00\u5217\u663E\u793A\u7684\u6570\u636E"}),u("td",{children:u("em",{children:"PickerColumn| PickerColumn[]"})}),u("td",{children:u("code",{children:"[]"})})]}),e("tr",{children:[u("td",{children:"columnsFieldNames"}),e("td",{children:["\u81EA\u5B9A\u4E49 ",u("code",{children:"columns"})," \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5"]}),u("td",{children:u("em",{children:"object"})}),u("td",{children:e("code",{children:["{"," text: 'text', value: 'value', children: 'children' ","}"]})})]}),e("tr",{children:[u("td",{children:"title"}),u("td",{children:"\u9876\u90E8\u680F\u6807\u9898"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"placeholder"}),u("td",{children:"\u5360\u4F4D\u7B26\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode|ReactNode[]"})}),u("td",{children:u("code",{children:"\u8BF7\u9009\u62E9"})})]}),e("tr",{children:[u("td",{children:"confirmButtonText"}),u("td",{children:"\u786E\u8BA4\u6309\u94AE\u6587\u5B57"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"\u786E\u8BA4"})})]}),e("tr",{children:[u("td",{children:"cancelButtonText"}),u("td",{children:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"\u53D6\u6D88"})})]}),e("tr",{children:[u("td",{children:"toolbar"}),u("td",{children:"\u81EA\u5B9A\u4E49\u6574\u4E2A\u9876\u90E8\u680F\u7684\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"toolbarPosition"}),e("td",{children:["\u9876\u90E8\u680F\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"bottom"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"top"})})]}),e("tr",{children:[u("td",{children:"columnsTop"}),u("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"columnsBottom"}),u("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u4E0B\u65B9\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"optionRender"}),u("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u5185\u5BB9"}),u("td",{children:u("em",{children:"(option: string | object) => ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"loading"}),u("td",{children:"\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"showToolbar"}),u("td",{children:"\u662F\u5426\u663E\u793A\u9876\u90E8\u680F"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"itemHeight"}),e("td",{children:["\u9009\u9879\u9AD8\u5EA6\uFF0C\u652F\u6301 ",u("code",{children:"px"})," ",u("code",{children:"vw"})," ",u("code",{children:"vh"})," ",u("code",{children:"rem"})," \u5355\u4F4D\uFF0C\u9ED8\u8BA4 ",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"44"})})]}),e("tr",{children:[u("td",{children:"visibleItemCount"}),u("td",{children:"\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"6"})})]}),e("tr",{children:[u("td",{children:"swipeDuration"}),e("td",{children:["\u5FEB\u901F\u6ED1\u52A8\u65F6\u60EF\u6027\u6EDA\u52A8\u7684\u65F6\u957F\uFF0C\u5355\u4F4D ",u("code",{children:"ms"})]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"300"})})]})]})]}),u("h3",{id:"-13","data-anchor":"-13",children:"Events"}),u("p",{children:"\u5F53\u9009\u62E9\u5668\u6709\u591A\u5217\u65F6\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u53C2\u6570\u4F1A\u8FD4\u56DE\u6570\u7EC4\u3002"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u4E8B\u4EF6\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"onConfirm"}),u("td",{children:"\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:["\u5355\u5217\uFF1A\u9009\u4E2D\u503C\uFF0C\u9009\u62E9\u9879\uFF0C\u9009\u4E2D\u9879\u5BF9\u5E94\u7684\u7D22\u5F15",u("br",{}),"\u591A\u5217\uFF1A\u6240\u6709\u5217\u9009\u4E2D\u503C\uFF0C\u6240\u6709\u5217\u9009\u4E2D\u9879\uFF0C\u6240\u6709\u5217\u9009\u4E2D\u9879\u5BF9\u5E94\u7684\u7D22\u5F15"]})]}),e("tr",{children:[u("td",{children:"onChange"}),u("td",{children:"\u9009\u9879\u6539\u53D8\u65F6\u89E6\u53D1"}),e("td",{children:["\u5355\u5217\uFF1A\u9009\u4E2D\u503C\uFF0C\u9009\u62E9\u9879\uFF0C\u9009\u4E2D\u9879\u5BF9\u5E94\u7684\u7D22\u5F15",u("br",{}),"\u591A\u5217\uFF1A\u6240\u6709\u5217\u9009\u4E2D\u503C\uFF0C\u6240\u6709\u5217\u9009\u4E2D\u9879\uFF0C\u6240\u6709\u5217\u9009\u4E2D\u9879\u5BF9\u5E94\u7684\u7D22\u5F15"]})]}),e("tr",{children:[u("td",{children:"onCancel"}),u("td",{children:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1"}),u("td",{children:"-"})]})]})]}),u("h3",{id:"-14","data-anchor":"-14",children:"PickerColumn \u6570\u636E\u7ED3\u6784"}),u(t,{code:`export type PickerColumnOption = {
  text?: React.ReactNode;
  value?: string;
  children?: PickerColumnOption[];
  disabled?: boolean;
} & Record<string, any>;

export type PickerColumn<T = PickerColumnOption> = (string | T)[];`,lang:"ts"}),u("h3",{id:"-15","data-anchor":"-15",children:"\u65B9\u6CD5"}),e("p",{children:["\u5F00\u542F ",u("code",{children:"popup"})," \u5C5E\u6027\u540E, \u901A\u8FC7 ",u("code",{children:"ref"})," \u53EF\u4EE5\u83B7\u53D6\u5230 ",u("code",{children:"Picker"})," \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1",u("a",{href:"/guide/advanced-usage#zu-jian-shi-li-fang-fa",children:"\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"open"}),u("td",{children:"\u663E\u793A Picker"}),u("td",{children:u("em",{children:"() => void"})})]}),e("tr",{children:[u("td",{children:"close"}),u("td",{children:"\u5173\u95ED Picker"}),u("td",{children:u("em",{children:"() => void"})})]}),e("tr",{children:[u("td",{children:"toggle"}),u("td",{children:"\u5207\u6362 Picker \u7684\u663E\u793A\u548C\u9690\u85CF\u72B6\u6001"}),u("td",{children:u("em",{children:"() => void"})})]})]})]}),u("h3",{id:"-16","data-anchor":"-16",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"PickerPopupActions"})," \u83B7\u53D6 Picker \u5B9E\u4F8B\u7684\u7C7B\u578B\u5B9A\u4E49\u3002"]}),u(t,{code:`import { useRef } from 'react';
import type { PickerPopupActions } from 'react-vant-nova';

const pickerRef = useRef<PickerPopupActions>();

pickerRef.current?.open();`,lang:"ts"}),u("h2",{id:"-17","data-anchor":"-17",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"-18","data-anchor":"-18",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-picker-background-color"}),u("td",{children:u("em",{children:"var(--rv-white)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-toolbar-height"}),u("td",{children:u("em",{children:"44px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-title-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-lg)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-title-line-height"}),u("td",{children:u("em",{children:"var(--rv-line-height-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-action-padding"}),u("td",{children:u("em",{children:"0 var(--rv-padding-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-action-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-confirm-action-color"}),u("td",{children:u("em",{children:"var(--rv-text-link-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-cancel-action-color"}),u("td",{children:u("em",{children:"var(--rv-gray-6)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-option-padding"}),u("td",{children:u("em",{children:"0 var(--rv-padding-base)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-option-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-lg)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-option-text-color"}),u("td",{children:u("em",{children:"var(--rv-black)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-option-disabled-opacity"}),u("td",{children:u("em",{children:"0.3"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-loading-icon-color"}),u("td",{children:u("em",{children:"var(--rv-primary-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-loading-mask-color"}),u("td",{children:u("em",{children:"rgba(255, 255, 255, 0.9)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-mask-background-image"}),u("td",{children:e("em",{children:["linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),",u("br",{})," linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))"]})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"-19","data-anchor":"-19",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"-20","data-anchor":"-20",children:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F"}),e("p",{children:["\u53C2\u89C1",u("a",{href:"/guide/advanced-usage",children:"\u684C\u9762\u7AEF\u9002\u914D"}),"\u3002"]})]})})},U=[{Component:D,key:"picker-base",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:m,key:"picker-columns",title:"\u591A\u5217\u9009\u62E9",card:!0},{Component:C,key:"picker-cascader",title:"\u7EA7\u8054\u9009\u62E9",card:!0},{Component:v,key:"picker-dynic",title:"\u52A8\u6001\u8BBE\u7F6E\u9009\u9879",card:!0},{Component:p,key:"picker-loading",title:"\u52A0\u8F7D\u72B6\u6001",card:!0},{Component:A,key:"picker-popup",title:"\u542F\u7528\u5F39\u51FA\u5C42"},{Component:B,key:"picker-columnsfieldnames",title:"\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784",card:!0}],W=void 0,X=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:2,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"},{depth:3,id:"-14"},{depth:3,id:"-15"},{depth:3,id:"-16"},{depth:2,id:"-17"},{depth:3,id:"-18"},{depth:2,id:"-19"},{depth:3,id:"-20"}],Y="/src/components/picker/README.md",Z="undefined",uu="1766203394000";var tu=n=>n.children({MdContent:Q,demos:U,frontmatter:W,slugs:X,filePath:Y,title:Z,updatedTime:uu});export{Q as MdContent,tu as default,U as demos,Y as filePath,W as frontmatter,X as slugs,Z as title,uu as updatedTime};
