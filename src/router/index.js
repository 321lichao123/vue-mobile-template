import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 引入模板
// const moiveIndex = () => import('@/components/moiveIndex');
const ranking = () => import('@/components/ranking');
const user = () => import('@/components/user');
const trade = () => import('@/components/trade');

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/trade'
    },
    {
      path: '/trade',
      name: 'home',
      component: trade
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
});
