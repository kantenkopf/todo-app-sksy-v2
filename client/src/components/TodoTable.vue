<template>
  <div class="table-responsive">
    <table class="table table-hover table-striped text-center">
      <thead>
        <tr>
          <th scope="col" class="text-start">TODO</th>
          <th scope="col">Due Date</th>
          <th scope="col">Completed</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody class="align-middle">
        <TodoTableRow v-for="todo in todos" :key="JSON.stringify(todo)" :todo="todo" />
      </tbody>
    </table>
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

<style>
</style>