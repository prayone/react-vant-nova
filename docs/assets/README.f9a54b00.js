import{a as n,j as e}from"./main.7fa1bdd8.js";import{T as a}from"./Table.5f9604fd.js";var r=()=>n("div",{className:"demo-table",children:[e("h2",{children:"\u57FA\u7840\u8868\u683C"}),e(a,{dataSource:[{id:1,name:"\u5F20\u4E09",age:28,gender:"\u7537",email:"zhangsan@example.com",phone:"13800138001"},{id:2,name:"\u674E\u56DB",age:25,gender:"\u5973",email:"lisi@example.com",phone:"13800138002"},{id:3,name:"\u738B\u4E94",age:30,gender:"\u7537",email:"wangwu@example.com",phone:"13800138003"},{id:4,name:"\u8D75\u516D",age:26,gender:"\u5973",email:"zhaoliu@example.com",phone:"13800138004"},{id:5,name:"\u5B59\u4E03",age:32,gender:"\u7537",email:"sunqi@example.com",phone:"13800138005"}],columns:[{title:"\u59D3\u540D",dataIndex:"name",width:"70px",align:"center"},{title:"\u5E74\u9F84",dataIndex:"age",width:"70px",align:"center"},{title:"\u6027\u522B",dataIndex:"gender"},{title:"\u90AE\u7BB1",dataIndex:"email",width:"50%",render:t=>e("a",{href:`mailto:${t}`,children:t}),align:"center"},{title:"\u7535\u8BDD",dataIndex:"phone",width:"120px",render:t=>e("a",{href:`tel:${t}`,children:t})}],bordered:!0})]});const l=`import React from 'react'
import { Table } from 'react-vant-nova'
import './style.less'

export default () => {
  // \u6A21\u62DF\u8868\u683C\u6570\u636E
  const dataSource = [
    {
      id: 1,
      name: '\u5F20\u4E09',
      age: 28,
      gender: '\u7537',
      email: 'zhangsan@example.com',
      phone: '13800138001',
    },
    {
      id: 2,
      name: '\u674E\u56DB',
      age: 25,
      gender: '\u5973',
      email: 'lisi@example.com',
      phone: '13800138002',
    },
    {
      id: 3,
      name: '\u738B\u4E94',
      age: 30,
      gender: '\u7537',
      email: 'wangwu@example.com',
      phone: '13800138003',
    },
    {
      id: 4,
      name: '\u8D75\u516D',
      age: 26,
      gender: '\u5973',
      email: 'zhaoliu@example.com',
      phone: '13800138004',
    },
    {
      id: 5,
      name: '\u5B59\u4E03',
      age: 32,
      gender: '\u7537',
      email: 'sunqi@example.com',
      phone: '13800138005',
    },
  ]

  // \u5217\u914D\u7F6E
  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      width: '70px',
      align: 'center',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      width: '70px',
      align: 'center',
    },
    {
      title: '\u6027\u522B',
      dataIndex: 'gender',
    },
    {
      title: '\u90AE\u7BB1',
      dataIndex: 'email',
      width: '50%',
      render: (text: string) => <a href={\`mailto:\${text}\`}>{text}</a>,
      align: 'center',
    },
    {
      title: '\u7535\u8BDD',
      dataIndex: 'phone',
      width: '120px',
      render: (text: string) => <a href={\`tel:\${text}\`}>{text}</a>,
    },
  ]

  return (
    <div className='demo-table'>
      <h2>\u57FA\u7840\u8868\u683C</h2>
      <Table dataSource={dataSource} columns={columns} bordered />
    </div>
  )
}
`,c={code:l,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Table } from 'react-vant-nova'
import './style.less'

export default () => {
  // \u6A21\u62DF\u8868\u683C\u6570\u636E
  const dataSource = [
    {
      id: 1,
      name: '\u5F20\u4E09',
      age: 28,
      gender: '\u7537',
      email: 'zhangsan@example.com',
      phone: '13800138001',
    },
    {
      id: 2,
      name: '\u674E\u56DB',
      age: 25,
      gender: '\u5973',
      email: 'lisi@example.com',
      phone: '13800138002',
    },
    {
      id: 3,
      name: '\u738B\u4E94',
      age: 30,
      gender: '\u7537',
      email: 'wangwu@example.com',
      phone: '13800138003',
    },
    {
      id: 4,
      name: '\u8D75\u516D',
      age: 26,
      gender: '\u5973',
      email: 'zhaoliu@example.com',
      phone: '13800138004',
    },
    {
      id: 5,
      name: '\u5B59\u4E03',
      age: 32,
      gender: '\u7537',
      email: 'sunqi@example.com',
      phone: '13800138005',
    },
  ]

  // \u5217\u914D\u7F6E
  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      width: '70px',
      align: 'center',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      width: '70px',
      align: 'center',
    },
    {
      title: '\u6027\u522B',
      dataIndex: 'gender',
    },
    {
      title: '\u90AE\u7BB1',
      dataIndex: 'email',
      width: '50%',
      render: (text: string) => <a href={\`mailto:\${text}\`}>{text}</a>,
      align: 'center',
    },
    {
      title: '\u7535\u8BDD',
      dataIndex: 'phone',
      width: '120px',
      render: (text: string) => <a href={\`tel:\${text}\`}>{text}</a>,
    },
  ]

  return (
    <div className='demo-table'>
      <h2>\u57FA\u7840\u8868\u683C</h2>
      <Table dataSource={dataSource} columns={columns} bordered />
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-table {
  padding: 16px;
  overflow: hidden;

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 14px;
    color: #333;
  }
}
`}},key:"table-basic",meta:{}};var i=()=>n("div",{className:"demo-table",children:[e("h2",{children:"\u7A7A\u8868\u683C"}),e(a,{dataSource:[],columns:[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u6027\u522B",dataIndex:"gender"},{title:"\u90AE\u7BB1",dataIndex:"email",render:t=>e("a",{href:`mailto:${t}`,children:t})},{title:"\u7535\u8BDD",dataIndex:"phone",render:t=>e("a",{href:`tel:${t}`,children:t})}],bordered:!0,emptyText:"\u6682\u65E0\u6570\u636E",emptyImage:"https://resource.xdfgk.cn/%E8%B5%84%E6%BA%90%201.png"})]});const o=`import React from 'react'
import { Table } from 'react-vant-nova'
import './style.less'

export default () => {
  // \u6A21\u62DF\u8868\u683C\u6570\u636E
  const dataSource = []
  // \u5217\u914D\u7F6E
  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
    },
    {
      title: '\u6027\u522B',
      dataIndex: 'gender',
    },
    {
      title: '\u90AE\u7BB1',
      dataIndex: 'email',
      render: (text: string) => <a href={\`mailto:\${text}\`}>{text}</a>,
    },
    {
      title: '\u7535\u8BDD',
      dataIndex: 'phone',
      render: (text: string) => <a href={\`tel:\${text}\`}>{text}</a>,
    },
  ]

  return (
    <div className='demo-table'>
      <h2>\u7A7A\u8868\u683C</h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        emptyText='\u6682\u65E0\u6570\u636E'
        emptyImage='https://resource.xdfgk.cn/%E8%B5%84%E6%BA%90%201.png'
      />
    </div>
  )
}
`,h={code:o,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Table } from 'react-vant-nova'
import './style.less'

export default () => {
  // \u6A21\u62DF\u8868\u683C\u6570\u636E
  const dataSource = []
  // \u5217\u914D\u7F6E
  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
    },
    {
      title: '\u6027\u522B',
      dataIndex: 'gender',
    },
    {
      title: '\u90AE\u7BB1',
      dataIndex: 'email',
      render: (text: string) => <a href={\`mailto:\${text}\`}>{text}</a>,
    },
    {
      title: '\u7535\u8BDD',
      dataIndex: 'phone',
      render: (text: string) => <a href={\`tel:\${text}\`}>{text}</a>,
    },
  ]

  return (
    <div className='demo-table'>
      <h2>\u7A7A\u8868\u683C</h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        emptyText='\u6682\u65E0\u6570\u636E'
        emptyImage='https://resource.xdfgk.cn/%E8%B5%84%E6%BA%90%201.png'
      />
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-table {
  padding: 16px;
  overflow: hidden;

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 14px;
    color: #333;
  }
}
`}},key:"table-empty",meta:{}},m=function({previewer:d=()=>null,api:u=()=>null}){const t=d;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"Table \u8868\u683C"}),e("h3",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5C55\u793A\u7ED3\u6784\u5316\u6570\u636E\u7684\u7EC4\u4EF6\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5217\u6E32\u67D3\u3001\u8FB9\u6846\u663E\u793A\u7B49\u529F\u80FD\u3002"}),e("h3",{id:"-2","data-anchor":"-2",children:"\u57FA\u7840\u7528\u6CD5"}),e("div",{children:e(t,{...c,children:e(r,{})})}),e("h4",{id:"-3","data-anchor":"-3",children:"\u7A7A\u8868\u683C"}),e("div",{children:e(t,{...h,children:e(i,{})})}),e("h3",{id:"-4","data-anchor":"-4",children:"API"}),e("h4",{id:"-5","data-anchor":"-5",children:"Table Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"dataSource"}),e("td",{children:"\u8868\u683C\u6570\u636E"}),e("td",{children:e("code",{children:"Array"})}),e("td",{children:e("code",{children:"[]"})})]}),n("tr",{children:[e("td",{children:"columns"}),e("td",{children:"\u5217\u914D\u7F6E"}),e("td",{children:e("code",{children:"Array<TableColumn>"})}),e("td",{children:e("code",{children:"[]"})})]}),n("tr",{children:[e("td",{children:"rowKey"}),e("td",{children:"\u8868\u683C\u884C Key \u7684\u53D6\u503C\u5B57\u6BB5"}),e("td",{children:e("code",{children:"string | ((record: any, index: number) => string)"})}),e("td",{children:e("code",{children:"id"})})]}),n("tr",{children:[e("td",{children:"bordered"}),e("td",{children:"\u662F\u5426\u663E\u793A\u8FB9\u6846"}),e("td",{children:e("code",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"showHeader"}),e("td",{children:"\u662F\u5426\u663E\u793A\u8868\u5934"}),e("td",{children:e("code",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"emptyText"}),e("td",{children:"\u7A7A\u6570\u636E\u65F6\u663E\u793A\u7684\u5185\u5BB9"}),e("td",{children:e("code",{children:"ReactNode"})}),e("td",{children:e("code",{children:"\u6682\u65E0\u6570\u636E"})})]})]})]}),e("h4",{id:"-6","data-anchor":"-6",children:"TableColumn Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u5217\u6807\u9898"}),e("td",{children:e("code",{children:"ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"dataIndex"}),e("td",{children:"\u5217\u6570\u636E\u5BF9\u5E94\u7684\u5B57\u6BB5\u540D"}),e("td",{children:e("code",{children:"string"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"width"}),e("td",{children:"\u5217\u5BBD\u5EA6"}),e("td",{children:e("code",{children:"string | number | %"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"align"}),e("td",{children:"\u5217\u5BF9\u9F50\u65B9\u5F0F"}),e("td",{children:e("code",{children:"'left' | 'center' | 'right'"})}),e("td",{children:e("code",{children:"'left'"})})]}),n("tr",{children:[e("td",{children:"render"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3\u51FD\u6570"}),e("td",{children:e("code",{children:"(text: any, record: any, index: number) => ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"titleRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u8868\u5934\u6E32\u67D3\u51FD\u6570"}),e("td",{children:e("code",{children:"(column: TableColumn) => ReactNode"})}),e("td",{children:"-"})]})]})]})]})})},s=[{Component:r,key:"table-basic"},{Component:i,key:"table-empty"}],p=void 0,x=[{depth:1,id:""},{depth:3,id:"-1"},{depth:3,id:"-2"},{depth:4,id:"-3"},{depth:3,id:"-4"},{depth:4,id:"-5"},{depth:4,id:"-6"}],g="/src/components/table/README.md",E="undefined",B="1766571143000";var A=d=>d.children({MdContent:m,demos:s,frontmatter:p,slugs:x,filePath:g,title:E,updatedTime:B});export{m as MdContent,A as default,s as demos,g as filePath,p as frontmatter,x as slugs,E as title,B as updatedTime};
