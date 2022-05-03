<template>
  <section class="text-gray-600 body-font">
  <div class="flex flex-col px-4 lg:px-6 py-10">
    <div class="flex flex-wrap w-full mb-20 ">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Shoulders Exercises</h1>
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
                heading: 'Dumbbell Shoulder Press',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Shoulder-Press_da0aa742-620a-45f7-9277-78137d38ff28_600x600.png?v=1612138495',
            },
              {
                heading: 'Dumbbell Lateral Raise',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Lateral-Raise_31c81eee-81c4-4ffe-890d-ee13dd5bbf20_600x600.png?v=1612138523',
            },
            {
                heading: 'Dumbbell Front Raise',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Front-Raise_11804c3c-22d1-4589-a035-e30ad72149f3_600x600.png?v=1612138576',
            },
            {
                heading: 'High Cable Rear Delt Fly',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/High-Cable-Rear-Delt-Fly_600x600.png?v=1612541996',
            },
            {
                heading: 'Smith Machine Shoulder Press',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Smith-Machine-Shoulder-Press_e53bea60-c273-41e9-a70d-f5fa339c6780_600x600.png?v=1612138658',
            },
            {
                heading: 'Barbell Upright Row',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Upright-Row_8a03db96-29ea-47df-b517-0b863f96b564_600x600.png?v=1612138684',
            },
                        {
                heading: 'Bent-Over Lateral Raise',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bent-Over-Lateral-Raise_41bd4de4-0370-4e6b-9501-37cdcc26ded4_600x600.png?v=1621163232',
            },
                        {
                heading: 'Cable One-Arm Lateral Raise',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-One-Arm-Lateral-Raise_3e57189f-cdf3-46ee-9a89-6ca054eae56a_600x600.png?v=1612138775',
            },
                        {
                heading: 'Dumbbell Push Press',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Push-Press_f9229ee9-08e7-4aeb-8e41-ebd897e7ba8b_600x600.png?v=1621162780',
            },
                        {
                heading: 'Barbell Push Press',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Push-Press_8ba0542a-aba8-45ce-bdee-1a3eb4736514_600x600.png?v=1621162658',
            },
           {
                heading: 'Single-Arm Cable Front Raise',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Cable-Front-Raise_600x600.png?v=1619977928',
            },
            {
                heading: 'Barbell Front Raise',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Front-Raise_600x600.png?v=1619977846',
            },
           {
                heading: 'Seated Barbell Shoulder Press',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Shoulder-Press_600x600.png?v=1619977796',
            },
           {
                heading: 'Seated Behind the Neck Barbell Shoulder Press',
                open: false,
                 image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Behind-the-Neck-Barbell-Shoulder-Press_600x600.png?v=1619977737',
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
