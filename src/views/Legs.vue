<template>
  <section class="text-gray-600 body-font">
  <div class="flex flex-col px-4 lg:px-6 py-10">
    <div class="flex flex-wrap w-full mb-20 ">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Legs Exercises</h1>
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
import Cards from '../components/Cards.vue';
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
                heading: 'Squat',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Squat_d752e42d-02ba-4692-b300-c6e67ad5a4f5_600x600.png?v=1612138811',
            },
              {
                heading: 'Leg Press',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Press_f7febd5c-75e5-42f4-9bb4-c938969ce293_600x600.png?v=1612138836',
            },
            {
                heading: 'Leg Extensio',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Extension_41d91d3f-4b9c-4374-82e2-1d697ce35fe4_600x600.png?v=1612138862',
            },
            {
                heading: 'Lunge',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lunge_600x600.png?v=1612138903',
            },
            {
                heading: 'Lying Leg Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Leg-Curl_203153d8-79dd-4bb9-9125-708aa4327107_600x600.png?v=1612139013',
            },
            {
                heading: 'Hack Squat',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hack-Squat_044b3d09-ffa7-4728-b56f-f4fb3c175548_600x600.png?v=1612139060',
            },
            {
                heading: 'Seated Leg Curl',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Leg-Curl_e367789a-bbb3-4144-a926-5a9b42afc278_600x600.png?v=1612139123',
            },
            {
                heading: 'Single Leg Extension',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Leg-Extension_9cf850d1-0b9b-4fb3-8caf-49d438e86db0_600x600.png?v=1612139177',
            },
            {
                heading: 'Dumbbell Stiff-Leg Deadlift',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Romanian-Deadlift_35135213-e0df-4ef2-b093-22ed8d04dc41_600x600.png?v=1621162896',
            },
             {
                heading: 'Barbell Stiff-Leg Deadlift',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Romanian-Deadlift_34ede1b4-63ac-451d-9536-bbf9942b560c_600x600.png?v=1621162957',
            },
             {
                heading: 'Knee Tuck Jumps',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Knee-Tuck-Jumps_600x600.png?v=1640121347',
            },
             {
                heading: 'Burpees',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Burpees_600x600.png?v=1640121232',
            },
             {
                heading: 'Seated Calf Raise',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Calf-Raise_8c8641b2-10f2-4dc8-9adb-8d80fd1a16d0_600x600.png?v=1612137064',
            },
             {
                heading: 'Standing Calf Raise',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Calf-Raise_61746b47-98aa-49ee-bb97-5a19562592b9_600x600.png?v=1612137090',
            },
        ]
    },
]

</script>
