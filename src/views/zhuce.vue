<template>
  <div>
    <Header title="注册" :show="!!1"></Header>
    <div class="zhucep">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username" ref="name"></mt-field>
      <mt-field label="昵称" placeholder="请输入昵称" v-model="usernick"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="密码" placeholder="确认密码" type="password" v-model="password2"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="tel"></mt-field>
      <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
      <mt-checklist v-model="value" :options="['提供您的个人信息，即表明您同意接受我们的隐私和 Cookie 政策']"></mt-checklist>
    </div>
    <div class="foot">
      <mt-button size="small" type="primary" @click="zhuce" class="zhuce">注册</mt-button>
    </div>
  </div>
</template>
<script>
import { http } from "../utils";
import { Indicator, MessageBox, Toast, Radio,Checklist } from "mint-ui";
import store from "../store";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      value: ["1"]
    };
  },
  methods: {
    zhuce() {
      var checklist = this.value.length;
      var name = this.$store.state.username;
      var nick = this.$store.state.usernick;
      var pwd1 = this.$store.state.password;
      var pwd2 = this.$store.state.password2;
      var tel = this.$store.state.tel;
      var birthday = this.$store.state.birthday;
      var nameReg = /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/; //数字字母下划线
      var nickReg = /[\u4E00-\u9FA5A-Za-z]{2,8}/; //汉字字母6-8
      var pwdReg = /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/;
      var telReg = /0?(13|14|15|18|17)[0-9]{9}/;
      var birReg = /^\d{4}-\d{1,2}-\d{1,2}/;
      if (
        name != "" &&
        nick != "" &&
        pwd1 != "" &&
        pwd2 != "" &&
        tel != "" &&
        birthday != ""
      ) {
        if (nameReg.test(name)) {
          if (nickReg.test(nick)) {
            if (pwdReg.test(pwd1)) {
              if (pwd1 == pwd2) {
                if (telReg.test(tel)) {
                  if (birReg.test(birthday)) {
                    if (checklist == 2) {
                      this.$store.dispatch("AddUser",{
                        url:"/vue/zhuce",
                        params:{
                          username:name,
                          usernick:nick,
                          password:pwd1,
                          tel:tel,
                          birthday:birthday,
                        },
                        cb:(res)=>{
                          Toast(res.data.msg);
                          this.$router.push({name:"login"})
                        }
                      })
                    } else {
                      Toast("请勾选协议");
                    }
                  } else {
                    Toast("请选择生日");
                  }
                } else {
                  Toast("请输入正确的电话号码");
                }
              } else {
                Toast("两次密码输入不一致");
              }
            } else {
              Toast("密码格式错误，由字母数字下划线组成,不能是数字开头,6-15位");
            }
          } else {
            Toast("昵称格式错误，由汉字、字母组成,6-8位");
          }
        } else {
          Toast("用户名格式错误，由字母数字下划线组成,不能是数字开头,6-15位");
        }
      } else {
        Toast("注册内容不能空");
      }
    }
  },
  computed: {
    username: {
      get() {
        return this.$store.state.usrname;
      },
      set(val) {
        this.$store.commit("Changename", val);
      }
    },
    usernick: {
      get() {
        return this.$store.state.usernick;
      },
      set(val) {
        this.$store.commit("Changenick", val); //提交到mutation
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
    password2: {
      get() {
        return this.$store.state.password2;
      },
      set(val) {
        this.$store.commit("Changepassword2", val);
      }
    },
    birthday: {
      get() {
        return this.$store.state.birthday;
      },
      set(val) {
        this.$store.commit("Changebirthday", val);
      }
    },
    tel: {
      get() {
        return this.$store.state.tel;
      },
      set(val) {
        this.$store.commit("Changetel", val);
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
  }
  .zhuce {
    background-color: #000;
    color: #fff;
  }
}
</style>
