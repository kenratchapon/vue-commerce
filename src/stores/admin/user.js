import { defineStore } from 'pinia'

export const useUserStore = defineStore('cart',{
  state: () => ({
    items: [],
  }),
  actions:{

  }
})