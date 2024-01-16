import { defineStore } from 'pinia'

export const useAdminProductStore = defineStore('admin-product', {
  state: () => ({
    list: [

    ],
    loaded: false
  }),
  actions: {
    loadProduct() {
      const products = localStorage.getItem('admin-products')
      if(products){
        this.list = JSON.parse(products)
        this.loaded = true
      }
    },
    getProduct(index) {
      if(this.loaded){
        this.loadProduct()
      }
      return this.list[index]
    },
    addProduct(productData) {
      productData.remainQuantity = productData.quantity
      productData.updateAt = (new Date).toISOString()
      this.list.push(productData)
      localStorage.setItem('admin-products', JSON.stringify(this.list))
    },
    updateProduct(index, productData) {
      const fields = ['name','imageUrl','price','quantity','remainQuantity','status']
      for(field in fields){
        this.list[index][field] = productData[field]
      }
      this.list[index].updateAt = (new Date).toISOString()
      localStorage.setItem('admin-products', JSON.stringify(this.list))
    },
    removeProduct(index) {
      this.list.splice(index, 1)
      localStorage.setItem('admin-products', JSON.stringify(this.list))
    }
  }
})