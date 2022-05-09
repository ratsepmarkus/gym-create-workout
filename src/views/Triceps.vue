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
                heading: 'Lying Triceps Extension',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Triceps-Extension_4affa7a2-9c1c-48f8-8003-3570d7b3a39c_600x600.png?v=1612136744',
                starting_position_desc:'Lying on the bench, your feet flat on the floor or on the bench. Hold the EZ bar above your chest, pronated grip, hands slightly tighter than shoulder width.',
                execution_desc:'Slowly bend your forearms without spreading your elbows too far apart, bringing the bar to the top of your head. Then return to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
              {
                heading: 'Triceps Pressdown',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Triceps-Pressdown_e759437b-6200-4b44-b484-14db770024a4_600x600.png?v=1612136845',
                starting_position_desc:'Standing facing the pulley, grasping the bar with a pronation grip, hands shoulder width apart.',
                execution_desc:'Carry out an extension of the forearms until your arms are fully extended. In this position, contract your triceps for a moment and then slowly return to the initial position. Keep your elbows close to your body during the whole movement.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Cable Rope Pushdown',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Rope-Pushdown_600x600.png?v=1612136916',
                starting_position_desc:"Standing in front of the pulley, grasp one end of the rope in each hand in neutral grip.",
                execution_desc:'Extend your forearms by spreading the ends of the rope slightly apart until your arms are fully extended. In this position, contract your triceps for a moment and then slowly return to the initial position. Keep your elbows close to your body during the whole movement.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Dumbbell Overhead Triceps Extension',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Overhead-Triceps-Extension_99242f13-ab4d-4e77-be12-e0f180cc93ac_600x600.png?v=1612136962',
                starting_position_desc:'Sitting on a bench, back straight, grasping a dumbbell with both hands, palms against the inside of a disc (see picture). Position the dumbbell above your head, arms outstretched, triceps well contracted.',
                execution_desc:'Lower your forearms behind your head until your elbows form a 90° angle. Then extend the forearms, returning to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Close Grip Bench Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Close-Grip-Bench-Press_28c01bfb-504d-43a6-8264-bd2101d317b9_600x600.png?v=1612137028',
                starting_position_desc:'Lying on the bench, your feet flat on the floor. Grasp the bar with a pronation grip, hands slightly tighter than shoulder width.',
                execution_desc:'Unhook the bar and slowly lower it to the lower part of your chest. Then push the load upwards until your arms are straight.',
                During_the_whole_movement:'During the whole movement:',
                During_the_whole_movement_desc1:'Keep your elbows pressed against your body to put maximum strain on your triceps and protect your elbow joint.',
                During_the_whole_movement_desc2:'Keep your shoulders flat against the bench.',
            },
            {
                heading: 'Kickback',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Kickback_c8df8485-ed16-4808-96c0-7ccc27a0bec2_600x600.png?v=1612136991',
                starting_position_desc:'Place your left knee and left hand on a bench, with your chest parallel to the floor. Keep your right foot on the ground and grasp the dumbbell in your right hand. Keeping it close to your body, raise the top of your right arm until it is parallel to the ground.',
                execution_desc:'Perform an extension of the right arm. When it is fully extended, contract your triceps for a moment before returning to the initial position. Once you have completed your series, do the same with the other arm.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Reverse Grip Cable Triceps Extension with Barbell',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Grip-Cable-Triceps-Extension-with-Barbell_600x600.png?v=1619978215',
                starting_position_desc:'Stand in front of the cable machine and grasp the straight bar with an underhand (supinated, palms facing up) grip, hands about shoulders width apart, elbows tucked in and bent at a bit less than a 90° angle.',
                execution_desc:'Extend the forearms until your arms are completely stretched. In this position, squeeze your triceps, pause, and then slowly come back to the starting position. Keep the elbows tucked in throughout the movement. Repeat for desired reps.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Single-Arm Cable Triceps Extension',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Cable-Triceps-Extension_600x600.png?v=1619978169',
                starting_position_desc:'Stand in front of the cable machine and grasp the handle with an overhand (pronated, palm facing down) grip, elbows tucked in and bent at a bit less than a 90° angle.',
                execution_desc:'Extend the forearms until your arm is completely stretched. In this position, squeeze your triceps, pause, and then slowly come back to the starting position. Keep the elbows tucked in throughout the movement. Repeat for desired reps and then repeat for the other arm.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Single-Arm Cable Triceps Extension with Supinated Grip',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Cable-Triceps-Extension-with-Supinated-Grip_600x600.png?v=1619978117',
                starting_position_desc:'Stand in front of the cable machine and grasp the handle with an underhand (supinated, palm facing up) grip, elbows tucked in and bent at a bit less than a 90° angle.',
                execution_desc:'Extend the forearms until your arm is completely stretched. In this position, squeeze your triceps, pause, and then slowly come back to the starting position. Keep the elbows tucked in throughout the movement. Repeat for desired reps and then repeat for the other arm.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Lying Dumbbell Triceps Extension',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Dumbbell-Triceps-Extension_600x600.png?v=1619978076',
                starting_position_desc:'Lay back on the bench with your feet firmly on the ground or on the bench. Grab a dumbbell in each hand using a neutral grip (palms facing each other) with your arms extended above your chest.',
                execution_desc:'Lower slowly your forearms, while keeping your elbows tucked in as much as possible, until they reach your forehead. Then slowly come back to the starting position. Repeat for desired reps.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Seated Barbell French Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-French-Press_600x600.png?v=1619978038',
                starting_position_desc:'Sit on an upright bench, back firmly against the bench’s back rest, and grab a straight-bar or an EZ-bar with your hands slightly narrower than shoulders width apart. The bar or EZ-bar should be above your head with your arms outstretched and your triceps squeezed.',
                execution_desc:'Lower slowly your forearms beyond your head until your elbows are at a 90° angle. Then slowly come back to the starting position and squeeze your triceps at the top. Keep your back straight throughout the movement. Repeat for desired reps.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Bench Dips',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bench-Dips_600x600.png?v=1619977992',
                starting_position_desc:'Set up for the bench dip by placing two flat benches parallel to one another to around your legs’ length. Keeping your back straight and your arms outstretched, place your hands on the edge of one bench at about shoulder’s width and put your heels on the edge of the other bench, legs and buttocks swinging in the air (see picture).',
                execution_desc:'While keeping your elbows tucked in, slowly flex them until they are at a 90° angle. Then slowly come back to the starting position and squeeze your triceps at the top. Keep your back straight throughout the movement. Repeat for desired reps.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Parallel Dip Bar',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Parallel-Dip-Bar_600x600.png?v=1619977962',
                starting_position_desc:'Grasp the two parallel bars, arms outstretched along your torso and knees bent and swinging in the air (see picture).',
                execution_desc:'While keeping your elbows tucked in, slowly flex them until they are at a 90° angle. Then slowly come back to the starting position and squeeze your triceps at the top. Don’t lean forward to prevent the tension from being placed on your pecs. Repeat for desired reps.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
        ]
    },
]

</script>
