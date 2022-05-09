<template>
    <div class="p-2 lg:p-4 h-full">
        <div class="h-full bg-gray-200 min-h-[300px] p-6 rounded-lg">
            <router-link to=""><img :src="data.image_url" class="rounded w-full object-cover object-center mb-6" alt="content"></router-link>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{{data.heading}}</h2>
            <p class="leading-relaxed text-base">{{data.desc}}</p>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        data:Object,
    })
</script>
