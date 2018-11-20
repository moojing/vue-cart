<template>
   <div>
      <div class="container main-contant py-5">
    <h1 class="text-center mb-3 text-secondary">黑木音樂 結帳</h1>
    <section class="form-row align-items-center text-center">
      <div class="col">
        <div class="alert alert-success alert-rounded mb-0" role="alert">
          1.輸入訂單資料
        </div>
      </div>
      <div class="col">
        <div class="alert alert-light alert-rounded mb-0" role="alert">
          2.金流付款
        </div>
      </div>
      <div class="col">
        <div class="alert alert-light alert-rounded mb-0" role="alert">
          3.完成
        </div>
      </div>
    </section>

    <section class="row justify-content-center mt-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h6 class="mb-0 d-flex align-items-center">
              <a data-toggle="collapse" href="#collapseOne">
                顯示購物車細節
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </a>
              <span class="h3 ml-auto mb-0">${{cartsTotal}}</span>
            </h6>
          </div>
        </div>
        <div id="collapseOne" class="collapse mt-3">
          <table class="table table-sm">
            <thead>
              <tr>
                <th width="30"></th>
                <th width="100"></th>
                <th>商品名稱</th>
                <th width="100">數量</th>
                <th width="80">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr  v-for="cart in carts" :key="cart.id">
               
                <td class="align-middle">
                  <img :src="cart.imageUrl" class="img-fluid img-thumbnail" alt="">
                </td>
                <td width="265" class="align-middle">{{cart.product.title}}</td>
                <td class="align-middle">{{cart.qty}}件</td>
                <td class="align-middle text-right">{{cart.product.price}}</td>
                 <td class="align-middle text-center">
                  <a href="#removeModal" class="btn btn-secondary" data-toggle="modal" data-title="刪除" @click="$store.commit('deleteCarts',cart.id)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i><span>刪除</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td colspan="4" class="text-right">運費</td>
                <td class="text-right">
                  <strong>$60</strong>
                </td>
              </tr>
              <tr>
                <td colspan="4" class="text-right">合計</td>
                <td class="text-right">
                  <strong>${{cartsTotal+60}}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5 class="py-3 mt-5 mb-2 text-center bg-light">
          訂購人資訊
        </h5>
        <form id="needs-validation" novalidate>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="username">姓名</label>
              <input type="text" class="form-control" v-model="order.user.name" id="username" placeholder="姓名" required>
              <div class="invalid-feedback">
                請輸入姓名
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="email">Email</label>
              <input type="email" class="form-control" v-model="order.user.email" id="email" placeholder="Email" required>
              <div class="invalid-feedback">
                請輸入正確的 Email
              </div>
            </div>
              <div class="form-group col-md-6">
              <label for="email">電話</label>
              <input type="email" class="form-control" v-model="order.user.tel" id="tel" placeholder="Tel" required>
              <div class="invalid-feedback">
                請輸入正確的 電話
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="state">國家</label>
              <select id="state" class="form-control" required>
                <option selected>台灣</option>
              </select>
            </div>
            <div class="form-group col-md">
              <label for="city">城市</label>
              <select name="city" id="city" class="form-control" required>
                <option value="taipei">台北市</option>
                <option value="tainan">台南市</option>
                <option value="kashong">高雄市</option>
              </select>
            </div>
            
          </div>
          <div class="form-group">
            <label for="inputAddress">地址</label>
            <input type="text" class="form-control" v-model="order.user.address"  id="inputAddress" placeholder="重慶南路一段122號" required>
            <div class="invalid-feedback">
              請輸入地址
            </div>
          </div>
          <div class="text-right">
            <router-link to="/"> <div class="btn btn-secondary mx-3">繼續選購</div></router-link>
           
            <div class="btn btn-primary mx-3" @click="createOrder">確認付款</div>
           
          </div>
        </form>
         

      </div>
    </section>

  </div>
   </div>
</template>

<script>
import {mapState} from "vuex"
import {
    ajaxPostOrder
} from '@/api/order'
export default {
  data(){
    return{
      order:{
        user:{
          name: "test",
          email: "test@gmail.com",
          tel: "0912346768",
          address: "taipei"
        }
      }
    }
  },
 created(){
    this.getCarts()
  },
  methods:{
    getCarts(){
     this.$store.commit('getCarts')
    },
    createOrder(){
        ajaxPostOrder({data:this.order}).then((res)=>{
              console.log('已送出訂單',res);
               this.$bus.$emit('message:push','已送出訂單!','success')
                this.getCarts()
                this.$router.push(`/purchase/${res.data.orderId}`)
          })
    } 
  },
  computed:{
    ...mapState(['carts','cartsTotal'])
  }
}
</script>

<style>
</style>
