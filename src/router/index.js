import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import store from '../store';

Vue.use(Router);

const modLoader = module => {
  return import('@/components/' + module + '.vue');
};
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'module/:module',
          name: 'module',
          component: () => {
            console.log('Async loading component');
            return modLoader(store.state.activeModule);
          }
        }
      ]
    }
  ]
});
