import Vue from 'vue'
import VueParticles from 'vue-particles'

import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueParticles)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
