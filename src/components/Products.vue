<template>
    <div class="products">
    <a-row type="flex">
      <a-col class="col-1" :span="8" :order="1">
          <div class="product-image">
              <img src="../assets/rhs.jpg" alt="">
              <div class="card-text">
                  Passion Flower
                  <p>From $66.00</p>
              </div>
          </div>
      </a-col>
      <a-col class="col-2" :span="8" :order="2">
          <div class="product-image">
              <img src="../assets/rhs.jpg" alt="">
              <div class="card-text">
                  Gikotori
                  <p>From $99.00</p>
              </div>
          </div>
      </a-col>
      <a-col class="col-3" :span="8" :order="3">
        <div class="product-image">
              <img src="../assets/rhs.jpg" alt="">
              <div class="card-text">
                  Gikotori
                  <p>From $99.00</p>
              </div>
          </div>
      </a-col>
    </a-row>
    <a-row type="flex">
      <a-col class="col-1" :span="8" :order="1">
          <div class="product-image">
              <img src="../assets/rhs.jpg" alt="">
              <div class="card-text">
                  Gikotori
                  <p>From $99.00</p>
              </div>
          </div>
      </a-col>
      <a-col class="col-2" :span="8" :order="2">
          <div class="product-image">
              <img src="../assets/rhs.jpg" alt="">
              <div class="card-text">
                  Gikotori
                  <p>From $99.00</p>
              </div>
          </div>
      </a-col>
      <a-col class="col-3" :span="8" :order="3">
        <div class="product-image">
              <img src="../assets/rhs.jpg" alt="">
              <div class="card-text">
                  Gikotori
                  <p>From $99.00</p>
              </div>
          </div>
      </a-col>
    </a-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: function () {
    return {
      parentProducts: 'Products',
      category: [
        { extract: 'Gikotori' },
        { extract: 'Ayamazi' }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.products{
    height: 10vh;
    .col-1{
        background-color: lightblue;
        height: 100%;
        .product-image {
            .card-text {
                font-size: 18px;
                p{
                    font-size: 14px;
                    opacity: .7;
                    font-weight: lighter;
                }
            }
        }
        .product-image img{
            width: 100%;
            border: 1px solid;
            border-color: white;
        }
    }
    .col-2{
        background-color: lightgreen;

        .product-image {
            .card-text {
                font-size: 18px;
                p{
                    font-size: 14px;
                    opacity: .7;
                    font-weight: lighter;
                }
            }
        }
        .product-image img{
            width: 100%;
            border: 1px solid;
            border-color: white;
        }
    }
    .col-3{
        background-color: lightsalmon;
        height: 100%;
        .product-image {
            .card-text {
                font-size: 18px;
                p{
                    font-size: 14px;
                    opacity: .7;
                    font-weight: lighter;
                }
            }
        }
        .product-image img{
            width: 100%;
            border: 1px solid;
            border-color: white;
        }
    }
}
</style>
