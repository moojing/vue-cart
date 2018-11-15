<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="row mt-4">
           <div class="card border-0 shadow-sm mx-4 my-3" style="width: 18rem;" v-for="product in products" :key="product.id">
                 
                <img :src="product.imageUrl" alt="" class=" card-img-top ">
                 
                <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{product.category}}</span>
                <h5 class="card-title">
                    <a href="#" class="text-dark">{{product.title}}</a>
                </h5>
                <p class="card-text">{{product.content}}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5" v-if="!product.price">{{product.origin_price}} 元</div>
                    <del class="h6" v-if="product.price">原價 {{product.origin_price}} 元</del>
                    <div class="h5" v-if="product.price">現在只要 {{product.price}} 元</div>
                </div>
                </div>
                <div class="card-footer d-flex">
                <button type="button" @click="getProduct(product.id)" class="btn btn-outline-secondary btn-sm">
                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem == product.id"></i>
                    查看更多
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm ml-auto"  @click="addToCart(product.id)">
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem == product.id"></i>
                    加到購物車
                </button>
                </div>
            </div>
        </div>
        
        <div class="row mt-5 d-flex justify-content-center" > 
          <div class="col-md-6">
             <table class="table table-striped" >
              <thead>
                <tr>
                  <th></th>
                  <th>品名</th>
                  <th>數量</th>
                  <th>單價</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart,index) in carts.carts" :key="index" >
                  <td><div class="btn btn-danger btm-sm" @click="deleteCartProduct(cart.id)">刪除</div></td>
                  <td>{{cart.product.title}}</td>
                  <td width="60px">{{cart.qty}} / 張</td>
                  <td>{{cart.product.price}} </td>
                </tr>
               
              </tbody>
              <tfoot>
                <tr>
                    <td colspan="3" class="text-right">總計</td>
                    <td>{{carts.total}}</td>
                   
                </tr>
                <tr r v-if="carts.total !== carts.final_total">
                    <td colspan="3"  class="text-right text-success ">折扣價</td>
                    <td  class="text-success">{{carts.final_total}}</td>
                </tr>
              </tfoot>
            </table>
            
            <div class="input-group mb-3">
                <input type="text" class="form-control"
                       v-model="couponCode" 
                       placeholder="輸入優惠碼" aria-label="輸入優惠碼" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="applyCoupon(couponCode)" >套用優惠碼</button>
                </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="ProductModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                <div class="modal-header  ">
                    <h5 class="modal-title" >
                        <span>{{product.title}}</span>
                        <div class="text-success" v-if="product.coupon">
                            已套用優惠卷
                        </div>
                    </h5>
                    
                </div>

                <div class="modal-body px-5   ">
                   <div class="row justify-content-center">
                        <img :src="product.imageUrl" alt="" class="img-fluid ">
                   </div>
                   <div class="row mb-3"> 
                       {{product.content}}
                   </div>
                   <div class="row justify-content-between align-items-baseline">
                        <div class="h5" v-if="!product.price">{{product.origin_price}} 元</div>
                        <del class="h6" v-if="product.price">原價 {{product.origin_price}} 元</del>
                        <div class="h5" v-if="product.price">現在只要 {{product.price}} 元</div>
                    </div>
                    <div class="row justify-content-between align-items-baseline">
                      <select name="qty" v-model="qty"  class="form-control">
                        <option value="1" selected >選購1個</option>
                        <option value="2">選購2個</option>
                        <option value="3">選購3個</option>
                        <option value="4">選購4個</option>
                        <option value="5">選購5個</option>
                      </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="addToCart(product.id)">加入購物車</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    ajaxGetProducts,ajaxGetProduct
} from '@/api/products'
import {
    ajaxPostCart,ajaxGetCart,ajaxDeleteCart
} from '@/api/cart'
import {
    ajaxPostCoupon
} from '@/api/coupons'
import $ from 'jquery'
export default {
    data(){
        return{
            isLoading:false, 
            status:{
                loadingItem:false
            },
            products:[], 
            product:{},
            qty:1,
            carts:[],
            couponCode:'' 
        } 
    }, 
    methods:{
    getProducts() {
        this.isLoading = true
        ajaxGetProducts().then(res => {
            this.products = res.data.products
            this.isLoading = false

        })
    },
    getProduct(id){
      this.status.loadingItem = id
      ajaxGetProduct(id).then(res=>{
          $('#ProductModal').modal('show')
          this.product = res.data.product
          this.status.loadingItem = '' 
      })
    },
    getCarts(){
      ajaxGetCart().then(res=>{
         
        this.carts = res.data.data
      })
    }, 
    addToCart(product_id){
       this.isLoading = true
      let data = { 
        product_id, qty:this.qty
      }
      ajaxPostCart({data}).then(res=>{
          
        if(res.data.success){
           $('#ProductModal').modal('hide')
            this.isLoading = false
            this.$bus.$emit('message:push','已加入購物車','success')
            this.getCarts()
        }
      })
    },
    deleteCartProduct(id){
        this.isLoading = true
        ajaxDeleteCart(id).then(res=>{
        if(res.data.success){
        $('#ProductModal').modal('hide')
            this.isLoading = false
            this.$bus.$emit('message:push','已刪除購物車商品！','danger')
            this.getCarts()
        }
        })
    },
    applyCoupon(code){
        ajaxPostCoupon({data:{code}}).then(res=>{
            console.log('res',res.data);
            this.getCarts()
        })
    }
    
   },
    created(){
        this.getProducts()
        this.getCarts()
    }
}
</script>

<style>
</style>
