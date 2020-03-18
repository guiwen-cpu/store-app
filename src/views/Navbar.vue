
<template>
  <div class="navbarIndex">

    <router-view class="Router"></router-view>

    <cube-tab-bar v-model="defaultLabel"
                  @change="changeHandler"
                  class="navbar">
      <cube-tab v-for="(item,index) in tabs"
                :label="item.label"
                :id="index==3?'buycar':''"
                :key="item.label">
        <!-- name为icon的插槽 -->
        <i slot="icon"
           :class="item.icon"></i>
        <!-- 默认插槽 -->
        <span>{{item.label}}</span>

      </cube-tab>
    </cube-tab-bar>
    <span class="countsum">{{countsum}}</span>
  </div>

</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      index: 0,
      transitionName: "slide-right",
      defaultLabel: "首页",

      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "分类",
          icon: "cubeic-calendar"
        },
        {
          label: "发现",
          icon: "cubeic-search"
        },
        {
          label: "购物车",
          icon: "cubeic-mall"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["countsum"])
  },
  created() {
    switch (this.$route.path) {
      case "/navbar/index":
        this.defaultLabel = "首页";
        break;
      case "/navbar/list":
        this.defaultLabel = "分类";
        break;
      case "/navbar/search/recommend":
        this.defaultLabel = "发现";
        break;
      case "/navbar/search/appliance":
        this.defaultLabel = "发现";
        break;
      case "/navbar/search/supermarket":
        this.defaultLabel = "发现";
        break;
      case "/navbar/search/clothes":
        this.defaultLabel = "发现";
        break;
      case "/navbar/search/mobile":
        this.defaultLabel = "发现";
        break;

      case "/navbar/cart":
        this.defaultLabel = "购物车";
        break;
      case "/navbar/mine":
        this.defaultLabel = "我的";
        break;
    }
  },
  updated() {
    switch (this.$route.path) {
      case "/navbar/index":
        this.defaultLabel = "首页";
        break;
      case "/navbar/list":
        this.defaultLabel = "分类";
        break;
      case "/navbar/search/recommend":
        this.defaultLabel = "发现";
        break;

      case "/navbar/cart":
        this.defaultLabel = "购物车";
        break;
      case "/navbar/mine":
        this.defaultLabel = "我的";
        break;
    }
  },
  methods: {
    //点击与自身不同的其他导航
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted

      switch (label) {
        case "首页":
          this.$router.push({ path: "/navbar/index" });
          break;
        case "分类":
          this.$router.push({ path: "/navbar/list" });
          break;
        case "发现":
          this.$router.push({ path: "/navbar/search/recommend" });
          break;
        case "购物车":
          this.$router.push({ path: "/navbar/cart" });
          break;
        case "我的":
          this.$router.push({ path: "/navbar/mine" });
          break;
      }
    }
  }
};
</script>
<style lang="scss" >
.line_clamp_1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
}
.van-dialog__message {
  color: red;
}
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  background: #fff;
  border-top: 1px solid #eee;
  line-height: 20px;
  padding: 2px 0 3px 0;

  .cube-tab {
    padding: 0;
    box-sizing: border-box;

    span {
      display: block;
      font-size: 13px;
      line-height: 20px;
      // margin-bottom: 5px;
    }

    i {
      font-size: 17px;
    }
  }

  .cube-tab_active {
    span {
      color: rgb(9, 117, 180);
    }

    i {
      color: rgb(9, 117, 180);
    }
  }
}
// .cube-tab {
//   box-sizing: border-box;
//   height: 100%;
// }

.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}

.silde-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-enter-to,
.slide-right-enter-to {
  opacity: 1;
  transform: translate(0, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.countsum {
  position: fixed;
  bottom: 30px;
  right: 24.5%;
  z-index: 1001;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  background: red;
  color: #fff;
  font-size: 13px;
  border-radius: 50%;
}
@keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@-moz-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@-o-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.moveToCart {
  animation: mymove 0.5s ease-in-out;
}
</style>