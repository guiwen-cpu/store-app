<template>
  <div class="home__enter__list">
    <cube-slide ref="slidelists"
                :auto-play="false"
                :data="lists">
      <cube-slide-item v-for="(list, index) in lists"
                       :key="index">
        <ul class="listul">
          <li class="listli"
              v-for="(item, index1) in list"
              :key="index1">
            <a :href="item.url">
              <img alt=""
                   :src="item.image" />
              <p>{{ item.label }}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
export default {
  props: {
    lists: Array
  },

  data() {
    return {
      list: this.lists
    };
  }
};
</script>
<style lang="scss" scoped>
.home__enter__list {
  background: url("https://image1.suning.cn/uimg/cms/img/157725962841887448.jpg");
  height: 160px;
  width: 100%;
  .listul {
    display: flex;
    flex-wrap: wrap;
    padding-top: 5px;
    .listli {
      width: 20%;
      justify-content: center;

      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        padding: 5px 0;
      }

      p {
        font-size: 14px;
        padding-bottom: 10px;
        color: #fff;
      }
    }
  }
}
</style>