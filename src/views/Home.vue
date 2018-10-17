<template>
    <div class="col-md-12">
        <div class="row justify-content-center">
            <p>&nbsp;</p>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <b-card @click="goTo('new')">
                            <p class="card-text text-center">
                                <font-awesome-icon icon="plus-square" class="dashboard-icon"/>
                                <br/>
                                <a href="#">Nuevo Pedido</a>
                            </p>
                        </b-card>
                    </div>
                    <div class="col-md-6">
                        <b-card @click="goTo('pedidos')">
                            <p class="card-text text-center">
                                <font-awesome-icon icon="th-list" class="dashboard-icon"/>
                                <br/>
                                <a href="#">Ver Pedidos</a>
                            </p>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'home',
    methods: {
      goTo: function (destiny) {
        this.$router.push('/' + destiny)
      }
    }
  }
</script>

<style lang="stylus">
    .card
        transition all 0.3s
        cursor pointer

        a
            color #0B5271

        .dashboard-icon
            font-size 60px
            display block
            margin 0 auto
            color #0B5271

        &:hover
            background-color #0B5271
            color #ffffff

            a
                color #ffffff

            .dashboard-icon
                color #ffffff
</style>
