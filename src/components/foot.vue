<template>
  <div class>
    <router-link v-for="(foots,i) in footer" :to="foots.path" :key="i">
      <i class="iconfont" v-html="foots.icon"></i>
      <mt-badge size="normal" color="#000" v-if="foots.name=='car'" class="num">{{carnum}}</mt-badge>
      <span>{{foots.txt}}</span>
    </router-link>
  </div>
</template>


<script>
import { Badge } from "mint-ui";
import {mapState} from 'vuex';
export default {
  name: "foot",
  data() {
    return {
      footer: [
        { txt: "首页", path: "/index/content", name: "home", icon: "&#xe506" },
        {
          txt: "分类",
          path: "/index/classify",
          name: "classify",
          icon: "&#xe652;"
        },
        {
          txt: "购物车",
          path: "/index/car",
          name: "car",
          icon: "&#xe607;"
        },
        { txt: "我", path: "/index/mine", name: "mine", icon: "&#xe605;" }
      ]
    };
  },
  computed:{
    ...mapState(['carnum'])
  }
};
</script>
<style lang="scss" scoped>
div {
  background-color: #fff;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.2rem;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
  border-top: 1px rgb(201, 200, 200) solid;
  a {
    display: flex;
    flex-direction: column;
    width: 25%;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    .num {
      position: absolute;
      right: 0.3rem;
      top: 0.04rem;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      line-height: 0.4rem;
      padding: 0;
    }
    i {
      padding-top: 0.1rem;
      font-size: 0.4rem;
    }
    span {
      font-size: 0.34rem;
      line-height: 0.6rem;
    }
  }
}
</style>
