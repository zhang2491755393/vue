<template>
  <div>
    <Header :show="!!1"></Header>
    <mt-cell title="用户名" :value="info.username"></mt-cell>
    <mt-cell title="昵称" :value="info.usernick"></mt-cell>
    <mt-cell title="手机号" :value="info.tel"></mt-cell>
    <mt-cell title="生日" :value="info.birthday"></mt-cell>
  </div>
</template>
<script>
import {http} from "../utils";
export default {
    data(){
        return {
            info:'',
        }
    },
  mounted() {
    console.log(this.$route.params);
    http.post("/vue/ziliao", {
      username: this.$route.params.username
    }).then(res=>{
        console.log(res.data.result)
        if(res.data.type==1){
            this.info=res.data.result
        }
    })
    ;
  }
};
</script>
