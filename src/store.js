import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isLogin:false,
      token:null,
      userName:null,
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
    ChangeState:function (state,config) {
      console.log(config.name,config.value)
      state[config.name]=config.value
    },
  },
  actions: {

  },
  getters: {
    /**
     * @return {boolean}
     */
    getToken(state) {return state.token}
    ,
    LoginMeg(state) {return state.isLogin;}
  },
})
