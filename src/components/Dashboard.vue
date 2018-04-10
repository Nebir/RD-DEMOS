<template>
  <div class="dashbaord-page">
    <nav class="navbar navbar-expand-lg justify-content-between navbar-fixed-top">
      <div class="container">
        <a class="navbar-brand">
          <img src="../assets/logo.png" class="img-fluid" alt="Logo" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <b-nav class="navbar-nav ml-auto">
            <b-nav-item active to="/">Home</b-nav-item>
            <b-nav-item to="/login">Login</b-nav-item>
            <b-nav-item to="/dashboard">Dashboard</b-nav-item>
          </b-nav>
        </div>
      </div>
    </nav>
    This is Dashboard page
  </div>
</template>

<script>
    export default {
        name: "dashboard"
    }
</script>

<style scoped>

</style>