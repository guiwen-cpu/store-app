import Vue from 'vue';
import './cube-ui';
import './plugins/vant';
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible';
import axios from 'axios';
import setaxios from './setaxios';
import Header from './components/Header.vue';
setaxios();
//兄弟组件传值
Vue.prototype.$bus = new Vue();
Vue.component('Header', Header);

router.beforeEach((to, from, next) => {
  store.commit('settoken', localStorage.getItem('token'));

  if (to.meta.requireAuth) {
    if (store.state.token) {
      next();
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } });
    }
  } else {
    next();
  }
});
store.subscribe((mutations, state) => {
  localStorage.setItem('cartarry', JSON.stringify(state.cartarry));
});

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
