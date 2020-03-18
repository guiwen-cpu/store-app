<template>
  <div class="detail">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :info="countsum"
        to="/navbar/cart"
      />

      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addCart(productItem)"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <header class="header_fixed" ref="header">
      <div class="header_goback" @click="goback"><span></span></div>
      <div class="header_title">
        <span ref="title_text"></span>
      </div>
      <div class="header_nav" @click="handleShowNav"><span></span></div>
    </header>
    <div class="nav_more_list" v-if="toggle_showNav">
      <div class="nav_more_list_title">快速导航</div>
      <ul>
        <li>
          <router-link to="/navbar/index" class="home_icon">首页</router-link>
        </li>
        <li>
          <router-link to="/navbar/list" class="list_icon">分类</router-link>
        </li>
        <li>
          <router-link to="/navbar/search/recommend" class="discover_icon"
            >发现</router-link
          >
        </li>
        <li>
          <router-link to="/navbar/cart" class="cart_icon">购物车</router-link>
        </li>
        <li>
          <router-link to="/navbar/mine" class="mine_icon">我的</router-link>
        </li>
      </ul>
      <span class="close_nav" @click="handleShowNav"></span>
    </div>
    <div class="screenMask" v-if="toggle_showNav" @click="handleShowNav"></div>

    <van-swipe @change="onChange" :height="375">
      <van-swipe-item v-for="(item, index) in product_data.banner" :key="index"
        ><img :src="item" alt=""
      /></van-swipe-item>

      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/5</div>
    </van-swipe>
    <div class="product_message">
      <div class="product_price">
        <span class="price_first">￥</span
        ><span class="price_number">{{
          product_data.product_message.price_number
        }}</span
        ><span class="price_last">{{
          product_data.product_message.price_last
        }}</span>
      </div>
      <div class="product_title">
        <h3>{{ product_data.product_message.product_title }}</h3>
        <div class="favourite">
          <img src="../../images/favourite.png" alt="" />
        </div>
      </div>
      <div class="product_sub">
        {{ product_data.product_message.product_sub }}
      </div>
    </div>
    <div class="discount" style="margin:6px 0;">
      <div class="item_cell">
        <span class="discount_des">{{
          product_data.discount.discount_des
        }}</span>
        <div class="cell_right">
          <span class="right_text">
            查看更多
          </span>
        </div>
      </div>
      <div class="item_cell" style="padding:12px 0 6px;">
        <div class="cell_left">促销</div>
        <div class="cell_middle promotion">
          <p
            class="promotion_text"
            v-if="product_data.discount.coupon.lingquan"
          >
            <span class="coupon">实名领券</span
            ><span class="coupon_des">{{
              product_data.discount.coupon.lingquan
            }}</span>
          </p>
          <p class="promotion_text" v-if="product_data.discount.coupon.manjian">
            <span class="coupon">满减</span
            ><span class="coupon_des">{{
              product_data.discount.coupon.manjian
            }}</span>
          </p>
          <p class="promotion_text" v-if="product_data.discount.coupon.yunzuan">
            <span class="coupon">云钻促销</span
            ><span class="coupon_des">{{
              product_data.discount.coupon.yunzuan
            }}</span>
          </p>
          <p
            class="promotion_text"
            v-if="product_data.discount.coupon.xianliang"
          >
            <span class="coupon">限量赠</span
            ><span class="coupon_des">{{
              product_data.discount.coupon.xianliang
            }}</span>
          </p>
        </div>
      </div>
      <div
        class="item_cell"
        style="padding:6px 0 12px;border-top:1px solid #eee;"
      >
        <div class="cell_left">刮券</div>
        <div class="cell_middle">
          <span class="icon_left icon">云钻</span
          ><span class="icon_right icon">刮券</span>
          100%刮中券，最高50元无敌券
        </div>
        <div class="cell_right"><span class="right_text"></span></div>
      </div>
    </div>
    <div class="for_new" v-if="product_data.for_new">
      <img src="../../images/phone_icon.png" alt="" />
      <div class="item_cell">
        <div class="cell_left" style="width:37px;margin-right:0;"></div>
        <div class="cell_middle">
          <span
            ><span style="font-weight:bold;">以旧换新&nbsp;&nbsp;</span
            >闲置回收，购机更优惠</span
          >
        </div>
        <div class="cell_right"></div>
      </div>
    </div>
    <div class="purchase_option">
      <div class="item_cell pb-12">
        <div class="cell_left">已选</div>
        <div class="cell_middle">
          <div class="cluster">
            {{ product_data.cluster }} <span>可选增值服务</span>
          </div>
        </div>
        <div class="cell_right"></div>
      </div>
      <div class="item_cell ptb-12">
        <div class="cell_left">送至</div>
        <div class="cell_middle">
          <div class="address_icon_wrap">
            <span class="address1">广东</span>&nbsp;
            <span class="address2">广州</span>&nbsp;
            <span class="address3">天河</span>&nbsp;
            <span class="address4">全区</span>
          </div>
        </div>
        <div class="cell_right"></div>
      </div>
      <div class="item_cell ptb-12">
        <div class="cell_left">付款</div>
        <div class="cell_middle">
          支持&nbsp;&nbsp;易付宝&nbsp;&nbsp;支付宝&nbsp;&nbsp;
        </div>
      </div>
      <div class="item_cell pt-12">
        <div class="cell_left">服务</div>
        <div class="cell_middle">
          <span class="service_span">店铺发货&售后</span
          ><span class="service_span">7天无理由退货</span>
        </div>
        <div class="cell_right"></div>
      </div>
    </div>
    <div class="evaluation item_cell">
      <div class="evaluation_left">{{ product_data.evaluation }}</div>
      <div class="cell_right"><span class="right_text">查看更多</span></div>
    </div>
    <div class="question item_cell">
      <div class="question_left">问问已购用户</div>
      <div class="question_middle">商品好不好？问问买过的人</div>
      <div class="cell_right"><span class="right_text">去提问</span></div>
    </div>
    <section class="shop" v-if="product_data.shop">
      <div class="shop_detail">
        <div class="shop_main">
          <div class="shop_logo">
            <img :src="product_data.shop.logo" alt="" />
          </div>

          <div class="shop_name">
            <div class="name_top">{{ product_data.shop.name }}</div>
            <div class="name_bottom">
              服务体验<span class="star_bg"
                ><span
                  class="star_prograss"
                  :style="product_data.shop.prograss"
                ></span
              ></span>
            </div>
          </div>
          <div class="go_shop">进店逛逛</div>
        </div>
        <div class="shop_info">
          <span
            >评价<span style="color: rgb(20, 173, 15); margin-left:5px;">{{
              product_data.shop.shop_info[0]
            }}</span></span
          >
          <span
            >物流<span style="color:red;margin-left:5px;">{{
              product_data.shop.shop_info[1]
            }}</span></span
          >
          <span
            >售后<span style="color: rgb(20, 173, 15);margin-left:5px;">{{
              product_data.shop.shop_info[2]
            }}</span></span
          >
        </div>
      </div>
    </section>
    <div class="detail_title">
      图文详情
    </div>
    <div class="content_detail">
      <p v-for="(item, index) in product_data.content_detail" :key="index">
        <img :src="item" alt="" />
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { Toast } from 'vant';
export default {
  data() {
    return {
      productItem: null,
      toggle_showNav: false,
      header_title: '',
      product_data: {
        banner: [],
        product_message: {
          price_number: '',
          price_last: '',
          product_title: '',
          product_sub: ''
        },
        discount: {
          discount_des: '',
          coupon: {
            lingquan: '',
            manjian: ''
          }
        },
        for_new: false,
        cluster: '',
        evaluation: '',
        shop: {
          logo: '',
          name: '',
          prograss: '',
          shop_info: []
        },
        content_detail: []
      },
      current: 0
    };
  },
  computed: {
    ...mapGetters(['countsum'])
  },
  created() {
    this.getProductData();
  },
  mounted() {
    this.scroll();
  },
  methods: {
    addCart(proItem) {
      this.$store.commit('tocart', proItem);
      Toast({
        message: '成功加入购物车',
        duration: 800
      });
    },
    goback() {
      this.$router.go(-1);
    },
    handleShowNav() {
      this.toggle_showNav = !this.toggle_showNav;
    },
    onChange(index) {
      this.current = index;
    },
    scroll() {
      const oHeader = this.$refs.header;
      const otitle_text = this.$refs.title_text;
      window.onscroll = function() {
        //滚动条滚动事件

        //获取滚动条的滚动高度
        const osTop =
          document.documentElement.scrollTop || document.body.scrollTop;

        if (osTop >= 300) {
          //如果滚动高度大于可视区域高度，则显示回到顶部按钮
          oHeader.style.background = '#fff';
          oHeader.classList = 'header_fixed banner_fixed';
          otitle_text.innerHTML = '商品详情';
        } else {
          //否则隐藏
          oHeader.style.background = 'transparent';
          oHeader.classList = 'header_fixed';
          otitle_text.innerHTML = '';
        }

        //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
      };
    },
    async getProductData() {
      try {
        const productId = this.$route.params.productId;
        const productItem = this.$route.params.productItem;
        this.productItem = productItem;

        const productData = await this.$http.get('/api/detail', {
          params: { productId: productId }
        });
        this.product_data = productData.product_data;
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.van-goods-action {
  z-index: 99;
}
.ptb-12 {
  padding: 12px 0;
}
.pt-12 {
  padding-top: 12px;
}
.pb-12 {
  padding-bottom: 12px;
}
.p-12 {
  padding: 12px;
}

.van-swipe-item {
  img {
    width: 100%;
    height: 100%;
  }
}
.custom-indicator {
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 18px;
  color: #fff;
}
.detail {
  background-color: #f2f2f2;
}
.screenMask {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0.9;
  z-index: 112;
}
.nav_more_list {
  position: fixed;
  top: 61px;
  left: 0;
  margin: 0 12px;
  background: #fff;
  border-radius: 6px;
  padding: 15px;
  z-index: 113;

  &::after {
    content: '';
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    top: -10px;
    right: 10px;
  }
  .close_nav {
    display: block;
    width: 32px;
    height: 32px;
    background-image: url('../../images/close-nav2.png');
    background-size: contain;
    position: absolute;
    right: 2px;
    top: -54px;
  }

  .nav_more_list_title {
    font-size: 15px;
    color: #333;
    font-weight: bold;
    text-align: left;
    padding-bottom: 12px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 70px;
      height: 70px;
      background: #f7f7f7;
      border-radius: 5px;
      margin-bottom: 8px;
      a {
        display: block;
        width: 100%;
        color: #333;
        text-align: center;
        font-size: 14px;
        padding-top: 32px;
        line-height: 35px;
        background-size: 24px 24px;
        background-position: center 12px;
        background-repeat: no-repeat;
      }
      .home_icon {
        background-image: url('../../images/nav-index.png');
      }
      .list_icon {
        background-image: url('../../images/nav-cate.png');
      }
      .discover_icon {
        background-image: url('../../images/nav-search.png');
      }
      .cart_icon {
        background-image: url('../../images/nav_cart.png');
      }
      .mine_icon {
        background-image: url('../../images/nav-my.png');
      }
    }
  }
}
.header_fixed {
  z-index: 99;
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  transition: all 0.5s ease;
  .header_goback {
    display: flex;
    height: 100%;
    width: 60px;
    justify-content: center;
    align-items: center;
    span {
      display: block;

      width: 32px;
      height: 32px;
      background: url('https://res.suning.cn/project/pdnode/assets/images/head/nav-back3.png?v=1579370413176')
        no-repeat;
      background-size: contain;
    }
  }
  .header_title {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 16px;
      font-weight: bold;
      color: #333;
      letter-spacing: 3px;
    }
  }
  .header_nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    span {
      display: block;
      width: 32px;
      height: 32px;
      background: url('https://res.suning.cn/project/pdnode/assets/images/head/nav-more3.png?v=1579370413176');
      background-size: contain;
    }
  }
}
.banner_fixed {
  .header_goback {
    span {
      background: url('../../images/header_goback.png') !important;
      background-size: contain !important;
    }
  }
  .header_nav {
    span {
      background: url('../../images/header_nav.png') !important;
      background-size: contain !important;
    }
  }
}

.detail_title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
  line-height: 42px;
  background: #fff;
  margin: 6px 0 0;
}
.product_message {
  padding: 10px;
  padding-bottom: 5px;
  background-color: #fff;
  .product_price {
    padding: 0px 0 12px;
    text-align: left;
    line-height: 18px;
    .price_first {
      font-size: 14px;
      font-weight: bold;
      color: #f42;
    }
    .price_number {
      font-size: 22px;
      font-weight: bold;
      color: #f42;
    }
    .price_last {
      font-size: 14px;
      font-weight: bold;
      color: #f42;
    }
  }
  .product_title {
    display: flex;
    padding-bottom: 10px;
    align-items: center;
    h3 {
      flex: 1px;
      font-weight: bold;
      text-align: left;
      color: #333;
      font-size: 16px;
      line-height: 18px;
    }
    .favourite {
      img {
        width: 35px;
        height: 35px;
      }
    }
  }
  .product_sub {
    font-size: 14px;
    color: #999;
    text-align: left;
  }
}
.discount {
  background-color: #fff;
  padding: 10px;
  padding-bottom: 0;
}
.item_cell {
  display: flex;
  .discount_des {
    font-size: 12px;
    color: #999;
    flex: 1;
    text-align: left;
    // line-height: 14px;
  }
  .cell_left {
    font-size: 14px;
    color: #999;
    margin-right: 10px;
    line-height: 16px;
    align-items: center;
    display: flex;
  }
  .promotion {
    display: flex;
    flex-direction: column;
    .promotion_text {
      font-size: 14px;
      text-align: left;
      // margin-bottom: 5px;
      line-height: 20px;
      .coupon {
        background: #fefbee;
        border: 1px solid #fb0;
        padding: 0px 3px;
        margin-right: 3px;
        font-size: 12px;
        line-height: 12px;
        color: #666;
      }
      .coupon_des {
        color: #333;
      }
    }
  }
  .cell_middle {
    display: flex;
    font-size: 14px;
    line-height: 16px;
    flex: 1;
    span {
      font-size: 14px;
      color: #999;
      line-height: 16px;
    }
    .icon_left {
      background-color: #fc0;
      border-left: 1px solid #fc0;
      position: relative;
      &::after {
        content: '';
        width: 4px;
        height: 4px;
        border-right: 1px solid #fc0;
        border-radius: 50%;
        position: absolute;
        background-color: #fff;
        left: -3px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .icon_right {
      background-color: #fefbee;
      border-right: 1px solid #fc0;
      position: relative;
      &::after {
        content: '';

        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
        right: -3px;
        position: absolute;
        border-left: 1px solid #fc0;
        border-radius: 50%;

        width: 4px;
        height: 4px;
      }
    }
    .icon {
      border-top: 1px solid #fc0;
      border-bottom: 1px solid #fc0;
      font-size: 12px;
      padding: 0 3px;
      line-height: 14px;
    }
  }
  .cell_right {
    position: relative;
    line-height: 0px;
    margin-right: 10px;
    .right_text {
      font-size: 13px;
      line-height: 14px;
      color: #999;
      padding-right: 3px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-top: 1px solid #999;
      border-right: 1px solid #999;
      transform: rotate(45deg);
      top: 2px;

      right: -6px;
    }
  }
}
.purchase_option {
  padding: 12px;
  background-color: #fff;
  margin-bottom: 6px;
  .item_cell {
    .cell_middle {
      .cluster {
        font-size: 14px;
        font-weight: bold;
        color: #333;
        line-height: 16px;
        span {
          color: #333;
          font-weight: bold;
        }
      }
      .address_icon_wrap {
        padding-left: 16px;
        line-height: 17px;
        background: url('../../images/address-icon.png') no-repeat;
        background-size: 10px 13px;
        background-position: 1px 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        span {
          color: #666;
          line-height: 17px;
        }
      }
      .service_span {
        color: #333;
        padding-right: 15px;
        &::before {
          vertical-align: middle;
          width: 16px;
          display: inline-block;
          padding-right: 5px;
          height: 16px;
          content: '';
          background: url('../../images/service-icon.png') no-repeat;
          background-size: contain;
        }
      }
    }
  }
}
.evaluation {
  display: flex;
  padding: 12px;
  justify-content: space-between;
  background-color: #fff;
  margin-bottom: 6px;
  .evaluation_left {
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }
}
.question {
  padding: 12px;
  background-color: #fff;
  margin-bottom: 6px;
  .question_left {
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }
  .question_middle {
    flex: 1;
    margin-left: 6px;
    font-size: 14px;
    color: #999;
    text-align: left;
  }
}
.shop_detail {
  background-color: #fff;
  .shop_main {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .shop_logo {
      margin-right: 10px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 6px;
      }
    }
    .shop_name {
      flex: 1;
      .name_top {
        font-size: 14px;
        color: #333;
        font-weight: bold;
        text-align: left;
        margin-bottom: 6px;
      }
      .name_bottom {
        font-size: 12px;
        line-height: 12px;
        color: #999;
        display: flex;
        .star_bg {
          display: inline-block;
          margin-left: 5px;
          width: 50px;
          height: 9px;
          background: url('../../images/star_ba.png');
          background-size: 50px 9px;
          text-align: left;
        }
        .star_prograss {
          display: inline-block;
          height: 100%;

          background: url('../../images/star_prograss.png');
          background-size: 50px 9px;
        }
      }
    }
    .go_shop {
      font-size: 14px;

      color: #333;
      background-color: #fb0;
      border-radius: 5px;
      line-height: 27px;
      padding: 0 8px;
    }
  }
  .shop_info {
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    padding-bottom: 12px;
    span {
      color: #999;
    }
  }
}
.content_detail {
  background-color: #fff;
  p {
    img {
      width: 100%;
      display: block;
    }
  }
}
.for_new {
  position: relative;
  background: #fff;
  padding: 12px;

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    width: 20px;
    height: 20px;
  }
  .item_cell {
    .cell_middle {
      span {
        color: #9d5cb9;
      }
    }
    .cell_right {
      &::after {
        border-top: 1px solid #9d5cb9;
        border-right: 1px solid #9d5cb9;
      }
    }
  }
}
</style>
