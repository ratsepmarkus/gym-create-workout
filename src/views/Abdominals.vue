<template>
  <section class="text-gray-600 body-font">
  <div class="flex flex-col px-4 lg:px-6 py-10">
    <div class="flex flex-wrap w-full mb-20 ">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Abdominals Exercises</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Learn how to perform proper executions of fitness exercises with our incredible database set of more than 100+ exercises guides</p>
    </div>
    <div class="flex flex-col">
            <div v-for='(kkk, index) in faq' :key='index'  class="grid grid-cols-2 lg:grid-cols-4 lg:px-8">
                <div v-for='(item, index) in kkk.items' key='index' class="p-2 lg:p-4">
                   <div class="h-[300px] bg-gray-200 p-6 rounded-lg">
                    <router-link to=""><img :src="item.image_url" class="h-40 rounded w-full object-cover object-center mb-6" alt="content"></router-link>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{{item.heading}}</h2>
                    <p class="leading-relaxed text-base">{{item.desc}}</p>
                  </div>
                </div>
            </div>
    </div>
  </div>
</section>

</template>
<script setup>

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
                heading: 'Crunch',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Crunch_f3498d5d-82d9-4a7f-8dee-98a2e55a62f2_600x600.png?v=1612138317',
            },
              {
                heading: 'Oblique Crunch',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Oblique-Crunch_253d0361-395d-443b-8228-aff440c1eee9_600x600.png?v=1612138354',
            },
            {
                heading: 'Crunch Machin',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Crunch-Machine_538b22a3-379f-4a45-874a-ec1d798235b4_600x600.png?v=1612138379',
            },
            {
                heading: 'Rope Ab Pulldown',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Ab-Pulldown_b808db26-a4f3-4018-8007-5e31da5736dc_600x600.png?v=1612138402',
            },
            {
                heading: 'Plank',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Plank_3a82d566-9cb2-4c20-b301-bc8bd635c4d1_600x600.png?v=1612138431',
            },
            {
                heading: 'Hanging Leg Raise',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hanging-Leg-Raise_36986393-d0a6-494a-981f-4ea06a99b0b5_600x600.png?v=1612138457',
            },
                        {
                heading: 'Bent Knee Reverse Crunch',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bent-Knee-Reverse-Crunch_600x600.png?v=1621163012',
            },
                        {
                heading: 'Long Arm Crunc',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Long-Arm-Crunch_f0e219dc-514f-411f-ad0d-0cdf02a93d41_600x600.png?v=1621163062',
            },
                        {
                heading: 'Plank Get Ups',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Plank-Get-Ups_600x600.png?v=1621163166',
            },
        ]
    },
]

</script>
