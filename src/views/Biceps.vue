<template>
  <section class="text-gray-600 body-font">
  <div class="flex flex-col px-4 lg:px-6 py-10">
    <div class="flex flex-wrap w-full mb-20 ">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Biceps Exercises</h1>
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
                heading: 'Barbell Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Curl_f38580d5-412e-4082-b453-5d319afa94fd_600x600.png?v=1612137128',
            },
              {
                heading: 'Alternating Dumbbell Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Alternating-Dumbbell-Curl_ad879dc4-b4fb-4ca7-b2b1-6e1eb5d78252_600x600.png?v=1612137169',
            },
            {
                heading: 'Rope Cable Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Cable-Curl_6216e254-5f77-462c-9954-ea210fff8a70_600x600.png?v=1612137195',
            },
            {
                heading: 'EZ Barbell Curl',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/EZ-Barbell-Curl_42cb566b-6415-4318-94e0-c93f4b442e59_600x600.png?v=1612137227',
            },
            {
                heading: 'EZ Barbell Preacher Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/EZ-Barbell-Preacher-Curl_4d449fee-1920-4137-970c-75d4698b268d_600x600.png?v=1612137254',
            },
            {
                heading: 'Hammer Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hammer-Curl_da9fea8b-fc81-4a4f-9af1-aea1b85239d7_600x600.png?v=1612137282',
            },
                        {
                heading: 'Incline Dumbbell Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Dumbbell-Curl_7debf468-cd34-49bc-8933-7f4b087e6cca_600x600.png?v=1612137309',
            },
                        {
                heading: 'Dumbbell Concentration Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Concentration-Curl_289b5739-4bdd-40e6-a195-6ecfcc685126_600x600.png?v=1612137334',
            },
                        {
                heading: 'Single-Arm Low Pulley Cable Cur',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Low-Pulley-Cable-Curl_600x600.png?v=1619978525',
            },
                        {
                heading: 'Straight Bar Low Pulley Cable Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Straight-Bar-Low-Pulley-Cable-Curl_600x600.png?v=1619978455',
            },
           {
                heading: 'Standing High Pulley Cable Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-High-Pulley-Cable-Curl_600x600.png?v=1619978409',
            },
            {
                heading: 'Seated Barbell Wrist Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Wrist-Curl_600x600.png?v=1619978365',
            },
           {
                heading: 'Seated Barbell Wrist Extension',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Wrist-Extension_600x600.png?v=1619978327',
            },
           {
                heading: 'Reverse Barbell Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Barbell-Curl_600x600.png?v=1619978270',
            },
           {
                heading: 'Standing Barbell Shoulder Press',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Barbell-Shoulder-Press_600x600.png?v=1619977694',
            },
           {
                heading: 'Standing Behind the Neck Barbell Shoulder Press',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Behind-the-Neck-Barbell-Shoulder-Press_600x600.png?v=1619977648',
            },
           {
                heading: 'Alternate Dumbbell Front Raise Neutral Grip',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Alternate-Dumbbell-Front-Raise-Neutral-Grip_600x600.png?v=1619977407',
            },
            {
                heading: 'One-Arm Low-Pulley Front Raise Neutral Grip',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/One-Arm-Low-Pulley-Front-Raise-Neutral-Grip_600x600.png?v=1619977374',
            },
            {
                heading: 'Two-Handed Dumbbell Front Raise',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Two-Handed-Dumbbell-Front-Raise_600x600.png?v=1619977326',
            },
        ]
    },
]

</script>
