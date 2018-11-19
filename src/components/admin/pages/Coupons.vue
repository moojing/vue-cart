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
                  <span>新增優惠券</span>
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm-6 ">
                        <div class="form group">
                            <label for="title">優惠名稱</label>
                            <input type="text" v-model="tempCoupon.title" class="form-control" id="title"
                                placeholder="請輸入標題">
                        </div>
                        <div class="form group">
                            <label for="title">優惠代碼</label>
                            <input type="text" v-model="tempCoupon.code" class="form-control" id="title"
                                placeholder="優惠代碼">
                        </div>
                    
                  </div>
                  <div class="col-sm-6 ">
                        <div class="form group">
                            <label for="title">優惠內容</label>
                            <input type="text" v-model="tempCoupon.percent" class="form-control" id="title"
                                placeholder="優惠內容">
                        </div>
                         <div class="form-check">
                          <input class="form-check-input" v-model="tempCoupon.is_enabled"  type="checkbox" value="1" id="defaultCheck1">
                          <label class="form-check-label" for="defaultCheck1">
                           是否啟用
                          </label>
                        </div>
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



    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger" @click="deleteCoupon(status.deleteId)"
            >確認刪除</button>
        </div>
      </div>
    </div>
  </div>
    
    </div>
</template>

<script>
import {
    ajaxGetCoupon,ajaxUpdateCoupon,ajaxDeleteCoupon
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
        tempCoupon:{
          title:'', 
          is_enabled:'', 
          percent:''
        },
        status:{
          deleteId:''
        }
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
    
    openEditModal(isNew,item) {
        if(isNew){
            this.tempCoupon = {}; 
            this.isNew = true; 
        }else{
            this.tempCoupon = {...item}; 
            this.isNew = false;
        } 
        $('#couponModal').modal('show')
    },
    openDeleteModal(id){
        this.status.deleteId = id 
        $('#delProductModal').modal('show')
    }, 
    deleteCoupon(id){
            if(this.status.deleteId){
               ajaxDeleteCoupon(id).then((res)=>{
                 $('#delProductModal').modal('hide')
                   if(res.data.success){
                    this.$bus.$emit('message:push','已刪除優惠券！！','danger')
                   }else{
                    this.$bus.$emit('message:push','感覺有哪裡不對勁！！','warning')
                    console.log(res.data)
                   }
                this.status.deleteId='',
                this.getCoupons()
            }) 
            }
           
        },
    updateCoupon(){
        const customPath = process.env.VUE_APP_API_CUSTOMPATH
        let api =  `/api/${customPath}/admin/coupon`
        let httpMethod = 'post'
        
        if(!this.isNew){
            api += `/${this.tempCoupon.id}`
            httpMethod = 'put'
        }

        ajaxUpdateCoupon(httpMethod,api,{data:this.tempCoupon}).then((res)=>{
            $('#couponModal').modal('hide')
                if(res.data.success){
                this.$bus.$emit('message:push','產品資料更新成功！！','success')
                }else{
                  console.log(res.data)
                this.$bus.$emit('message:push','感覺有哪裡不對勁！！','warning')
               
                }

            this.getCoupons()

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
