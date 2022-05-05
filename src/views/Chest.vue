<template>
  <section class="text-gray-600 body-font">
  <div class="flex flex-col px-4 lg:px-6 py-10">
    <div class="flex flex-wrap w-full mb-20 ">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Chest Exercises</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Learn how to perform proper executions of fitness exercises with our incredible database set of more than 100+ exercises guides</p>
    </div>
    <div class="flex flex-col">
            <div v-for='(kkk, index) in faq' :key='index'  class="grid grid-cols-2 lg:grid-cols-4 lg:px-8">
              <CardDialog v-for='(item, index) in kkk.items' :key='index' :data='item'/>
            </div>
    </div>
  </div>
</section>

</template>
<script setup>
import CardDialog from '../components/CardDialog.vue';
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
                heading: 'Barbell Bench Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800',

            },
              {
                heading: 'Incline Dumbbell Bench Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Dumbbell-Bench-Press_c2bf89a2-433f-4a8f-9801-67c679980867_600x600.png?v=1612138008',
            },
            {
                heading: 'Peck Deck',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Peck-Deck_600x600.png?v=1612137910',
            },
            {
                heading: 'Cable Crossover',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Crossover_09c90616-2777-47ed-927e-d5987edfce09_600x600.png?v=1612138036',
            },
            {
                heading: 'Incline Barbell Bench Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Barbell-Bench-Press_dc0c6279-d038-44f5-a682-54c2a5e2602c_600x600.png?v=1612137944',
            },
            {
                heading: 'Dumbbell Bench Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bench-Press_13090f67-ccfc-4f3a-9bab-e75d753fa9fa_600x600.png?v=1612137970',
            },
            {
                heading: 'Dumbbell Fly',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Fly_119e2918-4241-4f55-bd77-c98a0c76c6c8_600x600.png?v=1612137840',
            },
            {
                heading: 'Incline Dumbbell Fly',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Dumbbell-Fly_44d253c3-da60-45b2-b0ba-88a3bb79da09_600x600.png?v=1612137870',
            },
            {
                heading: 'Chest Press Machine',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Chest-Press-Machine_ab8cd29d-5698-4110-a938-098bda19b5fc_600x600.png?v=1621163108',
            },
            {
                heading: 'Dumbbell Declined Bench Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Declined-Bench-Press_600x600.png?v=1619977242',
            },
            {
                heading: 'Push Ups',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Push-Ups_600x600.png?v=1640121436',
            },
        ]
    },
]

</script>
