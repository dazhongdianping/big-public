import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

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
