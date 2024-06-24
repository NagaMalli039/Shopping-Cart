<template>
    <div>
        <header>
    <nav>

<q-toolbar-title>My Dashboard</q-toolbar-title>

<q-toolbar elevated class="bg-primary text-white bold q-pt-lg q-space-between">

<div class="q-gutter-md q-mr-sm">

    <NuxtLink to="/" class="text-white link-unstyled q-pa-md">Home</NuxtLink>
    <NuxtLink to="/about" class="text-white link-unstyled q-pa-md">About</NuxtLink>
    <NuxtLink to="/products" class="text-white link-unstyled q-pa-md">Products</NuxtLink>
    <NuxtLink to="/form" class="text-white link-unstyled q-pa-md">Contact us</NuxtLink>

</div>

   <q-btn @click="confirm" flat icon="add_shopping_cart" label="Cart">
    <q-chip>{{ cartItem }}</q-chip>
   </q-btn> 

</q-toolbar>


</nav>
</header>

<div>  
    <slot />
</div>
</div> 
</template>


<script setup>
import { useCartStore } from '@/stores/cart' 

const cartStore=useCartStore();
const cartItem= computed(()=>cartStore.cartItemCount);

const dialogVisible = ref(false);

//console.log(cartItem,'cart item');

function openDialog() {
  dialogVisible.value = true;
}

function closeDialog() {
  dialogVisible.value = false;
}


</script>


<style scoped>
.q-gutter-md {
  margin-left: 6px; /* Adjust as needed for spacing */
}
.q-mr-sm {
  margin-right: 6px; /* Adjust as needed for spacing */
}
.q-mr-md {
  margin-right: 12px; /* Adjust as needed for spacing */
}

.link-unstyled {
  text-decoration: none !important; /* Remove underline */
}

.link-unstyled:hover {
  text-decoration: none !important; /* Ensure no underline on hover */
}

.q-pa-md {
  padding: 12px; /* Adjust padding as needed */
}

</style>