<template>
  <div class="mobile">
    <div class="productList_one"
         v-for="(item,index) in products"
         :key="index">
      <div class="product_title"><span>{{item.productList.title}}</span></div>
      <div class="product_wrap">
        <a href="###"
           v-for="(item,index) in item.productList.productItem"
           :key="index"><img :src="item.img"
               alt=""><span id="coupon"
                v-if="item.coupon">{{item.coupon}}</span><span class="product_price">{{item.price}}</span></a>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          productList: {
            title: "高清拍照手机，留下你的美妙瞬间",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803982922683524.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "卖光了"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803982929386610.jpg_340w_340h_1e?from=mobile",
                coupon: "满1799减200",
                price: "￥1799"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803982934702676.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥2499"
              }
            ]
          }
        },
        {
          productList: {
            title: "便携式充电宝，让你手机满电复活",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804107724412788.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥125"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804037411266587.jpg_0-0-750-750a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥56"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804038508447867.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "领券10元",
                price: "￥134"
              }
            ]
          }
        },
        {
          productList: {
            title: "游戏机械键盘，让你掌控游戏全局",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157795564514077042.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥129"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157795564519681437.jpg_340w_340h_1e?from=mobile",
                coupon: "领券5元",
                price: "￥449"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157795564525899150.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥139"
              }
            ]
          }
        },
        {
          productList: {
            title: "年轻小诀窍，AI手机拍出逆龄感",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157795908420066951.jpg_340w_340h_1e?from=mobile",
                coupon: "领券100元",
                price: "￥4488"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157795908427836684.jpg_340w_340h_1e?from=mobile",
                coupon: "领券300元",
                price: "卖光了"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157795908433708352.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥1999"
              }
            ]
          }
        },
        {
          productList: {
            title: "身临游戏现场，2k显示屏来展现",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157793243336730209.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157793255769316409.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157793252782229117.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "满2000减100",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "快速驱热，散热垫让游戏本不发烫",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157778493439737036.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥129"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157778507197771727.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥244"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157778508091964731.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥51.9"
              }
            ]
          }
        },
        {
          productList: {
            title: "高清拍照手机，留下你的美妙瞬间",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803982922683524.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "卖光了"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803982929386610.jpg_340w_340h_1e?from=mobile",
                coupon: "满1799减200",
                price: "￥1799"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803982934702676.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥2499"
              }
            ]
          }
        },
        {
          productList: {
            title: "便携式充电宝，让你手机满电复活",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804107724412788.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥125"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804037411266587.jpg_0-0-750-750a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥56"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804038508447867.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "领券10元",
                price: "￥134"
              }
            ]
          }
        },
        {
          productList: {
            title: "游戏机械键盘，让你掌控游戏全局",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157795564514077042.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥129"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157795564519681437.jpg_340w_340h_1e?from=mobile",
                coupon: "领券5元",
                price: "￥449"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157795564525899150.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥139"
              }
            ]
          }
        },
        {
          productList: {
            title: "年轻小诀窍，AI手机拍出逆龄感",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157795908420066951.jpg_340w_340h_1e?from=mobile",
                coupon: "领券100元",
                price: "￥4488"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157795908427836684.jpg_340w_340h_1e?from=mobile",
                coupon: "领券300元",
                price: "卖光了"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157795908433708352.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥1999"
              }
            ]
          }
        },
        {
          productList: {
            title: "身临游戏现场，2k显示屏来展现",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157793243336730209.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157793255769316409.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157793252782229117.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "满2000减100",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "快速驱热，散热垫让游戏本不发烫",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157778493439737036.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥129"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157778507197771727.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥244"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157778508091964731.jpg_0-0-800-800a%7C750w_750h_2e%7C340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥51.9"
              }
            ]
          }
        }
      ]
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
.mobile {
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
}
</style>