<template>
  <div class="appliance">
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
            title: "精准控温，变频冰箱静音锁鲜",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803964542062747.jpg_340w_340h_1e?from=mobile",
                coupon: "领券100元",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803965601449641.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803966348263193.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "极致节能冷柜，帮你省电更省心",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803998013054312.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803998023094338.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803998029128527.jpg_340w_340h_1e?from=mobile",
                coupon: "领券200元",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "变频壁挂式空调，节能更省电",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804153155504122.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804153161541521.jpg_340w_340h_1e?from=mobile",
                coupon: "领券100元",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804153166475868.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "变频消毒洗衣机，省电又省心",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804128619492163.jpg_340w_340h_1e?from=mobile",
                coupon: "领券100元",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804115054730245.jpg_340w_340h_1e?from=mobile",
                coupon: "领券300元",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804128627712365.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "蒸烤箱来袭，满足你味蕾的需求",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804071121015645.jpg_340w_340h_1e?from=mobile",
                coupon: "领券100元",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804071127025014.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804071133886698.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "舒适温暖，智能电暖气静心守护",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803357839393555.jpg_340w_340h_1e?from=mobile",
                coupon: "领券100元",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803357849722139.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803357855865684.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "精准控温，变频冰箱静音锁鲜",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803964542062747.jpg_340w_340h_1e?from=mobile",
                coupon: "领券100元",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803965601449641.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803966348263193.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "极致节能冷柜，帮你省电更省心",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803998013054312.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803998023094338.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803998029128527.jpg_340w_340h_1e?from=mobile",
                coupon: "领券200元",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "变频壁挂式空调，节能更省电",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804153155504122.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804153161541521.jpg_340w_340h_1e?from=mobile",
                coupon: "领券100元",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804153166475868.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "变频消毒洗衣机，省电又省心",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804128619492163.jpg_340w_340h_1e?from=mobile",
                coupon: "领券100元",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804115054730245.jpg_340w_340h_1e?from=mobile",
                coupon: "领券300元",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804128627712365.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "蒸烤箱来袭，满足你味蕾的需求",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804071121015645.jpg_340w_340h_1e?from=mobile",
                coupon: "领券100元",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804071127025014.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804071133886698.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥2654"
              }
            ]
          }
        },
        {
          productList: {
            title: "舒适温暖，智能电暖气静心守护",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803357839393555.jpg_340w_340h_1e?from=mobile",
                coupon: "领券100元",
                price: "￥4526"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803357849722139.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥3621"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803357855865684.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥2654"
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
.appliance {
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