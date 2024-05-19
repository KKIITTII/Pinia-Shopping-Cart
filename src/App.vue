<template>
  <navbar_product />

  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import navbar_product from "./components/navbar_product.vue";
import { useProductStore } from "./store/product";
const product_store = useProductStore();
import { useCartStore2 } from "./store/cart2";
const cart_store = useCartStore2();

onMounted(() => product_store.fetch_products());
onMounted(() => cart_store.loadItems());
</script>
