<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="row mt-4">
            <div class="card" style="width: 18rem;" v-for="item in products" :key="item.id">
                <img class="card-img-top" :src="item.imageUrl" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    ajaxGetProducts
} from '@/api/products'
export default {
    data(){
        return{
            isLoading:false, 
            products:[], 
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
   
   },
    created(){
        this.getProducts()
    }
}
</script>

<style>
</style>
