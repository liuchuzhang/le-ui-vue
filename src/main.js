import Vue from 'vue'
import App from './App.vue'
import router from './router'

import leUi from "./le-ui-vue-components/index"

Vue.config.productionTip = false

Vue.use(leUi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
