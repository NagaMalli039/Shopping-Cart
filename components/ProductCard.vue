<template>
    <q-card>
      <div class="product-card-content d-flex flex-column">  
      <p>{{ product.title }}</p>
      <p>{{ product. userid}}</p>

      <div class="btn q-pa-md q-gutter-sm">
        
        <NuxtLink :to="`products/${product.id}`">
          <q-btn color="amber" glossy label="View Details" />
        </NuxtLink>

      </div>
      <div>
        <q-btn @click="cartStore.decreaseCount(product.id)"> - </q-btn>
        <span>{{ product.quantity }}</span>
        <q-btn @click="cartStore.increaseCount(product.id)"> + </q-btn>

      </div>
      <!-- 
         <div v-for="product in products" :key="product.id">
        -->
          <q-btn @click="addToCart(product.id)" color="primary" label="Add to Cart" style="margin-left:10px" />
  </div>
     </q-card>
     
  </template>
  
  <script setup>
const { product } = defineProps(['product'])
console.log(product, 'product')

import { useCartStore } from '@/stores/cart' // Import cart store
const cartStore = useCartStore() // Access the cart store


const addToCart = (product) => {
  cartStore.addItem(product) // Call the cart store's addItem action
}


  </script>
  
  <style scoped>
  .product-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;  
  }



  </style>
  



