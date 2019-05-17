<template>
  <div>
    <Header :show="!!1"></Header>
    <mt-search cancel-text="取消" placeholder="请输入搜索内容" @input="search" v-model="inpval">
      <div>
        <ul>
          <router-link
            v-for="(good ,i) in goods"
            :key="i"
            :id="good._id"
            tag="li"
            :to="{name:'good_details',params:{goodid:good._id}}"
          >
            <div class="goodimg">
              <img :src="good.img" alt>
            </div>
            <p>{{good.title}}</p>
            <span>￥{{good.price}}</span>
          </router-link>
        </ul>
      </div>
    </mt-search>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { http } from "../utils";
export default {
  data() {
    return {
      result: [],
      goods:[]
    };
  },
  computed: {
    inpval: {
      get() {
        return this.$store.state.inpval;
      },
      set(val) {
        this.$store.commit("setinpval", val);
      }
    }
  },
  methods: {
    search() {
      if (this.$store.state.inpval !== "") {
        http
          .post("/vue/search", { title: this.$store.state.inpval })
          .then(res => {
            console.log(res.data.result)
            this.goods=res.data.result
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
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

