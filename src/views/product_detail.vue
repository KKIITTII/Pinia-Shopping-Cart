<template>
  <div v-if="load">
    <h2>กำลังโหลดข้อมูลสินค้า.....</h2>
  </div>
  <div class="row mt-3" v-else>
    <div class="col-md-6">
      <img :src="product.image" alt="" class="img-fluid" />
      <div class="col-md-6">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <h4>{{ product.price }}</h4>
      </div>
    </div>
    <div class="d-flex mt-3">
      <div class="btn-group me-auto">
        <!-- {{props.id}} -->
        <button class="btn btn-outline-primary" @click="increment_quantity()">
          เพิ่มสินค้า
        </button>
        <button class="btn btn-outline-primary">{{ quantity }}</button>
        <button class="btn btn-outline-primary" @click="decrement_quantity()">
          ลดสินค้า
        </button>
      </div>
      <button class="btn btn-outline-primary">เพิ่มลงตะกร้า</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
// const props = defineProps(['id'])

const product = ref({});
const quantity = ref(1);

const increment_quantity = () => {
  quantity.value++;
};

const decrement_quantity = () => {
  quantity.value--;
};

const route = useRoute();
const load = ref(true);
const product_detail = async () => {
  const response = await fetch("https://fakestoreapi.com/products/" + route.params.id);
  // const response = await fetch('https://fakestoreapi.com/products/' + props.id)
  product.value = await response.json();
  load.value = false;
};

onMounted(() => product_detail());
</script>
