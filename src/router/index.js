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
const pchange = r => require.ensure([], () => r(require('../pages/product/pchange')), 'pchange')
const adress = r => require.ensure([], () => r(require('../pages/adress/adress')), 'adress')
const add = r => require.ensure([], () => r(require('../pages/adress/add')), 'add')
const info = r => require.ensure([], () => r(require('../pages/user/info')), 'info')
const order = r => require.ensure([], () => r(require('../pages/user/order')), 'order')
const code = r => require.ensure([], () => r(require('../pages/user/code')), 'code')
const security = r => require.ensure([], () => r(require('../pages/user/security')), 'security')
const password = r => require.ensure([], () => r(require('../pages/user/password/password')), 'password')
const iphone = r => require.ensure([], () => r(require('../pages/user/password/iphone')), 'iphone')
const set = r => require.ensure([], () => r(require('../pages/user/set')), 'set')
const about = r => require.ensure([], () => r(require('../pages/user/set/about')), 'about')
const message = r => require.ensure([], () => r(require('../pages/user/set/message')), 'message')

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
      path: '/pchange',
      name: 'pchange',
      component: pchange
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/adress',
      name: 'adress',
      component: adress
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/code',
      name: 'code',
      component: code
    },
    {
      path: '/security',
      name: 'security',
      component: security
    },
    {
      path: '/password',
      name: 'password',
      component: password
    },
    {
      path: '/iphone',
      name: 'iphone',
      component: iphone
    },
    {
      path: '/set',
      name: 'set',
      component: set
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
