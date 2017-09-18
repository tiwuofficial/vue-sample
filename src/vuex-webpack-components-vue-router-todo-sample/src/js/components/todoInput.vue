<template>
  <input type="text" @keyup.enter="addTodoText"/>
</template>

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