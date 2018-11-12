<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="row mt-4">
           <div class="card border-0 shadow-sm mx-4" style="width: 18rem;" v-for="product in products" :key="product.id">
                 
                <img :src="product.imageUrl" alt="" class=" card-img-top ">
                 
                <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{product.category}}</span>
                <h5 class="card-title">
                    <a href="#" class="text-dark">{{product.title}}</a>
                </h5>
                <p class="card-text">{{product.content}}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5" v-if="!product.price">{{product.origin_price}} 元</div>
                    <del class="h6" v-if="product.price">原價 {{product.origin_price}} 元</del>
                    <div class="h5" v-if="product.price">現在只要 {{product.price}} 元</div>
                </div>
                </div>
                <div class="card-footer d-flex">
                <button type="button" @click="getProduct(product.id)" class="btn btn-outline-secondary btn-sm">
                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem == product.id"></i>
                    查看更多
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm ml-auto">
                    <!-- <i class="fas fa-spinner fa-spin"></i> -->
                    加到購物車
                </button>
                </div>
            </div>
        </div>

        <div class="modal fade" id="ProductModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                <div class="modal-header  ">
                    <h5 class="modal-title" >
                         <span>{{product.title}}</span>
                    </h5>
                    
                </div>

                <div class="modal-body px-5   ">
                   <div class="row justify-content-center">
                        <img :src="product.imageUrl" alt="" class="img-fluid ">
                   </div>
                   <div class="row mb-3"> 
                       {{product.content}}
                   </div>
                   <div class="row justify-content-between align-items-baseline">
                        <div class="h5" v-if="!product.price">{{product.origin_price}} 元</div>
                        <del class="h6" v-if="product.price">原價 {{product.origin_price}} 元</del>
                        <div class="h5" v-if="product.price">現在只要 {{product.price}} 元</div>
                    </div>
                
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary"
                    >確認刪除</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    ajaxGetProducts,ajaxGetProduct
} from '@/api/products'
import $ from 'jquery'
export default {
    data(){
        return{
            isLoading:false, 
            status:{
                loadingItem:false
            },
            products:[], 
            product:{}
        } 
    }, 
    methods:{
        getProducts() {
        this.isLoading = true
        ajaxGetProducts().then(res => {
            this.products = res.data.products
            console.log(res.data.products)
            this.isLoading = false

        })
    },
    getProduct(id){
        this.status.loadingItem = id
        ajaxGetProduct(id).then(res=>{
            console.log(res)
            $('#ProductModal').modal('show')
            this.product = res.data.product
            this.status.loadingItem = '' 
        })
    }

   
   },
    created(){
        this.getProducts()
    }
}
</script>

<style>
</style>
