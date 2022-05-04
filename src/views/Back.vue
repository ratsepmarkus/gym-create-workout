<template>
  <section class="text-gray-600 body-font">
  <div class="flex flex-col px-4 lg:px-6 py-10">
    <div class="flex flex-wrap w-full mb-20 ">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Back Exercises</h1>
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
import Cards from "../components/Cards.vue";
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
                heading: 'Dumbbell Bent Over Row (Single Arm)',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069',
            },
              {
                heading: 'Wide Grip Pulldown',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105',
            },
            {
                heading: 'Seated Cable Row',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127',
            },
            {
                heading: 'Close Grip Pulldown',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Close-Grip-Pulldown_072bb5ce-e3d9-4007-b8d2-d343e9d1051b_600x600.png?v=1612138178',
            },
            {
                heading: 'Barbell Row',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Row_4beb1d94-bac9-4538-9578-2d9cf93ef008_600x600.png?v=1612138201',
            },
            {
                heading: 'Behind Neck Pulldown',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Behind-Neck-Pulldown_f0f50b6b-ad34-48cd-8663-84ee6a581928_600x600.png?v=1612138228',
            },
                        {
                heading: 'Reverse Grip Pulldown',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Grip-Pulldown_10c5341f-30fd-4126-8fd7-2fa05c079889_600x600.png?v=1612138255',
            },
                        {
                heading: 'Rope Pulldown',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Pulldown_24c7b22e-bf99-4ade-ba6c-c7b2f20ffa9a_600x600.png?v=1612138283',
            },
                        {
                heading: 'T-Bar Rows',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/T-Bar-Rows_600x600.png?v=1612092112',
            },
                        {
                heading: 'Barbell Bent Over Rows Supinated Grip',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bent-Over-Rows-Supinated-Grip_600x600.png?v=1619977891',
            },
           {
                heading: 'Pull Up',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612',
            },
            {
                heading: 'Behind the Neck Pull Up',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Behind-the-Neck-Pull-Up_600x600.png?v=1619977573',
            },
           {
                heading: 'Pull Up with a Supinated Grip',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up-with-a-Supinated-Grip_600x600.png?v=1619977534',
            },
           {
                heading: 'Straight Arm Lat Pulldown',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Straight-Arm-Lat-Pulldown_600x600.png?v=1619977498',
            },
           {
                heading: 'Dumbbell Bent Over Rows',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Rows_600x600.png?v=1619977463',
            },
           {
                heading: 'Dumbbell Pullover',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Deadlift_600x600.png?v=1619977112',
            },
           {
                heading: 'Barbell Deadlift',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Pullover_600x600.png?v=1619977155',
            },
            {
                heading: 'Barbell Sumo Deadlift',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Sumo-Deadlift_600x600.png?v=1619976908',
            },
            {
                heading: 'Trap Bar Deadlift',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Trap-Bar-Deadlift_600x600.png?v=1619976866',
            },
            {
                heading: 'Dumbbell Deadlift',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Deadlift_600x600.png?v=1619976747',
            },
            {
                heading: 'Barbell Shrug',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Shrug_4f8a4e15-96b9-4595-8e88-635bf83cc8ac_600x600.png?v=1612138751',
            },
            {
                heading: 'Dumbbell Shrugs',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Shrugs_69a32385-3573-471b-a66e-3abdb0d95819_600x600.png?v=1619986777',
            },

        ]
    },
]

</script>
