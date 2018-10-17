<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row justify-content-center">
                <p>&nbsp;</p>
            </div>
            <div class="row justify-content-center" id="login">
                <div class="col-12 col-md-8">
                    <b-card title="Login"
                            tag="article"
                            class="mb-2">
                        <div class="card-text">
                            <form class="form" v-on:submit.prevent="onSubmit">
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" class="form-control" id="username" placeholder="Enter username"
                                           v-model="form.username">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Password"
                                           v-model="form.password">
                                </div>
                                <b-button variant="primary" type="submit">Ingresar</b-button>
                                <p class="text-danger" v-if="loginError">Usuario o clave incorrecto</p>
                            </form>
                        </div>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        loginError: false,
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit () {
        this.loginError = false
        if (this.form.username === this.$parent.mockAccount.username && this.form.password === this.$parent.mockAccount.password) {
          this.$emit('authenticated', true)
          this.$router.replace({name: 'home'})
        } else {
          this.loginError = true
        }
      }
    }
  }
</script>

<style lang="stylus">
    #login
        .card
            &:hover
                background none
                color #000
</style>
