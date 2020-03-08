import Vue from 'vue'
import App from './App.vue'
import router from './router'   //라우터를 사용하기 위한 등록

Vue.config.productionTip = false

new Vue({
  router,                     //반드시 추가해야 한다.
  render: h => h(App),
}).$mount('#app')
