import{j as e,a as u,F,r as B}from"./main.80adbde3.js";import{dT as l,dc as a,B as t,C as d,F as o,I as E,T as i,dL as y,b as f,d as g,ax as v}from"./FloatingPanel.c796e2d9.js";var h=()=>e(l,{onOpen:()=>a.info("\u6253\u5F00"),onClose:()=>a.info("\u5173\u95ED"),rightAction:e(t,{style:{height:"100%"},square:!0,type:"danger",children:"\u5220\u9664"}),children:e(d,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"})});const A={code:`import React from 'react';
import { SwipeCell, Button, Cell, Toast } from 'react-vant-nova';

export default () => {
  return (
    <SwipeCell
      onOpen={() => Toast.info('\u6253\u5F00')}
      onClose={() => Toast.info('\u5173\u95ED')}
      rightAction={
        <Button style={{ height: '100%' }} square type="danger">
          \u5220\u9664
        </Button>
      }
    >
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
    </SwipeCell>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { SwipeCell, Button, Cell, Toast } from 'react-vant-nova';

export default () => {
  return (
    <SwipeCell
      onOpen={() => Toast.info('\u6253\u5F00')}
      onClose={() => Toast.info('\u5173\u95ED')}
      rightAction={
        <Button style={{ height: '100%' }} square type="danger">
          \u5220\u9664
        </Button>
      }
    >
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
    </SwipeCell>
  );
};`}},key:"swipe-cell-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var p=()=>e(l,{leftAction:e(t,{square:!0,type:"primary",children:"\u9009\u62E9"}),rightAction:u(F,{children:[e(t,{square:!0,type:"danger",children:"\u5220\u9664"}),e(t,{square:!0,type:"primary",children:"\u6536\u85CF"})]}),children:e(d,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"})});const D={code:`import React from 'react';
import { SwipeCell, Button, Cell } from 'react-vant-nova';

export default () => {
  return (
    <SwipeCell
      leftAction={
        <Button square type="primary">
          \u9009\u62E9
        </Button>
      }
      rightAction={
        <>
          <Button square type="danger">
            \u5220\u9664
          </Button>
          <Button square type="primary">
            \u6536\u85CF
          </Button>
        </>
      }
    >
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
    </SwipeCell>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { SwipeCell, Button, Cell } from 'react-vant-nova';

export default () => {
  return (
    <SwipeCell
      leftAction={
        <Button square type="primary">
          \u9009\u62E9
        </Button>
      }
      rightAction={
        <>
          <Button square type="danger">
            \u5220\u9664
          </Button>
          <Button square type="primary">
            \u6536\u85CF
          </Button>
        </>
      }
    >
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
    </SwipeCell>
  );
};`}},key:"swipe-cell-demo-1",meta:{title:"\u4E8B\u4EF6\u76D1\u542C"}};var s=()=>e(l,{rightAction:e(t,{style:{height:"100%"},square:!0,type:"danger",children:"\u5220\u9664"}),children:u(o,{className:"demo-product-card",align:"stretch",children:[e(E,{src:"https://img.yzcdn.cn/vant/ipad.jpeg",className:"demo-product-card__img"}),u(o,{direction:"column",justify:"between",className:"demo-product-card__content",children:[u("div",{children:[e(i.Title,{level:5,children:"\u5546\u54C1\u6807\u9898"}),e(i.Text,{type:"secondary",children:"\u8FD9\u91CC\u662F\u5546\u54C1\u63CF\u8FF0"})]}),u(o,{justify:"between",align:"center",children:[e(i.Text,{strong:!0,size:"lg",children:"\xA52.00"}),e(i.Text,{size:"sm",type:"secondary",children:"x2"})]})]})]})});const w={code:`import React from 'react';
import { SwipeCell, Flex, Button, Image, Typography } from 'react-vant-nova';
import './demo/style.less';

export default () => {
  return (
    <SwipeCell
      rightAction={
        <Button style={{ height: '100%' }} square type="danger">
          \u5220\u9664
        </Button>
      }
    >
      <Flex className="demo-product-card" align="stretch">
        <Image src="https://img.yzcdn.cn/vant/ipad.jpeg" className="demo-product-card__img" />
        <Flex direction="column" justify="between" className="demo-product-card__content">
          <div>
            <Typography.Title level={5}>\u5546\u54C1\u6807\u9898</Typography.Title>
            <Typography.Text type="secondary">\u8FD9\u91CC\u662F\u5546\u54C1\u63CF\u8FF0</Typography.Text>
          </div>
          <Flex justify="between" align="center">
            <Typography.Text strong size="lg">
              \xA52.00
            </Typography.Text>
            <Typography.Text size="sm" type="secondary">
              x2
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </SwipeCell>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { SwipeCell, Flex, Button, Image, Typography } from 'react-vant-nova';
import './demo/style.less';

export default () => {
  return (
    <SwipeCell
      rightAction={
        <Button style={{ height: '100%' }} square type="danger">
          \u5220\u9664
        </Button>
      }
    >
      <Flex className="demo-product-card" align="stretch">
        <Image src="https://img.yzcdn.cn/vant/ipad.jpeg" className="demo-product-card__img" />
        <Flex direction="column" justify="between" className="demo-product-card__content">
          <div>
            <Typography.Title level={5}>\u5546\u54C1\u6807\u9898</Typography.Title>
            <Typography.Text type="secondary">\u8FD9\u91CC\u662F\u5546\u54C1\u63CF\u8FF0</Typography.Text>
          </div>
          <Flex justify="between" align="center">
            <Typography.Text strong size="lg">
              \xA52.00
            </Typography.Text>
            <Typography.Text size="sm" type="secondary">
              x2
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </SwipeCell>
  );
};`},"demo/style.less":{type:"FILE",value:`.demo-swipe-cell {
  user-select: none;
}

.demo-product-card {
  padding: 10px 16px;
  background-color: #fff;

  &__img {
    width: 88px;
    height: 88px;
    margin-right: 10px;
  }

  &__content {
    flex: 1;
  }
}
`}},key:"swipe-cell-demo-2",meta:{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}},x=({position:n})=>{switch(n){case"left":case"cell":case"outside":return!0;case"right":return new Promise<boolean>(c=>{y.confirm({title:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F"}).then(c)});default:return!0}};var C=()=>e(l,{beforeClose:x,leftAction:e(t,{square:!0,type:"primary",children:"\u9009\u62E9"}),rightAction:e(t,{square:!0,type:"danger",children:"\u5220\u9664"}),children:e(d,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"})});const T={code:`import React from 'react';
import { SwipeCell, Button, Cell, Dialog } from 'react-vant-nova';

const beforeClose = ({ position }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true;
    case 'right':
      return (
        new Promise() <
        boolean >
        ((resolve) => {
          Dialog.confirm({
            title: '\u786E\u5B9A\u5220\u9664\u5417\uFF1F',
          }).then(resolve);
        })
      );
    default:
      return true;
  }
};

export default () => {
  return (
    <SwipeCell
      beforeClose={beforeClose}
      leftAction={
        <Button square type="primary">
          \u9009\u62E9
        </Button>
      }
      rightAction={
        <Button square type="danger">
          \u5220\u9664
        </Button>
      }
    >
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
    </SwipeCell>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { SwipeCell, Button, Cell, Dialog } from 'react-vant-nova';

const beforeClose = ({ position }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true;
    case 'right':
      return (
        new Promise() <
        boolean >
        ((resolve) => {
          Dialog.confirm({
            title: '\u786E\u5B9A\u5220\u9664\u5417\uFF1F',
          }).then(resolve);
        })
      );
    default:
      return true;
  }
};

export default () => {
  return (
    <SwipeCell
      beforeClose={beforeClose}
      leftAction={
        <Button square type="primary">
          \u9009\u62E9
        </Button>
      }
      rightAction={
        <Button square type="danger">
          \u5220\u9664
        </Button>
      }
    >
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
    </SwipeCell>
  );
};`}},key:"swipe-cell-demo-3",meta:{title:"\u5F02\u6B65\u5173\u95ED"}};var m=()=>{const n=B.exports.useRef();return u("div",{className:"demo-swipe-cell",children:[e(l,{ref:n,leftAction:e(t,{square:!0,type:"primary",children:"\u9009\u62E9"}),rightAction:e(t,{square:!0,type:"danger",children:"\u5220\u9664"}),children:e(d,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"})}),e("br",{}),u(o,{justify:"around",children:[e(t,{icon:e(f,{}),onClick:()=>n.current.open("left"),children:"\u5DE6\u6ED1\u6253\u5F00"}),e(t,{icon:e(g,{}),onClick:()=>n.current.open("right"),children:"\u53F3\u6ED1\u6253\u5F00"}),e(t,{icon:e(v,{}),onClick:()=>n.current.close(),children:"\u5173\u95ED"})]})]})};const b=`import React, { useRef } from 'react'
import { SwipeCell, Flex, Button, Cell } from 'react-vant-nova'
import { Arrow, ArrowLeft, Cross } from '@react-vant/icons'
import type { SwipeCellInstance } from 'react-vant-nova'

export default () => {
  const ref = useRef<SwipeCellInstance>()
  return (
    <div className='demo-swipe-cell'>
      <SwipeCell
        ref={ref}
        leftAction={
          <Button square type='primary'>
            \u9009\u62E9
          </Button>
        }
        rightAction={
          <Button square type='danger'>
            \u5220\u9664
          </Button>
        }
      >
        <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' />
      </SwipeCell>
      <br />
      <Flex justify='around'>
        <Button icon={<ArrowLeft />} onClick={() => ref.current.open('left')}>
          \u5DE6\u6ED1\u6253\u5F00
        </Button>
        <Button icon={<Arrow />} onClick={() => ref.current.open('right')}>
          \u53F3\u6ED1\u6253\u5F00
        </Button>
        <Button icon={<Cross />} onClick={() => ref.current.close()}>
          \u5173\u95ED
        </Button>
      </Flex>
    </div>
  )
}
`,S={code:b,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react'
import { SwipeCell, Flex, Button, Cell } from 'react-vant-nova'
import { Arrow, ArrowLeft, Cross } from '@react-vant/icons'
import type { SwipeCellInstance } from 'react-vant-nova'

export default () => {
  const ref = useRef<SwipeCellInstance>()
  return (
    <div className='demo-swipe-cell'>
      <SwipeCell
        ref={ref}
        leftAction={
          <Button square type='primary'>
            \u9009\u62E9
          </Button>
        }
        rightAction={
          <Button square type='danger'>
            \u5220\u9664
          </Button>
        }
      >
        <Cell title='\u5355\u5143\u683C' value='\u5185\u5BB9' />
      </SwipeCell>
      <br />
      <Flex justify='around'>
        <Button icon={<ArrowLeft />} onClick={() => ref.current.open('left')}>
          \u5DE6\u6ED1\u6253\u5F00
        </Button>
        <Button icon={<Arrow />} onClick={() => ref.current.open('right')}>
          \u53F3\u6ED1\u6253\u5F00
        </Button>
        <Button icon={<Cross />} onClick={() => ref.current.close()}>
          \u5173\u95ED
        </Button>
      </Flex>
    </div>
  )
}
`}},key:"swipe-cell-ref",meta:{title:"\u5916\u90E8\u8C03\u7528"}},q=function({previewer:n=()=>null,api:c=()=>null}){const r=n;return e("div",{children:u("div",{children:[e("h1",{id:"","data-anchor":"",children:"SwipeCell \u6ED1\u52A8\u5355\u5143\u683C"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u53EF\u4EE5\u5DE6\u53F3\u6ED1\u52A8\u6765\u5C55\u793A\u64CD\u4F5C\u6309\u94AE\u7684\u5355\u5143\u683C\u7EC4\u4EF6\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(r,{code:"import { SwipeCell } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:[e("code",{children:"SwipeCell"})," \u7EC4\u4EF6\u63D0\u4F9B\u4E86 ",e("code",{children:"leftAction"})," \u548C ",e("code",{children:"rightRight"})," \u4E24\u4E2A\u5C5E\u6027\uFF0C\u7528\u4E8E\u5B9A\u4E49\u4E24\u4FA7\u6ED1\u52A8\u533A\u57DF\u7684\u5185\u5BB9\u3002"]}),e(r,{...A,children:e(h,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u4E8B\u4EF6\u76D1\u542C"}),e(r,{...D,children:e(p,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}),u("p",{children:[e("code",{children:"SwipeCell"})," \u53EF\u4EE5\u5D4C\u5957\u4EFB\u610F\u5185\u5BB9\uFF0C\u6BD4\u5982\u5D4C\u5957\u4E00\u4E2A\u5546\u54C1\u5361\u7247\u3002"]}),e(r,{...w,children:e(s,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u5F02\u6B65\u5173\u95ED"}),u("p",{children:["\u901A\u8FC7\u4F20\u5165 ",e("code",{children:"beforeClose"})," \u56DE\u8C03\u51FD\u6570\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E24\u4FA7\u6ED1\u52A8\u5185\u5BB9\u5173\u95ED\u65F6\u7684\u884C\u4E3A\u3002"]}),e(r,{...T,children:e(C,{})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u5916\u90E8\u8C03\u7528"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"ref"})," \u83B7\u53D6 SwipeCell \u5B9E\u4F8B\u7684\u7C7B\u578B\u5B9A\u4E49\u3002"]}),e(r,{...S,children:e(m,{})}),e("h2",{id:"-9","data-anchor":"-9",children:"API"}),e("h3",{id:"-10","data-anchor":"-10",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u6807\u8BC6\u7B26\uFF0C\u53EF\u4EE5\u5728\u4E8B\u4EF6\u53C2\u6570\u4E2D\u83B7\u53D6\u5230"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"''"})})]}),u("tr",{children:[e("td",{children:"leftWidth"}),u("td",{children:["\u6307\u5B9A\u5DE6\u4FA7\u6ED1\u52A8\u533A\u57DF\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"auto"})})]}),u("tr",{children:[e("td",{children:"rightWidth"}),u("td",{children:["\u6307\u5B9A\u53F3\u4FA7\u6ED1\u52A8\u533A\u57DF\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"auto"})})]}),u("tr",{children:[e("td",{children:"leftAction"}),e("td",{children:"\u5DE6\u4FA7\u6ED1\u52A8\u533A\u57DF\u7684\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"--"})]}),u("tr",{children:[e("td",{children:"rightAction"}),e("td",{children:"\u53F3\u4FA7\u6ED1\u52A8\u533A\u57DF\u7684\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"--"})]}),u("tr",{children:[e("td",{children:"beforeClose"}),u("td",{children:["\u5173\u95ED\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE ",e("code",{children:"false"})," \u53EF\u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u8FD4\u56DE Promise"]}),e("td",{children:e("em",{children:"(args) => boolean | Promise<boolean>"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6ED1\u52A8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"stopPropagation"}),e("td",{children:"\u662F\u5426\u963B\u6B62\u6ED1\u52A8\u4E8B\u4EF6\u5192\u6CE1"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"-11","data-anchor":"-11",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"position: 'left' | 'right' | 'cell' | 'outside'"})})]}),u("tr",{children:[e("td",{children:"onOpen"}),e("td",{children:"\u6253\u5F00\u65F6\u89E6\u53D1"}),e("td",{children:u("em",{children:["{"," name: string | number, position: 'left' | 'right' ","}"]})})]}),u("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u65F6\u89E6\u53D1"}),e("td",{children:u("em",{children:["{"," name: string | number, position: 'left' | 'right' | 'cell' | 'outside' ","}"]})})]})]})]}),e("h3",{id:"-12","data-anchor":"-12",children:"beforeClose \u53C2\u6570"}),e("p",{children:"beforeClose \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u4E2D\u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"string | number"})})]}),u("tr",{children:[e("td",{children:"position"}),e("td",{children:"\u5173\u95ED\u65F6\u7684\u70B9\u51FB\u4F4D\u7F6E"}),e("td",{children:e("em",{children:"'left' | 'right' | 'cell' | 'outside'"})})]})]})]}),e("h3",{id:"-13","data-anchor":"-13",children:"\u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 SwipeCell \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"open"}),e("td",{children:"\u6253\u5F00\u5355\u5143\u683C\u4FA7\u8FB9\u680F"}),u("td",{children:["position: ",e("code",{children:"left | right"})]}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"close"}),e("td",{children:"\u6536\u8D77\u5355\u5143\u683C\u4FA7\u8FB9\u680F"}),e("td",{children:"-"}),e("td",{children:"-"})]})]})]})]})})},N=[{Component:h,key:"swipe-cell-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:p,key:"swipe-cell-demo-1",title:"\u4E8B\u4EF6\u76D1\u542C"},{Component:s,key:"swipe-cell-demo-2",title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{Component:C,key:"swipe-cell-demo-3",title:"\u5F02\u6B65\u5173\u95ED"},{Component:m,key:"swipe-cell-ref",title:"\u5916\u90E8\u8C03\u7528"}],P=void 0,j=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:2,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"}],_="/src/components/swipe-cell/README.md",k="undefined",R="1766203394000";var L=n=>n.children({MdContent:q,demos:N,frontmatter:P,slugs:j,filePath:_,title:k,updatedTime:R});export{q as MdContent,L as default,N as demos,_ as filePath,P as frontmatter,j as slugs,k as title,R as updatedTime};
