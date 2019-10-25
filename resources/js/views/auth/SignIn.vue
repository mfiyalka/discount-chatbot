<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-5 col-xl-4 my-5">

                <!-- Heading -->
                <h1 class="display-4 text-center mb-3">
                    Sign in
                </h1>

                <!-- Subheading -->
                <p class="text-muted text-center mb-5">
                    Free access to our dashboard.
                </p>

                <!-- Form -->
                <form action="#" @submit.prevent="login">

                    <!-- Email address -->
                    <div class="form-group">
                        <label for="inputEmail">Email Address</label>
                        <input type="email" id="inputEmail" name="username" class="form-control" :class="{ 'is-invalid': serverError }" placeholder="name@address.com" v-model="username">
                        <div class="invalid-feedback">
                            {{ serverError }}
                        </div>
                    </div>

                    <!-- Password -->
                    <div class="form-group">

                        <div class="row">
                            <div class="col">
                                <label for="inputPassword">Password</label>
                            </div>
                            <div class="col-auto">

                                <!-- Help text -->
                                <a href="#" class="form-text small text-muted">
                                    Forgot password?
                                </a>

                            </div>
                        </div>

                        <!-- Input group -->
                        <div class="input-group input-group-merge">

                            <!-- Input -->
                            <input type="password" id="inputPassword" name="password" class="form-control form-control-appended" placeholder="Enter your password" v-model="password">

                            <!-- Icon -->
                            <div class="input-group-append">
                              <span class="input-group-text">
                                <i class="fe fe-eye"></i>
                              </span>
                            </div>

                        </div>
                    </div>

                    <!-- Submit -->
                    <button class="btn btn-lg btn-block btn-primary mb-3">
                        Sign in
                    </button>

                    <!-- Link -->
                    <div class="text-center">
                        <small class="text-muted text-center">
                            Don't have an account yet? <a href="#">Sign up</a>.
                        </small>
                    </div>

                </form>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignIn",
        data() {
          return {
              username: '',
              password: '',
              serverError: '',
          }
        },
        methods: {
            addClassToBody() {
                const el = document.body;
                el.classList.add('d-flex', 'align-items-center', 'bg-auth', 'border-top', 'border-top-2', 'border-primary');
            },
            login() {
                this.$store.dispatch('retrieveToken', {
                    username: this.username,
                    password: this.password
                })
                    .then(response => {
                        this.$router.push({ name: 'Dashboard' });
                    })
                    .catch(error => {
                        this.serverError = error.response.data;
                        this.username = '';
                        this.password = '';
                    });
            }
        },
        mounted() {
            this.addClassToBody();
        }
    }
</script>

<style scoped>

</style>
