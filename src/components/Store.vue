<template>
  <div class="dashboard-page">
    <navbar></navbar>
    <div class="container-fluid">
      <b-row>
        <b-col md="3">
          <side-nav></side-nav>
        </b-col>

        <b-col md="9">
          <b-card class="parent-card dashboard-card">
            <b-row>
              <b-col class="align-self-start">
                <h3>Store Details</h3>
              </b-col>
              <b-col class="ml-auto align-self-end">
                <b-link to="/">
                  <b-button size="sm"
                            class="btn-rd btn-skyblue">
                    <span class="fa fa-arrow-left"></span>
                    Previous Page
                  </b-button>
                </b-link>
              </b-col>
            </b-row>
            <b-card class="info-card dashboard-card">
              <b-row>
                <b-col>
                  <div class="information-unit">
                    <small class="information-title">
                      Location Name
                    </small>
                    <p class="info">427 North Carleston</p>
                  </div>

                  <div class="information-unit">
                    <small class="information-title">
                      Venue
                    </small>
                    <p class="info">Restaurant Depot - Midwest</p>
                  </div>

                  <div class="information-unit">
                    <small class="information-title">
                      Number
                    </small>
                    <p class="info">427</p>
                  </div>

                  <div class="information-unit">
                    <small class="information-title">
                      Country
                    </small>
                    <p class="info">United States</p>
                  </div>

                  <div class="information-unit">
                    <small class="information-title">
                      Address
                    </small>
                    <p class="info">3600 Meeting Street Road</p>
                  </div>
                </b-col>

                <b-col>
                  <div class="information-unit">
                    <small class="information-title">
                      City
                    </small>
                    <p class="info">North Carleston</p>
                  </div>

                  <div class="information-unit">
                    <small class="information-title">
                      State
                    </small>
                    <p class="info">South Carolina</p>
                  </div>

                  <div class="information-unit">
                    <small class="information-title">
                      Zip Code
                    </small>
                    <p class="info">29405</p>
                  </div>

                  <div class="information-unit">
                    <small class="information-title">
                      Phone Number
                    </small>
                    <p class="info">843-529-0699</p>
                  </div>

                  <div class="information-unit">
                    <small class="information-title">
                      Email Branch Manger
                    </small>
                    <p class="info">manager.427@jetrord.com</p>
                  </div>
                </b-col>


                <b-col>
                  <div class="information-unit">
                    <small class="information-title">
                      Email Assistant Branch Manager
                    </small>
                    <p class="info">amanager.427@jetrord.com</p>
                  </div>

                  <div class="information-unit">
                    <small class="information-title">
                      Email Inventroy Control
                    </small>
                    <p class="info">icontrol.427@jetrord.com</p>
                  </div>

                  <div class="information-unit">
                    <small class="information-title">
                      Note
                    </small>
                    <p class="info">
                      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form
                    </p>
                  </div>
                </b-col>

              </b-row>
            </b-card>

            <b-card class="table-card dashboard-card">
              <!-- (table-row) er  loop ghurbe -->
              <div class="table-row">
                <b-row>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Changed Field
                      </small>
                      <p class="info">Notes</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Previous Value
                      </small>
                      <p class="info">lorem ipsum</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Changed Value
                      </small>
                      <p class="info">Dolor Site Amet</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Date of Change
                      </small>
                      <p class="info">April 11 2018</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        User
                      </small>
                      <p class="info">info@fixittek.com</p>
                    </div>
                  </b-col>
                </b-row>
              </div>

              <div class="table-row">
                <b-row>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Changed Field
                      </small>
                      <p class="info">Notes</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Previous Value
                      </small>
                      <p class="info">lorem ipsum</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Changed Value
                      </small>
                      <p class="info">Dolor Site Amet</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Date of Change
                      </small>
                      <p class="info">April 11 2018</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        User
                      </small>
                      <p class="info">info@fixittek.com</p>
                    </div>
                  </b-col>
                </b-row>
              </div>

              <div class="table-row">
                <b-row>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Changed Field
                      </small>
                      <p class="info">Notes</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Previous Value
                      </small>
                      <p class="info">lorem ipsum</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Changed Value
                      </small>
                      <p class="info">Dolor Site Amet</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Date of Change
                      </small>
                      <p class="info">April 11 2018</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        User
                      </small>
                      <p class="info">info@fixittek.com</p>
                    </div>
                  </b-col>
                </b-row>
              </div>

              <div class="table-row">
                <b-row>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Changed Field
                      </small>
                      <p class="info">Notes</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Previous Value
                      </small>
                      <p class="info">lorem ipsum</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Changed Value
                      </small>
                      <p class="info">Dolor Site Amet</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        Date of Change
                      </small>
                      <p class="info">April 11 2018</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="information-unit">
                      <small class="information-title">
                        User
                      </small>
                      <p class="info">info@fixittek.com</p>
                    </div>
                  </b-col>
                </b-row>
              </div>

            </b-card>
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
        name: "store",
        components: {SideNav, Navbar}
    }
</script>

<style scoped>
  .parent-card {
    padding-bottom: 75px;
    margin-bottom: 60px;
  }
  .table-row {
    border-bottom: 1px solid #d9d9d9;
  }
.table-row:last-child {
  border-bottom: none;
}
  .info-card {
    margin-bottom: 30px;
  }
</style>