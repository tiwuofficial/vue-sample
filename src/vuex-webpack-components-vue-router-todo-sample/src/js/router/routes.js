import indexView from './../view/indexView.vue';
import todoInputView from './../view/todoInputView.vue';
import todoListView from './../view/todoListView.vue';
import doneListView from './../view/doneListView.vue';

export default [
  { path: '/', component: indexView },
  { path: '/todoInput', component: todoInputView },
  { path: '/todoList', component: todoListView },
  { path: '/doneList', component: doneListView },
];