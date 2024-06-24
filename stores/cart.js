// store/cart.js

import { defineStore } from 'pinia';
import axios from 'axios'
export const useCartStore = defineStore('cart',{
  state: () => ({
    items: [], // Array of products in the cart
    count:0
  }), 

  getters: {

    cartItemCount(){
      return this.items.reduce((total,item)=> total+item.quantity,0)
    },
    totalProducts() {
      return this.products.length;
    },
  },

  actions: {

    addItem(productId) {
      console.log(productId, 'productId ')
      const existingItem = this.items.find(item => item.id === productId);
      console.log(existingItem, 'existing item')
      if (existingItem) {

        existingItem.quantity++;
      }
    },
    // Add other cart-related actions here (...)

increaseCount(productId){
  console.log(productId, 'increment')

  const existingItem = this.items.find(item => item.id === productId);
  console.log(existingItem, 'existing item')
  if (existingItem) {

    existingItem.quantity++;
    this.count++;
  }
},
decreaseCount(productId){
  const existingItem = this.items.find(item => item.id === productId);
      
      if (existingItem) {

        existingItem.quantity--;
        this.count--;
      }
},
removeFromCart(index) {
      this.products.splice(index, 1);
    },
    
async fetchData()
  {
      try
      {
      const uri='https://fakestoreapi.com/products';
      const response=await axios.get(uri);
      this.items=response.data.map((product)=>({

        ...product, 
        quantity:0
      
       }));
      console.log(this.items);
      }
      catch(error){
          console.log('error in fetching id',error)
      }
  }




  },
});
