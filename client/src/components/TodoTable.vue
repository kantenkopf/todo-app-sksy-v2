<template>
  <div class="table-responsive">
    <table class="table table-hover table-striped text-center table-borderless">
      <thead>
        <tr>
          <th scope="col" class="text-start">TODO</th>
          <th scope="col">Due Date</th>
          <th scope="col">Completed</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <TransitionGroup tag="tbody" name="table-row" class="align-middle">
        <TodoTableRow v-for="todo in todos" :key="JSON.stringify(todo)" :todo="todo" />
      </TransitionGroup>
    </table>
    <div v-show="todos.length === 0" class="container text-center">
        <div class="row mt-5">
          <p>
            <i class="bi bi-exclamation-circle"></i>
            No TODOs here, create one first.
          </p>
        </div>
    </div>
  </div>
</template>

<script>
import TodoTableRow from "./TodoTableRow.vue";

export default {
  name: "TodoTable",
  components: {
    TodoTableRow
  },
  props: ['todos']
}
</script>

<style scoped>
.table-responsive {
  overflow-y: hidden;
}

.table-row-enter-active,
.table-row-leave-active {
  transition: all 0.4s ease;
}
.table-row-enter-from,
.table-row-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>