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
              <input class="form-control" type="text" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-outline-warning" type="submit"  >
                  <i class="fa fa-search" aria-hidden="true"></i> Search</button>
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
                  <img class="card-img-top" :src="product.image" alt="Card image cap">
                  <div class="card-body">
                    <h4 class="card-title">{{product.title}}</h4>
                    <p class="card-text">{{product.description}}</p>
                  </div>
                  <div class="card-footer border-top-0 bg-white">
                    <a href="#" class="btn btn-outline-secondary btn-block btn-sm">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i> 搶購去
                    </a>
                  </div>
                </div>
              </div>

 

        
            </div>
            <!-- pagination -->
            <nav aria-label="Page navigation" class="my-5">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="tab-pane" id="list-gift">
            <div class="row align-items-stretch">
              <!-- 禮品 -->
              <div class="col-md-4 mb-4">
                <div class="card border-0 box-shadow text-center h-100">
                  <img class="card-img-top" src="https://images.unsplash.com/photo-1482173074468-5b323335debe?w=1350" alt="Card image cap">
                  <div class="card-body">
                    <h4 class="card-title">超精緻禮物</h4>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                      is a little bit longer.</p>
                  </div>
                  <div class="card-footer border-top-0 bg-white">
                    <a href="#" class="btn btn-outline-secondary btn-block btn-sm">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i> 搶購去
                    </a>
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
import productsData from "@/static/products"
export default {
 data(){
     return{
        products:productsData, 
        categories:[],
        currentCategory:'all', 
     } 
 },
 methods:{
     onCategoryClick(category){
        this.currentCategory = category; 
     } 
 },
 created(){
    let categories = []; 
     productsData.forEach(product => {
        if(categories.indexOf(product.category)<0){
            categories.push(product.category)
        } 
    });
    this.categories = categories  
 }, 
 computed:{
     filteredProducts(){
         let result = this.products; 
         if (this.currentCategory=='all'||this.currentCategory==''){
            return result
         }else{
            let categoryFilter=(product)=> this.currentCategory===product.category
            result = result.filter(categoryFilter)
         }
        return result
     }
 } 
 
}
</script>

<style>
</style>
