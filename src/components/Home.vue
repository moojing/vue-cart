<template>
  <a href="#" @click="logout"> Logout </a>
</template>

<script>
export default {
  methods:{
    logout(){
         const api = process.env.VUE_APP_API_BASE 
        this.$http.post(`${api}/logout`,this.user).then(res=>{
           if(res.data.success){
             this.$router.push('/login')
           }
          }) 
    } 
  } 
}
</script>

<style>

</style>
