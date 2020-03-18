<template>
  <div class="search">
    <Header :title="title"
            :isGray="isGray"></Header>
    <div class="tab_wrap">
      <ul class="tab_bar">
        <li v-for="(item,index) in tabbar"
            :key="index"
            @click="toggleItem(item.text)"
            :class="item.text==currentItem?'active':''"><img :src="item.img"
               alt=""><span class="tab_text">{{item.text}}</span></li>

      </ul>
    </div>
    <router-view></router-view>

  </div>
</template>
<script>
import Header from "../../components/Header";

export default {
  data() {
    return {
      title: "发现好物",
      isGray: false,
      currentItem: "",

      tabbar: [
        {
          img:
            "https://image.suning.cn/uimg/MZMS/show/155117928298268957.png?from=mobile",
          text: "精选"
        },
        {
          img:
            "https://image.suning.cn/uimg/MZMS/show/155117929720977273.png?from=mobile",
          text: "家电"
        },
        {
          img:
            "https://image.suning.cn/uimg/MZMS/show/151384323374513944.png?from=mobile",
          text: "酷机"
        },
        {
          img:
            "https://image.suning.cn/uimg/MZMS/show/151375579188137688.png?from=mobile",
          text: "超市"
        },
        {
          img:
            "https://image.suning.cn/uimg/MZMS/show/151375580058931338.png?from=mobile",
          text: "穿搭"
        }
      ]
    };
  },
  created() {
    switch (this.$route.path) {
      case "/navbar/search/recommend":
        this.currentItem = "精选";
        break;
      case "/navbar/search/appliance":
        this.currentItem = "家电";
        break;
      case "/navbar/search/supermarket":
        this.currentItem = "超市";
        break;
      case "/navbar/search/clothes":
        this.currentItem = "穿搭";
        break;
      case "/navbar/search/mobile":
        this.currentItem = "酷机";
        break;
      default:
        break;
    }
  },
  components: {
    Header
  },
  methods: {
    toggleItem(clickItem) {
      this.currentItem = clickItem;
      switch (clickItem) {
        case "精选":
          this.$router.push("/navbar/search/recommend");
          break;
        case "家电":
          this.$router.push("/navbar/search/appliance");
          break;
        case "酷机":
          this.$router.push("/navbar/search/mobile");
          break;
        case "超市":
          this.$router.push("/navbar/search/supermarket");
          break;
        case "穿搭":
          this.$router.push("/navbar/search/clothes");
          break;

        default:
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  min-height: 800px;
  margin-bottom: 50px;
  background-color: #f3f3f3;
  .tab_wrap {
    .tab_bar {
      background: #ff342d;
      li {
        text-align: center;
        width: 75px;
        display: inline-block;
        white-space: nowrap;

        img {
          display: block;
          width: 25px;
          height: 25px;
          position: relative;
          margin: 5px auto 0;
        }
        .tab_text {
          display: block;
          font-weight: normal;
          height: auto;
          max-width: 3rem;
          color: #fff;
          font-size: 16px;
          line-height: 26px;
        }
      }
      .active {
        background-color: #cd0031;
      }
    }
  }
}
</style>