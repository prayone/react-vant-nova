import{r as h,j as e,a as u}from"./main.6d1ac2ec.js";import{dQ as d,dR as c,dc as o}from"./FloatingPanel.f57aae97.js";var s=()=>{const[r,l]=h.exports.useState(0),n=h.exports.useMemo(()=>r?`\u5237\u65B0\u6B21\u6570: ${r}`:"\u4E0B\u62C9\u8BD5\u8BD5",[r]),t=i=>new Promise(a=>{setTimeout(()=>{i&&o.info("\u5237\u65B0\u6210\u529F"),l(r+1),a(!0)},1e3)});return e("div",{className:"demo-pull-refresh",children:u(d,{children:[e(d.TabPane,{title:"\u57FA\u7840\u7528\u6CD5",children:e(c,{onRefresh:()=>t(!0),onRefreshEnd:()=>console.log("onRefreshEnd"),children:e("p",{children:n})})}),e(d.TabPane,{title:"\u6210\u529F\u63D0\u793A",children:e(c,{successText:"\u5237\u65B0\u6210\u529F",onRefresh:()=>t(!1),children:e("p",{children:n})})}),e(d.TabPane,{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",children:e(c,{headHeight:80,pullingText:({distance:i})=>e("img",{className:"doge",src:"https://img.yzcdn.cn/vant/doge.png",style:{transform:`scale(${i/80})`}}),loosingText:()=>e("img",{className:"doge",src:"https://img.yzcdn.cn/vant/doge.png"}),loadingText:()=>e("img",{className:"doge",src:"https://img.yzcdn.cn/vant/doge-fire.jpg"}),onRefresh:()=>t(!0),children:e("p",{children:n})})})]})})};const E=`import React, { useState, useMemo } from 'react'
import { PullRefresh, Tabs, Toast } from 'react-vant-nova'
import './style.less'

export default () => {
  const [count, setCount] = useState<number>(0)
  const tips = useMemo(() => {
    if (count) {
      return \`\u5237\u65B0\u6B21\u6570: \${count}\`
    }
    return '\u4E0B\u62C9\u8BD5\u8BD5'
  }, [count])

  const onRefresh = showToast => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (showToast) {
          Toast.info('\u5237\u65B0\u6210\u529F')
        }
        setCount(count + 1)
        resolve(true)
      }, 1000)
    })
  }

  return (
    <div className='demo-pull-refresh'>
      <Tabs>
        <Tabs.TabPane title='\u57FA\u7840\u7528\u6CD5'>
          <PullRefresh
            onRefresh={() => onRefresh(true)}
            onRefreshEnd={() => console.log('onRefreshEnd')}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title='\u6210\u529F\u63D0\u793A'>
          <PullRefresh
            successText='\u5237\u65B0\u6210\u529F'
            onRefresh={() => onRefresh(false)}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title='\u81EA\u5B9A\u4E49\u5185\u5BB9'>
          <PullRefresh
            headHeight={80}
            pullingText={({ distance }) => (
              <img
                className='doge'
                src='https://img.yzcdn.cn/vant/doge.png'
                style={{ transform: \`scale(\${distance / 80})\` }}
              />
            )}
            loosingText={() => (
              <img className='doge' src='https://img.yzcdn.cn/vant/doge.png' />
            )}
            loadingText={() => (
              <img
                className='doge'
                src='https://img.yzcdn.cn/vant/doge-fire.jpg'
              />
            )}
            onRefresh={() => onRefresh(true)}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}
`,p={code:E,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.4"},"index.tsx":{type:"FILE",value:`import React, { useState, useMemo } from 'react'
import { PullRefresh, Tabs, Toast } from 'react-vant-nova'
import './style.less'

export default () => {
  const [count, setCount] = useState<number>(0)
  const tips = useMemo(() => {
    if (count) {
      return \`\u5237\u65B0\u6B21\u6570: \${count}\`
    }
    return '\u4E0B\u62C9\u8BD5\u8BD5'
  }, [count])

  const onRefresh = showToast => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (showToast) {
          Toast.info('\u5237\u65B0\u6210\u529F')
        }
        setCount(count + 1)
        resolve(true)
      }, 1000)
    })
  }

  return (
    <div className='demo-pull-refresh'>
      <Tabs>
        <Tabs.TabPane title='\u57FA\u7840\u7528\u6CD5'>
          <PullRefresh
            onRefresh={() => onRefresh(true)}
            onRefreshEnd={() => console.log('onRefreshEnd')}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title='\u6210\u529F\u63D0\u793A'>
          <PullRefresh
            successText='\u5237\u65B0\u6210\u529F'
            onRefresh={() => onRefresh(false)}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title='\u81EA\u5B9A\u4E49\u5185\u5BB9'>
          <PullRefresh
            headHeight={80}
            pullingText={({ distance }) => (
              <img
                className='doge'
                src='https://img.yzcdn.cn/vant/doge.png'
                style={{ transform: \`scale(\${distance / 80})\` }}
              />
            )}
            loosingText={() => (
              <img className='doge' src='https://img.yzcdn.cn/vant/doge.png' />
            )}
            loadingText={() => (
              <img
                className='doge'
                src='https://img.yzcdn.cn/vant/doge-fire.jpg'
              />
            )}
            onRefresh={() => onRefresh(true)}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-pull-refresh {
  background-color: #fff;
  .rv-pull-refresh {
    height: calc(100vh - 50px);
  }

  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }

  p {
    margin: 0;
    padding: 16px 0 0 16px;
  }
}
`}},key:"pull-refresh-demo",meta:{}},F=function({previewer:r=()=>null,api:l=()=>null}){const n=r;return e("div",{children:u("div",{children:[e("h1",{id:"","data-anchor":"",children:"PullRefresh \u4E0B\u62C9\u5237\u65B0"}),e("h2",{id:"-1","data-anchor":"-1",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u63D0\u4F9B\u4E0B\u62C9\u5237\u65B0\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002"}),e("h2",{id:"-2","data-anchor":"-2",children:"\u5F15\u5165"}),e(n,{code:"import { PullRefresh } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"-3","data-anchor":"-3",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"-4","data-anchor":"-4",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:["\u4E0B\u62C9\u5237\u65B0\u65F6\u4F1A\u89E6\u53D1 ",e("code",{children:"onRefresh"})," \u4E8B\u4EF6\uFF0C\u5728\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u53EF\u4EE5\u8FDB\u884C\u540C\u6B65\u6216\u5F02\u6B65\u64CD\u4F5C\uFF0C\u64CD\u4F5C\u5B8C\u6210\u540E\u8868\u793A\u52A0\u8F7D\u5B8C\u6210\u3002"]}),e("blockquote",{children:e("p",{children:"\u548C vant \u4E0D\u540C\u7684\u662F\uFF0Creact-vant \u6839\u636E onRefresh \u5728\u7EC4\u4EF6\u5185\u90E8\u7EF4\u62A4\u4E86 loading \u72B6\u6001\u3002"})}),e(n,{...p,children:e(s,{})}),e("h3",{id:"-5","data-anchor":"-5",children:"\u6210\u529F\u63D0\u793A"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"successText"})," \u53EF\u4EE5\u8BBE\u7F6E\u5237\u65B0\u6210\u529F\u540E\u7684\u9876\u90E8\u63D0\u793A\u6587\u6848\u3002"]}),e(n,{code:`<PullRefresh successText="\u5237\u65B0\u6210\u529F" onRefresh="{onRefresh}">
  <p>\u4E0B\u62C9\u5237\u65B0</p>
</PullRefresh>`,lang:"jsx"}),e("h3",{id:"-6","data-anchor":"-6",children:"\u81EA\u5B9A\u4E49\u63D0\u793A"}),e("p",{children:"\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u5185\u5BB9\u3002"}),e(n,{code:`<PullRefresh
  headHeight={80}
  pullingText={({ distance }) => (
    <img
      className="doge"
      src="https://img.yzcdn.cn/vant/doge.png"
      style={{ transform: \`scale(\${distance / 80})\` }}
    />
  )}
  loosingText={() => <img className="doge" src="https://img.yzcdn.cn/vant/doge.png" />}
  loadingText={() => <img className="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />}
  onRefresh={onRefresh}
>
  <p>\u81EA\u5B9A\u4E49\u63D0\u793A</p>
</PullRefresh>`,lang:"jsx"}),e(n,{code:`.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}`,lang:"css"}),e("h2",{id:"-7","data-anchor":"-7",children:"API"}),e("h3",{id:"-8","data-anchor":"-8",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"pullingText"}),e("td",{children:"\u4E0B\u62C9\u8FC7\u7A0B\u63D0\u793A\u6587\u6848"}),e("td",{children:u("em",{children:["ReactNode|(","{"," distance ","}",") => ReactNode"]})}),e("td",{children:e("code",{children:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0..."})})]}),u("tr",{children:[e("td",{children:"loosingText"}),e("td",{children:"\u91CA\u653E\u8FC7\u7A0B\u63D0\u793A\u6587\u6848"}),e("td",{children:u("em",{children:["ReactNode|(","{"," distance ","}",") => ReactNode"]})}),e("td",{children:e("code",{children:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."})})]}),u("tr",{children:[e("td",{children:"loadingText"}),e("td",{children:"\u52A0\u8F7D\u8FC7\u7A0B\u63D0\u793A\u6587\u6848"}),e("td",{children:u("em",{children:["ReactNode|(","{"," distance ","}",") => ReactNode"]})}),e("td",{children:e("code",{children:"\u52A0\u8F7D\u4E2D..."})})]}),u("tr",{children:[e("td",{children:"successText"}),e("td",{children:"\u5237\u65B0\u6210\u529F\u63D0\u793A\u6587\u6848"}),e("td",{children:u("em",{children:["ReactNode|(","{"," distance ","}",") => ReactNode"]})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"successDuration"}),e("td",{children:"\u5237\u65B0\u6210\u529F\u63D0\u793A\u5C55\u793A\u65F6\u957F(ms)"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"500"})})]}),u("tr",{children:[e("td",{children:"animationDuration"}),e("td",{children:"\u52A8\u753B\u65F6\u957F"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"300"})})]}),u("tr",{children:[e("td",{children:"headHeight"}),e("td",{children:"\u9876\u90E8\u5185\u5BB9\u9AD8\u5EA6"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"50"})})]}),u("tr",{children:[e("td",{children:"pullDistance"}),e("td",{children:"\u89E6\u53D1\u4E0B\u62C9\u5237\u65B0\u7684\u8DDD\u79BB"}),e("td",{children:e("em",{children:"number | string"})}),u("td",{children:["\u4E0E ",e("code",{children:"headHeight"})," \u4E00\u81F4"]})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u4E0B\u62C9\u5237\u65B0"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"-9","data-anchor":"-9",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onRefresh"}),e("td",{children:"\u4E0B\u62C9\u5237\u65B0\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"() => (Promise|void)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onRefreshEnd"}),e("td",{children:"\u5237\u65B0\u5B8C\u6210\u540E\u89E6\u53D1"}),e("td",{children:e("em",{children:"() => void"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-10","data-anchor":"-10",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"-11","data-anchor":"-11",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-pull-refresh-head-height"}),e("td",{children:e("em",{children:"50px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-pull-refresh-head-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-pull-refresh-head-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-pull-refresh-loading-icon-size"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"-12","data-anchor":"-12",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"-13","data-anchor":"-13",children:"PullReresh \u7684\u5185\u5BB9\u672A\u586B\u6EE1\u5C4F\u5E55\u65F6\uFF0C\u53EA\u6709\u4E00\u90E8\u5206\u533A\u57DF\u53EF\u4EE5\u4E0B\u62C9\uFF1F"}),e("p",{children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E0B\u62C9\u533A\u57DF\u7684\u9AD8\u5EA6\u662F\u548C\u5185\u5BB9\u9AD8\u5EA6\u4FDD\u6301\u4E00\u81F4\u7684\uFF0C\u5982\u679C\u9700\u8981\u8BA9\u4E0B\u62C9\u533A\u57DF\u59CB\u7EC8\u4E3A\u5168\u5C4F\uFF0C\u53EF\u4EE5\u7ED9 PullRefresh \u8BBE\u7F6E\u4E00\u4E2A\u4E0E\u5C4F\u5E55\u5927\u5C0F\u76F8\u7B49\u7684\u6700\u5C0F\u9AD8\u5EA6\uFF1A"}),e(n,{code:'<PullRefresh style="height: 100vh;" />',lang:"jsx"})]})})},g=[{Component:s,key:"pull-refresh-demo"}],m=void 0,f=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:2,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:2,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:2,id:"-10"},{depth:3,id:"-11"},{depth:2,id:"-12"},{depth:3,id:"-13"}],B="/src/components/pull-refresh/README.md",C="undefined",D="1766203394000";var T=r=>r.children({MdContent:F,demos:g,frontmatter:m,slugs:f,filePath:B,title:C,updatedTime:D});export{F as MdContent,T as default,g as demos,B as filePath,m as frontmatter,f as slugs,C as title,D as updatedTime};
