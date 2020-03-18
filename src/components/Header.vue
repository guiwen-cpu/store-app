<template>
  <div
    class="header"
    :style="isGray ? 'background:#f3f3f3' : 'background:#fff'"
  >
    <div class="header_arrow">
      <div @click="goback"></div>
    </div>
    <div class="header_title">{{ title }}</div>
    <slot name="btn"></slot>
  </div>
</template>
<script>
export default {
  props: ['title', 'isGray'],
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 45px;
  width: 100%;
  position: relative;
  background: #fff;
  text-align: left;
  .delete {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-45%);
    color: #f42;
    font-size: 16px;
  }
  .header_arrow {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    height: 14px;
    width: 14px;
    div {
      //   position: relative;
      //   display: inline-block;
      height: 100% !important;

      width: 100% !important;
      border: 2px solid #666;

      border-right: none;
      border-bottom: none;
      transform: rotateZ(-45deg);
    }
  }
  .header_title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
