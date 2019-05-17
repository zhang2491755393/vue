<template>
  <div>
    <Header title="分类" :show="!!0"></Header>
    <!-- <mt-navbar v-model="selected">
      <mt-tab-item  v-for="(type,i) in types" :key="i" :id="type.nameE">
          {{type.nameZ}}
      </mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
  <mt-tab-container-item v-for="(type,i) in types" :key="i" :id="type.nameE">
      <GoodList :type="type" :goodList='goodList'>
         
      </GoodList>
  </mt-tab-container-item>
</mt-tab-container> -->
<mt-navbar v-model="selected">
        <mt-tab-item v-for="(type,i) in types" :key="i" :id="type.nameE">{{type.nameZ}}</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item v-for="(type,i) in types" :key="i" :id="type.nameE">
          <GoodList :type="type" :goodlist="goodlist"></GoodList>
        </mt-tab-container-item>
      </mt-tab-container>

  </div>
</template>
<script>
import { Indicator, Toast, Navbar, TabItem,Loadmore } from "mint-ui";
import {mapState,mapActions} from "vuex";
import { http } from "../utils";
import { setTimeout } from "timers";
import GoodList from "../components/goodList.vue"
export default {
  data() {
    return {
      types: [],
      selected: this.$store.state.selected
    };
  },
  components:{
      GoodList
  },
  methods:{
      ...mapActions(['getGoodList'])

  },
  computed:{
      ...mapState(['goodlist'])
  },
  mounted() {
      this.getGoodList({url:"/vue/getGoodList",cb:(res)=>{
          Toast("请求成功")
      }})
    Indicator.open({
      text: "加载中...",
      spinnerType: "triple-bounce"
    });
    http.get("/vue/goodstype", {}).then(res => {
      setTimeout(() => {
        this.types = res.data.result;
        console.log(this.types)
        Toast(res.data.msg)
        Indicator.close();
       }, 2000);
    });
  }
};
</script>
