
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart',{
  state: () => ({
    items: [{
      name: 'test 1234',
      imageUrl: 'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 100,
      quantity: 1
    }]
  }),
  getters:{
    summaryQuantity(state){
      return state.items.reduce((acc,item)=>{
        return acc + item.quantity
      },0)
    },
    summaryPrice (state){
      return state.items.reduce((acc,item)=>{
        return acc + (item.price * item.quantity)
      },0)
    }
  },
  actions:{
    addToCart(productData){
      this.items.push(productData)
    },
    updateQuantity(index, quantity){
      this.items[index].quantity = quantity
    },
    removeItemInCart(index){
      this.items.splice(index,1)
    }
  }
})
