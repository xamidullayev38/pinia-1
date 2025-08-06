import { defineStore} from "pinia";
import axios from 'axios'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        isLoading: false,
        error: null
    }),
    actions: {
        async fetchProducts() {
            this.isLoading=true
            this.error=null
            try{
                const res = await axios.get('https://fakestoreapi.com/products')
                this.products = res.data
            } catch(err) {
                this.error = err.message || 'Xatolik yuz berdi'
            }finally{
                this.isLoading = false
            }
        }
    }



})
