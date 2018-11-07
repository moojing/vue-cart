<template>
<div> 
           
    <Navbar/>
    <div class="container-fluid">
        <div class="row">
            <Alert/>
            <Sidebar/>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <router-view></router-view>
            </main>
        </div>
    </div>
   </div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Alert from './AlertMessage'
export default {
     components:{Navbar,Sidebar,Alert}
    }
</script>

<style>
</style>
