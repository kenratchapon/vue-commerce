<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import {useProductStore} from '@/stores/user/product'
import Product from '@/components/Product.vue'
const productStore = useProductStore()
</script>

<template>
  <UserLayout>
    <div>
      <div class="hero h-96 bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Welcome to ManoShop</h1>
            <p class="py-6">Here have everything</p>
          </div>
        </div>
      </div>

      <Product :products="productStore.list">
      </Product>
    </div>
  </UserLayout>
</template>
