<script setup>
import { RouterLink, useRouter, useRoute } from 'vue-router';
import { onMounted,ref } from 'vue';
import { useAccountStore } from '@/stores/account';

const accountStore = useAccountStore()

const activeMenu = ref('')
const route = useRoute()
const router = useRouter()


onMounted(()=>{
    activeMenu.value = route.name
})

const logout = async() =>{
    try {
        await accountStore.logout()
        router.push({name:'login'})
    } catch (error) {
        console.log('error', error)
    }

}
const menus = [
    {
        name: 'DashBoard',
        routeName: 'admin-dashboard'
    },
    {
        name: 'Product',
        routeName: 'admin-products-list',
    },
    {
        name: 'Order',
        routeName: 'admin-orders-list',
    },
    {
        name: 'User',
        routeName: 'admin-users-list',
    }
]
</script>
<template>
    <div class="drawer drawer-open">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-8">
            <!-- Page content here -->
            <slot></slot>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <!-- Sidebar content here -->
                <li class="text-3xl font-bold"><a>ManoShop Backoffice</a></li>
                <li v-for="menu in menus">
                    <RouterLink :class=" menu.routeName === activeMenu ? 'active' : ''" :to="{name: menu.routeName}">
                        {{menu.name}}
                    </RouterLink>
                </li>
                <li>
                    <a @click="logout">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</template>