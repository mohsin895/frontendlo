
import Vue from 'vue'
import VueMeta from 'vue-meta'
//import app module
import App from './App'
//import router module

import desktopRouter from './router/desktop'
import mobileRouter from './router/mobile'
import plugin from './plugin/plugin'
//import vuex module
import store from '@/store'



const baseUrl = 'http://localhost/loyal';
//const baseUrl = 'https://seller.loyel.com.bd/loyelApi';
const siteUrl='https://loyel.com.bd'
const sellerUrl='https://seller.loyel.com.bd/';

Vue.prototype.$baseUrl = baseUrl;
Vue.prototype.$sellerUrl=sellerUrl;
Vue.prototype.$siteUrl=siteUrl;

Vue.use(VueMeta, {
  keyName: 'head'
})

Vue.config.productionTip = false
const isMobile = window.innerWidth < 768; 
new Vue({
  el: '#app',
  router: isMobile ? mobileRouter : desktopRouter,
  store,
  plugin,
  components: { App },
  template: '<App/>'
})
