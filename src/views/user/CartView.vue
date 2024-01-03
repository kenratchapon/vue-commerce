<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import Close from '@/components/icons/Close.vue'
import {useCartStore} from '@/stores/user/cart'

const cartStore = useCartStore()

const changeQuantity =(event, index)=>{
  const newQuantity = parseInt(event.target.value)
  cartStore.updateQuantity(index, newQuantity)
}
</script>

<template>
  <UserLayout>
    <h1 class="text-3xl font-bold">Shopping Cart</h1>
    <div class="flex">
      <div class="flex-auto w-64 bg-gray-200 p-4">
        <div v-if="cartStore.items.length === 0">
          Cart is empty
        </div>
        <div v-else v-for="(item,index) in cartStore.items" class="flex">
          <div class="flex-1">
            <img class="w-full p-4"
              src="https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg"
              alt="item">
          </div>
          <div class="flex-1 p-4 relative">
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="grid grid-cols-2">
                  <div>
                    <div>{{item.name}}</div>
                    <div>{{item.about}}</div>
                    <div>{{item.price}}</div>
                  </div>
                  <div>
                    <select v-model="item.quantity" @change="changeQuantity($event, index)" class="select select-bordered">
                      <option v-for="item in [1, 2, 3, 4, 5]">{{ item }}</option>
                    </select>
                  </div>
                  <div @click="cartStore.removeItemInCart(index)" class="absolute top-0 right-0 p-4">
                    <Close></Close>
                  </div>
                </div>
              </div>
              <div>
                {{item.status}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto w-32 bg-orange-100 p-4">
        <div class="text-xl font-bold">
          Order Summary
        </div>
        <div class="text-base font-semibold mt-2">
          <div class="flex justify-between">
            <div>ราคาสินค้าทั้งหมด</div>
            <div>{{ cartStore.summaryPrice }}</div>
          </div>
          <div class="flex justify-between">
            <div>ค่าส่ง</div>
            <div>0</div>
          </div>
          <div class="flex justify-between">
            <div>ราคาทั้งสิ้น</div>
            <div>{{ cartStore.summaryPrice }}</div>
          </div>
        </div>
        <div class="mt-4">
          <button class="btn w-full bg-black text-white">ยืนยัน</button>
        </div>

      </div>
    </div>
  </UserLayout>
</template>