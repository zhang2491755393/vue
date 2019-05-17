import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from "mint-ui";
Vue.use(MintUI) 
import Header from "./components/header.vue";
import Swipe from "./components/swipe.vue";
import GoodList from './components/goodList.vue'
import DiZhi from './components/dizhi.vue'

import store from "./store"
import VDistpicker from 'v-distpicker'
Vue.component('v-distpicker', VDistpicker)
Vue.component("Header",Header);
Vue.component("Swipe",Swipe);
Vue.component("GoodList",GoodList);
Vue.component("DiZhi",DiZhi);

import "./style/index.scss"
Vue.config.productionTip = false   // true为生产版本，false关闭则为开发版本
//主入口文件 
new Vue({
  router,
  store,
  watch:{
    '$route':function(from,to){
      localStorage.routeNameTo = from.name; 
      localStorage.routeNameFrom = to.name; 
    },

  },  
  render: h => h(App)   //rander   函数渲染
}).$mount('#app')
