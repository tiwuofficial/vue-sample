export default {
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