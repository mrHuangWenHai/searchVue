import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Search from '@/components/Search'
import Show from '@/components/Show'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path:'/show',
      name:'Show',
      component: Show
    }
  ]
})
