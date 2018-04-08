import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 引入模板
const moiveIndex = () => import('@/components/moiveIndex')
const ranking = () => import('@/components/ranking')
const user = () => import('@/components/user')

export default new Router({
  routes: [
    {
      path: '/', 
      redirect: '/moiveIndex'
    },
    {
      path: '/moiveIndex',
      name:'home',
      component: moiveIndex
    },
    {
      path: '/ranking',
      name:'ranking',
      component: ranking
    },
    {
      path: '/user',
      name:'user',
      component: user
    }
  ]
});