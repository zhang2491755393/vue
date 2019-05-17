// // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from "vue";
import VueRouter from "vue-router";
import Index from "./views/index.vue";
import Content from "./views/content.vue";
import Classify from "./views/classify.vue";
import Car from "./views/car.vue";
import Mine from "./views/mine.vue";
import Search from "./views/search.vue"
import Login from "./views/login.vue"
import Zhuce from "./views/zhuce.vue"
import Xiugaipwd from "./views/xiugaiPwd.vue"
import GoodDetails from "./views/good_details.vue"
import JieSuan from './views/jiesuan.vue'
import Mineziliao from './views/mineziliao.vue'
import Dingdan from './views/dingdan.vue'

Vue.use(VueRouter);     //全局声明 路由模块
const routes = [      //定义路由配置参数
  {path:"/",redirect:{name:"content"}},
  {path:"/search",component:Search,name:"search"},
  {path:"/login",component:Login,name:"login"},
  {path:"/zhuce",component:Zhuce,name:"zhuce"},
  {path:"/xiugaipwd",component:Xiugaipwd,name:"xiugaipwd"},
  {path:'/good_detalis/:goodid',component:GoodDetails,name:"good_details"},
  {path:'/jiesuan',component:JieSuan,name:'jiesuan'},
  {path:'/mineziliao/:username',component:Mineziliao,name:'mineziliao'},
  {path:'/dingdan',component:Dingdan,name:'dingdan'},
  {
    path: "/index", component:Index,name:'index',
    children: [
      {path:"",redirect:{name:"content"}},
      {path:"content",component:Content,name:"content"},
      {path:"classify",component:Classify,name:"classify"},
      {path:"mine",component:Mine,name:"mine",
    },
      {path:"car",component:Car,name:"car"},
    ]
  },
]
const router = new VueRouter({    //创建路由实例对象
  routes,
})


export default router;