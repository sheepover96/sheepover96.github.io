import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from "vue-scrollto"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueScrollTo);