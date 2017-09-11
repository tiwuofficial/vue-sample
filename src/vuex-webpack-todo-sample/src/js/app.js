var Vue = require('vue');
var Vuex = require('vuex');
Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    todos: [],
    dones: []
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
  computed: {
    todos: function() {
      return this.$store.state.todos;
    },
    dones: function() {
      return this.$store.state.dones;
    }
  },
  methods: {
    addTodoText: function(e){
      var text = e.target.value;
      this.$store.dispatch('addTodo', {
        text: text
      });
      e.target.value = '';
    },
    doneTodo: function(id) {
      this.$store.dispatch('done', {
        id: id
      })
    },
    resetTodo: function(id) {
      this.$store.dispatch('reset', {
        id: id
      })
    },
  }
});
