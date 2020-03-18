<template>
  <div class="newImg_content">
    <a href="###"
       class="newItem newItem1">
      <img v-bind:src="pic.imgone"
           alt="">
    </a>
    <div class="hot_gap"></div>
    <a href="###"
       class="newItem">
      <img v-bind:src="pic.imgtwo"
           alt="">
    </a>
    <div class="hot_gap"></div>
    <a href="###"
       class="newItem">
      <img v-bind:src="pic.imgthree"
           alt="">
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pic: {
        imgone: "https://image3.suning.cn/uimg/cms/img/157330223943814123.png",
        imgtwo: "https://image2.suning.cn/uimg/cms/img/157330224785306243.gif",
        imgthree: "https://image3.suning.cn/uimg/cms/img/157330227372982455.gif"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.newImg_content {
  display: flex;
  height: 117px;
  padding: 10px 0;
  background: rgb(218, 57, 57);

  .newItem {
    display: block;
    flex: 3;

    img {
      display: block;
      width: 100%;
      height: 117px;
    }
  }
  .newItem1 {
    flex: 6;
  }
  .hot_gap {
    width: 2px;
    height: 100%;
    line-height: 0;
    background: #f2f2f2;
  }
}
</style>