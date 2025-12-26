import{j as e,a as n,F as c,r as s}from"./main.7fa1bdd8.js";import{dY as r,dd as m,dc as d,c3 as F,bS as p,d as C}from"./Table.5f9604fd.js";var i=()=>e(r,{time:30*60*60*1e3});const E={code:`import React from 'react';
import { CountDown } from 'react-vant-nova';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { CountDown } from 'react-vant-nova';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} />;
};`}},key:"count-down-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var o=()=>e(r,{time:30*60*60*1e3,format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2"});const D={code:`import React from 'react';
import { CountDown } from 'react-vant-nova';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} format="DD \u5929 HH \u65F6 mm \u5206 ss \u79D2" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { CountDown } from 'react-vant-nova';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} format="DD \u5929 HH \u65F6 mm \u5206 ss \u79D2" />;
};`}},key:"count-down-demo-1",meta:{title:"\u81EA\u5B9A\u4E49\u683C\u5F0F"}};var l=()=>e(r,{time:30*60*60*1e3,millisecond:!0,format:"HH:mm:ss:SS"});const B={code:`import React from 'react';
import { CountDown } from 'react-vant-nova';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { CountDown } from 'react-vant-nova';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS" />;
};`}},key:"count-down-demo-2",meta:{title:"\u6BEB\u79D2\u7EA7\u6E32\u67D3"}};var a=()=>e("div",{className:"demo-count-down",children:e(r,{time:30*60*60*1e3,millisecond:!0,format:"HH:mm:ss:SS",children:u=>n(c,{children:[e("span",{className:"block",children:u.hours}),e("span",{className:"colon",children:":"}),e("span",{className:"block",children:u.minutes}),e("span",{className:"colon",children:":"}),e("span",{className:"block",children:u.seconds})]})})});const f={code:`import React from 'react';
import { CountDown } from 'react-vant-nova';
import './demo/style.less';

export default () => {
  return (
    <div className="demo-count-down">
      <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS">
        {(timeData) => (
          <>
            <span className="block">{timeData.hours}</span>
            <span className="colon">:</span>
            <span className="block">{timeData.minutes}</span>
            <span className="colon">:</span>
            <span className="block">{timeData.seconds}</span>
          </>
        )}
      </CountDown>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { CountDown } from 'react-vant-nova';
import './demo/style.less';

export default () => {
  return (
    <div className="demo-count-down">
      <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS">
        {(timeData) => (
          <>
            <span className="block">{timeData.hours}</span>
            <span className="colon">:</span>
            <span className="block">{timeData.minutes}</span>
            <span className="colon">:</span>
            <span className="block">{timeData.seconds}</span>
          </>
        )}
      </CountDown>
    </div>
  );
};`},"demo/style.less":{type:"FILE",value:`@import '../../styles/var.less';

.demo-count-down {
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: @blue;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: @blue;
    border-radius: 4px;
  }
}
`}},key:"count-down-demo-3",meta:{title:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}};var h=()=>{const u=s.exports.useRef();return n(c,{children:[e(r,{ref:u,time:3e3,millisecond:!0,format:"ss:SSS",autoStart:!1,onFinish:()=>m.info("\u5012\u8BA1\u65F6\u7ED3\u675F")}),e("br",{}),n(d,{columnNum:3,children:[e(d.Item,{icon:e(F,{}),text:"\u5F00\u59CB",onClick:()=>u.current.start()}),e(d.Item,{icon:e(p,{}),text:"\u6682\u505C",onClick:()=>u.current.pause()}),e(d.Item,{icon:e(C,{}),text:"\u91CD\u7F6E",onClick:()=>u.current.reset()})]})]})};const v=`import React, { useRef } from 'react'
import { CountDown, Grid, Toast } from 'react-vant-nova'
import { PauseCircleO, PlayCircleO, Replay } from '@react-vant/icons'
import type { CountDownInstance } from 'react-vant-nova'

export default () => {
  const ref = useRef<CountDownInstance>()
  return (
    <>
      <CountDown
        ref={ref}
        time={3000}
        millisecond
        format='ss:SSS'
        autoStart={false}
        onFinish={() => Toast.info('\u5012\u8BA1\u65F6\u7ED3\u675F')}
      />
      <br />
      <Grid columnNum={3}>
        <Grid.Item
          icon={<PlayCircleO />}
          text='\u5F00\u59CB'
          onClick={() => ref.current.start()}
        />
        <Grid.Item
          icon={<PauseCircleO />}
          text='\u6682\u505C'
          onClick={() => ref.current.pause()}
        />
        <Grid.Item
          icon={<Replay />}
          text='\u91CD\u7F6E'
          onClick={() => ref.current.reset()}
        />
      </Grid>
    </>
  )
}
`,A={code:v,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant-nova":{type:"NPM",value:"1.0.7"},"@react-vant/icons":{type:"NPM",value:"0.1.0"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react'
import { CountDown, Grid, Toast } from 'react-vant-nova'
import { PauseCircleO, PlayCircleO, Replay } from '@react-vant/icons'
import type { CountDownInstance } from 'react-vant-nova'

export default () => {
  const ref = useRef<CountDownInstance>()
  return (
    <>
      <CountDown
        ref={ref}
        time={3000}
        millisecond
        format='ss:SSS'
        autoStart={false}
        onFinish={() => Toast.info('\u5012\u8BA1\u65F6\u7ED3\u675F')}
      />
      <br />
      <Grid columnNum={3}>
        <Grid.Item
          icon={<PlayCircleO />}
          text='\u5F00\u59CB'
          onClick={() => ref.current.start()}
        />
        <Grid.Item
          icon={<PauseCircleO />}
          text='\u6682\u505C'
          onClick={() => ref.current.pause()}
        />
        <Grid.Item
          icon={<Replay />}
          text='\u91CD\u7F6E'
          onClick={() => ref.current.reset()}
        />
      </Grid>
    </>
  )
}
`}},key:"count-down-ref",meta:{title:"\u624B\u52A8\u63A7\u5236"}},w=function({previewer:u=()=>null,api:P=()=>null}){const t=u;return e("div",{children:n("div",{children:[e("h1",{id:"","data-anchor":"",children:"CountDown \u5012\u8BA1\u65F6"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5B9E\u65F6\u5C55\u793A\u5012\u8BA1\u65F6\u6570\u503C\uFF0C\u652F\u6301\u6BEB\u79D2\u7CBE\u5EA6\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(t,{code:"import { CountDown } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),n("p",{children:[e("code",{children:"time"})," \u5C5E\u6027\u8868\u793A\u5012\u8BA1\u65F6\u603B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002"]}),e(t,{...E,children:e(i,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u81EA\u5B9A\u4E49\u683C\u5F0F"}),n("p",{children:["\u901A\u8FC7 ",e("code",{children:"format"})," \u5C5E\u6027\u8BBE\u7F6E\u5012\u8BA1\u65F6\u6587\u672C\u7684\u5185\u5BB9\u3002"]}),e(t,{...D,children:e(o,{})}),e("h3",{id:"-6","data-anchor":"-6",children:"\u6BEB\u79D2\u7EA7\u6E32\u67D3"}),n("p",{children:["\u5012\u8BA1\u65F6\u9ED8\u8BA4\u6BCF\u79D2\u6E32\u67D3\u4E00\u6B21\uFF0C\u8BBE\u7F6E ",e("code",{children:"millisecond"})," \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3\u3002"]}),e(t,{...B,children:e(l,{})}),e("h3",{id:"-7","data-anchor":"-7",children:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}),n("p",{children:["\u901A\u8FC7",e("code",{children:"children"}),"\u81EA\u5B9A\u4E49\u5012\u8BA1\u65F6\u7684\u6837\u5F0F\uFF0C",e("a",{href:"https://reactjs.org/docs/render-props.html",children:"react render prop"}),"\u6587\u6863\u3002"]}),e(t,{...f,children:e(a,{})}),e("h3",{id:"-8","data-anchor":"-8",children:"\u624B\u52A8\u63A7\u5236"}),n("p",{children:["\u901A\u8FC7 ref \u83B7\u53D6\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u540E\uFF0C\u53EF\u4EE5\u8C03\u7528 ",e("code",{children:"start"}),"\u3001",e("code",{children:"pause"}),"\u3001",e("code",{children:"reset"})," \u65B9\u6CD5\u3002"]}),e(t,{...A,children:e(h,{})}),e("h2",{id:"-9","data-anchor":"-9",children:"API"}),e("h3",{id:"-10","data-anchor":"-10",children:"Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"time"}),e("td",{children:"\u5012\u8BA1\u65F6\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),n("tr",{children:[e("td",{children:"format"}),e("td",{children:"\u65F6\u95F4\u683C\u5F0F"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"HH:mm:ss"})})]}),n("tr",{children:[e("td",{children:"autoStart"}),e("td",{children:"\u662F\u5426\u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"millisecond"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"-11","data-anchor":"-11",children:"format \u683C\u5F0F"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u683C\u5F0F"}),e("th",{children:"\u8BF4\u660E"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"DD"}),e("td",{children:"\u5929\u6570"})]}),n("tr",{children:[e("td",{children:"HH"}),e("td",{children:"\u5C0F\u65F6"})]}),n("tr",{children:[e("td",{children:"mm"}),e("td",{children:"\u5206\u949F"})]}),n("tr",{children:[e("td",{children:"ss"}),e("td",{children:"\u79D2\u6570"})]}),n("tr",{children:[e("td",{children:"S"}),e("td",{children:"\u6BEB\u79D2\uFF081 \u4F4D\uFF09"})]}),n("tr",{children:[e("td",{children:"SS"}),e("td",{children:"\u6BEB\u79D2\uFF082 \u4F4D\uFF09"})]}),n("tr",{children:[e("td",{children:"SSS"}),e("td",{children:"\u6BEB\u79D2\uFF083 \u4F4D\uFF09"})]})]})]}),e("h3",{id:"-12","data-anchor":"-12",children:"Events"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"onFinish"}),e("td",{children:"\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5012\u8BA1\u65F6\u53D8\u5316\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"currentTime: CurrentTime"})})]})]})]}),e("h3",{id:"-13","data-anchor":"-13",children:"CurrentTime \u683C\u5F0F"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"total"}),e("td",{children:"\u5269\u4F59\u603B\u65F6\u95F4\uFF08\u5355\u4F4D\u6BEB\u79D2\uFF09"}),e("td",{children:e("em",{children:"number"})})]}),n("tr",{children:[e("td",{children:"days"}),e("td",{children:"\u5269\u4F59\u5929\u6570"}),e("td",{children:e("em",{children:"number"})})]}),n("tr",{children:[e("td",{children:"hours"}),e("td",{children:"\u5269\u4F59\u5C0F\u65F6"}),e("td",{children:e("em",{children:"number"})})]}),n("tr",{children:[e("td",{children:"minutes"}),e("td",{children:"\u5269\u4F59\u5206\u949F"}),e("td",{children:e("em",{children:"number"})})]}),n("tr",{children:[e("td",{children:"seconds"}),e("td",{children:"\u5269\u4F59\u79D2\u6570"}),e("td",{children:e("em",{children:"number"})})]}),n("tr",{children:[e("td",{children:"milliseconds"}),e("td",{children:"\u5269\u4F59\u6BEB\u79D2"}),e("td",{children:e("em",{children:"number"})})]})]})]}),e("h3",{id:"-14","data-anchor":"-14",children:"\u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 CountDown \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"start"}),e("td",{children:"\u5F00\u59CB\u5012\u8BA1\u65F6"}),e("td",{children:"-"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"pause"}),e("td",{children:"\u6682\u505C\u5012\u8BA1\u65F6"}),e("td",{children:"-"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"reset"}),n("td",{children:["\u91CD\u8BBE\u5012\u8BA1\u65F6\uFF0C\u82E5 ",e("code",{children:"autoStart"})," \u4E3A ",e("code",{children:"true"}),"\uFF0C\u91CD\u8BBE\u540E\u4F1A\u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6"]}),e("td",{children:"-"}),e("td",{children:"-"})]})]})]}),e("h3",{id:"-15","data-anchor":"-15",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(t,{code:"import type { CountDownInstance, CountDownCurrentTime } from 'react-vant-nova';",lang:"ts"}),n("p",{children:[e("code",{children:"CountDownInstance"})," \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A"]}),e(t,{code:`import { useRef } from 'react';
import type { CountDownInstance } from 'react-vant-nova';

const countDownRef = useRef<CountDownInstance>(null);

countDownRef.current?.start();`,lang:"ts"}),e("h2",{id:"-16","data-anchor":"-16",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-17","data-anchor":"-17",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"--rv-count-down-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-count-down-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-count-down-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-18","data-anchor":"-18",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"-19","data-anchor":"-19",children:"\u5728 iOS \u7CFB\u7EDF\u4E0A\u5012\u8BA1\u65F6\u4E0D\u751F\u6548\uFF1F"}),n("p",{children:["\u5982\u679C\u4F60\u9047\u5230\u4E86\u5728 iOS \u4E0A\u5012\u8BA1\u65F6\u4E0D\u751F\u6548\u7684\u95EE\u9898\uFF0C\u8BF7\u786E\u8BA4\u5728\u521B\u5EFA Date \u5BF9\u8C61\u65F6\u6CA1\u6709\u4F7F\u7528",e("code",{children:"new Date('2020-01-01')"}),"\u8FD9\u6837\u7684\u5199\u6CD5\uFF0CiOS \u4E0D\u652F\u6301\u4EE5\u4E2D\u5212\u7EBF\u5206\u9694\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u6B63\u786E\u5199\u6CD5\u662F",e("code",{children:"new Date('2020/01/01')"}),"\u3002"]}),n("p",{children:["\u5BF9\u6B64\u95EE\u9898\u7684\u8BE6\u7EC6\u89E3\u91CA\uFF1A",e("a",{href:"https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios",children:"stackoverflow"}),"\u3002"]})]})})},y=[{Component:i,key:"count-down-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:o,key:"count-down-demo-1",title:"\u81EA\u5B9A\u4E49\u683C\u5F0F"},{Component:l,key:"count-down-demo-2",title:"\u6BEB\u79D2\u7EA7\u6E32\u67D3"},{Component:a,key:"count-down-demo-3",title:"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{Component:h,key:"count-down-ref",title:"\u624B\u52A8\u63A7\u5236"}],x={simulator:{compact:!1}},b=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:3,id:"-7"},{depth:3,id:"-8"},{depth:2,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"},{depth:3,id:"-14"},{depth:3,id:"-15"},{depth:2,id:"-16"},{depth:3,id:"-17"},{depth:2,id:"-18"},{depth:3,id:"-19"}],S="/src/components/count-down/README.md",k="undefined",N="1766203394000";var I=u=>u.children({MdContent:w,demos:y,frontmatter:x,slugs:b,filePath:S,title:k,updatedTime:N});export{w as MdContent,I as default,y as demos,S as filePath,x as frontmatter,b as slugs,k as title,N as updatedTime};
