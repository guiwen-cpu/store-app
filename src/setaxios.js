import store from './store';
// import router from './router';
import axios from 'axios';

//http 全局拦截
export default function setAxios() {
  // axios.interceptors.request.use(
  //     config=>{
  //         if(store.state.token){
  //             config.headers.token=store.state.token
  //         }
  //         return config
  //     }
  // )
  axios.interceptors.response.use(response => {
    if (response.status == 200) {
      const data = response.data;
      if (data.code == -1) {
        //登录过期 需重新登录，清空vuex的token和localstorage的token
        store.commit('settoken', '');
        window.localStorage.removeItem('token');
        // router.replace({path:'login'})
      }
      return data;
    }
    return response;
  });
}
