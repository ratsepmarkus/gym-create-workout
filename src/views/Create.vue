<template>
  <div class="bg-gradient-to-b from-gray-800 to-gray-600 bg-gradient-to-r p-20">
    <!-- Status Message -->
    <div
      v-if="statusMsg || errorMsg"
      class="mb-10 p-4 bg-gray-200 rounded-md shadow-lg"
    >
      <p class="text-indigo-500 font-bold">
        {{ statusMsg }}
      </p>
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>

    <!-- Create -->
    <div class="p-8 flex items-start bg-gray-900 rounded-md shadow-lg">
      <!-- Form -->
      <form @submit.prevent="createWorkout" class="flex flex-col gap-y-5 w-full">
        <h1 class="text-2xl font-bold text-indigo-500">Create Workout</h1>

        <!-- Workout Name -->
        <div class="flex flex-col">
          <label for="workout-name" class="mb-1 text-sm text-white"
            >Workout Name</label
          >
          <input
            type="text"
            required
            class="p-2 text-gray-500 focus:outline-none"
            id="workout-name"
            v-model="workoutName"
          />
        </div>

        <!-- Workout Type -->
        <div class="flex flex-col">
          <label for="workout-type" class="mb-1 text-sm text-white"
            >Workout Type</label
          >
          <select
            id="workout-type"
            class="p-2 text-gray-500 focus:outline-none"
            required
            @change="workoutChange"
            v-model="workoutType"
          >
            <option value="select-workout">Select Workout</option>
            <option value="strength">Strength Training</option>
            <option value="cardio">Cardio</option>
          </select>
        </div>

        <!-- Strength Training Inputs -->
        <div v-if="workoutType === 'strength'" class="flex flex-col gap-y-4">
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
            v-for="(item, index) in exercises"
            :key="index"
          >
            <div class="flex flex-col md:w-1/3">
              <label for="exercise-name" class="mb-1 text-sm text-white"
                >Exercise
              </label>
              <select
                id="strenght-type"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.exercise"
              >
                <option value="">Select Type</option>
                <option value="Barbell Bench Press">Barbell Bench Press</option>
                <option value="Incline Dumbbell Bench Press">Incline Dumbbell Bench Press</option>
                <option value="Peck Deck">Peck Deck</option>
                <option value="Cable Crossover">Cable Crossover</option>
                <option value="Incline Barbell Bench Press">Incline Barbell Bench Press</option>
                <option value="Dumbbell Bench Press">Dumbbell Bench Press</option>
                <option value="Dumbbell Fly">Dumbbell Fly</option>
                <option value="Incline Dumbbell Fly">Incline Dumbbell Fly</option>
                <option value="Chest Press Machine">Chest Press Machine</option>
                <option value="Dumbbell Declined Bench Press">Dumbbell Declined Bench Press</option>
                <option value="Push Ups">Push Ups</option>
                <hr>
                <option value="Dumbbell Bent Over Row (Single Arm)">Dumbbell Bent Over Row (Single Arm)</option>
                <option value="Wide Grip Pulldown">Wide Grip Pulldown</option>
                <option value="Seated Cable Row">Seated Cable Row</option>
                <option value="Close Grip Pulldown">Close Grip Pulldown</option>
                <option value="Barbell Row">Barbell Row</option>
                <option value="Behind Neck Pulldown">Behind Neck Pulldown</option>
                <option value="Reverse Grip Pulldown">Reverse Grip Pulldown</option>
                <option value="Rope Pulldown">Rope Pulldown</option>
                <option value="T-Bar Rows">T-Bar Rows</option>
                <option value="Barbell Bent Over Rows Supinated Grip">Barbell Bent Over Rows Supinated Grip</option>
                <option value="Pull Up">Pull Up</option>
                <option value="Behind the Neck Pull Up">Behind the Neck Pull Up</option>
                <option value="Pull Up with a Supinated Grip">Pull Up with a Supinated Grip</option>
                <option value="Straight Arm Lat Pulldown">Straight Arm Lat Pulldown</option>
                <option value="Dumbbell Bent Over Rows">Dumbbell Bent Over Rows</option>
                <option value="Dumbbell Pullover">Dumbbell Pullover</option>
                <option value="Barbell Deadlift">Barbell Deadlift</option>
                <option value="Barbell Sumo Deadlift">Barbell Sumo Deadlift</option>
                <option value="Trap Bar Deadlift">Trap Bar Deadlift</option>
                <option value="Dumbbell Deadlift">Dumbbell Deadlift</option>
                <option value="Barbell Shrug">Barbell Shrug</option>
                <option value="Dumbbell Shrugs">Dumbbell Shrugs</option>
                <hr>
                <option value="Dumbbell Shoulder Press">Dumbbell Shoulder Press</option>
                <option value="Dumbbell Lateral Raise">Dumbbell Lateral Raise</option>
                <option value="Dumbbell Front Raise">Dumbbell Front Raise</option>
                <option value="High Cable Rear Delt Fly">High Cable Rear Delt Fly</option>
                <option value="Smith Machine Shoulder Press">Smith Machine Shoulder Press</option>
                <option value="Barbell Upright Row">Barbell Upright Row</option>
                <option value="Bent-Over Lateral Raise">Bent-Over Lateral Raise</option>
                <option value="Cable One-Arm Lateral Raise">Cable One-Arm Lateral Raise</option>
                <option value="Dumbbell Push Press">Dumbbell Push Press</option>
                <option value="Barbell Push Press">Barbell Push Press</option>
                <option value="Single-Arm Cable Front Raise">Single-Arm Cable Front Raise</option>
                <option value="Barbell Front Raise">Barbell Front Raise</option>
                <option value="Seated Barbell Shoulder Press">Seated Barbell Shoulder Press</option>
                <option value="Seated Behind the Neck Barbell Shoulder Press">Seated Behind the Neck Barbell Shoulder Press</option>
                <option value="Standing Barbell Shoulder Press">Standing Barbell Shoulder Press</option>
                <option value="Standing Behind the Neck Barbell Shoulder Press">Standing Behind the Neck Barbell Shoulder Press</option>
                <option value="Alternate Dumbbell Front Raise Neutral Grip">Alternate Dumbbell Front Raise Neutral Grip</option>
                <option value="One-Arm Low-Pulley Front Raise Neutral Grip">One-Arm Low-Pulley Front Raise Neutral Grip</option>
                <option value="Two-Handed Dumbbell Front Raise">Two-Handed Dumbbell Front Raise</option>
                <hr>
                <option value="Barbell Curl">Barbell Curl</option>
                <option value="Alternating Dumbbell Curl">Alternating Dumbbell Curl</option>
                <option value="Rope Cable Curl">Rope Cable Curl</option>
                <option value="EZ Barbell Curl">EZ Barbell Curl</option>
                <option value="EZ Barbell Preacher Curl">EZ Barbell Preacher Curl</option>
                <option value="Hammer Curl">Hammer Curl</option>
                <option value="Incline Dumbbell Curl">Incline Dumbbell Curl</option>
                <option value="Dumbbell Concentration Curl">Dumbbell Concentration Curl</option>
                <option value="Single-Arm Low Pulley Cable Cur">Single-Arm Low Pulley Cable Cur</option>
                <option value="Straight Bar Low Pulley Cable Curl">Straight Bar Low Pulley Cable Curl</option>
                <option value="Standing High Pulley Cable Curl">Standing High Pulley Cable Curl</option>
                <option value="Seated Barbell Wrist Curl">Seated Barbell Wrist Curl</option>
                <option value="Seated Barbell Wrist Extension">Seated Barbell Wrist Extension</option>
                <option value="Reverse Barbell Curl">Reverse Barbell Curl</option>
                <option value="Standing Barbell Shoulder Press">Standing Barbell Shoulder Press</option>
                <option value="Standing Behind the Neck Barbell Shoulder Press">Standing Behind the Neck Barbell Shoulder Press</option>
                <option value="Alternate Dumbbell Front Raise Neutral Grip">Alternate Dumbbell Front Raise Neutral Grip</option>
                <option value="One-Arm Low-Pulley Front Raise Neutral Grip">One-Arm Low-Pulley Front Raise Neutral Grip</option>
                <option value="Two-Handed Dumbbell Front Raise">Two-Handed Dumbbell Front Raise</option>
                <hr>
                <option value="Lying Triceps Extension">Lying Triceps Extension</option>
                <option value="Triceps Pressdown">Triceps Pressdown</option>
                <option value="Cable Rope Pushdown">Cable Rope Pushdown</option>
                <option value="Dumbbell Overhead Triceps Extension">Dumbbell Overhead Triceps Extension</option>
                <option value="Close Grip Bench Press">Close Grip Bench Press</option>
                <option value="Kickback">Kickback</option>
                <option value="Reverse Grip Cable Triceps Extension with Barbell">Reverse Grip Cable Triceps Extension with Barbell</option>
                <option value="Single-Arm Cable Triceps Extension">Single-Arm Cable Triceps Extension</option>
                <option value="Single-Arm Cable Triceps Extension with Supinated Gri">Single-Arm Cable Triceps Extension with Supinated Gri</option>
                <option value="Lying Dumbbell Triceps Extension">Lying Dumbbell Triceps Extension</option>
                <option value="Seated Barbell French Press">Seated Barbell French Press</option>
                <option value="Seated Barbell Wrist Curl">Seated Barbell Wrist Curl</option>
                <option value="Bench Dips">Bench Dips</option>
                <option value="Parallel Dip Bar">Parallel Dip Bar</option>
                <hr>
                <option value="Crunch">Crunch</option>
                <option value="Oblique Crunch">Oblique Crunch</option>
                <option value="Crunch Machin">Crunch Machin</option>
                <option value="Rope Ab Pulldown">Rope Ab Pulldown</option>
                <option value="Plank">Plank</option>
                <option value="Hanging Leg Raise">Hanging Leg Raise</option>
                <option value="Bent Knee Reverse Crunch">Bent Knee Reverse Crunch</option>
                <option value="Long Arm Crunc">Long Arm Crunc</option>
                <option value="Plank Get Ups">Plank Get Ups</option>
                <hr>
                <option value="Squat">Squat</option>
                <option value="Leg Press">Leg Press</option>
                <option value="Leg Extension">Leg Extension</option>
                <option value="Lunge">Lunge</option>
                <option value="Lying Leg Curl">Lying Leg Curl</option>
                <option value="Hack Squat">Hack Squat</option>
                <option value="Seated Leg Curl">Seated Leg Curl</option>
                <option value="Single Leg Extension">Single Leg Extension</option>
                <option value="Dumbbell Stiff-Leg Deadlift">Dumbbell Stiff-Leg Deadlift</option>
                <option value="Barbell Stiff-Leg Deadlift">Barbell Stiff-Leg Deadlift</option>
                <option value="Knee Tuck Jumps">Knee Tuck Jumps</option>
                <option value="Burpees">Burpees</option>
                <option value="Seated Calf Raise">Seated Calf Raise</option>
                <option value="Standing Calf Raise">Standing Calf Raise</option>
              </select>
              
            </div>
            <div class="flex flex-col flex-1">
              <label for="sets" class="mb-1 text-sm text-white">Sets </label>
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.sets"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="reps" class="mb-1 text-sm text-white">Reps </label>
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.reps"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="weight" class="mb-1 text-sm text-white"
                >Weight (Kg)
              </label>
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.weight"
              />
            </div>
            <img
              @click="deleteExercise(item.id)"
              src="@/assets/images/trash-light.png"
              class="h-4 w-auto absolute -left-5 cursor-pointer"
              alt=""
            />
          </div>
          <button
            @click="addExercise"
            type="button"
            class="mt-6 py-2 px-6 rounded-sm self-start text-sm
      text-white bg-indigo-500 duration-200 border-solid
      border-2 border-transparent hover:bg-indigo-600"
          >
            Add Exercise
          </button>
        </div>

        <!-- Cardio Inputs -->
        <div v-if="workoutType === 'cardio'" class="flex flex-col gap-y-4">
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
            v-for="(item, index) in exercises"
            :key="index"
          >
            <div class="flex flex-col md:w-1/3">
              <label for="cardio-type" class="mb-1 text-sm text-white"
                >Type
              </label>
              <select
                id="cardio-type"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.cardioType"
              >
                <option value="">Select Type</option>
                <option value="run">Runs</option>
                
                <option value="walk">Walk</option>
                <option value="walk">Walk</option>
                <option value="walk">Walk</option>
              </select>
            </div>
            <div class="flex flex-col flex-1">
              <label for="distance" class="mb-1 text-sm text-white"
                >Distance
              </label>
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.distance"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="duration" class="mb-1 text-sm text-white"
                >Duration
              </label>
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.duration"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="pace" class="mb-1 text-sm text-white">Pace </label>
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.pace"
              />
            </div>
            <img
              @click="deleteExercise(item.id)"
              src="@/assets/images/trash-light.png"
              class="h-4 w-auto absolute -left-5 cursor-pointer"
              alt=""
            />
          </div>
          <button
            @click="addExercise"
            type="button"
            class="mt-6 py-2 px-6 rounded-sm self-start text-sm
      text-white bg-indigo-500 duration-200 border-solid
      border-2 border-transparent hover:bg-indigo-600"
          >
            Add Exercise
          </button>
        </div>

        <button
          type="submit"
          class="mt-6 py-2 px-6 rounded-sm self-start text-sm
      text-white bg-indigo-500 duration-200 border-solid
      border-2 border-transparent hover:bg-indigo-600"
        >
          Create Workout
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { uid } from "uid";
import { supabase } from "../supabase/init";
export default {
  name: "create",
  setup() {
    // Create data
    const workoutName = ref("");
    const workoutType = ref("select-workout");
    const exercises = ref([]);
    const statusMsg = ref(null);
    const errorMsg = ref(null);

    // Add exercise
    const addExercise = () => {
      if (workoutType.value === "strength") {
        exercises.value.push({
          id: uid(),
          exercise: "",
          sets: "",
          reps: "",
          weight: "",
        });
        return;
      }
      exercises.value.push({
        id: uid(),
        cardioType: "",
        distance: "",
        duration: "",
        pace: "",
      });
    };

    // Delete exercise
    const deleteExercise = (id) => {
      if (exercises.value.length > 1) {
        exercises.value = exercises.value.filter((exercise) => exercise.id !== id);
        return;
      }
      errorMsg.value = "Error: Cannot remove, need to at least have one exercise";
      setTimeout(() => {
        errorMsg.value = false;
      }, 5000);
    };

    // Listens for chaging of workout type input
    const workoutChange = () => {
      exercises.value = [];
      addExercise();
    };

    // Create workout
    const createWorkout = async () => {
      try {
        const { error } = await supabase.from("workouts").insert([
          {
            workoutName: workoutName.value,
            workoutType: workoutType.value,
            exercises: exercises.value,
          },
        ]);
        if (error) throw error;
        statusMsg.value = "Workout Created! Added to your workouts.";
        workoutName.value = null;
        workoutType.value = "select-workout";
        exercises.value = [];
        setTimeout(() => {
          statusMsg.value = false;
        }, 5000);
      } catch (error) {
        errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errorMsg.value = false;
        }, 5000);
      }
    };

    return {
      workoutName,
      workoutType,
      exercises,
      statusMsg,
      errorMsg,
      addExercise,
      workoutChange,
      deleteExercise,
      createWorkout,
    };
  },
};
</script>
