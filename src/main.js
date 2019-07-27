import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import 'babel-polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import iView from 'iview'
import FormCreate from '@form-create/iview'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper/*,  { default global options } */)
Vue.use(iView)
Vue.use(FormCreate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
