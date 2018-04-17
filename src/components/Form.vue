<template>
  <div class="dashboard-page">
    <navbar></navbar>

    <div class="container-fluid">
      <b-row>
        <b-col md="3">
          <side-nav></side-nav>
        </b-col>

        <b-col md="9">
          <div class="content-wrapper">
            <b-form @submit="onSubmit" @reset="onReset">
              <b-row>
                <b-col>
                  <b-form-group id="exampleInputGroup2"
                                label="Location Name"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                  type="text"
                                  v-model="form.name"
                                  required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup3"
                                label="Venue"
                                label-for="exampleInput3">
                    <b-form-select id="exampleInput3"
                                   :options="foods"
                                   required
                                   v-model="form.food">
                    </b-form-select>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup3"
                                label="Region"
                                label-for="exampleInput3">
                    <b-form-select id="exampleInput3"
                                   :options="foods"
                                   required
                                   v-model="form.food">
                    </b-form-select>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup1"
                                label="Store Number"
                                label-for="exampleInput1">
                    <b-form-input id="exampleInput1"
                                  type="number"
                                  v-model="form.email"
                                  required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup3"
                                label="Country"
                                label-for="exampleInput3">
                    <b-form-select id="exampleInput3"
                                   :options="foods"
                                   required
                                   v-model="form.food">
                    </b-form-select>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                                label="Address"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                  type="text"
                                  v-model="form.name"
                                  required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                                label="City"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                  type="text"
                                  v-model="form.name"
                                  required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                                label="Zip"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                  type="text"
                                  v-model="form.name"
                                  required>
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="exampleInputGroup1"
                                label="Phone Number"
                                label-for="exampleInput1">
                    <b-form-input id="exampleInput1"
                                  type="phone"
                                  v-model="form.email"
                                  required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                                label="Fax Number"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                  type="number"
                                  v-model="form.name"
                                  required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup1"
                                label="Email Branch Manager"
                                label-for="exampleInput1">
                    <b-form-input id="exampleInput1"
                                  type="email"
                                  v-model="form.email"
                                  required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup1"
                                label="Email Branch Assistant Manager"
                                label-for="exampleInput1">
                    <b-form-input id="exampleInput1"
                                  type="email"
                                  v-model="form.email"
                                  required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup1"
                                label="Email Inventory Control"
                                label-for="exampleInput1">
                    <b-form-input id="exampleInput1"
                                  type="email"
                                  v-model="form.email"
                                  required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                                label="Note"
                                label-for="exampleInput2">
                    <b-form-textarea id="exampleInput2"
                                     rows="3"
                                     type="text"
                                     v-model="form.name"
                                     required>
                    </b-form-textarea>
                  </b-form-group>
                  <b-button type="submit" class="btn-rd btn-violet btn-radius">Create</b-button>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </div> <!-- /.container-fluid -->
  </div>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import SideNav from '@/components/SideNav'

    export default {
        name: "form",
        components: {SideNav, Navbar},
        data () {
            return {
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: []
                },
                foods: [
                    { text: 'Select One', value: null },
                    'Carrots', 'Beans', 'Tomatoes', 'Corn'
                ],
                show: true
            }
        },
        methods: {
            onSubmit (evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            onReset (evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.form.email = '';
                this.form.name = '';
                this.form.food = null;
                this.form.checked = [];
                /* Trick to reset/clear native browser form validation state */
                this.show = false;
                this.$nextTick(() => { this.show = true });
            }
        }
    }
</script>

<style scoped>
.btn-violet {
  padding: 10px 40px;
  float: right;
  margin-top: 20px;
}
</style>