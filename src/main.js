import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@styles/index.scss' //global scss
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Element, { size: 'medium' })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
