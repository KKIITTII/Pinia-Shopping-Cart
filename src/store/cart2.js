import {defineStore} from 'pinia';
import {ref, computed} from 'vue';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


export const useCartStore2 = defineStore('useCartStore2', () => {

    const cart = ref([])
    const isEmpty = cart.value.length === 0


    const add_cart = (product)  => 
    {
        const findId = cart.value.find(item => item.id === product.id)
        if(findId) {
            alert_add_cart_failed()
        }else
        {
            cart.value.push({...product, quantity: 1})
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

    const cart_preview = computed(() => 
    { 
        return cart.value.map((product) => 
        {
            return {
                product : product,
                quantity: product.quantity,
                total_price   : product.price * product.quantity
            }
        })
    })

    const cart_total = computed(() =>
    {
        return cart.value.reduce((acc, item) =>
        {
            acc = acc + item.quantity
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


    return {add_cart, loadItems, cart, cart_preview, remove_cart, increment_quantity, decrement_quantity, clear_cart, cart_total, isEmpty}

})