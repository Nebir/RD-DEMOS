<template>
	<div class="login-page">
		<div class="container">
			<div class="row">
				<div class="col-md-6 ml-auto mr-auto">
					<b-card>
                        <img src="../assets/logo.png" class="img-fluid" alt="Logo" />
						<b-form @submit="onSubmit" @reset="onReset" v-if="show">
							<b-form-group>
								<b-form-input type="email"
											  v-model="form.email"
                                              size="lg"
											  required
											  placeholder="Email Address">
								</b-form-input>
							</b-form-group>

							<b-form-group>
								<b-form-input type="password"
											  v-model="form.password"
                                              size="lg"
											  required
											  placeholder="Password">
								</b-form-input>
							</b-form-group>

							<b-form-group id="exampleGroup4">
                                <b-form-checkbox v-model="form.checked"
                                                 class="self-align-start mr-auto">
                                    Remember me
                                </b-form-checkbox>
                                <a to="/passwordReset"
                                   class="self-align-end">
                                    <span class="fa fa-lock"></span> Forgot Password?
                                </a>
							</b-form-group>

							<b-button type="submit" variant="primary">Submit</b-button>
							<b-button type="reset" variant="danger">Reset</b-button>
						</b-form>
					</b-card>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
    export default {
        name: "login",
        data () {
            return {
                form: {
                    email: '',
                    password: '',
                    checked: []
                },
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
                this.form.password = '';
                this.form.checked = [];
                /* Trick to reset/clear native browser form validation state */
                this.show = false;
                this.$nextTick(() => { this.show = true });
            }
        }
    }
</script>

<style scoped>

</style>