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
        <input class="form-control" type="date" name="due-date" id="due-date" v-model="dueDate">
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
        dueDate: null,
      }
    },
    methods: {
      addTodo() {
        this.$store.dispatch('addTodo', { description: this.description, dueDate: this.dueDate  });
        this.$router.push('/');
      }
    }
}
</script>

<style></style>