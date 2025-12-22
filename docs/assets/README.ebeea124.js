import{r as a,a as e,F as p,j as n}from"./main.af98c409.js";import{B as c,el as s,dc as i}from"./FloatingPanel.788cd8cb.js";function m(d=!1){return{goods_id:"1",quota:5,quota_used:0,start_sale_num:2,goods_info:{price:1,title:"\u6D4B\u8BD5\u5546\u54C1",picture:"https://b.yzcdn.cn/vant/sku/shoes-1.png"},sku:{price:"1.00",stock_num:227,none_sku:!1,hide_stock:!1,collection_id:2261,tree:[{k:"\u989C\u8272",k_s:"s1",k_id:"1",v:[{id:"1",name:"\u7C89\u8272",imgUrl:"https://b.yzcdn.cn/vant/sku/shoes-1.png"},{id:"2",name:"\u9EC4\u8272",imgUrl:"https://b.yzcdn.cn/vant/sku/shoes-2.png"},{id:"3",name:"\u84DD\u8272",imgUrl:"https://b.yzcdn.cn/vant/sku/shoes-3.png"}],largeImageMode:d},{k:"\u5C3A\u5BF8",k_s:"s2",k_id:"2",v:[{id:"1",name:"\u5927"},{id:"2",name:"\u5C0F"}]}],list:[{id:2259,s1:"2",s2:"1",price:100,discount:100,stock_num:110},{id:2260,s1:"3",s2:"1",price:100,discount:100,stock_num:99},{id:2257,s1:"1",s2:"1",price:100,discount:100,stock_num:111},{id:2258,s1:"1",s2:"2",price:100,discount:100,stock_num:6}]},properties:[{k:"\u52A0\u6599",k_id:124,is_multiple:!0,v:[{id:1224,name:"\u5E03\u4E01",price:3},{id:1225,name:"\u6CE2\u9738",price:4},{id:1226,name:"\u73CD\u73E0",price:5}]},{k:"\u975E\u5FC5\u9009\u5C5E\u6027",k_id:125,is_multiple:!0,is_necessary:!1,v:[{id:1234,name:"\u5C5E\u60271",price:3},{id:1235,name:"\u5C5E\u60272",price:4}]},{k:"\u672A\u52A0\u4EF7\u7684\u5C5E\u6027\u9879",k_id:126,is_multiple:!0,v:[{id:1244,name:"\u5C5E\u6027a",price:0},{id:1245,name:"\u5C5E\u6027b",price:0}]}]}}const D={selectedNum:3,selectedSku:{s1:"1",s2:"1"},selectedProp:{124:[1225,1226]}},l=m();var g=()=>{const d=a.exports.useRef(null);return e(p,{children:[n(c,{block:!0,type:"primary",color:"linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)",style:{marginBottom:10},onClick:()=>{var t;return(t=d.current)==null?void 0:t.show()},children:"\u57FA\u7840\u7528\u6CD5"}),n(c,{block:!0,type:"primary",color:"linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)",onClick:()=>{var t;return(t=d.current)==null?void 0:t.show(D)},children:"\u8BBE\u7F6E\u9ED8\u8BA4\u503C"}),n(s,{ref:d,sku:l.sku,goods:l.goods_info,goodsId:l.goods_id,properties:l.properties,onAddCart:t=>i(JSON.stringify(t)),onBuyClicked:t=>i(JSON.stringify(t))})]})};const B={code:`import React, { useRef } from 'react';
import { Sku, Button, Toast } from 'react-vant-nova';
import type { SkuInstance } from 'react-vant-nova';
import { getSkuData, initialSku } from './demo/data';

const demoData = getSkuData();

export default () => {
  const ref = useRef<SkuInstance>(null);

  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        style={{ marginBottom: 10 }}
        onClick={() => ref.current?.show()}
      >
        \u57FA\u7840\u7528\u6CD5
      </Button>

      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show(initialSku)}
      >
        \u8BBE\u7F6E\u9ED8\u8BA4\u503C
      </Button>
      <Sku
        ref={ref}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        onAddCart={(value) => Toast(JSON.stringify(value))}
        onBuyClicked={(value) => Toast(JSON.stringify(value))}
      />
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { Sku, Button, Toast } from 'react-vant-nova';
import type { SkuInstance } from 'react-vant-nova';
import { getSkuData, initialSku } from './demo/data';

const demoData = getSkuData();

export default () => {
  const ref = useRef<SkuInstance>(null);

  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        style={{ marginBottom: 10 }}
        onClick={() => ref.current?.show()}
      >
        \u57FA\u7840\u7528\u6CD5
      </Button>

      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show(initialSku)}
      >
        \u8BBE\u7F6E\u9ED8\u8BA4\u503C
      </Button>
      <Sku
        ref={ref}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        onAddCart={(value) => Toast(JSON.stringify(value))}
        onBuyClicked={(value) => Toast(JSON.stringify(value))}
      />
    </>
  );
};`},"demo/data.ts":{type:"FILE",value:`export function getSkuData(largeImageMode = false) {
  return {
    goods_id: '1',
    quota: 5,
    quota_used: 0,
    start_sale_num: 2,
    goods_info: {
      price: 1,
      title: '\u6D4B\u8BD5\u5546\u54C1',
      picture: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
    },
    sku: {
      price: '1.00',
      stock_num: 227,
      none_sku: false,
      hide_stock: false,
      collection_id: 2261,
      tree: [
        {
          k: '\u989C\u8272',
          k_s: 's1',
          k_id: '1',
          v: [
            {
              id: '1',
              name: '\u7C89\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
            },
            {
              id: '2',
              name: '\u9EC4\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-2.png',
            },
            {
              id: '3',
              name: '\u84DD\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-3.png',
            },
          ],
          largeImageMode,
        },
        {
          k: '\u5C3A\u5BF8',
          k_s: 's2',
          k_id: '2',
          v: [
            {
              id: '1',
              name: '\u5927',
            },
            {
              id: '2',
              name: '\u5C0F',
            },
          ],
        },
      ],
      list: [
        {
          id: 2259,
          s1: '2',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 110,
        },
        {
          id: 2260,
          s1: '3',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 99,
        },
        {
          id: 2257,
          s1: '1',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 111,
        },
        {
          id: 2258,
          s1: '1',
          s2: '2',
          price: 100,
          discount: 100,
          stock_num: 6,
        },
      ],
    },
    properties: [
      {
        k: '\u52A0\u6599',
        k_id: 124,
        is_multiple: true,
        v: [
          {
            id: 1224,
            name: '\u5E03\u4E01',
            price: 3,
          },
          {
            id: 1225,
            name: '\u6CE2\u9738',
            price: 4,
          },
          {
            id: 1226,
            name: '\u73CD\u73E0',
            price: 5,
          },
        ],
      },
      {
        k: '\u975E\u5FC5\u9009\u5C5E\u6027',
        k_id: 125,
        is_multiple: true,
        is_necessary: false,
        v: [
          {
            id: 1234,
            name: '\u5C5E\u60271',
            price: 3,
          },
          {
            id: 1235,
            name: '\u5C5E\u60272',
            price: 4,
          },
        ],
      },
      {
        k: '\u672A\u52A0\u4EF7\u7684\u5C5E\u6027\u9879',
        k_id: 126,
        is_multiple: true,
        v: [
          {
            id: 1244,
            name: '\u5C5E\u6027a',
            price: 0,
          },
          {
            id: 1245,
            name: '\u5C5E\u6027b',
            price: 0,
          },
        ],
      },
    ],
  }
}

export const initialSku = {
  selectedNum: 3,
  selectedSku: {
    s1: '1',
    s2: '1',
  },
  selectedProp: {
    124: [1225, 1226],
  },
}
`}},key:"sku-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},o=m(),A={quotaText:"\u5355\u6B21\u9650\u8D2D100\u4EF6",stockFormatter:d=>`\u5269\u4F59${d}`,handleOverLimit:d=>{const{action:t,limitType:u,quota:k,startSaleNum:E=1}=d;t==="minus"?i(E>1?`${E}\u4EF6\u8D77\u552E`:"\u81F3\u5C11\u9009\u62E9\u4E00\u4EF6\u5546\u54C1"):t==="plus"&&(u===0?i(`\u9650\u8D2D${k}\u4EF6`):i("\u5E93\u5B58\u4E0D\u591F\u4E86"))}};var f=()=>{const d=a.exports.useRef(null);return e(p,{children:[n(c,{block:!0,type:"primary",color:"linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)",onClick:()=>{var t;return(t=d.current)==null?void 0:t.show()},children:"\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668"}),n(s,{ref:d,sku:o.sku,goods:o.goods_info,goodsId:o.goods_id,properties:o.properties,quota:o.quota,quotaUsed:o.quota_used,startSaleNum:o.start_sale_num,onBuyClicked:t=>console.log(t),onStepperChange:t=>console.log(t),customStepperConfig:A})]})};const _={code:`import React, { useRef } from 'react';
import { Sku, Button, Toast } from 'react-vant-nova';
import type { SkuInstance } from 'react-vant-nova';
import { getSkuData } from './demo/data';

const demoData = getSkuData();

const customStepperConfig = {
  quotaText: '\u5355\u6B21\u9650\u8D2D100\u4EF6',
  stockFormatter: (stock) => \`\u5269\u4F59\${stock}\`,
  handleOverLimit: (data) => {
    const { action, limitType, quota, startSaleNum = 1 } = data;
    if (action === 'minus') {
      Toast(startSaleNum > 1 ? \`\${startSaleNum}\u4EF6\u8D77\u552E\` : '\u81F3\u5C11\u9009\u62E9\u4E00\u4EF6\u5546\u54C1');
    } else if (action === 'plus') {
      if (limitType === 0) {
        Toast(\`\u9650\u8D2D\${quota}\u4EF6\`);
      } else {
        Toast('\u5E93\u5B58\u4E0D\u591F\u4E86');
      }
    }
  },
};

export default () => {
  const ref = useRef<SkuInstance>(null);
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show()}
      >
        \u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668
      </Button>
      <Sku
        ref={ref}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        quota={demoData.quota}
        quotaUsed={demoData.quota_used}
        startSaleNum={demoData.start_sale_num}
        onBuyClicked={(r) => console.log(r)}
        onStepperChange={(v) => console.log(v)}
        customStepperConfig={customStepperConfig}
      />
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { Sku, Button, Toast } from 'react-vant-nova';
import type { SkuInstance } from 'react-vant-nova';
import { getSkuData } from './demo/data';

const demoData = getSkuData();

const customStepperConfig = {
  quotaText: '\u5355\u6B21\u9650\u8D2D100\u4EF6',
  stockFormatter: (stock) => \`\u5269\u4F59\${stock}\`,
  handleOverLimit: (data) => {
    const { action, limitType, quota, startSaleNum = 1 } = data;
    if (action === 'minus') {
      Toast(startSaleNum > 1 ? \`\${startSaleNum}\u4EF6\u8D77\u552E\` : '\u81F3\u5C11\u9009\u62E9\u4E00\u4EF6\u5546\u54C1');
    } else if (action === 'plus') {
      if (limitType === 0) {
        Toast(\`\u9650\u8D2D\${quota}\u4EF6\`);
      } else {
        Toast('\u5E93\u5B58\u4E0D\u591F\u4E86');
      }
    }
  },
};

export default () => {
  const ref = useRef<SkuInstance>(null);
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show()}
      >
        \u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668
      </Button>
      <Sku
        ref={ref}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        quota={demoData.quota}
        quotaUsed={demoData.quota_used}
        startSaleNum={demoData.start_sale_num}
        onBuyClicked={(r) => console.log(r)}
        onStepperChange={(v) => console.log(v)}
        customStepperConfig={customStepperConfig}
      />
    </>
  );
};`},"demo/data.ts":{type:"FILE",value:`export function getSkuData(largeImageMode = false) {
  return {
    goods_id: '1',
    quota: 5,
    quota_used: 0,
    start_sale_num: 2,
    goods_info: {
      price: 1,
      title: '\u6D4B\u8BD5\u5546\u54C1',
      picture: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
    },
    sku: {
      price: '1.00',
      stock_num: 227,
      none_sku: false,
      hide_stock: false,
      collection_id: 2261,
      tree: [
        {
          k: '\u989C\u8272',
          k_s: 's1',
          k_id: '1',
          v: [
            {
              id: '1',
              name: '\u7C89\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
            },
            {
              id: '2',
              name: '\u9EC4\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-2.png',
            },
            {
              id: '3',
              name: '\u84DD\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-3.png',
            },
          ],
          largeImageMode,
        },
        {
          k: '\u5C3A\u5BF8',
          k_s: 's2',
          k_id: '2',
          v: [
            {
              id: '1',
              name: '\u5927',
            },
            {
              id: '2',
              name: '\u5C0F',
            },
          ],
        },
      ],
      list: [
        {
          id: 2259,
          s1: '2',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 110,
        },
        {
          id: 2260,
          s1: '3',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 99,
        },
        {
          id: 2257,
          s1: '1',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 111,
        },
        {
          id: 2258,
          s1: '1',
          s2: '2',
          price: 100,
          discount: 100,
          stock_num: 6,
        },
      ],
    },
    properties: [
      {
        k: '\u52A0\u6599',
        k_id: 124,
        is_multiple: true,
        v: [
          {
            id: 1224,
            name: '\u5E03\u4E01',
            price: 3,
          },
          {
            id: 1225,
            name: '\u6CE2\u9738',
            price: 4,
          },
          {
            id: 1226,
            name: '\u73CD\u73E0',
            price: 5,
          },
        ],
      },
      {
        k: '\u975E\u5FC5\u9009\u5C5E\u6027',
        k_id: 125,
        is_multiple: true,
        is_necessary: false,
        v: [
          {
            id: 1234,
            name: '\u5C5E\u60271',
            price: 3,
          },
          {
            id: 1235,
            name: '\u5C5E\u60272',
            price: 4,
          },
        ],
      },
      {
        k: '\u672A\u52A0\u4EF7\u7684\u5C5E\u6027\u9879',
        k_id: 126,
        is_multiple: true,
        v: [
          {
            id: 1244,
            name: '\u5C5E\u6027a',
            price: 0,
          },
          {
            id: 1245,
            name: '\u5C5E\u6027b',
            price: 0,
          },
        ],
      },
    ],
  }
}

export const initialSku = {
  selectedNum: 3,
  selectedSku: {
    s1: '1',
    s2: '1',
  },
  selectedProp: {
    124: [1225, 1226],
  },
}
`}},key:"sku-demo-1",meta:{title:"\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668"}},h=m(!0);var C=()=>{const d=a.exports.useRef();return e(p,{children:[n(c,{block:!0,type:"primary",color:"linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)",onClick:()=>{var t;return(t=d.current)==null?void 0:t.show()},children:"\u5927\u56FE\u6A21\u5F0F"}),n(s,{ref:d,sku:h.sku,goods:h.goods_info,goodsId:h.goods_id,properties:h.properties,disableStepperInput:!0})]})};const y={code:`import React, { useRef } from 'react';
import { Sku, Button } from 'react-vant-nova';
import type { SkuInstance } from 'react-vant-nova';
import { getSkuData } from './demo/data';

const demoDataLarge = getSkuData(true);

export default () => {
  const ref = useRef<SkuInstance>();
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show()}
      >
        \u5927\u56FE\u6A21\u5F0F
      </Button>
      <Sku
        ref={ref}
        sku={demoDataLarge.sku}
        goods={demoDataLarge.goods_info}
        goodsId={demoDataLarge.goods_id}
        properties={demoDataLarge.properties}
        disableStepperInput
      />
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { Sku, Button } from 'react-vant-nova';
import type { SkuInstance } from 'react-vant-nova';
import { getSkuData } from './demo/data';

const demoDataLarge = getSkuData(true);

export default () => {
  const ref = useRef<SkuInstance>();
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show()}
      >
        \u5927\u56FE\u6A21\u5F0F
      </Button>
      <Sku
        ref={ref}
        sku={demoDataLarge.sku}
        goods={demoDataLarge.goods_info}
        goodsId={demoDataLarge.goods_id}
        properties={demoDataLarge.properties}
        disableStepperInput
      />
    </>
  );
};`},"demo/data.ts":{type:"FILE",value:`export function getSkuData(largeImageMode = false) {
  return {
    goods_id: '1',
    quota: 5,
    quota_used: 0,
    start_sale_num: 2,
    goods_info: {
      price: 1,
      title: '\u6D4B\u8BD5\u5546\u54C1',
      picture: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
    },
    sku: {
      price: '1.00',
      stock_num: 227,
      none_sku: false,
      hide_stock: false,
      collection_id: 2261,
      tree: [
        {
          k: '\u989C\u8272',
          k_s: 's1',
          k_id: '1',
          v: [
            {
              id: '1',
              name: '\u7C89\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
            },
            {
              id: '2',
              name: '\u9EC4\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-2.png',
            },
            {
              id: '3',
              name: '\u84DD\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-3.png',
            },
          ],
          largeImageMode,
        },
        {
          k: '\u5C3A\u5BF8',
          k_s: 's2',
          k_id: '2',
          v: [
            {
              id: '1',
              name: '\u5927',
            },
            {
              id: '2',
              name: '\u5C0F',
            },
          ],
        },
      ],
      list: [
        {
          id: 2259,
          s1: '2',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 110,
        },
        {
          id: 2260,
          s1: '3',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 99,
        },
        {
          id: 2257,
          s1: '1',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 111,
        },
        {
          id: 2258,
          s1: '1',
          s2: '2',
          price: 100,
          discount: 100,
          stock_num: 6,
        },
      ],
    },
    properties: [
      {
        k: '\u52A0\u6599',
        k_id: 124,
        is_multiple: true,
        v: [
          {
            id: 1224,
            name: '\u5E03\u4E01',
            price: 3,
          },
          {
            id: 1225,
            name: '\u6CE2\u9738',
            price: 4,
          },
          {
            id: 1226,
            name: '\u73CD\u73E0',
            price: 5,
          },
        ],
      },
      {
        k: '\u975E\u5FC5\u9009\u5C5E\u6027',
        k_id: 125,
        is_multiple: true,
        is_necessary: false,
        v: [
          {
            id: 1234,
            name: '\u5C5E\u60271',
            price: 3,
          },
          {
            id: 1235,
            name: '\u5C5E\u60272',
            price: 4,
          },
        ],
      },
      {
        k: '\u672A\u52A0\u4EF7\u7684\u5C5E\u6027\u9879',
        k_id: 126,
        is_multiple: true,
        v: [
          {
            id: 1244,
            name: '\u5C5E\u6027a',
            price: 0,
          },
          {
            id: 1245,
            name: '\u5C5E\u6027b',
            price: 0,
          },
        ],
      },
    ],
  }
}

export const initialSku = {
  selectedNum: 3,
  selectedSku: {
    s1: '1',
    s2: '1',
  },
  selectedProp: {
    124: [1225, 1226],
  },
}
`}},key:"sku-demo-2",meta:{title:"\u5927\u56FE\u6A21\u5F0F"}},r=m();var F=()=>{const d=a.exports.useRef(),t=a.exports.useRef();return e(p,{children:[n(c,{block:!0,type:"primary",color:"linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)",style:{marginBottom:10},onClick:()=>{var u;return(u=d.current)==null?void 0:u.show()},children:"\u81EA\u5B9A\u4E49\u89C6\u56FE"}),n(c,{block:!0,type:"primary",color:"linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)",onClick:()=>{var u;return(u=t.current)==null?void 0:u.show()},children:"\u81EA\u5B9A\u4E49SKU\u6821\u9A8C\u89C4\u5219"}),n(s,{ref:d,sku:r.sku,goods:r.goods_info,goodsId:r.goods_id,properties:r.properties,skuHeaderPriceRender:u=>`\u{1F604} \xA5 ${u}`,skuActionsTop:n("div",{style:{padding:5,color:"#f44336",fontSize:12,textAlign:"center",backgroundColor:"#f2f2f2"},children:"\u5546\u54C1\u4E0D\u591A\uFF0C\u8D76\u5FEB\u8D2D\u4E70\u5427"})}),n(s,{ref:t,sku:r.sku,goods:r.goods_info,goodsId:r.goods_id,properties:r.properties,onAddCart:u=>i(JSON.stringify(u)),onBuyClicked:u=>i(JSON.stringify(u)),customSkuValidator:(u,k)=>(console.log(u,k),i("\u4E0D\u7BA1\u600E\u6837 \u90FD\u4E0D\u901A\u8FC7\uFF01"),!1)})]})};const v={code:`import React, { useRef } from 'react';
import { Sku, Button, Toast } from 'react-vant-nova';
import type { SkuInstance } from 'react-vant-nova';
import { getSkuData } from './demo/data';

const demoData = getSkuData();

export default () => {
  const ref1 = useRef<SkuInstance>();
  const ref2 = useRef<SkuInstance>();
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        style={{ marginBottom: 10 }}
        onClick={() => ref1.current?.show()}
      >
        \u81EA\u5B9A\u4E49\u89C6\u56FE
      </Button>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref2.current?.show()}
      >
        \u81EA\u5B9A\u4E49SKU\u6821\u9A8C\u89C4\u5219
      </Button>
      <Sku
        ref={ref1}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        skuHeaderPriceRender={(price) => {
          return \`\u{1F604} \xA5 \${price}\`;
        }}
        skuActionsTop={
          <div
            style={{
              padding: 5,
              color: '#f44336',
              fontSize: 12,
              textAlign: 'center',
              backgroundColor: '#f2f2f2',
            }}
          >
            \u5546\u54C1\u4E0D\u591A\uFF0C\u8D76\u5FEB\u8D2D\u4E70\u5427
          </div>
        }
      />
      <Sku
        ref={ref2}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        onAddCart={(value) => Toast(JSON.stringify(value))}
        onBuyClicked={(value) => Toast(JSON.stringify(value))}
        customSkuValidator={(actionType, selected) => {
          console.log(actionType, selected);
          Toast('\u4E0D\u7BA1\u600E\u6837 \u90FD\u4E0D\u901A\u8FC7\uFF01');
          return false;
        }}
      />
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant-nova":{type:"NPM",value:"1.0.5"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { Sku, Button, Toast } from 'react-vant-nova';
import type { SkuInstance } from 'react-vant-nova';
import { getSkuData } from './demo/data';

const demoData = getSkuData();

export default () => {
  const ref1 = useRef<SkuInstance>();
  const ref2 = useRef<SkuInstance>();
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        style={{ marginBottom: 10 }}
        onClick={() => ref1.current?.show()}
      >
        \u81EA\u5B9A\u4E49\u89C6\u56FE
      </Button>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref2.current?.show()}
      >
        \u81EA\u5B9A\u4E49SKU\u6821\u9A8C\u89C4\u5219
      </Button>
      <Sku
        ref={ref1}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        skuHeaderPriceRender={(price) => {
          return \`\u{1F604} \xA5 \${price}\`;
        }}
        skuActionsTop={
          <div
            style={{
              padding: 5,
              color: '#f44336',
              fontSize: 12,
              textAlign: 'center',
              backgroundColor: '#f2f2f2',
            }}
          >
            \u5546\u54C1\u4E0D\u591A\uFF0C\u8D76\u5FEB\u8D2D\u4E70\u5427
          </div>
        }
      />
      <Sku
        ref={ref2}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        onAddCart={(value) => Toast(JSON.stringify(value))}
        onBuyClicked={(value) => Toast(JSON.stringify(value))}
        customSkuValidator={(actionType, selected) => {
          console.log(actionType, selected);
          Toast('\u4E0D\u7BA1\u600E\u6837 \u90FD\u4E0D\u901A\u8FC7\uFF01');
          return false;
        }}
      />
    </>
  );
};`},"demo/data.ts":{type:"FILE",value:`export function getSkuData(largeImageMode = false) {
  return {
    goods_id: '1',
    quota: 5,
    quota_used: 0,
    start_sale_num: 2,
    goods_info: {
      price: 1,
      title: '\u6D4B\u8BD5\u5546\u54C1',
      picture: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
    },
    sku: {
      price: '1.00',
      stock_num: 227,
      none_sku: false,
      hide_stock: false,
      collection_id: 2261,
      tree: [
        {
          k: '\u989C\u8272',
          k_s: 's1',
          k_id: '1',
          v: [
            {
              id: '1',
              name: '\u7C89\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
            },
            {
              id: '2',
              name: '\u9EC4\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-2.png',
            },
            {
              id: '3',
              name: '\u84DD\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-3.png',
            },
          ],
          largeImageMode,
        },
        {
          k: '\u5C3A\u5BF8',
          k_s: 's2',
          k_id: '2',
          v: [
            {
              id: '1',
              name: '\u5927',
            },
            {
              id: '2',
              name: '\u5C0F',
            },
          ],
        },
      ],
      list: [
        {
          id: 2259,
          s1: '2',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 110,
        },
        {
          id: 2260,
          s1: '3',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 99,
        },
        {
          id: 2257,
          s1: '1',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 111,
        },
        {
          id: 2258,
          s1: '1',
          s2: '2',
          price: 100,
          discount: 100,
          stock_num: 6,
        },
      ],
    },
    properties: [
      {
        k: '\u52A0\u6599',
        k_id: 124,
        is_multiple: true,
        v: [
          {
            id: 1224,
            name: '\u5E03\u4E01',
            price: 3,
          },
          {
            id: 1225,
            name: '\u6CE2\u9738',
            price: 4,
          },
          {
            id: 1226,
            name: '\u73CD\u73E0',
            price: 5,
          },
        ],
      },
      {
        k: '\u975E\u5FC5\u9009\u5C5E\u6027',
        k_id: 125,
        is_multiple: true,
        is_necessary: false,
        v: [
          {
            id: 1234,
            name: '\u5C5E\u60271',
            price: 3,
          },
          {
            id: 1235,
            name: '\u5C5E\u60272',
            price: 4,
          },
        ],
      },
      {
        k: '\u672A\u52A0\u4EF7\u7684\u5C5E\u6027\u9879',
        k_id: 126,
        is_multiple: true,
        v: [
          {
            id: 1244,
            name: '\u5C5E\u6027a',
            price: 0,
          },
          {
            id: 1245,
            name: '\u5C5E\u6027b',
            price: 0,
          },
        ],
      },
    ],
  }
}

export const initialSku = {
  selectedNum: 3,
  selectedSku: {
    s1: '1',
    s2: '1',
  },
  selectedProp: {
    124: [1225, 1226],
  },
}
`}},key:"sku-demo-3",meta:{title:"\u81EA\u5B9A\u4E49"}},S=function({previewer:d=()=>null,api:t=()=>null}){const u=d;return n("div",{children:e("div",{children:[n("h1",{id:"","data-anchor":"",children:"Sku \u5546\u54C1\u89C4\u683C"}),n("h2",{id:"-1","data-anchor":"-1",children:"\u5F15\u5165"}),n(u,{code:"import { Sku } from 'react-vant-nova';",lang:"js"}),n("h2",{id:"-2","data-anchor":"-2",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"-3","data-anchor":"-3",children:"\u57FA\u7840\u7528\u6CD5"}),n(u,{...B,children:n(g,{})}),n("h3",{id:"-4","data-anchor":"-4",children:"\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668"}),n(u,{..._,children:n(f,{})}),n("h3",{id:"-5","data-anchor":"-5",children:"\u5927\u56FE\u6A21\u5F0F"}),n(u,{...y,children:n(C,{})}),n("h3",{id:"-6","data-anchor":"-6",children:"\u81EA\u5B9A\u4E49"}),n(u,{...v,children:n(F,{})}),n("h2",{id:"-7","data-anchor":"-7",children:"API"}),n("h3",{id:"-8","data-anchor":"-8",children:"Props"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"sku"}),n("td",{children:"\u5546\u54C1 sku \u6570\u636E"}),n("td",{children:n("em",{children:"object"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"goods"}),n("td",{children:"\u5546\u54C1\u4FE1\u606F"}),n("td",{children:n("em",{children:"object"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"goodsId"}),n("td",{children:"\u5546\u54C1 id"}),n("td",{children:n("em",{children:"number | string"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"priceTag"}),n("td",{children:"\u663E\u793A\u5728\u4EF7\u683C\u540E\u9762\u7684\u6807\u7B7E"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"hideStock"}),n("td",{children:"\u662F\u5426\u663E\u793A\u5546\u54C1\u5269\u4F59\u5E93\u5B58"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),e("tr",{children:[n("td",{children:"hideQuotaText"}),n("td",{children:"\u662F\u5426\u663E\u793A\u9650\u8D2D\u63D0\u793A"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),e("tr",{children:[n("td",{children:"hideSelectedText"}),n("td",{children:"\u662F\u5426\u9690\u85CF\u5DF2\u9009\u63D0\u793A"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),e("tr",{children:[n("td",{children:"stockThreshold"}),n("td",{children:"\u5E93\u5B58\u9608\u503C\u3002\u4F4E\u4E8E\u8FD9\u4E2A\u503C\u4F1A\u628A\u5E93\u5B58\u6570\u9AD8\u4EAE\u663E\u793A"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"50"})})]}),e("tr",{children:[n("td",{children:"showAddCartBtn"}),n("td",{children:"\u662F\u5426\u663E\u793A\u52A0\u5165\u8D2D\u7269\u8F66\u6309\u94AE"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"buyText"}),n("td",{children:"\u8D2D\u4E70\u6309\u94AE\u6587\u5B57"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"\u7ACB\u5373\u8D2D\u4E70"})})]}),e("tr",{children:[n("td",{children:"addCartText"}),n("td",{children:"\u52A0\u5165\u8D2D\u7269\u8F66\u6309\u94AE\u6587\u5B57"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"\u52A0\u5165\u8D2D\u7269\u8F66"})})]}),e("tr",{children:[n("td",{children:"quota"}),n("td",{children:"\u9650\u8D2D\u6570\uFF0C0 \u8868\u793A\u4E0D\u9650\u8D2D"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:n("code",{children:"0"})})]}),e("tr",{children:[n("td",{children:"quotaUsed"}),n("td",{children:"\u5DF2\u7ECF\u8D2D\u4E70\u8FC7\u7684\u6570\u91CF"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:n("code",{children:"0"})})]}),e("tr",{children:[n("td",{children:"resetOnHide"}),n("td",{children:"\u9690\u85CF\u65F6\u91CD\u7F6E\u9009\u62E9\u7684\u5546\u54C1\u6570\u91CF"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),e("tr",{children:[n("td",{children:"disableStepperInput"}),n("td",{children:"\u662F\u5426\u7981\u7528\u6B65\u8FDB\u5668\u8F93\u5165"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),e("tr",{children:[n("td",{children:"closeOnClickOverlay"}),n("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"stepperTitle"}),n("td",{children:"\u6570\u91CF\u9009\u62E9\u7EC4\u4EF6\u5DE6\u4FA7\u6587\u6848"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:n("code",{children:"\u8D2D\u4E70\u6570\u91CF"})})]}),e("tr",{children:[n("td",{children:"customStepperConfig"}),n("td",{children:"\u6B65\u8FDB\u5668\u76F8\u5173\u81EA\u5B9A\u4E49\u914D\u7F6E"}),n("td",{children:n("em",{children:"object"})}),n("td",{children:e("code",{children:["{","}"]})})]}),e("tr",{children:[n("td",{children:"customSkuValidator"}),n("td",{children:"\u81EA\u5B9A\u4E49 sku \u6821\u9A8C\u89C4\u5219"}),n("td",{children:n("em",{children:"(type,selectedValue) => void | boolean | Promise<boolean>"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"initialSku"}),n("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u7684 sku\uFF0C\u5177\u4F53\u53C2\u8003\u9AD8\u7EA7\u7528\u6CD5"}),n("td",{children:n("em",{children:"object"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"getContainer"}),e("td",{children:["\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C",n("a",{href:"/components/popup#zhi-ding-gua-zai-wei-zhi",children:"\u7528\u6CD5\u793A\u4F8B"})]}),n("td",{children:n("em",{children:"string | () => Element"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"showSoldoutSku"}),n("td",{children:"\u662F\u5426\u5C55\u793A\u552E\u7F44\u7684 sku\uFF0C\u9ED8\u8BA4\u5C55\u793A\u5E76\u7F6E\u7070"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"disableSoldoutSku"}),n("td",{children:"\u662F\u5426\u7981\u7528\u552E\u7F44\u7684 sku"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"safeAreaInsetBottom"}),e("td",{children:["\u662F\u5426\u5F00\u542F",n("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"startSaleNum"}),n("td",{children:"\u8D77\u552E\u6570\u91CF"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:n("code",{children:"1"})})]}),e("tr",{children:[n("td",{children:"properties"}),n("td",{children:"\u5546\u54C1\u5C5E\u6027"}),n("td",{children:n("em",{children:"array"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"previewOnClickImage"}),n("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u5546\u54C1\u56FE\u7247\u65F6\u81EA\u52A8\u9884\u89C8"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"showHeaderImage"}),n("td",{children:"\u662F\u5426\u5C55\u793A\u5934\u90E8\u56FE\u7247"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"lazyload"}),n("td",{children:"\u662F\u5426\u5F00\u542F\u56FE\u7247\u61D2\u52A0\u8F7D"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),e("tr",{children:[n("td",{children:"bodyOffsetTop"}),n("td",{children:"sku \u8DDD\u89C6\u7A97\u9876\u90E8\u8DDD\u79BB"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:"200"})]})]})]}),n("h3",{id:"-9","data-anchor":"-9",children:"Events"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u4E8B\u4EF6\u540D"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"onAddCart"}),n("td",{children:"\u70B9\u51FB\u6DFB\u52A0\u8D2D\u7269\u8F66\u56DE\u8C03"}),n("td",{children:"skuData: object"})]}),e("tr",{children:[n("td",{children:"onBuyClicked"}),n("td",{children:"\u70B9\u51FB\u8D2D\u4E70\u56DE\u8C03"}),n("td",{children:"skuData: object"})]}),e("tr",{children:[n("td",{children:"onStepperChange"}),n("td",{children:"\u8D2D\u4E70\u6570\u91CF\u53D8\u5316\u65F6\u89E6\u53D1"}),n("td",{children:"value: number"})]}),e("tr",{children:[n("td",{children:"onSkuSelected"}),n("td",{children:"\u5207\u6362\u89C4\u683C\u7C7B\u76EE\u65F6\u89E6\u53D1"}),e("td",{children:["{"," skuValue, selectedSku, selectedSkuComb ","}"]})]}),e("tr",{children:[n("td",{children:"onSkuPropSelected"}),n("td",{children:"\u5207\u6362\u5546\u54C1\u5C5E\u6027\u65F6\u89E6\u53D1"}),e("td",{children:["{"," propValue, selectedProp, selectedSkuComb ","}"]})]}),e("tr",{children:[n("td",{children:"onOpenPreview"}),n("td",{children:"\u6253\u5F00\u5546\u54C1\u56FE\u7247\u9884\u89C8\u65F6\u89E6\u53D1"}),n("td",{children:"data: object"})]}),e("tr",{children:[n("td",{children:"onClosePreview"}),n("td",{children:"\u5173\u95ED\u5546\u54C1\u56FE\u7247\u9884\u89C8\u65F6\u89E6\u53D1"}),n("td",{children:"data: object"})]})]})]}),n("h3",{id:"-10","data-anchor":"-10",children:"\u65B9\u6CD5"}),n("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Sku \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u65B9\u6CD5\u540D"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"getSkuData"}),n("td",{children:"\u83B7\u53D6\u5F53\u524D skuData"}),n("td",{children:"-"}),n("td",{children:"skuData"})]}),e("tr",{children:[n("td",{children:"reset"}),n("td",{children:"\u91CD\u7F6E Sku \u5230\u521D\u59CB\u72B6\u6001"}),n("td",{children:"-"}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"show"}),n("td",{children:"\u6253\u5F00 Sku\uFF0C\u652F\u6301\u8BBE\u7F6E\u9ED8\u8BA4\u503C"}),n("td",{children:"initialValue"}),n("td",{children:"-"})]})]})]}),n("h3",{id:"-11","data-anchor":"-11",children:"\u81EA\u5B9A\u4E49\u6E32\u67D3"}),n("p",{children:"Sku \u7EC4\u4EF6\u9ED8\u8BA4\u5212\u5206\u597D\u4E86\u82E5\u5E72\u533A\u5757\uFF0C\u8FD9\u4E9B\u533A\u5757\u90FD\u652F\u6301\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u53EF\u4EE5\u6309\u9700\u8FDB\u884C\u66FF\u6362\u3002\u533A\u5757\u987A\u5E8F\u89C1\u4E0B\u8868\uFF1A"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u540D\u79F0"}),n("th",{children:"\u8BF4\u660E"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"skuHeader"}),n("td",{children:"\u5546\u54C1\u4FE1\u606F\u5C55\u793A\u533A\uFF0C\u5305\u542B\u5546\u54C1\u56FE\u7247\u3001\u540D\u79F0\u3001\u4EF7\u683C\u7B49\u4FE1\u606F"})]}),e("tr",{children:[n("td",{children:"skuHeaderPrice"}),n("td",{children:"\u81EA\u5B9A\u4E49 sku \u5934\u90E8\u4EF7\u683C\u5C55\u793A"})]}),e("tr",{children:[n("td",{children:"skuHeaderOriginPrice"}),n("td",{children:"\u81EA\u5B9A\u4E49 sku \u5934\u90E8\u539F\u4EF7\u5C55\u793A"})]}),e("tr",{children:[n("td",{children:"skuHeaderExtra"}),n("td",{children:"\u989D\u5916 sku \u5934\u90E8\u533A\u57DF"})]}),e("tr",{children:[n("td",{children:"skuHeaderImageExtra"}),n("td",{children:"\u81EA\u5B9A\u4E49 sku \u5934\u90E8\u56FE\u7247\u989D\u5916\u7684\u5C55\u793A"})]}),e("tr",{children:[n("td",{children:"skuBodyTop"}),n("td",{children:"sku \u5C55\u793A\u533A\u4E0A\u65B9\u7684\u5185\u5BB9\uFF0C\u65E0\u9ED8\u8BA4\u5C55\u793A\u5185\u5BB9\uFF0C\u6309\u9700\u4F7F\u7528"})]}),e("tr",{children:[n("td",{children:"skuGroup"}),n("td",{children:"\u5546\u54C1 sku \u5C55\u793A\u533A"})]}),e("tr",{children:[n("td",{children:"skuGroupExtra"}),n("td",{children:"\u989D\u5916\u5546\u54C1 sku \u5C55\u793A\u533A\uFF0C\u4E00\u822C\u7528\u4E0D\u5230"})]}),e("tr",{children:[n("td",{children:"skuStepper"}),n("td",{children:"\u5546\u54C1\u6570\u91CF\u9009\u62E9\u533A"})]}),e("tr",{children:[n("td",{children:"skuActionsTop"}),n("td",{children:"\u64CD\u4F5C\u6309\u94AE\u533A\u9876\u90E8\u5185\u5BB9\uFF0C\u65E0\u9ED8\u8BA4\u5C55\u793A\u5185\u5BB9\uFF0C\u6309\u9700\u4F7F\u7528"})]}),e("tr",{children:[n("td",{children:"skuActions"}),n("td",{children:"\u64CD\u4F5C\u6309\u94AE\u533A"})]})]})]}),n("h3",{id:"-12","data-anchor":"-12",children:"sku \u5BF9\u8C61\u7ED3\u6784"}),n(u,{code:`sku: {
  // \u6240\u6709sku\u89C4\u683C\u7C7B\u76EE\u4E0E\u5176\u503C\u7684\u4ECE\u5C5E\u5173\u7CFB\uFF0C\u6BD4\u5982\u5546\u54C1\u6709\u989C\u8272\u548C\u5C3A\u7801\u4E24\u5927\u7C7B\u89C4\u683C\uFF0C\u989C\u8272\u4E0B\u9762\u53C8\u6709\u7EA2\u8272\u548C\u84DD\u8272\u4E24\u4E2A\u89C4\u683C\u503C\u3002
  // \u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A\u5546\u54C1\u53EF\u4EE5\u6709\u591A\u4E2A\u89C4\u683C\u7C7B\u76EE\uFF0C\u4E00\u4E2A\u89C4\u683C\u7C7B\u76EE\u4E0B\u53EF\u4EE5\u6709\u591A\u4E2A\u89C4\u683C\u503C\u3002
  tree: [
    {
      k: '\u989C\u8272', // skuKeyName\uFF1A\u89C4\u683C\u7C7B\u76EE\u540D\u79F0
      k_s: 's1', // skuKeyStr\uFF1Asku \u7EC4\u5408\u5217\u8868\uFF08\u4E0B\u65B9 list\uFF09\u4E2D\u5F53\u524D\u7C7B\u76EE\u5BF9\u5E94\u7684 key \u503C\uFF0Cvalue \u503C\u4F1A\u662F\u4ECE\u5C5E\u4E8E\u5F53\u524D\u7C7B\u76EE\u7684\u4E00\u4E2A\u89C4\u683C\u503C id
      v: [
        {
          id: '1', // skuValueId\uFF1A\u89C4\u683C\u503C id
          name: '\u7EA2\u8272', // skuValueName\uFF1A\u89C4\u683C\u503C\u540D\u79F0
          imgUrl: 'https://img01.yzcdn.cn/1.jpg', // \u89C4\u683C\u7C7B\u76EE\u56FE\u7247\uFF0C\u53EA\u6709\u7B2C\u4E00\u4E2A\u89C4\u683C\u7C7B\u76EE\u53EF\u4EE5\u5B9A\u4E49\u56FE\u7247
          previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg', // \u7528\u4E8E\u9884\u89C8\u663E\u793A\u7684\u89C4\u683C\u7C7B\u76EE\u56FE\u7247
        },
        {
          id: '1',
          name: '\u84DD\u8272',
          imgUrl: 'https://img01.yzcdn.cn/2.jpg',
          previewImgUrl: 'https://img01.yzcdn.cn/2p.jpg',
        }
      ],
      largeImageMode: true, //  \u662F\u5426\u5C55\u793A\u5927\u56FE\u6A21\u5F0F
    }
  ],
  // \u6240\u6709 sku \u7684\u7EC4\u5408\u5217\u8868\uFF0C\u6BD4\u5982\u7EA2\u8272\u3001M \u7801\u4E3A\u4E00\u4E2A sku \u7EC4\u5408\uFF0C\u7EA2\u8272\u3001S \u7801\u4E3A\u53E6\u4E00\u4E2A\u7EC4\u5408
  list: [
    {
      id: 2259, // skuId
      s1: '1', // \u89C4\u683C\u7C7B\u76EE k_s \u4E3A s1 \u7684\u5BF9\u5E94\u89C4\u683C\u503C id
      s2: '1', // \u89C4\u683C\u7C7B\u76EE k_s \u4E3A s2 \u7684\u5BF9\u5E94\u89C4\u683C\u503C id
      price: 100, // \u4EF7\u683C\uFF08\u5355\u4F4D\u5206\uFF09
      stock_num: 110 // \u5F53\u524D sku \u7EC4\u5408\u5BF9\u5E94\u7684\u5E93\u5B58
    }
  ],
  price: '1.00', // \u9ED8\u8BA4\u4EF7\u683C\uFF08\u5355\u4F4D\u5143\uFF09
  stock_num: 227, // \u5546\u54C1\u603B\u5E93\u5B58
  collection_id: 2261, // \u65E0\u89C4\u683C\u5546\u54C1 skuId \u53D6 collection_id\uFF0C\u5426\u5219\u53D6\u6240\u9009 sku \u7EC4\u5408\u5BF9\u5E94\u7684 id
  none_sku: false, // \u662F\u5426\u65E0\u89C4\u683C\u5546\u54C1
  messages: [
    {
      // \u5546\u54C1\u7559\u8A00
      datetime: '0', // \u7559\u8A00\u7C7B\u578B\u4E3A time \u65F6\uFF0C\u662F\u5426\u542B\u65E5\u671F\u3002'1' \u8868\u793A\u5305\u542B
      multiple: '0', // \u7559\u8A00\u7C7B\u578B\u4E3A text \u65F6\uFF0C\u662F\u5426\u591A\u884C\u6587\u672C\u3002'1' \u8868\u793A\u591A\u884C
      name: '\u7559\u8A00', // \u7559\u8A00\u540D\u79F0
      type: 'text', // \u7559\u8A00\u7C7B\u578B\uFF0C\u53EF\u9009: id_no\uFF08\u8EAB\u4EFD\u8BC1\uFF09, text, tel, date, time, email
      required: '1', // \u662F\u5426\u5FC5\u586B '1' \u8868\u793A\u5FC5\u586B
      placeholder: '', // \u53EF\u9009\u503C\uFF0C\u5360\u4F4D\u6587\u672C
      extraDesc: ''  // \u53EF\u9009\u503C\uFF0C\u9644\u52A0\u63CF\u8FF0\u6587\u6848
    }
  ],
  hide_stock: false // \u662F\u5426\u9690\u85CF\u5269\u4F59\u5E93\u5B58
}`,lang:"js"}),n("h3",{id:"-13","data-anchor":"-13",children:"properties \u5BF9\u8C61\u7ED3\u6784"}),n(u,{code:`[
  // \u5546\u54C1\u5C5E\u6027
  {
    k_id: 123, // \u5C5E\u6027id
    k: '\u52A0\u6599', // \u5C5E\u6027\u540D
    is_multiple: true, // \u662F\u5426\u53EF\u591A\u9009
    v: [
      {
        id: 1222, // \u5C5E\u6027\u503Cid
        name: '\u73CD\u73E0', // \u5C5E\u6027\u503C\u540D
        price: 1, // \u5C5E\u6027\u503C\u52A0\u4EF7
      },
      {
        id: 1223,
        name: '\u6930\u679C',
        price: 1,
      },
    ],
  },
];`,lang:"js"}),n("h3",{id:"-14","data-anchor":"-14",children:"initialSku \u5BF9\u8C61\u7ED3\u6784"}),n(u,{code:`{
  // \u521D\u59CB\u9009\u4E2D\u6570\u91CF
  selectedNum: 3,
  selectedSku: {
    // \u952E\uFF1AskuKeyStr\uFF08sku \u7EC4\u5408\u5217\u8868\u4E2D\u5F53\u524D\u7C7B\u76EE\u5BF9\u5E94\u7684 key \u503C\uFF09
    // \u503C\uFF1AskuValueId\uFF08\u89C4\u683C\u503C id\uFF09
    s1: '1',
    s2: '1',
  }
  // \u521D\u59CB\u9009\u4E2D\u7684\u5546\u54C1\u5C5E\u6027
  selectedProp: {
    // \u952E\uFF1A\u5C5E\u6027id
    // \u503C\uFF1A\u5C5E\u6027\u503Cid\u5217\u8868
    123: [1222]
  }
}`,lang:"js"}),n("h3",{id:"-15","data-anchor":"-15",children:"goods \u5BF9\u8C61\u7ED3\u6784"}),n(u,{code:`goods: {
  // \u9ED8\u8BA4\u5546\u54C1 sku \u7F29\u7565\u56FE
  picture: 'https://img01.yzcdn.cn/1.jpg';
}`,lang:"js"}),n("h3",{id:"-16","data-anchor":"-16",children:"customStepperConfig \u5BF9\u8C61\u7ED3\u6784"}),n(u,{code:`customStepperConfig: {
  // \u81EA\u5B9A\u4E49\u9650\u8D2D\u6587\u6848
  quotaText: '\u6BCF\u6B21\u9650\u8D2Dxxx\u4EF6',
  // \u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668\u8D85\u8FC7\u9650\u5236\u65F6\u7684\u56DE\u8C03
  handleOverLimit: (data) => {
    const { action, limitType, quota, quotaUsed, startSaleNum } = data;

    if (action === 'minus') {
      Toast(startSaleNum > 1  ? \`\${startSaleNum}\u4EF6\u8D77\u552E\` : '\u81F3\u5C11\u9009\u62E9\u4E00\u4EF6\u5546\u54C1');
    } else if (action === 'plus') {
      // const { LIMIT_TYPE } = Sku.skuConstants;
      if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
        let msg = \`\u5355\u6B21\u9650\u8D2D\${quota}\u4EF6\`;
        if (quotaUsed > 0) msg += \`\uFF0C\u4F60\u5DF2\u8D2D\u4E70\${quotaUsed}\`;
        Toast(msg);
      } else {
        Toast('\u5E93\u5B58\u4E0D\u591F\u4E86');
      }
    }
  },
  // \u6B65\u8FDB\u5668\u53D8\u5316\u7684\u56DE\u8C03
  handleStepperChange: currentValue => {},
  // \u5E93\u5B58
  stockNum: 1999,
}`,lang:"js"}),n("h3",{id:"-17","data-anchor":"-17",children:"\u6DFB\u52A0\u8D2D\u7269\u8F66\u548C\u70B9\u51FB\u8D2D\u4E70\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u7684 skuData \u5BF9\u8C61\u7ED3\u6784"}),n(u,{code:`skuData: {
  // \u5546\u54C1 id
  goodsId: '946755',
  // \u9009\u62E9\u7684\u5546\u54C1\u6570\u91CF
  selectedNum: 1,
  // \u9009\u62E9\u7684 sku \u7EC4\u5408
  selectedSkuComb: {
    id: 2257,
    price: 100,
    s1: '30349',
    s2: '1193',
    s3: '0',
    stock_num: 111,
    properties: [
      {
        k_id: 123,
        k: '\u52A0\u6599',
        is_multiple: true,
        v: [
          {
            id: 1223,
            name: '\u6930\u679C',
            price: 1
          }
        ]
      }
    ],
    property_price: 1
  },
}`,lang:"js"})]})})},b=[{Component:g,key:"sku-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:f,key:"sku-demo-1",title:"\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668"},{Component:C,key:"sku-demo-2",title:"\u5927\u56FE\u6A21\u5F0F"},{Component:F,key:"sku-demo-3",title:"\u81EA\u5B9A\u4E49"}],I={simulator:{compact:!1,style:{background:"#fff"}}},T=[{depth:1,id:""},{depth:2,id:"-1"},{depth:2,id:"-2"},{depth:3,id:"-3"},{depth:3,id:"-4"},{depth:3,id:"-5"},{depth:3,id:"-6"},{depth:2,id:"-7"},{depth:3,id:"-8"},{depth:3,id:"-9"},{depth:3,id:"-10"},{depth:3,id:"-11"},{depth:3,id:"-12"},{depth:3,id:"-13"},{depth:3,id:"-14"},{depth:3,id:"-15"},{depth:3,id:"-16"},{depth:3,id:"-17"}],x="/src/components/sku/README.md",N="undefined",q="1766203394000";var w=d=>d.children({MdContent:S,demos:b,frontmatter:I,slugs:T,filePath:x,title:N,updatedTime:q});export{S as MdContent,w as default,b as demos,x as filePath,I as frontmatter,T as slugs,N as title,q as updatedTime};
