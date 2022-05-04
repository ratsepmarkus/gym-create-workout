<template>
  <section class="text-gray-600 body-font">
  <div class="flex flex-col px-4 lg:px-6 py-10">
    <div class="flex flex-wrap w-full mb-20 ">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Triceps Exercises</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Learn how to perform proper executions of fitness exercises with our incredible database set of more than 100+ exercises guides</p>
    </div>
    <div class="flex flex-col">
            <div v-for='(kkk, index) in faq' :key='index'  class="grid grid-cols-2 lg:grid-cols-4 lg:px-8">
              <Cards v-for='(item, index) in kkk.items' :key='index' :data='item'/>
            </div>
    </div>
  </div>
</section>

</template>
<script setup>
import Cards from '../components/Cards.vue'

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'
import { ref } from 'vue';

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
const faq = [
    {
        title: 'hfxgcjhvj',
        items:[
            {
                heading: 'Lying Triceps Extension',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Triceps-Extension_4affa7a2-9c1c-48f8-8003-3570d7b3a39c_600x600.png?v=1612136744',
            },
              {
                heading: 'Triceps Pressdown',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Triceps-Pressdown_e759437b-6200-4b44-b484-14db770024a4_600x600.png?v=1612136845',
            },
            {
                heading: 'Cable Rope Pushdown',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Rope-Pushdown_600x600.png?v=1612136916',
            },
            {
                heading: 'Dumbbell Overhead Triceps Extension',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Overhead-Triceps-Extension_99242f13-ab4d-4e77-be12-e0f180cc93ac_600x600.png?v=1612136962',
            },
            {
                heading: 'Close Grip Bench Press',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Close-Grip-Bench-Press_28c01bfb-504d-43a6-8264-bd2101d317b9_600x600.png?v=1612137028',
            },
            {
                heading: 'Kickback',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Kickback_c8df8485-ed16-4808-96c0-7ccc27a0bec2_600x600.png?v=1612136991',
            },
                        {
                heading: 'Reverse Grip Cable Triceps Extension with Barbell',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Grip-Cable-Triceps-Extension-with-Barbell_600x600.png?v=1619978215',
            },
                        {
                heading: 'Single-Arm Cable Triceps Extension',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Cable-Triceps-Extension_600x600.png?v=1619978169',
            },
                        {
                heading: 'Single-Arm Cable Triceps Extension with Supinated Gri',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Cable-Triceps-Extension-with-Supinated-Grip_600x600.png?v=1619978117',
            },
                        {
                heading: 'Lying Dumbbell Triceps Extension',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Dumbbell-Triceps-Extension_600x600.png?v=1619978076',
            },
           {
                heading: 'Seated Barbell French Press',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-French-Press_600x600.png?v=1619978038',
            },
            {
                heading: 'Seated Barbell Wrist Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Wrist-Curl_600x600.png?v=1619978365',
            },
           {
                heading: 'Bench Dips',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bench-Dips_600x600.png?v=1619977992',
            },
           {
                heading: 'Parallel Dip Bar',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Parallel-Dip-Bar_600x600.png?v=1619977962',
            },
        ]
    },
]

</script>
