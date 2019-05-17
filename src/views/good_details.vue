<template >
  <div>
    <Header :show="!!1"></Header>
    <div class="goods">
      <div class="good_img">
        <img :src="info.img" alt>
      </div>
      <h1>{{info.title}}</h1>
      <p class="good_p">￥ {{info.price}}</p>
      <div class="addnum">
        <p id="reduce" @click="reduce">-</p>
        <p>{{goodnum}}</p>
        <p id="add" @click="add">+</p>
      </div>
      <div class="shop">
        <p class="shop_p1" @click="xuangou">立即选购</p>
        <p class="shop_p2" @click="addgood">加入购物袋</p>
      </div>
    </div>
    <div style="display:block">
      <h1>热销单品</h1>
      <ul>
        <router-link
          v-for="(good ,i) in goods"
          :key="i"
          :id="good._id"
          :to="{name:'good_details',params:{goodid:good._id}}"
          tag="li"
        >
          <div class="goodimg">
            <img v-lazy="good.img" alt>
          </div>
          <p>{{good.title}}</p>
          <span>￥{{good.price}}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { http, aesDecrypt } from "../utils";
import { Indicator, Toast, Navbar, TabItem ,MessageBox} from "mint-ui";
export default {
  data() {
    return {
      goods: [],
      info: []
    };
  },
  computed: {
    ...mapState(["tuijian", "goodnum"])
  },
  methods: {
    ...mapActions(["gettuijian"]),
    add() {
      this.$store.state.goodnum++;
    },
    reduce() {
      if (this.$store.state.goodnum > 1) {
        this.$store.state.goodnum--;
      }
    },
    //添加购物车
    addgood() {
      var goodid = this.info._id;
      if (localStorage.username) {
        http
          .post("/vue/cunUserGood", {
            params: {
              goodimg: this.info.img,
              goodid: goodid,
              goodtitle: this.info.title,
              goodprice: this.info.price,
              num: this.$store.state.goodnum,
              username: aesDecrypt(localStorage.username, "wh1811"),
              check:false,
              jiesuan:0
            }
          })
          .then(res => {
            if (res.data.type == 1) {
              Toast("已添加至购物车")
            }
          });
      } else {
        MessageBox.confirm("还未登录，请立即登录?").then(
          action => {
            localStorage.goodid = goodid;
            this.$router.push({ name: "login" });
          },
          rejected => {}
        );
      }
    },
    //立即选购
    xuangou(){
      var goodid = this.info._id;
      if (localStorage.username) {
        var time = new Date();
        console.log("qqqqq");
        http
          .post("/vue/cunUserGood", {
            params: {
              goodimg: this.info.img,
              goodid: goodid,
              goodtitle: this.info.title,
              goodprice: this.info.price,
              num: this.$store.state.goodnum,
              username: aesDecrypt(localStorage.username, "wh1811"),
              check:false,
              jiesuan:0
            }
          })
          .then(res => {
            if (res.data.type == 1) {
              this.$router.push({ name: "car" });
              Toast("跳转购物车")
            }
          });
      } else {
        MessageBox.confirm("还未登录，请立即登录?").then(
          action => {
            localStorage.goodid = goodid;
            this.$router.push({ name: "login" });
          },
          rejected => {}
        );
      }
    }
  },
  mounted() {
    this.gettuijian({
      url: "/vue/tuijian",
      cb: res => {
        this.goods = res.result;
      }
    });
    var good_id = this.$route.params.goodid;
    http.get("/vue/goodinfo", { params: { id: good_id } }).then(res => {
      this.info = res.data.result;
    });
  }
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
  line-height: 0.6rem;
}
.goods {
  width: 100%;
  margin-top: 0.2rem;
  .good_img {
    width: 100%;
    text-align: center;
    img {
      width: 95%;
      display: inline-block;
      height: 5rem;
    }
  }
  h1 {
    line-height: 0.7rem;
    font-size: 0.3rem;
  }
  .good_p {
    text-align: center;
    line-height: 0.9rem;
    font-size: 0.6rem;
  }
  .addnum {
    border: 1px rgb(199, 192, 192) solid;
    width: 3rem;
    height: 1rem;
    margin: 0.2rem auto;
    overflow: hidden;
    p {
      float: left;
      text-align: center;
      display: block;
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.4rem;
      color: rgb(105, 102, 102);
    }
  }
  .shop {
    width: 95%;
    border-top: 1px rgb(148, 144, 144) solid;
    margin: 0 auto;
    padding-top: 0.6rem;
    p {
      width: 4rem;
      height: 1rem;
      margin: 0.2rem auto;
      text-align: center;
      color: #fff;
      line-height: 1rem;
    }
    .shop_p1 {
      background-color: rgb(35, 17, 97);
    }
    .shop_p2 {
      background-color: rgb(109, 100, 143);
    }
  }
}

ul {
  width: 100%;
  margin-top: 0.2rem;
  li {
    float: left;
    width: 3.5rem;
    height: 6rem;
    text-align: center;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    margin-top: 0.1rem;
    .goodimg {
      width: 100%;
      text-align: center;
      img {
        width: 3rem;
        height: 3rem;
        display: inline-block;
        animation: zoomIn 2s;
      }
    }
    .xihuan {
      width: 100%;
      text-align: center;
      margin-top: 0.2rem;
      i {
        width: 0.3rem;
        height: 0.5rem;
        line-height: 0.5rem;
        display: inline-block;
        border-top: 1px #333 solid;
        border-bottom: 1px #333 solid;
      }
    }
    p {
      text-align: center;
      line-height: 0.5rem;
    }
    span {
      text-align: center;
      display: inline-block;
      line-height: 0.5rem;
    }
  }
}
</style>
