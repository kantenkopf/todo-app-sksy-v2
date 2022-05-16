<template>
  <div class="container col-11 col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
    <div class="row">
      <form novalidate>
        <slot></slot>
        <div class="text-center">
          <button type="button" class="btn btn-primary mx-1" :class="{ 'disabled': !isValid }" @click="$emit('save')">Save Changes</button>
          <router-link class="btn btn-outline-danger mx-1" to="/">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseForm",
  props: ['isValid']
}
</script>

<style></style>