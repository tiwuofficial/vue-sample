import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import routes from './router/routes.js';
import actions from './action/actions.js';
import mutations from './mutation/mutations.js';
Vue.use(Vuex);
Vue.use(VueRouter);

var store = new Vuex.Store({
  state: {
    todos: [],
    dones: []
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    dones(state) {
      return state.dones;
    }
  },
  actions: actions,
  mutations: mutations,
});

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  store: store,
  router: router,
});
