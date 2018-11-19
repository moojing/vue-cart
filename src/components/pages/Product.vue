<template>
    <div class="container main-contant mb-1">
    <nav aria-label="breadcrumb" role="navigation">
      <ol class="breadcrumb bg-transparent pl-0">
        <li class="breadcrumb-item">
          <router-link to="/">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/">黑木特賣區</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
           <router-link :to="`/product/${product.id}`">{{product.title}}</router-link>
          
        </li>
      </ol>
    </nav>
    <div class="row">
        <div class="col-md-4 mb-5">
          <div class="sticky-top" style="top: 10px;">
            <h1 class="h2">{{product.title}}
            </h1>
            <div class="d-flex my-3 align-items-end justify-content-end">
              <del class="text-muted">{{product.origin_price}}</del>
              <div class="h3 mb-0 ml-auto text-danger">
                <small>網路價 NT$</small>
                <strong>{{product.price}}</strong>
              </div>
            </div>
            

            <div class="input-group mt-3">
              <select name="qty" v-model="qty" class="form-control mr-1" id="">
                <option value="1">1 件</option>
                <option value="2">2 件</option>
                <option value="3">3 件</option>
              </select>
              <a href="##" class="btn btn-primary" @click="addToCart(id)">
                <i class="fa fa-cart-plus" aria-hidden="true"></i> 加入購物車
              </a>
            </div>

        

          </div>
        </div>
        <div class="col-md-8">
        

       
        <img :src="product.imageUrl" class="w-100" alt="">
       
        
          <h2 class="text-center mt-4">購物說明</h2>
          <p>{{product.description}}</p>
        </div>
      </div>

    </div>
  
</template>

<script>
import {ajaxGetProduct} from "@/api/products"
import {ajaxPostCart} from "@/api/cart"
export default {
  data(){
    return {
      product:[],
      id:this.$route.params.id,
      qty:1
    } 
  },
  methods:{
   getProdcut(){
      ajaxGetProduct(this.id).then(res=>{
        this.product = res.data.product
     })
   },
   addToCart(product_id){
      let data = { 
        product_id, qty:this.qty
      }
      ajaxPostCart({data}).then(res=>{
          
        if(res.data.success){
            this.$bus.$emit('message:push','已加入購物車','success')
            this.$store.commit('getCarts')
        }
      })
    },
  },
  created(){
    this.getProdcut();
  }
}
</script>

<style>
</style>
