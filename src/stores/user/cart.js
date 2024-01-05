
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart',{
  state: () => ({
    items: [],
    checkout: {}
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
    placeOrder (checkoutData) {
      let checkout = {
        ...checkoutData,
        totalPrice: this.summaryPrice,
        paymentMethod: 'Credit Card',
        createdAt: (new Date()).toLocaleString(),
        orderNumber: `AA${(Math.floor(Math.random() * 900000) + 100000).toString()}`,
        products: this.items
      }
      localStorage.setItem('checkout-data', JSON.stringify(checkout))
    },
    loadCheckout () {
      let checkoutData = localStorage.getItem('checkout-data')
      if (checkoutData) {
        this.checkout = JSON.parse(checkoutData)
      }
    },

    loadCart (){
      const prevCart = localStorage.getItem('cart-data')
      if(prevCart){
        this.items = JSON.parse(prevCart)
      }
    },
    addToCart(productData){
      const findProductIndex = this.items.findIndex(item=>{
        return item.name === productData.name
      })

      if (findProductIndex < 0){
        productData.quantity = 1
        this.items.push(productData)
      } else {
        const curItem = this.items[findProductIndex]
        this.updateQuantity(findProductIndex, curItem.quantity+1)
      }
      localStorage.setItem('cart-data', JSON.stringify(this.items))
    },
    updateQuantity(index, quantity){
      this.items[index].quantity = quantity
      localStorage.setItem('cart-data', JSON.stringify(this.items))
    },
    removeItemInCart(index){
      this.items.splice(index,1)
      localStorage.setItem('cart-data', JSON.stringify(this.items))
    }
  }
})
