<template>
  <div class="home_cart">
    <Header :title="title">
      <div class="delete"
           :style="isDelete?'color:red':'color:grey'"
           @click="deleteItem"
           slot="btn">删除</div>
    </Header>
    <div class="empty"
         v-show="countsum==0">
      <img src="../../images/empty.png"
           alt="">
    </div>
    <div class="goods"
         v-for="(item,index) in cartarr"
         :key="index">
      <div class="goods_left">
        <label for="select"
               :class="{select:item.active}">
          <input type="checkbox"
                 id="select"
                 @change="selectItem(index)" />
        </label>
      </div>
      <div class="goods_right">
        <div class="goods_message">
          <div class="imgWrapper">
            <img :src="item.img"
                 alt />
          </div>
          <div class="info">
            <div class="info_top">
              <p class="goods_name">{{item.title}}</p>
            </div>
            <div class="info_bottom">
              <div class="price">
                <span v-for="(priItem,index) in item.price"
                      :key="index"
                      :class="priItem.className==='pro_comments'?'none':priItem.className">{{priItem.number}}</span>
              </div>

              <div class="goods_num">
                <button @click="removeCart(index)"
                        :class="item.cartCount==1?'gray_decrease':'black_decrease'"></button>

                <input type="number"
                       v-model="item.cartCount" />
                <button @click="addCart(index)"
                        class="increase"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <van-submit-bar :price="totalPrice"
                    button-text="提交订单"
                    :disabled="isDisabled"
                    @submit="onSubmit">
      <van-checkbox v-model="checkedAll">全选</van-checkbox>

    </van-submit-bar>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Header from "../../components/Header";
export default {
  data() {
    return {
      title: "购物车"
      // ...mapState({
      //   checkedAll:state=>state.checkedAll
      // })
    };
  },
  components: {
    Header
  },
  updated() {},
  created() {
    this.isSelectAll();
  },
  computed: {
    checkedAll: {
      get() {
        return this.$store.state.checkedAll;
      },
      set(newstate) {
        this.handleCheckAll(newstate);
      }
    },
    ...mapState({
      cartarr: state => state.cartarry,
      isDelete: state => state.isDelete
    }),
    ...mapGetters(["totalPrice", "countsum", "selectAll", "isDisabled"])
    // ...mapState(["cartarr"])
  },
  methods: {
    selectItem(index) {
      this.$store.commit("selectItem", index);
      this.$store.commit("checkCartList");
    },
    isSelectAll() {
      this.$store.commit("isSelectAll");
    },
    removeCart(index) {
      this.$store.commit("remove", index);
    },
    addCart(index) {
      this.$store.commit("add", index);
    },
    onSubmit() {
      this.$store.commit("submitOrder");
    },
    deleteItem() {
      this.$store.commit("deleteSelected");
    },
    handleCheckAll(newState) {
      this.$store.commit("handleCheckAll", newState);
    }
  }

  // watch: {
  //   checkedAll:
  // },
};
</script>
<style lang="scss" scoped>
.home_cart {
  margin-bottom: 60px;
  background: #f3f3f3;
  min-height: 750px;

  .empty {
    position: fixed;
    top: 100px;
    left: 40px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .van-submit-bar {
    bottom: 50px;
  }

  .goods {
    padding: 10px 5px;
    background-color: #fff;
    width: 94%;
    margin: 5px auto;
    border-radius: 5px;
    display: flex;
    .goods_left {
      height: 85px;
      width: 10%;
      position: relative;
      display: block;
      .select {
        background-image: url("https://oss.suning.com/vss/activity/wximg/cart/selected-icon.png");
        background-size: contain;
      }
      label {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: white;
        border-radius: 50px;
        width: 20px;
        height: 20px;
        display: inline-block;
        border: 1px solid #eee;
        line-height: 110px;
        position: absolute;

        input {
          line-height: 110px;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          text-align: center;
          width: 100%;
          height: 100%;
        }
      }
    }
    .goods_right {
      width: 90%;
      .goods_message {
        display: flex;
        .imgWrapper {
          img {
            width: 90px;
            height: 90px;
          }
        }
        .info {
          .info_top {
            height: 30px;
            p {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              font-size: 14px;
              line-height: 15px;
              overflow: hidden;
              width: 209px;
              height: 30px;
              -webkit-box-orient: vertical;
              // text-overflow: ellipsis;

              font-weight: bold;
            }
          }
          .info_bottom {
            display: flex;
            height: 30px;
            align-items: flex-end;
            justify-content: space-between;
            margin-top: 25px;
            .price {
              display: flex;
              align-items: flex-end;
              margin-bottom: 5px;
              .none {
                display: none;
              }
              .pro_flag {
                font-size: 14px;
                color: #f42;
                line-height: 18px;
              }
              .pro_price_number {
                font-size: 18px;
                font-weight: bold;
                color: #f42;
              }
              .pro_price_lastNumber {
                font-size: 14px;
                line-height: 18px;
                color: #f42;
              }
            }
            .goods_num {
              padding: 3px;
              width: 90px;
              height: 28px;
              box-sizing: border-box;
              border-radius: 14px;
              border: 1px solid #eee;
              display: flex;
              button {
                border: none;
              }

              .gray_decrease {
                width: 21px;
                height: 21px;
                background-image: url("https://oss.suning.com/vss/activity/wximg/cart/counter-reduce.png");
                background-size: cover;
                border-radius: 50%;
              }
              .black_decrease {
                width: 21px;
                height: 21px;
                background-image: url("https://oss.suning.com/vss/activity/wximg/cart/black-reduce.png");
                background-size: cover;
                border-radius: 50%;
              }
              .increase {
                width: 21px;
                height: 21px;
                background-image: url("https://oss.suning.com/vss/activity/wximg/cart/black-add.png");
                border-radius: 50%;
                background-size: cover;
              }
              input {
                font-size: 14px;
                color: #222;
                text-align: center;
                width: 42px;
              }
            }
          }
        }
      }
    }
  }
}
</style>