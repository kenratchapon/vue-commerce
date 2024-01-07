import { defineStore } from 'pinia'

export const useOrderStore = defineStore('cart',{
  state: () => ({
    items: [],
  }),
  actions:{

  }
})