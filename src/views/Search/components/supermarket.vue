<template>
  <div class="supermarket">
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
            title: "鲜香有嚼劲，吮指肉干越吃越对味",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803664513311434.jpg_340w_340h_1e?from=mobile",
                coupon: "满188-100",
                price: "￥30.9"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803664520122481.jpg_340w_340h_1e?from=mobile",
                coupon: "满188-100",
                price: "￥34.9"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803664533384346.jpg_340w_340h_1e?from=mobile",
                coupon: "领券5元",
                price: "￥20.9"
              }
            ]
          }
        },
        {
          productList: {
            title: "红枣是个宝，解馋补血抗衰老",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804107724412788.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "卖光了"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804003647606407.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥19.9"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804004939783664.jpg_340w_340h_1e?from=mobile",
                coupon: "领券5元",
                price: "￥29.9"
              }
            ]
          }
        },
        {
          productList: {
            title: "去污不伤手，温和洗洁精护手有方",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803285759840379.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥11.9"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803285766049586.jpg_340w_340h_1e?from=mobile",
                coupon: "领券2元",
                price: "￥10.3"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803285773104371.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥13.9"
              }
            ]
          }
        },
        {
          productList: {
            title: "走亲访友，年货零食礼盒聊表心意",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157793475668849895.jpg_340w_340h_1e?from=mobile",
                coupon: "满98减30",
                price: "￥98"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157793475677485488.jpg_340w_340h_1e?from=mobile",
                coupon: "满69打6折",
                price: "￥79.9"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157793458997487644.jpg_340w_340h_1e?from=mobile",
                coupon: "满108减40",
                price: "￥108"
              }
            ]
          }
        },
        {
          productList: {
            title: "鲜香有嚼劲，吮指肉干越吃越对味",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803664513311434.jpg_340w_340h_1e?from=mobile",
                coupon: "满188-100",
                price: "￥30.9"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803664520122481.jpg_340w_340h_1e?from=mobile",
                coupon: "满188-100",
                price: "￥34.9"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803664533384346.jpg_340w_340h_1e?from=mobile",
                coupon: "领券5元",
                price: "￥20.9"
              }
            ]
          }
        },
        {
          productList: {
            title: "红枣是个宝，解馋补血抗衰老",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804107724412788.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "卖光了"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804003647606407.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥19.9"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157804004939783664.jpg_340w_340h_1e?from=mobile",
                coupon: "领券5元",
                price: "￥29.9"
              }
            ]
          }
        },
        {
          productList: {
            title: "去污不伤手，温和洗洁精护手有方",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803285759840379.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥11.9"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803285766049586.jpg_340w_340h_1e?from=mobile",
                coupon: "领券2元",
                price: "￥10.3"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157803285773104371.jpg_340w_340h_1e?from=mobile",
                coupon: "",
                price: "￥13.9"
              }
            ]
          }
        },
        {
          productList: {
            title: "走亲访友，年货零食礼盒聊表心意",
            productItem: [
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157793475668849895.jpg_340w_340h_1e?from=mobile",
                coupon: "满98减30",
                price: "￥98"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157793475677485488.jpg_340w_340h_1e?from=mobile",
                coupon: "满69打6折",
                price: "￥79.9"
              },
              {
                img:
                  "https://image.suning.cn/uimg/MZMS/show/157793458997487644.jpg_340w_340h_1e?from=mobile",
                coupon: "满108减40",
                price: "￥108"
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
.supermarket {
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