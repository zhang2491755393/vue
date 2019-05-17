<template>
  <div :show="!!0" class="tou">
    <Header title="个人中心" :show="!!0"></Header>

    <div class="mine" v-if="!denglu">
      <i class="iconfont">&#xe617;</i>
      <p>您还未登录哦</p>
      <div class="foot" >
        <mt-button size="small" type="default" @click="login">登录</mt-button>
        <mt-button size="small" type="primary" @click="zhuce">注册</mt-button>
      </div>
    </div>
    <div v-else>
      <div class="denglu">
        <div>
          <img
            src="https://www.swarovski.com.cn/_ui/responsive/theme-swarovski/images/animations/Swarovski_Loading_3D_120_120.gif"
            alt
          >
        </div>
        <h1>我的账户</h1>
        <p class="denglu-p">欢迎&nbsp;&nbsp;{{denglu}}</p>
        <div class="denglu-div">
          <p>
            <span>个人中心</span>
            <i class="iconfont" @click="mine(denglu)">&#xe76e;</i>
          </p>
          <p>
            <span>订单列表</span>
            <i class="iconfont" @click="dingdan">&#xe76e;</i>
          </p>
          <p>
            <span>修改密码</span>
            <i class="iconfont" @click="xiugaipwd">&#xe76e;</i>
          </p>
          <p>
            <span>注销账户</span>
            <i class="iconfont" @click="tuichu">&#xe76e;</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { all } from "q";
import { http, aesEncrypt, aesDecrypt } from "../utils";
import {mapActions} from 'vuex'


export default {
  data() {
    return {
      denglu: aesDecrypt(localStorage.username, "wh1811"),
    };
  },
  methods: {
    dingdan(){
 this.$router.push({ name: "dingdan" });
    },
    login() {
      this.$router.push({ name: "login" });
    },
    zhuce() {
      this.$router.push({ name: "zhuce" });
    },
    tuichu() {
      localStorage.removeItem("username");
      this.$store.dispatch("tuichuNum")
      this.$router.push({ name: "login" });
    },
    mine(denglu) {
      this.$router.push({ path:`/mineziliao/${denglu}` });
      // params: { userId }
    },
    xiugaipwd() {
      this.$router.push({ name: "xiugaipwd" });
    }
  }
};
</script>
<style lang="scss" scoped>
.foot {
  position: fixed;
  bottom: 10%;
  left: 0;
  width: 100%;
  text-align: center;
  button {
    width: 40%;
    margin-left: 5%;
    margin-right: 5%;
  }
}
.mine {
  width: 100%;
  height: 100%;
  text-align: center;
  color: rgb(216, 208, 208);
  i {
    font-size: 5rem;
    line-height: 6rem;
    p {
      font-size: 0.8rem;
      color: rgb(128, 124, 124);
    }
  }
}

.denglu {
  width: 100%;
  // height: 2rem;
  text-align: center;
  margin-top: 0.1rem;
  img {
    display: inline-block;
    width: 3rem;
    height: 3rem;
  }
  h1 {
    text-align: center;
    font-size: 0.7rem;
    animation: jackInTheBox 2s;
  }
  .denglu-p {
    font-size: 0.4rem;
    line-height: 0.8rem;
    color: #000;
    animation: zoomInDown 2s;
  }
  .denglu-div {
    text-align: left;
    padding-left: 0.4rem;
    padding-right: 0.4rem;

    p {
      border-top: 1px rgb(221, 221, 221) solid;
      line-height: 0.9rem;
      width: 100%;
      overflow: hidden;

      span {
        text-align: left;
      }
      i {
        float: right;
        color: #333;
      }
    }
  }
}
</style>
