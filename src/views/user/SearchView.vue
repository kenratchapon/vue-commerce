<script setup>
  import UserLayout from '@/layouts/UserLayout.vue'
  import { ref,onMounted,computed,watch } from 'vue';
  import { useRoute,useRouter } from 'vue-router';
  import {useProductStore} from '@/stores/user/product'
  import { useCartStore } from '@/stores/user/cart';
  import Product from '@/components/Product.vue'
  
  const productStore = useProductStore()
  const cartStore = useCartStore()

  const router = useRouter()
  const route = useRoute()

  const searchText = ref('')

  onMounted(()=>{
    searchText.value = route.query.q
  })

  watch(()=> route.query.q, (newSearchText)=>{
    searchText.value = newSearchText
  },{immediate:true})

  const filterProducts =  computed (()=>{
    return productStore.filterProducts(searchText.value)
  })

  const addToCart =(product)=>{
    cartStore.addToCart(product)
    router.push('/cart')
  }

</script>

<template>
  <UserLayout>
    <div class="text-2xl m-4">
      search: <b>{{ searchText }}</b>
    </div>
    <Product 
      :products="filterProducts" 
      :addToCart="addToCart"
    >
    </Product>
  </UserLayout>
</template>