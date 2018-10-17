<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row justify-content-center">
                <p>&nbsp;</p>
            </div>
            <div class="row justify-content-center" id="NewOrder">
                <div class="col-12 text-center">
                    <h1>Nuevo Pedido</h1>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <input type="text" class="form-control" id="cliente" placeholder="Cliente"
                               v-model="form.cliente">
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-md-6">
                            <b-card @click="add('americano')">
                                <p class="card-text text-center">
                                    <font-awesome-icon icon="coffee" class="dashboard-icon"/>
                                    <br/>
                                    <a href="#">Americano</a>
                                </p>
                            </b-card>
                        </div>
                        <div class="col-md-6">
                            <b-card @click="add('leche')">
                                <p class="card-text text-center">
                                    <font-awesome-icon icon="coffee" class="dashboard-icon"/>
                                    <br/>
                                    <a href="#">Con Leche</a>
                                </p>
                            </b-card>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <b-card @click="add('sandwich')">
                                <p class="card-text text-center">
                                    <font-awesome-icon icon="utensils" class="dashboard-icon"/>
                                    <br/>
                                    <a href="#">Sandwich de jamón y queso</a>
                                </p>
                            </b-card>
                        </div>
                        <div class="col-md-6">
                            <b-card @click="add('jugo')">
                                <p class="card-text text-center">
                                    <font-awesome-icon icon="wine-glass" class="dashboard-icon"/>
                                    <br/>
                                    <a href="#">Jugo Natural</a>
                                </p>
                            </b-card>
                        </div>
                    </div>
                    <div class="row">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Precio Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item, index) in form.order" @click="remove(index)">
                                <td scope="row">{{item.amount}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.price}}</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <strong>Total:</strong>
                                </td>
                                <td>
                                    {{form.total}}
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-md-10">
                            <button type="button" class="btn btn-primary btn-lg" @click="close()">Cerrar Pedido</button>
                        </div>
                        <div class="col-md-2">
                            <button type="button" class="btn btn-link btn-lg" @click="regresar()">Regresar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import * as swal from 'sweetalert2'

  const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  })
  export default {
    name: 'Login',
    data () {
      return {
        loginError: false,
        menu: {
          americano: {
            name: 'Café Americano',
            price: 5
          },
          leche: {
            name: 'Café con Leche',
            price: 7
          },
          sandwich: {
            name: 'Sandwich de jamón y queso',
            price: 10
          },
          jugo: {
            name: 'Jugo Natural',
            price: 7
          }
        },
        form: {
          cliente: '',
          order: {},
          total: 0
        }
      }
    },
    methods: {
      add: function (id) {
        if (this.form.order.hasOwnProperty(id) === true) {
          this.form.order[id].amount++
          this.form.order[id].price += this.menu[id].price
        } else {
          this.form.order[id] = {
            name: this.menu[id].name,
            amount: 1,
            price: this.menu[id].price
          }
        }
        this.form.total += this.menu[id].price
      },
      remove: function (id) {
        if (this.form.order[id].amount === 1) {
          delete this.form.order[id]
        } else {
          this.form.order[id].amount--
          this.form.order[id].price -= this.menu[id].price
        }
        this.form.total -= this.menu[id].price
      },
      close: function () {
        let hasErrors = false

        if (this.form.cliente === '') {
          hasErrors = true
        }
        if (this.form.order.length < 1) {
          hasErrors = true
        }

        if (hasErrors === true) {
          toast({
            type: 'error',
            title: 'Faltan datos'
          })
        } else {
          this.$parent.pedidos.push({
            cliente: this.form.cliente,
            orden: this.form.order,
            total: this.form.total
          })
          toast({
            type: 'success',
            title: 'Orden Enviada'
          })
          this.$router.replace({name: 'home'})
        }
      },
      regresar: function () {
        this.$router.replace({name: 'home'})
      }
    }
  }
</script>

<style lang="stylus">
    input.form-control
        font-size 30px
        height auto

    p.card-text
        font-size 2rem

    #newOrder
        table
            font-size 22px
</style>
