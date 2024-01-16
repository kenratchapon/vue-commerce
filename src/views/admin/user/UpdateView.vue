<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import { useAdminUserStore } from '@/stores/admin/user';
import { onMounted, ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const adminUserStore = useAdminUserStore()
const route = useRoute()
const router = useRouter()

const userIndex = ref(-1)
const userData = reactive({
    fullName: '',
    role: '',
    status: '',
})

onMounted(() => {
    if (route.params.id) {
        userIndex.value = parseInt(route.params.id)
        const selectedUser = adminUserStore.getUser(userIndex.value)
        userData.fullName = selectedUser.fullName
        userData.role = selectedUser.role
        userData.status = selectedUser.status
    }

})

const updateUser = () => {
    adminUserStore.updateUser(userIndex.value, userData)
    router.push({ name: 'admin-users-list' })
}
const formData = [
    {
        name: 'FullName',
        field: 'fullName',
        type: 'text'
    },
    {
        name: 'Role',
        field: 'role',
        type: 'select',
        dropdownList: ['admin', 'moderator', 'user']
    },
    {
        name: 'Status',
        field: 'status',
        type: 'select',
        dropdownList: ['active', 'inactive']
    },
]
</script>
<template>
    <AdminLayout>
        <div class="shadow-xl p-8">
            <div class="text-3xl font-bold">Update user</div>
            <div class="divider"></div>
            <div class="grid grid-cols-1 gap-4">
                <label v-for="form in formData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input v-model="userData[form.field]" v-if="form.type === 'text'" type="text" placeholder="Type here"
                        class="input input-bordered w-full" />
                    <select v-model="userData[form.field]" v-if="form.type === 'select'" class="select select-bordered">
                        <option disabled selected>Select status</option>
                        <option v-for="item in form.dropdownList" :value=item>{{ item }}</option>
                    </select>
                </label>
            </div>
            <div class="mt-8 flex justify-end gap-2">
                <button class="btn btn-ghost">Back</button>
                <button @click="updateUser()" class="btn btn-neutral">Update</button>
            </div>
        </div>
    </AdminLayout>
</template>