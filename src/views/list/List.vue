<template>
  <div class="panelsbox">
    <LeftPanels :tabslabel="tabslabel" />
    <RightPanels />
  </div>
</template>
<script>
import LeftPanels from './components/LeftPanels';
import RightPanels from './components/RightPanels';
export default {
  data() {
    return {
      tabslabel: []
    };
  },
  components: {
    LeftPanels,
    RightPanels
  },
  methods: {
    async getTabs() {
      try {
        const tabslabel = await this.$http.get('/api/tabslabel');
        this.tabslabel = tabslabel.data;
      } catch (error) {
        alert(error);
      }
    }
  },
  created() {
    //获取默认的分类数据
    this.getTabs();
  },
  mounted() {
    // //设置滚动盒子的高度
    // const leftpanels = document.querySelector(".leftpanels");
    // const rightpanels = document.querySelector(".rightpanels");
    // //屏幕可视高度
    // const bodyheight = document.documentElement.clientHeight;
    // leftpanels.style.height = bodyheight - 50.98 + "px";
    // rightpanels.style.height = bodyheight - 50.98 + "px";
  }
};
</script>
<style lang="stylus">
.panelsbox {
  display: flex;
  background: #fff;
}
</style>
