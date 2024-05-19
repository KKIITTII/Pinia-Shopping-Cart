import { createRouter, createWebHashHistory } from 'vue-router'
// import home_products from '../views/home_products.vue'
import product_detail from '../views/product_detail.vue'
// import cart_cart from '../views/cart_cart.vue'


import home_products2 from '../views/home_products2.vue'
import cart_cart2 from '../views/cart_cart2.vue'


const routes = [

 {
  path: '/product_detail/:id',
  name: 'product_detail',
  component:  product_detail,
  // props: true
 },
//  {
//   path: '/',
//   name: 'home_products',
//   component:  home_products
//  },  
//  {
//   path: '/cart',
//   name: 'cart_cart',
//   component: cart_cart
//  },
 {
  path: '/home2',
  name: 'home_products2',
  component:  home_products2
 },  
 {
  path: '/cart2',
  name: 'cart_cart2',
  component: cart_cart2
 }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
