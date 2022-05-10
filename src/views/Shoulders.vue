<template>
<section class="text-gray-600 body-font">
  <div class="flex flex-col px-4 lg:px-6 py-10">
    <div class="flex flex-wrap w-full mb-20 ">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Shoulder Exercises</h1>
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
                heading: 'Dumbbell Shoulder Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Shoulder-Press_da0aa742-620a-45f7-9277-78137d38ff28_600x600.png?v=1612138495',
                starting_position_desc:'Sitting on a bench with your back well supported against the backrest. Hold the dumbbells in your hands (pronation grip) a little above shoulder height. Your elbows are on the outside and your forearms are perpendicular to the ground.',
                execution_desc:'Push the dumbbells upwards. Until your arms are fully extended. Then return to the original position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
              {
                heading: 'Dumbbell Lateral Raise',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Lateral-Raise_31c81eee-81c4-4ffe-890d-ee13dd5bbf20_600x600.png?v=1612138523',
                starting_position_desc:'Standing with feet about shoulder width apart, arms along the body and a dumbbell in each hand',
                execution_desc:'Slowly raise the arms sideways to the horizontal, keeping the elbows slightly bent. Contract your deltoids for a moment in the high position, then slowly return to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Dumbbell Front Raise',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Front-Raise_11804c3c-22d1-4589-a035-e30ad72149f3_600x600.png?v=1612138576',
                starting_position_desc:"Standing with feet about shoulder width apart, one dumbbell in each hand (pronation grip).",
                execution_desc:'Slowly raise the arms forward until they are parallel to the ground. Contract your deltoids for a moment in the raised position, then slowly return to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'High Cable Rear Delt Fly',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/High-Cable-Rear-Delt-Fly_600x600.png?v=1612541996',
                starting_position_desc:'Standing between the pulleys with the right handle in the left hand and the left handle in the right hand. Your arms folded in front of you at shoulder height.',
                execution_desc:'Tightening your posterior deltoids and keeping your arms almost straight, pull your elbows as far back as possible in an arc. Stay in this position for a moment before returning to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Smith Machine Shoulder Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Smith-Machine-Shoulder-Press_e53bea60-c273-41e9-a70d-f5fa339c6780_600x600.png?v=1612138658',
                starting_position_desc:'Sitting on a bench with your back well supported against the backrest. Position the bench so that the bar drops just in front of your face. Grasp the bar with your hands in pronation. Your back is well supported against the backrest, your elbows are on the outside and your forearms are perpendicular to the ground.',
                execution_desc:'Unhook the bar and slowly bring it to the height of your chin. Contract your shoulders by pushing the load upwards. Stop the movement just before your arms are fully extended. Then return to the down position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Barbell Upright Row',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Upright-Row_8a03db96-29ea-47df-b517-0b863f96b564_600x600.png?v=1612138684',
                starting_position_desc:'Standing, holding the bar in front of you, pronation grip, hands shoulder-width apart.',
                execution_desc:'Lift the bar vertically to chest height. Contract for a moment, then return to the starting position. During the whole movement, keep the bar close to the body and the elbows higher than the wrists.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Bent-Over Lateral Raise',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bent-Over-Lateral-Raise_41bd4de4-0370-4e6b-9501-37cdcc26ded4_600x600.png?v=1621163232',
                starting_position_desc:'Standing with knees slightly bent, bust bent forward, almost parallel to the ground, keeping your back straight and your head in line with your spine. Hold a dumbbell in each hand, palms facing each other.',
                execution_desc:'Slowly lift and move the dumbbells away from each side of your body in an arc with your arms. Contract for a moment in the raised position before returning to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Cable One-Arm Lateral Raise',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-One-Arm-Lateral-Raise_3e57189f-cdf3-46ee-9a89-6ca054eae56a_600x600.png?v=1612138775',
                starting_position_desc:'Stand with your feet shoulder-width apart, your left side close to the pulley. The handle in your right hand, against the front of your thigh.',
                execution_desc:'Slowly raise your arm to the side in an arc to the horizontal. Keep your elbow slightly bent. Stay in the raised position for a moment and then slowly return to the original position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Dumbbell Push Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Push-Press_f9229ee9-08e7-4aeb-8e41-ebd897e7ba8b_600x600.png?v=1621162780',
                starting_position_desc:'Stand upright with a dumbbell resting on each shoulder and elbows pointed out in front of you. Feet should be shoulder width apart.',
                execution_desc:'Bend knees slightly and then drive upwards, pushing the dumbbells straight up in the air and finishing with arms extended above your head. Pause, and then return to starting position.',
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
                heading: 'Barbell Front Raise',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Front-Raise_600x600.png?v=1619977846',
                starting_position_desc:'Standing, your feet about shoulders width apart, elbows slightly bent, arms along the body, grasp the handle with an overhand (pronated) grip, hands shoulders width apart.',
                execution_desc:'Slowly raise your arms forward until they are parallel with the floor. Squeeze briefly your shoulders at the top and then slowly come back to the starting position. Keep your back straight throughout the movement.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Seated Barbell Shoulder Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Shoulder-Press_600x600.png?v=1619977796',
                starting_position_desc:'Sit down on the bench and unrack the bar using an overhand (pronated) grip, your elbows pointing outward. The bar stands in front of you at chin’s level. This level may vary depending on your shoulders’ flexibility. The gap between your hands should be such that your elbows are forming a 90° angle when your arms are parallel to the floor.',
                execution_desc:'Squeeze your shoulders while pressing the weight vertically. Stop the movement when your arms are about to be fully outstretched. Then, come back slowly to the starting position..',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Seated Behind the Neck Barbell Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Behind-the-Neck-Barbell-Shoulder-Press_600x600.png?v=1619977737',
                starting_position_desc:'Sit down on the bench with your back straight and your chest bulged. Unrack the bar using an overhand (pronated) grip, your elbows pointing outward. The bar stands behind you at neck’s level. This level may vary depending on your shoulders’ flexibility. The gap between your hands should be such that your elbows are forming a 90° angle when your arms are parallel to the floor.',
                execution_desc:'Squeeze your shoulders while pressing the weight vertically. Stop the movement when your arms are about to be fully outstretched. Then, come back slowly to the starting position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Barbell Shoulder Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Barbell-Shoulder-Press_600x600.png?v=1619977694',
                starting_position_desc:'Standing with your back straight, chest bulged, feet about shoulders width apart, and knees slightly bent. Grasp the bar using a pronated grip, your elbows pointing outward. The bar stands at chin’s level. This level may vary depending on your shoulders’ flexibility. The gap between your hands should be such that your elbows are forming a 90° angle when your arms are parallel to the floor.',
                execution_desc:'Squeeze your shoulders while pressing the weight vertically. Stop the movement when your arms are about to be fully outstretched. Then, come back slowly to the starting position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Behind the Neck Barbell Shoulder Press',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Behind-the-Neck-Barbell-Shoulder-Press_600x600.png?v=1619977648',
                starting_position_desc:'Upper back resting crossways on the bench (see illustration). Feet on the ground, shoulder width apart, pelvis slightly lower than the height of the bench. Hold the dumbbell with both hands above your chest, with your arms almost fully extended.',
                execution_desc:'While keeping your elbows slightly bent, slowly lower the dumbbell behind your head in an arc. When your arms reach your head level, slowly go back to the starting position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Alternate Dumbbell Front Raise Neutral Grip',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Alternate-Dumbbell-Front-Raise-Neutral-Grip_600x600.png?v=1619977407',
                starting_position_desc:'Standing, arms along the body, elbows slightly bent, one dumbbell in each hand, neutral grip.',
                execution_desc:'Slowly lift one arm forward in an arc until it is parallel to the ground. Squeeze your anterior deltoid for a moment, and then slowly go back to the starting position. Do the same with the other arm. Keep your back straight during the exercise.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'One-Arm Low-Pulley Front Raise Neutral Grip',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/One-Arm-Low-Pulley-Front-Raise-Neutral-Grip_600x600.png?v=1619977374',
                starting_position_desc:'Standing with back turned to the pulley. Holding the end of the rope, hand in neutral grip, arms along your body, elbow slightly bent.',
                execution_desc:'Keeping your elbow slightly bent, slowly lift your arm forward in an arc. Once your arm is parallel to the ground, squeeze your anterior deltoid for a moment and then go back to your starting position. Keep your back straight during the exercise.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Two-Handed Dumbbell Front Raise',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Two-Handed-Dumbbell-Front-Raise_600x600.png?v=1619977326',
                starting_position_desc:'Standing with feet about shoulder width apart, elbows slightly bent, arms alongside the body, holding the dumbbell with both hands (as illustrated).',
                execution_desc:'Slowly lift the arms forward in an arc until they are parallel to the ground. Squeeze your deltoids for a moment, and then slowly go back to your starting position. Keep your back straight during the exercise.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
        ]
    },
]

</script>
