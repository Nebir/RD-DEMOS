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

    <div class="container-fluid">
      <b-row>
        <b-col md="3">
          <!-- side-navigations -->
          <!--<b-nav vertical>
            <b-nav-item>Dashboard</b-nav-item>
            <b-nav-item-dropdown text="Admin" extra-toggle-classes="nav-link-custom" right>
              <b-dropdown-item>Pending Schedules</b-dropdown-item>
              <b-dropdown-item>Submitted Demos</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Users" extra-toggle-classes="nav-link-custom" right>
              <b-dropdown-item>Active</b-dropdown-item>
              <b-dropdown-item>Archived</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item>Store</b-nav-item>
            <b-nav-item>Clients</b-nav-item>
            <b-nav-item-dropdown text="Product" extra-toggle-classes="nav-link-custom" right>
              <b-dropdown-item>Products</b-dropdown-item>
              <b-dropdown-item>Product Sales</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Demo Reports" extra-toggle-classes="nav-link-custom" right>
              <b-dropdown-item>Approved Demos</b-dropdown-item>
              <b-dropdown-item>Submitted Demos</b-dropdown-item>
              <b-dropdown-item>Incomplete Demos</b-dropdown-item>
              <b-dropdown-item>Demos Conflicts</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav>-->

          <b-list-group class="side-navigation">
            <b-list-group-item href="#" active>
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

            <b-list-group-item href="#">
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
        </b-col>

        <b-col md="9">
          <!--<b-card class="info-card" v-for="title in ['Serial','Location','Venue','Phone Number','Email Branch Manager','Note']">
            <div v-for="info in ['01','142 Goose Island','Restaurant Depot - Midwest','312-255-9800','manager.042@jetrord.com','']" :key="`${title}_${info}`">-->
          <b-card class="info-card">
            <b-row>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Serial
                  </small>
                  <p class="info">01</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Location
                  </small>
                  <p class="info">142 Goose Island</p>
                </div>
              </b-col>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Venue
                  </small>
                  <p class="info">Restaurant Depot - Midwest</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Phone Number
                  </small>
                  <p class="info">312-255-9800</p>
                </div>
              </b-col>


              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Email Branch Manager
                  </small>
                  <p class="info">manager.042@jetrord.com</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Note
                  </small>
                  <p class="info"></p>
                </div>
              </b-col>

              <b-col class="col-auto align-self-end">
                <b-button-group>
                  <b-button class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card">
            <b-row>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Serial
                  </small>
                  <p class="info">01</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Location
                  </small>
                  <p class="info">142 Goose Island</p>
                </div>
              </b-col>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Venue
                  </small>
                  <p class="info">Restaurant Depot - Midwest</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Phone Number
                  </small>
                  <p class="info">312-255-9800</p>
                </div>
              </b-col>


              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Email Branch Manager
                  </small>
                  <p class="info">manager.042@jetrord.com</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Note
                  </small>
                  <p class="info"></p>
                </div>
              </b-col>

              <b-col class="col-auto align-self-end">
                <b-button-group>
                  <b-button class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card">
            <b-row>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Serial
                  </small>
                  <p class="info">01</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Location
                  </small>
                  <p class="info">142 Goose Island</p>
                </div>
              </b-col>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Venue
                  </small>
                  <p class="info">Restaurant Depot - Midwest</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Phone Number
                  </small>
                  <p class="info">312-255-9800</p>
                </div>
              </b-col>


              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Email Branch Manager
                  </small>
                  <p class="info">manager.042@jetrord.com</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Note
                  </small>
                  <p class="info"></p>
                </div>
              </b-col>

              <b-col class="col-auto align-self-end">
                <b-button-group>
                  <b-button class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card">
            <b-row>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Serial
                  </small>
                  <p class="info">01</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Location
                  </small>
                  <p class="info">142 Goose Island</p>
                </div>
              </b-col>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Venue
                  </small>
                  <p class="info">Restaurant Depot - Midwest</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Phone Number
                  </small>
                  <p class="info">312-255-9800</p>
                </div>
              </b-col>


              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Email Branch Manager
                  </small>
                  <p class="info">manager.042@jetrord.com</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Note
                  </small>
                  <p class="info"></p>
                </div>
              </b-col>

              <b-col class="col-auto align-self-end">
                <b-button-group>
                  <b-button class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card">
            <b-row>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Serial
                  </small>
                  <p class="info">01</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Location
                  </small>
                  <p class="info">142 Goose Island</p>
                </div>
              </b-col>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Venue
                  </small>
                  <p class="info">Restaurant Depot - Midwest</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Phone Number
                  </small>
                  <p class="info">312-255-9800</p>
                </div>
              </b-col>


              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Email Branch Manager
                  </small>
                  <p class="info">manager.042@jetrord.com</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Note
                  </small>
                  <p class="info"></p>
                </div>
              </b-col>

              <b-col class="col-auto align-self-end">
                <b-button-group>
                  <b-button class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card">
            <b-row>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Serial
                  </small>
                  <p class="info">01</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Location
                  </small>
                  <p class="info">142 Goose Island</p>
                </div>
              </b-col>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Venue
                  </small>
                  <p class="info">Restaurant Depot - Midwest</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Phone Number
                  </small>
                  <p class="info">312-255-9800</p>
                </div>
              </b-col>


              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Email Branch Manager
                  </small>
                  <p class="info">manager.042@jetrord.com</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Note
                  </small>
                  <p class="info"></p>
                </div>
              </b-col>

              <b-col class="col-auto align-self-end">
                <b-button-group>
                  <b-button class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card">
            <b-row>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Serial
                  </small>
                  <p class="info">01</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Location
                  </small>
                  <p class="info">142 Goose Island</p>
                </div>
              </b-col>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Venue
                  </small>
                  <p class="info">Restaurant Depot - Midwest</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Phone Number
                  </small>
                  <p class="info">312-255-9800</p>
                </div>
              </b-col>


              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Email Branch Manager
                  </small>
                  <p class="info">manager.042@jetrord.com</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Note
                  </small>
                  <p class="info"></p>
                </div>
              </b-col>

              <b-col class="col-auto align-self-end">
                <b-button-group>
                  <b-button class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card">
            <b-row>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Serial
                  </small>
                  <p class="info">01</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Location
                  </small>
                  <p class="info">142 Goose Island</p>
                </div>
              </b-col>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Venue
                  </small>
                  <p class="info">Restaurant Depot - Midwest</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Phone Number
                  </small>
                  <p class="info">312-255-9800</p>
                </div>
              </b-col>


              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Email Branch Manager
                  </small>
                  <p class="info">manager.042@jetrord.com</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Note
                  </small>
                  <p class="info"></p>
                </div>
              </b-col>

              <b-col class="col-auto align-self-end">
                <b-button-group>
                  <b-button class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card">
            <b-row>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Serial
                  </small>
                  <p class="info">01</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Location
                  </small>
                  <p class="info">142 Goose Island</p>
                </div>
              </b-col>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Venue
                  </small>
                  <p class="info">Restaurant Depot - Midwest</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Phone Number
                  </small>
                  <p class="info">312-255-9800</p>
                </div>
              </b-col>


              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Email Branch Manager
                  </small>
                  <p class="info">manager.042@jetrord.com</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Note
                  </small>
                  <p class="info"></p>
                </div>
              </b-col>

              <b-col class="col-auto align-self-end">
                <b-button-group>
                  <b-button class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card">
            <b-row>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Serial
                  </small>
                  <p class="info">01</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Location
                  </small>
                  <p class="info">142 Goose Island</p>
                </div>
              </b-col>

              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Venue
                  </small>
                  <p class="info">Restaurant Depot - Midwest</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Phone Number
                  </small>
                  <p class="info">312-255-9800</p>
                </div>
              </b-col>


              <b-col>
                <div class="information-unit">
                  <small class="information-title">
                    Email Branch Manager
                  </small>
                  <p class="info">manager.042@jetrord.com</p>
                </div>

                <div class="information-unit">
                  <small class="information-title">
                    Note
                  </small>
                  <p class="info"></p>
                </div>
              </b-col>

              <b-col class="col-auto align-self-end">
                <b-button-group>
                  <b-button class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div> <!-- /.container-fluid -->
  </div>
</template>

<script>

    export default {
        name: "dashboard",
        data () {
            return {
                infoTitles: ['Serial','Location','Venue','Phone Number','Email Branch Manager','Note'],
                infos: ['01','142 Goose Island','Restaurant Depot - Midwest','312-255-9800','manager.042@jetrord.com',''],
                /*items: [
                    {
                        title: 'Serial',
                        value: '01'
                    },
                    {
                        title: 'Location',
                        value: '142 Goose Island'
                    },
                    {
                        title: 'Venue',
                        value: 'Restaurant Depot - Midwest'
                    },
                    {
                        title: 'Phone Number',
                        value: '312-255-9800'
                    },
                    {
                        title: 'Email Branch Manager',
                        value: 'manager.042@jetrord.com'
                    },
                    {
                        title: 'Note',
                        value: ''
                    }
                ],*/
                editBtn: 'Edit',
                detailsBtn: 'Details'
            }
        }
    }
</script>

<style scoped>
  .dashbaord-page {
    font-family: 'Montserrat', sans-serif;
  }

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
    margin-bottom: 0px;
    border: none;
    /*border-top: 1px solid #f5f5f5;*/
    -webkit-box-shadow: 0px 1px 2px 0px #ccc;
    -moz-box-shadow: 0px 1px 2px 0px #ccc;
    box-shadow: 0px 1px 2px 0px #ccc;
  }
  .side-navigation .list-group-item span.dropdown-icon{
    font-size: 18px;
  }
  .side-navigation .list-group-item span i {
    margin-right: 15px;
  }
  .side-navigation .collapse .list-group .list-group-item {
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    padding-left: 45px;
  }
  .side-navigation .list-group-item:first-child, .list-group-item:last-child {
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
  }

  .info-card {
    -webkit-box-shadow: 0px 3px 3px 0px #ded8d8;
    -moz-box-shadow: 0px 3px 3px 0px #ded8d8;
    -ms-box-shadow: 0px 3px 3px 0px #ded8d8;
    -o-box-shadow: 0px 3px 3px 0px #ded8d8;
    box-shadow: 0px 3px 3px 0px #ded8d8;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  .info-card .card-body {
    padding: 0 0 0 45px;
    text-align: left;
  }
  .information-unit {
    margin: 20px 0px;
  }
  .information-title {
    font-weight: 300;
  }
  .btn-rd {
    margin-bottom: 0px;
  }
</style>