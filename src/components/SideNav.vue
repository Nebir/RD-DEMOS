<template>
  <b-list-group class="side-navigation">
    <b-list-group-item to="/dashboard">
      <span><i class="fa fa-th-large"></i>Dashboard</span>
    </b-list-group-item>

    <b-list-group-item v-b-toggle.collapseAdmin
                       class="d-flex justify-content-between align-items-center">
      <span><i class="fa fa-shirtsinbulk"></i>Admin</span>
      <span class="dropdown-icon fa fa-angle-down"></span>
    </b-list-group-item>
    <b-collapse id="collapseAdmin">
      <b-list-group>
        <b-list-group-item href="#"><span><i class="fa fa-clock-o"></i>Pending Schedules</span></b-list-group-item>
        <b-list-group-item href="#"><span><i class="fa fa-clock-o"></i>Submitted Demos</span></b-list-group-item>
      </b-list-group>
    </b-collapse>

    <b-list-group-item v-b-toggle.collapseUsers
                       class="d-flex justify-content-between align-items-center">
      <span><i class="fa fa-user"></i>Users</span>
      <span class="dropdown-icon fa fa-angle-down"></span>
    </b-list-group-item>
    <b-collapse id="collapseUsers">
      <b-list-group>
        <b-list-group-item href="#"><span><i class="fa fa-plane"></i>Active</span></b-list-group-item>
        <b-list-group-item href="#"><span><i class="fa fa-archive"></i>Archived</span></b-list-group-item>
      </b-list-group>
    </b-collapse>

    <b-list-group-item to="/store">
      <span><i class="fa fa-cloud"></i>Store</span>
    </b-list-group-item>

    <b-list-group-item href="#">
      <span><i class="fa fa-handshake-o"></i>Clients</span>
    </b-list-group-item>

    <b-list-group-item v-b-toggle.collapseProduct
                       class="d-flex justify-content-between align-items-center">
      <span><i class="fa fa-cube"></i>Product</span>
      <span class="dropdown-icon fa fa-angle-down"></span>
    </b-list-group-item>
    <b-collapse id="collapseProduct">
      <b-list-group>
        <b-list-group-item href="#"><span><i class="fa fa-database"></i>Products</span></b-list-group-item>
        <b-list-group-item href="#"><span><i class="fa fa-shopping-basket"></i>Product Sales</span></b-list-group-item>
      </b-list-group>
    </b-collapse>

    <b-list-group-item v-b-toggle.collapseReports
                       class="d-flex justify-content-between align-items-center">
      <span><i class="fa fa-desktop"></i>Demo Reports</span>
      <span class="dropdown-icon fa fa-angle-down"></span>
    </b-list-group-item>
    <b-collapse id="collapseReports">
      <b-list-group>
        <b-list-group-item href="#"><span><i class="fa fa-check-circle-o"></i>Approved Demos</span></b-list-group-item>
        <b-list-group-item href="#"><span><i class="fa fa-check-circle-o"></i>Submitted Demos</span></b-list-group-item>
        <b-list-group-item href="#"><span><i class="fa fa-minus-circle"></i>Incomplete Demos</span></b-list-group-item>
        <b-list-group-item href="#"><span><i class="fa fa-bolt"></i>Demos Conflicts</span></b-list-group-item>
      </b-list-group>
    </b-collapse>

  </b-list-group>
</template>

<script>
    export default {
        name: "side-nav"
    }
</script>

<style scoped>
  .side-navigation {
    font-size: 13px;
    font-weight: 300;
    text-align: left;
  }
  .side-navigation .list-group {
    -webkit-box-shadow: 0px 1px 2px 0px #ccc;
    -moz-box-shadow: 0px 1px 2px 0px #ccc;
    box-shadow: 0px 1px 2px 0px #ccc;
    margin-top: 2px;
  }

  .side-navigation.list-group .list-group-item {
    background-color: #213e7a;
    border: none;
    /*border-top: 1px solid #f5f5f5;*/
    -webkit-box-shadow: 0px 0px 2px 0px #ccc;
    -moz-box-shadow: 0px 0px 2px 0px #ccc;
    box-shadow: 0px 0px 2px 0px #ccc;
    color: #c5c5c5;
    margin-bottom: 0px;
  }
  .side-navigation.list-group .list-group-item.active {
    background-color: #506796;
  }
  .side-navigation .list-group-item span.dropdown-icon{
    font-size: 18px;
  }
  .side-navigation .list-group-item span i {
    margin-right: 15px;
  }
  .side-navigation .collapse .list-group .list-group-item {
    background-color: #fff;
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    color: #2c3e50;
    padding-left: 45px;
  }
  .side-navigation .list-group-item:first-child, .list-group-item:last-child {
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
  }
</style>