<template>
  <div class="home_discount">
    <div class="discount_contentwrapper">
      <div class="discount_content"
           v-for="(item,index) in discount"
           :key="index">
        <div class="content_title_wrap">
          <div class="title_text">
            {{item.title}}
          </div>
          <div v-if="item.count"
               class="count">
            <van-count-down :time="time"
                            class="countStyle"
                            format="HH mm ss">
              <template v-slot="timeData">
                <span class="item">{{ timeData.hours }}</span>:
                <span class="item">{{ timeData.minutes }}</span>:
                <span class="item">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>

        </div>
        <p class="desc">{{item.desc}}</p>
        <div class="discount_item">
          <a v-for="(item,index) in item.content"
             :key="index">
            <img :src="item.img"
                 alt />
            <p v-if="item.price"
               class="price"><span>￥</span>

              <span>{{item.price}}</span></p>
            <p class="product_name"
               v-else>{{item.text}}

            </p>
          </a>
        </div>
      </div>

    </div>
  </div>

</template>
<script>
export default {
  props: ["discount"],
  data() {
    return {
      // 倒计时时间设置
      time: 30 * 60 * 1000 * 4
    };
  }
};
</script>
<style lang="scss" scoped>
.home_discount {
  background: rgb(218, 57, 57);

  padding: 8px 0;
  .discount_contentwrapper {
    border-radius: 5px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    width: 94%;
    margin: 0 auto;

    .discount_content {
      &:nth-child(1) {
        border-right: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
      }
      &:nth-child(2) {
        border-bottom: 1px solid #f2f2f2;
      }

      &:nth-child(3) {
        border-right: 1px solid #f2f2f2;
      }
      width: 50%;
      height: 130px;
      box-sizing: border-box;
      .content_title_wrap {
        display: flex;
        padding-left: 10px;
        justify-content: flex-start;
        align-items: flex-end;
        height: 29px;

        .title_text {
          font-size: 17px;
          font-weight: bold;
          letter-spacing: 1px;
          line-height: 19px;
          height: 19px;
          margin-right: 5px;
        }
        .count {
          .van-count-down {
            font-weight: bold;

            .item {
              display: inline-block;
              width: 20px;
              margin-right: 3px;
              color: #333;
              font-size: 14px;
              height: 18px;
              line-height: 18px;
              text-align: center;
              background-color: orange;
              border-radius: 3px;
              font-weight: bold;
            }
          }
        }
      }
      .desc {
        margin: 2px 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        line-height: 16px;
        color: #999;
        text-align: left;
      }
      .discount_item {
        width: 100%;
        height: 80px;
        box-sizing: border-box;

        a {
          position: relative;
          display: inline-block;
          width: 50%;
          height: 100%;
          text-align: center;
          img {
            display: inline-block;
            width: 60px;
            height: 60px;
          }
          .price {
            color: #f50;
            font-size: 14px;
            line-height: 15px;
            font-weight: bold;
          }
          .product_name {
            position: absolute;

            width: 100%;
            left: 0;
            bottom: 0px;
            font-size: 14px;
            line-height: 20px;

            color: #333;
            height: 18px;
            padding-top: 10px;
            background: url(data:image/png;base64,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);
            background-size: cover;
          }
        }
      }
    }
  }
}
</style>