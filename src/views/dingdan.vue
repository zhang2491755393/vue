<template>
  <div>
    <Header :show="!!1"></Header>
    <div class="div" v-if="val">
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
            <p>时间：{{good.time}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <h1>暂未订单数据</h1>
    </div>
  </div>
</template>
<script>
import { http, aesDecrypt } from "../utils";
import { Indicator, Toast, Navbar, TabItem, MessageBox, Picker } from "mint-ui";
import { truncate } from "fs";
export default {
  data() {
    return {
      goods: [],
      val: false
    };
  },
  mounted() {
       Indicator.open({
      text: "加载中...",
      spinnerType: "triple-bounce"
    });
    var username = aesDecrypt(localStorage.username, "wh1811");
    http.get("/vue/dingdan", { params: { username } }).then(res => {
      setTimeout(() => {
      if (res.data.result.length > 0) {
        this.goods = res.data.result;
        this.val = true;
        Indicator.close();
      } else {
        this.val = false;
        Indicator.close();
      }
             }, 1000);
    });
  }
};
</script>
<style lang="scss" scoped>
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
