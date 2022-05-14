<template>
  <div class="d-flex flex-column min-vh-100">
    <NavbarComponent />
        <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
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
  created() {
    if(this.$store.getters.getTodos.length !== 0){
      this.$store.commit("flushTodos");
    }
    this.$store.dispatch("getTodos");
  },
}
</script>

<style>
  .v-enter-from {
    opacity: 0;

  }
  .v-enter-active {
    transition: opacity .8s ease;
  }
</style>
