<template id='index'>
  <div>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from "../components/foot.vue";
export default {
  name: "index",
  data() {
    return {
      msg: "欢迎来到主页"
    };
  },
  components: {
    Foot
  },
  methods: {
    GoSearch() {
      this.$router.push({ name: "search" });
    }
  },
};
</script>


