import Vue from 'vue'
import Vuex from 'vuex'
import { http } from "./utils"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1811,
    show: "",
    auto: 4000,
    city: "武汉",
    username: "",
    usernick: "",
    password: "",
    password1: "",
    password2: "",
    selected: "necklace",
    inpval: '',
    tel: "",
    dizhi: '',
    carnum: 0,
    birthday: "",
    goodlist: [],
    tuijian: [],
    goodnum: 1,
    goodid: "",
    banner: [
      { url: require("./assets/images/lun1.jpg"), name: "项链", value: "necklace" },
      { url: require("./assets/images/lun2.jpg"), name: "耳环", value: "earrings" },
      { url: require("./assets/images/lun3.jpg"), name: "手表", value: "watch" },
    ],
    content: [
      { url: "https://www.swarovski.com.cn/medias/SS19-MD-VISUAL-VINTAGE-SL-GL-TF-S-MOB.jpg?context=bWFzdGVyfGltYWdlc3wxOTM3OXxpbWFnZS9qcGVnfGltYWdlcy9oMDIvaGYxLzkxMjU2NDA0Mzc3OTAuanBnfGQ0MjNjMmNhNjI0NzIwNGVmYTA0NzdhZmQ2NWY3MzgzNmZmN2ZkODE5YzhlNTQ1NTVhYTkyYTBlZmMyNWY1NDB8MTU1MDIzMTY1ODMyNw", name: "手链", value: "bracelet" },
      { url: "https://www.swarovski.com.cn/medias/SS19-MD-BTS-3-PF-GL-TF-S-MOB.jpg?context=bWFzdGVyfGltYWdlc3w3NTY1fGltYWdlL2pwZWd8aW1hZ2VzL2g0Ny9oNzAvOTEyNjg1NTMxMTM5MC5qcGd8NTcxNTA0NDE1MGExMjlhY2NjMmNjYTJiMGFmOGM4NTBkOTVmNzc1NzgyYzFhMWM3NTYzZDk1MmVlMzE3NjQ0NHwxNTUwMjM3NDMzNDA2", name: "戒指", value: "ring" },
      { url: "https://www.swarovski.com.cn/medias/SS19-MD-VISUAL-CRYSTALLINE-GLAM-SL-GL-TF-S-MOB.jpg?context=bWFzdGVyfGltYWdlc3wxOTU3MHxpbWFnZS9qcGVnfGltYWdlcy9oZWUvaDRhLzkxMjY4NTYzNTk5NjYuanBnfDMyNzk5YjQyOWYxNmZlN2RkNzBjNjI1YTQxNjk1YjlkYTQwYTk3NGY4MTZmYmIzYmJmYTJlMmRhODNmZTQ5Yzl8MTU1MDIzODEzMzE1MA", name: "手表", value: "watch" },
      { url: "https://www.swarovski.com.cn/medias/SS19-MD-VISUAL-SUNSHINE-FAMILY-SL-GL-TF-S-MOB.jpg?context=bWFzdGVyfGltYWdlc3wxODE5MXxpbWFnZS9qcGVnfGltYWdlcy9oODQvaDlhLzkxMjY4NTY2ODc2NDYuanBnfGYzYTdhODRiMTk3OWEzMjZkYWMyNzkxYzg5NjUwMGY2NmNmNjJhODA0MzE5OTRhMGFjMjIxNDgxMzBhY2RhMGJ8MTU1MDIzODEzMzE1MQ", name: "配饰", value: "acc" },
    ]
  },
  actions: {   //将state派发的提交到mutation
    addcount(context) {
      context.commit('addcount');

    },
    setinpval({ commit }, value) {
      commit("setinpval", value);
    },
    tuichuNum({ commit }) {
      commit('tuichuNum')
    },
    changcount({ commit }, value) {//提交commit到mutation
      commit("changcount", value);
    },
    username({ commit }, value) {
      commit("username", value);
    },
    AddUser({ commit }, { url, params, cb }) {
      http.post(url, {
        params
      }).then(res => {
        cb(res);
        commit("AddUser", res.data.result);
      })
    },
    UserLogin({ commit }, { url, params, cb }) {
      http.post(url, {
        params
      }).then(res => {
        cb(res.data);
        commit("UserLogin", res.data.result)
      })
    },
    xiugaipwd({ commit }, { url, params, cb }) {
      http.post(url, {
        params
      }).then(res => {
        cb(res.data);
        commit("xiugaipwd", res.data.result)
      })
    },
    getGoodList({ commit }, { url, cb }) {
      http.get(url, {}).then(res => {
        setTimeout(() => {
          commit('getGoodList', res.data.result)
          cb(res.data);
        }, 1000);

      })
    },
    gettuijian({ commit }, { url, cb }) {
      http.get(url, {}).then(res => {
        commit('gettuijian', res.data.result);
        cb(res.data);
      })
    },
    xiugaigoodnum(content) {
      content.commit("xiugaigoodnum");
    },
    getCarNum({ commit }, { carnum }) {
      commit('getCarNum', carnum)
    },
    Changedizhi({ commit }, { carnum }) {
      commit('Changedizhi', carnum)
    },
    jiesuansucee({ commit }) {
      commit('jiesuansucee')
    }
  },
  mutations: {
    jiesuansucee(state) {
   
      state.dizhi = '';
    },
    tuichuNum(state) {
      state.carnum = 0;
      state.inpval = ''
    },
    Changedizhi(state, val) {
      state.dizhi = val;
    },
    setinpval(state, val) {
      state.inpval = val
    },
    addcount(state) {
      state.count += 10
    },
    changcount(state, value) {
      state.count = value;
    },
    changCity(state, value) {
      state.city = value
    },
    Changename(state, value) {
      state.username = value;
    },
    Changenick(state, val) {
      state.usernick = val;
    },
    Changepassword(state, val) {
      state.password = val;
    },
    Changepassword1(state, val) {
      state.password1 = val;
    },
    Changepassword2(state, val) {
      state.password2 = val;
    },
    Changetel(state, val) {
      state.tel = val;
    },
    Changebirthday(state, val) {
      state.birthday = val;
    },
    AddUser(state, val) {
      state.username = "";
      state.usernick = '';
      state.password = '';
      state.password2 = '';
      state.tel = '';
      state.birthday = '';
    },
    UserLogin(state, val) {
      state.username = "";
      state.usernick = '';
      state.password = '';
      state.password2 = '';
      state.tel = '';
      state.birthday = '';
    },
    xiugaipwd(state, val) {
      state.username = "";
      state.usernick = '';
      state.password = '';
      state.password2 = '';
      state.tel = '';
      state.birthday = '';
    },
    getGoodList(state, val) {
      state.goodlist = val;
    },
    gettuijian(state, val) {
      state.tuijian = val;
    },
    xiugaigoodnum(state) {
      state.goodnum = 1;
    },
    getCarNum(state, val) {
      state.carnum = val;
    }
  }
})
