<template>
  <div class="mine">
    <div class="header">
      <div class="header_title"><span>个人中心</span>
        <router-link to="/setting"
                     class="title_setting"></router-link>
      </div>
      <div class="header_user_info">
        <div class="info_logo">
          <router-link to="/setting"
                       class="logo_link"><img src="https://image.suning.cn/uimg/cmf/cust_headpic/2310bead65c4bd0232370ab4270e5bc5_00_240x240.jpg?v=10175033"
                 alt=""></router-link>
        </div>
        <div class="info_message">
          <div class="user_name">我的名字</div>
          <div class="user_content">生态值265</div>
        </div>
        <div class="info_code"><a href="###"></a></div>
      </div>
      <div class="header_list">
        <a href="#"><b>2</b><span>优惠券</span></a>
        <a href="#"><b>4</b><span>领云钻</span></a>
        <a href="#"><b>44</b><span>足迹</span></a>
        <a href="#"><b>2</b><span>我的关注</span></a>

      </div>
      <div class="header_member">
        <div class="vip_img"><img src="https://oss.suning.com/vss/activity/wximg/my/vip.png"
               alt=""></div>
        <div class="vip_text"><span>【免费】你可另一张优惠券</span></div>
        <div class="vip_go">
          <p>立即领取</p>
          <i></i>
        </div>
      </div>

    </div>
    <div class="myOrder">
      <div class="myOrder_title">
        <span>我的订单</span>
        <a href="###">
          查看全部&nbsp;
          <i></i>
        </a>
      </div>
      <div class="myOrder_list">
        <a href="#"><img src="https://res.suning.cn/project/msinode/wap/home/image/order-icon01.png"
               alt=""><span>待支付</span></a>
        <a href="#"><img src="https://res.suning.cn/project/msinode/wap/home/image/order-icon02.png"
               alt=""><span>待收货</span></a>
        <a href="#"><img src="https://res.suning.cn/project/msinode/wap/home/image/order-icon03.png"
               alt=""><span>评价有礼</span></a>
        <a href="#"><img src="https://res.suning.cn/project/msinode/wap/home/image/order-icon04.png"
               alt=""><span>退换/售后</span></a>
        <a href="#"><img src="https://res.suning.cn/project/msinode/wap/home/image/order-icon05.png"
               alt=""><span>常购清单</span></a>
      </div>

    </div>
    <div class="myTools">
      <div class="myTools_title">必备工具</div>
      <div class="tools_list">
        <a href="###"><img src="https://image.suning.cn/uimg/cms/img/157250874743127029.png"
               alt=""><span>红包</span></a>
        <a href="###"><img src="https://image.suning.cn/uimg/cms/img/157250876042530564.png"
               alt=""><span>店铺关注</span></a>
        <a href="###"><img src="https://image.suning.cn/uimg/cms/img/157250878626080332.png"
               alt=""><span>足迹</span></a>
        <a href="###"><img src="https://image.suning.cn/uimg/cms/img/157136450994431031.png"
               alt=""><span>客户服务</span></a>
        <a href="###"><img src="https://image.suning.cn/uimg/cms/img/157251063564774447.png"
               alt=""><span>必抢清单</span></a>
        <a href="###"><img src="https://image.suning.cn/uimg/cms/img/157136454213083878.png"
               alt=""><span>拼购</span></a>
        <a href="###"><img src="https://image.suning.cn/uimg/cms/img/157251073785756292.png"
               alt=""><span>校园VIP</span></a>
        <a href="###"><img src="https://image.suning.cn/uimg/cms/img/157136448419617333.png"
               alt=""><span>我的试用</span></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.mine {
  background-color: #f3f3f3;
  min-height: 800px;
  .header {
    background-color: #ffdb47;
    position: relative;
    .header_title {
      height: 36px;
      width: 100%;
      color: #333;
      font-size: 16px;
      line-height: 32px;
      // text-align: center;
      font-weight: bold;
      position: relative;
      span {
        font-size: 20px;
        font-weight: bold;
        line-height: 36px;
      }
      .title_setting {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 8px;
        width: 22px;
        height: 22px;
        background-image: url("https://res.suning.cn/project/msinode/wap/home/image/setting.png");
        background-size: cover;
      }
    }
    .header_user_info {
      position: relative;
      display: flex;

      padding: 26.5px 21px 0 21px;
      .info_logo {
        a {
          height: 60px;
          width: 60px;
          display: block;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
      .info_message {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 10px;
        justify-content: space-around;
        .user_name {
          font-size: 20px;
          line-height: 22px;
          color: #333;
        }
        .user_content {
          line-height: 16px;
          font-size: 12px;
          padding: 0 5px;
          color: #fff;
          border-radius: 8px;
          background-color: #e1bb23;
        }
      }
      .info_code {
        position: absolute;
        right: 21px;
        top: 26.5px;
        background-color: #ffda47d5;
        a {
          width: 60px;
          height: 60px;
          display: block;
          background-image: url("https://res.suning.cn/project/msinode/wap/home/image/qr-icon.png");
          background-size: cover;
        }
      }
    }
    .header_list {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-around;
      height: 87.5px;
      a {
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        b {
          font-size: 14px;
          color: #222;
          line-height: 22px;
        }
        span {
          font-size: 14px;
          line-height: 19px;
          color: #222;
        }
      }
    }
    .header_member {
      position: absolute;
      bottom: -26px;
      left: 50%;
      height: 45px;
      width: 94%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #fff;
      border-radius: 6px;
      .vip_img {
        width: 45px;
        height: 30px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .vip_text {
        font-size: 14px;
        line-height: 18px;
        color: #333;
      }
      .vip_go {
        display: flex;
        align-items: center;
        p {
          line-height: 18px;
          font-size: 14px;
          color: #333;
        }
        i {
          display: flex;
          width: 18px;
          height: 18px;
          background-image: url("https://res.suning.cn/project/msinode/wap/home/image/r-icon.png");
          background-size: contain;
          margin-left: 3px;
        }
      }
    }
  }
  .myOrder {
    width: 90%;
    margin: 35px auto 5px;
    height: 110px;

    padding: 12px;
    background-color: #fff;
    border-radius: 6px;
    .myOrder_title {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 17px;
        font-weight: bold;
        color: #222;
      }
      a {
        font-size: 14px;
        color: #666;
        line-height: 17px;
        i {
          display: inline-block;
          height: 15px;
          width: 15px;
          vertical-align: text-top;
          line-height: 17px;
          background-image: url("https://res.suning.cn/project/msinode/wap/home/image/next.png");
          background-size: contain;
        }
      }
    }
    .myOrder_list {
      display: flex;
      height: 88px;
      a {
        height: 100%;
        display: flex;
        width: 20%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          height: 30px;
          width: 30px;
          margin-bottom: 5px;
        }
        span {
          font-size: 14px;
          line-height: 18px;
          color: #666;
        }
      }
    }
  }
  .myTools {
    width: 90%;
    margin: 10px auto;
    padding: 12px;
    text-align: left;
    background: #fff;
    border-radius: 8px;
    .myTools_title {
      font-size: 16px;
      line-height: 22px;
      color: #222;
      font-weight: bold;
    }
    .tools_list {
      display: flex;
      flex-wrap: wrap;
      a {
        width: 25%;
        height: 60px;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          height: 24px;
          width: 24px;
        }
        span {
          color: #333;
          font-size: 14px;
          line-height: 16px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>