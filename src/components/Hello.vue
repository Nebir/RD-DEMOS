<template>
  <div class="home-page">
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
    <div class="content">
      <h1>{{ msg }}</h1>
      <h2>This is the home page</h2>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .home-page .content {
    margin-top: 60px;
    text-align: center;
  }
</style>
