<template>
  <div class="list_leftpanels">
    <cube-scroll class="leftpanels"
                 ref="leftpanels">
      <ul>
        <li v-for="(list,index) in tabslabel"
            @click='selectlist(index)'
            :class="{active:activeIndex==index}"
            :key='index'>
          {{list.label}}
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>
<script>
export default {
  props: ["tabslabel"],
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    selectlist(index) {
      this.activeIndex = index;
      this.$bus.$emit("getclassify", index);
    }
  },
  created() {
    this.selectlist(0);
  },
  mounted() {
    const bodyheight = document.documentElement.clientHeight;
    const leftpanels = document.querySelector(".leftpanels");
    leftpanels.style.height = bodyheight - 46 + "px";
  }
};
</script>
<style lang="scss" scoped>
.list_leftpanels {
  width: 22%;
  .leftpanels {
    width: 100%;

    li {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #fff;
      color: #333;
      background: #f8f8f8;
      font-size: 14px;
      box-sizing: border-box;
    }

    .active {
      background: #fff;
      color: #e93b3d;
      border-left: 3px solid #f45;
    }
  }
}
</style>