<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';

const priceChart = {
    options: {
        chart: {
            id: 'vuechart-example'
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    },
    series: [
        {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]
}
const categoryChart = {
    options: {},
    series: [44, 55, 41, 17, 15]
}

</script>
<template>
    <AdminLayout>
        <div>
            <div class="mb-8">
                <h1 class="text-3xl font-bold">DashBoard</h1>
            </div>
            <div class="stats shadow w-full mb-8">
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-8 h-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="stat-title">Orders</div>
                    <div class="stat-value">31K</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-8 h-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                            </path>
                        </svg>
                    </div>
                    <div class="stat-title">Products</div>
                    <div class="stat-value">4,200</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-8 h-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
                            </path>
                        </svg>
                    </div>
                    <div class="stat-title">Users</div>
                    <div class="stat-value">1,200</div>
                </div>

            </div>
            <div class="flex gap-4">
                <div class="flex-1 shadow-xl border rounded-2xl">
                    <apexchart type="bar" :options="priceChart.options" :series="priceChart.series"></apexchart>
                </div>

                <div class="flex-1 shadow-xl border rounded-2xl">
                    <apexchart type="donut" :options="categoryChart.options" :series="categoryChart.series"></apexchart>
                </div>

            </div>

        </div>
    </AdminLayout>
</template>