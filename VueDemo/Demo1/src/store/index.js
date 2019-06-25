import  Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
// 全局状态管理
const state = {
    menus: [{
      path: '/HelloWorld',
      name: '导航1'
    }, {
      path: '/Father',
      name: '导航2'
    }, {
      path: '/ToDoList',
      name: '导航3'
    }]
}

export default new Vuex.Store({
  state
})
