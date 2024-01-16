<script setup>
    import AdminLayout from '@/layouts/AdminLayout.vue';
    import { useAdminUserStore } from '@/stores/admin/user';

    import Trash from '@/components/icons/Trash.vue'
    import Edit from '@/components/icons/Edit.vue'
    import Table from '@/components/Table.vue';
    import Power from '@/components/icons/Power.vue';

    const adminUserStore = useAdminUserStore()
    const changeStatus= (index) =>{
        const selectedUser = adminUserStore.list[index]
        selectedUser.status = selectedUser.status === 'active' ? 'inactive': 'active'
        adminUserStore.updateUser(index, selectedUser)
    }
</script>
<template>
    <AdminLayout>
        <div>
            <div class="flex justify-between">
                <div>
                    <h1 class="text-3xl font-bold">User</h1>
                </div>
            </div>
            <div class="divider"></div>
            <Table :headers="['Name', 'Role', 'Status', 'UpdateAt', '']">
                <tbody>
                        <!-- row 1 -->
                        <tr v-for="(user, index) in adminUserStore.list">
                            <th>{{ user.fullName }}</th>
                            <td>{{ user.role }}</td>
                            <td>
                                <div :class="user.status === 'active' ? 'badge badge-success' : 'badge badge-error'">
                                    {{ user.status }}
                                </div>
                            </td>
                            <td>{{ user.updateAt }}</td>
                            <td>
                                <div class="flex gap-2">
                                    <RouterLink :to="{ name: 'admin-user-update', params: { id: index } }"
                                        class="btn btn-ghost">
                                        <Edit></Edit>
                                    </RouterLink>
                                    <div @click="changeStatus(index)" class="btn btn-ghost">
                                        <Power></Power>
                                    </div>
                                </div>

                            </td>
                        </tr>
                    </tbody>
            </Table>

        </div>
    </AdminLayout>
</template>