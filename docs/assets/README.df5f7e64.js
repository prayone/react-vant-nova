import{r,a as e,F as E,j as n}from"./main.a88292eb.js";import{ei as C,df as m,ej as v,dc as g}from"./FloatingPanel.3fa823e5.js";const t={id:1,condition:`\u65E0\u4F7F\u7528\u95E8\u69DB
\u6700\u591A\u4F18\u60E012\u5143`,reason:"",value:150,name:"\u4F18\u60E0\u5238\u540D\u79F0",description:"\u63CF\u8FF0\u4FE1\u606F",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"\u5143"},b={...t,id:2,value:12,valueDesc:"8.8",unitDesc:"\u6298"},D={...t,id:3,reason:"\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0"},h={...b,valueDesc:"1",unitDesc:"\u6298",id:4,reason:"\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0"},x=(d=999999)=>String(Math.floor(Math.random()*d)+1);var s=()=>{const[d,l]=r.exports.useState([t,h]),[u]=r.exports.useState([D,h]),[o,a]=r.exports.useState(-1),[p,i]=r.exports.useState(!1);return e(E,{children:[n(C,{coupons:d,chosenCoupon:o,onClick:()=>i(!0)}),n(m,{round:!0,position:"bottom",style:{height:"90%",paddingTop:4},visible:p,onClose:()=>i(!1),children:n(v,{chosenCoupon:o,coupons:d,disabledCoupons:u,onChange:c=>{i(!1),a(c)},onExchange:c=>{console.log("code: ",c),g("\u5151\u6362\u6210\u529F"),l(F=>[...F,{...t,id:x()}])}})})]})};const A=`import React, { useState } from 'react'
import { CouponList, Popup, Toast, CouponCell } from 'react-vant-nova'
import { data, disabledDiscountCoupon, disabledCoupon } from './demo'

const getRandomId = (max = 999999) =>
  String(Math.floor(Math.random() * max) + 1)

export default () => {
  const [coupons, setCoupons] = useState([data, disabledDiscountCoupon])
  const [disabledCoupons] = useState([disabledCoupon, disabledDiscountCoupon])
  const [chosenCoupon, setChosenCoupon] = useState(-1)
  const [visible, setVisible] = useState(false)

  const onChange = (index: number) => {
    setVisible(false)
    setChosenCoupon(index)
  }

  const onExchange = code => {
    console.log('code: ', code)
    Toast('\u5151\u6362\u6210\u529F')
    setCoupons(v => [...v, { ...data, id: getRandomId() } as any])
  }

  return (
    <>
      <CouponCell
        coupons={coupons}
        chosenCoupon={chosenCoupon}
        onClick={() => setVisible(true)}
      />
      <Popup
        round
        position='bottom'
        style={{ height: '90%', paddingTop: 4 }}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CouponList
          chosenCoupon={chosenCoupon}
          coupons={coupons}
          disabledCoupons={disabledCoupons}
          onChange={onChange}
          onExchange={onExchange}
        />
      </Popup>
    </>
  )
}
`,f={code:A,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { CouponList, Popup, Toast, CouponCell } from 'react-vant-nova'
import { data, disabledDiscountCoupon, disabledCoupon } from './demo'

const getRandomId = (max = 999999) =>
  String(Math.floor(Math.random() * max) + 1)

export default () => {
  const [coupons, setCoupons] = useState([data, disabledDiscountCoupon])
  const [disabledCoupons] = useState([disabledCoupon, disabledDiscountCoupon])
  const [chosenCoupon, setChosenCoupon] = useState(-1)
  const [visible, setVisible] = useState(false)

  const onChange = (index: number) => {
    setVisible(false)
    setChosenCoupon(index)
  }

  const onExchange = code => {
    console.log('code: ', code)
    Toast('\u5151\u6362\u6210\u529F')
    setCoupons(v => [...v, { ...data, id: getRandomId() } as any])
  }

  return (
    <>
      <CouponCell
        coupons={coupons}
        chosenCoupon={chosenCoupon}
        onClick={() => setVisible(true)}
      />
      <Popup
        round
        position='bottom'
        style={{ height: '90%', paddingTop: 4 }}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CouponList
          chosenCoupon={chosenCoupon}
          coupons={coupons}
          disabledCoupons={disabledCoupons}
          onChange={onChange}
          onExchange={onExchange}
        />
      </Popup>
    </>
  )
}
`},"demo.ts":{type:"FILE",value:`export const data = {
  id: 1,
  condition: '\u65E0\u4F7F\u7528\u95E8\u69DB\\n\u6700\u591A\u4F18\u60E012\u5143',
  reason: '',
  value: 150,
  name: '\u4F18\u60E0\u5238\u540D\u79F0',
  description: '\u63CF\u8FF0\u4FE1\u606F',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '\u5143',
}

export const discountCoupon = {
  ...data,
  id: 2,
  value: 12,
  valueDesc: '8.8',
  unitDesc: '\u6298',
}

export const disabledCoupon = {
  ...data,
  id: 3,
  reason: '\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0',
}

export const disabledDiscountCoupon = {
  ...discountCoupon,
  valueDesc: '1',
  unitDesc: '\u6298',
  id: 4,
  reason: '\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0',
}
`}},key:"coupon-list-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},B=function({previewer:d=()=>null,api:l=()=>null}){const u=d;return n("div",{children:e("div",{children:[n("h1",{id:"","data-anchor":"",children:"Coupon \u4F18\u60E0\u5238\u9009\u62E9\u5668"}),n("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),n("p",{children:"\u7528\u4E8E\u4F18\u60E0\u5238\u7684\u5151\u6362\u548C\u9009\u62E9\u3002"}),n("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),n(u,{code:"import { CouponCell, CouponList } from 'react-vant-nova';",lang:"js"}),n("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),n(u,{...f,children:n(s,{})}),n("h2",{id:"-5","data-anchor":"-5",children:"API"}),n("h3",{id:"-6","data-anchor":"-6",children:"CouponCell Props"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"title"}),n("td",{children:"\u5355\u5143\u683C\u6807\u9898"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:n("code",{children:"\u4F18\u60E0\u5238"})})]}),e("tr",{children:[n("td",{children:"chosenCoupon"}),n("td",{children:"\u5F53\u524D\u9009\u4E2D\u4F18\u60E0\u5238\u7684\u7D22\u5F15"}),n("td",{children:n("em",{children:"number | string"})}),n("td",{children:n("code",{children:"-1"})})]}),e("tr",{children:[n("td",{children:"coupons"}),n("td",{children:"\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868"}),n("td",{children:n("em",{children:"Coupon[]"})}),n("td",{children:n("code",{children:"[]"})})]}),e("tr",{children:[n("td",{children:"editable"}),n("td",{children:"\u80FD\u5426\u5207\u6362\u4F18\u60E0\u5238"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"border"}),n("td",{children:"\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"currency"}),n("td",{children:"\u8D27\u5E01\u7B26\u53F7"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"\xA5"})})]})]})]}),n("h3",{id:"-7","data-anchor":"-7",children:"CouponList Props"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"code"}),n("td",{children:"\u5F53\u524D\u8F93\u5165\u7684\u5151\u6362\u7801"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"chosenCoupon"}),n("td",{children:"\u5F53\u524D\u9009\u4E2D\u4F18\u60E0\u5238\u7684\u7D22\u5F15"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:n("code",{children:"-1"})})]}),e("tr",{children:[n("td",{children:"coupons"}),n("td",{children:"\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868"}),n("td",{children:n("em",{children:"Coupon[]"})}),n("td",{children:n("code",{children:"[]"})})]}),e("tr",{children:[n("td",{children:"disabledCoupons"}),n("td",{children:"\u4E0D\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868"}),n("td",{children:n("em",{children:"Coupon[]"})}),n("td",{children:n("code",{children:"[]"})})]}),e("tr",{children:[n("td",{children:"enabledTitle"}),n("td",{children:"\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868\u6807\u9898"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"\u53EF\u4F7F\u7528\u4F18\u60E0\u5238"})})]}),e("tr",{children:[n("td",{children:"disabledTitle"}),n("td",{children:"\u4E0D\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868\u6807\u9898"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"\u4E0D\u53EF\u4F7F\u7528\u4F18\u60E0\u5238"})})]}),e("tr",{children:[n("td",{children:"exchangeButtonText"}),n("td",{children:"\u5151\u6362\u6309\u94AE\u6587\u5B57"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"\u5151\u6362"})})]}),e("tr",{children:[n("td",{children:"exchangeButtonLoading"}),n("td",{children:"\u662F\u5426\u663E\u793A\u5151\u6362\u6309\u94AE\u52A0\u8F7D\u52A8\u753B"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),e("tr",{children:[n("td",{children:"exchangeButtonDisabled"}),n("td",{children:"\u662F\u5426\u7981\u7528\u5151\u6362\u6309\u94AE"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),e("tr",{children:[n("td",{children:"exchangeMinLength"}),n("td",{children:"\u5151\u6362\u7801\u6700\u5C0F\u957F\u5EA6"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:n("code",{children:"1"})})]}),e("tr",{children:[n("td",{children:"displayedCouponIndex"}),n("td",{children:"\u6EDA\u52A8\u81F3\u7279\u5B9A\u4F18\u60E0\u5238\u4F4D\u7F6E"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"showCloseButton"}),n("td",{children:"\u662F\u5426\u663E\u793A\u5217\u8868\u5E95\u90E8\u6309\u94AE"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"closeButtonText"}),n("td",{children:"\u5217\u8868\u5E95\u90E8\u6309\u94AE\u6587\u5B57"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"\u4E0D\u4F7F\u7528\u4F18\u60E0"})})]}),e("tr",{children:[n("td",{children:"inputPlaceholder"}),n("td",{children:"\u8F93\u5165\u6846\u6587\u5B57\u63D0\u793A"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"\u8BF7\u8F93\u5165\u4F18\u60E0\u7801"})})]}),e("tr",{children:[n("td",{children:"showExchangeBar"}),n("td",{children:"\u662F\u5426\u5C55\u793A\u5151\u6362\u680F"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"currency"}),n("td",{children:"\u8D27\u5E01\u7B26\u53F7"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"\xA5"})})]}),e("tr",{children:[n("td",{children:"emptyImage"}),n("td",{children:"\u5217\u8868\u4E3A\u7A7A\u65F6\u7684\u5360\u4F4D\u56FE"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"https://img.yzcdn.cn/vant/coupon-empty.png"})})]}),e("tr",{children:[n("td",{children:"showCount"}),n("td",{children:"\u662F\u5426\u5C55\u793A\u53EF\u7528 / \u4E0D\u53EF\u7528\u6570\u91CF"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"listFooter"}),n("td",{children:"\u4F18\u60E0\u5238\u5217\u8868\u5E95\u90E8"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"disabledListFooter"}),n("td",{children:"\u4E0D\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868\u5E95\u90E8"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]})]})]}),n("h3",{id:"-8","data-anchor":"-8",children:"CouponList Events"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u4E8B\u4EF6\u540D"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"onChange"}),n("td",{children:"\u4F18\u60E0\u5238\u5207\u6362\u56DE\u8C03"}),n("td",{children:"index, \u9009\u4E2D\u4F18\u60E0\u5238\u7684\u7D22\u5F15"})]}),e("tr",{children:[n("td",{children:"onExchange"}),n("td",{children:"\u5151\u6362\u4F18\u60E0\u5238\u56DE\u8C03"}),n("td",{children:"code, \u5151\u6362\u7801"})]})]})]}),n("h3",{id:"-9","data-anchor":"-9",children:"Coupon \u6570\u636E\u7ED3\u6784"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u952E\u540D"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"id"}),n("td",{children:"\u4F18\u60E0\u5238 id"}),n("td",{children:n("em",{children:"string"})})]}),e("tr",{children:[n("td",{children:"name"}),n("td",{children:"\u4F18\u60E0\u5238\u540D\u79F0"}),n("td",{children:n("em",{children:"string"})})]}),e("tr",{children:[n("td",{children:"condition"}),n("td",{children:"\u6EE1\u51CF\u6761\u4EF6"}),n("td",{children:n("em",{children:"string"})})]}),e("tr",{children:[n("td",{children:"startAt"}),n("td",{children:"\u5361\u6709\u6548\u5F00\u59CB\u65F6\u95F4 (\u65F6\u95F4\u6233, \u5355\u4F4D\u79D2)"}),n("td",{children:n("em",{children:"number"})})]}),e("tr",{children:[n("td",{children:"endAt"}),n("td",{children:"\u5361\u5931\u6548\u65E5\u671F (\u65F6\u95F4\u6233, \u5355\u4F4D\u79D2)"}),n("td",{children:n("em",{children:"number"})})]}),e("tr",{children:[n("td",{children:"description"}),n("td",{children:"\u63CF\u8FF0\u4FE1\u606F\uFF0C\u4F18\u60E0\u5238\u53EF\u7528\u65F6\u5C55\u793A"}),n("td",{children:n("em",{children:"string"})})]}),e("tr",{children:[n("td",{children:"reason"}),n("td",{children:"\u4E0D\u53EF\u7528\u539F\u56E0\uFF0C\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u65F6\u5C55\u793A"}),n("td",{children:n("em",{children:"string"})})]}),e("tr",{children:[n("td",{children:"value"}),n("td",{children:"\u6298\u6263\u5238\u4F18\u60E0\u91D1\u989D\uFF0C\u5355\u4F4D\u5206"}),n("td",{children:n("em",{children:"number"})})]}),e("tr",{children:[n("td",{children:"valueDesc"}),n("td",{children:"\u6298\u6263\u5238\u4F18\u60E0\u91D1\u989D\u6587\u6848"}),n("td",{children:n("em",{children:"string"})})]}),e("tr",{children:[n("td",{children:"unitDesc"}),n("td",{children:"\u5355\u4F4D\u6587\u6848"}),n("td",{children:n("em",{children:"string"})})]})]})]}),n("h2",{id:"-10","data-anchor":"-10",children:"\u4E3B\u9898\u5B9A\u5236"}),n("h3",{id:"-11","data-anchor":"-11",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",n("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u540D\u79F0"}),n("th",{children:"\u9ED8\u8BA4\u503C"}),n("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"--rv-coupon-margin"}),n("td",{children:n("em",{children:"0 var(--rv-padding-sm) var(--rv-padding-sm)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-content-height"}),n("td",{children:n("em",{children:"84px"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-content-padding"}),n("td",{children:n("em",{children:"14px 0"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-background-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-active-background-color"}),n("td",{children:n("em",{children:"var(--rv-active-color)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-border-radius"}),n("td",{children:n("em",{children:"var(--rv-border-radius-lg)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-box-shadow"}),n("td",{children:n("em",{children:"0 0 4px rgba(0, 0, 0, 0.1)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-head-width"}),n("td",{children:n("em",{children:"96px"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-amount-color"}),n("td",{children:n("em",{children:"var(--rv-primary-color)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-amount-font-size"}),n("td",{children:n("em",{children:"30px"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-currency-font-size"}),n("td",{children:n("em",{children:"40%"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-name-font-size"}),n("td",{children:n("em",{children:"var(--rv-font-size-md)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-disabled-text-color"}),n("td",{children:n("em",{children:"var(--rv-gray-6)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-description-padding"}),n("td",{children:n("em",{children:"var(--rv-padding-xs) var(--rv-padding-md)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-description-border-color"}),n("td",{children:n("em",{children:"var(--rv-border-color)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-corner-checkbox-icon-color"}),n("td",{children:n("em",{children:"var(--rv-primary-color)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-list-background-color"}),n("td",{children:n("em",{children:"var(--rv-background-color)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-list-field-padding"}),n("td",{children:n("em",{children:"5px 0 5px var(--rv-padding-md)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-list-exchange-button-height"}),n("td",{children:n("em",{children:"32px"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-list-close-button-height"}),n("td",{children:n("em",{children:"40px"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-list-empty-image-size"}),n("td",{children:n("em",{children:"200px"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-list-empty-tip-color"}),n("td",{children:n("em",{children:"var(--rv-gray-6)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-list-empty-tip-font-size"}),n("td",{children:n("em",{children:"var(--rv-font-size-md)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-list-empty-tip-line-height"}),n("td",{children:n("em",{children:"var(--rv-line-height-md)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-coupon-cell-selected-text-color"}),n("td",{children:n("em",{children:"var(--rv-text-color)"})}),n("td",{children:"-"})]})]})]})]})})},y=[{Component:s,key:"coupon-list-demo",title:"\u57FA\u7840\u7528\u6CD5"}],S=void 0,P=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:2,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:2,id:"-10"},{depth:3,id:"-11"}],M="/src/components/coupon-list/README.md",L="undefined",R="1766203394000";var w=d=>d.children({MdContent:B,demos:y,frontmatter:S,slugs:P,filePath:M,title:L,updatedTime:R});export{B as MdContent,w as default,y as demos,M as filePath,S as frontmatter,P as slugs,L as title,R as updatedTime};
