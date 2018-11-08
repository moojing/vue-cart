<template>
      <div class="container main-contant mb-1">
    <nav aria-label="breadcrumb" role="navigation">
      <ol class="breadcrumb bg-transparent pl-0">
        <li class="breadcrumb-item">
          <a href="#">首頁</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">金牌專賣店</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">金牌西裝</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-md-4 mb-5">
        <div class="sticky-top" style="top: 10px;">
          <h1 class="h2">金牌西裝
            <small class="text-muted">(加拉哈德版)</small>
          </h1>
          <div class="d-flex my-3 align-items-end justify-content-end">
            <del class="text-muted">售價 $1299</del>
            <div class="h3 mb-0 ml-auto text-danger">
              <small>網路價 NT$</small>
              <strong>520</strong>
            </div>
          </div>
          <hr> 尺寸:
          <div class="btn-group btn-group-sm btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-secondary active">
              <input type="radio" name="size" checked> SM
            </label>
            <label class="btn btn-outline-secondary">
              <input type="radio" name="size"> M
            </label>
            <label class="btn btn-outline-secondary disabled">
              <input type="radio" name="size" disabled> L
            </label>
            <label class="btn btn-outline-secondary">
              <input type="radio" name="size"> XL
            </label>
          </div>

          <div class="input-group mt-3">
            <select name="" class="form-control mr-1" id="">
              <option value="1">1 件</option>
              <option value="2">2 件</option>
              <option value="3">3 件</option>
            </select>
            <a href="shoppingCart-checkout.html" class="btn btn-primary">
              <i class="fa fa-cart-plus" aria-hidden="true"></i> 加入購物車
            </a>
          </div>

          <div class="mt-2 text-right text-muted">
            <i class="fa fa-cc-visa" aria-hidden="true"></i>
            <i class="fa fa-cc-jcb" aria-hidden="true"></i>
            <i class="fa fa-cc-paypal" aria-hidden="true"></i>
          </div>

        </div>


      </div>
      <div class="col-md-8">
        <h2>帥氣的西裝無人能敵</h2>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little
          bit longer.</p>

        <h3 class="mt-5 text-center">合身剪裁</h3>
        <img src="https://images.unsplash.com/photo-1472417583565-62e7bdeda490?w=634" class="w-100" alt="">

        <h3 class="mt-5 text-center">簡單就好</h3>
        <img src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?w=1500" class="w-100" alt="">

        <h3 class="mt-5 text-center">不佔空間</h3>
        <img src="https://images.unsplash.com/photo-1475530060488-75a6de1dca6f?w=675" class="w-100" alt="">
        <div class="alert alert-secondary mt-4" role="alert">
          <h2 class="text-center">購物說明</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, at! Totam, exercitationem repellat. Saepe facere
            amet expedita perferendis voluptatem dicta dignissimos tempora ut atque, rerum doloribus? Magni, blanditiis.
            Assumenda, distinctio!</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
