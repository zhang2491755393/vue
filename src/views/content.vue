<template >
  <div id="content">
    <Header title="首页" :show="!!0"></Header>
    <Swipe></Swipe>
    <div class="c-content">
      <div class="c-img">
        <div>
          <img
            src="https://www.swarovski.com.cn/_ui/responsive/theme-swarovski/images/divider/01.svg"
            alt
          >
        </div>
        <p>系列亮点</p>
      </div>
      <!-- 项链 -->
      <div class="c-necklace" @click="goNecklace">
        <div class="c-necklace-img">
          <img
            src="https://www.swarovski.com.cn/medias/SS19-MD-VISUAL-SPARKLING-DANCE-SL-GL-TS-MOB.jpg?context=bWFzdGVyfGltYWdlc3wxOTE2NTB8aW1hZ2UvanBlZ3xpbWFnZXMvaDk0L2g5OC85MTI1NjM1OTE1ODA2LmpwZ3xkZTg3YjA0ZmJjYTc3MDkxNDAzOTIxNzUxNWE4OGI5NTE5NjM2NTdkOWVkZDcxMzliNWM2NWUwMDJkNzI0ZTY4fDE1NTAyMjMwNzUzNDE"
            alt
          >
        </div>
        <p class="c-necklace-p1">项链</p>
        <p class="c-necklace-p2">立即抢购</p>
      </div>
      <!-- 耳环 -->
      <div class="c-necklace" @click="goEarrings">
        <div class="c-necklace-img">
          <img
            src="https://www.swarovski.com.cn/medias/SS19-MD-BTS-1-PF-GL-TS-MOB.jpg?context=bWFzdGVyfGltYWdlc3w4NzU1N3xpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDY0LzkxMjU2MzY4OTg4NDYuanBnfGMwMmU2NGY3MDcwODQ5NjQ1N2RhZDY2NjRmYWVjYjQ4NjM4NTY0Y2VjNjMwMTU4YWY1Y2RiMjViNTQzZjY5Y2N8MTU1MDIyMzA3NTM0MA"
            alt
          >
        </div>
        <p class="c-necklace-p1">耳环</p>
        <p class="c-necklace-p2">立即抢购</p>
      </div>
      <div class="four">
        <ul>
          <li v-for='(cc,i) in content ' :key="i" :value="cc.value">
            <img :src="cc.url" alt>
            <p>{{cc.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      msg: "主页成功"
    };
  },
  methods: {
    //项链
    goNecklace() {},
    //耳环
    goEarrings() {}
  },
  computed: {
    ...mapState(["content"])
  }
};
</script>
<style lang="scss" scoped>
#content {
  .c-content {
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
    .c-img {
      width: 100%;
      height: 1.8rem;
      margin: 0 auto;
      div {
        width: 1rem;
        height: 1rem;
        margin: 0 auto;
        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
    .c-necklace {
      margin-top: 0.1rem;
      margin-bottom: 0.6rem;
      width: 100%;
      background-color: rgb(246, 246, 246);
      overflow: hidden;
      .c-necklace-img {
        img {
          // // // width: 100%;
          margin-left: -2.5rem;
          height: 5.6rem;
        }
      }
      .c-necklace-p1 {
        line-height: 0.7rem;
        margin-top: 0.2rem;
        font-size: 0.45rem;
        letter-spacing: 0.07em;
      }
      .c-necklace-p2 {
        line-height: 0.5rem;
        font-size: 0.3rem;
        letter-spacing: 0.07em;
        margin-bottom: 0.1rem;
      }
    }
    .four{
      width: 100%;
      ul{
        width: 100%;

        li{
          float: left;
          width: 3.65rem;
          // height: 2.28rem;
          background-color: rgb(246, 246, 246);
          margin-right: 0.05rem;
          margin-left: 0.05rem;
          margin-bottom: 0.3rem;
          img{
            width: 100%;
            height: 4rem;
          }
          p{
            line-height: 1.5rem;
            padding-bottom: 0.4rem;
          }
        }
      }
    }
  }
}
</style>

