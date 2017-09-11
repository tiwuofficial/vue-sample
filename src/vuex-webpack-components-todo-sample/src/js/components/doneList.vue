<template>
  <div class="wrap">
    <h2>Done List</h2>
    <ul v-cloak>
      <li v-for="done in dones">
        <p>ID : {{done.id}}</p>
        <p>Text : {{done.text}}</p>
        <button @click="resetTodo(done.id)">Reset</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
  }
  .wrap {
    padding: 0 10px;
  }
  [v-cloak] {
    display: none;
  }
</style>

<script>
  export default {
    computed: {
      dones() {
        return this.$store.getters.dones;
      }
    },
    methods: {
      resetTodo(id) {
        this.$store.dispatch('reset', {
          id: id
        });
      }
    }
  }
</script>