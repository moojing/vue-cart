<template>
    <div class="navbar">
        <a href="#" class="logo">
                 <div class="logo-img"> </div>
                 <span>黑木音樂</span>
        </a>
        <div class="dropdown ml-auto">
      <button class="btn btn-sm btn-cart" data-toggle="dropdown" data-flip="false">
        <i class="fa fa-shopping-cart text-dark fa-2x" aria-hidden="true"></i>
        <span class="badge badge-pill badge-danger">{{carts.length}}</span>
        <span class="sr-only">unread messages</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right p-3" style="min-width: 600px" data-offset="400">
        <h6>已選擇商品</h6>
        <table class="table table-sm">
          <tbody>
            <tr v-for="cart in carts" :key="cart.id">
             
              <td class="align-middle"> {{cart.product.title}}</td>
              <td class="align-middle">1張</td>
              <td class="align-middle text-right">{{cart.product.price}}</td>
               <td class="align-middle text-center">
                <a  class=" btn btn-outline-secondary" data-toggle="modal" @click="$store.commit('deleteCarts',cart.id)" >
                  <i class="fa fa-trash-o" aria-hidden="true"></i><span>刪除</span>
                </a>
              </td>
            </tr>
         
          </tbody>
        </table>
        <a href="shoppingCart-checkout.html" class="btn btn-primary btn-block">
          <i class="fa fa-cart-plus" aria-hidden="true"></i> 結帳去
        </a>
      </div>
    </div>
         
    </div>
</template>

<script>
 
import {mapState} from "vuex"
export default {
  data(){
    return{
    }
  },
  created(){
    this.getCarts()
  },
  methods:{
    getCarts(){
     this.$store.commit('getCarts')
    }
  },
  computed:{
    ...mapState(['carts'])
  }
}
</script>

<style lang="scss" scoped>
a.logo {
  display: inline-block;

  span {
    font-size: 32px;
    color: black;
    text-decoration: none;
    vertical-align: middle;
  }
  &:hover {
    text-decoration: none !important;
  }
}
.logo-img {
  width: 100px;
  vertical-align: middle;
  display: inline-block;
  background-image: url("../static/images/logo1.png");
  background-position: center;
  height: 64px;
  background-size: 126%;
}
.navbar {
  padding-right: 30px;
}
.menu {
  ul {
    display: inline-block;
    vertical-align: middle;
  }
  li {
    display: inline-block;
    margin: 10px 20px;
    a {
      color: black;
      font-size: 22px;
      text-decoration: none;
    }
  }
}
</style>
