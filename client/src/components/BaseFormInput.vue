<template>
  <div class="mb-4">
    <label class="form-label" :for="labelFor"><slot name="label"></slot></label>
    <slot></slot>    
    <div :id="helpId" class="form-text"><slot name="help"></slot></div>
  </div>
</template>

<script>
export default {
  name: "BaseFormInput",
  props: ['labelFor', 'helpId']
}
</script>

<style></style>