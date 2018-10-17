<template>
    <div class="col-md-12">
        <div class="row justify-content-center">
            <p>&nbsp;</p>
        </div>
        <div class="row justify-content-center" id="Pedidos">
            <div class="col-12 text-center">
                <h1>Pedidos</h1>
            </div>
            <div class="col-12 text-right">
                <button type="button" class="btn btn-link btn-lg" @click="regresar()">Regresar</button>
            </div>
            <div class="col-lg-10">
                <div class="row justify-content-center">
                    <div class="col-10" v-for="pedido in $parent.pedidos">
                        <div class="row">
                            <div class="col-12"><strong>Cliente: </strong>pedido.cliente</div>
                            <div class="col-12">
                                <p v-for="orden in pedido.orden">
                                    {{orden.amount}} {{orden.name}} S/{{orden.price}}
                                </p>
                            </div>
                            <div class="col-12"><strong>Total: </strong>S/ {{pedido.total}}</div>
                        </div>
                        <hr/>
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
      },
      regresar: function () {
        this.$router.replace({name: 'home'})
      }
    }
  }
</script>

<style lang="stylus">
    #Pedidos
        p
            margin-bottom 0
</style>
