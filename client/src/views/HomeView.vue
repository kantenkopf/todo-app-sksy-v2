<template>
  <div class="home container col-lg-8 col-xl-7 col-xxl-6 justify-content-center">
    <TodoTable :todos="todos" />
  </div>
</template>

<script>
import TodoTable from "@/components/TodoTable.vue";

export default {
  name: "HomeView",
  components: { 
    TodoTable 
  },
  data() {
    return {};
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  }
}
</script>
