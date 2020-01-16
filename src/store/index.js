import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    item: {
      hello: 'world'
    },
    isComponentVisible: true
  }
})

export default store
