import Vue from 'vue'
import App from './App.vue'
import XLUI from '../packages/index'
Vue.config.productionTip = false
Vue.use(XLUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
