import{j as e,a as u,R as o}from"./main.7fa1bdd8.js";import{dr as t,dd as A,aW as g,dM as D,dj as i,B as y}from"./Table.5f9604fd.js";const b=[{url:"https://img.yzcdn.cn/vant/sand.jpg"},{url:"https://img.yzcdn.cn/vant/sand.text"}];var F=()=>e(t,{accept:"*",defaultValue:b,onChange:n=>console.log(n)});const x=`import React from 'react'
import { Uploader } from 'react-vant-nova'
import './style.less'

const defaultValue = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg', // \u56FE\u7247\u6587\u4EF6
  },
  {
    url: 'https://img.yzcdn.cn/vant/sand.text', // \u5176\u4ED6\u6587\u4EF6
  },
]

export default () => {
  return (
    <Uploader
      accept='*'
      defaultValue={defaultValue}
      onChange={v => console.log(v)}
    />
  )
}
`,U={code:x,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Uploader } from 'react-vant-nova'
import './style.less'

const defaultValue = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg', // \u56FE\u7247\u6587\u4EF6
  },
  {
    url: 'https://img.yzcdn.cn/vant/sand.text', // \u5176\u4ED6\u6587\u4EF6
  },
]

export default () => {
  return (
    <Uploader
      accept='*'
      defaultValue={defaultValue}
      onChange={v => console.log(v)}
    />
  )
}
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .avatar {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    height: 200px;
    border-radius: 20px;
    width: 100%;
    .rv-uploader__preview {
      margin: 0;
      border-radius: 50%;
    }
  }
}
`}},key:"uploader-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},_="https://nextjs-upload-service.vercel.app/api/upload",l=async n=>{try{const d=new FormData;return d.append("source",n),(await(await fetch(_,{method:"POST",body:d})).json()).image}catch{return{url:`demo_path/${n.name}`}}},a=[{url:"https://img.yzcdn.cn/vant/sand.jpg",filename:"\u56FE\u7247\u540D\u79F0"},{url:"https://img.yzcdn.cn/vant/tree.jpg",filename:"\u56FE\u7247\u540D\u79F0"}];var m=()=>e(t,{defaultValue:a,upload:l});const k=`import React from 'react'
import { Uploader } from 'react-vant-nova'
import { upload, demoData } from './utils'
import './style.less'

export default () => {
  return <Uploader defaultValue={demoData} upload={upload} />
}
`,I={code:k,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Uploader } from 'react-vant-nova'
import { upload, demoData } from './utils'
import './style.less'

export default () => {
  return <Uploader defaultValue={demoData} upload={upload} />
}
`},"utils.ts":{type:"FILE",value:`const DEMO_UPLOAD_API = 'https://nextjs-upload-service.vercel.app/api/upload'

// \u5B9E\u9645\u4E1A\u52A1\u4E2D\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u5BF9\u5E94\u4E0A\u4F20\u903B\u8F91
export const upload = async (file: File) => {
  try {
    const body = new FormData()
    body.append('source', file)
    const resp = await fetch(DEMO_UPLOAD_API, {
      method: 'POST',
      body,
    })
    const json = await resp.json()
    // return\u5305\u542B url \u7684\u4E00\u4E2A\u5BF9\u8C61 \u4F8B\u5982: {url:'https://img.yzcdn.cn/vant/sand.jpg'}
    return json.image
  } catch (error) {
    return { url: \`demo_path/\${file.name}\` }
  }
}

export const demoData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
]
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .avatar {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    height: 200px;
    border-radius: 20px;
    width: 100%;
    .rv-uploader__preview {
      margin: 0;
      border-radius: 50%;
    }
  }
}
`}},key:"uploader-upload",meta:{title:"\u81EA\u52A8\u4E0A\u4F20"}};var E=()=>e(t,{multiple:!0,upload:l,defaultValue:[a[0]],maxCount:2,maxSize:15*1024,onOversize:()=>A.info("\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC715kb")});const P=`import React from 'react'
import { Toast, Uploader } from 'react-vant-nova'
import { demoData, upload } from './utils'
import './style.less'

export default () => {
  return (
    <Uploader
      multiple
      upload={upload}
      defaultValue={[demoData[0]]}
      maxCount={2}
      maxSize={15 * 1024}
      onOversize={() => Toast.info('\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC715kb')}
    />
  )
}
`,w={code:P,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Toast, Uploader } from 'react-vant-nova'
import { demoData, upload } from './utils'
import './style.less'

export default () => {
  return (
    <Uploader
      multiple
      upload={upload}
      defaultValue={[demoData[0]]}
      maxCount={2}
      maxSize={15 * 1024}
      onOversize={() => Toast.info('\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC715kb')}
    />
  )
}
`},"utils.ts":{type:"FILE",value:`const DEMO_UPLOAD_API = 'https://nextjs-upload-service.vercel.app/api/upload'

// \u5B9E\u9645\u4E1A\u52A1\u4E2D\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u5BF9\u5E94\u4E0A\u4F20\u903B\u8F91
export const upload = async (file: File) => {
  try {
    const body = new FormData()
    body.append('source', file)
    const resp = await fetch(DEMO_UPLOAD_API, {
      method: 'POST',
      body,
    })
    const json = await resp.json()
    // return\u5305\u542B url \u7684\u4E00\u4E2A\u5BF9\u8C61 \u4F8B\u5982: {url:'https://img.yzcdn.cn/vant/sand.jpg'}
    return json.image
  } catch (error) {
    return { url: \`demo_path/\${file.name}\` }
  }
}

export const demoData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
]
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .avatar {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    height: 200px;
    border-radius: 20px;
    width: 100%;
    .rv-uploader__preview {
      margin: 0;
      border-radius: 50%;
    }
  }
}
`}},key:"uploader-limit",meta:{title:"\u4E0A\u4F20\u9650\u5236"}};var v=()=>e(t,{defaultValue:a,upload:l,previewSize:60,uploadIcon:e(g,{}),previewCoverRender:n=>n.filename&&e("div",{style:{position:"absolute",bottom:0,width:" 100%",color:"#fff",fontSize:12,textAlign:"center",background:"#00000030"},children:n.filename})});const R=`import React from 'react'
import { Uploader } from 'react-vant-nova'
import { upload, demoData } from './utils'
import { Fire } from '@react-vant/icons'
import './style.less'

export default () => {
  return (
    <Uploader
      defaultValue={demoData}
      upload={upload}
      previewSize={60} // \u81EA\u5B9A\u4E49\u89C6\u56FE\u5C3A\u5BF8
      uploadIcon={<Fire />} // \u81EA\u5B9A\u4E49\u4E0A\u4F20\u56FE\u6807
      previewCoverRender={(
        item // \u81EA\u5B9A\u4E49\u9884\u89C8\u5185\u5BB9
      ) =>
        item.filename && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: ' 100%',
              color: '#fff',
              fontSize: 12,
              textAlign: 'center',
              background: '#00000030',
            }}
          >
            {item.filename}
          </div>
        )
      }
    />
  )
}
`,j={code:R,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Uploader } from 'react-vant-nova'
import { upload, demoData } from './utils'
import { Fire } from '@react-vant/icons'
import './style.less'

export default () => {
  return (
    <Uploader
      defaultValue={demoData}
      upload={upload}
      previewSize={60} // \u81EA\u5B9A\u4E49\u89C6\u56FE\u5C3A\u5BF8
      uploadIcon={<Fire />} // \u81EA\u5B9A\u4E49\u4E0A\u4F20\u56FE\u6807
      previewCoverRender={(
        item // \u81EA\u5B9A\u4E49\u9884\u89C8\u5185\u5BB9
      ) =>
        item.filename && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: ' 100%',
              color: '#fff',
              fontSize: 12,
              textAlign: 'center',
              background: '#00000030',
            }}
          >
            {item.filename}
          </div>
        )
      }
    />
  )
}
`},"utils.ts":{type:"FILE",value:`const DEMO_UPLOAD_API = 'https://nextjs-upload-service.vercel.app/api/upload'

// \u5B9E\u9645\u4E1A\u52A1\u4E2D\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u5BF9\u5E94\u4E0A\u4F20\u903B\u8F91
export const upload = async (file: File) => {
  try {
    const body = new FormData()
    body.append('source', file)
    const resp = await fetch(DEMO_UPLOAD_API, {
      method: 'POST',
      body,
    })
    const json = await resp.json()
    // return\u5305\u542B url \u7684\u4E00\u4E2A\u5BF9\u8C61 \u4F8B\u5982: {url:'https://img.yzcdn.cn/vant/sand.jpg'}
    return json.image
  } catch (error) {
    return { url: \`demo_path/\${file.name}\` }
  }
}

export const demoData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
]
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .avatar {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    height: 200px;
    border-radius: 20px;
    width: 100%;
    .rv-uploader__preview {
      margin: 0;
      border-radius: 50%;
    }
  }
}
`}},key:"uploader-preview",meta:{title:"\u81EA\u5B9A\u4E49\u9884\u89C8"}};var f=()=>e(t,{defaultValue:a,upload:l,onDelete:()=>D.confirm({title:"\u63D0\u793A",message:"\u786E\u8BA4\u5220\u9664?\u{1F914}"})});const z=`import React from 'react'
import { Uploader, Dialog } from 'react-vant-nova'
import { upload, demoData } from './utils'
import './style.less'

export default () => {
  return (
    <Uploader
      defaultValue={demoData}
      upload={upload}
      onDelete={() => Dialog.confirm({ title: '\u63D0\u793A', message: '\u786E\u8BA4\u5220\u9664?\u{1F914}' })}
    />
  )
}
`,M={code:z,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Uploader, Dialog } from 'react-vant-nova'
import { upload, demoData } from './utils'
import './style.less'

export default () => {
  return (
    <Uploader
      defaultValue={demoData}
      upload={upload}
      onDelete={() => Dialog.confirm({ title: '\u63D0\u793A', message: '\u786E\u8BA4\u5220\u9664?\u{1F914}' })}
    />
  )
}
`},"utils.ts":{type:"FILE",value:`const DEMO_UPLOAD_API = 'https://nextjs-upload-service.vercel.app/api/upload'

// \u5B9E\u9645\u4E1A\u52A1\u4E2D\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u5BF9\u5E94\u4E0A\u4F20\u903B\u8F91
export const upload = async (file: File) => {
  try {
    const body = new FormData()
    body.append('source', file)
    const resp = await fetch(DEMO_UPLOAD_API, {
      method: 'POST',
      body,
    })
    const json = await resp.json()
    // return\u5305\u542B url \u7684\u4E00\u4E2A\u5BF9\u8C61 \u4F8B\u5982: {url:'https://img.yzcdn.cn/vant/sand.jpg'}
    return json.image
  } catch (error) {
    return { url: \`demo_path/\${file.name}\` }
  }
}

export const demoData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
]
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .avatar {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    height: 200px;
    border-radius: 20px;
    width: 100%;
    .rv-uploader__preview {
      margin: 0;
      border-radius: 50%;
    }
  }
}
`}},key:"uploader-close",meta:{title:"\u5F02\u6B65\u5173\u95ED"}},V=n=>{const[d,r]=o.useState([]),c=o.useRef(0);return o.useEffect(()=>{n.value!==void 0&&(!d[0]||n.value!==d[0].url)&&r([{url:n.value,id:c.current++}])},[n.value]),e(t,{value:d,upload:l,maxCount:1,onChange:h=>{var s,p;r(h);const B=(s=h[0])==null?void 0:s.url;(p=n.onChange)==null||p.call(n,B)}})};var C=()=>{const[n]=i.useForm();return u(i,{colon:!0,form:n,footer:e(y,{style:{marginTop:20},onClick:async()=>{const r=await n.validateFields();console.log(r)},type:"primary",round:!0,block:!0,children:"\u786E\u8BA4"}),children:[e(i.Item,{rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u5934\u50CF"}],label:"\u4E0A\u4F20\u5934\u50CF",name:"avatar",initialValue:"https://iili.io/NZiS9e.png",children:e(V,{})}),e(i.Item,{rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u5934\u50CF"}],label:"\u4E0A\u4F20\u9644\u4EF6",name:"files",children:e(t,{accept:"*"})})]})};const O=`import React from 'react'
import { Form, Uploader, UploaderValueItem, Button } from 'react-vant-nova'
import { upload } from './utils'
import './style.less'

type AvatarUploaderProps = {
  value?: string
  onChange?: (val: string) => void
}

const AvatarUploader = (props: AvatarUploaderProps) => {
  const [tasks, setTasks] = React.useState<UploaderValueItem[]>([])
  const idCountRef = React.useRef(0)

  React.useEffect(() => {
    if (props.value === undefined) return
    if (!tasks[0] || props.value !== tasks[0].url) {
      setTasks([{ url: props.value, id: idCountRef.current++ }])
    }
  }, [props.value])

  const innerChange = (items: UploaderValueItem[]) => {
    setTasks(items)
    const currentUrl = items[0]?.url
    props.onChange?.(currentUrl)
  }

  return (
    <Uploader
      value={tasks}
      upload={upload}
      maxCount={1}
      onChange={innerChange}
    />
  )
}

export default () => {
  const [form] = Form.useForm()

  const onFinish = async () => {
    const values = await form.validateFields()
    console.log(values)
  }
  return (
    <Form
      colon
      form={form}
      footer={
        <Button
          style={{ marginTop: 20 }}
          onClick={onFinish}
          type='primary'
          round
          block
        >
          \u786E\u8BA4
        </Button>
      }
    >
      <Form.Item
        rules={[{ required: true, message: '\u8BF7\u4E0A\u4F20\u5934\u50CF' }]}
        label='\u4E0A\u4F20\u5934\u50CF'
        name='avatar'
        initialValue='https://iili.io/NZiS9e.png'
      >
        {/* \u901A\u8FC7\u5C01\u88C5\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6\uFF0C\u6309\u9700\u5B9E\u73B0\u5B9E\u9645\u4E1A\u52A1\u903B\u8F91 */}
        <AvatarUploader />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: '\u8BF7\u4E0A\u4F20\u5934\u50CF' }]}
        label='\u4E0A\u4F20\u9644\u4EF6'
        name='files'
      >
        <Uploader accept='*' />
      </Form.Item>
    </Form>
  )
}
`,L={code:O,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Form, Uploader, UploaderValueItem, Button } from 'react-vant-nova'
import { upload } from './utils'
import './style.less'

type AvatarUploaderProps = {
  value?: string
  onChange?: (val: string) => void
}

const AvatarUploader = (props: AvatarUploaderProps) => {
  const [tasks, setTasks] = React.useState<UploaderValueItem[]>([])
  const idCountRef = React.useRef(0)

  React.useEffect(() => {
    if (props.value === undefined) return
    if (!tasks[0] || props.value !== tasks[0].url) {
      setTasks([{ url: props.value, id: idCountRef.current++ }])
    }
  }, [props.value])

  const innerChange = (items: UploaderValueItem[]) => {
    setTasks(items)
    const currentUrl = items[0]?.url
    props.onChange?.(currentUrl)
  }

  return (
    <Uploader
      value={tasks}
      upload={upload}
      maxCount={1}
      onChange={innerChange}
    />
  )
}

export default () => {
  const [form] = Form.useForm()

  const onFinish = async () => {
    const values = await form.validateFields()
    console.log(values)
  }
  return (
    <Form
      colon
      form={form}
      footer={
        <Button
          style={{ marginTop: 20 }}
          onClick={onFinish}
          type='primary'
          round
          block
        >
          \u786E\u8BA4
        </Button>
      }
    >
      <Form.Item
        rules={[{ required: true, message: '\u8BF7\u4E0A\u4F20\u5934\u50CF' }]}
        label='\u4E0A\u4F20\u5934\u50CF'
        name='avatar'
        initialValue='https://iili.io/NZiS9e.png'
      >
        {/* \u901A\u8FC7\u5C01\u88C5\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6\uFF0C\u6309\u9700\u5B9E\u73B0\u5B9E\u9645\u4E1A\u52A1\u903B\u8F91 */}
        <AvatarUploader />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: '\u8BF7\u4E0A\u4F20\u5934\u50CF' }]}
        label='\u4E0A\u4F20\u9644\u4EF6'
        name='files'
      >
        <Uploader accept='*' />
      </Form.Item>
    </Form>
  )
}
`},"utils.ts":{type:"FILE",value:`const DEMO_UPLOAD_API = 'https://nextjs-upload-service.vercel.app/api/upload'

// \u5B9E\u9645\u4E1A\u52A1\u4E2D\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u5BF9\u5E94\u4E0A\u4F20\u903B\u8F91
export const upload = async (file: File) => {
  try {
    const body = new FormData()
    body.append('source', file)
    const resp = await fetch(DEMO_UPLOAD_API, {
      method: 'POST',
      body,
    })
    const json = await resp.json()
    // return\u5305\u542B url \u7684\u4E00\u4E2A\u5BF9\u8C61 \u4F8B\u5982: {url:'https://img.yzcdn.cn/vant/sand.jpg'}
    return json.image
  } catch (error) {
    return { url: \`demo_path/\${file.name}\` }
  }
}

export const demoData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
]
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .avatar {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    height: 200px;
    border-radius: 20px;
    width: 100%;
    .rv-uploader__preview {
      margin: 0;
      border-radius: 50%;
    }
  }
}
`}},key:"uploader-form",meta:{title:"\u8868\u5355\u4E2D\u4F7F\u7528"}},S=function({previewer:n=()=>null,api:d=()=>null}){const r=n;return e("div",{children:u("div",{children:[e("h1",{id:"","data-anchor":"",children:"Uploader \u6587\u4EF6\u4E0A\u4F20"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5C06\u672C\u5730\u7684\u56FE\u7247\u6216\u6587\u4EF6\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(r,{code:"import { Uploader } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),e(r,{...U,children:e(F,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u81EA\u52A8\u4E0A\u4F20"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"upload"})," \u65B9\u6CD5\u53EF\u4EE5\u5B8C\u6210\u6587\u4EF6\u81EA\u52A8\u4E0A\u4F20\u3002"]}),e(r,{...I,children:e(m,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u4E0A\u4F20\u9650\u5236"}),u("p",{children:[e("code",{children:"maxCount"})," ",e("code",{children:"maxSize"})," \u53EF\u4EE5\u8BBE\u7F6E\u6700\u5927\u4E0A\u4F20\u5C3A\u5BF8\u548C\u6700\u5927\u6570\u91CF\u3002"]}),e(r,{...w,children:e(E,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u81EA\u5B9A\u4E49\u9884\u89C8"}),u("ul",{children:[u("li",{children:[e("code",{children:"previewCoverRender"})," \u53EF\u4EE5\u81EA\u5B9A\u4E49\u9884\u89C8\u4FE1\u606F"]}),u("li",{children:["\u60F3\u8981\u81EA\u5B9A\u4E49\u5C3A\u5BF8\u5219\u53EF\u4EE5\u4F7F\u7528 ",e("code",{children:"previewSize"})]})]}),e(r,{...j,children:e(v,{})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u5F02\u6B65\u5173\u95ED"}),u("p",{children:[e("code",{children:"onDelete"})," \u652F\u6301\u8FD4\u56DE ",e("code",{children:"Promise"}),", \u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u7528 ",e("code",{children:"Dialog"})," \u6765\u5B8C\u6210\u786E\u8BA4\u529F\u80FD\u3002"]}),e(r,{...M,children:e(f,{})}),e("h3",{id:"-9","data-anchor":"-9",children:"\u8868\u5355\u4E2D\u4F7F\u7528"}),u("p",{children:[e("code",{children:"Uploader"})," \u7EC4\u4EF6\u5929\u751F\u652F\u6301 ",e("code",{children:"Form.Item"})," \u5D4C\u5957\uFF0C\u8BF7\u653E\u5FC3\u4F7F\u7528\uFF0C\u5982\u679C\u4F60\u9700\u8981\u5BF9\u6570\u636E\u7ED3\u6784\u8FDB\u884C\u5904\u7406\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u4F8B\u5B50"]}),e(r,{...L,children:e(C,{})}),e("h2",{id:"-10","data-anchor":"-10",children:"API"}),e("h3",{id:"-11","data-anchor":"-11",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u5C5E\u6027"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868"}),e("td",{children:e("em",{children:"UploaderValueItem[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u9ED8\u8BA4\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868"}),e("td",{children:e("em",{children:"UploaderValueItem[]"})}),e("td",{children:e("code",{children:"[]"})})]}),u("tr",{children:[e("td",{children:"accept"}),u("td",{children:["\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C",e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B",children:"doc"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"image/*"})})]}),u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u6807\u8BC6\u7B26\uFF0C\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u7684\u7B2C\u4E8C\u9879\u53C2\u6570\u4E2D\u83B7\u53D6"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"isImageUrl"}),u("td",{children:["\u624B\u52A8\u6307\u5B9A\u662F\u5426\u4E3A\u56FE\u7247\uFF0C\u4F7F\u7528 ",e("code",{children:"<img />"})," \u6807\u7B7E\u8FDB\u884C\u663E\u793A"]}),e("td",{children:e("em",{children:"(file: UploaderValueItem) => void"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"previewSize"}),u("td",{children:["\u9884\u89C8\u56FE\u548C\u4E0A\u4F20\u533A\u57DF\u7684\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"80px"})})]}),u("tr",{children:[e("td",{children:"previewImage"}),e("td",{children:"\u662F\u5426\u5728\u4E0A\u4F20\u5B8C\u6210\u540E\u5C55\u793A\u9884\u89C8\u56FE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"previewFullImage"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u9884\u89C8\u56FE\u540E\u5C55\u793A\u5168\u5C4F\u56FE\u7247\u9884\u89C8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"previewCoverRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u8986\u76D6\u5728\u9884\u89C8\u533A\u57DF\u4E0A\u65B9\u7684\u5185\u5BB9"}),e("td",{children:e("em",{children:"(item: UploaderValueItem) => React.ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"previewOptions"}),u("td",{children:["\u5168\u5C4F\u56FE\u7247\u9884\u89C8\u7684\u914D\u7F6E\u9879\uFF0C\u53EF\u9009\u503C\u89C1 ",e("a",{href:"/components/image-preview",children:"ImagePreview"})]}),e("td",{children:e("em",{children:"object"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"multiple"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u56FE\u7247\u591A\u9009\uFF0C\u90E8\u5206\u5B89\u5353\u673A\u578B\u4E0D\u652F\u6301"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6587\u4EF6\u4E0A\u4F20"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"readOnly"}),e("td",{children:"\u662F\u5426\u5C06\u4E0A\u4F20\u533A\u57DF\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"deletable"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u5220\u9664\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"deleteRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5220\u9664\u6309\u94AE\u89C6\u56FE"}),e("td",{children:e("em",{children:"(del: () => void) => ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"showUpload"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u4E0A\u4F20\u533A\u57DF"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"capture"}),u("td",{children:["\u56FE\u7247\u9009\u53D6\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"camera"})," (\u76F4\u63A5\u8C03\u8D77\u6444\u50CF\u5934)"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"maxSize"}),u("td",{children:["\u6587\u4EF6\u5927\u5C0F\u9650\u5236\uFF0C\u5355\u4F4D\u4E3A ",e("code",{children:"byte"})]}),e("td",{children:e("em",{children:"number | string | (file: File) => boolean"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"maxCount"}),e("td",{children:"\u6587\u4EF6\u4E0A\u4F20\u6570\u91CF\u9650\u5236"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"resultType"}),u("td",{children:["\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"file"})," ",e("code",{children:"text"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"dataUrl"})})]}),u("tr",{children:[e("td",{children:"uploadText"}),e("td",{children:"\u4E0A\u4F20\u533A\u57DF\u6587\u5B57\u63D0\u793A"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"statusTextRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u72B6\u6001\u6587\u6848"}),e("td",{children:e("em",{children:"(status: 'failed' | 'pending') => ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"imageFit"}),u("td",{children:["\u9884\u89C8\u56FE\u88C1\u526A\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u89C1 ",e("a",{href:"/components/image",children:"Image"})," \u7EC4\u4EF6"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"cover"})})]}),u("tr",{children:[e("td",{children:"uploadIcon"}),e("td",{children:"\u4E0A\u4F20\u533A\u57DF\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"<Photograph />"})})]}),u("tr",{children:[e("td",{children:"children"}),e("td",{children:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6309\u94AE"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]})]})]}),e("blockquote",{children:e("p",{children:"\u6CE8\u610F\uFF1Aaccept\u3001capture \u548C multiple \u4E3A\u6D4F\u89C8\u5668 input \u6807\u7B7E\u7684\u539F\u751F\u5C5E\u6027\uFF0C\u79FB\u52A8\u7AEF\u5404\u79CD\u673A\u578B\u5BF9\u8FD9\u4E9B\u5C5E\u6027\u7684\u652F\u6301\u7A0B\u5EA6\u6709\u6240\u5DEE\u5F02\uFF0C\u56E0\u6B64\u5728\u4E0D\u540C\u673A\u578B\u548C WebView \u4E0B\u53EF\u80FD\u51FA\u73B0\u4E00\u4E9B\u517C\u5BB9\u6027\u95EE\u9898\u3002"})}),e("h3",{id:"-12","data-anchor":"-12",children:"Events"}),u("p",{children:["| \u4E8B\u4EF6\u540D | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 | | --- | --- | --- | --- | | upload | \u4E0A\u4F20\u65B9\u6CD5 | ",e("em",{children:"(file: File) => Promise<UploaderValueItem>"})," | | onChange | \u7EC4\u4EF6\u503C\u66F4\u65B0\u65F6\u8C03\u7528 | ",e("em",{children:"UploaderValueItem[]"})," | | onOversize | \u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7\u9650\u5236\u65F6\u89E6\u53D1 | ",e("em",{children:"(files: File[]) => void"})," | | onClickUpload | \u70B9\u51FB\u4E0A\u4F20\u533A\u57DF\u65F6\u89E6\u53D1 | ",e("em",{children:"event: MouseEvent"})," | | onClickPreview | \u70B9\u51FB\u9884\u89C8\u56FE\u65F6\u89E6\u53D1 | ",e("em",{children:"(item: UploaderValueItem, index: number) => void"})," | | onClosePreview | \u5173\u95ED\u5168\u5C4F\u56FE\u7247\u9884\u89C8\u65F6\u89E6\u53D1 | ",e("em",{children:"() => void"})," | | onDelete | \u5220\u9664\u6587\u4EF6\u9884\u89C8\u65F6\u89E6\u53D1 | ",e("em",{children:"(item: UploaderValueItem) => boolean|Promise<boolean>|void"})," | | beforeRead | \u6587\u4EF6\u8BFB\u53D6\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE ",e("code",{children:"false"})," \u53EF\u7EC8\u6B62\u6587\u4EF6\u8BFB\u53D6\uFF0C",e("br",{}),"\u652F\u6301\u8FD4\u56DE ",e("code",{children:"Promise"})," | ",e("em",{children:"(file: File,files: File[]) => Promise<File | false> | File | false"})," | - |"]}),e("h3",{id:"-13","data-anchor":"-13",children:"UploaderValueItem \u7C7B\u578B"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u5C5E\u6027"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"key"}),e("td",{children:"\u552F\u4E00\u6807\u8BC6"}),e("td",{children:e("code",{children:"string | number"})}),e("td",{children:"\u6570\u7EC4\u4E0B\u6807"})]}),u("tr",{children:[e("td",{children:"url"}),e("td",{children:"\u8D44\u6E90\u5730\u5740"}),e("td",{children:e("code",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"thumbnail"}),e("td",{children:"\u7F29\u7565\u56FE\u5730\u5740"}),e("td",{children:e("code",{children:"string"})}),e("td",{children:e("code",{children:"url"})})]}),u("tr",{children:[e("td",{children:"file"}),e("td",{children:"\u6E90\u6587\u4EF6"}),e("td",{children:e("code",{children:"File"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-14","data-anchor":"-14",children:"ResultType \u53EF\u9009\u503C"}),u("p",{children:[e("code",{children:"resultType"})," \u5B57\u6BB5\u8868\u793A\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C\u7684\u7C7B\u578B\uFF0C\u4E0A\u4F20\u5927\u6587\u4EF6\u65F6\uFF0C\u5EFA\u8BAE\u4F7F\u7528 file \u7C7B\u578B\uFF0C\u907F\u514D\u5361\u987F\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"file"}),e("td",{children:"\u7ED3\u679C\u4EC5\u5305\u542B File \u5BF9\u8C61"})]}),u("tr",{children:[e("td",{children:"text"}),e("td",{children:"\u7ED3\u679C\u5305\u542B File \u5BF9\u8C61\uFF0C\u4EE5\u53CA\u6587\u4EF6\u7684\u6587\u672C\u5185\u5BB9"})]}),u("tr",{children:[e("td",{children:"dataUrl"}),e("td",{children:"\u7ED3\u679C\u5305\u542B File \u5BF9\u8C61\uFF0C\u4EE5\u53CA\u6587\u4EF6\u5BF9\u5E94\u7684 base64 \u7F16\u7801"})]})]})]}),e("h3",{id:"-15","data-anchor":"-15",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(r,{code:"import type { UploaderInstance, UploaderResultType, UploaderValueItem } from 'react-vant-nova';",lang:"js"}),u("p",{children:[e("code",{children:"UploaderInstance"})," \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A"]}),e(r,{code:`import { useRef } from 'react';
import type { UploaderInstance } from 'react-vant-nova';

const uploaderRef = useRef<UploaderInstance>();

uploaderRef.current?.chooseFile();`,lang:"js"}),e("h2",{id:"-16","data-anchor":"-16",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-17","data-anchor":"-17",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-uploader-gap"}),e("td",{children:e("em",{children:"var(--rv-padding-xs)"})}),e("td",{children:e("code",{children:"\u4E0A\u4F20\u89C6\u56FE\u95F4\u8DDD"})})]}),u("tr",{children:[e("td",{children:"--rv-uploader-size"}),e("td",{children:e("em",{children:"80px"})}),e("td",{children:e("code",{children:"\u4E0A\u4F20\u89C6\u56FE\u5C3A\u5BF8"})})]}),u("tr",{children:[e("td",{children:"--rv-uploader-icon-size"}),e("td",{children:e("em",{children:"24px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-4)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-text-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-upload-background-color"}),e("td",{children:e("em",{children:"var(--rv-gray-1)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-upload-active-color"}),e("td",{children:e("em",{children:"var(--rv-active-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-delete-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-delete-icon-size"}),e("td",{children:e("em",{children:"14px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-delete-background-color"}),e("td",{children:e("em",{children:"rgba(0, 0, 0, 0.7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-background-color"}),e("td",{children:e("em",{children:"var(--rv-background-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-icon-size"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-name-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-base)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-name-margin-top"}),e("td",{children:e("em",{children:"var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-name-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-name-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-text-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-background-color"}),e("td",{children:e("em",{children:"fade(var(--rv-gray-8), 88%)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-message-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-message-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-xs)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-loading-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-loading-icon-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-disabled-opacity"}),e("td",{children:e("em",{children:"var(--rv-disabled-opacity)"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-18","data-anchor":"-18",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"-19","data-anchor":"-19",children:"\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u88AB\u65CB\u8F6C 90 \u5EA6\uFF1F"}),u("p",{children:["\u90E8\u5206\u624B\u673A\u5728\u62CD\u7167\u4E0A\u4F20\u65F6\u4F1A\u51FA\u73B0\u56FE\u7247\u88AB\u65CB\u8F6C 90 \u5EA6\u7684\u95EE\u9898\uFF0C\u8FD9\u4E2A\u95EE\u9898\u53EF\u4EE5\u901A\u8FC7 ",e("a",{href:"https://github.com/fengyuanchen/compressorjs",children:"compressorjs"})," \u6216\u5176\u4ED6\u5F00\u6E90\u5E93\u8FDB\u884C\u5904\u7406\u3002"]}),e("blockquote",{children:u("p",{children:[e("code",{children:"compressorjs"})," \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u56FE\u7247\u5904\u7406\u5E93\uFF0C\u63D0\u4F9B\u4E86\u56FE\u7247\u538B\u7F29\u3001\u56FE\u7247\u65CB\u8F6C\u7B49\u80FD\u529B\u3002"]})}),e("h4",{id:"-20","data-anchor":"-20",children:"\u793A\u4F8B"}),u("p",{children:["\u4F7F\u7528 ",e("code",{children:"compressorjs"})," \u8FDB\u884C\u5904\u7406\u7684\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B:"]}),e(r,{code:`export default () => {
  const beforeRead = (file) => {
    return new Promise((resolve) => {
      // compressorjs \u9ED8\u8BA4\u5F00\u542F checkOrientation \u9009\u9879
      // \u4F1A\u5C06\u56FE\u7247\u4FEE\u6B63\u4E3A\u6B63\u786E\u65B9\u5411
      new Compressor(file, {
        success: () => resolve(file),
        error(err) {
          console.log(err.message);
          resolve(false)
        },
      });
    });
  };
  return <Uploader beforeRead={beforeRead} />;
};`,lang:"jsx"}),e("h3",{id:"-21","data-anchor":"-21",children:"\u4E0A\u4F20 HEIC/HEIF \u683C\u5F0F\u7684\u56FE\u7247\u540E\u65E0\u6CD5\u5C55\u793A\uFF1F"}),e("p",{children:"\u76EE\u524D Chrome\u3001Safari \u7B49\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5C55\u793A HEIC/HEIF \u683C\u5F0F\u7684\u56FE\u7247\uFF0C\u56E0\u6B64\u4E0A\u4F20\u540E\u65E0\u6CD5\u5728 Uploader \u7EC4\u4EF6\u4E2D\u8FDB\u884C\u9884\u89C8\u3002"}),u("p",{children:["[HEIF] \u683C\u5F0F\u7684\u517C\u5BB9\u6027\u8BF7\u53C2\u8003 ",e("a",{href:"https://caniuse.com/?search=heic",children:"caniuse"}),"\u3002"]})]})})},T=[{Component:F,key:"uploader-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:m,key:"uploader-upload",title:"\u81EA\u52A8\u4E0A\u4F20"},{Component:E,key:"uploader-limit",title:"\u4E0A\u4F20\u9650\u5236"},{Component:v,key:"uploader-preview",title:"\u81EA\u5B9A\u4E49\u9884\u89C8"},{Component:f,key:"uploader-close",title:"\u5F02\u6B65\u5173\u95ED"},{Component:C,key:"uploader-form",title:"\u8868\u5355\u4E2D\u4F7F\u7528"}],N={simulator:{compact:!1,style:{background:"#fff"}}},$=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:2,id:"-10"},{depth:3,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"},{depth:3,id:"-14"},{depth:3,id:"-15"},{depth:2,id:"-16"},{depth:3,id:"-17"},{depth:2,id:"-18"},{depth:3,id:"-19"},{depth:4,id:"-20"},{depth:3,id:"-21"}],q="/src/components/uploader/README.md",H="undefined",W="1766203394000";var K=n=>n.children({MdContent:S,demos:T,frontmatter:N,slugs:$,filePath:q,title:H,updatedTime:W});export{S as MdContent,K as default,T as demos,q as filePath,N as frontmatter,$ as slugs,H as title,W as updatedTime};
