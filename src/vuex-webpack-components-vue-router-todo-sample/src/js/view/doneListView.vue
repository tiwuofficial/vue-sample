<template>
  <section class="wrap">
    <h2>Done List</h2>
    <done-list></done-list>
  </section>
</template>

<style scoped>
  .wrap {
    padding: 0 10px;
  }
</style>

<script>
  import doneList from './../components/doneList.vue';

  export default {
    components: {
      doneList
    },
  }
</script>