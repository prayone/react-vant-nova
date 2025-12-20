import{j as n,r as t,a as e}from"./main.6d1ac2ec.js";import{h as s,i as a,R as v,j as h,B as p}from"./FloatingPanel.f57aae97.js";import{C as i}from"./ConfigProvider.4d49869f.js";var F={name:"Name",tel:"Phone",save:"Save",confirm:"Confirm",cancel:"Cancel",delete:"Delete",loading:"Loading...",noCoupon:"No coupons",nameEmpty:"Please fill in the name",telInvalid:"Malformed phone number",vanCalendar:{end:"End",start:"Start",confirm:"Confirm",title:"Calendar",startEnd:"Start/End",weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthTitle:(u,o)=>`${u}/${o}`,rangePrompt:u=>`Choose no more than ${u} days`},vanCascader:{select:"Select"},vanPagination:{prev:"Previous",next:"Next"},vanPullRefresh:{pulling:"Pull to refresh...",loosing:"Loose to refresh...",loading:"Loading..."},vanSubmitBar:{label:"Total\uFF1A"},vanCoupon:{unlimited:"Unlimited",discount:u=>`${u*10}% off`,condition:u=>`At least ${u}`},vanCouponCell:{title:"Coupon",count:u=>`You have ${u} coupons`},vanCouponList:{exchange:"Exchange",close:"Close",enable:"Available",disabled:"Unavailable",placeholder:"Coupon code"}};var d=()=>n("div",{className:"demo-config-prodiver",children:n(i,{locale:F,children:n(s,{style:{height:420},poppable:!1})})});const C=`import React from 'react'
import { ConfigProvider, Calendar } from 'react-vant-nova'
import locale from './enUs'
import './style.less'

export default () => {
  return (
    <div className='demo-config-prodiver'>
      <ConfigProvider locale={locale}>
        <Calendar style={{ height: 420 }} poppable={false} />
      </ConfigProvider>
    </div>
  )
}
`,E={code:C,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { ConfigProvider, Calendar } from 'react-vant-nova'
import locale from './enUs'
import './style.less'

export default () => {
  return (
    <div className='demo-config-prodiver'>
      <ConfigProvider locale={locale}>
        <Calendar style={{ height: 420 }} poppable={false} />
      </ConfigProvider>
    </div>
  )
}
`},"enUs.ts":{type:"FILE",value:`export default {
  name: 'Name',
  tel: 'Phone',
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  delete: 'Delete',
  loading: 'Loading...',
  noCoupon: 'No coupons',
  nameEmpty: 'Please fill in the name',
  telInvalid: 'Malformed phone number',
  vanCalendar: {
    end: 'End',
    start: 'Start',
    confirm: 'Confirm',
    title: 'Calendar',
    startEnd: 'Start/End',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthTitle: (year: number, month: number) => \`\${year}/\${month}\`,
    rangePrompt: (maxRange: number) => \`Choose no more than \${maxRange} days\`,
  },
  vanCascader: {
    select: 'Select',
  },
  vanPagination: {
    prev: 'Previous',
    next: 'Next',
  },
  vanPullRefresh: {
    pulling: 'Pull to refresh...',
    loosing: 'Loose to refresh...',
    loading: 'Loading...',
  },
  vanSubmitBar: {
    label: 'Total\uFF1A',
  },
  vanCoupon: {
    unlimited: 'Unlimited',
    discount: (discount: number) => \`\${discount * 10}% off\`,
    condition: (condition: number) => \`At least \${condition}\`,
  },
  vanCouponCell: {
    title: 'Coupon',
    count: (count: number) => \`You have \${count} coupons\`,
  },
  vanCouponList: {
    exchange: 'Exchange',
    close: 'Close',
    enable: 'Available',
    disabled: 'Unavailable',
    placeholder: 'Coupon code',
  },
}
`},"style.less":{type:"FILE",value:`.demo-config-provider {
  background: #fff;

  .iconfont {
    font-size: 24px;
  }

  .vant-doc-demo-block {
    padding: 0 16px;
  }

  .vant-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: 8px;
  }
}
`}},key:"config-provider-locale",meta:{title:"\u8BED\u8A00\u5207\u6362"}},f={rateIconFullColor:"#ffcc56",sliderBarHeight:"4px",sliderButtonWidth:"20px",sliderButtonHeight:"20px",sliderActiveBackgroundColor:"#951fff",buttonPrimaryBorderColor:"#951fff",buttonPrimaryBackgroundColor:"#951fff"};var l=()=>{const[u,o]=t.exports.useState(4),[r,c]=t.exports.useState(50);return n("div",{className:"demo-config-prodiver",children:e(i,{themeVars:f,children:[n(a,{label:"\u8BC4\u5206",children:n(v,{value:u,onChange:o})}),n(a,{label:"\u6ED1\u5757",children:n(h,{value:r,onChange:c})}),n("div",{style:{margin:16},children:n(p,{block:!0,round:!0,type:"primary",children:"\u63D0\u4EA4"})})]})})};const g=`import React, { useState } from 'react'
import { ConfigProvider, Button, Rate, Field, Slider } from 'react-vant-nova'
import './style.less'

const themeVars = {
  rateIconFullColor: '#ffcc56',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#951fff',
  buttonPrimaryBorderColor: '#951fff',
  buttonPrimaryBackgroundColor: '#951fff',
}

export default () => {
  const [rate, updateRate] = useState(4)
  const [slider, updateSlider] = useState(50)
  return (
    <div className='demo-config-prodiver'>
      <ConfigProvider themeVars={themeVars}>
        <Field label='\u8BC4\u5206'>
          <Rate value={rate} onChange={updateRate} />
        </Field>
        <Field label='\u6ED1\u5757'>
          <Slider value={slider} onChange={updateSlider} />
        </Field>
        <div style={{ margin: 16 }}>
          <Button block round type='primary'>
            \u63D0\u4EA4
          </Button>
        </div>
      </ConfigProvider>
    </div>
  )
}
`,m={code:g,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { ConfigProvider, Button, Rate, Field, Slider } from 'react-vant-nova'
import './style.less'

const themeVars = {
  rateIconFullColor: '#ffcc56',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#951fff',
  buttonPrimaryBorderColor: '#951fff',
  buttonPrimaryBackgroundColor: '#951fff',
}

export default () => {
  const [rate, updateRate] = useState(4)
  const [slider, updateSlider] = useState(50)
  return (
    <div className='demo-config-prodiver'>
      <ConfigProvider themeVars={themeVars}>
        <Field label='\u8BC4\u5206'>
          <Rate value={rate} onChange={updateRate} />
        </Field>
        <Field label='\u6ED1\u5757'>
          <Slider value={slider} onChange={updateSlider} />
        </Field>
        <div style={{ margin: 16 }}>
          <Button block round type='primary'>
            \u63D0\u4EA4
          </Button>
        </div>
      </ConfigProvider>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-config-provider {
  background: #fff;

  .iconfont {
    font-size: 24px;
  }

  .vant-doc-demo-block {
    padding: 0 16px;
  }

  .vant-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: 8px;
  }
}
`}},key:"config-provider-base",meta:{title:"\u5B9A\u5236\u4E3B\u9898"}},B=function({previewer:u=()=>null,api:o=()=>null}){const r=u;return n("div",{children:e("div",{children:[n("h1",{id:"","data-anchor":"",children:"ConfigProvider \u5168\u5C40\u914D\u7F6E"}),n("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),n("p",{children:"\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u5168\u5C40\u5316\u914D\u7F6E\u3002"}),n("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),n("p",{children:"ConfigProvider \u4F7F\u7528 React \u7684 context \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002"}),n(r,{code:`import { ConfigProvider } from 'react-vant-nova';

export default () => (
  <ConfigProvider>
    <App />
  </ConfigProvider>
);`,lang:"jsx"}),n("h3",{id:"-3","data-anchor":"-3",children:"\u8BED\u8A00\u5207\u6362"}),e("p",{children:["\u4F7F\u7528 ",n("code",{children:"locale"})," \u5C5E\u6027\u5207\u6362\u8BED\u8A00\u3002"]}),n("div",{children:n(r,{...E,children:n(d,{})})}),n("h3",{id:"-4","data-anchor":"-4",children:"\u5B9A\u5236\u4E3B\u9898"}),e("p",{children:[n("code",{children:"ConfigProvider"})," \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u8986\u76D6 CSS \u53D8\u91CF\u7684\u80FD\u529B\uFF0C\u4F60\u9700\u8981\u5728\u6839\u8282\u70B9\u5305\u88F9\u4E00\u4E2A ",n("code",{children:"ConfigProvider"})," \u7EC4\u4EF6\uFF0C\u5E76\u901A\u8FC7 ",n("code",{children:"themeVars"})," \u5C5E\u6027\u6765\u914D\u7F6E\u4E00\u4E9B\u4E3B\u9898\u53D8\u91CF\u3002"]}),n("div",{children:n(r,{...m,children:n(l,{})})}),n("blockquote",{children:n("p",{children:"\u6CE8\u610F\uFF1AConfigProvider \u4EC5\u5F71\u54CD\u5B83\u7684\u5B50\u7EC4\u4EF6\u7684\u6837\u5F0F\uFF0C\u4E0D\u5F71\u54CD\u5168\u5C40 root \u8282\u70B9\u3002"})}),n("h3",{id:"-5","data-anchor":"-5",children:"\u5173\u4E8E\u4E3B\u9898"}),e("p",{children:["React Vant \u7EC4\u4EF6\u901A\u8FC7\u4E30\u5BCC\u7684 ",n("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties",children:"CSS \u53D8\u91CF"})," \u6765\u7EC4\u7EC7\u6837\u5F0F\uFF0C\u901A\u8FC7\u8986\u76D6\u8FD9\u4E9B CSS \u53D8\u91CF\uFF0C\u53EF\u4EE5\u5B9E\u73B0",n("strong",{children:"\u5B9A\u5236\u4E3B\u9898\u3001\u52A8\u6001\u5207\u6362\u4E3B\u9898"}),"\u7B49\u6548\u679C\u3002"]}),n("h4",{id:"-6","data-anchor":"-6",children:"\u793A\u4F8B"}),e("p",{children:["\u4EE5 Button \u7EC4\u4EF6\u4E3A\u4F8B\uFF0C\u67E5\u770B\u7EC4\u4EF6\u7684\u6837\u5F0F\uFF0C\u53EF\u4EE5\u770B\u5230 ",n("code",{children:".rv-button--primary"})," \u7C7B\u540D\u4E0A\u5B58\u5728\u4EE5\u4E0B\u53D8\u91CF\uFF1A"]}),n(r,{code:`.rv-button--primary {
  color: var(--rv-button-primary-color);
  background-color: var(--rv-button-primary-background-color);
}`,lang:"css"}),e("p",{children:["\u8FD9\u4E9B\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C\u88AB\u5B9A\u4E49\u5728 ",n("code",{children:"root"})," \u8282\u70B9\u4E0A\uFF0CHTML \u6587\u6863\u7684\u4EFB\u4F55\u8282\u70B9\u90FD\u53EF\u4EE5\u8BBF\u95EE\u5230\u8FD9\u4E9B\u53D8\u91CF\uFF1A"]}),n(r,{code:`:root {
  --rv-white: #fff;
  --rv-blue: #3f45ff;
  --rv-button-primary-color: var(--rv-white);
  --rv-button-primary-background-color: var(--rv-primary-color);
}`,lang:"css"}),n("h3",{id:"-7","data-anchor":"-7",children:"\u81EA\u5B9A\u4E49 CSS \u53D8\u91CF"}),n("h4",{id:"-8","data-anchor":"-8",children:"\u901A\u8FC7 CSS \u8986\u76D6"}),n("p",{children:"\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728\u4EE3\u7801\u4E2D\u8986\u76D6\u8FD9\u4E9B CSS \u53D8\u91CF\uFF0CButton \u7EC4\u4EF6\u7684\u6837\u5F0F\u4F1A\u968F\u4E4B\u53D1\u751F\u6539\u53D8\uFF1A"}),n(r,{code:`/* \u6DFB\u52A0\u8FD9\u6BB5\u6837\u5F0F\u540E\uFF0CPrimary Button \u4F1A\u53D8\u6210\u7EA2\u8272 */
:root {
  --rv-button-primary-background-color: red;
}`,lang:"css"}),n("h3",{id:"-9","data-anchor":"-9",children:"\u57FA\u7840\u53D8\u91CF"}),e("p",{children:["React Vant \u4E2D\u7684 CSS \u53D8\u91CF\u5206\u4E3A ",n("strong",{children:"\u57FA\u7840\u53D8\u91CF"})," \u548C ",n("strong",{children:"\u7EC4\u4EF6\u53D8\u91CF"}),"\u3002\u7EC4\u4EF6\u53D8\u91CF\u4F1A\u7EE7\u627F\u57FA\u7840\u53D8\u91CF\uFF0C\u56E0\u6B64\u5728\u4FEE\u6539\u57FA\u7840\u53D8\u91CF\u540E\uFF0C\u4F1A\u5F71\u54CD\u6240\u6709\u76F8\u5173\u7684\u7EC4\u4EF6\u3002"]}),n("h4",{id:"-10","data-anchor":"-10",children:"\u4FEE\u6539\u53D8\u91CF"}),n("p",{children:"\u7531\u4E8E CSS \u53D8\u91CF\u7EE7\u627F\u673A\u5236\u7684\u539F\u56E0\uFF0C\u4E24\u8005\u7684\u4FEE\u6539\u65B9\u5F0F\u6709\u4E00\u5B9A\u5DEE\u5F02\uFF1A"}),e("ul",{children:[e("li",{children:["\u57FA\u7840\u53D8\u91CF\u53EA\u80FD\u901A\u8FC7 ",n("code",{children:"root \u9009\u62E9\u5668"})," \u4FEE\u6539\uFF0C\u4E0D\u80FD\u901A\u8FC7 ",n("code",{children:"ConfigProvider \u7EC4\u4EF6"})," \u4FEE\u6539\u3002"]}),e("li",{children:["\u7EC4\u4EF6\u53D8\u91CF\u53EF\u4EE5\u901A\u8FC7 ",n("code",{children:"root \u9009\u62E9\u5668"})," \u548C ",n("code",{children:"ConfigProvider \u7EC4\u4EF6"})," \u4FEE\u6539\u3002"]})]}),n("h4",{id:"-11","data-anchor":"-11",children:"\u53D8\u91CF\u5217\u8868"}),n("p",{children:"\u4E0B\u9762\u662F\u6240\u6709\u7684\u57FA\u7840\u53D8\u91CF\uFF1A"}),n(r,{code:`// Color Palette
--rv-black: #000;
--rv-white: #fff;
--rv-gray-1: #f7f8fa;
--rv-gray-2: #f2f3f5;
--rv-gray-3: #ebedf0;
--rv-gray-4: #dcdee0;
--rv-gray-5: #c8c9cc;
--rv-gray-6: #969799;
--rv-gray-7: #646566;
--rv-gray-8: #323233;
--rv-red: #ee0a24;
--rv-blue: #3f45ff;
--rv-orange: #ff976a;
--rv-orange-dark: #ed6a0c;
--rv-orange-light: #fffbe8;
--rv-green: #07c160;

// Gradient Colors
--rv-gradient-red: linear-gradient(to right, #ff6034, #ee0a24);
--rv-gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);

// Component Colors
--rv-primary-color: var(--rv-blue);
--rv-success-color: var(--rv-green);
--rv-danger-color: var(--rv-red);
--rv-warning-color: var(--rv-orange);
--rv-text-color: var(--rv-gray-8);
--rv-active-color: var(--rv-gray-2);
--rv-active-opacity: 0.7;
--rv-disabled-opacity: 0.5;
--rv-background-color: var(--rv-gray-1);
--rv-background-color-light: #fafafa;
--rv-text-link-color: #576b95;

// Padding
--rv-padding-base: 4px;
--rv-padding-xs: 8px;
--rv-padding-sm: 12px;
--rv-padding-md: 16px;
--rv-padding-lg: 24px;
--rv-padding-xl: 32px;

// Font
--rv-font-size-xs: 10px;
--rv-font-size-sm: 12px;
--rv-font-size-md: 14px;
--rv-font-size-lg: 16px;
--rv-font-weight-bold: 500;
--rv-line-height-xs: 14px;
--rv-line-height-sm: 18px;
--rv-line-height-md: 20px;
--rv-line-height-lg: 22px;
--rv-base-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial,
  Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
--rv-price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;

// Animation
--rv-animation-duration-base: 0.3s;
--rv-animation-duration-fast: 0.2s;
--rv-animation-timing-function-enter: ease-out;
--rv-animation-timing-function-leave: ease-in;

// Border
--rv-border-color: var(--rv-gray-3);
--rv-border-width-base: 1px;
--rv-border-radius-sm: 2px;
--rv-border-radius-md: 4px;
--rv-border-radius-lg: 8px;
--rv-border-radius-max: 999px;`,lang:"less"}),n("p",{children:"\u4F60\u53EF\u4EE5\u5728\u5404\u4E2A\u7EC4\u4EF6\u6587\u6863\u5E95\u90E8\u7684\u8868\u683C\u4E2D\u67E5\u770B\u7EC4\u4EF6\u53D8\u91CF\u3002"}),n("h2",{id:"-12","data-anchor":"-12",children:"API"}),n("h3",{id:"-13","data-anchor":"-13",children:"Props"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"themeVars"}),n("td",{children:"\u81EA\u5B9A\u4E49\u4E3B\u9898\u53D8\u91CF"}),n("td",{children:n("em",{children:"object"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"locale"}),n("td",{children:"\u81EA\u5B9A\u4E49\u8BED\u8A00"}),n("td",{children:n("em",{children:"object"})}),n("td",{children:n("code",{children:"zhCN"})})]}),e("tr",{children:[n("td",{children:"tag"}),e("td",{children:[n("code",{children:"ConfigProdiver"}),"\u5BF9\u5E94\u7684 HTML \u8282\u70B9\u6807\u7B7E\u540D"]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"div"})})]})]})]})]})})},b=[{Component:d,key:"config-provider-locale",title:"\u8BED\u8A00\u5207\u6362"},{Component:l,key:"config-provider-base",title:"\u5B9A\u5236\u4E3B\u9898"}],y=void 0,D=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:4,id:"-6"},{depth:3,id:"-7"},{depth:4,id:"-8"},{depth:3,id:"-9"},{depth:4,id:"-10"},{depth:4,id:"-11"},{depth:2,id:"-12"},{depth:3,id:"-13"}],A="/src/components/config-provider/README.md",x="undefined",P="1766203394000";var N=u=>u.children({MdContent:B,demos:b,frontmatter:y,slugs:D,filePath:A,title:x,updatedTime:P});export{B as MdContent,N as default,b as demos,A as filePath,y as frontmatter,D as slugs,x as title,P as updatedTime};
