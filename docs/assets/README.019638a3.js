import{j as n,c as b,r as s,a as e,F as C}from"./main.9eb8bb9a.js";import{dZ as m,F as h,ad as B,dc as f,a as E,cD as g,a3 as v,b7 as A,c$ as y,ac as x,di as t,C as I,dm as l,d9 as c,i as S,dn as w}from"./FloatingPanel.9e7a63ee.js";import{h as R}from"./index.63692309.js";var P=u=>n(m,{className:"demo-floating-box-bubble",offset:{right:20,bottom:20},style:{"--rv-floating-box-size":"60px"},adsorb:{indent:.5,distance:20},...u,children:n(h,{align:"center",justify:"center",className:"main-button",children:n(B,{})})});const V=[g,v,A,y,x];var N=({menu:u={},...o})=>n(m,{className:"demo-floating-box-menu",offset:{right:20,bottom:"14vh"},menu:{...u,items:V.map((r,a)=>n(h,{align:"center",justify:"center",onClick:()=>f.info(`\u70B9\u51FB\u4E86\u7B2C${a+1}\u4E2A`),className:"menu-item",children:n(r,{})},a))},...o,children:({active:r})=>n(h,{align:"center",justify:"center",className:b("main-button",{"main-button--active":r}),children:n(E,{})})});var F=()=>{const[u]=t.useForm(),[o,r]=s.exports.useState(0),[a,p]=s.exports.useState({}),D=()=>r(d=>d+1);return R.useUpdateEffect(()=>{(async()=>{const i=await u.getFieldsValue();i.adsorb_show||(i.adsorb=!1),delete i.adsorb_show,p(i)})()},[o]),e("div",{className:"demo-floating-box",children:[n(I,{title:"\u8BBE\u7F6E\u60AC\u6D6E\u7403"}),e(t,{form:u,onValuesChange:D,children:[n(t.Item,{name:"type",label:"DEMO",initialValue:"0",children:e(l.Group,{children:[n(l,{name:"0",children:"\u666E\u901A\u60AC\u6D6E\u7403"}),n(l,{name:"1",children:"\u5E26\u83DC\u5355\u7684\u60AC\u6D6E\u7403"})]})}),n(t.Item,{valuePropName:"checked",name:"disabled",label:"\u7981\u7528",initialValue:!1,children:n(c,{size:20})}),n(t.Item,{valuePropName:"checked",name:"draggable",label:"\u62D6\u52A8",initialValue:!0,children:n(c,{size:20})}),n(t.Item,{tooltip:"\u62D6\u52A8\u7ED3\u675F\u540E\uFF0C\u4F1A\u5438\u9644\u5728\u66F4\u9760\u8FD1\u7684\u5C4F\u5E55\u4E00\u4FA7",valuePropName:"checked",name:"adsorb_show",label:"\u8FD1\u8FB9\u505C\u9760",initialValue:!0,children:n(c,{size:20})}),n(t.Item,{noStyle:!0,shouldUpdate:(d,i)=>d.adsorb_show!==i.adsorb_show,children:()=>u.getFieldValue("adsorb_show")?e(C,{children:[n(t.Item,{tooltip:"\u5438\u9644\u5728\u5C4F\u5E55\u4E00\u4FA7\u65F6\u8DDD\u79BB\u4FA7\u8FB9\u7684\u8DDD\u79BB",name:["adsorb","distance"],label:"\u505C\u9760\u8DDD\u79BB",initialValue:20,children:n(S,{rightIcon:n("div",{children:"PX"})})}),n(t.Item,{tooltip:"\u6EDA\u52A8\u65F6\u60AC\u6D6E\u7403\u79FB\u52A8\u5230\u5C4F\u5916\u7684\u6BD4\u7387",name:["adsorb","indent"],label:"\u6EDA\u52A8\u7F29\u8FDB",initialValue:.5,children:n(w,{min:0,max:1,step:.1})})]}):null}),n(t.Item,{noStyle:!0,shouldUpdate:(d,i)=>d.type!==i.type,children:()=>+u.getFieldValue("type")==0?null:n(t.Item,{name:["menu","direction"],label:"\u83DC\u5355\u5C55\u5F00\u65B9\u5411",initialValue:"around",children:e(l.Group,{children:[n(l,{name:"around",children:"around"}),n(l,{name:"vertical",children:"vertical"}),n(l,{name:"horizontal",children:"horizontal"})]})})})]}),+a.type==1?n(N,{...a}):n(P,{...a}),n("div",{style:{height:1e3}})]})};const k=`import React, { useState } from 'react'
import {
  Cell,
  Field,
  Stepper,
  Form,
  Switch,
  Radio,
  hooks,
} from 'react-vant-nova'
import type { FloatingBallProps } from 'react-vant-nova'
import Bubble from './bubble'
import Menu from './menu'
import './style.less'

export default () => {
  const [form] = Form.useForm()
  const [formUpdated, setFormUpdated] = useState(0)
  const [config, updateConfig] = useState<
    FloatingBallProps & Record<string, unknown>
  >({})

  const handleFormChange = () => setFormUpdated(v => v + 1)

  hooks.useUpdateEffect(() => {
    const getValue = async () => {
      const values = await form.getFieldsValue()
      if (!values.adsorb_show) values.adsorb = false

      delete values.adsorb_show
      updateConfig(values)
    }
    getValue()
  }, [formUpdated])

  return (
    <div className='demo-floating-box'>
      <Cell title='\u8BBE\u7F6E\u60AC\u6D6E\u7403' />
      <Form form={form} onValuesChange={handleFormChange}>
        <Form.Item name='type' label='DEMO' initialValue='0'>
          <Radio.Group>
            <Radio name='0'>\u666E\u901A\u60AC\u6D6E\u7403</Radio>
            <Radio name='1'>\u5E26\u83DC\u5355\u7684\u60AC\u6D6E\u7403</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          valuePropName='checked'
          name='disabled'
          label='\u7981\u7528'
          initialValue={false}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          valuePropName='checked'
          name='draggable'
          label='\u62D6\u52A8'
          initialValue={true}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          tooltip='\u62D6\u52A8\u7ED3\u675F\u540E\uFF0C\u4F1A\u5438\u9644\u5728\u66F4\u9760\u8FD1\u7684\u5C4F\u5E55\u4E00\u4FA7'
          valuePropName='checked'
          name='adsorb_show'
          label='\u8FD1\u8FB9\u505C\u9760'
          initialValue={true}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prev, next) => prev.adsorb_show !== next.adsorb_show}
        >
          {() => {
            const show = form.getFieldValue('adsorb_show')
            if (!show) return null
            return (
              <>
                <Form.Item
                  tooltip='\u5438\u9644\u5728\u5C4F\u5E55\u4E00\u4FA7\u65F6\u8DDD\u79BB\u4FA7\u8FB9\u7684\u8DDD\u79BB'
                  name={['adsorb', 'distance']}
                  label='\u505C\u9760\u8DDD\u79BB'
                  initialValue={20}
                >
                  <Field rightIcon={<div>PX</div>} />
                </Form.Item>
                <Form.Item
                  tooltip='\u6EDA\u52A8\u65F6\u60AC\u6D6E\u7403\u79FB\u52A8\u5230\u5C4F\u5916\u7684\u6BD4\u7387'
                  name={['adsorb', 'indent']}
                  label='\u6EDA\u52A8\u7F29\u8FDB'
                  initialValue={0.5}
                >
                  <Stepper min={0} max={1} step={0.1} />
                </Form.Item>
              </>
            )
          }}
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prev, next) => prev.type !== next.type}
        >
          {() => {
            const type = form.getFieldValue('type')
            if (+type === 0) return null
            return (
              <Form.Item
                name={['menu', 'direction']}
                label='\u83DC\u5355\u5C55\u5F00\u65B9\u5411'
                initialValue='around'
              >
                <Radio.Group>
                  <Radio name='around'>around</Radio>
                  <Radio name='vertical'>vertical</Radio>
                  <Radio name='horizontal'>horizontal</Radio>
                </Radio.Group>
              </Form.Item>
            )
          }}
        </Form.Item>
      </Form>
      {+config.type === 1 ? <Menu {...config} /> : <Bubble {...config} />}
      <div style={{ height: 1000 }} />
    </div>
  )
}
`,_={code:k,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},clsx:{type:"NPM",value:"1.2.1"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import {
  Cell,
  Field,
  Stepper,
  Form,
  Switch,
  Radio,
  hooks,
} from 'react-vant-nova'
import type { FloatingBallProps } from 'react-vant-nova'
import Bubble from './bubble'
import Menu from './menu'
import './style.less'

export default () => {
  const [form] = Form.useForm()
  const [formUpdated, setFormUpdated] = useState(0)
  const [config, updateConfig] = useState<
    FloatingBallProps & Record<string, unknown>
  >({})

  const handleFormChange = () => setFormUpdated(v => v + 1)

  hooks.useUpdateEffect(() => {
    const getValue = async () => {
      const values = await form.getFieldsValue()
      if (!values.adsorb_show) values.adsorb = false

      delete values.adsorb_show
      updateConfig(values)
    }
    getValue()
  }, [formUpdated])

  return (
    <div className='demo-floating-box'>
      <Cell title='\u8BBE\u7F6E\u60AC\u6D6E\u7403' />
      <Form form={form} onValuesChange={handleFormChange}>
        <Form.Item name='type' label='DEMO' initialValue='0'>
          <Radio.Group>
            <Radio name='0'>\u666E\u901A\u60AC\u6D6E\u7403</Radio>
            <Radio name='1'>\u5E26\u83DC\u5355\u7684\u60AC\u6D6E\u7403</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          valuePropName='checked'
          name='disabled'
          label='\u7981\u7528'
          initialValue={false}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          valuePropName='checked'
          name='draggable'
          label='\u62D6\u52A8'
          initialValue={true}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          tooltip='\u62D6\u52A8\u7ED3\u675F\u540E\uFF0C\u4F1A\u5438\u9644\u5728\u66F4\u9760\u8FD1\u7684\u5C4F\u5E55\u4E00\u4FA7'
          valuePropName='checked'
          name='adsorb_show'
          label='\u8FD1\u8FB9\u505C\u9760'
          initialValue={true}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prev, next) => prev.adsorb_show !== next.adsorb_show}
        >
          {() => {
            const show = form.getFieldValue('adsorb_show')
            if (!show) return null
            return (
              <>
                <Form.Item
                  tooltip='\u5438\u9644\u5728\u5C4F\u5E55\u4E00\u4FA7\u65F6\u8DDD\u79BB\u4FA7\u8FB9\u7684\u8DDD\u79BB'
                  name={['adsorb', 'distance']}
                  label='\u505C\u9760\u8DDD\u79BB'
                  initialValue={20}
                >
                  <Field rightIcon={<div>PX</div>} />
                </Form.Item>
                <Form.Item
                  tooltip='\u6EDA\u52A8\u65F6\u60AC\u6D6E\u7403\u79FB\u52A8\u5230\u5C4F\u5916\u7684\u6BD4\u7387'
                  name={['adsorb', 'indent']}
                  label='\u6EDA\u52A8\u7F29\u8FDB'
                  initialValue={0.5}
                >
                  <Stepper min={0} max={1} step={0.1} />
                </Form.Item>
              </>
            )
          }}
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prev, next) => prev.type !== next.type}
        >
          {() => {
            const type = form.getFieldValue('type')
            if (+type === 0) return null
            return (
              <Form.Item
                name={['menu', 'direction']}
                label='\u83DC\u5355\u5C55\u5F00\u65B9\u5411'
                initialValue='around'
              >
                <Radio.Group>
                  <Radio name='around'>around</Radio>
                  <Radio name='vertical'>vertical</Radio>
                  <Radio name='horizontal'>horizontal</Radio>
                </Radio.Group>
              </Form.Item>
            )
          }}
        </Form.Item>
      </Form>
      {+config.type === 1 ? <Menu {...config} /> : <Bubble {...config} />}
      <div style={{ height: 1000 }} />
    </div>
  )
}
`},"bubble.tsx":{type:"FILE",value:`import React from 'react'
import { Flex, FloatingBall } from 'react-vant-nova'
import { Chat } from '@react-vant/icons'

export default props => {
  return (
    <FloatingBall
      className='demo-floating-box-bubble'
      offset={{
        right: 20,
        bottom: 20,
      }}
      style={{
        '--rv-floating-box-size': '60px',
      }}
      adsorb={{
        // \u6EDA\u52A8\u7F29\u8FDB\u6BD4\u4F8B
        indent: 0.5,
        // \u8FD1\u8FB9\u505C\u9760\u8DDD\u79BB
        distance: 20,
      }}
      {...props}
    >
      <Flex align='center' justify='center' className='main-button'>
        <Chat />
      </Flex>
    </FloatingBall>
  )
}
`},"menu.tsx":{type:"FILE",value:`import React from 'react'
import { Flex, FloatingBall, Toast } from 'react-vant-nova'
import {
  StarO,
  CartCircleO,
  GoldCoinO,
  WapHomeO,
  Plus,
  ChatO,
} from '@react-vant/icons'
import clsx from 'clsx'

const icons = [StarO, CartCircleO, GoldCoinO, WapHomeO, ChatO]

export default ({ menu = {}, ...props }) => {
  return (
    <FloatingBall
      className='demo-floating-box-menu'
      offset={{
        right: 20,
        bottom: '14vh',
      }}
      menu={{
        ...menu,
        items: icons.map((Ico, i) => (
          <Flex
            align='center'
            justify='center'
            onClick={() => Toast.info(\`\u70B9\u51FB\u4E86\u7B2C\${i + 1}\u4E2A\`)}
            key={i}
            className='menu-item'
          >
            <Ico />
          </Flex>
        )),
      }}
      {...props}
    >
      {({ active }) => (
        <Flex
          align='center'
          justify='center'
          className={clsx('main-button', {
            'main-button--active': active,
          })}
        >
          <Plus />
        </Flex>
      )}
    </FloatingBall>
  )
}
`},"style.less":{type:"FILE",value:`@shadow: 0 3px 8px rgba(0, 0, 0, 0.08);

.demo-floating-box {
  .main-button {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: @shadow;
    transition: all 0.2s ease-in-out;
  }

  &-bubble {
    .main-button {
      font-size: 28px;
      color: #fff;
      background-color: #3f45ff;

      svg {
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        svg {
          transform: scale(1.2);
        }
      }
    }
  }

  &-menu {
    .main-button {
      background-color: #fff;

      &--active {
        transform: scale(0.9) rotate(45deg);
      }
    }
    .menu-item {
      background-color: #fff;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      box-shadow: @shadow;
      font-size: 24px;
    }
  }
}
`}},key:"floating-ball-base",meta:{title:"\u57FA\u7840\u793A\u4F8B"}},z=function({previewer:u=()=>null,api:o=()=>null}){const r=u;return n("div",{children:e("div",{children:[n("h1",{id:"","data-anchor":"",children:"FloatingBall \u60AC\u6D6E\u7403"}),n("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),n("p",{children:"\u60AC\u6D6E\u7403\u7528\u4E8E\u63D0\u4F9B\u5168\u5C40\u60AC\u6D6E\u5FEB\u6377\u64CD\u4F5C\u5165\u53E3\uFF0C\u53EF\u4EE5\u81EA\u7531\u62D6\u52A8\uFF0C\u652F\u6301 1 \uFF5E 5 \u4E2A\u64CD\u4F5C\u9009\u9879\u3002"}),n("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),n(r,{code:"import { FloatingBall } from 'react-vant-nova';",lang:"js"}),n("h3",{id:"-3","data-anchor":"-3",children:"\u793A\u4F8B\u4EE3\u7801"}),n(r,{..._,children:n(F,{})}),n("h2",{id:"-4","data-anchor":"-4",children:"API"}),n("h3",{id:"-5","data-anchor":"-5",children:"FloatingBall Props"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"menu"}),n("td",{children:"\u83DC\u5355\u914D\u7F6E\u9879"}),n("td",{children:n("em",{children:n("a",{href:"#menuprops",children:"MenuProps"})})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"adsorb"}),n("td",{children:"\u8FD1\u8FB9\u5438\u9644\u80FD\u529B"}),n("td",{children:e("em",{children:["boolean | ",n("a",{href:"#adsorbprops",children:"AdsorbProps"})]})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"draggable"}),n("td",{children:"\u662F\u5426\u5F00\u542F\u62D6\u62FD"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"boundary"}),n("td",{children:"\u9650\u5236\u62D6\u52A8\u8303\u56F4\u5728\u5C4F\u5E55\u8FB9\u754C\u5185"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"offset"}),n("td",{children:"\u521D\u59CB\u4F4D\u7F6E"}),n("td",{children:n("em",{children:n("a",{href:"#offsetprops",children:"OffsetProps"})})}),n("td",{children:e("code",{children:["{"," right: 0, bottom: '30vh' ","}"]})})]}),e("tr",{children:[n("td",{children:"disabled"}),n("td",{children:"\u662F\u5426\u7981\u7528"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"disabledClassName"}),n("td",{children:"\u7981\u7528\u65F6\u7684 class"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"children"}),n("td",{children:"\u60AC\u6D6E\u7403\u5305\u88F9\u7684\u5185\u5BB9"}),n("td",{children:e("em",{children:["ReactNode | (","{"," active, indenting ","}",") => ReactNode"]})}),n("td",{children:"-"})]})]})]}),n("h3",{id:"-6","data-anchor":"-6",children:"MenuProps"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"items"}),n("td",{children:"\u83DC\u5355\u5143\u7D20\uFF0C\u6700\u591A\u652F\u6301 5 \u4E2A"}),n("td",{children:n("em",{children:"ReactNode[]"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"active"}),n("td",{children:"\u83DC\u5355\u6FC0\u6D3B\u72B6\u6001"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"defaultActive"}),n("td",{children:"\u9ED8\u8BA4\u7684\u83DC\u5355\u6FC0\u6D3B\u72B6\u6001"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"direction"}),n("td",{children:"\u83DC\u5355\u5C55\u5F00\u65B9\u5411"}),n("td",{children:n("em",{children:"around | vertical | horizontal"})}),n("td",{children:n("code",{children:"around"})})]}),e("tr",{children:[n("td",{children:"itemClickClose"}),n("td",{children:"\u70B9\u51FB\u83DC\u5355\u9879\u5173\u95ED\u83DC\u5355"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"onChange"}),n("td",{children:"\u83DC\u5355\u72B6\u6001\u53D8\u5316\u7684\u56DE\u8C03"}),n("td",{children:n("em",{children:"(active: boolean) => void"})}),n("td",{children:"-"})]})]})]}),n("h3",{id:"-7","data-anchor":"-7",children:"AdsorbProps"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"indent"}),n("td",{children:"\u6EDA\u52A8\u65F6\u5143\u7D20\u7F29\u8FDB\u6BD4\u7387\uFF0C\u652F\u6301 0-1 \u7684\u6570\u5B57"}),n("td",{children:n("em",{children:"boolean | number"})}),n("td",{children:n("code",{children:"0.5"})})]}),e("tr",{children:[n("td",{children:"indentClassName"}),n("td",{children:"\u7F29\u8FDB\u65F6\u7684 class"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"distance"}),n("td",{children:"\u8FD1\u8FB9\u505C\u9760\u8DDD\u79BB"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:n("code",{children:"0"})})]})]})]}),n("h3",{id:"-8","data-anchor":"-8",children:"OffsetProps"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"top"}),n("td",{children:"\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB"}),n("td",{children:n("em",{children:"CSSProperties['top']"})})]}),e("tr",{children:[n("td",{children:"right"}),n("td",{children:"\u8DDD\u79BB\u53F3\u4FA7\u7684\u8DDD\u79BB"}),n("td",{children:n("em",{children:"CSSProperties['right']"})})]}),e("tr",{children:[n("td",{children:"bottom"}),n("td",{children:"\u8DDD\u79BB\u5E95\u90E8\u7684\u8DDD\u79BB"}),n("td",{children:n("em",{children:"CSSProperties['bottom']"})})]}),e("tr",{children:[n("td",{children:"left"}),n("td",{children:"\u8DDD\u79BB\u5DE6\u4FA7\u7684\u8DDD\u79BB"}),n("td",{children:n("em",{children:"CSSProperties['left']"})})]})]})]}),n("h3",{id:"-9","data-anchor":"-9",children:"FloatingBall \u65B9\u6CD5"}),n("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 FloatingBall \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u65B9\u6CD5\u540D"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"open"}),n("td",{children:"\u6FC0\u6D3B\u83DC\u5355"}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"close"}),n("td",{children:"\u5173\u95ED\u83DC\u5355"}),n("td",{children:"-"})]})]})]}),n("h2",{id:"-10","data-anchor":"-10",children:"\u4E3B\u9898\u5B9A\u5236"}),n("h3",{id:"-11","data-anchor":"-11",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",n("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u540D\u79F0"}),n("th",{children:"\u9ED8\u8BA4\u503C"}),n("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"--rv-floating-ball-size"}),n("td",{children:n("em",{children:"48px"})}),n("td",{children:"\u60AC\u6D6E\u5143\u7D20\u5927\u5C0F"})]}),e("tr",{children:[n("td",{children:"--rv-floating-ball-z-index"}),n("td",{children:n("em",{children:"8"})}),e("td",{children:["\u60AC\u6D6E\u5143\u7D20",n("code",{children:"z-index"}),"\u5C42\u7EA7"]})]})]})]})]})})},O=[{Component:F,key:"floating-ball-base",title:"\u57FA\u7840\u793A\u4F8B"}],M=void 0,U=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:2,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:2,id:"-10"},{depth:3,id:"-11"}],G="/src/components/floating-ball/README.md",j="undefined",L="1766203394000";var X=u=>u.children({MdContent:z,demos:O,frontmatter:M,slugs:U,filePath:G,title:j,updatedTime:L});export{z as MdContent,X as default,O as demos,G as filePath,M as frontmatter,U as slugs,j as title,L as updatedTime};
