<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import { reactive, onMounted, ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { useAdminProductStore } from '@/stores/admin/product';

const adminProductStore = useAdminProductStore()

const router = useRouter()
const route = useRoute()
const productIndex = ref(-1)
const mode = ref('ADD')

const formData = [
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Image',
        field: 'imageUrl'
    },
    {
        name: 'Price',
        field: 'price'
    },
    {
        name: 'Quantity',
        field: 'quantity'
    },
    {
        name: 'About',
        field: 'about'
    }
]

const productData = reactive({
    name: '',
    imageUrl: '',
    price: 0,
    quantity: 0,
    about: '',
    status: ''
})

const updateProduct = () => {
    if (productIndex.value !== -1) {
        adminProductStore.updateProduct(productIndex.value, productData)
    } else {
        adminProductStore.addProduct(productData)
    }
    router.push({ name: 'admin-products-list' })
}

onMounted(() => {
    if (route.params.id) {
        productIndex.value = parseInt(route.params.id)
        mode.value = 'EDIT'
        const selectedProduct = adminProductStore.getProduct(productIndex.value)
        productData.name = selectedProduct.name
        productData.imageUrl = selectedProduct.imageUrl
        productData.price = selectedProduct.price
        productData.quantity = selectedProduct.quantity
        productData.about = selectedProduct.about
        productData.status = selectedProduct.status
    }
})
</script>
<template>
    <AdminLayout>
        <div class="shadow-xl p-8">
            <div class="text-3xl font-bold">{{ mode }} Product</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-4">
                <label v-for="form in formData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input v-model="productData[form.field]" type="text" placeholder="Type here"
                        class="input input-bordered w-full" />
                </label>
            </div>
            <div class="divider"></div>
            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text">Status</span>
                </div>
                <select v-model="productData.status" class="select select-bordered">
                    <option disabled selected>Select status</option>
                    <option value="open">Open</option>
                    <option value="close">Close</option>
                </select>
            </label>
            <div class="mt-8 flex justify-end gap-2">
                <button class="btn btn-ghost">Back</button>
                <button @click="updateProduct()" class="btn btn-neutral">{{ mode }}</button>
            </div>
        </div>
    </AdminLayout>
</template>