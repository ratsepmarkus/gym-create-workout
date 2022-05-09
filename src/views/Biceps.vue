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
                heading: 'Barbell Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Curl_f38580d5-412e-4082-b453-5d319afa94fd_600x600.png?v=1612137128',
                starting_position_desc:'Standing with knees slightly bent and back straight. Hold the bar with your hands in supination, about shoulder width apart.',
                execution_desc:'Without making a bust movement, raise the bar by bending the forearms. Contract your biceps in the high position, then let the bar slowly come down to the initial position. Keep your elbows close to your body during the movement.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
              {
                heading: 'Alternating Dumbbell Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Alternating-Dumbbell-Curl_ad879dc4-b4fb-4ca7-b2b1-6e1eb5d78252_600x600.png?v=1612137169',
                starting_position_desc:'Standing with knees slightly bent and back straight. Hold a dumbbell in each hand, in a neutral grip along the body.',
                execution_desc:'Without making a bust movement, raise a dumbbell by bending the forearm. During the movement, rotate your wrist outwards until your hand is supine in the upright position. Contract your biceps, then slowly return to the initial position. Keep your elbow close to your body during the movement. Alternate this movement one arm after the other.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Rope Cable Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Cable-Curl_6216e254-5f77-462c-9954-ea210fff8a70_600x600.png?v=1612137195',
                starting_position_desc:"Standing in front of the pulley, knees slightly bent, grasp the rope with both hands, in neutral grip, arms relaxed along the body.",
                execution_desc:'Without making a bust movement, bend your forearms, bringing your hands as close as possible to your shoulders, without bringing your elbows too far forward. Contract your biceps in a high position, then slowly return to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'EZ Barbell Curl',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/EZ-Barbell-Curl_42cb566b-6415-4318-94e0-c93f4b442e59_600x600.png?v=1612137227',
                starting_position_desc:'Standing with knees slightly bent and back straight. Hold the EZ bar with your hands in supination.',
                execution_desc:'Without making a movement of bust, raise the EZ bar by bending the forearms. Contract your biceps in high position, then let the bar slowly come down again in the initial position. Keep your elbows close to your body during the movement.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'EZ Barbell Preacher Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/EZ-Barbell-Preacher-Curl_4d449fee-1920-4137-970c-75d4698b268d_600x600.png?v=1612137254',
                starting_position_desc:'Sitting or standing, adjust the "Larry Scott" armrest so that it is slightly below the level of your shoulders. Rest your upper arms on the armrest and grasp the EZ bar with your hands in supination.',
                execution_desc:'Slowly bend your forearms towards your shoulders while keeping your upper arms pressed against the armrest. Contract your biceps in the up position, then slowly return to the initial position. Be careful not to fully extend your forearms in the lowered position to avoid putting too much strain on the elbow joint.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Hammer Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hammer-Curl_da9fea8b-fc81-4a4f-9af1-aea1b85239d7_600x600.png?v=1612137282',
                starting_position_desc:'Standing with knees slightly bent and back straight. Hold a dumbbell in each hand, in a neutral grip along the body.',
                execution_desc:'Without making a bust movement, raise a dumbbell by bending the forearms. Keep your hand in a neutral grip (hence the name hammer grip). Contract your biceps, then slowly return to the initial position. Keep your elbow close to your body during the movement. Alternate this movement one arm after the other.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Incline Dumbbell Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Dumbbell-Curl_7debf468-cd34-49bc-8933-7f4b087e6cca_600x600.png?v=1612137309',
                starting_position_desc:'Sitting on a bench with the backrest tilted at an angle of 40 to 60 degrees. Let your arms hang down towards the floor. Hold a dumbbell in each hand in supination.',
                execution_desc:'Keeping your back well against the backrest, raise a dumbbell by bending your forearm towards your shoulder. Contract your biceps in the high position, then slowly return to the initial position. Keep your elbow close to your body during the movement. Alternate this movement one arm after the other.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Dumbbell Concentration Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Concentration-Curl_289b5739-4bdd-40e6-a195-6ecfcc685126_600x600.png?v=1612137334',
                starting_position_desc:'Sitting on a bench, hold a dumbbell in your right hand, supine grip. With your chest slightly bent forward, rest your elbow on the inside of your right thigh, leaving your arm relaxed towards the ground.',
                execution_desc:'Slowly bend your forearm as you bring the dumbbell towards your right shoulder. Contract your biceps in the high position, then slowly return to the initial position. Once your series is completed, move to the other arm.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Arm Low Pulley Cable Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Low-Pulley-Cable-Curl_600x600.png?v=1619978525',
                starting_position_desc:'Stand in front of the cable machine and grasp the handle with an underhand (supinated) grip. The knees should be slightly bent and your arm relaxed along your body.',
                execution_desc:'Keeping your torso fixed, elbow tucked in at your side, and eyes facing forward, slowly curl the weight up as far as possible without letting the elbow move forward excessively; only your forearm should be moving. Squeeze the biceps at the top of the movement, and then slowly lower the weight back to the starting position. Repeat for desired reps and then repeat for the other arm.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Barbell Push Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Push-Press_8ba0542a-aba8-45ce-bdee-1a3eb4736514_600x600.png?v=1621162658',
                starting_position_desc:'Stand upright with a barbell resting on your upper chest and shoulders and elbows pointed out in front of you. Feet should be shoulder width apart.',
                execution_desc:'Bend knees slightly and then drive upwards, pushing the barbell straight up in the air and finishing with arms extended above your head. Pause, and then return to starting position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Single-Arm Cable Front Raise',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Cable-Front-Raise_600x600.png?v=1619977928',
                starting_position_desc:'Standing, your back facing the cable machine, with your knees slightly bent. Grasp the handle with an overhand (pronated), your arm along your body with the elbow slightly bent.',
                execution_desc:'While keeping your elbow slightly bent, slowly raise forward your arm while making an arc. Once the arm is parallel with the floor squeeze briefly your shoulders, and then slowly come back to the starting position. Repeat for desired reps.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Straight Bar Cable Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Straight-Bar-Low-Pulley-Cable-Curl_600x600.png?v=1619978455',
                starting_position_desc:'Stand in front of the cable machine, legs shoulder width apart, and grasp the straight bar with an underhand (supinated) grip and your hands about shoulder width apart.',
                execution_desc:'Keeping your body fixed, elbow tucked in at your side, and eyes facing forward, slowly curl the weight up as far as possible without letting the elbow move forward excessively; only your forearms should be moving. Squeeze the biceps at the top of the movement, and then slowly lower the weight back to the starting position. Repeat for desired reps.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Standing High Pulley Cable Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-High-Pulley-Cable-Curl_600x600.png?v=1619978409',
                starting_position_desc:'grasp each of the cables with an underhand grip (supinated, palms facing up) and stand in the center with your arms outstretched.',
                execution_desc:'Keeping your upper arms and body fixed, curl simultaneously the handles in towards your head as far as possible. Squeeze your biceps at the top of the movement, pause, and then slowly lower the weight back to the starting position. Repeat for desired reps.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Seated Barbell Wrist Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Wrist-Curl_600x600.png?v=1619978365',
                starting_position_desc:'Grasp a barbell using an underhand grip (supinated, palms facing up) and sit down on the end of a flat bench. Rest the back of your forearms on the top of your thighs or on the end of the bench so that your wrists are just off the end of your knees or of the bench.',
                execution_desc:'Without moving the forearms, slowly raise your hands up as far as possible squeezing the forearms muscles at the top of the movement. Pause, and then slowly lower the barbell back to the starting position. Repeat for desired reps.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Seated Barbell Wrist Extension',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Wrist-Extension_600x600.png?v=1619978327',
                starting_position_desc:'Grasp a barbell using an overhand grip (pronated, palms facing down) and sit down on the end of a flat bench. Rest your forearms on the top of your thighs or on the end of the bench so that your wrists are just off the end of your knees or of the bench.',
                execution_desc:'Without moving the forearms, slowly raise your hands up as far as possible squeezing the forearms muscles at the top of the movement. Pause, and then slowly lower the barbell back to the starting position. Repeat for desired reps.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Reverse Barbell Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Barbell-Curl_600x600.png?v=1619978270',
                starting_position_desc:'Stand in front of the cable machine, knees slightly bent and back straight, grasp the straight or EZ-bar with an overhand (pronated) grip and your hands about shoulder width apart.',
                execution_desc:'Without moving the torso, slowly raise your forearms up as far as possible squeezing them at the top of the movement, pause, and then slowly lower the barbell back to the starting position. Keep the elbows tucked in throughout the movement. Repeat for desired reps.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
        ]
    },
]

</script>
