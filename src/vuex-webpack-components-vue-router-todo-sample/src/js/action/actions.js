export default {
  addTodo (context, todo) {
    context.commit('ADD_TODO',todo.text);
  },
  done (context, todo) {
    context.commit('DONE_TODO',todo.id);
  },
  reset (context, todo) {
    context.commit('RESET_TODO',todo.id);
  }
}