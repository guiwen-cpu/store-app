<template>
  <div class="recommend">
    <div class="productList_one">
      <div class="product_title"><span>{{productList_sweepingRobot.title}}</span></div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in productList_sweepingRobot.productItem"
           :key="index"><img :src="item.img"
               alt=""><span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span><span class="product_price">{{item.price}}</span></a>
      </div>
    </div>
    <div class="productList_two">
      <div class="advertisement">
        <img :src="productList_sweepingRobot_two.advertisement.img"
             alt="">
        <i>{{productList_sweepingRobot_two.advertisement.tag}}</i>
        <p class="line_clamp_1">{{productList_sweepingRobot_two.advertisement.title}}</p>
      </div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in productList_sweepingRobot_two.productItem"
           :key="index">
          <img :src="item.img"
               alt="">
          <p>{{item.name}}</p>
          <span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span>
          <span>{{item.price}}</span>
        </a>
      </div>
    </div>
    <div class="productList_one">
      <div class="product_title"><span>{{productList_milk.title}}</span></div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in productList_milk.productItem"
           :key="index"><img :src="item.img"
               alt=""><span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span><span class="product_price">{{item.price}}</span></a>
      </div>
    </div>
    <div class="productList_two">
      <div class="advertisement">
        <img :src="productList_milk_two.advertisement.img"
             alt="">
        <i>{{productList_milk_two.advertisement.tag}}</i>
        <p class="line_clamp_1">{{productList_milk_two.advertisement.title}}</p>
      </div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in productList_milk_two.productItem"
           :key="index">
          <img :src="item.img"
               alt="">
          <p>{{item.name}}</p>
          <span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span>
          <span>{{item.price}}</span>
        </a>
      </div>
    </div>
    <div class="productList_one">
      <div class="product_title"><span>{{productList_television.title}}</span></div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in productList_television.productItem"
           :key="index"><img :src="item.img"
               alt=""><span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span><span class="product_price">{{item.price}}</span></a>
      </div>
    </div>
    <div class="productList_two">
      <div class="advertisement">
        <img :src="productList_mobile.advertisement.img"
             alt="">
        <i>{{productList_mobile.advertisement.tag}}</i>
        <p class="line_clamp_1">{{productList_mobile.advertisement.title}}</p>
      </div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in productList_mobile.productItem"
           :key="index">
          <img :src="item.img"
               alt="">
          <p>{{item.name}}</p>
          <span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span>
          <span>{{item.price}}</span>
        </a>
      </div>
    </div>
    <div class="productList_one">
      <div class="product_title"><span>{{productList_sweepingRobot.title}}</span></div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in productList_sweepingRobot.productItem"
           :key="index"><img :src="item.img"
               alt=""><span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span><span class="product_price">{{item.price}}</span></a>
      </div>
    </div>
    <div class="productList_two">
      <div class="advertisement">
        <img :src="productList_sweepingRobot_two.advertisement.img"
             alt="">
        <i>{{productList_sweepingRobot_two.advertisement.tag}}</i>
        <p class="line_clamp_1">{{productList_sweepingRobot_two.advertisement.title}}</p>
      </div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in productList_sweepingRobot_two.productItem"
           :key="index">
          <img :src="item.img"
               alt="">
          <p>{{item.name}}</p>
          <span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span>
          <span>{{item.price}}</span>
        </a>
      </div>
    </div>
    <div class="productList_one">
      <div class="product_title"><span>{{productList_milk.title}}</span></div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in productList_milk.productItem"
           :key="index"><img :src="item.img"
               alt=""><span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span><span class="product_price">{{item.price}}</span></a>
      </div>
    </div>
    <div class="productList_two">
      <div class="advertisement">
        <img :src="productList_milk_two.advertisement.img"
             alt="">
        <i>{{productList_milk_two.advertisement.tag}}</i>
        <p class="line_clamp_1">{{productList_milk_two.advertisement.title}}</p>
      </div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in productList_milk_two.productItem"
           :key="index">
          <img :src="item.img"
               alt="">
          <p>{{item.name}}</p>
          <span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span>
          <span>{{item.price}}</span>
        </a>
      </div>
    </div>
    <div class="productList_one">
      <div class="product_title"><span>{{productList_television.title}}</span></div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in productList_television.productItem"
           :key="index"><img :src="item.img"
               alt=""><span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span><span class="product_price">{{item.price}}</span></a>
      </div>
    </div>
    <div class="productList_two">
      <div class="advertisement">
        <img :src="productList_mobile.advertisement.img"
             alt="">
        <i>{{productList_mobile.advertisement.tag}}</i>
        <p class="line_clamp_1">{{productList_mobile.advertisement.title}}</p>
      </div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in productList_mobile.productItem"
           :key="index">
          <img :src="item.img"
               alt="">
          <p>{{item.name}}</p>
          <span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span>
          <span>{{item.price}}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList_sweepingRobot: {
        title: "地面毛发难扫？扫地机器人来帮你",
        productItem: [
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/-eCVDycsFr3rZUX0KxARKg.jpg?format=400h_400w_4e_80q.webp",
            coupon: "领券10元",
            price: "￥2799"
          },
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/vuJ2AMPPowhidXzeoYiRPg.jpg?format=400h_400w_4e_80q.webp",
            coupon: "",
            price: "￥799"
          },
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/BbWJ3iUO7sLrRkGSvgMzgA.jpg?format=400h_400w_4e_80q.webp",
            coupon: "",
            price: "￥899"
          }
        ]
      },

      productList_sweepingRobot_two: {
        advertisement: {
          img:
            "https://image3.suning.cn/uimg/MFS/show/153761562116133262.jpg_0-21-713-320a%7C710w_320h_2e?from=mobile",
          tag: "6 商品",
          title: "只能清洁管家，拯救宅家懒癌症"
        },
        productItem: [
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/EdXTpbE5xVRrsO52qqQhkg.jpg?format=400h_400w_4e_80q.webp",
            name:
              "飞利浦(Philips) FC8710/82 吸尘器 智能扫地机器人 2重清洁功能 6厘米机身 覆盖清扫区域",
            coupon: "",
            price: "￥999"
          },
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/QFFZLgJMBc3BTcwiX7DpYQ.jpg?format=400h_400w_4e_80q.webp",
            name:
              "科沃斯（ECOVACS）扫地机器人地宝DN55 吸尘器智能家用全自动规划擦地扫拖一体机器人 APP操控碰撞保护",
            coupon: "满99-10",
            price: "￥1799"
          },
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/14L2vDfXtfdwbLf_E147FA.jpg?format=400h_400w_4e_80q.webp",
            name:
              "科沃斯（ECOVACS）扫地机器人 地宝DE55家用智能扫拖吸式全自动吸尘器APP操控 拖扫吸式碰撞保护",
            coupon: "满99-10",
            price: "￥1249"
          }
        ]
      },
      productList_milk: {
        title: "早晚一杯奶粉，助孩子健康成长",
        productItem: [
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/JkcJKb46lZE_5ApQs7-wgQ.jpg?format=400h_400w_4e_80q.webp",
            coupon: "",
            price: "￥42"
          },
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/bDymM66zSt9TDgUAKAjlcQ.png?format=400h_400w_4e_80q.webp",
            coupon: "",
            price: "￥21.8"
          },
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/FvSkWiptHNouO0auj2mBVQ.jpg?format=400h_400w_4e_80q.webp",
            coupon: "领券5元",
            price: "￥111"
          }
        ]
      },
      productList_milk_two: {
        advertisement: {
          img:
            "https://image.suning.cn/uimg/MZMS/show/157741333556278627.jpg_0-0-710-319a?from=mobile",
          tag: "10 商品",
          title: "十款科学配比好吸收的成人奶粉"
        },
        productItem: [
          {
            img:
              "https://image.suning.cn/uimg/b2c/newcatentries/0070075748-000000000120158846_1.jpg?format=400h_400w_4e_80q.webp",
            name: "美可高特 官方旗舰店 中老年配方羊奶粉600克罐装 新包装新日期",
            coupon: "领券5元",
            price: "￥158"
          },
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/5JniEjJvqgop1ri82nP1bA==.png?format=400h_400w_4e_80q.webp",
            name:
              "【美羚旗舰店】美羚羊奶粉中老年无蔗糖羊奶粉成人羊奶粉800g听装",
            coupon: "满99-10",
            price: "￥228"
          },
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/uNp7TNZdroO2APmqt3eMUg.jpg?format=400h_400w_4e_80q.webp",
            name: "安怡经典中老年高钙奶粉800g*2罐（礼盒装）成人奶粉",
            coupon: "",
            price: "￥196.1"
          }
        ]
      },
      productList_television: {
        title: "影院级视听，杜比4K电视能呈现",
        productItem: [
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/jbmYyx2kHbTfjwMw_xZFMQ.jpg?format=400h_400w_4e_80q.webp",
            coupon: "",
            price: "￥3768"
          },
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/c0FPMzdmJAnSXnXPEfqICg.jpg?format=400h_400w_4e_80q.webp",
            coupon: "",
            price: "￥3999"
          },
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/QgRRPqTFPAQfgozg2-iCgA.jpg?format=400h_400w_4e_80q.webp",
            coupon: "领券100元",
            price: "￥3264"
          }
        ]
      },
      productList_mobile: {
        advertisement: {
          img:
            "https://image2.suning.cn/uimg/MFS/show/157241344409865472.jpg_0-136-1200-540a?from=mobile",
          tag: "10 商品",
          title: "十款成像光彩夺目的多摄拍照手机"
        },
        productItem: [
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/cDUuspA-x1L1tH7AwEV6eQ.png?format=400h_400w_4e_80q.webp",
            name:
              "一加 OnePlus 7T 8GB+128GB 冰际蓝 90Hz流体屏 骁龙855Plus 4800万超广角三摄 移动联通电信全网通4G游戏手机",
            coupon: "领券50元",
            price: "￥2354"
          },
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/FoNTOUWaO_d03xdDRp8fsg.jpg?format=400h_400w_4e_80q.webp",
            name:
              "vivo iQOO pro 12+128G 竞速黑 高通骁龙855Plus手机 4800万AI三摄 44W超快闪充 全网通5G手机",
            coupon: "满3999-500",
            price: "￥7223"
          },
          {
            img:
              "https://imgservice.suning.cn/uimg1/b2c/image/RgOVpBdHEvtRmW1JqcYU0w.jpg?format=400h_400w_4e_80q.webp",
            name:
              "realme 真我X2 Pro 6GB+64GB 海神 骁龙855Plus 6400万四摄 90Hz流体屏 50WSuperVOOC闪充 屏下指纹 realme X2 Pro手机",
            coupon: "满2699-100",
            price: "￥4523"
          }
        ]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
#coupon {
  padding: 2px 2px;
  white-space: nowrap;
  font-size: 10px;
  color: #cd0031;
  line-height: 12px;
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  margin-top: 0;
  border: 1px solid #cd0031;
}
.recommend {
  .productList_one {
    background-color: #fff;
    border-radius: 5px;
    padding: 5px;

    width: 94%;
    margin: 10px auto;
    .product_title {
      padding: 8px 0;
      font-size: 17px;
      font-weight: bold;
      color: #333;
      text-align: left;
      span {
        font-weight: bold;
      }
    }
    .product_wrap {
      margin-top: 8px;
      display: flex;
      justify-content: space-between;

      a {
        position: relative;
        img {
          width: 110px;
          height: 110px;
          display: block;
        }
        span {
          font-size: 14px;
          line-height: 18px;
          margin-top: 25px;
          color: #999;
          display: block;
        }
      }
    }
  }
  .productList_two {
    background-color: #fff;
    width: 94%;
    margin: 0 auto;
    border-radius: 5px;
    padding: 5px;
    .advertisement {
      position: relative;
      width: 100%;
      height: 169px;
      &::before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 5px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
      }
      &::after {
        content: "";
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 9px solid #fff;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      i {
        display: block;
        position: absolute;
        right: 5px;
        top: 10px;
        width: 50px;
        height: 25px;
        background-color: rgba(0, 0, 0, 0.2);
        line-height: 25px;
        font-size: 14px;
        font-style: normal;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 3px;
      }
      p {
        font-size: 22px;
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 25px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        font-weight: bold;
      }
    }
    .product_wrap {
      margin-top: 8px;
      display: flex;
      justify-content: space-between;

      a {
        position: relative;
        img {
          width: 110px;
          height: 110px;
        }
        p {
          margin-left: 5px;
          width: 105px;
          margin: 3px 0 0 5px;
          margin-top: 3px;
          font-size: 15px;
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        span {
          display: block;
          margin-top: 25px;
          text-align: center;
          line-height: 22px;
          font-size: 14px;
          color: #777;
        }
      }
    }
  }
}
</style>