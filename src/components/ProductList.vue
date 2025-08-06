<script setup>
    import { onMounted } from 'vue';
    import { useProductStore } from '../stores/products';

    const productStore =useProductStore()

    onMounted(() =>{
        productStore.fetchProducts()
    })


</script>

<template>
    <div>
        <div v-if="productStore.isLoading">Yuklanmoqda../</div>
        <div v-else-if="productStore.error">Xatolik: {{ productStore.error }}</div>
        <div v-else> 
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="product in productStore.products" :key="product.id" class="p-4 border rounded shadow hover:shadow-lg transition">
                    <h2 class="font-semibold">{{ product.title }}</h2>
                </div>
            </div>
        </div>
    </div>
    
</template>