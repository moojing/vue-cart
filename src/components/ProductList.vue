<template>
  <div class="container main-contant mb-1">
   <div class="row">
           <div class="col-md-3">
        <!-- 左側選單 (List group) -->
        <div class="list-group sticky-top">
             <a class="list-group-item list-group-item-action " 
             data-toggle="list"
             :class="{active:(currentCategory=='all')}" 
             @click="onCategoryClick('all')">
             全部
             </a>
          <a class="list-group-item list-group-item-action" 
             data-toggle="list" 
             :class="{active:(currentCategory==category)}"
             @click="onCategoryClick(category)"
             v-for="(category,index) in categories" :key="index">
              {{category}}
              </a>
     
        </div>
      </div>
     <div class="col-md-9">
        <div class="d-flex mb-4">
          <!-- Search bar -->
          <form class="form-inline my-3 my-lg-0">
            <div class="input-group">
              <input class="form-control" v-model="searchText"  type="text" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-outline-warning" type="submit" @click="onSearchClick" >
                  <i class="fa fa-search" aria-hidden="true" ></i> Search</button>
              </div>
            </div>
          </form>
        </div>
        <!-- 主要商品列表 (Card) -->
        <div class="tab-content">
          <div class="tab-pane active" id="list-gold">
            <div class="row">
              <!-- 金牌 -->
                <div v-for="(product,index) in filteredProducts" :key="index" class="col-md-4 mb-4">
                <div class="card border-0 box-shadow text-center h-100">
                  <img class="card-img-top" :src="product.imageUrl" alt="Card image cap">
                  <div class="card-body">
                    <h4 class="card-title">{{product.title}}</h4>
                    <p class="card-text">{{product.content}}</p>
                  </div>
                  <div class="card-footer border-top-0 bg-white">
                   <div class="row">
                    <div class="col-md-6"> 
                      <router-link   :to="`/product/${product.id}`">
                        <a href="#" class="btn btn-outline-secondary btn-block btn-sm">
                          <i class="fa fa-cart-plus" aria-hidden="true"></i> 搶購去
                        </a>
                      </router-link>
                      
                    </div>
                     <div class="col-md-6">
                       <a href="###" class="btn btn-outline-danger btn-sm" @click="addToCart(product.id)" >
                      <i class="fa fa-cart-plus" aria-hidden="true"></i> 加入購物車
                    </a>
                     </div>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- tab-content end -->

      </div>
   </div>
   </div>
</template>

<script>
import {ajaxGetAllProducts} from "@/api/products"
import {ajaxPostCart} from "@/api/cart"
export default {
 data(){
     return{
        products:[], 
        filteredProducts:[],
        categories:[],
        currentCategory:'all', 
        searchText:'',
     } 
 },
 methods:{
     onCategoryClick(category){
       
        this.currentCategory = category; 
        this.productFilters();
     },
     onSearchClick(){
       this.productFilters();
        
      },
      productFilters(){
       
        let searchFilter =(product)=>product.title.match(this.searchText) !== null
        let categoryFilter=(product)=> this.currentCategory===product.category
        let enableFilter = (product)=> product.is_enabled ===true
        
         ajaxGetAllProducts().then(res=>{
             this.products =  res.data.products 
             let result = res.data.products
             console.log('result',result);
              result = result.filter(enableFilter)
              if ((this.currentCategory=='all'||this.currentCategory=='')){
                result = this.products;
              }else{
                result = result.filter(categoryFilter).filter(searchFilter)
              }
               
              this.filteredProducts = result
              this.getCategories()
         })
       
     },
     getCategories(){
        let categories = []; 
     
        this.products.forEach(product => {
            if(categories.indexOf(product.category)<0){
                categories.push(product.category)
            } 
        });
        this.categories = categories  
     },
     addToCart(product_id){
     
      let data = { 
        product_id, qty:1
      }
      ajaxPostCart({data}).then(res=>{
        if(res.data.success){
            this.$bus.$emit('message:push','已加入購物車!','success')
            this.$store.commit('getCarts')
        }
      })
    },
 },
 created(){
    this.productFilters()
   
    
 }, 
 computed:{
   
 } 
 
}
</script>

<style>
</style>
