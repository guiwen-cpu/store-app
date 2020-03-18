<template>
  <div class="home1">
    <div class="index">
      <Header />
      <Menber />
      <Banner v-bind:items="items"></Banner>
      <Category v-bind:lists="lists"></Category>
      <newImg />
      <Discount :discount="discount" />
      <guessYouLike :productList="productList" />
    </div>
  </div>
</template>
<script>
import Category from './components/Category';
import Banner from './components/Banner';
import Header from './components/Header';
import Menber from './components/Menber';
import newImg from './components/newImg';
import Discount from './components/Discount';
import guessYouLike from './components/guessYouLike';
export default {
  data() {
    return {
      items: [],
      lists: [],
      discount: [],
      productList: []
    };
  },
  components: {
    Category,
    Banner,
    Header,
    Menber,
    newImg,
    Discount,
    guessYouLike
  },
  mounted() {},
  methods: {},
  async created() {
    try {
      const items = await this.$http.get('/api/banner');
      this.items = items.data;
      const lists = await this.$http.get('/api/rollinglist');
      this.lists = lists.data;
      const discount = await this.$http.get('/api/discount');
      this.discount = discount.discount;
      const productList = await this.$http.get('/api/productList');
      this.productList = productList.prolists;
    } catch (err) {
      alert(err);
    }
  }
};
</script>
<style lang="scss">
.index {
  margin-bottom: 56px;
  background-color: rgb(218, 57, 57);
}
</style>
