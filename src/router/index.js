import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/navbar/index'
  },
  {
    path: '/detail/:productId',
    name: 'detail',
    component: () => import('../views/Detail/Detail.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/Mine/components/setting.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register/Register.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import('../views/Navbar.vue'),
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/home/Index.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/list/List.vue')
      },
      {
        path: 'search',

        component: () => import('../views/Search/Search.vue'),
        children: [
          // {
          //   path:"/",
          //   redirect:"/navbar/search/recommend"
          // },
          {
            path: 'recommend',
            name: 'recommend',
            component: () => import('../views/Search/components/recommend.vue')
          },
          {
            path: 'appliance',
            name: 'appliance',
            component: () => import('../views/Search/components/appliance.vue')
          },
          {
            path: 'mobile',
            name: 'mobile',
            component: () => import('../views/Search/components/mobile.vue')
          },
          {
            path: 'supermarket',
            name: 'supermarket',
            component: () =>
              import('../views/Search/components/supermarket.vue')
          },
          {
            path: 'clothes',
            name: 'clothes',
            component: () => import('../views/Search/components/clothes.vue')
          }
        ]
      },
      {
        path: 'cart',
        name: 'cart',
        meta: {
          requireAuth: true
        },
        component: () => import('../views/Cart/Cart.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/Mine/Mine.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
