import Vue from 'vue';
import Vuex from 'vuex';
import { Dialog } from 'vant';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    cartarry: JSON.parse(localStorage.getItem('cartarry')) || [],
    checkedAll: true,
    isDelete: true,
    totalPrice: ''
  },
  mutations: {
    isSelectAll: state => {
      state.checkedAll = state.cartarry.every(item => item.active);
    },
    selectItem(state, index) {
      const cartarry = state.cartarry;
      if (cartarry[index].active) {
        cartarry[index].active = false;
      } else {
        cartarry[index].active = true;
      }
      state.cartarry = cartarry;
    },
    checkCartList(state) {
      const isSelectAll = state.cartarry.every(item => item.active);
      if (isSelectAll) {
        state.checkedAll = true;
      } else {
        state.checkedAll = false;
      }
    },
    settoken(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = '';
      localStorage.removeItem('token');
    },
    tocart(state, proItem) {
      let goods = state.cartarry.find(item => item.title == proItem.title);
      if (goods) {
        goods.cartCount += 1;
      } else {
        state.cartarry.push({ ...proItem, cartCount: 1, active: true });
      }
    },
    remove(state, index) {
      if (state.cartarry[index].cartCount > 1) {
        state.cartarry[index].cartCount--;
      } else {
        Dialog.confirm({
          title: '',
          message: '确定删除该商品吗？'
        })
          .then(() => {
            state.cartarry.splice(index, 1);
          })
          .catch(() => {});
      }
    },
    submitOrder(state) {
      const totalPrice = state.totalPrice / 100;
      Dialog.confirm({
        title: '',
        message: `你需要支付 ￥${totalPrice} 元`
      })
        .then(() => {
          const restItem = state.cartarry.filter(item => !item.active);
          state.cartarry = restItem;
        })
        .catch(() => {});
    },
    add(state, index) {
      state.cartarry[index].cartCount++;
    },
    deleteSelected(state) {
      Dialog.confirm({
        title: '',
        message: '确定删除所选商品吗？'
      })
        .then(() => {
          const restItem = state.cartarry.filter(item => !item.active);
          state.cartarry = restItem;
        })
        .catch(() => {});
    },
    handleCheckAll(state, newState) {
      state.checkedAll = newState;
      state.cartarry.forEach(item => (item.active = state.checkedAll));
    }
  },
  actions: {},
  modules: {},
  getters: {
    countsum: state => {
      let sum = state.cartarry.length;

      return sum;
    },
    totalPrice: state => {
      let sum = 0;
      let selection = state.cartarry.filter(item => item.active);
      selection.forEach(item => {
        sum +=
          item.cartCount *
          (parseInt(item.price[1].number) +
            parseInt(item.price[2].number.slice(1)) / 100) *
          100;
      });
      state.totalPrice = sum;
      return sum;
    },

    isDisabled: state => {
      if (state.cartarry.some(item => item.active)) {
        state.isDelete = true;
        return false;
      } else {
        state.checkedAll = false;
        state.isDelete = false;
        return true;
      }
    }
  }
});
