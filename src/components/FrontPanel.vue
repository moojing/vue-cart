<template>
 <div> 
        <NavBar/>
        <Alert/>
        <router-view></router-view>
        <FooterBar/>
 </div>
</template>

<script>

import NavBar from "@/components/Nav" 
import FooterBar from "@/components/Footer" 
import Alert from '@/components/admin/AlertMessage'
export default {
   
    components:{NavBar,FooterBar,Alert},
   
}
</script>

<style>
</style>
