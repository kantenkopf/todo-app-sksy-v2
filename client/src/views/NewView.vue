<template>
  <div>
    <BaseForm @submit.prevent @save="addTodo">
      <BaseFormInput :labelFor="'task-description'" :helpId="'description-help'">
        <template #label>Task Description</template>
        <input class="form-control" type="text" name="task-description" id="task-description" placeholder="My next task..." maxlength="160" v-model="description">
        <template #help>What do you need to get done?</template>
      </BaseFormInput>

      <BaseFormInput :labelFor="'task-description'" :helpId="'description-help'">
        <template #label>Task Description</template>
        <input class="form-control" type="date" name="due-date" id="due-date" v-model="date">
        <template #help>What do you need to get done?</template>
      </BaseFormInput>
    </BaseForm>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm.vue";
import BaseFormInput from "@/components/BaseFormInput.vue";

export default {
    name: "NewView",
    components: { BaseForm, BaseFormInput },
    data() {
      return {
        description: "",
        dueDate: new Date().toISOString().split('T')[0]+"T00:00:00.000Z",
        date: new Date().toISOString().split('T')[0],
      }
    },
    methods: {
      addTodo() {
        this.$store.dispatch('addTodo', { description: this.description, dueDate: this.dueDate  });
        this.$router.push('/');
      }
    },
    watch: {
      date() {
        this.dueDate = this.date + "T00:00:00.000Z";
      },
    }
}
</script>

<style></style>