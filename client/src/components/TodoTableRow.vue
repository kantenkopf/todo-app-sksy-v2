<template>
  <tr>
    <td class="text-start" :class="{ 'text-decoration-line-through': todo.completed }">
      {{ todo.description }}
    </td>
    <td :class="{ 'text-decoration-line-through': todo.completed }">
      {{ dueDate }}
    </td>
    <td>
      {{ todo.completion }}%
    </td>
    <td>
      <router-link class="btn btn-secondary" :to="{ name: 'edit', params: { _id: todo._id } }"><i class="bi bi-pencil-square"></i></router-link>
    </td>
    <td>
      <button class="btn btn-secondary" @click="deleteTodo"><i class="bi bi-trash3-fill"></i></button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "TodoTableRow",
  props: ['todo'],
  methods: {
    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.todo._id)
    }
  },
  computed: {
    dueDate() {
      let date = this.todo.dueDate.split('T')[0].split('-');
      let dateStringLocale = "";
      for(let i = date.length-1; i >= 0; i-- ){
        if(i != 0){
          dateStringLocale += date[i] + '.';
        } 
        else {
          dateStringLocale += date[i];
        }
      }
      return dateStringLocale;
    }
  }
}
</script>

<style></style>