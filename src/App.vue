<script setup>
  import { onMounted } from 'vue';
  import { RouterLink, RouterView } from 'vue-router'
  import { useCartStore } from './stores/user/cart'
  import { useEventStore } from './stores/user/event'
  import { useAdminProductStore } from './stores/admin/product';
  import { useAdminUserStore } from './stores/admin/user';
  
  import Toast from '@/components/Toast.vue'
  
  const eventStore = useEventStore()
  const cartStore = useCartStore()
  const adminProductStore = useAdminProductStore()
  const adminUserStore = useAdminUserStore()

  onMounted(() => {
    cartStore.loadCart()
    adminProductStore.loadProduct()
    adminUserStore.loadUser()
  })
  
</script>

<template>
  <div>
    <Toast
      v-if="eventStore.alert"
      :status="eventStore.data.status"
      :message="eventStore.data.message"
    >
    </Toast>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
