<script setup>
  import UserLayout from '@/layouts/UserLayout.vue'
  import { useCartStore } from '@/stores/user/cart';
  import { ref,onMounted } from 'vue';

  const cartStore = useCartStore()
  const orderData = ref({})

  onMounted(()=>{
    cartStore.loadCheckout()
    if(cartStore.checkout.orderNumber){
      orderData.value = cartStore.checkout
    }
  })

</script>

<template>
  <UserLayout>
    <div class="max-w-2xl border mx-auto p-4">
      <div>
        <h1 class="text-3xl font-bold">Your ordered success</h1>
      </div>
      <div class="text-l">
        <div class="font-bold">
          Hi, {{ orderData.name }}
        </div>
        <div>
          เตรียมรอรับสินค้าได้เลย
        </div>
        <div class="divider"></div>
        <div class="grid grid-cols-4 gap-2">
          <div>
            <div class="font-bold">Order Date</div>
            {{orderData.createdAt}}
          </div>
          <div>
            <div class="font-bold">Order Number</div>
            {{ orderData.orderNumber }}
          </div>
          <div>
            <div class="font-bold">Payment Method</div>
            {{ orderData.paymentMethod }}
          </div>
          <div>
            <div class="font-bold">Address</div>
            {{ orderData.address }}
          </div>
        </div>
        <div class="divider"></div>
        <div v-for="product in orderData.products" class="grid grid-cols-4 items-center">
            <div class="p-2">
              <img :src="product.imageUrl">
            </div>
            <div>
              <div class="font-bold">{{ product.name }}</div>
              <div>{{ product.about }}</div>
            </div>
            <div>จำนวน {{ product.quantity }}</div>
            <div> {{ product.price * product.quantity }} ฿</div>
        </div>
        <div class="divider"></div>
        <div class="flex justify-between">
          <div class="font-bold">
            ราคาสินค้าทั้งหมด
          </div>
          <div>
            {{ orderData.totalPrice }}
          </div>
        </div>
        <div class="flex justify-between">
          <div class="font-bold">
            ค่าส่ง
          </div>
          <div>
            0
          </div>
        </div>
        <div class="divider"></div>
        <div class="flex justify-between">
          <div class="font-bold">
            ราคาทั้งสิ้น
          </div>
          <div>
            {{ orderData.totalPrice }}
          </div>
        </div>
        <div class="divider"></div>
        <div class="font-bold">
          THANK YOU
        </div>
      </div>
      
    </div>
  </UserLayout>
</template>