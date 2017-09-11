<template>
  <div class="wrap">
    <h2>Todo Input</h2>
    <input type="text" @keyup.enter="addTodoText"/>
  </div>
</template>

<style scoped>
  .wrap {
    padding: 0 10px;
  }
</style>

<script>
  export default {
    methods: {
      addTodoText(e) {
        var text = e.target.value;
        this.$store.dispatch('addTodo', {
          text: text
        });
        e.target.value = '';
      }
    }
  }
</script>