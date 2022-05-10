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
    <div>
      <div v-for='(kkk, index) in faq' :key='index'  class="grid grid-cols-2 lg:grid-cols-5 lg:px-8">
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
                heading: 'Crunch',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Crunch_f3498d5d-82d9-4a7f-8dee-98a2e55a62f2_600x600.png?v=1612138317',
                starting_position_desc:'Lying on the ground on your back with bent knees and feet flat on the ground. You can put your hands behind your head or on your chest.',
                execution_desc:'Contract your abs by raising your shoulders and upper back towards your knees. Keep your lower back firmly on the ground. Stay in the upright position for a second, then slowly return to the original position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
              {
                heading: 'Oblique Crunch',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Oblique-Crunch_253d0361-395d-443b-8228-aff440c1eee9_600x600.png?v=1612138354',
                starting_position_desc:'Lying on the ground on the right side with bent knees. Put your left hand behind your head and your right hand on your abs to feel them working.',
                execution_desc:'Contract your obliques on your left side by raising your shoulder towards your hip. Stay in the upright position for a second and then slowly return to the original position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Crunch Machine',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Crunch-Machine_538b22a3-379f-4a45-874a-ec1d798235b4_600x600.png?v=1612138379',
                starting_position_desc:"Sitting on the machine holding the handles.",
                execution_desc:'Contract your abs and stay in position for a moment before slowly returning to the starting position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Rope Ab Pulldown',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Ab-Pulldown_b808db26-a4f3-4018-8007-5e31da5736dc_600x600.png?v=1612138402',
                starting_position_desc:'Kneeling on the ground facing the high pulley. Grasp one end of the rope in each hand and bring them to the height of your head. Keep your hands in this position during the movement. Bend your torso so that it is almost parallel to the ground.',
                execution_desc:'Contract your abs by bringing your elbows back towards your knees. Stay in the contraction position for a moment before slowly returning to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Plank',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Plank_3a82d566-9cb2-4c20-b301-bc8bd635c4d1_600x600.png?v=1612138431',
                starting_position_desc:'Lying face down on the floor. Balance yourself on your forearms and toes, keeping your shoulders and buttocks at the same height.',
                execution_desc:'Hold this position for the desired length of time while contracting your abs.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Hanging Leg Raise',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hanging-Leg-Raise_36986393-d0a6-494a-981f-4ea06a99b0b5_600x600.png?v=1612138457',
                starting_position_desc:'Hanging from a high bar, hands in pronation.',
                execution_desc:'Contract your abs by moving your knees and hips up towards your chest. Stay in the upright position for one second, then slowly return to the starting position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Bent Knee Reverse Crunch',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bent-Knee-Reverse-Crunch_600x600.png?v=1621163012',
                starting_position_desc:'Lie on your back with knees bent and feet flat on the ground. Place your arms on the ground beside you, and brace your abs.',
                execution_desc:'Keeping your upper back flat on the ground, raise your knees towards your chest, slightly lifting your hips from the ground. Pause, and then return your feet to the ground. Just before they touch the ground, repeat the movement.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Long Arm Crunch',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Long-Arm-Crunch_f0e219dc-514f-411f-ad0d-0cdf02a93d41_600x600.png?v=1621163062',
                starting_position_desc:'Lie on your back with knees bent and feet flat on the ground. Place your arms above your head with your elbows in line with your ears. You can interlink your thumbs if it makes it easier for you.',
                execution_desc:'Keeping your elbows in line with your ears throughout the movement, raise your chest and shoulders off the ground. Pause, and then slowly lower yourself back down.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Plank Get Ups',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Plank-Get-Ups_600x600.png?v=1621163166',
                starting_position_desc:'Get yourself into the standard push up position. Feet together, palms on the floor (shoulder width apart). Brace your abs and maintain a straight back.',
                execution_desc:'Slowly lower your right arm until the forearm is flat on the ground, then bring down your left arm. Once both forearms are on the ground, immediately raise your right arm back to a push up position followed by your left. This should all be done in one smooth movement, so that you are constantly in motion.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
        ]
    },
]

</script>
