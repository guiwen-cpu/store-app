//引入倒计时
import Vue from 'vue';
import { CountDown } from 'vant';

Vue.use(CountDown);
//Toast提示
import { Toast } from 'vant';

Vue.use(Toast);
import { SubmitBar, Checkbox } from 'vant';

Vue.use(SubmitBar).use(Checkbox);

import { Dialog } from 'vant';

// 全局注册
Vue.use(Dialog);
//swipe轮播
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
