import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useProductStore = defineStore('useProductStore', () =>{

    const products = ref([])
    const loading = ref(false)
    const isEmpty = computed(() => {
        return products.value.length === 0
    })

    const fetch_products = async () => {
        loading.value = true
        const response = await fetch('https://fakestoreapi.com/products')
        const list_of_products = await response.json()
        products.value = list_of_products
        loading.value = false
    }

    return { fetch_products, products, isEmpty}
});