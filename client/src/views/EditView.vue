<template>
  <div>
    <BaseForm @submit.prevent :isValid="true" @save="updateTodo">
      <BaseFormInput :labelFor="'task-description'">
        <template #label>Task Description</template>
        <input class="form-control" type="text" name="task-description" id="task-description" maxlength="160" v-model="todo.description">
        <template #help>What do you need to get done?</template>
      </BaseFormInput>

      <BaseFormInput :labelFor="'due-date'">
        <template #label>New Due Date</template>
        <input class="form-control" type="date" name="due-date" id="due-date" v-model="date">
        <template #help>Current Due Date is: {{ formattedDate }}</template>
      </BaseFormInput>

      <BaseFormInput :labelFor="'completion'">
        <template #label>Change Completion (%)</template>
        <input type="range" class="form-range" min="0" max="100" id="customRange2" v-model="todo.completion">
        <template #help>Current Completion is: {{ todo.completion }}</template>
      </BaseFormInput>
      
      <div class="mb-5 text-center">
          <input class="form-check-input mx-1" type="checkbox" value="" id="todoCompletedCheck" v-model="todo.completed">
          <label class="form-check-label mx-1" for="todoCompletedCheck">
            Mark as completed
          </label>
      </div>
    </BaseForm>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm.vue";
import BaseFormInput from "@/components/BaseFormInput.vue";

export default {
  name: 'EditView',
  components: { BaseForm, BaseFormInput },
  props: ["_id"],
  beforeMount() {
    this.todo = this.$store.getters.getTodoByID(this._id);
    this.date = this.todo.dueDate.split('T')[0];
  },
  data() {
    return {
      todo: null,
      date: "",
      previousCompletion: 0,
    }
  },
  methods: {
    updateTodo() {
      this.$store.dispatch('updateTodo', this.todo);
      this.$router.push('/');
    },

  },
  watch: {
    date() {
      this.todo.dueDate = this.date + "T00:00:00.000Z"
    },
    'todo.completed'(){
      if(this.todo.completed){
        this.previousCompletion = this.todo.completion;
        this.todo.completion = 100;
      }
      else{
        this.todo.completion = this.previousCompletion;
      }
    }
  },
  computed: {
    formattedDate() {
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