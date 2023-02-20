import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
/* eslint-disable */

Vue.use(Vuex)

const store = new Vuex.Store({
  state() {
    return {
      // 就是公共的数据，所有的组件都可以直接使用
      appName: 'QiushanStudy',
      appLabel: '秋山',
      logo: require(`../imgs/logo.svg`),
      author: '秋山',
      avatar: require(`../imgs/avatar.jpg`)
    }
  },
  modules: {
    myHome: {
      // namespaced为true，则在使用mutations时，就必须要加上模块名
      namespaced: true,
      state() {
        return {
          count: 100,
          list: 0
        }
      },
      actions: {
        // 定义了一个action，用于查询接口数据
        async queryData(context, payload = 0) {
          // 调用接口获取数据
          const ret = await axios.get('http://test.zjie.wang/tab')
          // 必须触发mutation修改list的值
          // context类似于this.$store
          context.commit('updateList', ret.data.list)
        }
      },
      mutations: {
        updateList(state, payload) {
          state.list = payload
        }
      },
      getters: {
        getPartList(state) {
          return state.list.filter(item => {
            return item.id > 1
          })
        }
      },
      modules: {}
    }
  }
})
export default store