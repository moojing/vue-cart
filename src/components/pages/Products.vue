<template>
    <div>
        <div class="text-right mt-4">
         <button class="btn btn-primary">建立新的產品</button>
        </div>    
        <table class="table mt-4">
            <thead>
                <th width="120">分類</th>
                <th >產品名稱</th>
                <th width="120"> 原價</th>
                <th width="80">售價</th>
                <th width="80">是否啟用</th>
                <th width="80">編輯</th>
            </thead>
            <tbody>
                <tr v-for="(item,index) in products" :key="index">
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td class="text-right">
                        {{item.origin_price}}
                    </td>
                    <td class="text-right">
                        {{item.price}}
                    </td>
                    <td>
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm">
                            編輯
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>    
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
                 this.products = res.data.products
            })
        } 
    },created(){
        this.getProducts()
    }
}
</script>

<style>
</style>
