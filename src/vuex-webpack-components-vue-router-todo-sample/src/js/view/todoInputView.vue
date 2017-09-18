<template>
  <section class="wrap">
    <h2>Todo Input</h2>
    <todo-input></todo-input>
  </section>
</template>

<style scoped>
  .wrap {
    padding: 0 10px;
  }
</style>

<script>
  import todoInput from './../components/todoInput.vue';

  export default {
    components: {
      todoInput
    },
  }
</script>