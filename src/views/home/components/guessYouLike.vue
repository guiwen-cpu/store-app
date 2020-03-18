<template>
  <div class="home_guessYouLike">
    <div class="guessYouLike_title">
      <a href="###"><img :src="titleImg"
             alt=""></a>
    </div>
    <div class="product_list_wrapper">
      <div class="pro_list">
        <ul :class="list.className"
            v-for="list in productList"
            :key="list.className">
          <li v-for="(proItem,index) in list.products"
              :key="index">
            <router-link :to="{name:'detail',params:{productId:proItem.id,productItem:proItem}}">
              <img class="pro_img"
                   :src="proItem.img"
                   alt="">
              <p class="pro_title">{{proItem.title}}</p>
              <p class="pro_coupon">
                <span v-for="(couItem,index) in proItem.coupons"
                      :class="couItem==='自营'?'classA':'classB'"
                      :key="index">{{couItem}}</span>
              </p>
              <p class="pro_price">
                <span v-for="(priItem,index) in proItem.price"
                      :key="index"
                      :class="priItem.className">{{priItem.number}}</span>
              </p>
            </router-link>
            <span class="cart"
                  @click="getEvent($event,proItem)">

            </span>
          </li>
        </ul>

      </div>
    </div>
    <div class="ball-wrap">
      <transition @before-enter="beforeEnter"
                  @enter="enter"
                  @afterEnter="afterEnter">
        <div class="ball"
             v-if="ball.show">
          <div class="inner">
            <!-- <i class="cubeic-add"></i> -->
            <img :src="ball.img"
                 alt="">
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  props: ["productList"],
  data() {
    return {
      ball: {
        show: false,
        el: "",
        img: ""
      },
      titleImg:
        "https://image1.suning.cn/uimg/cms/img/154518371251022769.png?format=_is_1242w_100h.webp"
    };
  },
  methods: {
    getEvent(e, proItem) {
      this.addCart(proItem);
      //让我们小球显示出来
      this.ball.show = true;
      //获取点击元素
      this.ball.el = e.target;
      this.ball.img = proItem.img;
      // e.stopPropagation();
    },
    addCart(proItem) {
      setTimeout(() => {
        this.$store.commit("tocart", proItem);
        Toast({
          message: "成功加入购物车",
          duration: 800
        });
      }, 1050);
    },
    beforeEnter(el) {
      //让小球移动到点击的位置
      //获取点击位置
      const dom = this.ball.el;

      const rect = dom.getBoundingClientRect(); //获取点击的dom的位置

      const x = rect.left - window.innerWidth * 0.7 - 80;
      const y = -(window.innerHeight - rect.top) - 110;

      el.style.display = "block";
      el.style.transform = `translate3d(0,${y}px,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(${x}px,0,0)`;
    },
    enter(el) {
      //触发重绘
      document.body.offsetHeight;
      //小球移动回到原点，就是购物车的位置
      el.style.transform = `translate3d(0,0,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(0,0,0)`;
    },
    afterEnter(el) {
      //结束隐藏小球
      this.ball.show = false;
      el.style.display = "none";
      //过渡完成后执行的事件
      el.addEventListener("transitionend", () => {
        this.listenInCart();
      });
    },
    listenInCart() {
      // 拿到购物车的DOM添加class
      document.getElementById("buycar").classList.add("moveToCart");
      setTimeout(() => {
        // 500毫秒后移除class
        document.getElementById("buycar").classList.remove("moveToCart");
      }, 500);
    }
  }
};
</script>
<style lang="scss" scoped>
.home_guessYouLike {
  background-color: #fff;
  .ball-wrap {
    .ball {
      position: fixed;
      left: 53%;
      bottom: -50px;
      z-index: 1003;
      color: red;
      transition: all 1s cubic-bezier(0.8, 0, 0.6, 0.5);

      .inner {
        width: 170px;
        height: 170px;
        transition: all 1s linear;
        img {
          width: 100%;
          height: 100%;
          animation: 1s mymove ease-in-out;
          border-radius: 50%;
        }
      }
    }
    @keyframes mymove {
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(0.8);
      }
      50% {
        transform: scale(0.6);
      }
      75% {
        transform: scale(0.3);
      }
      100% {
        transform: scale(0.1);
      }
    }
  }
  .guessYouLike_title {
    width: 94%;
    margin: 0 auto;
    height: 30px;
    a {
      img {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }
  .product_list_wrapper {
    .pro_list {
      display: flex;
      width: 94%;
      margin: 0 auto;
      justify-content: space-between;
      .product_list_left {
        width: 171px;
        li {
          position: relative;

          box-sizing: border-box;
          width: 100%;
          overflow: hidden;
          border-radius: 5px;
          margin-bottom: 9px;
          background-color: #fff;
          padding-bottom: 7px;
          .cart {
            display: block;
            height: 25px;
            width: 25px;
            position: absolute;
            bottom: 5px;
            right: 3px;
            background-image: url(../../../images/cart1.png);
            background-size: contain;

            &:after {
              content: "+";
              position: absolute;
              text-align: center;
              line-height: 10px;
              font-size: 10px;
              color: #fff;
              background: #f42;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              top: 0;
              right: 0;
            }
          }
          a {
            .pro_img {
              height: 171;
              width: 100%;
            }
            .pro_title {
              margin: 5px auto 0;
              width: 159px;
              height: 30px;
              font-size: 13px;
              color: #333;
              line-height: 15px;
              font-weight: bold;
              overflow: hidden;
              text-overflow: ellipsis;
              text-align: left;
              white-space: normal;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .pro_coupon {
              display: flex;
              width: 100%;
              margin: 6px;
              box-sizing: border-box;
              overflow: hidden;
              flex-wrap: wrap;
              height: 30px;
              align-items: center;
              .classA {
                line-height: 14px;
                height: 14px;
                border-radius: 3px;
                background-color: orange;
                color: #333;
                font-size: 12px;
                padding: 1px 2px;
                margin-right: 3px;
              }
              .classB {
                line-height: 14px;
                height: 14px;
                font-size: 12px;
                padding: 1px 2px;
                border-radius: 3px;
                background-color: #fefbee;
                border: 1px solid orange;
                margin-right: 3px;
              }
            }
            .pro_price {
              height: 19px;
              width: 100%;
              box-sizing: border-box;
              margin-left: 6px;
              display: flex;
              align-items: flex-end;
              .pro_flag {
                font-size: 14px;
                color: #f42;
                line-height: 17px;
              }
              .pro_price_number {
                font-size: 18px;
                font-weight: bold;
                color: #f42;
              }
              .pro_price_lastNumber {
                font-size: 14px;
                line-height: 17px;
                color: #f42;
              }
              .pro_comments {
                color: #999;
                margin-left: 6px;
                margin-bottom: 2px;
                font-size: 12px;
              }
            }
          }
        }
      }
      .product_list_right {
        @extend .product_list_left;
      }
    }
  }
}
</style>