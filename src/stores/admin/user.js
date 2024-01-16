import { defineStore } from 'pinia'

export const useAdminUserStore = defineStore('admin-user',{
  state: () => ({
    list: [
      {
        fullName: 'ken',
        role: 'admin',
        status: 'active',
        updateAt: (new Date).toISOString()
      }
    ],
  }),
  actions:{
    loadUser() {
      const users = localStorage.getItem('admin-users')
      if(users){
        this.list = JSON.parse(users)
        this.loaded = true
      }
    },
    getUser(index){
      return this.list[index]
    },
    updateUser(index, userData){
      const fields = ['fullName','role','status']
      for (let field of fields){
        this.list[index][field] = userData[field]
      }
      this.list[index].updateAt = (new Date).toISOString()
      localStorage.setItem('admin-users', JSON.stringify(this.list))
    },
    removeUser(index){
      this.list.splice(index,1)
      localStorage.setItem('admin-users', JSON.stringify(this.list))
    }
  }
})