<template>
  <div>
    <Header title="修改密码" :show="!!1"></Header>
    <div class="zhucep">
      <mt-field label="旧密码" placeholder="请输入旧密码" v-model="password"></mt-field>
      <mt-field label="新密码" placeholder="请输入新密码" v-model="password1"></mt-field>
      <mt-field label="确认密码" placeholder="请确认密码" type="password" v-model="password2"></mt-field>
    </div>
    <div class="foot">
      <mt-button size="small" type="primary" @click="tijiao" class="zhuce">提交</mt-button>
    </div>
  </div>
</template>
<script>
import { Indicator, MessageBox, Toast, Radio } from "mint-ui";
import { http, aesEncrypt, aesDecrypt } from "../utils";
export default {
  data() {
    return {};
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
    },
    password1: {
      get() {
        return this.$store.state.password2;
      },
      set(val) {
        this.$store.commit("Changepassword1", val);
      }
    },
    password2: {
      get() {
        return this.$store.state.password2;
      },
      set(val) {
        this.$store.commit("Changepassword2", val);
      }
    }
  },
  methods: {
    tijiao() {
      var oldpwd = this.$store.state.password;
      var pwd1 = this.$store.state.password1;
      var pwd2 = this.$store.state.password2;
      var pwdReg = /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/;
      if (pwdReg.test(oldpwd)) {
        if (pwdReg.test(pwd1)) {
          if (pwd1 !=oldpwd) {
            if (pwd1 == pwd2) {
              this.$store.dispatch("xiugaipwd", {
                url: "/vue/xiugaipwd",
                params: {
                  username: aesDecrypt(localStorage.username, "wh1811"),
                  password: oldpwd,
                  passwordNew: pwd1
                },
                cb: res => {
                    if(res.type==1){
                         Toast(res.msg);
                         this.$router.push({name:"login"})
                    }else{
                           Toast('修改失败');
                    }
                }
              });
            } else {
              Toast("两次密码输入不一致");
            }
          } else {
            Toast("新密码与旧密码不一致");
          }
        } else {
          Toast("新密码格式不正确，由字母数字下划线组成,不能是数字开头,6-15位");
        }
      } else {
        Toast("旧密码格式不正确，由字母数字下划线组成,不能是数字开头,6-15位");
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