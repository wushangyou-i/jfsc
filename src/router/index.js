import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/aa'
// import index from '../pages/index/index'
const index = r => require.ensure([], () => r(require('../pages/index/index')), 'index')
const plist = r => require.ensure([], () => r(require('../pages/product/list')), 'list')
const custome = r => require.ensure([], () => r(require('../pages/custome/custome')), 'custome')
const user = r => require.ensure([], () => r(require('../pages/user/user')), 'user')
const detail = r => require.ensure([], () => r(require('../pages/product/detail')), 'detail')



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aa',
      name: 'test',
      component: test
    },
    {
      path: '/list',
      name: 'plist',
      component: plist
    },
    {
      path: '/custome',
      name: 'custome',
      component: custome
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
