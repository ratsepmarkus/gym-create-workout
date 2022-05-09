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
                heading: 'Squat',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Squat_d752e42d-02ba-4692-b300-c6e67ad5a4f5_600x600.png?v=1612138811',
                starting_position_desc:'Standing with the bar resting on your trapezium and shoulders. Grasp the bar with your hands for a good support. Keep your head straight.',
                execution_desc:"Bend your knees and hips as if you were sitting down. While keeping your back straight, let your buttocks go backwards, which will tilt your chest slightly forwards to make the movement as natural as possible. The moment your thighs are parallel to the ground, move upwards, doing the movement in the opposite direction. To protect your knees, make sure they don't go beyond the axis of your toes. Given the complexity of this movement, ask a trainer in your gym to show you how to perform it correctly the first time.",
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
              {
                heading: 'Leg Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Press_f7febd5c-75e5-42f4-9bb4-c938969ce293_600x600.png?v=1612138836',
                starting_position_desc:'Sitting on the press bench, feet flat on the platen, shoulder width apart.',
                execution_desc:'Release the manual safety catch and slowly lower the load by bringing your knees towards your chest. When your knees are at a 90° angle, pause for a moment and then slowly raise the load. To protect your knees, stop the movement just before your legs are fully extended. During the movement, do not lift your buttocks off the bench.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Leg Extension',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Extension_41d91d3f-4b9c-4374-82e2-1d697ce35fe4_600x600.png?v=1612138862',
                starting_position_desc:"Adjust the leg extension so that when you sit down your knees are at the edge of the bench and your ankles are just below the footrest. Sit with your back firmly against the backrest, holding the handles on the sides.",
                execution_desc:'Extend your legs until they are fully extended. Hold the load for a moment by contracting your quadriceps, then return to the lowered position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Lunge',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lunge_600x600.png?v=1612138903',
                starting_position_desc:'SStanding with legs hip-width apart, one dumbbell in each hand.',
                execution_desc:'Keeping the bust straight, take a step forward and slowly descend until the forward thigh is parallel to the ground. Take care that your knee does not exceed the axis of your toes. Then return to the original position. Once you have completed your series, do the same with the other leg.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Lying Leg Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Leg-Curl_203153d8-79dd-4bb9-9125-708aa4327107_600x600.png?v=1612139013',
                starting_position_desc:'Lie on your stomach on the "leg curl lying down" machine with the back of your ankles pressed against the footrest. Grasp the handles.',
                execution_desc:'Leaning firmly on the bench, bend your legs as far as possible. Hold the load for a moment in the high position by contracting your ischial muscles, then slowly return to the low position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Hack Squat',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hack-Squat_044b3d09-ffa7-4728-b56f-f4fb3c175548_600x600.png?v=1612139060',
                starting_position_desc:'Standing in the "hack squat" machine, trapezes under the pads, feet on the footrest, shoulder-width apart.',
                execution_desc:'Release the manual safety catch and slowly bend the knees. When your knees are at a 90° angle, pause for a moment and then slowly raise the load. Keep your back firmly against the backrest.',
                During_the_whole_movement:'To protect your knees:',
                During_the_whole_movement_desc1:'In the lowered position, make sure they do not go beyond the axis of your toes.',
                During_the_whole_movement_desc2:'In the high position, stop the movement just before your legs are fully extended.',
            },
            {
                heading: 'Seated Leg Curl',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Leg-Curl_e367789a-bbb3-4144-a926-5a9b42afc278_600x600.png?v=1612139123',
                starting_position_desc:'Adjust the leg curl sitting machine so that when you are sitting, the bottom of your knees are at the edge of the bench and the back of your ankles are just beyond the footrest. Sit with your back firmly against the backrest, holding the handles on the sides.',
                execution_desc:'Bend your legs as far as possible. Hold the load for a moment in this position by contracting your ischial muscles, then return to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Single Leg Extension',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Leg-Extension_9cf850d1-0b9b-4fb3-8caf-49d438e86db0_600x600.png?v=1612139177',
                starting_position_desc:'Adjust the leg extension so that when you sit, your knee is at the edge of the bench and your ankle is just below the footrest. Sit with your back firmly against the backrest, holding the handles on the sides.',
                execution_desc:'Extend your leg until it is fully extended. Hold the load for a moment in the high position by contracting your quadriceps, then return to the low position. Once your series is completed, do the same with the other leg.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Front Squat',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Front-Squat_600x600.png?v=1612049397',
                starting_position_desc:'Standing with the bar resting on your upper chest and deltoids. Grasp the bar with your hands for a good support. Keep your head straight.',
                execution_desc:"Bend your knees and hips as if you were sitting down. While keeping your back straight, let your buttocks go backwards, which will tilt your chest slightly forwards to make the movement as natural as possible. The moment your thighs are parallel to the ground, move upwards, doing the movement in the opposite direction. To protect your knees, make sure they don't go beyond the axis of your toes. Given the complexity of this movement, ask a trainer in your gym to show you how to perform it correctly the first time.",
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
                        {
                heading: 'Dumbbell Stiff-Leg Deadlift',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Romanian-Deadlift_35135213-e0df-4ef2-b093-22ed8d04dc41_600x600.png?v=1621162896',
                starting_position_desc:'Stand with feet shoulder width apart and toes facing forward. Bend knees slightly and push your chest out. Hold a dumbbell in each hand, resting on your upper thighs.',
                execution_desc:'Keeping your legs stiff, bow forward and lower the weights towards the ground. Pause when your hamstrings are tight, and then return to the starting position. Keep your back straight and shoulders back throughout.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Barbell Stiff-Leg Deadlift',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Romanian-Deadlift_34ede1b4-63ac-451d-9536-bbf9942b560c_600x600.png?v=1621162957',
                starting_position_desc:'Stand with feet shoulder width apart and toes facing forward. Bend knees slightly and push your chest out. Grasp a barbell resting on your upper thighs, with hands in pronation shoulder width.',
                execution_desc:'Keeping your legs stiff, bow forward and lower the weight towards the ground. Pause when your hamstrings are tight, and then return to the starting position. Keep your back straight and shoulders back throughout.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Dumbbell Goblet Squat',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Goblet-Squat_600x600.png?v=1612049778',
                starting_position_desc:'Stand with feet slightly wider than shoulder-width apart, holding a dumbbell between your hands. Have the dumbbell resting at chest height with hands holding the top of the dumbbell and shoulders pointed down. Push your chest out.',
                execution_desc:'Take a deep breath and then squat your glutes down, pushing your heels into the ground. Pause when your thighs are at least parallel with the ground, go lower if you can. Pause, and then rise back up again. Keep your back straight throughout.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Knee Tuck Jumps',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Knee-Tuck-Jumps_600x600.png?v=1640121347',
                starting_position_desc:'Standing',
                execution_desc:'Bend your knees slightly to gain momentum, then jump by bringing your knees up and as close to your chest as possible.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Burpees',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Burpees_600x600.png?v=1640121232',
                starting_position_desc:'Start in a squat position with your hands on the ground and your head in line with the body.',
                execution_desc:'While holding onto your hands, move both legs backwards into a face-up position and perform a push-up. Without stopping, bring your legs back to the initial squatting position, then perform a vertical jump by raising your hands towards the sky.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Seated Calf Raise',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Calf-Raise_8c8641b2-10f2-4dc8-9adb-8d80fd1a16d0_600x600.png?v=1612137064',
                starting_position_desc:'Sitting on the machine with the front of the feet on the wedge and the lower thighs under the padded parts.',
                execution_desc:'While contracting the calves, raise your heels as high as possible. Stay in the high position for a moment, feeling the contraction well. Then slowly lower your heels by stretching your calves.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Standing Calf Raise',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Calf-Raise_61746b47-98aa-49ee-bb97-5a19562592b9_600x600.png?v=1612137090',
                starting_position_desc:'Standing with the front of the feet on the wedge and the shoulders under the padded parts of the aircraft.',
                execution_desc:'While contracting the calves, raise your heels as high as possible. Stay in the high position for a moment, feeling the contraction well. Then slowly lower your heels by stretching your calves.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
        ]
    },
]

</script>
