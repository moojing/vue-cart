<template>
 <div> 
        <NavBar/>
         
        <router-view></router-view>
        <FooterBar/>
 </div>
</template>

<script>

import NavBar from "@/components/Nav" 
import FooterBar from "@/components/Footer" 
export default {
   
    components:{NavBar,FooterBar},
   
}
</script>

<style>
</style>
