<template>
  <div>
    <Header title="购物车" :show="!!0"></Header>
    <div class="mine" v-if="!denglu">
      <i class="iconfont">&#xe617;</i>
      <p>您还未登录哦</p>
      <div class="foot">
        <mt-button size="small" type="default" @click="login">登录</mt-button>
        <mt-button size="small" type="primary" @click="zhuce">注册</mt-button>
      </div>
    </div>
    <div v-else>
      <div v-if="flag">
        <div class="car">
          <h1 class="carh1 iconfont">&#xe650; 购物车({{goods.length}})</h1>
          <ul>
            <li v-for="(good,i) in goods" :key="i">
              <p class="check">
                <input type="checkbox" v-model="good.check">
              </p>
              <div class="carimg">
                <img alt :src="good.goodimg">
              </div>
              <div class="cartitle">
                <h1>{{good.goodtitle}}</h1>
                <div class="addnum">
                  <p id="reduce" @click="reduce(i)">-</p>
                  <p>{{good.num}}</p>
                  <p id="add" @click="add(i)">+</p>
                </div>
              </div>
              <div class="carprice">
                <span @click="remove(i)">×</span>
                <p>￥ {{((good.goodprice).split(",").join("")*1)*good.num}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="jiesuan">
          <p class="check2">
            <input type="checkbox" v-model="quan">
            <span>全选</span>
          </p>
          <div class="jieright">
            <div class="jieleft">
              <span>合计:</span>
              <span class="span2">￥ {{total}}</span>
            </div>
            <div class="jibtn">
              <span @click="jiesuan">结算( {{zongnum}} )</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h1 class="weidenglu">空空如也，赶快去选购商品吧!(๑´ㅂ`๑)</h1>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../store";
import { mapState, mapActions, mapMutations } from "vuex";
import { http, aesDecrypt } from "../utils";
import { setTimeout } from "timers";
import { Indicator, Toast, Navbar, TabItem, MessageBox } from "mint-ui";
import { constants } from "crypto";
export default {
  data() {
    return {
      flag: "",
      goods: [],
      denglu: localStorage.username,
    };
  },
  computed: {
    quan: {
      get() {
        var flag = true;
        this.goods.forEach(item => {
          if (!item.check) {
            flag = false;
          }
        });
        return flag;
      },
      set(val) {
        this.goods = this.goods.map(item => {
          item.check = val;
          return item;
        });
      }
    },
    total: {
      get() {
        var total = 0;
        this.goods.forEach(item => {
          if (item.check) {
            total += item.num * (item.goodprice.split(",").join("") * 1);
          }
        });
        return total.toFixed(2);
      },
      set() {}
    },
    zongnum: {
      get() {
        var zongnum = 0;
        this.goods.forEach(item => {
          if (item.check) {
            zongnum++;
          }
        });
        return zongnum;
      }
    }
  },
  methods: {
    ...mapActions(["getCarNum"]),
    jiesuan() {
        var username=aesDecrypt(localStorage.username, "wh1811")
      if (this.zongnum == 0) {
        Toast("请选择结算的商品");
      } else {
        var list = [];
        this.goods.forEach(item => {
          if (item.check) {
            list.push(item.goodid);
          }
        });
      
        this.$router.push({
          name: "jiesuan",
          params: {
            list
          }
        });
      }
    },
    add(i) {
      this.goods[i].num++;
      http
        .post("/vue/setnum", {
          params: {
            num: this.goods[i].num,
            goodid: this.goods[i].goodid,
            username: aesDecrypt(localStorage.username, "wh1811")
          }
        })
        .then(res => {});
    },
    reduce(i) {
      if (this.goods[i].num > 1) {
        this.goods[i].num--;
        http
          .post("/vue/setnum", {
            params: {
              num: this.goods[i].num,
              goodid: this.goods[i].goodid,
              username: aesDecrypt(localStorage.username, "wh1811")
            }
          })
          .then(res => {});
      }
    },
    remove(i) {
      MessageBox.confirm("确定删除该商品吗?").then(
        action => {
          //确定
          http
            .post("/vue/removeGood", {
              params: {
                goodid: this.goods[i].goodid,
                username: aesDecrypt(localStorage.username, "wh1811")
              }
            })
            .then(res => {
              if (res.data.type == 1) {
                Toast(res.data.msg);
                this.goods.splice(i, 1);
                var num = this.goods.length;
                this.getCarNum({ carnum: num });
              } else {
                Toast(res.data.msg);
              }
            });
        },
        rejected => {
          //取消
        }
      );
    },
    login() {
      this.$router.push({ name: "login" });
    },
    zhuce() {
      this.$router.push({ name: "zhuce" });
    }
  },
  mounted() {
    http
      .get("/vue/getusergood", {
        params: { username: aesDecrypt(localStorage.username, "wh1811") }
      })
      .then(res => {
        if (res.data.type == 1) {
          this.flag = true;
          this.goods = res.data.result;
          var num = this.goods.length;
          this.getCarNum({ carnum: num });
        } else {
          this.getCarNum({ carnum: 0 })
          this.flag = false;
        }
      });
      if(localStorage.username){

      }else{
        this.getCarNum({ carnum: 0 })
      }
  }
};
</script>
<style lang="scss" scoped>
.jiesuan {
  position: fixed;
  bottom: 1.2rem;
  left: 0;
  width: 100%;
  height: 1.1rem;
  z-index: 15;
  background-color: rgb(214, 211, 211);
  .check2 {
    float: left;
    line-height: 1.1rem;
    text-align: center;
    padding-left: 0.2rem;
    input {
      height: 0.3rem;
      width: 0.3rem;
      padding-top: 0.35rem;
    }
    span {
      font-size: 0.46rem;
      padding-left: 0.3rem;
    }
  }
  .jieright {
    float: right;
    height: 1.1rem;
    .jieleft {
      float: left;
      line-height: 1.1rem;
      color: rgb(148, 146, 146);
      .span2 {
        color: #000;
        font-size: 0.4rem;
      }
    }
    .jibtn {
      float: left;
      height: 0.8rem;
      background-color: #000;
      color: #fff;
      line-height: 0.8rem;
      margin-top: 0.15rem;
      border-radius: 0.4rem;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
  }
}
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

.weidenglu {
  // margin-top: 40%;
  line-height: 1.5rem;
  width: 5rem;
  margin: 30% auto;
  font-size: 0.7rem;
  text-align: center;
}
.car {
  width: 100%;
  .carh1 {
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.5rem;
  }
  ul {
    margin-top: 0.2rem;
    width: 95%;
    margin: 0 auto;
    padding-bottom: 2.5rem;
    li {
      border-bottom: 1px rgb(150, 147, 147) solid;
      height: 3rem;
      .check {
        float: left;
        width: 0.5rem;
        text-align: center;
        line-height: 3rem;
        input {
          height: 0.3rem;
          width: 0.3rem;
        }
      }
      .carimg {
        float: left;
        margin-left: 0.1rem;
        width: 2.4rem;
        height: 2.4rem;
        margin-top: 0.4rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .cartitle {
        float: left;
        margin-left: 0.2rem;
        width: 2rem;
        height: 3rem;
        h1 {
          font-size: 0.2rem;
          text-align: center;
          line-height: 0.3rem;
          margin-top: 0.2rem;
        }
        .addnum {
          border: 1px rgb(199, 192, 192) solid;
          height: 0.7rem;
          margin: 0.5rem auto;
          overflow: hidden;
          margin-left: 0.2rem;
          float: left;
          p {
            float: left;
            text-align: center;
            display: block;
            padding-left: 0.2rem;
            padding-right: 0.2rem;
            height: 0.7rem;
            line-height: 0.7rem;
            font-size: 0.2rem;
            color: rgb(105, 102, 102);
          }
        }
      }
      .carprice {
        float: right;
        position: relative;
        width: 1.7rem;
        height: 3rem;
        span {
          position: absolute;
          right: 0.1rem;
          top: 0.2rem;
          font-size: 0.44rem;
        }
        p {
          position: absolute;
          right: 0.1rem;
          bottom: 0.2rem;
          font-size: 0.2rem;
          text-align: left;
        }
      }
    }
  }
}
</style>
