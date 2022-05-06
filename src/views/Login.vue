<template>
  <div class="bg-gradient-to-b from-gray-800 to-gray-600 bg-gradient-to-r md:px-60 md:py-20 px-4 py-10">
    <!-- Error Handling -->
    <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>

    <!-- Login -->
    <form
      @submit.prevent="login"
      class="p-8 flex flex-col bg-gray-800 rounded-md shadow-lg"
    >
      <h1 class="text-3xl text-indigo-500 font-bold mb-4">Login</h1>

      <div class="flex flex-col mb-2">
        <label for="email" class="mb-1 text-sm text-white">Email</label>
        <input
          type="text"
          required
          class="p-2 text-gray-500 focus:outline-none"
          id="email"
          v-model="email"
        />
      </div>

      <div class="flex flex-col mb-2">
        <label for="password" class="mb-1 text-sm text-white">Password</label>
        <input
          type="password"
          required
          class="p-2 text-gray-500 focus:outline-none"
          id="password"
          v-model="password"
        />
      </div>

      <button
        type="submit"
        class="mt-6 py-2 px-6 rounded-sm self-start text-sm
      text-white bg-indigo-500 duration-200 border-solid
      border-2 border-transparent hover:bg-indigo-600"
      >
        Login
      </button>

      <router-link class="text-sm mt-6 text-center text-white" :to="{ name: 'Register' }">
        Don't have an account? <span class="text-indigo-500">Register</span>
      </router-link>
    </form>
  </div>
  
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase/init";
import { useRouter } from "vue-router";

export default {
  name: "login",
  setup() {
    // Create data / vars
    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const errorMsg = ref(null);

    // Login function
    const login = async () => {
      try {
        const { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
        router.push({ name: "Home" });
      } catch (error) {
        errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errorMsg.value = null;
        }, 5000);
      }
    };

    return { email, password, errorMsg, login };
  },
};
</script>
