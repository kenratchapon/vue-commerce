<script setup>
  import UserLayout from '@/layouts/UserLayout.vue'
  import { ref,onMounted,computed,watch } from 'vue';
  import { useRoute } from 'vue-router';
  import {useProductStore} from '@/stores/user/product'
  import Product from '@/components/Product.vue'
  
  const productStore = useProductStore()
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

</script>

<template>
  <UserLayout>
    <div class="text-2xl m-4">
      search: <b>{{ searchText }}</b>
    </div>
    <Product :products="filterProducts">
    </Product>
  </UserLayout>
</template>