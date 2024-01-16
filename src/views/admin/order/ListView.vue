<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import Table from '@/components/Table.vue';

import { useAdminOrderStore } from '@/stores/admin/order'

const adminOrderStore = useAdminOrderStore()

</script>
<template>
    <AdminLayout>
        <div>
            <div class="flex justify-between">
                <div>
                    <h1 class="text-3xl font-bold">Order</h1>
                </div>
            </div>
            <div class="divider"></div>
            <Table :headers="['Customer name', 'Price', 'Status', 'UpdateAt', '']">
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="(order, index) in adminOrderStore.list">
                        <th>{{ order.customerName }}</th>
                        <td>{{ order.totalPrice }}</td>
                        <td>
                            <div :class="order.status === 'Payment Completed' ? 'badge badge-success' : 'badge badge-error'">
                                {{ order.status }}
                            </div>
                        </td>
                        <td>{{ order.updatedAt }}</td>
                        <td>
                            <RouterLink :to="{ name: 'admin-order-detail', params: { id: index } }" class="btn btn-ghost">
                                show detail
                            </RouterLink>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </AdminLayout>
</template>