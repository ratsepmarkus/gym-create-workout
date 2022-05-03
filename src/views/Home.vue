<template>
  <div v-if="dataLoaded" class="bg-gradient-to-b from-gray-800 to-gray-600 bg-gradient-to-r p-20">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Your workouts:</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded mb-6"></div>
    <!-- No Data -->
    <div v-if="data.length === 0" class="w-full flex flex-col items-center">
      <h1 class="text-2xl text-white">Looks empty here...</h1>
      <router-link
        class="mt-6 py-2 px-6 rounded-sm self-start text-sm
      text-white bg-indigo-500 duration-200 border-solid
      border-2 border-transparent hover:bg-indigo-600 self-center"
        :to="{ name: 'Create' }"
        >Create Workout</router-link
      >
    </div>
    <!-- Data -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "
    >
      <router-link
        class="flex flex-col items-center bg-gray-900 p-8 shadow-md cursor-pointer rounded-xl"
        :to="{ name: 'View-Workout', params: { workoutId: workout.id } }"
        v-for="(workout, index) in data"
        :key="index"
      >
        <!-- Cardio Img -->
        <img
          v-if="workout.workoutType === 'cardio'"
          src="../assets/images/running-shoe.svg"
          class="h-24 w-auto"
          alt=""
        />

        <!-- Strength Training -->
        <img
          v-else
          src="../assets/images/barbell-weight.svg"
          class="h-24 w-auto"
          alt=""
        />

        <p
          class="mt-6 py-1 px-3 text-xs text-white bg-gray-700 shadow-md rounded-lg"
        >
          {{ workout.workoutType }}
        </p>

        <h1 class="mt-8 mb-2 text-center text-xl text-indigo-500 font-semibold">
          {{ workout.workoutName }}
        </h1>
      </router-link>
    </div>
  </div>
  <ExerciseGroups />
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase/init";
import ExerciseGroups from "../components/ExerciseGroups.vue";
export default {
  name: "home",
  components: {
    ExerciseGroups
  },
  setup() {
    // Create data / vars
    const data = ref([]);
    const dataLoaded = ref(null);

    // Get data
    const getData = async () => {
      try {
        const { data: workouts, error } = await supabase.from("workouts").select("*");
        if (error) throw error;
        data.value = workouts;
        dataLoaded.value = true;
      } catch (error) {
        console.warn(error.message);
      }
    };

    // Run data function
    getData();

    return { data, dataLoaded };
  },
};
</script>
