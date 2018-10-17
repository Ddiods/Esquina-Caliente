<template>
    <div id="app">
        <div class="container-fluid">
            <router-view @authenticated="setAuthenticated"/>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'App',
    data () {
      return {
        authenticated: false,
        mockAccount: {
          username: 'usuario',
          password: '123456'
        },
        pedidos: []
      }
    },
    mounted () {
      if (!this.authenticated) {
        this.$router.replace({name: 'login'})
      }
    },
    methods: {
      setAuthenticated (status) {
        this.authenticated = status
      },
      logout () {
        this.authenticated = false
      }
    }
  }
</script>
<style lang="stylus">
    @import '~bootstrap/dist/css/bootstrap.css'
    @import '~bootstrap-vue/dist/bootstrap-vue.css'
</style>
