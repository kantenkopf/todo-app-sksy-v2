<template>
  <div>
    <BaseForm @submit.prevent @save="updateTodo">
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
        <select class="form-select" name="completion" aria-label="Change completion (%) of TODO" v-model="todo.completion">
          <option value="0">0</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
        </select>
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
    }
  },
  methods: {
    updateTodo() {
      this.$store.dispatch('updateTodo', this.todo);
      this.$router.push('/');
    }
  },
  watch: {
    date() {
      this.todo.dueDate = this.date + "T00:00:00.000Z"
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