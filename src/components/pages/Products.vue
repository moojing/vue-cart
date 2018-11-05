<template>
    <div>Products</div>    
</template>

<script>
import {ajaxGetProducts} from '@/api/products'
export default {
    data:()=>({
        products:[],  
    }),
    methods:{
        getProducts(){
            ajaxGetProducts().then(res=>{
                console.log('data',res.data)
            })
        } 
    },created(){
        this.getProducts()
    }
}
</script>

<style>
</style>
