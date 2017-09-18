<template>
  <ul v-cloak>
    <li v-for="todo in todos">
      <p>ID : {{todo.id}}</p>
      <p>Text : {{todo.text}}</p>
      <button @click="doneTodo(todo.id)">Done</button>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style: none;
  }
  [v-cloak] {
    display: none;
  }
</style>

<script>
  export default {
    computed: {
      todos() {
        return this.$store.getters.todos;
      }
    },
    methods: {
      doneTodo(id) {
        this.$store.dispatch('done', {
          id: id
        });
      }
    }
  }
</script>