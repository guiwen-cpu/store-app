<template>
  <div class="list_rightpanels">
    <cube-scroll class="rightpanels">

      <ul>
        <li v-for="(tab,index) in tabDescript"
            :key="index">
          <img :src="tab.image"
               alt="">
          <p>{{tab.label}}</p>
        </li>
      </ul>
    </cube-scroll>

  </div>
</template>
<script>
export default {
  data() {
    return {
      tabDescript: []
    };
  },
  created() {
    this.getclassify(0);
  },
  methods: {
    //获取分类

    async getclassify(index) {
      const tabDescript = await this.$http.get("/api/classify", {
        params: { type: index }
      });
      this.tabDescript = tabDescript.data;
    }
  },
  mounted() {
    this.$bus.$on("getclassify", index => {
      this.getclassify(index);
    });
    const rightpanels = document.querySelector(".rightpanels");
    const bodyheight = document.documentElement.clientHeight;

    rightpanels.style.height = bodyheight - 46 + "px";
  }
};
</script>
<style lang="scss" scoped>
.list_rightpanels {
  width: 78%;
  padding: 10px;

  .rightpanels {
    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        margin-top: 15px;
        width: 33.33%;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        line-height: 15px;

        img {
          width: 60px;
          height: 60px;
        }
        p {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>