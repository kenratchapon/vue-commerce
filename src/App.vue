<script setup>
  import { onMounted } from 'vue';
  import { RouterLink, RouterView } from 'vue-router'
  import { useCartStore } from './stores/user/cart';
  const cartStore = useCartStore()

  onMounted(() => {
    cartStore.loadCart()
  })
  
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
