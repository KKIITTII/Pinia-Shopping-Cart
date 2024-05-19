import {defineStore} from 'pinia';
import {ref, computed} from 'vue';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { useProductStore } from './product'

export const useCartStore = defineStore('useCartStore', () => {

    const cart = ref([])

    const add_cart = (id, price, quantity = 1)  => {
        const data = {
            id,   
            price,
            quantity,
        }
        
        const findId = cart.value.find(item => item.id === data.id)
        if(findId) {
            alert_add_cart_failed()
        }else
        {
            cart.value.push(data)
            saveItems()
            alert_add_cart()
        }
    }

    const saveItems = () => {
        localStorage.setItem('cart', JSON.stringify(cart.value))
    }

    const loadItems = () => {
        if(localStorage.getItem('cart'))
        {
            cart.value = JSON.parse(localStorage.getItem('cart'))
        }
    }

    const alert_add_cart_failed = () => {
        Swal.fire({
            title: 'คุณได้เพิ่มสินค้าไปแล้ว',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }

    const alert_add_cart = () => {
        Swal.fire({
            position: 'top-center',
            title: 'เพิ่มสินค้าเรียบร้อย',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool',
            timer: 1500,
            showConfirmButton: false
        })
    }

    const cart_preview = computed(() => { 

        const product_store = useProductStore()

        return cart.value.map((product) => {
            // console.log("product_store.products:  ", product_store.products.id)
            const findIndexProduct = product_store.products.findIndex(item => item.id === product.id)
            console.log("findIndexProduct:  ", findIndexProduct)
            if (findIndexProduct !== -1) 
            {
                return {
                    product : product_store.products[findIndexProduct],
                    quantity: product.quantity,
                    total_price   : product_store.products[findIndexProduct].price * product.quantity
                }
            }else 
            {
                console.error(`Product with id ${product.id} not found in product store.`);
                return { // Handle missing product (e.g., display a message)
                id: product.id, // Include product ID for reference
                quantity: product.quantity,
                total_price: 0, // Set a default price for missing product
                // You can add a property to indicate a missing product
                missingProduct: true
                };
            }
        })
        
    })

    const increment_quantity = (index) => {
        cart.value[index].quantity++
        saveItems()
    }

    const decrement_quantity = (index) => {
        cart.value[index].quantity--
        if( cart.value[index].quantity <= 0 )
        {
            cart.value.splice(index, 1)
        }
        saveItems()
    }

    const remove_cart = (index) => {
        cart.value.splice(index, 1)
        saveItems()
    }

    const clear_cart =  () => {
        cart.value = []
        saveItems()
    }


    return {add_cart, loadItems, cart, cart_preview, remove_cart, increment_quantity, decrement_quantity, clear_cart}

})