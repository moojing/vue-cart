<template>
 <div> 
        <NavBar/>
        <Jumbotron/>
        <ProductList/>
       
 </div>
</template>

<script>

import NavBar from "@/components/Nav" 
import Jumbotron from "@/components/Jumbotron"
import ProductList from "@/components/ProductList"
export default {
    data(){
        return {
             
        } 
    }, 
    components:{NavBar,Jumbotron,ProductList},
    
   
}
</script>

<style>
</style>
