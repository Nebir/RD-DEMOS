<template>
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
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
  .navbar {
    background-color: #fff;
    -webkit-box-shadow: 0px 5px 20px 0px #dadada;
    -moz-box-shadow: 0px 5px 20px 0px #dadada;
    -ms-box-shadow: 0px 5px 20px 0px #dadada;
    -o-box-shadow: 0px 5px 20px 0px #dadada;
    box-shadow: 0px 5px 20px 0px #dadada;
    margin-bottom: 15px;
  }

  .navbar-brand img {
    width: 120px;
  }
</style>