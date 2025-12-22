import{j as u,F as c,r as p,a as e}from"./main.af98c409.js";import{I as a,d$ as o,T as i}from"./FloatingPanel.788cd8cb.js";const l=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg","https://img.yzcdn.cn/vant/apple-5.jpg","https://img.yzcdn.cn/vant/apple-6.jpg","https://img.yzcdn.cn/vant/apple-7.jpg"];var d=()=>u(c,{children:l.map(n=>u(a,{lazyload:!0,src:n},n))});const F={code:`import React from 'react';
import { Image } from 'react-vant-nova';
import './demo/style.less';

const imageList = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
  'https://img.yzcdn.cn/vant/apple-5.jpg',
  'https://img.yzcdn.cn/vant/apple-6.jpg',
  'https://img.yzcdn.cn/vant/apple-7.jpg',
];

export default () => {
  return (
    <>
      {imageList.map((img) => (
        <Image lazyload src={img} key={img} />
      ))}
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Image } from 'react-vant-nova';
import './demo/style.less';

const imageList = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
  'https://img.yzcdn.cn/vant/apple-5.jpg',
  'https://img.yzcdn.cn/vant/apple-6.jpg',
  'https://img.yzcdn.cn/vant/apple-7.jpg',
];

export default () => {
  return (
    <>
      {imageList.map((img) => (
        <Image lazyload src={img} key={img} />
      ))}
    </>
  );
};`},"demo/style.less":{type:"FILE",value:`.demo-lazyload {
  .rv-image {
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    margin-bottom: 16px;
    padding: 16px;
    background-color: white;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 12px;
  }
}
`}},key:"lazyload-demo",meta:{title:"\u56FE\u7247\u61D2\u52A0\u8F7D",card:!0}},h=()=>(p.exports.useEffect(()=>{console.log("lazy component mounted")},[]),e("div",{children:[u(a,{src:"https://img.yzcdn.cn/vant/apple-8.jpg"}),u(i.Text,{children:"\u5F53\u9875\u9762\u9700\u8981\u52A0\u8F7D\u5927\u91CF\u5185\u5BB9\u65F6\uFF0C\u4F7F\u7528\u61D2\u52A0\u8F7D\u53EF\u4EE5\u5B9E\u73B0\u5EF6\u8FDF\u52A0\u8F7D\u9875\u9762\u53EF\u89C6\u533A\u57DF\u5916\u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u4F7F\u9875\u9762\u52A0\u8F7D\u66F4\u6D41\u7545\u3002"})]}));var r=()=>u(o,{children:u(h,{})});const s={code:`import React, { useEffect } from 'react';
import { Lazyload, Image, Typography } from 'react-vant-nova';

const LazyComponent = () => {
  useEffect(() => {
    console.log('lazy component mounted');
  }, []);
  return (
    <div>
      <Image src="https://img.yzcdn.cn/vant/apple-8.jpg" />
      <Typography.Text>
        \u5F53\u9875\u9762\u9700\u8981\u52A0\u8F7D\u5927\u91CF\u5185\u5BB9\u65F6\uFF0C\u4F7F\u7528\u61D2\u52A0\u8F7D\u53EF\u4EE5\u5B9E\u73B0\u5EF6\u8FDF\u52A0\u8F7D\u9875\u9762\u53EF\u89C6\u533A\u57DF\u5916\u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u4F7F\u9875\u9762\u52A0\u8F7D\u66F4\u6D41\u7545\u3002
      </Typography.Text>
    </div>
  );
};

export default () => {
  return (
    <Lazyload>
      <LazyComponent />
    </Lazyload>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.jsx":{type:"FILE",value:`import React, { useEffect } from 'react';
import { Lazyload, Image, Typography } from 'react-vant-nova';

const LazyComponent = () => {
  useEffect(() => {
    console.log('lazy component mounted');
  }, []);
  return (
    <div>
      <Image src="https://img.yzcdn.cn/vant/apple-8.jpg" />
      <Typography.Text>
        \u5F53\u9875\u9762\u9700\u8981\u52A0\u8F7D\u5927\u91CF\u5185\u5BB9\u65F6\uFF0C\u4F7F\u7528\u61D2\u52A0\u8F7D\u53EF\u4EE5\u5B9E\u73B0\u5EF6\u8FDF\u52A0\u8F7D\u9875\u9762\u53EF\u89C6\u533A\u57DF\u5916\u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u4F7F\u9875\u9762\u52A0\u8F7D\u66F4\u6D41\u7545\u3002
      </Typography.Text>
    </div>
  );
};

export default () => {
  return (
    <Lazyload>
      <LazyComponent />
    </Lazyload>
  );
};`}},key:"lazyload-demo-1",meta:{title:"\u7EC4\u4EF6\u61D2\u52A0\u8F7D",card:!0}},m=function({previewer:n=()=>null,api:C=()=>null}){const t=n;return u("div",{children:e("div",{children:[u("h1",{id:"","data-anchor":"",children:"Lazyload \u61D2\u52A0\u8F7D"}),u("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),u("p",{children:"\u5F53\u9875\u9762\u9700\u8981\u52A0\u8F7D\u5927\u91CF\u5185\u5BB9\u65F6\uFF0C\u4F7F\u7528\u61D2\u52A0\u8F7D\u53EF\u4EE5\u5B9E\u73B0\u5EF6\u8FDF\u52A0\u8F7D\u9875\u9762\u53EF\u89C6\u533A\u57DF\u5916\u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u4F7F\u9875\u9762\u52A0\u8F7D\u66F4\u6D41\u7545\u3002"}),u("blockquote",{children:e("p",{children:["Lazyload \u57FA\u4E8E ",u("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API",children:"IntersectionObserver"}),"\u5B9E\u73B0\uFF0C\b \u90E8\u5206\u6D4F\u89C8\u5668\u9700\u8981",u("a",{href:"https://www.npmjs.com/package/intersection-observer",children:"intersection-observer polyfill"}),"\u652F\u6301\u3002"]})}),u("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),u(t,{code:"import { Lazyload } from 'react-vant-nova';",lang:"js"}),u("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"-4","data-anchor":"-4",children:"\u56FE\u7247\u61D2\u52A0\u8F7D"}),e("p",{children:["\u5C06 ",u("code",{children:"Image"})," \u7EC4\u4EF6\u7684 lazyload \u5C5E\u6027\u8BBE\u4E3A ",u("code",{children:"true"})," \u5373\u53EF\u5F00\u542F\u61D2\u52A0\u8F7D\u529F\u80FD\u3002"]}),u(t,{...F,children:u(d,{})}),u("h3",{id:"-5","data-anchor":"-5",children:"\u7EC4\u4EF6\u61D2\u52A0\u8F7D"}),e("p",{children:["\u5C06\u9700\u8981\u61D2\u52A0\u8F7D\u7684\u7EC4\u4EF6\u653E\u5728 ",u("code",{children:"Lazyload"})," \u7EC4\u4EF6\u4E2D\uFF0C\u5373\u53EF\u5B9E\u73B0\u7EC4\u4EF6\u61D2\u52A0\u8F7D\u3002"]}),u(t,{...s,children:u(r,{})}),u("h2",{id:"-6","data-anchor":"-6",children:"API"}),u("h3",{id:"-7","data-anchor":"-7",children:"Options"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"height"}),u("td",{children:"\u8BBE\u7F6E\u5360\u4F4D\u5BB9\u5668\u9AD8\u5EA6"}),u("td",{children:u("em",{children:"number|string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"placeholder"}),u("td",{children:"\u81EA\u5B9A\u4E49\u5360\u4F4D\u5BB9\u5668\u89C6\u56FE"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"<Skeleton title />"})]}),e("tr",{children:[u("td",{children:"style"}),u("td",{children:"\u5360\u4F4D\u5BB9\u5668\u6837\u5F0F"}),u("td",{children:u("em",{children:"CSSProperties"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"className"}),u("td",{children:"\u5360\u4F4D\u5BB9\u5668\u7C7B\u540D"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]})]})]})]})})},g=[{Component:d,key:"lazyload-demo",title:"\u56FE\u7247\u61D2\u52A0\u8F7D",card:!0},{Component:r,key:"lazyload-demo-1",title:"\u7EC4\u4EF6\u61D2\u52A0\u8F7D",card:!0}],y={simulator:{compact:!1}},E=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:2,id:"-6"},{depth:3,id:"-7"}],v="/src/components/lazyload/README.md",D="undefined",z="1766203394000";var f=n=>n.children({MdContent:m,demos:g,frontmatter:y,slugs:E,filePath:v,title:D,updatedTime:z});export{m as MdContent,f as default,g as demos,v as filePath,y as frontmatter,E as slugs,D as title,z as updatedTime};
