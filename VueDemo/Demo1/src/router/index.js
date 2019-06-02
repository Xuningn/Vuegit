import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import(/* webpackChunkName: "group-home" */ '@/components/HelloWorld')
    },
    {
      path: '/todolist',
      name: 'ToDoList',
      component: () => import(/* webpackChunkName: "group-home" */ '@/components/ToDoList')
    },
    {
      path: '/father',
      name: 'Father',
      component: () => import(/* webpackChunkName: "group-home" */ '@/components/Father')
    },
    {
      path: '/child1',
      name: 'Child1',
      component: () => import(/* webpackChunkName: "group-home" */ '@/components/Child1')
    },
    {
      path: '/child2',
      name: 'Child2',
      component: () => import(/* webpackChunkName: "group-home" */ '@/components/Child2')
    },
    {
      path: '/child3',
      name: 'Child3',
      component: () => import(/* webpackChunkName: "group-home" */ '@/components/Child3')
    }
  ]
})
