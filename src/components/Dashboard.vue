<template>
  <div class="dashboard-page">
    <navbar></navbar>
    <div class="container-fluid">
      <b-row>
        <b-col md="3">
          <side-nav></side-nav>
        </b-col>

        <b-col md="9">
          <!--<b-card class="info-card" v-for="title in ['Serial','Location','Venue','Phone Number','Email Branch Manager','Note']">
            <div v-for="info in ['01','142 Goose Island','Restaurant Depot - Midwest','312-255-9800','manager.042@jetrord.com','']" :key="`${title}_${info}`">-->
          <b-card class="info-card dashboard-card">
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
                  <b-button to="/form" class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card dashboard-card">
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
                  <b-button to="/form" class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card dashboard-card">
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
                  <b-button to="/form" class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card dashboard-card">
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
                  <b-button to="/form" class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card dashboard-card">
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
                  <b-button to="/form" class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card dashboard-card">
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
                  <b-button to="/form" class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card dashboard-card">
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
                  <b-button to="/form" class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card dashboard-card">
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
                  <b-button to="/form" class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card dashboard-card">
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
                  <b-button to="/form" class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
                  <b-button class="btn-rd btn-skyblue-light">{{ detailsBtn }}</b-button>
                </b-button-group>
              </b-col>

            </b-row>
          </b-card>

          <b-card class="info-card dashboard-card">
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
                  <b-button to="/form" class="btn-rd btn-teal-light">{{ editBtn }}</b-button>
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
    import Navbar from '@/components/Navbar'
    import SideNav from '@/components/SideNav'
    export default {
        name: "dashboard",
        components: {SideNav, Navbar},
        data () {
            return {
                editBtn: 'Edit',
                detailsBtn: 'Details'
            }
        }
    }
</script>

<style scoped>
  .info-card .card-body {
    padding: 0 0 0 45px;
  }
  .btn-rd {
    margin-bottom: 0px;
  }
</style>