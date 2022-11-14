import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from "@/store"
import router from "@/router"
import excel from 'vue-excel-export'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(store)
Vue.use(router)
Vue.use(excel)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store,
  router,

}).$mount('#app')
