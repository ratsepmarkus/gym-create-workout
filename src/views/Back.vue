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
                heading: 'Dumbbell Bent Over Row',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069',
                starting_position_desc:'Place your left knee and left hand on the bench with your chest parallel to the floor. Keep your right foot on the ground and grasp the dumbbell still on the ground in your right hand in a neutral grip.',
                execution_desc:'Keeping your arm close to your body, lift the dumbbell as high as possible by raising your elbow and keeping your forearm perpendicular to the ground. Once your series is over, do the same with the other arm',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
              {
                heading: 'Wide Grip Pulldown',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105',
                starting_position_desc:'Sitting, thighs under the padded parts, the bar grasped in pronation, hands more apart than shoulder width. Keep elbows pointed outwards and back straight.',
                execution_desc:'Pull the bar up to your chin. Keep the contraction for a moment before slowly returning to the initial position. During the movement, do not let your elbows come forward.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Seated Cable Row',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127',
                starting_position_desc:"Sitting on the machine's bench with your feet on the wedge. Grasp the double handle attached to the cable with both hands. Keep back straight and knees slightly bent.",
                execution_desc:'Pull the load towards your abdomen. Tighten your back at the end of the movement by bringing your elbows as far back as possible. Then slowly return to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Close Grip Pulldown',
                open: false,
                image_url: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Close-Grip-Pulldown_072bb5ce-e3d9-4007-b8d2-d343e9d1051b_600x600.png?v=1612138178',
                starting_position_desc:'Seated, thighs under the padded parts, the double handle grasped with both hands. Keep your back straight.',
                execution_desc:'Pull the load up to your upper chest without moving your elbows away from your body. Keep the contraction for a moment before slowly returning to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Barbell Row',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Row_4beb1d94-bac9-4538-9578-2d9cf93ef008_600x600.png?v=1612138201',
                starting_position_desc:'Standing with slightly bent knees, grasping the bar with hands in pronation, grip wider than shoulder width. Bust bent forward, keep the back straight, the chest rounded.',
                execution_desc:'Pull the load towards your abdomen. Tighten your back at the end of the movement, shoulders and elbows back. Then slowly return to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Behind Neck Pulldown',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Behind-Neck-Pulldown_f0f50b6b-ad34-48cd-8663-84ee6a581928_600x600.png?v=1612138228',
                starting_position_desc:'Sitting, thighs under the padded parts, the bar grasped in pronation, hands more apart than shoulder width. Keep elbows pointed outwards and back straight.',
                execution_desc:'Pull the bar at the back of the neck. Keep the contraction for a moment before slowly returning to the initial position. During the movement, do not let your elbows come forward.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Reverse Grip Pulldown',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Grip-Pulldown_10c5341f-30fd-4126-8fd7-2fa05c079889_600x600.png?v=1612138255',
                starting_position_desc:'Seated, thighs under the padded parts, bar grasped in supination, hands shoulder-width apart. Keep your back straight.',
                execution_desc:'Pull the bar up to your upper chest. Keep the contraction for a moment, the shoulders well back before slowly returning to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Rope Pulldown',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Pulldown_24c7b22e-bf99-4ade-ba6c-c7b2f20ffa9a_600x600.png?v=1612138283',
                starting_position_desc:'Standing facing the high pulley, knees slightly bent and bust slightly bent forward. Grasp one end of the rope in each hand in a neutral grip.',
                execution_desc:'Pull the rope up to your hips, letting your arms describe an arc of a circle. Keep your elbows slightly bent and close to your body. At the end of the movement, contract your back by squeezing your shoulders back, then return to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'T-Bar Rows',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/T-Bar-Rows_600x600.png?v=1612092112',
                starting_position_desc:'Use a T-Bar machine (or place a barbell in the corner of a room). Stand with feet either side of the bar, bend your knees, and bow forward so that your chest is directly over the plate on the barbell. Grab the handle in both hands.',
                execution_desc:'Keeping your posture still, pull the handles so that the plate rises towards your chest. Pause just before it touches, and then slowly lower it back down.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
                        {
                heading: 'Barbell Bent Over Rows Supinated Grip',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bent-Over-Rows-Supinated-Grip_600x600.png?v=1619977891',
                starting_position_desc:'Standing, your knees slightly bent. Grasp the bar with an underhand grip (supinated) with your hands at about shoulders width apart. Lean forward while keeping your back straight and your chest bulged.',
                execution_desc:'Pull the bar towards your belly button. Squeeze your back at the top of the movement, driving your shoulders and elbows behind the body. Then, slowly come back to the starting position. Keep your elbows tucked in throughout the movement.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Pull Up',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612',
                starting_position_desc:'Grasp the pull bar using a pronated grip, head slightly up, hands wider than shoulders width apart, and elbows slightly bent.',
                execution_desc:'Do a pull up by pulling your chin towards the bar. Then come back slowly to the starting position. Your segments’ length, your strength, and your shoulders’ mobility will determine how high you can pull yourself up.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Behind the Neck Pull Up',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Behind-the-Neck-Pull-Up_600x600.png?v=1619977573',
                starting_position_desc:'Grasp the pull bar using a pronated grip, head slightly up, hands wider than shoulders width apart, and elbows slightly bent.',
                execution_desc:'Do a pull up by pulling your head in front of the bar. Then come back slowly to the starting position. Your segments’ length, your strength, and your shoulders’ mobility will determine how high you can pull yourself up.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Pull Up with a Supinated Grip',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up-with-a-Supinated-Grip_600x600.png?v=1619977534',
                starting_position_desc:'Grasp the pull bar using an underhand (supinated) grip, head slightly up, hands about shoulders-width apart, elbows slightly bent and pointing forward.',
                execution_desc:'Do a pull up by pulling your chin towards the bar. Then come back slowly to the starting position. Your segments’ length, your strength, and your shoulders’ mobility will determine how high you can pull yourself up.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Straight Arm Lat Pulldown',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Straight-Arm-Lat-Pulldown_600x600.png?v=1619977498',
                starting_position_desc:'Standing, facing the high pulley cable machine, with your knees slightly bent, your torso bending over, back straight and your chest bulged. Grasp the bar with an overhand (pronated, palms facing down) grip with the elbow slightly bent.',
                execution_desc:'Pull the bar towards your hips while making an arc. Contract your lats by squeezing together your shoulder blades, and then slowly come back to the starting position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Dumbbell Bent Over Rows',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Rows_600x600.png?v=1619977463',
                starting_position_desc:'Standing, your knees slightly bent. Grasp the dumbbells with a neutral grip (palms facing each other). Lean forward while keeping your back straight and your chest bulged.',
                execution_desc:'Pull the dumbbells towards your hips. Squeeze your back at the top of the movement, driving your shoulders and elbows behind the body. Then, slowly come back to the starting position. Keep your elbows tucked in throughout the movement.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Dumbbell Pullover',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Pullover_600x600.png?v=1619977197',
                starting_position_desc:'Upper back resting crossways on the bench (see illustration). Feet on the ground, shoulder width apart, pelvis slightly lower than the height of the bench. Hold the dumbbell with both hands above your chest, with your arms almost fully extended.',
                execution_desc:'While keeping your elbows slightly bent, slowly lower the dumbbell behind your head in an arc. When your arms reach your head level, slowly go back to the starting position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Barbell Pullover',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Pullover_600x600.png?v=1619977155',
                starting_position_desc:'Lying on a bench, feet on the ground at shoulder width apart. Hold the barbell with your hands in pronation above your chest, arms almost fully extended.',
                execution_desc:'With your elbows slightly bent, slowly lower the barbell behind your head in an arc. Once your arms are at your head level, slowly go back to the starting position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Barbell Deadlift',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Deadlift_600x600.png?v=1619977112',
                starting_position_desc:'Barbell placed on the ground in front of you. Feet a little less than shoulder width apart with your knees bent. With your arms fully extended, grab the barbell in pronation, hands shoulder-width apart Keep your torso slightly bent forward, back straight, shoulders pulled back and chest out. Inhale and tighten your abdominal muscles.',
                execution_desc:'While keeping your arms straight, lift the barbell by extending your legs and straightening your torso to reach a vertical position. Exhale at the end of the motion. Then slowly go back to the starting position. Always remember never to bend your back.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Barbell Sumo Deadlift',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Sumo-Deadlift_600x600.png?v=1619976908',
                starting_position_desc:'Barbell placed on the ground in front of you. Legs apart and feet in an outward pointing position while remaining aligned with your knees. Legs bent, thighs almost horizontal (depending on your morphology). Barbell grip in pronation, with hands shoulder-width apart. Torso slightly bent forward, back straight, shoulders pulled back and chest out. Inhale and tighten your abdominal muscles.',
                execution_desc:'While keeping your arms straight, lift the barbell by extending your legs and straightening your torso to reach a vertical position. Exhale at the end of the motion. Then slowly go back to the starting position. Always remember never to bend your back.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Trap Bar Deadlift',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Trap-Bar-Deadlift_600x600.png?v=1619976866',
                starting_position_desc:'Standing inside the trap barbell, with your feet a little less than shoulder width apart, and your knees bent. Grab the trap barbell handles. Torso slightly bent forward, back straight, shoulders pulled back and chest out. Inhale and tighten your abdominal muscles.',
                execution_desc:'While keeping your arms straight, lift the barbell by extending your legs and straightening your torso to reach a vertical position. Exhale at the end of the motion. Then slowly go back to the starting position. Always remember never to bend your back.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Dumbbell Deadlift',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Deadlift_600x600.png?v=1619976747',
                starting_position_desc:'Dumbbells on the ground on both sides of you. Your feet a little less than shoulder width apart, knees bent. Grab the dumbbells in a neutral grip. Torso slightly bent forward, back straight, shoulders pulled back and chest out. Inhale and tighten your abdominal muscles.',
                execution_desc:'While keeping your arms outstretched, lift the dumbbells by extending your legs and straightening your torso to reach a vertical position. Exhale at the end of the motion. Then, slowly go back to the starting position. Always remember never to bend your back.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Barbell Shrug',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Shrug_4f8a4e15-96b9-4595-8e88-635bf83cc8ac_600x600.png?v=1612138751',
                starting_position_desc:'Standing, holding the bar in front of you, pronation grip, hands shoulder-width apart.',
                execution_desc:'Keeping your arms outstretched, raise your shoulders as high as possible. Contract your trapezius muscles at the top of the movement, then slowly return to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },
            {
                heading: 'Dumbbell Shrugs',
                open: false,
                image_url:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Shrugs_69a32385-3573-471b-a66e-3abdb0d95819_600x600.png?v=1619986777',
                starting_position_desc:'Standing, arms stretched out along the body, one dumbbell in each hand.',
                execution_desc:'Keeping your arms outstretched, raise your shoulders as high as possible. Contract your trapezius muscles at the top of the movement, then slowly return to the initial position.',
                During_the_whole_movement:'',
                During_the_whole_movement_desc1:'',
                During_the_whole_movement_desc2:'',
            },

        ]
    },
]

</script>
