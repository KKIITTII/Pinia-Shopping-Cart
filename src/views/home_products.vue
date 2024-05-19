<template>
  <div class="row" v-if="product_store.products.length !== 0">
    <div class="col mb-2" v-for="(product, index) in product_store.products" :key="index">
      <div class="card" style="width: 19rem">
        <img
          :src="product.image"
          class="card img top mx auto"
          style="width: 12rem; height: 12rem"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.category }}</p>
          <p class="card-text">ราคา {{ product.price }} บาท</p>
          <!-- <router-link :to="{ name: 'product_detail', params: {id: product.id } }" class="btn btn-primary mx-2">รายละเอียด </router-link> -->
          <router-link :to="`/product_detail/${product.id}`" class="btn btn-primary mx-2"
            >รายละเอียด
          </router-link>
          <button
            class="btn btn-success"
            @click="cart_store.add_cart(product.id, product.price)"
          >
            เพิ่มลงตะกร้า
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center" v-else>
    <h2>กำลังโหลดข้อมูลสินค้า.....</h2>
  </div>
</template>

<script setup>
//useProductStore

import { useProductStore } from "../store/product";
import { useCartStore } from "../store/cart";

const cart_store = useCartStore();
const product_store = useProductStore();
</script>
