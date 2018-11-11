<template>
    <div>
         <loading :active.sync="isLoading" ></loading>
        <div class="text-right mt-4">
            <button class="btn btn-primary" @click="openEditModal(true)"   >建立新的產品</button>
        </div>
        <table class="table mt-4">
            <thead>
                <th width="120">分類</th>
                <th>產品名稱</th>
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
                        {{item.origin_price | currencyFilter}}
                    </td>
                    <td class="text-right">
                        {{item.price | currencyFilter}}
                    </td>
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
        <Pagination
          :pagination="pagination"
          @getProducts="getProducts"/>

        <div class="modal fade" id="productModal" tabindex="-1" role="dialog"  aria-labelledby="exampleModalLabel" aria-hidden="true">

  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>新增產品</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="image">輸入圖片網址</label>
              <input type="text" v-model="tempProduct.imageUrl" class="form-control" id="image"
                placeholder="請輸入圖片連結">
            </div>
            <div class="form-group">
              <label for="customFile">或 上傳圖片
                
                <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
              </label>
              <input type="file"   id="customFile" class="form-control"
                ref="files" @change="uploadFile">
            </div>
            <img :src="tempProduct.imageUrl"
              class="img-fluid" alt="">
          </div>
          <div class="col-sm-8">
            <div class="form-group">
              <label for="title">標題</label>
              <input type="text" v-model="tempProduct.title" class="form-control" id="title"
                placeholder="請輸入標題">
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="category">分類</label>
                <input type="text" v-model="tempProduct.category" class="form-control" id="category"
                  placeholder="請輸入分類">
              </div>
              <div class="form-group col-md-6">
                <label for="price">單位</label>
                <input type="unit" tempProduct.unit class="form-control" id="unit"
                  placeholder="請輸入單位">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
              <label for="origin_price">原價</label>
                <input type="number" v-model="tempProduct.origin_price" class="form-control" id="origin_price"
                  placeholder="請輸入原價">
              </div>
              <div class="form-group col-md-6">
                <label for="price">售價</label>
                <input type="number" v-model="tempProduct.price" class="form-control" id="price"
                  placeholder="請輸入售價">
              </div>
            </div>
            <hr>

            <div class="form-group">
              <label for="description">產品描述</label>
              <textarea type="text"  v-model="tempProduct.description"  class="form-control" id="description"
                placeholder="請輸入產品描述"></textarea>
            </div>
            <div class="form-group">
              <label for="content">說明內容</label>
              <textarea type="text" v-model="tempProduct.content"  class="form-control" id="content"
                placeholder="請輸入產品說明內容"></textarea>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input"   v-model="tempProduct.is_enabled"  type="checkbox"
                  :true_value="1"
                  :false_value="1"
                  id="is_enabled"
                  >
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
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
        是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-danger" @click="deleteProduct(status.deleteId)"
          >確認刪除</button>
      </div>
    </div>
  </div>
</div>
        </div>
</template>

<script>
import $ from 'jquery'
import {
    ajaxGetProducts,ajaxUpdateProduct,ajaxDeleteProduct
} from '@/api/products' 

import {ajaxImageUpload} from '@/api/images'
import Pagination from "@/components/admin/Pagination" 
export default {
    data: () => ({
        products: [],
        tempProduct:{
                category: "",
                content: "",
                description: "",
                image: "",
                imageUrl:'',
                is_enabled: 0,
                num: 0,
                origin_price: 0,
                price: 0,
                title: "",
                unit: ""
        },
        isLoading:false,
        isNew:false,
        status: {
          deleteId:'',
          fileUploading:false, 
        }, 
        pagination:{},
    }),
    methods: {
        getProducts(page) {
            this.isLoading = true
            ajaxGetProducts(page).then(res => {
                this.products = res.data.products
                this.pagination = res.data.pagination 
                this.isLoading = false
              
            })
        },
        openEditModal(isNew,item) {
           
            if(isNew){
              this.tempProduct = {}; 
              this.isNew = true; 
            }else{
              this.tempProduct = {...item}; 
              this.isNew = false;
            } 
            $('#productModal').modal('show')
        },
        openDeleteModal(id){
           this.status.deleteId = id 
           $('#delProductModal').modal('show')
        }, 
        deleteProduct(id){
            if(this.status.deleteId){
               ajaxDeleteProduct(id).then((res)=>{
                 $('#delProductModal').modal('hide')
                   if(res.data.success){
                    this.$bus.$emit('message:push','產品已經刪除！！','danger')
                   }else{
                    this.$bus.$emit('message:push','感覺有哪裡不對勁！！','warning')
                    console.log(res.data);
                   }
                this.status.deleteId='',
                this.getProducts()
            }) 
            }
           
        },
      
        updateProduct(){
            const customPath = process.env.VUE_APP_API_CUSTOMPATH
            let api =  `/api/${customPath}/admin/product`
            let httpMethod = 'post'
            
            if(!this.isNew){
              api += `/${this.tempProduct.id}`
              httpMethod = 'put'
            }

            ajaxUpdateProduct(httpMethod,api,{data:this.tempProduct}).then((res)=>{
                $('#productModal').modal('hide')
                   if(res.data.success){
                    this.$bus.$emit('message:push','產品資料更新成功！！','success')
                   }else{
                    this.$bus.$emit('message:push','感覺有哪裡不對勁！！','warning')
                   }

                this.getProducts()

            }).catch(err=>{
               // eslint-disable-next-line
              console.log('err',err);
                this.$bus.$emit('message:push',err,'warning')
                $('#productModal').modal('hide')
            })
        },
        uploadFile(){
            
            const uploadFile = this.$refs.files.files[0]
            const formData = new FormData()
            formData.append('file-to-upload',uploadFile)
             this.status.fileUploading = true 
            ajaxImageUpload(formData,{
                    headers:{
                        'Content-Type':'multipart/form-data',
                        'Access-Control-Allow-Origin': '*'
                    }, 
                    
                }).then((res)=>{
                     this.status.fileUploading = false
                       // eslint-disable-next-line
                       console.log(res);
                     if(res.data.success){ 
                       this.$set(this.tempProduct, 'imageUrl',res.data.imageUrl)
                     }
                })
        } 
    },
    components:{
      Pagination 
    }, 
    created() {
        this.getProducts()
        // this.$bus.$emit('message:push','一段訊息','success')
    },
}
</script>

<style>
</style>
