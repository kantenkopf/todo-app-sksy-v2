<template>
  <div class="d-flex flex-column min-vh-100">
    <NavbarComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    NavbarComponent,
    FooterComponent
  },
  beforeMount() {
    this.$store.dispatch("getTodos");
  },
}
</script>

<style>
</style>
