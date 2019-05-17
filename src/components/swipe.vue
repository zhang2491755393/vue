<template>
  <div class="banner">
    <mt-swipe :auto='auto' class="b-b">
      <mt-swipe-item v-for="(b,i) in banner" :key="i">
        <img :src="b.url" alt class="b-img" :value="b.value">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["banner",'auto'])
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 4rem;
  .b-b {
    width: 100%;
    height: 4rem;
    img{
        width: 100%;
        height: 100%;
    }
  }
}
</style>
