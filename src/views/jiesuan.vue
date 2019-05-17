<template>
  <div>
    <Header :show="!!1"></Header>
    <div class="dizhi">
      <div class="name">
        <label for>收件人姓名</label>
        <input type="text" v-model="username">
      </div>
      <div class="tel">
        <label for>电话号码</label>
        <input type="text" v-model="tel">
      </div>
      <div class="dizhi11">
        <label>请选择地址</label>
        <v-distpicker
          :province="getListData.province"
          :city="getListData.city"
          :area="getListData.district"
          @province="onChangeProvince"
          @city="onChangeCity"
          @area="onChangeArea"
        ></v-distpicker>
      </div>
      <div class="qu">
        <label for>地址：</label>
        <p>{{this.getListData.province+ this.getListData.city+ this.getListData.district}}</p>
      </div>
      <div class="tel">
        <label for>详细地址</label>
        <input type="text" placeholder="请输入街道，例：xx路xx号" v-model="dizhi">
      </div>
    </div>
    <div class="div">
      <ul>
        <li v-for="(good,i) in goods" :key="i">
          <div class="divimg">
            <img :src="good.goodimg" alt>
          </div>
          <div class="divh1">
            <h1>{{good.goodtitle}}</h1>
            <p>单价：￥ {{good.goodprice}}</p>
            <p>数量：{{good.num}}</p>
            <p>总价：￥{{good.num*(good.goodprice.split(',').join('')*1)}}</p>
          </div>
        </li>
        <div>
          <p class="zongnum">总计：{{zongnum}} &emsp; 共计：{{goods.length}} 件商品</p>
          <h3 @click="jiesuan">结算</h3>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { http, aesDecrypt } from "../utils";
import { Indicator, Toast, Navbar, TabItem, MessageBox, Picker } from "mint-ui";
import VDistpicker from "v-distpicker";

export default {
  data() {
    return {
      goods: [],
      getListData: {
        province: "",
        city: "",
        district: "" //这个参数名后端返回的和插件定义的不一样
      }
    };
  },

  methods: {
    onChangeProvince(data) {
      this.getListData.province = data.value;
    },
    onChangeCity(data) {
      this.getListData.city = data.value;
    },
    onChangeArea(data) {
      this.getListData.district = data.value;
    },
    jiesuan() {
      var tel = this.$store.state.tel;
      var telReg = /0?(13|14|15|18|17)[0-9]{9}/;
      var username = this.$store.state.username;
      if (username !== "") {
        if (telReg.test(tel)) {
          if (
            this.getListData.province !== "" &&
            this.getListData.city !== "" &&
            this.getListData.district !== ""
          ) {
            if (this.$store.state.dizhi !== "") {
              var list = [];
              this.goods.forEach((item, i) => {
                list.push(item.goodid);
              });
              http
                .post("/vue/jiesuan", {
                  list,
                  username: aesDecrypt(localStorage.username, "wh1811"),
                })
                .then(res => {
                  console.log(res);
                  this.$router.push({ name: "dingdan" });
                  this.$store.dispatch("jiesuansucee")
                });
            } else {
              Toast({
                message: "请填写详细地址",
                iconClass: "icon icon-success"
              });
            }
          } else {
            Toast({
              message: "请选择省市区",
              iconClass: "icon icon-success"
            });
          }
        } else {
          Toast({
            message: "请输入常用的电话号码",
            iconClass: "icon icon-success"
          });
        }
      } else {
        Toast({
          message: "姓名很重要！不能为空哦",
          iconClass: "icon icon-success"
        });
      }
    }
  },
  components: { VDistpicker },
  computed: {
    zongnum: {
      get() {
        var zongnum = 0;
        this.goods.forEach(item => {
          zongnum += item.num * (item.goodprice.split(",").join("") * 1);
        });
        return zongnum.toFixed(2);
      }
    },
    username: {
      get() {
        return this.$store.state.usrname;
      },
      set(val) {
        this.$store.commit("Changename", val);
      }
    },
    tel: {
      get() {
        return this.$store.state.tel;
      },
      set(val) {
        this.$store.commit("Changetel", val);
      }
    },
    dizhi: {
      get() {
        return this.$store.state.dizhi;
      },
      set(val) {
        this.$store.commit("Changedizhi", val);
      }
    }
  },
  mounted() {
    http
      .post("/vue/userjiesuan", {
        list: this.$route.params.list,
        username: aesDecrypt(localStorage.username, "wh1811")
      })
      .then(res => {
        if (res.data.type == 1) {
          this.goods = res.data.result;
          console.log(this.goods);
        }
      });
  }
};
</script>
<style lang="scss" scoped>
h3 {
  width: 1.5rem;
  background-color: #000;
  line-height: 1rem;
  color: #fff;
  text-align: center;
  font-size: 0.4rem;
  margin: 0.2rem auto;
}
.zongnum {
  font-size: 0.4rem;
  line-height: 0.6rem;
  margin: 0.1rem auto;
}
.dizhi11 {
  overflow: hidden;
  border: 1px rgb(15, 15, 15) solid;
  margin-bottom: 0.2rem;

  label {
    float: left;
    line-height: 1rem;
    font-size: 0.24rem;
    width: 1.4rem;
    padding-left: 0.2rem;
  }
}
.dizhi {
  width: 98%;
  margin: 0.5rem auto;
  .name {
    width: 100%;
    height: 1rem;
    overflow: hidden;
    border: 1px rgb(15, 15, 15) solid;
    margin-bottom: 0.2rem;
    label {
      float: left;
      line-height: 1rem;
      font-size: 0.24rem;
      width: 1.4rem;
      padding-left: 0.2rem;
    }
    input {
      float: left;
      height: 0.8rem;
      border: 1px rgb(233, 230, 230) solid;
      margin-top: 0.08rem;
      width: 5rem;
      font-size: 0.24rem;
    }
  }
  .qu {
    width: 100%;
    height: 1rem;
    overflow: hidden;
    border: 1px rgb(15, 15, 15) solid;
    margin-bottom: 0.2rem;
    label {
      float: left;
      line-height: 1rem;
      font-size: 0.24rem;
      width: 1.4rem;
      padding-left: 0.2rem;
    }
    p {
      float: left;
      height: 0.8rem;
      line-height: 0.8rem;
      border: 1px rgb(233, 230, 230) solid;
      margin-top: 0.08rem;
      width: 5rem;
      font-size: 0.24rem;
    }
  }
  .tel {
    width: 100%;
    height: 1rem;
    overflow: hidden;
    border: 1px rgb(15, 15, 15) solid;
    margin-bottom: 0.2rem;

    label {
      float: left;
      line-height: 1rem;
      width: 1.4rem;
      font-size: 0.24rem;
      padding-left: 0.2rem;
    }
    input {
      float: left;
      height: 0.8rem;
      margin-top: 0.08rem;
      width: 5rem;
      border: 1px rgb(233, 230, 230) solid;

      font-size: 0.24rem;
    }
  }
}
.div {
  width: 100%;
  ul {
    width: 98%;
    margin: 0 auto;
    overflow: hidden;
    li {
      width: 100%;
      overflow: hidden;
      padding-bottom: 0.18rem;
      border-bottom: 1px solid rgb(135, 132, 132);

      .divimg {
        float: left;
        margin-top: 0.1rem;
        img {
          width: 2.6rem;
          height: 2.6rem;
          margin-left: 0.15rem;
        }
      }
      .divh1 {
        float: left;
        margin-top: 0.2rem;
        margin-left: 0.3rem;
        width: 3.6rem;
        h1 {
          font-size: 0.24rem;
          text-align: center;
        }
        p {
          line-height: 0.4rem;
          margin-top: 0.2rem;
        }
      }
    }
  }
}
</style>
