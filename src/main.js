import Vue from 'vue'
import VueParticles from 'vue-particles'
import VTooltip from 'v-tooltip'

import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'v-tooltip/dist/v-tooltip.css'

Vue.use(VueParticles)
Vue.use(VTooltip)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
