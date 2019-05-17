<template>
  <div>
    <ul>
      <mt-loadmore :top-method="loadTop"  ref="loadmore">
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
      </mt-loadmore>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["type", "goodlist"],
  data() {
    return {
      goods: [],
      tubiao: "&#xe76a;",
        allLoaded:false,
            loading:false,
    };
  },

  mounted() {
    this.goods = this.goodlist.filter(
      good => good.types.nameE == this.type.nameE
    );
  },
  methods: {
    loadTop() {
      setTimeout(() => {
        // this.goods.reverse(); // 若数据已全部获取完毕
        this.goods.sort(function(){
          return Math.random() - 0.5
        })
        this.$refs.loadmore.onTopLoaded();
        Toast({
          message: "刷新成功",
          duration: 500
        });
      }, 1000);
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
    height: 5.5rem;
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

