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

Vue.directive('outside', {
  bind(el, binding) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
