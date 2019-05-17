<template>
  <div class="head">
    <div @click="GoBack" class="back" v-if="show">
      <i class="iconfont">&#xe60c;</i>
      <span v-if="show" class="back">返回</span>
    </div>
    <div class="h-content">
      <img
        src="https://www.swarovski.com.cn/_ui/responsive/theme-swarovski/images/brandlogo.svg"
        alt
        srcset
      >
    </div>
    <div class="iii">
      <i @click="GoSearch" v-if="!show" id="search" class="iconfont">&#xe60f;</i>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
  props: ["title", "show"],
  data() {
    return {};
  },
  computed:{
   
  },
  methods: {
    GoSearch() {
      this.$router.push({ name: "search" });
    },
    GoBack() {
      this.$store.dispatch("xiugaigoodnum")
      this.$router.back();

    },
  }
};
</script>
<style lang="scss" scoped>
.head {
  width: 100%;
  height: 1.2rem;
  background-color:#fff;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
}
  .back{
    position: absolute;
    left: 0;
    top: 0;
    width: 2rem;
    height: 1.2rem;
    padding-left: 0.3rem;
    i{
      width: 1rem;
      display: inline-block;
      line-height: 1.2rem;
      font-size: 0.45rem;
    }
    span{
      margin-left: 0.5rem;
      line-height: 1.2rem;
      font-size: 0.4rem
    }
  }
.h-content {
  width: 2rem;
  height: 1rem;
  float: left;
  margin-left: 37%;
  margin-top: 0.1rem;
  animation: swing 2s 5;
  img {
    width: 100%;
    height: 100%;
  }
}
.iii {
  color: #000;
  margin-top: 0.4rem;
  margin-right: 0.4rem;
  background-color: #fff;
  box-shadow: 0 0 0 0;
  float: right;
  i{

  font-size: 0.5rem
  }
}
</style>


  <!-- <mt-header :title="title">
    <div @click="GoBack" slot="left" >
      <mt-button icon="back" v-if="show">返回</mt-button>
    </div>
    <mt-button icon="search" slot="right" @click="GoSearch" v-if="!show"></mt-button>
  </mt-header> -->