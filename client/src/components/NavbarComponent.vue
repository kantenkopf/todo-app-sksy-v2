<style>

  .navbar-brand:hover {
    text-decoration: underline;
    transition: linear 0.2s;
  }

  .navbar-brand:active {
    transform: translateY(3px);
    transition: linear 0.2s;
  }

</style>

<template>
  <nav class="navbar navbar-dark bg-dark mb-5">
    <div class="container">
      <router-link class="navbar-brand" to="/">TODO List</router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="btn btn-primary" v-if="$route.name==='home'" to="/new">Add a TODO</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {

};
</script>

<style></style>
