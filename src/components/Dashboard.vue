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
  .info-card {
    -webkit-box-shadow: 0px 3px 3px 0px #ded8d8;
    -moz-box-shadow: 0px 3px 3px 0px #ded8d8;
    -ms-box-shadow: 0px 3px 3px 0px #ded8d8;
    -o-box-shadow: 0px 3px 3px 0px #ded8d8;
    box-shadow: 0px 3px 3px 0px #ded8d8;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
    font-family: 'Montserrat', sans-serif;
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