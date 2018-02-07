// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/fonts/font.css'
import 'element-ui/lib/theme-chalk/display.css'
import '@/assets/styles/common.scss'
import {
  Menu,
  Submenu,
  MenuItem,
  Input,
  Button,
  Popover,
  Row,
  Col
} from 'element-ui'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Popover)
Vue.use(Row)
Vue.use(Col)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
