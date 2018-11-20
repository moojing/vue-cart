<template>
    <div class="container main-contant py-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h1 class="text-center mb-3 text-secondary">黑木音樂 結帳完成</h1>
        <section class="form-row align-items-center text-center">
          <div class="col">
            <div class="alert alert-success alert-rounded mb-0" role="alert">
              完成
            </div>
          </div>
        </section>

        <h4 class="text-center my-4">購買資訊</h4>
        <table class="table table-sm">
          <thead>
            <tr>
              <th width="100"></th>
              <th>商品名稱</th>
              <th width="100">數量</th>
              <th width="80">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in order.products" :key="product.id" >
              <td class="align-middle">
                <img :src="product.product.imageUrl" class="img-fluid img-thumbnail" alt="">
              </td>
              <td class="align-middle">{{product.product.title}}</td>
              <td class="align-middle">{{product.qty}} 張</td>
              <td class="align-middle text-right">{{product.product.price}}</td>
            </tr>
            <tr>
              <td colspan="3" class="text-right">運費</td>
              <td class="text-right">
                <strong>$60</strong>
              </td>
            </tr>
            <tr>
              <td colspan="3" class="text-right">合計</td>
              <td class="text-right">
                <strong>{{order.total+60}} </strong>
              </td>
            </tr>
          </tbody>
        </table>
        <hr>
        <h4 class="text-center my-4">個人資料</h4>
        <table class="table">
          <tbody>
            <tr>
              <th width="200">Email</th>
              <td>{{order.user.email}}</td>
            </tr>
            <tr>
              <th>姓名 </th>
              <td>{{order.user.name}}</td>
            </tr>
            <tr>
              <th>電話 </th>
              <td>{{order.user.tel}}</td>
            </tr>
            <tr>
              <th>地址 </th>
              <td>{{order.user.address}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import {ajaxGetOrder} from "@/api/order"
export default {
  data(){
    return{
      orderId: this.$route.params.orderId,
      order:{}
    }
  },
  methods:{
    getOrderData(id){
      ajaxGetOrder(id).then(res=>{
        this.order= res.data.order
      })
    } 
  },
  created(){
   
    this.getOrderData(this.orderId)
  }
}
</script>

<style>
</style>
