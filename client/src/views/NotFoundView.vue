<template>
  <div class="container text-center">
    <div class="row">
      <h1>
        404
      </h1>
    </div>
    <div class="row mb-4">
      <p>
        The page you are looking for doesn't exist.
      </p>
    </div>
    <router-link class="btn btn-outline-primary" :to="{ name: 'home' }">Back to Homepage</router-link>
  </div>
</template>