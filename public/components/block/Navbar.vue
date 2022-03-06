<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <h2><a class="navbar-brand" href="#">{{ appName }}</a></h2>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Panel</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/settings">Settings</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>

        </ul>

      </div>
    </div>
  </nav>




</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      appName: Const.APP_NAME
    }
  }
}
</script>

<style>
h2 {margin-bottom: 0.8rem}
.navbar {
  /* padding-top: 0 !important;
   padding-bottom: 0 !important;*/
}
</style>