import{a as e,j as n}from"./main.7a53fb72.js";import{I as r,F as t,dZ as o}from"./FloatingPanel.c7f80ee3.js";const s="https://img.yzcdn.cn/vant/cat.jpeg";var i=()=>e("div",{className:"demo-image",children:e(r,{width:"100",height:"100",src:s})});const F=`import React from 'react'
import { Image } from 'react-vant-nova'
import './style.less'

const src = 'https://img.yzcdn.cn/vant/cat.jpeg'

export default () => {
  return (
    <div className='demo-image'>
      <Image width='100' height='100' src={src} />
    </div>
  )
}
`,m={code:F,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Image } from 'react-vant-nova'
import './style.less'

const src = 'https://img.yzcdn.cn/vant/cat.jpeg'

export default () => {
  return (
    <div className='demo-image'>
      <Image width='100' height='100' src={src} />
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-image {
  .text {
    margin-top: 5px;
    color: #646566;
    font-size: 14px;
    text-align: center;
  }
}
`}},key:"image-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},p="https://img.yzcdn.cn/vant/cat.jpeg",g=["contain","cover","fill","none","scale-down"];var c=()=>e("div",{className:"demo-image",children:e(t,{wrap:"wrap",gutter:20,children:g.map(u=>n(t.Item,{span:8,children:[e(r,{fit:u,width:"100%",height:"27vw",src:p})," ",e("div",{className:"text",children:u})]},u))})});const v=`import React from 'react'
import { Flex, Image } from 'react-vant-nova'
import './style.less'

const src = 'https://img.yzcdn.cn/vant/cat.jpeg'
const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const

export default () => {
  return (
    <div className='demo-image'>
      <Flex wrap='wrap' gutter={20}>
        {fits.map(el => (
          <Flex.Item key={el} span={8}>
            <Image fit={el} width='100%' height='27vw' src={src} />{' '}
            <div className='text'>{el}</div>
          </Flex.Item>
        ))}
      </Flex>
    </div>
  )
}
`,E={code:v,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Flex, Image } from 'react-vant-nova'
import './style.less'

const src = 'https://img.yzcdn.cn/vant/cat.jpeg'
const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const

export default () => {
  return (
    <div className='demo-image'>
      <Flex wrap='wrap' gutter={20}>
        {fits.map(el => (
          <Flex.Item key={el} span={8}>
            <Image fit={el} width='100%' height='27vw' src={src} />{' '}
            <div className='text'>{el}</div>
          </Flex.Item>
        ))}
      </Flex>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-image {
  .text {
    margin-top: 5px;
    color: #646566;
    font-size: 14px;
    text-align: center;
  }
}
`}},key:"image-fit",meta:{title:"\u586B\u5145\u6A21\u5F0F"}},D="https://img.yzcdn.cn/vant/cat.jpeg",x=["contain","cover","fill","none","scale-down"];var l=()=>e("div",{className:"demo-image",children:e(t,{wrap:"wrap",gutter:20,children:x.map(u=>n(t.Item,{span:8,children:[e(r,{round:!0,fit:u,width:"100%",height:"27vw",src:D})," ",e("div",{className:"text",children:u})]},u))})});const A=`import React from 'react'
import { Flex, Image } from 'react-vant-nova'
import './style.less'

const src = 'https://img.yzcdn.cn/vant/cat.jpeg'

const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const

export default () => {
  return (
    <div className='demo-image'>
      <Flex wrap='wrap' gutter={20}>
        {fits.map(el => (
          <Flex.Item key={el} span={8}>
            <Image round fit={el} width='100%' height='27vw' src={src} />{' '}
            <div className='text'>{el}</div>
          </Flex.Item>
        ))}
      </Flex>
    </div>
  )
}
`,C={code:A,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Flex, Image } from 'react-vant-nova'
import './style.less'

const src = 'https://img.yzcdn.cn/vant/cat.jpeg'

const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const

export default () => {
  return (
    <div className='demo-image'>
      <Flex wrap='wrap' gutter={20}>
        {fits.map(el => (
          <Flex.Item key={el} span={8}>
            <Image round fit={el} width='100%' height='27vw' src={src} />{' '}
            <div className='text'>{el}</div>
          </Flex.Item>
        ))}
      </Flex>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-image {
  .text {
    margin-top: 5px;
    color: #646566;
    font-size: 14px;
    text-align: center;
  }
}
`}},key:"image-round",meta:{title:"\u5706\u5F62\u56FE\u7247"}};var a=()=>e("div",{className:"demo-image",children:n(t,{wrap:"wrap",gutter:20,children:[n(t.Item,{span:8,children:[e(r,{width:"100%",height:"24vw"}),e("div",{className:"text",children:"\u9ED8\u8BA4\u63D0\u793A"})]}),n(t.Item,{span:8,children:[e(r,{loadingIcon:e(o,{type:"spinner"}),width:"100%",height:"24vw"}),e("div",{className:"text",children:"\u81EA\u5B9A\u4E49\u63D0\u793A"})]})]})});const f=`import React from 'react'
import { Flex, Image, Loading } from 'react-vant-nova'
import './style.less'

export default () => {
  return (
    <div className='demo-image'>
      <Flex wrap='wrap' gutter={20}>
        <Flex.Item span={8}>
          <Image width='100%' height='24vw' />
          <div className='text'>\u9ED8\u8BA4\u63D0\u793A</div>
        </Flex.Item>
        <Flex.Item span={8}>
          <Image
            loadingIcon={<Loading type='spinner' />}
            width='100%'
            height='24vw'
          />
          <div className='text'>\u81EA\u5B9A\u4E49\u63D0\u793A</div>
        </Flex.Item>
      </Flex>
    </div>
  )
}
`,B={code:f,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Flex, Image, Loading } from 'react-vant-nova'
import './style.less'

export default () => {
  return (
    <div className='demo-image'>
      <Flex wrap='wrap' gutter={20}>
        <Flex.Item span={8}>
          <Image width='100%' height='24vw' />
          <div className='text'>\u9ED8\u8BA4\u63D0\u793A</div>
        </Flex.Item>
        <Flex.Item span={8}>
          <Image
            loadingIcon={<Loading type='spinner' />}
            width='100%'
            height='24vw'
          />
          <div className='text'>\u81EA\u5B9A\u4E49\u63D0\u793A</div>
        </Flex.Item>
      </Flex>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-image {
  .text {
    margin-top: 5px;
    color: #646566;
    font-size: 14px;
    text-align: center;
  }
}
`}},key:"image-loading",meta:{title:"\u52A0\u8F7D\u4E2D\u63D0\u793A"}};var h=()=>e("div",{className:"demo-image",children:n(t,{wrap:"wrap",gutter:20,children:[n(t.Item,{span:8,children:[e(r,{width:"100%",height:"24vw",src:"x.jpg"}),e("div",{className:"text",children:"\u9ED8\u8BA4\u63D0\u793A"})]}),n(t.Item,{span:8,children:[e(r,{width:"100%",height:"24vw",src:"x.jpg",errorIcon:e("div",{style:{fontSize:14},children:"\u52A0\u8F7D\u5931\u8D25"})}),e("div",{className:"text",children:"\u81EA\u5B9A\u4E49\u63D0\u793A"})]})]})});const w=`import React from 'react'
import { Flex, Image } from 'react-vant-nova'
import './style.less'

export default () => {
  return (
    <div className='demo-image'>
      <Flex wrap='wrap' gutter={20}>
        <Flex.Item span={8}>
          <Image width='100%' height='24vw' src='x.jpg' />
          <div className='text'>\u9ED8\u8BA4\u63D0\u793A</div>
        </Flex.Item>
        <Flex.Item span={8}>
          <Image
            width='100%'
            height='24vw'
            src='x.jpg'
            errorIcon={<div style={{ fontSize: 14 }}>\u52A0\u8F7D\u5931\u8D25</div>}
          />
          <div className='text'>\u81EA\u5B9A\u4E49\u63D0\u793A</div>
        </Flex.Item>
      </Flex>
    </div>
  )
}
`,I={code:w,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Flex, Image } from 'react-vant-nova'
import './style.less'

export default () => {
  return (
    <div className='demo-image'>
      <Flex wrap='wrap' gutter={20}>
        <Flex.Item span={8}>
          <Image width='100%' height='24vw' src='x.jpg' />
          <div className='text'>\u9ED8\u8BA4\u63D0\u793A</div>
        </Flex.Item>
        <Flex.Item span={8}>
          <Image
            width='100%'
            height='24vw'
            src='x.jpg'
            errorIcon={<div style={{ fontSize: 14 }}>\u52A0\u8F7D\u5931\u8D25</div>}
          />
          <div className='text'>\u81EA\u5B9A\u4E49\u63D0\u793A</div>
        </Flex.Item>
      </Flex>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-image {
  .text {
    margin-top: 5px;
    color: #646566;
    font-size: 14px;
    text-align: center;
  }
}
`}},key:"image-error",meta:{title:"\u52A0\u8F7D\u5931\u8D25\u63D0\u793A"}},y=function({previewer:u=()=>null,api:j=()=>null}){const d=u;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"Image \u56FE\u7247"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u589E\u5F3A\u7248\u7684 img \u6807\u7B7E\uFF0C\u63D0\u4F9B\u591A\u79CD\u56FE\u7247\u586B\u5145\u6A21\u5F0F\uFF0C\u652F\u6301\u56FE\u7247\u61D2\u52A0\u8F7D\u3001\u52A0\u8F7D\u4E2D\u63D0\u793A\u3001\u52A0\u8F7D\u5931\u8D25\u63D0\u793A\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(d,{code:"import { Image } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),n("p",{children:["\u57FA\u7840\u7528\u6CD5\u4E0E\u539F\u751F ",e("code",{children:"img"})," \u6807\u7B7E\u4E00\u81F4\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",e("code",{children:"src"}),"\u3001",e("code",{children:"width"}),"\u3001",e("code",{children:"height"}),"\u3001",e("code",{children:"alt"})," \u7B49\u539F\u751F\u5C5E\u6027\u3002"]}),e("div",{children:e(d,{...m,children:e(i,{})})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u586B\u5145\u6A21\u5F0F"}),n("p",{children:["\u901A\u8FC7 ",e("code",{children:"fit"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u586B\u5145\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u89C1\u4E0B\u65B9\u8868\u683C\u3002"]}),e("div",{children:e(d,{...E,children:e(c,{})})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u5706\u5F62\u56FE\u7247"}),n("p",{children:["\u901A\u8FC7 ",e("code",{children:"round"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u53D8\u5706\uFF0C\u6CE8\u610F\u5F53\u56FE\u7247\u5BBD\u9AD8\u4E0D\u76F8\u7B49\u4E14 ",e("code",{children:"fit"})," \u4E3A ",e("code",{children:"contain"})," \u6216 ",e("code",{children:"scale-down"})," \u65F6\uFF0C\u5C06\u65E0\u6CD5\u586B\u5145\u4E00\u4E2A\u5B8C\u6574\u7684\u5706\u5F62\u3002"]}),e("div",{children:e(d,{...C,children:e(l,{})})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u52A0\u8F7D\u4E2D\u63D0\u793A"}),n("p",{children:[e("code",{children:"Image"})," \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u7684\u52A0\u8F7D\u4E2D\u63D0\u793A\uFF0C\u652F\u6301\u901A\u8FC7 ",e("code",{children:"loadingIcon"})," \u81EA\u5B9A\u4E49\u5185\u5BB9\u3002"]}),e("div",{children:e(d,{...B,children:e(a,{})})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u52A0\u8F7D\u5931\u8D25\u63D0\u793A"}),n("p",{children:[e("code",{children:"Image"})," \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u7684\u52A0\u8F7D\u5931\u8D25\u63D0\u793A\uFF0C\u652F\u6301\u901A\u8FC7 ",e("code",{children:"errorIcon"})," \u81EA\u5B9A\u4E49\u5185\u5BB9\u3002"]}),e("div",{children:e(d,{...I,children:e(h,{})})}),e("h2",{id:"-9","data-anchor":"-9",children:"API"}),e("h3",{id:"-10","data-anchor":"-10",children:"Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"src"}),e("td",{children:"\u56FE\u7247\u94FE\u63A5"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"fit"}),e("td",{children:"\u56FE\u7247\u586B\u5145\u6A21\u5F0F"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"fill"})})]}),n("tr",{children:[e("td",{children:"alt"}),e("td",{children:"\u66FF\u4EE3\u6587\u672C"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"width"}),n("td",{children:["\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"height"}),n("td",{children:["\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"radius"}),n("td",{children:["\u5706\u89D2\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),n("tr",{children:[e("td",{children:"round"}),e("td",{children:"\u662F\u5426\u663E\u793A\u4E3A\u5706\u5F62"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"lazyload"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u61D2\u52A0\u8F7D"}),e("td",{children:n("em",{children:["boolean|",e("a",{href:"/components/lazyload",children:"Lazyload Props"})]})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"showError"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u63D0\u793A"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"showLoading"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u56FE\u7247\u52A0\u8F7D\u4E2D\u63D0\u793A"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"errorIcon"}),e("td",{children:"\u5931\u8D25\u65F6\u63D0\u793A\u7684\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"<PhotoFail />"})})]}),n("tr",{children:[e("td",{children:"loadingIcon"}),e("td",{children:"\u52A0\u8F7D\u65F6\u63D0\u793A\u7684\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"<Photo />"})})]}),n("tr",{children:[e("td",{children:"iconSize"}),e("td",{children:"\u52A0\u8F7D\u56FE\u6807\u548C\u5931\u8D25\u56FE\u6807\u7684\u5927\u5C0F"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"32px"})})]})]})]}),e("h3",{id:"-11","data-anchor":"-11",children:"\u56FE\u7247\u586B\u5145\u6A21\u5F0F"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u542B\u4E49"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"contain"}),e("td",{children:"\u4FDD\u6301\u5BBD\u9AD8\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u957F\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765"})]}),n("tr",{children:[e("td",{children:"cover"}),e("td",{children:"\u4FDD\u6301\u5BBD\u9AD8\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u77ED\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765\uFF0C\u88C1\u526A\u957F\u8FB9"})]}),n("tr",{children:[e("td",{children:"fill"}),e("td",{children:"\u62C9\u4F38\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u586B\u6EE1\u5143\u7D20"})]}),n("tr",{children:[e("td",{children:"none"}),e("td",{children:"\u4FDD\u6301\u56FE\u7247\u539F\u6709\u5C3A\u5BF8"})]}),n("tr",{children:[e("td",{children:"scale-down"}),n("td",{children:["\u53D6 ",e("code",{children:"none"})," \u6216 ",e("code",{children:"contain"})," \u4E2D\u8F83\u5C0F\u7684\u4E00\u4E2A"]})]})]})]}),e("h3",{id:"-12","data-anchor":"-12",children:"Events"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u56FE\u7247\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),n("tr",{children:[e("td",{children:"onLoad"}),e("td",{children:"\u56FE\u7247\u52A0\u8F7D\u5B8C\u6BD5\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onError"}),e("td",{children:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-13","data-anchor":"-13",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(d,{code:"import type { ImageFit } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-14","data-anchor":"-14",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-15","data-anchor":"-15",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"--rv-image-placeholder-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-image-placeholder-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-image-placeholder-background-color"}),e("td",{children:e("em",{children:"var(--rv-background-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-image-loading-icon-size"}),e("td",{children:e("em",{children:"32px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-image-loading-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-4)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-image-error-icon-size"}),e("td",{children:e("em",{children:"32px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-image-error-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-4)"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-16","data-anchor":"-16",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"-17","data-anchor":"-17",children:"\u5982\u4F55\u5F15\u7528\u672C\u5730\u56FE\u7247\uFF1F"}),n("p",{children:["\u5728 .tsx, jsx \u6587\u4EF6\u4E2D\u901A\u8FC7\u76F8\u5BF9\u8DEF\u5F84\u5F15\u7528\u672C\u5730\u56FE\u7247\u65F6\uFF0C\u9700\u8981\u5728\u56FE\u7247\u7684\u94FE\u63A5\u5916\u5305\u4E0A\u4E00\u5C42 ",e("code",{children:"require()"}),"\uFF0C\u5C06\u56FE\u7247 URL \u8F6C\u6362\u4E3A webpack \u6A21\u5757\u8BF7\u6C42\uFF0C\u5E76\u7ED3\u5408 ",e("a",{href:"https://github.com/webpack-contrib/file-loader",children:"file-loader"})," \u6216\u8005 ",e("a",{href:"https://github.com/webpack-contrib/url-loader",children:"url-loader"})," \u8FDB\u884C\u5904\u7406\u3002"]}),e(d,{code:`// \u9519\u8BEF\u5199\u6CD5
<image src="./image.png" />

// \u6B63\u786E\u5199\u6CD5
<image src="require('./image.png')" />`,lang:"html"})]})})},N=[{Component:i,key:"image-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:c,key:"image-fit",title:"\u586B\u5145\u6A21\u5F0F"},{Component:l,key:"image-round",title:"\u5706\u5F62\u56FE\u7247"},{Component:a,key:"image-loading",title:"\u52A0\u8F7D\u4E2D\u63D0\u793A"},{Component:h,key:"image-error",title:"\u52A0\u8F7D\u5931\u8D25\u63D0\u793A"}],_={simulator:{compact:!1,style:{background:"#fff"}}},b=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:2,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"},{depth:2,id:"-14"},{depth:3,id:"-15"},{depth:2,id:"-16"},{depth:3,id:"-17"}],P="/src/components/image/README.md",z="undefined",M="1766203394000";var L=u=>u.children({MdContent:y,demos:N,frontmatter:_,slugs:b,filePath:P,title:z,updatedTime:M});export{y as MdContent,L as default,N as demos,P as filePath,_ as frontmatter,b as slugs,z as title,M as updatedTime};
