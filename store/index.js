import Vue from 'vue'
import Vuex from 'vuex'
import mutations from 'mutation.js'
import actions from 'actions.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userName: ""
	},
  mutations,
  actions,
})

export default store
