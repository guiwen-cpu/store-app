<template>
  <div class="home__menber">
    <div class="menber__wrapper">
      <a href="">
        <img :src="menber.img1"
             alt="">

      </a>
      <a href="">
        <img :src="menber.img2"
             alt="">

      </a>
      <a href="">
        <img :src="menber.img3"
             alt="">

      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menber: {
        img1: "https://image2.suning.cn/uimg/cms/img/157727222976028883.gif",
        img2: "https://image1.suning.cn/uimg/cms/img/157727223588172067.gif",
        img3: "https://image1.suning.cn/uimg/cms/img/157727224144230784.gif"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@mixin cover {
  width: 100%;
  height: 100%;
}
.menber__wrapper {
  width: 100%;
  height: 172.5px;
  display: flex;
  a {
    flex: 4;
    height: 100%;
    img {
      @include cover;
    }
  }
}
</style>