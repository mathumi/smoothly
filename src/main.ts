import Vue from 'vue';
import App from '@/App.vue';
import VueRouter from 'vue-router';

const routes = [{ path: '/', component: App }];
const router = new VueRouter({ mode: 'history', routes });

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
