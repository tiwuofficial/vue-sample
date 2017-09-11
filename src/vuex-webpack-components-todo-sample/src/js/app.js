import Vue from 'vue';
import Vuex from 'vuex';
import todoInput from './components/todoInput.vue';
import todoList from './components/todoList.vue';
import doneList from './components/doneList.vue';
Vue.use(Vuex);

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
  actions: {
    addTodo (context, todo) {
      context.commit('ADD_TODO',todo.text);
    },
    done (context, todo) {
      context.commit('DONE_TODO',todo.id);
    },
    reset (context, todo) {
      context.commit('RESET_TODO',todo.id);
    }
  },
  mutations: {
    ADD_TODO (state, text) {
      var todo = {
        id: 0,
        text: text
      }
      if (state.todos.length !== 0) {
        todo.id = state.todos[state.todos.length -1].id + 1;
      }
      state.todos.push(todo);
    },
    DONE_TODO (state, id) {
      for (var i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === id) {
          state.dones.push(state.todos[i]);
          state.todos.splice(i, 1);
          break;
        }
      }
    },
    RESET_TODO (state, id) {
      var todo = {};
      for (var i = 0; i < state.dones.length; i++) {
        if (state.dones[i].id === id) {
          todo = state.dones[i];
          state.dones.splice(i, 1);
          break;
        }
      }
      state.todos.push(todo);
      state.todos.sort(function(a,b){
        if(a.id<b.id) return -1;
        if(a.id > b.id) return 1;
        return 0;
      })
    }
  }
});

new Vue({
  el: '#app',
  store: store,
  components: {
    "todo-input": todoInput,
    "todo-list": todoList,
    "done-list": doneList,
  },
});
