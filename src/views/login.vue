<template>
  <div>
    <Header title="登录" :show="!!1"></Header>
    <mt-field label="用户名" placeholder="请输入用户名/电话号码" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <div class="foot">
      <mt-button size="small" type="primary" @click="login">登录</mt-button>
    </div>
  </div>
</template>
<script>
import { aesEncrypt } from "../utils";
import { Indicator, MessageBox, Toast, Radio } from "mint-ui";
import store from "../store";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    login() {
      var name = this.$store.state.username;
      var password = this.$store.state.password;
      if (name != "" && password != "") {
        this.$store.dispatch("UserLogin", {
          url: "/vue/login",
          params: {
            username: name,
            password: password
          },
          cb: res => {
            Toast(res.msg);
            if (res.type == 1) {
              var name = aesEncrypt(res.result.username, "wh1811");
              localStorage.username = name;
              if (localStorage.routeNameFrom == "good_details") {
                var id=localStorage.goodid;
                     this.$router.push({path:`/good_detalis/${id}`});
                //  this.$router.push({ name: "good_details",params:{goodid:id }})
                }else{
                this.$router.push({ name: "content" });
              }
            }
          }
        });
      } else {
        Toast("内容不能为空");
      }
    }
  },
  computed: {
    username: {
      get() {
        return this.$store.state.username;
      },
      set(val) {
        this.$store.commit("Changename", val);
      }
    },
    password: {
      get() {
        return this.$store.state.password;
      },
      set(val) {
        this.$store.commit("Changepassword", val);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.foot {
  text-align: center;
  margin-top: 10%;
  button {
    width: 50%;
    border-radius: 0.4rem;
    background-color: #000;
    color: #fff;
  }
}
</style>
