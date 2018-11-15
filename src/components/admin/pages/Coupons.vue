<template>
    <div>
          <loading :active.sync="isLoading" ></loading>
        <div class="text-right mt-4">
            <button class="btn btn-primary" @click="openEditModal(true)">建立新的優惠</button>
        </div>
        <table class="table mt-4">
            <thead>
                <th width="80">優惠名稱</th>
                <th width="80">優惠內容</th>
                <th width="80">是否啟用</th>
                <th width="80">操作</th>
            </thead>
            <tbody>
                <tr v-for="(item,index) in coupons" :key="index">
                    <td>{{item.title}}</td>
                    <td>{{item.percent}}</td>
                    <td>
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td>
                      <div class="btn-group" role="group" aria-label="Basic example">
                         <button class="btn btn-outline-primary btn-sm" @click="openEditModal(false,item)">
                            編輯
                        </button>
                         <button class="btn btn-outline-danger btn-sm" @click="openDeleteModal(item.id)">
                            刪除
                        </button>
                      </div>
                       
                    </td>
                </tr>
            </tbody>
        </table>
   

        <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"  aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content border-0">
              <div class="modal-header bg-dark text-white">
                <h5>
                  <span>新增優惠勸</span>
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm-4">
             
                  </div>
                  <div class="col-sm-8">
                    
                    

                   
                      
                    
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
              </div>
            </div>
          </div>
    </div>
    
    </div>
</template>

<script>
import {
    ajaxGetCoupon,ajaxUpdateCoupon
} from '@/api/coupons'
import $ from 'jquery'  
export default {
  created(){
      this.getCoupons()
  },
  data(){
      return{
        coupons:[],
        pagination:{},
        isLoading:false,
        tempCoupon:{}
      }
    },
  methods:{
    getCoupons(page=1) {
            this.isLoading = true
            ajaxGetCoupon(page).then(res => {
               
                this.coupons = res.data.coupons
                this.pagination = res.data.pagination 
                this.isLoading = false
              
            })
    },
    updateCoupon(){

    },
    openEditModal(isNew,item) {
        if(isNew){
            this.tempProduct = {}; 
            this.isNew = true; 
        }else{
            this.tempProduct = {...item}; 
            this.isNew = false;
        } 
        $('#couponModal').modal('show')
    },
    openDeleteModal(){
        
    },
    updateProduct(){
        const customPath = process.env.VUE_APP_API_CUSTOMPATH
        let api =  `/api/${customPath}/admin/coupon`
        let httpMethod = 'post'
        
        if(!this.isNew){
            api += `/${this.tempCoupon.id}`
            httpMethod = 'put'
        }

        ajaxUpdateCoupon(httpMethod,api,{data:this.tempCoupon}).then((res)=>{
            $('#productModal').modal('hide')
                if(res.data.success){
                this.$bus.$emit('message:push','產品資料更新成功！！','success')
                }else{
                this.$bus.$emit('message:push','感覺有哪裡不對勁！！','warning')
               
                }

            this.getProducts()

        }).catch(err=>{
            // eslint-disable-next-line
            this.$bus.$emit('message:push',err,'warning')
            $('#couponModal').modal('hide')
        })
    },
    
  }
}
</script>

<style>
</style>
