<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAccountStore } from '@/stores/account';
    import { useEventStore } from '@/stores/user/event'; 

    const accountStore = useAccountStore()
    const eventStore = useEventStore()
    const router = useRouter()

    const email = ref('')
    const password = ref('')

    const login = async () => {
        try {
            await accountStore.signInAdmin(email.value, password.value)
            if (accountStore.isAdmin) {
                router.push({ name: 'admin-dashboard' })
            }
        } catch (error) {
            eventStore.popupMessage(error.message)
        }
    }
</script>
<template>
    <div class="h-screen flex items-center">
        <div class="flex-1 max-w-2xl shadow-md mx-auto p-8">
            <div class="flex flex-col items-center">
                <h1 class="text-2xl">
                    Login
                </h1>
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">email</span>
                    </div>
                    <input v-model="email" type="text" placeholder="Your email" class="input input-bordered w-full" />
                </label>
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">password</span>
                    </div>
                    <input v-model="password" type="password" placeholder="Password" class="input input-bordered w-full" />
                </label>
                <button @click="login" class="btn btn-neutral mt-4 w-full">
                    Login
                </button>
            </div>

        </div>
    </div>
</template>