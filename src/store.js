import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isLogin:0,
      userName:'',
      headState:1,
      headStateGoBack:1
  },
  mutations: {
    awsl(state,{mapping,data,fn,type})
    {
      typeof type=='undefined'?type='post':type
      axios({
        method: type,
        url: mapping,
        data
      }).then(function (res) {
        fn(res)
      }).catch(function (err) {
        console.log(err)
      })
    },
  },
  actions: {

  }
})
