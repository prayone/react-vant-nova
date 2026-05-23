import{j as e,a as n}from"./main.929296ee.js";import{e5 as t,dd as o,I as v}from"./TreeSelect.6eee9680.js";const F=["#ace0ff","#bcffbd","#e4fabd","#ffcfac"],u=F.map((r,d)=>e(t.Item,{children:e("div",{onClick:()=>{o.info(`\u4F60\u70B9\u51FB\u4E86\u5361\u7247 ${d+1}`)},children:d+1})},r));var c=()=>e("div",{className:"demo-swiper",children:e(t,{autoplay:5e3,children:u})});const E={code:`import React from 'react';
import { Swiper } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper autoplay={5000}>{items}</Swiper>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.1.0"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Swiper } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper autoplay={5000}>{items}</Swiper>
    </div>
  );
};`},"demo/items.tsx":{type:"FILE",value:`import React from 'react'
import { Swiper, Toast } from 'react-vant-nova'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

export const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div
      onClick={() => {
        Toast.info(\`\u4F60\u70B9\u51FB\u4E86\u5361\u7247 \${index + 1}\`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))
`},"demo/base.less":{type:"FILE",value:`.demo-swiper {
  .rv-swiper {
    &__slide {
      .rv-swiper-item {
        color: #fff;
        font-size: 20px;
        height: 150px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:nth-child(odd) {
        .rv-swiper-item {
          background-color: #3f45ff;
        }
      }

      &:nth-child(even) {
        .rv-swiper-item {
          background-color: lighten(#3f45ff, 8%);
        }
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: #fff;
      pointer-events: none;
    }
  }
}
`}},key:"swiper-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},w=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg","https://img.yzcdn.cn/vant/apple-5.jpg","https://img.yzcdn.cn/vant/apple-6.jpg","https://img.yzcdn.cn/vant/apple-7.jpg","https://img.yzcdn.cn/vant/apple-8.jpg"];var a=()=>e("div",{className:"demo-swiper",children:e(t,{children:w.map(r=>e(t.Item,{children:e(v,{lazyload:!0,src:r})},r))})});const g={code:`import React from 'react';
import { Swiper, Image } from 'react-vant-nova';
import { images } from './demo/images';
import './demo/images.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper>
        {images.map((image) => (
          <Swiper.Item key={image}>
            <Image lazyload src={image} />
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.1.0"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Swiper, Image } from 'react-vant-nova';
import { images } from './demo/images';
import './demo/images.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper>
        {images.map((image) => (
          <Swiper.Item key={image}>
            <Image lazyload src={image} />
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  );
};`},"demo/images.ts":{type:"FILE",value:`export const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
  'https://img.yzcdn.cn/vant/apple-5.jpg',
  'https://img.yzcdn.cn/vant/apple-6.jpg',
  'https://img.yzcdn.cn/vant/apple-7.jpg',
  'https://img.yzcdn.cn/vant/apple-8.jpg',
]
`},"demo/images.less":{type:"FILE",value:`.demo-swiper {
  .rv-swiper {
    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: #fff;
      pointer-events: none;
    }
  }
}
`}},key:"swiper-demo-1",meta:{title:"\u61D2\u52A0\u8F7D"}};var l=()=>e("div",{className:"demo-swiper",children:e(t,{onChange:r=>o(`\u5F53\u524D\u7D22\u5F15${r}`),children:u})});const x={code:`import React from 'react';
import { Swiper, Toast } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper onChange={(i) => Toast(\`\u5F53\u524D\u7D22\u5F15\${i}\`)}>{items}</Swiper>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.1.0"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Swiper, Toast } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper onChange={(i) => Toast(\`\u5F53\u524D\u7D22\u5F15\${i}\`)}>{items}</Swiper>
    </div>
  );
};`},"demo/items.tsx":{type:"FILE",value:`import React from 'react'
import { Swiper, Toast } from 'react-vant-nova'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

export const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div
      onClick={() => {
        Toast.info(\`\u4F60\u70B9\u51FB\u4E86\u5361\u7247 \${index + 1}\`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))
`},"demo/base.less":{type:"FILE",value:`.demo-swiper {
  .rv-swiper {
    &__slide {
      .rv-swiper-item {
        color: #fff;
        font-size: 20px;
        height: 150px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:nth-child(odd) {
        .rv-swiper-item {
          background-color: #3f45ff;
        }
      }

      &:nth-child(even) {
        .rv-swiper-item {
          background-color: lighten(#3f45ff, 8%);
        }
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: #fff;
      pointer-events: none;
    }
  }
}
`}},key:"swiper-demo-2",meta:{title:"\u76D1\u542C onChange \u4E8B\u4EF6"}};var p=()=>e("div",{className:"demo-swiper",children:e(t,{autoplay:5e3,vertical:!0,style:{height:150},children:u})});const B={code:`import React from 'react';
import { Swiper, Toast } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper autoplay={5000} vertical style={{ height: 150 }}>
        {items}
      </Swiper>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.1.0"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Swiper, Toast } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper autoplay={5000} vertical style={{ height: 150 }}>
        {items}
      </Swiper>
    </div>
  );
};`},"demo/items.tsx":{type:"FILE",value:`import React from 'react'
import { Swiper, Toast } from 'react-vant-nova'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

export const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div
      onClick={() => {
        Toast.info(\`\u4F60\u70B9\u51FB\u4E86\u5361\u7247 \${index + 1}\`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))
`},"demo/base.less":{type:"FILE",value:`.demo-swiper {
  .rv-swiper {
    &__slide {
      .rv-swiper-item {
        color: #fff;
        font-size: 20px;
        height: 150px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:nth-child(odd) {
        .rv-swiper-item {
          background-color: #3f45ff;
        }
      }

      &:nth-child(even) {
        .rv-swiper-item {
          background-color: lighten(#3f45ff, 8%);
        }
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: #fff;
      pointer-events: none;
    }
  }
}
`}},key:"swiper-demo-3",meta:{title:"\u7EB5\u5411\u6EDA\u52A8"}};var s=()=>e("div",{className:"demo-swiper",children:e(t,{slideSize:80,children:u})});const D={code:`import React from 'react';
import { Swiper, Toast } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper slideSize={80}>{items}</Swiper>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.1.0"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Swiper, Toast } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper slideSize={80}>{items}</Swiper>
    </div>
  );
};`},"demo/items.tsx":{type:"FILE",value:`import React from 'react'
import { Swiper, Toast } from 'react-vant-nova'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

export const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div
      onClick={() => {
        Toast.info(\`\u4F60\u70B9\u51FB\u4E86\u5361\u7247 \${index + 1}\`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))
`},"demo/base.less":{type:"FILE",value:`.demo-swiper {
  .rv-swiper {
    &__slide {
      .rv-swiper-item {
        color: #fff;
        font-size: 20px;
        height: 150px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:nth-child(odd) {
        .rv-swiper-item {
          background-color: #3f45ff;
        }
      }

      &:nth-child(even) {
        .rv-swiper-item {
          background-color: lighten(#3f45ff, 8%);
        }
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: #fff;
      pointer-events: none;
    }
  }
}
`}},key:"swiper-demo-4",meta:{title:"\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F"}};var m=()=>e("div",{className:"demo-swiper",children:e(t,{slideSize:80,trackOffset:10,children:u})});const C={code:`import React from 'react';
import { Swiper, Toast } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper slideSize={80} trackOffset={10}>
        {items}
      </Swiper>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.1.0"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Swiper, Toast } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper slideSize={80} trackOffset={10}>
        {items}
      </Swiper>
    </div>
  );
};`},"demo/items.tsx":{type:"FILE",value:`import React from 'react'
import { Swiper, Toast } from 'react-vant-nova'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

export const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div
      onClick={() => {
        Toast.info(\`\u4F60\u70B9\u51FB\u4E86\u5361\u7247 \${index + 1}\`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))
`},"demo/base.less":{type:"FILE",value:`.demo-swiper {
  .rv-swiper {
    &__slide {
      .rv-swiper-item {
        color: #fff;
        font-size: 20px;
        height: 150px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:nth-child(odd) {
        .rv-swiper-item {
          background-color: #3f45ff;
        }
      }

      &:nth-child(even) {
        .rv-swiper-item {
          background-color: lighten(#3f45ff, 8%);
        }
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: #fff;
      pointer-events: none;
    }
  }
}
`}},key:"swiper-demo-5",meta:{title:"\u6ED1\u5757\u5C45\u4E2D"}};var h=()=>e("div",{className:"demo-swiper",children:e(t,{style:{height:150},vertical:!0,slideSize:80,trackOffset:10,children:u})});const A={code:`import React from 'react';
import { Swiper, Toast } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper style={{ height: 150 }} vertical slideSize={80} trackOffset={10}>
        {items}
      </Swiper>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.1.0"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Swiper, Toast } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper style={{ height: 150 }} vertical slideSize={80} trackOffset={10}>
        {items}
      </Swiper>
    </div>
  );
};`},"demo/items.tsx":{type:"FILE",value:`import React from 'react'
import { Swiper, Toast } from 'react-vant-nova'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

export const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div
      onClick={() => {
        Toast.info(\`\u4F60\u70B9\u51FB\u4E86\u5361\u7247 \${index + 1}\`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))
`},"demo/base.less":{type:"FILE",value:`.demo-swiper {
  .rv-swiper {
    &__slide {
      .rv-swiper-item {
        color: #fff;
        font-size: 20px;
        height: 150px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:nth-child(odd) {
        .rv-swiper-item {
          background-color: #3f45ff;
        }
      }

      &:nth-child(even) {
        .rv-swiper-item {
          background-color: lighten(#3f45ff, 8%);
        }
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: #fff;
      pointer-events: none;
    }
  }
}
`}},key:"swiper-demo-6",meta:{title:"\u5782\u76F4\u6ED1\u5757\u5C45\u4E2D"}};var f=()=>e("div",{className:"demo-swiper",children:e(t,{indicator:(r,d)=>n("div",{className:"custom-indicator",children:[d+1,"/",r]}),children:u})});const b={code:`import React from 'react';
import { Swiper, Toast } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/indicator.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper
        indicator={(total, current) => (
          <div className="custom-indicator">
            {current + 1}/{total}
          </div>
        )}
      >
        {items}
      </Swiper>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.1.0"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Swiper, Toast } from 'react-vant-nova';
import { items } from './demo/items';
import './demo/indicator.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper
        indicator={(total, current) => (
          <div className="custom-indicator">
            {current + 1}/{total}
          </div>
        )}
      >
        {items}
      </Swiper>
    </div>
  );
};`},"demo/items.tsx":{type:"FILE",value:`import React from 'react'
import { Swiper, Toast } from 'react-vant-nova'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

export const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div
      onClick={() => {
        Toast.info(\`\u4F60\u70B9\u51FB\u4E86\u5361\u7247 \${index + 1}\`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))
`},"demo/indicator.less":{type:"FILE",value:`.demo-swiper {
  .custom-indicator {
    position: absolute;
    right: 15px;
    bottom: 10px;
    padding: 2px 5px;
    color: #fff;
    font-size: 12px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2px;
  }

  .rv-swiper {
    &__slide {
      .rv-swiper-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
      }

      &:nth-child(odd) {
        .rv-swiper-item {
          background-color: #3f45ff;
        }
      }

      &:nth-child(even) {
        .rv-swiper-item {
          background-color: lighten(#3f45ff, 8%);
        }
      }
    }
  }
}
`}},key:"swiper-demo-7",meta:{title:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668"}},y=function({previewer:r=()=>null,api:d=()=>null}){const i=r;return e("div",{children:n("div",{children:[e("h1",{id:"swiper-\u8F6E\u64AD","data-anchor":"swiper-\u8F6E\u64AD",children:"Swiper \u8F6E\u64AD"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5FAA\u73AF\u64AD\u653E\u4E00\u7EC4\u56FE\u7247\u6216\u5185\u5BB9\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(i,{code:"import { Swiper } from 'react-vant-nova';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),n("p",{children:["\u6BCF\u4E2A Swiper.Item \u4EE3\u8868\u4E00\u5F20\u8F6E\u64AD\u5361\u7247\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"autoplay"})," \u5C5E\u6027\u8BBE\u7F6E\u81EA\u52A8\u8F6E\u64AD\u7684\u95F4\u9694\u3002"]}),e(i,{...E,children:e(c,{})}),e("h3",{id:"\u61D2\u52A0\u8F7D","data-anchor":"\u61D2\u52A0\u8F7D",children:"\u61D2\u52A0\u8F7D"}),n("p",{children:["\u5F53 Swiper \u4E2D\u542B\u6709\u56FE\u7247\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u56FE\u7247 ",e("code",{children:"lazyload"})," \u5C5E\u6027\u6765\u5F00\u542F\u61D2\u52A0\u8F7D\u6A21\u5F0F\u3002\u5728\u61D2\u52A0\u8F7D\u6A21\u5F0F\u4E0B\uFF0C\u53EA\u4F1A\u6E32\u67D3\u5F53\u524D\u9875\uFF0C\u4E0A\u4E00\u9875\u548C\u4E0B\u4E00\u9875\u3002"]}),e(i,{...g,children:e(a,{})}),e("h3",{id:"\u76D1\u542C-onchange-\u4E8B\u4EF6","data-anchor":"\u76D1\u542C-onchange-\u4E8B\u4EF6",children:"\u76D1\u542C onChange \u4E8B\u4EF6"}),n("p",{children:["\u5728\u6BCF\u4E00\u9875\u8F6E\u64AD\u7ED3\u675F\u540E\uFF0C\u4F1A\u89E6\u53D1 ",e("code",{children:"onChange"})," \u4E8B\u4EF6\u3002"]}),e(i,{...x,children:e(l,{})}),e("h3",{id:"\u7EB5\u5411\u6EDA\u52A8","data-anchor":"\u7EB5\u5411\u6EDA\u52A8",children:"\u7EB5\u5411\u6EDA\u52A8"}),n("p",{children:["\u8BBE\u7F6E ",e("code",{children:"vertical"})," \u5C5E\u6027\u540E\u6ED1\u5757\u4F1A\u7EB5\u5411\u6392\u5217\uFF0C\u6B64\u65F6\u9700\u8981\u6307\u5B9A\u6ED1\u5757\u5BB9\u5668\u7684\u9AD8\u5EA6\u3002"]}),e(i,{...B,children:e(p,{})}),e("h3",{id:"\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F","data-anchor":"\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F",children:"\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F"}),n("p",{children:["\u6ED1\u5757\u9ED8\u8BA4\u5BBD\u5EA6\u4E3A ",e("code",{children:"100%"}),"\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"slideSize"})," \u5C5E\u6027\u6539\u53D8\u6ED1\u5757\u5BBD\u5EA6\u3002"]}),e(i,{...D,children:e(s,{})}),e("h3",{id:"\u6ED1\u5757\u5C45\u4E2D","data-anchor":"\u6ED1\u5757\u5C45\u4E2D",children:"\u6ED1\u5757\u5C45\u4E2D"}),n("p",{children:["\u901A\u8FC7 ",e("code",{children:"trackOffset"})," \u6539\u53D8\u6ED1\u5757\u504F\u79FB\u91CF\u5B9E\u73B0\u5C45\u4E2D\u5C55\u793A\u3002"]}),e(i,{...C,children:e(m,{})}),e("h3",{id:"\u5782\u76F4\u6ED1\u5757\u5C45\u4E2D","data-anchor":"\u5782\u76F4\u6ED1\u5757\u5C45\u4E2D",children:"\u5782\u76F4\u6ED1\u5757\u5C45\u4E2D"}),e(i,{...A,children:e(h,{})}),e("h3",{id:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668","data-anchor":"\u81EA\u5B9A\u4E49\u6307\u793A\u5668",children:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668"}),n("p",{children:["\u901A\u8FC7 ",e("code",{children:"indicator"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6307\u793A\u5668\u7684\u6837\u5F0F\u3002"]}),e(i,{...b,children:e(f,{})}),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"swipe-props","data-anchor":"swipe-props",children:"Swipe Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"autoplay"}),e("td",{children:"\u81EA\u52A8\u8F6E\u64AD\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A ms"}),e("td",{children:e("em",{children:"number | boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"duration"}),e("td",{children:"\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A ms"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"300"})})]}),n("tr",{children:[e("td",{children:"initialSwipe"}),e("td",{children:"\u521D\u59CB\u4F4D\u7F6E\u7D22\u5F15\u503C"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"0"})})]}),n("tr",{children:[e("td",{children:"loop"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"enabled"}),e("td",{children:"\u662F\u5426\u542F\u7528 Swiper"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"vertical"}),e("td",{children:"\u662F\u5426\u4E3A\u7EB5\u5411\u6EDA\u52A8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"touchable"}),e("td",{children:"\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u624B\u52BF\u6ED1\u52A8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"preventScroll"}),e("td",{children:"\u662F\u5426\u963B\u6B62\u5185\u90E8\u6EDA\u52A8\u884C\u4E3A"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"slideSize"}),e("td",{children:"\u6ED1\u5757\u7684\u5BBD\u5EA6\u767E\u5206\u6BD4"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"100"})})]}),n("tr",{children:[e("td",{children:"trackOffset"}),e("td",{children:"\u6ED1\u5757\u8F68\u9053\u6574\u4F53\u7684\u504F\u79FB\u91CF\u767E\u5206\u6BD4"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"0"})})]}),n("tr",{children:[e("td",{children:"rubberband"}),e("td",{children:"\u662F\u5426\u5728\u62D6\u52A8\u8D85\u51FA\u5185\u5BB9\u533A\u57DF\u65F6\u542F\u7528\u6A61\u76AE\u7B4B\u6548\u679C\uFF0C\u4EC5\u5728\u975E loop \u6A21\u5F0F\u4E0B\u751F\u6548"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),n("tr",{children:[e("td",{children:"stuckAtBoundary"}),n("td",{children:["\u662F\u5426\u5728\u8FB9\u754C\u4E24\u8FB9\u5361\u4F4F\uFF0C\u907F\u514D\u51FA\u73B0\u7A7A\u767D\uFF0C\u4EC5\u5728\u975E ",e("code",{children:"loop"})," \u6A21\u5F0F\u4E14 ",e("code",{children:"slideSize"})," < 100 \u65F6\u751F\u6548"]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"indicator"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668"}),e("td",{children:e("em",{children:"boolean | (total, current) => ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"indicatorProps"}),e("td",{children:"\u6307\u793A\u5668\u5C5E\u6027"}),e("td",{children:e("em",{children:"IndicatorProps"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u6BCF\u4E00\u9875\u8F6E\u64AD\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:e("em",{children:"(index:\u5F53\u524D\u9875\u7684\u7D22\u5F15) => void"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"indicatorprops-\u683C\u5F0F","data-anchor":"indicatorprops-\u683C\u5F0F",children:"IndicatorProps \u683C\u5F0F"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u6307\u793A\u5668\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})})]}),n("tr",{children:[e("td",{children:"style"}),e("td",{children:"\u6307\u793A\u5668\u6837\u5F0F"}),e("td",{children:e("em",{children:"string"})})]})]})]}),e("h3",{id:"swiperitem-events","data-anchor":"swiperitem-events",children:"SwiperItem Events"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:n("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]})})]}),e("h3",{id:"swiper-\u65B9\u6CD5","data-anchor":"swiper-\u65B9\u6CD5",children:"Swiper \u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Swiper \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"swipePrev"}),e("td",{children:"\u5207\u6362\u5230\u4E0A\u4E00\u8F6E\u64AD"}),e("td",{children:"-"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"swipeNext"}),e("td",{children:"\u5207\u6362\u5230\u4E0B\u4E00\u8F6E\u64AD"}),e("td",{children:"-"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"swipeTo"}),e("td",{children:"\u5207\u6362\u5230\u6307\u5B9A\u4F4D\u7F6E"}),e("td",{children:e("em",{children:"index: number"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"disable"}),e("td",{children:"\u7981\u7528 Swiper\uFF08\u5982\u679C\u5DF2\u542F\u7528\uFF09"}),e("td",{children:"-"}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"enable"}),e("td",{children:"\u52A8\u6001\u542F\u7528 Swiper\uFF08\u5982\u679C\u5DF2\u7ECF\u7981\u7528\uFF09"}),e("td",{children:"-"}),e("td",{children:"-"})]})]})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(i,{code:"import type { SwiperInstance } from 'react-vant-nova';",lang:"ts"}),n("p",{children:[e("code",{children:"SwiperInstance"})," \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A"]}),e(i,{code:`import { useRef } from 'react';
import type { SwiperInstance } from 'react-vant-nova';

const swipeRef = useRef<SwipeInstance>(null);

swipeRef.current?.swipeNext();`,lang:"ts"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"--rv-swipe-slide-size"}),e("td",{children:e("em",{children:"100%"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-swipe-track-offset"}),e("td",{children:e("em",{children:"0%"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-swipe-border-radius"}),e("td",{children:e("em",{children:"0px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-swipe-indicator-size"}),e("td",{children:e("em",{children:"6px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-swipe-indicator-margin"}),e("td",{children:e("em",{children:"var(--rv-padding-sm)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-swipe-indicator-active-opacity"}),e("td",{children:e("em",{children:"1"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-swipe-indicator-inactive-opacity"}),e("td",{children:e("em",{children:"0.3"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-swipe-indicator-active-background-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-swipe-indicator-inactive-background-color"}),e("td",{children:e("em",{children:"var(--rv-border-color)"})}),e("td",{children:"-"})]})]})]})]})})},S=[{Component:c,key:"swiper-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:a,key:"swiper-demo-1",title:"\u61D2\u52A0\u8F7D"},{Component:l,key:"swiper-demo-2",title:"\u76D1\u542C onChange \u4E8B\u4EF6"},{Component:p,key:"swiper-demo-3",title:"\u7EB5\u5411\u6EDA\u52A8"},{Component:s,key:"swiper-demo-4",title:"\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F"},{Component:m,key:"swiper-demo-5",title:"\u6ED1\u5757\u5C45\u4E2D"},{Component:h,key:"swiper-demo-6",title:"\u5782\u76F4\u6ED1\u5757\u5C45\u4E2D"},{Component:f,key:"swiper-demo-7",title:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668"}],k=void 0,I=[{depth:1,text:"Swiper \u8F6E\u64AD",id:"swiper-\u8F6E\u64AD"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u61D2\u52A0\u8F7D",id:"\u61D2\u52A0\u8F7D"},{depth:3,text:"\u76D1\u542C onChange \u4E8B\u4EF6",id:"\u76D1\u542C-onchange-\u4E8B\u4EF6"},{depth:3,text:"\u7EB5\u5411\u6EDA\u52A8",id:"\u7EB5\u5411\u6EDA\u52A8"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F",id:"\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F"},{depth:3,text:"\u6ED1\u5757\u5C45\u4E2D",id:"\u6ED1\u5757\u5C45\u4E2D"},{depth:3,text:"\u5782\u76F4\u6ED1\u5757\u5C45\u4E2D",id:"\u5782\u76F4\u6ED1\u5757\u5C45\u4E2D"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668",id:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668"},{depth:2,text:"API",id:"api"},{depth:3,text:"Swipe Props",id:"swipe-props"},{depth:3,text:"IndicatorProps \u683C\u5F0F",id:"indicatorprops-\u683C\u5F0F"},{depth:3,text:"SwiperItem Events",id:"swiperitem-events"},{depth:3,text:"Swiper \u65B9\u6CD5",id:"swiper-\u65B9\u6CD5"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],z="/src/components/swiper/README.md",N="Swiper \u8F6E\u64AD",j="1766203394000";var R=r=>r.children({MdContent:y,demos:S,frontmatter:k,slugs:I,filePath:z,title:N,updatedTime:j});export{y as MdContent,R as default,S as demos,z as filePath,k as frontmatter,I as slugs,N as title,j as updatedTime};
