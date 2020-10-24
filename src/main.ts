import Vue from 'vue'
import App from './App.vue'
import router from './router'


// Ant design import
import { DatePicker } from 'ant-design-vue';
Vue.use(DatePicker);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
