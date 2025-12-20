import{j as e,r as p,a as t,F as m}from"./main.9eb8bb9a.js";import{dV as u,S as a,F as E,B as n}from"./FloatingPanel.9e7a63ee.js";var o=()=>e(u,{rate:70,speed:100,text:"70%"});const C={code:`import React from 'react';
import { Circle } from 'react-vant-nova';

export default () => {
  return <Circle rate={70} speed={100} text="70%" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Circle } from 'react-vant-nova';

export default () => {
  return <Circle rate={70} speed={100} text="70%" />;
};`}},key:"circle-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},l=r=>Math.min(Math.max(r,0),100);var h=()=>{const[r,c]=p.exports.useState(70),d=()=>{c(i=>l(i+20))},F=()=>{c(i=>l(i-20))};return t(m,{children:[t(a,{wrap:!0,children:[e(u,{strokeWidth:60,rate:r,text:"\u5BBD\u5EA6\u5B9A\u5236"}),e(u,{color:"#ee0a24",layerColor:"#ebedf0",rate:r,text:"\u989C\u8272\u5B9A\u5236"}),e(u,{color:{"0%":"#3fecff","100%":"#6149f6"},rate:r,text:"\u6E10\u53D8\u8272"}),e(u,{color:"#07c160",clockwise:!1,rate:r,text:"\u9006\u65F6\u9488",style:{marginTop:15}}),e(u,{color:"#7232dd",clockwise:!1,size:120,rate:r,text:"\u5927\u5C0F\u5B9A\u5236",style:{marginTop:15}})]}),e(E,{style:{marginTop:15},align:"center",justify:"center",children:t(n.Group,{children:[e(n,{onClick:d,type:"primary",children:"\u589E\u52A0"}),e(n,{onClick:F,type:"danger",children:"\u51CF\u5C11"})]})})]})};const B={code:`import React, { useState } from 'react';
import { Circle, Flex, Button, Space } from 'react-vant-nova';

const format = (rate) => Math.min(Math.max(rate, 0), 100);

export default () => {
  const [rate, setRate] = useState(70);

  const add = () => {
    setRate((r) => format(r + 20));
  };

  const reduce = () => {
    setRate((r) => format(r - 20));
  };

  return (
    <>
      <Space wrap>
        <Circle strokeWidth={60} rate={rate} text="\u5BBD\u5EA6\u5B9A\u5236" />
        <Circle color="#ee0a24" layerColor="#ebedf0" rate={rate} text="\u989C\u8272\u5B9A\u5236" />
        <Circle
          color={{
            '0%': '#3fecff',
            '100%': '#6149f6',
          }}
          rate={rate}
          text="\u6E10\u53D8\u8272"
        />
        <Circle
          color="#07c160"
          clockwise={false}
          rate={rate}
          text="\u9006\u65F6\u9488"
          style={{ marginTop: 15 }}
        />
        <Circle
          color="#7232dd"
          clockwise={false}
          size={120}
          rate={rate}
          text="\u5927\u5C0F\u5B9A\u5236"
          style={{ marginTop: 15 }}
        />
      </Space>

      <Flex style={{ marginTop: 15 }} align="center" justify="center">
        <Button.Group>
          <Button onClick={add} type="primary">
            \u589E\u52A0
          </Button>
          <Button onClick={reduce} type="danger">
            \u51CF\u5C11
          </Button>
        </Button.Group>
      </Flex>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Circle, Flex, Button, Space } from 'react-vant-nova';

const format = (rate) => Math.min(Math.max(rate, 0), 100);

export default () => {
  const [rate, setRate] = useState(70);

  const add = () => {
    setRate((r) => format(r + 20));
  };

  const reduce = () => {
    setRate((r) => format(r - 20));
  };

  return (
    <>
      <Space wrap>
        <Circle strokeWidth={60} rate={rate} text="\u5BBD\u5EA6\u5B9A\u5236" />
        <Circle color="#ee0a24" layerColor="#ebedf0" rate={rate} text="\u989C\u8272\u5B9A\u5236" />
        <Circle
          color={{
            '0%': '#3fecff',
            '100%': '#6149f6',
          }}
          rate={rate}
          text="\u6E10\u53D8\u8272"
        />
        <Circle
          color="#07c160"
          clockwise={false}
          rate={rate}
          text="\u9006\u65F6\u9488"
          style={{ marginTop: 15 }}
        />
        <Circle
          color="#7232dd"
          clockwise={false}
          size={120}
          rate={rate}
          text="\u5927\u5C0F\u5B9A\u5236"
          style={{ marginTop: 15 }}
        />
      </Space>

      <Flex style={{ marginTop: 15 }} align="center" justify="center">
        <Button.Group>
          <Button onClick={add} type="primary">
            \u589E\u52A0
          </Button>
          <Button onClick={reduce} type="danger">
            \u51CF\u5C11
          </Button>
        </Button.Group>
      </Flex>
    </>
  );
};`}},key:"circle-demo-1",meta:{title:"\u6837\u5F0F\u5B9A\u5236"}};var s=()=>t(a,{children:[e(u,{defaultRate:70,text:"\u5DE6\u4FA7",startPosition:"left"}),e(u,{defaultRate:70,text:"\u53F3\u4FA7",startPosition:"right"}),e(u,{defaultRate:70,text:"\u5E95\u90E8",startPosition:"bottom"})]});const f={code:`import React from 'react';
import { Space, Circle } from 'react-vant-nova';

export default () => {
  return (
    <Space>
      <Circle defaultRate={70} text="\u5DE6\u4FA7" startPosition="left" />
      <Circle defaultRate={70} text="\u53F3\u4FA7" startPosition="right" />
      <Circle defaultRate={70} text="\u5E95\u90E8" startPosition="bottom" />
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Circle } from 'react-vant-nova';

export default () => {
  return (
    <Space>
      <Circle defaultRate={70} text="\u5DE6\u4FA7" startPosition="left" />
      <Circle defaultRate={70} text="\u53F3\u4FA7" startPosition="right" />
      <Circle defaultRate={70} text="\u5E95\u90E8" startPosition="bottom" />
    </Space>
  );
};`}},key:"circle-demo-2",meta:{title:"\u8D77\u59CB\u4F4D\u7F6E"}},A=function({previewer:r=()=>null,api:c=()=>null}){const d=r;return e("div",{children:t("div",{children:[e("h1",{id:"","data-anchor":"",children:"Circle \u73AF\u5F62\u8FDB\u5EA6\u6761"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5706\u73AF\u5F62\u7684\u8FDB\u5EA6\u6761\u7EC4\u4EF6\uFF0C\u652F\u6301\u8FDB\u5EA6\u6E10\u53D8\u52A8\u753B\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(d,{code:"import { Circle } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),t("p",{children:[e("code",{children:"rate"})," \u5C5E\u6027\u8868\u793A\u8FDB\u5EA6\u6761\u7684\u8FDB\u5EA6\uFF0C\u5F53 ",e("code",{children:"rate"})," \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8FDB\u5EA6\u6761\u4F1A\u4EE5 ",e("code",{children:"speed"})," \u7684\u901F\u5EA6\u53D8\u5316\uFF0C\u76F4\u81F3\u8FBE\u5230 ",e("code",{children:"rate"})," \u8BBE\u5B9A\u7684\u503C\u3002"]}),e(d,{...C,children:e(o,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u81EA\u5B9A\u4E49"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"strokeWidth"})," \u5C5E\u6027\u6765\u63A7\u5236\u8FDB\u5EA6\u6761\u5BBD\u5EA6\u3002"]}),e(d,{...B,children:e(h,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u8D77\u59CB\u4F4D\u7F6E"}),t("p",{children:["\u8FDB\u5EA6\u6761\u9ED8\u8BA4\u4ECE\u9876\u90E8\u5F00\u59CB\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"startPosition"})," \u5C5E\u6027\u8BBE\u7F6E\u8D77\u59CB\u4F4D\u7F6E\u3002"]}),e(d,{...f,children:e(s,{})}),e("h2",{id:"-7","data-anchor":"-7",children:"API"}),e("h3",{id:"-8","data-anchor":"-8",children:"Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"defaultRate"}),e("td",{children:"\u9ED8\u8BA4\u8FDB\u5EA6"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"rate"}),e("td",{children:"\u5F53\u524D\u8FDB\u5EA6"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"size"}),t("td",{children:["\u5706\u73AF\u76F4\u5F84\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"100px"})})]}),t("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u8FDB\u5EA6\u6761\u989C\u8272\uFF0C\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u53EF\u4EE5\u5B9A\u4E49\u6E10\u53D8\u8272"}),e("td",{children:e("em",{children:"string | object"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),t("tr",{children:[e("td",{children:"layerColor"}),e("td",{children:"\u8F68\u9053\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"white"})})]}),t("tr",{children:[e("td",{children:"fill"}),e("td",{children:"\u586B\u5145\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"none"})})]}),t("tr",{children:[e("td",{children:"speed"}),e("td",{children:"\u52A8\u753B\u901F\u5EA6\uFF08\u5355\u4F4D\u4E3A rate/s\uFF09"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),t("tr",{children:[e("td",{children:"text"}),e("td",{children:"\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"strokeWidth"}),e("td",{children:"\u8FDB\u5EA6\u6761\u5BBD\u5EA6"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"40"})})]}),t("tr",{children:[e("td",{children:"strokeLinecap"}),t("td",{children:["\u8FDB\u5EA6\u6761\u7AEF\u70B9\u7684\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"square"})," ",e("code",{children:"butt"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"round"})})]}),t("tr",{children:[e("td",{children:"clockwise"}),e("td",{children:"\u662F\u5426\u987A\u65F6\u9488\u589E\u52A0"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),t("tr",{children:[e("td",{children:"startPosition"}),t("td",{children:["\u8FDB\u5EA6\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"left"}),"\u3001",e("code",{children:"right"}),"\u3001",e("code",{children:"bottom"})]}),e("td",{children:e("em",{children:"CircleStartPosition"})}),e("td",{children:e("code",{children:"top"})})]})]})]}),e("h3",{id:"-9","data-anchor":"-9",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(d,{code:"import type { CircleStartPosition } from 'react-vant-nova';",lang:"ts"}),e("h2",{id:"-10","data-anchor":"-10",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-11","data-anchor":"-11",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-circle-size"}),e("td",{children:e("em",{children:"100px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-circle-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-circle-layer-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-circle-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-circle-text-font-weight"}),e("td",{children:e("em",{children:"var(--rv-font-weight-bold)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-circle-text-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-circle-text-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]})]})]})]})})},x=[{Component:o,key:"circle-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:h,key:"circle-demo-1",title:"\u6837\u5F0F\u5B9A\u5236"},{Component:s,key:"circle-demo-2",title:"\u8D77\u59CB\u4F4D\u7F6E"}],v={simulator:{compact:!1}},D=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:2,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:2,id:"-10"},{depth:3,id:"-11"}],y="/src/components/circle/README.md",g="undefined",P="1766203394000";var S=r=>r.children({MdContent:A,demos:x,frontmatter:v,slugs:D,filePath:y,title:g,updatedTime:P});export{A as MdContent,S as default,x as demos,y as filePath,v as frontmatter,D as slugs,g as title,P as updatedTime};
