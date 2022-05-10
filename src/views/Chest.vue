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
                heading: 'Barbell Bench Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800',
                starting_position_desc:'Lying on the bench, your feet flat on the floor. Grasp the bar with a grip wider than shoulder width. Your forearms should be perpendicular to the floor.',
                execution_desc:'Unhook the bar and slowly lower it to the lower part of your chest. As you contract your pectorals, push the load upwards until your arms are almost straight.',
                During_the_whole_movement:'During the whole movement:',
                During_the_whole_movement_desc1:'Keep your elbows pointed outward and slightly bent to reduce stress on the joint.',
                During_the_whole_movement_desc2:'Keep your shoulders flat against the bench.',
            },
              {
                heading: 'Incline Dumbbell Bench Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Dumbbell-Bench-Press_c2bf89a2-433f-4a8f-9801-67c679980867_600x600.png?v=1612138008',
                starting_position_desc:'Lying on the sloping bench, your feet flat on the ground, one dumbbell in each hand, pronation grip. Hold the dumbbells at your sides at chest height. Your forearms should be perpendicular to the ground.',
                execution_desc:'While contracting your pectorals, push the load upwards until your arms are almost straight, then return to the initial position.',
                During_the_whole_movement:'During the whole movement:',
                During_the_whole_movement_desc1:'Keep your elbows on the outside to put maximum stress on your pectorals and minimum stress on your anterior deltoids and triceps.',
                During_the_whole_movement_desc2:'Keep your shoulders flat against the bench.',
            },
            {
                heading: 'Peck Deck',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Peck-Deck_600x600.png?v=1612137910',
                starting_position_desc:'Sitting on the "Peck deck" machine with your back pressed against the backrest, your forearms well supported against the padded parts provided for this purpose. Your upper arms should be parallel to the ground and in line with your shoulders.',
                execution_desc:'Tighten your arms as much as possible following the movement of the machine. Tighten your chest at the end of the movement and then slowly return to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Cable Crossover',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Crossover_09c90616-2777-47ed-927e-d5987edfce09_600x600.png?v=1612138036',
                starting_position_desc:'Grasp the handles attached to the ends of each rope and stand in the middle between the pulleys. Bend your chest slightly forward and keep your elbows slightly bent.',
                execution_desc:'Slowly tighten your arms in front of your chest in an arc. Keep your elbows slightly bent during the movement. When your hands come together, hold the position for a moment, contracting your chest. Then slowly return to the original position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Incline Barbell Bench Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Barbell-Bench-Press_dc0c6279-d038-44f5-a682-54c2a5e2602c_600x600.png?v=1612137944',
                starting_position_desc:'Lying on the sloping bench with your feet flat on the floor. Grasp the bar with a grip wider than shoulder width. Your forearms should be perpendicular to the ground.',
                execution_desc:'Unhook the bar and slowly lower it to the top of your chest. As you contract your pectorals, push the load upwards until your arms are almost straight.',
                During_the_whole_movement:'During the whole movement:',
                During_the_whole_movement_desc1:'Keep your elbows on the outside to put maximum stress on your chest and minimum stress on your anterior deltoids and triceps.',
                During_the_whole_movement_desc2:'Keep your shoulders flat against the bench.',
            },
            {
                heading: 'Dumbbell Bench Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bench-Press_13090f67-ccfc-4f3a-9bab-e75d753fa9fa_600x600.png?v=1612137970',
                starting_position_desc:'Lying on the bench, your feet flat on the floor, one dumbbell in each hand, pronation grip. Hold the dumbbells at your sides at chest height. Your forearms should be perpendicular to the ground.',
                execution_desc:'By contracting your pectorals, push the load against upwards until your arms are almost extended, then return to the initial position.',
                During_the_whole_movement:'During the entire movement:',
                During_the_whole_movement_desc1:'Keep your elbows on the outside to put maximum stress on your pectorals and minimum stress on your anterior deltoids and triceps.',
                During_the_whole_movement_desc2:'Keep your shoulders flat against the bench.',
            },
            {
                heading: 'Dumbbell Fly',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Fly_119e2918-4241-4f55-bd77-c98a0c76c6c8_600x600.png?v=1612137840',
                starting_position_desc:'Lying on the bench, your feet flat on the floor, one dumbbell in each hand. Hold the weights in a neutral grip, arms outstretched above your chest.',
                execution_desc:'Slowly lower the dumbbells to the sides in an arc with your arms until you feel a stretch in your pectorals. Do not go below shoulder level. Then return to the original position, performing the same arc.',
                During_the_whole_movement:'During the whole movement:',
                During_the_whole_movement_desc1:'Keep your elbows pointed outward and slightly bent to reduce stress on the joint.',
                During_the_whole_movement_desc2:'Keep your shoulders flat against the bench.',
            },
            {
                heading: 'Incline Dumbbell Fly',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Dumbbell-Fly_44d253c3-da60-45b2-b0ba-88a3bb79da09_600x600.png?v=1612137870',
                starting_position_desc:'Lying on the sloping bench, your feet flat on the floor, one dumbbell in each hand. Hold the weights in a neutral grip with your arms outstretched above your chest.',
                execution_desc:'Slowly lower the dumbbells to the sides in an arc with your arms until you feel a stretch in your pectorals. Do not go below shoulder level. Then return to the original position, making the same arc.',
                During_the_whole_movement:'During the whole movement:',
                During_the_whole_movement_desc1:'Keep your elbows pointed outward and slightly bent to reduce stress on the joint.',
                During_the_whole_movement_desc2:'Keep your shoulders flat against the bench.',
            },
            {
                heading: 'Chest Press Machine',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Chest-Press-Machine_ab8cd29d-5698-4110-a938-098bda19b5fc_600x600.png?v=1621163108',
                starting_position_desc:'Set the chest press machine up so that when sitting down the handles are in line with the lower part of your chest. Make sure that you are sitting right back up against the seat. Grab hold of a handle in each hand, push your chest out, keep your head against the headrest.',
                execution_desc:'Take a deep breath, and slowly push the handles forward until your arms are almost completely extended. Pause just before lockout, and then slowly return the handles back to the start position. Pausing just before the handles stop completely and repeating for another rep.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
                        {
                heading: 'Barbell Declined Bench Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Declined-Bench-Press_600x600.png?v=1619977283',
                starting_position_desc:'Lying on the declined bench, with your legs pressed against the pads. Holding the barbell with a grip wider than the width of your shoulders, with your hands in pronation. Your forearms should be perpendicular to the ground.',
                execution_desc:'Release the barbell and slowly lower it to the lower part of your pectorals. While contracting your chest muscles, push the weighted barbell upwards until your arms are almost stretched out.',
                During_the_whole_movement:'During the whole movement:',
                During_the_whole_movement_desc1:'Keep your elbows on the outside in order to strain your chest muscles as much as possible and your anterior deltoids and triceps as little as possible.',
                During_the_whole_movement_desc2:'Keep your shoulders pressed against the bench.',
            },
            {
                heading: 'Dumbbell Declined Bench Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Declined-Bench-Press_600x600.png?v=1619977242',
                starting_position_desc:'Lying on the declined bench, one dumbbell in each hand, pronation grip. Hold the dumbbells on the sides at chest height, elbows on the outside. Your forearms should be perpendicular to the ground.',
                execution_desc:'While contracting your pectorals, push the dumbbells upwards until your arms are almost stretched out, and then go back to the starting position.',
                During_the_whole_movement:'During the whole movement:',
                During_the_whole_movement_desc1:'Keep your elbows on the outside to make sure your pectorals are fully engaged and your anterior deltoids and triceps are minimally engaged.',
                During_the_whole_movement_desc2:'Keep your shoulders pressed against the bench.',
            },
            {
                heading: 'Push Ups',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Push-Ups_600x600.png?v=1640121436',
                starting_position_desc:'Face down, arms outstretched, hands wide apart, resting on the floor and aligned with your pectoral muscles. Legs stretched and face pointed towards the ground.',
                execution_desc:'Slowly bend your arms, letting your chest come closer to the ground, until your elbows form a 90 degrees angle. Then return to the starting position by pushing on your hands.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
        ]
    },
]

</script>
