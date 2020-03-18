<template>
  <div class="home__banner">
    <cube-slide ref="slide"
                :data="items">
      <cube-slide-item v-for="(item, index) in items"
                       :key="index"
                       @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img class="banner"
               :src="item.image" />
        </a>
      </cube-slide-item>
    </cube-slide>

  </div>
</template>
<script>
export default {
  props: ["items"],
  mounted() {},

  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.home__banner {
  a {
    .banner {
      display: black;
      width: 100%;
      height: 175px;
    }
  }
}
</style>