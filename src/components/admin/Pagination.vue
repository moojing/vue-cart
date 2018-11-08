<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{'disabled':!pagination.has_pre}" >
            <a class="page-link" href="#" @click="$emit('getProducts',pagination.current_page-1)" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item" v-for="page in pagination.total_pages" :key="page" :class="{'active': pagination.current_page===page}">
            <a class="page-link" href="#" @click="$emit('getProducts',page)" >{{page}}</a>
          </li>
         
          <li class="page-item" :class="{'disabled':!pagination.has_next}">
            <a class="page-link" href="#" @click="$emit('getProducts',pagination.current_page+1)" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
    </nav>
          
</template>

<script>
export default {
    props:{
        pagination: Object,
    }, 
    create(){
      console.log('pagination',pagination);  
    }
     
}
</script>

<style>
</style>
