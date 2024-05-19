<template>
  <h1 class="mt-5">ตะกร้าสินค้า</h1>
  <div v-if="product_store.products.length !== 0">
    <table class="table">
      <thead>
        <tr>
          <th>สินค้า</th>
          <th>ราคา</th>
          <th>จำนวน</th>
          <th>รวม</th>
          <th>ลบสินค้า</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cart, index) in cart_store.cart_preview" :key="index">
          <td>
            <img :src="cart.product.image" alt="" class="img-thumbnail" width="100" />
            {{ cart.product.title }}
          </td>
          <td>{{ cart.product.price }} บาท</td>
          <td>
            <button
              class="btn btn-sm btn-secondary"
              @click="cart_store.decrement_quantity(index)"
            >
              -
            </button>
            <span class="mx-2">{{ cart.quantity }} </span>
            <button
              class="btn btn-sm btn-secondary"
              @click="cart_store.increment_quantity(index)"
            >
              +
            </button>
          </td>
          <td>{{ cart.total_price }} บาท</td>
          <td>
            <button class="btn btn-danger" @click="cart_store.remove_cart(index)">
              ลบ
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary mt-3" @click="cart_store.clear_cart()">
      เคลียตะกร้า
    </button>
  </div>
  <div v-else>LOADING.....</div>
</template>

<script setup>
// import {computed} from 'vue';
// import { onMounted } from "vue";
import { useCartStore } from "../store/cart";
import { useProductStore } from "../store/product";

const product_store = useProductStore();
const cart_store = useCartStore();
</script>

<style lang="scss" scoped></style>
