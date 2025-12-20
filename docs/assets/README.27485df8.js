import{r as c,a as n,j as u}from"./main.6d1ac2ec.js";import{e6 as i,B as r}from"./FloatingPanel.f57aae97.js";var d=()=>{const e=c.exports.useRef(null);return n("div",{className:"demo-sticky--wrapper",children:[u(i,{children:u(r,{type:"primary",style:{marginLeft:"15px"},children:"\u57FA\u7840\u7528\u6CD5"})}),u(i,{offsetTop:50,children:u(r,{type:"info",style:{marginLeft:"115px"},children:"\u5438\u9876\u8DDD\u79BB"})}),u("div",{ref:e,style:{height:"300px",backgroundColor:"#fff"},children:u(i,{container:e,children:u(r,{type:"warning",style:{marginLeft:"215px"},children:"\u6307\u5B9A\u5BB9\u5668"})})}),u("div",{style:{height:"70vh"}}),u(i,{position:"bottom",offsetBottom:50,children:u(r,{type:"info",style:{marginLeft:"15px"},children:"\u5438\u5E95\u8DDD\u79BB"})})]})};const o=`import React, { useRef } from 'react'
import { Sticky, Button } from 'react-vant-nova'
import './style.less'

export default () => {
  const container = useRef<HTMLDivElement>(null)

  return (
    <div className='demo-sticky--wrapper'>
      <Sticky>
        <Button type='primary' style={{ marginLeft: '15px' }}>
          \u57FA\u7840\u7528\u6CD5
        </Button>
      </Sticky>

      <Sticky offsetTop={50}>
        <Button type='info' style={{ marginLeft: '115px' }}>
          \u5438\u9876\u8DDD\u79BB
        </Button>
      </Sticky>

      <div ref={container} style={{ height: '300px', backgroundColor: '#fff' }}>
        <Sticky container={container}>
          <Button type='warning' style={{ marginLeft: '215px' }}>
            \u6307\u5B9A\u5BB9\u5668
          </Button>
        </Sticky>
      </div>

      <div style={{ height: '70vh' }} />
      <Sticky position='bottom' offsetBottom={50}>
        <Button type='info' style={{ marginLeft: '15px' }}>
          \u5438\u5E95\u8DDD\u79BB
        </Button>
      </Sticky>
    </div>
  )
}
`,l={code:o,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react'
import { Sticky, Button } from 'react-vant-nova'
import './style.less'

export default () => {
  const container = useRef<HTMLDivElement>(null)

  return (
    <div className='demo-sticky--wrapper'>
      <Sticky>
        <Button type='primary' style={{ marginLeft: '15px' }}>
          \u57FA\u7840\u7528\u6CD5
        </Button>
      </Sticky>

      <Sticky offsetTop={50}>
        <Button type='info' style={{ marginLeft: '115px' }}>
          \u5438\u9876\u8DDD\u79BB
        </Button>
      </Sticky>

      <div ref={container} style={{ height: '300px', backgroundColor: '#fff' }}>
        <Sticky container={container}>
          <Button type='warning' style={{ marginLeft: '215px' }}>
            \u6307\u5B9A\u5BB9\u5668
          </Button>
        </Sticky>
      </div>

      <div style={{ height: '70vh' }} />
      <Sticky position='bottom' offsetBottom={50}>
        <Button type='info' style={{ marginLeft: '15px' }}>
          \u5438\u5E95\u8DDD\u79BB
        </Button>
      </Sticky>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-sticky--wrapper {
  height: 200vh;
}
`}},key:"sticky-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},h=function({previewer:e=()=>null,api:f=()=>null}){const t=e;return u("div",{children:n("div",{children:[u("h1",{id:"","data-anchor":"",children:"Sticky \u7C98\u6027\u5E03\u5C40"}),u("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),n("p",{children:["Sticky \u7EC4\u4EF6\u4E0E CSS \u4E2D",u("code",{children:"position: sticky"}),"\u5C5E\u6027\u5B9E\u73B0\u7684\u6548\u679C\u4E00\u81F4\uFF0C\u5F53\u7EC4\u4EF6\u5728\u5C4F\u5E55\u8303\u56F4\u5185\u65F6\uFF0C\u4F1A\u6309\u7167\u6B63\u5E38\u7684\u5E03\u5C40\u6392\u5217\uFF0C\u5F53\u7EC4\u4EF6\u6EDA\u51FA\u5C4F\u5E55\u8303\u56F4\u65F6\uFF0C\u59CB\u7EC8\u4F1A\u56FA\u5B9A\u5728\u5C4F\u5E55\u9876\u90E8\u3002"]}),u("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),u(t,{code:"import { Sticky } from 'react-vant-nova';",lang:"js"}),u("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),n("p",{children:["\u5C06\u5185\u5BB9\u5305\u88F9\u5728 ",u("code",{children:"Sticky"})," \u7EC4\u4EF6\u5185\u5373\u53EF\u3002"]}),u(t,{...l,children:u(d,{})}),u(t,{code:`import React from 'react';
import { Sticky, Button } from 'react-vant-nova';

export default () => {
  return (
    <Sticky>
      <Button type="primary" style={{ marginLeft: '15px' }}>
        \u57FA\u7840\u7528\u6CD5
      </Button>
    </Sticky>
  );
};`,lang:"jsx"}),u("h3",{id:"-5","data-anchor":"-5",children:"\u5438\u9876\u8DDD\u79BB"}),n("p",{children:["\u901A\u8FC7 ",u("code",{children:"offsetTop"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u7EC4\u4EF6\u5728\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB\u3002"]}),u(t,{code:`import React from 'react';
import { Sticky, Button } from 'react-vant-nova';

export default () => {
  return (
    <Sticky offsetTop={50}>
      <Button type="info" style={{ marginLeft: '115px' }}>
        \u5438\u9876\u8DDD\u79BB
      </Button>
    </Sticky>
  );
};`,lang:"jsx"}),u("h3",{id:"-6","data-anchor":"-6",children:"\u6307\u5B9A\u5BB9\u5668"}),n("p",{children:["\u901A\u8FC7 ",u("code",{children:"container"})," \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u7EC4\u4EF6\u7684\u5BB9\u5668\uFF0C\u9875\u9762\u6EDA\u52A8\u65F6\uFF0C\u7EC4\u4EF6\u4F1A\u59CB\u7EC8\u4FDD\u6301\u5728\u5BB9\u5668\u8303\u56F4\u5185\uFF0C\u5F53\u7EC4\u4EF6\u5373\u5C06\u8D85\u51FA\u5BB9\u5668\u5E95\u90E8\u65F6\uFF0C\u4F1A\u56FA\u5B9A\u5728\u5BB9\u5668\u7684\u5E95\u90E8\u3002"]}),u(t,{code:`import React, { useRef } from 'react';
import { Sticky, Button } from 'react-vant-nova';

export default () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} style={{ height: '150px', backgroundColor: '#fff' }}>
      <Sticky container={container}>
        <Button type="warning" style={{ marginLeft: '215px' }}>
          \u6307\u5B9A\u5BB9\u5668
        </Button>
      </Sticky>
    </div>
  );
};`,lang:"tsx"}),u("h3",{id:"-7","data-anchor":"-7",children:"\u5438\u5E95\u8DDD\u79BB"}),n("p",{children:["\u5C06 ",u("code",{children:"position"})," \u8BBE\u7F6E\u4E3A ",u("code",{children:"bottom"})," \u53EF\u4EE5\u8BA9\u7EC4\u4EF6\u5438\u9644\u5728\u5E95\u90E8\u3002\u901A\u8FC7 ",u("code",{children:"offsetBottom"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u7EC4\u4EF6\u5728\u5438\u5E95\u65F6\u4E0E\u5E95\u90E8\u7684\u8DDD\u79BB\u3002"]}),u(t,{code:`import React from 'react';
import { Sticky, Button } from 'react-vant-nova';

export default () => {
  return (
    <>
      <div style={{ height: 200 }} />
      <Sticky position="bottom" offsetBottom={50}>
        <Button type="info" style={{ marginLeft: '15px' }}>
          \u5438\u5E95\u8DDD\u79BB
        </Button>
      </Sticky>
    </>
  );
};`,lang:"jsx"}),u("h2",{id:"-8","data-anchor":"-8",children:"API"}),u("h3",{id:"-9","data-anchor":"-9",children:"Props"}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[u("td",{children:"position"}),n("td",{children:["\u5438\u9644\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"bottom"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"top"})})]}),n("tr",{children:[u("td",{children:"offsetTop"}),n("td",{children:["\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB\uFF0C\u652F\u6301 ",u("code",{children:"px"})," ",u("code",{children:"vw"})," ",u("code",{children:"vh"})," ",u("code",{children:"rem"})," \u5355\u4F4D\uFF0C\u9ED8\u8BA4 ",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"0"})})]}),n("tr",{children:[u("td",{children:"offsetBottom"}),n("td",{children:["\u5438\u5E95\u65F6\u4E0E\u5E95\u90E8\u7684\u8DDD\u79BB\uFF0C\u652F\u6301 ",u("code",{children:"px"})," ",u("code",{children:"vw"})," ",u("code",{children:"vh"})," ",u("code",{children:"rem"})," \u5355\u4F4D\uFF0C\u9ED8\u8BA4 ",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"0"})})]}),n("tr",{children:[u("td",{children:"zIndex"}),u("td",{children:"\u5438\u9876\u65F6\u7684 z-index"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"99"})})]}),n("tr",{children:[u("td",{children:"container"}),u("td",{children:"\u5BB9\u5668\u5BF9\u5E94\u7684 HTML \u8282\u70B9"}),u("td",{children:u("em",{children:"RefElement"})}),u("td",{children:"-"})]})]})]}),u("h3",{id:"-10","data-anchor":"-10",children:"Events"}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u4E8B\u4EF6\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),n("tbody",{children:[n("tr",{children:[u("td",{children:"onScroll"}),u("td",{children:"\u6EDA\u52A8\u65F6\u89E6\u53D1"}),u("td",{children:n("em",{children:["{"," scrollTop: number, isFixed: boolean ","}"]})})]}),n("tr",{children:[u("td",{children:"onChange"}),u("td",{children:"\u5F53\u5438\u9876\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"isFixed: boolean"})})]})]})]}),u("h3",{id:"-11","data-anchor":"-11",children:"\u7C7B\u578B\u5B9A\u4E49"}),u("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),u(t,{code:"import type { StickyPosition } from 'react-vant-nova';",lang:"ts"}),u("h2",{id:"-12","data-anchor":"-12",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"-13","data-anchor":"-13",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:n("tr",{children:[u("td",{children:"--rv-sticky-z-index"}),u("td",{children:u("em",{children:"99"})}),u("td",{children:"-"})]})})]})]})})},a=[{Component:d,key:"sticky-demo",title:"\u57FA\u7840\u7528\u6CD5"}],E=void 0,p=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:2,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:2,id:"-12"},{depth:3,id:"-13"}],B="/src/components/sticky/README.md",F="undefined",s="1766203394000";var C=e=>e.children({MdContent:h,demos:a,frontmatter:E,slugs:p,filePath:B,title:F,updatedTime:s});export{h as MdContent,C as default,a as demos,B as filePath,E as frontmatter,p as slugs,F as title,s as updatedTime};
