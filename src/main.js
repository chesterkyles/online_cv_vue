import Vue from 'vue'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'
import VTooltip from 'v-tooltip'
import VueLazyload from 'vue-lazyload'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'v-tooltip/dist/v-tooltip.css'

Vue.use(VueParticles)
Vue.use(VTooltip)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: `${process.env.BASE_URL}error.png`,
  loading: `${process.env.BASE_URL}loading.gif`,
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
