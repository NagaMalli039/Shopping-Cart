<template>
    <div>
      <p>Products</p>
      <div v-for="p in products" v-bind:key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { useCartStore } from '@/stores/cart' // Import cart store
  const cartStore = useCartStore() // Access the cart store


   const products = ref([]); // Create a reactive ref to store product data

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('https://fakestoreapi.com/products');
  //     products.value = response.data;
  //   } catch (error) 
  //   {
  //     console.error('Error fetching products:', error);
  //   }
  // };
  
  onMounted(async()=> {
  //  fetchData()
    await cartStore.fetchData()
    products.value=cartStore.items
  }); // Call fetchData on component mount

  </script>
  