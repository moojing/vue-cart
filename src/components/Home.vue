<template>
 <div> 
       
        <Jumbotron/>
        <ProductList/>
       
 </div>
</template>

<script>


import Jumbotron from "@/components/Jumbotron"
import ProductList from "@/components/ProductList"
export default {
    data(){
        return {
             
        } 
    }, 
    components:{Jumbotron,ProductList},
    
   
}
</script>

<style>
</style>
