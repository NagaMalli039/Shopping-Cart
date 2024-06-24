<template>
    
    <div class="q-pa-md column items-start q-gutter-md">

        <p> {{ product?.title }}</p>
        <p>{{ product?.price }}</p>
        <p>{{ product?.category}}</p>
        <p> {{ product?.description }}</p>
    <!--     <q-img :src="product.image" width="150px" height="100px" alt="Product Image"/> -->    
<br>
        <div>
        <q-btn @click="AddtoCart" color="amber" glossy label="Add to Cart" />
      </div>
    </div>

   <p> {{ count }} </p>

</template>

<script setup>

import axios from 'axios';

const {id}=useRoute().params
 
const product=ref();
const count=ref(0);

const AddtoCart=()=>
{
    count.value++;
}

const fetchData=async()=>
{
    try
    {
    const uri='https://fakestoreapi.com/products/'+id;
    const response=await axios.get(uri);
    product.value=response.data;
    }
    catch(error){
        console.log('error in fetching id',error)
    }
}
onMounted(()=> {
    fetchData();
})

</script>

<style lang="scss" scoped>

</style>