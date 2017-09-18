<template>
  <section class="wrap">
    <h2>Todo List</h2>
    <todo-list></todo-list>
  </section>
</template>

<style scoped>
  .wrap {
    padding: 0 10px;
  }
</style>

<script>
  import todoList from './../components/todoList.vue';

  export default {
    components: {
      todoList
    },
  }
</script>