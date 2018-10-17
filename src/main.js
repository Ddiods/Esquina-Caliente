import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Card, Button, Nav, Table } from 'bootstrap-vue/es/components'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './icons'

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Card)
Vue.use(Button)
Vue.use(Nav)
Vue.use(Table)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
