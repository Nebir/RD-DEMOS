<template>
	<div class="login-page">
		<div class="container">
			<div class="row login-wrapper">
				<div class="col-12 col-lg-5 ml-auto mr-auto align-self-center">
					<b-card class="login-card">
						<img src="../assets/logo.png" class="img-fluid mb-5" alt="Logo" />
						<b-form @submit="onSubmit"
										@reset="onReset"
										v-if="show"
										class="mb-4">
							<b-form-group>
								<b-form-input type="email"
															v-model="form.email"
															size="lg"
															required
															placeholder="Email Address">
								</b-form-input>
								<span class="icon-box">
									<i class="fa fa-envelope-o"></i>
								</span>
							</b-form-group>

							<b-form-group>
								<b-form-input type="password"
															v-model="form.password"
															size="lg"
															required
															placeholder="Password">
								</b-form-input>
								<span class="icon-box">
									<i class="fa fa-lock"></i>
								</span>
							</b-form-group>

							<b-row class="justify-content-between">
								<b-col class="col-auto">
									<b-form-checkbox v-model="form.checked"
																	 class="self-align-start mr-auto"
																	 style="font-size: 12px;">
										Remember me
									</b-form-checkbox>
								</b-col>

								<b-col class="col-auto">
									<b-link to="/passwordReset"
										 class="self-align-end"
										 style="font-size: 12px;">
										<span class="fa fa-lock"></span> Forgot Password?
									</b-link>
								</b-col>
							</b-row>

							<b-button size="lg"
												type="submit"
												class="btn-block btn-rd btn-teal mt-4 mb-3">
								Log In
							</b-button>

							<b-link to="/">
								<b-button size="lg"
													class="btn-block btn-rd btn-skyblue">
									Back to Main Menu
								</b-button>
							</b-link>
						</b-form>

						<b-form-text>
							Didn't get the Verification Email?
						</b-form-text>
						<b-form-text>
							<b-link to="/passwordReset"
								 class="self-align-end"
								 style="font-weight: 300;">
								<span class="fa fa-envelope-o"></span> Resend verification Email
							</b-link>
						</b-form-text>
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
	.login-page .login-wrapper {
		height: 100vh;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
	}
	.login-card {
		text-align: center;
	}
	.form-group {
		margin-bottom: 2rem;
		position: relative;
	}
	span.icon-box {
		position:  absolute;
		right: 0;
		width: 58px;
		height: 58px;
		border: 1px solid #213e7a;
		color: #fff;
		background-color: #213e7a;
		border-radius: 50%;
		display: table;
		top: -5px;
	}
	.icon-box i {
		display: table-cell;
		vertical-align: middle;
		font-size: 20px;
	}
	.form-control-lg {
		-webkit-border-radius: 30px;
		-moz-border-radius: 30px;
		border-radius: 30px;
		font-size: 1rem;
		line-height: 2;
	}
	.form-control:focus {
		border-color: #e6e7e8;
		-webkit-box-shadow: 0 2px 1px 0px rgba(125, 127, 130, 0.25);
		-moz-box-shadow: 0 2px 1px 0px rgba(125, 127, 130, 0.25);
		box-shadow: 0 2px 1px 0px rgba(125, 127, 130, 0.25);
	}
	.custom-control-label {
		margin-top: 4px;
	}
	.btn-rd {
		-webkit-border-radius: 30px;
		-moz-border-radius: 30px;
		border-radius: 30px;
	}
</style>