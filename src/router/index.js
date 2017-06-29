import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Person from '@/components/Person'
import Dl from '@/components/Dl'
import Zc from '@/components/Zc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Person',
      name: 'Person',
      component: Person
    },
    {
      path: '/Dl',
      name: 'Dl',
      component: Dl
    },
    {
      path: '/Zc',
      name: 'Zc',
      component: Zc
    }
  ]
})
