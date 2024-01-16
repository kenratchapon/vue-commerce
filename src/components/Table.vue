<script setup>
import { defineProps } from 'vue';

defineProps({
    headers: Array
})
</script>
<template>
    <div class="overflow-x-auto">
        <table class="table">
            <!-- head -->
            <thead class="text-base">
                <tr>
                    <th v-for="header in headers">{{ header }}</th>
                </tr>
            </thead>

            <slot></slot>

        </table>
    </div>
</template>