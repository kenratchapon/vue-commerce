<script setup>

import { RouterLink } from 'vue-router';
import AdminLayout from '@/layouts/AdminLayout.vue';
import { useAdminProductStore } from '@/stores/admin/product';
import Trash from '@/components/icons/Trash.vue'
import Edit from '@/components/icons/Edit.vue'
import Table from '@/components/Table.vue';


const adminProductStore = useAdminProductStore()

const removeProduct = (index) => {
    adminProductStore.removeProduct(index)
}


</script>
<template>
    <AdminLayout>
        <div>
            <div class="flex justify-between">
                <div>
                    <h1 class="text-3xl font-bold">Product</h1>
                </div>
                <div>
                    <RouterLink :to="{ name: 'admin-product-create' }" class="btn btn-neutral">Add Product</RouterLink>
                </div>
            </div>
            <div class="divider"></div>
            <Table :headers="['Name', 'Image', 'Price', 'Quantity', 'Status', 'UpdateAt', '']">
                <tbody>
                        <!-- row 1 -->
                        <tr v-for="(product, index) in adminProductStore.list">
                            <th>{{ product.name }}</th>
                            <td>
                                <img :src="product.imageUrl" class="w-24">
                            </td>
                            <td>{{ product.price }}</td>
                            <td>{{ product.remainQuantity }}/{{ product.quantity }}</td>
                            <td>
                                <div :class="product.status === 'open' ? 'badge badge-success' : 'badge badge-error'">
                                    {{ product.status }}
                                </div>
                            </td>
                            <td>{{ product.updateAt }}</td>
                            <td>
                                <div class="flex gap-2">
                                    <RouterLink :to="{ name: 'admin-product-update', params: { id: index } }"
                                        class="btn btn-ghost">
                                        <Edit></Edit>
                                    </RouterLink>
                                    <div @click="removeProduct(index)" class="btn btn-ghost">
                                        <Trash></Trash>
                                    </div>
                                </div>

                            </td>
                        </tr>
                    </tbody>
            </Table>
        </div>
    </AdminLayout>
</template>