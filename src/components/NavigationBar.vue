<template>
<header class="text-white bg-gray-800 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#6366F1"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8821 24.7851V19.0466L28.8444 16.1836L33.8061 19.0466V24.7851L28.8425 27.6486L26.3595 26.215L23.8821 24.7851ZM8.96268 31.2795C15.0448 33.079 20.6414 31.3498 25.7266 27.8449L28.8455 29.6461L35.5411 25.7784V18.0531L28.8438 14.1847L22.146 18.0531V21.9868C21.002 22.2024 19.8486 22.3801 18.6912 22.5145C17.3639 22.6685 16.0348 22.7674 14.7116 22.8034C19.6385 18.0573 17.5537 13.8292 15.5972 9.86536L14.7184 8.02748L7.53902 8C6.05711 11.9227 4.80874 15.8933 5.02433 20.1418C5.23566 24.315 6.80237 27.7717 8.96235 31.279L8.96268 31.2795ZM27.5978 21.1921L28.8438 20.4751L30.0905 21.1921V22.6391L28.8438 23.3587L27.5978 22.6374V21.1921ZM26.0671 20.3162V23.5169L28.8438 25.1185L31.6212 23.5152V20.3162L28.8438 18.7116L26.0671 20.3162ZM22.1467 25.7781L24.0586 26.8813C19.9203 29.5585 15.0227 31.1418 10.0865 29.8029C7.97483 26.3071 6.9139 23.2338 6.75329 20.0602C6.59457 16.9249 7.30549 13.6465 8.73902 9.7329L13.6146 9.75186L14.0464 10.6322C15.9069 14.401 17.9033 18.4485 11.836 22.9697L12.324 24.5285C14.5132 24.5976 16.7141 24.4906 18.8899 24.2378C19.9808 24.1108 21.0686 23.947 22.1481 23.7503L22.1479 25.7783L22.1467 25.7781Z" fill="white"/>
      </svg>
      <router-link to="/" class="ml-3 text-xl tracking-wider">FLIPPIN'GYM</router-link>
    </a>
    <div class="hidden md:flex">
    <nav class=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <router-link to="/chest" class="mr-5 hover:text-indigo-500">Chest</router-link>
      <router-link to="/back" class="mr-5 hover:text-indigo-500">Back</router-link>
      <router-link to="/shoulders" class="mr-5 hover:text-indigo-500">Shoulders</router-link>
      <router-link to="/biceps" class="mr-5 hover:text-indigo-500">Biceps</router-link>
      <router-link to="/triceps" class="mr-5 hover:text-indigo-500">Triceps</router-link>
      <router-link to="/abdominals" class="mr-5 hover:text-indigo-500">Abdominals</router-link>
      <router-link to="/legs" class="mr-5 hover:text-indigo-500">Legs</router-link>
    </nav>
    </div>
<div @click="toggleNav" class="flex md:hidden">
  <button
    type="button"
    class="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
    aria-label="toggle menu"
  >
    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
      <path
        fill-rule="evenodd"
        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
      ></path>
    </svg>
  </button>
</div>

     <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
        <router-link to="/chest" class="md:hidden mr-5 hover:text-indigo-500">Chest</router-link>
        <router-link to="/back" class="md:hidden mr-5 hover:text-indigo-500">Back</router-link>
        <router-link to="/shoulders" class="md:hidden mr-5 hover:text-indigo-500">Shoulders</router-link>
        <router-link to="/biceps" class="md:hidden mr-5 hover:text-indigo-500">Biceps</router-link>
        <router-link to="/triceps" class="md:hidden mr-5 hover:text-indigo-500">Triceps</router-link>
        <router-link to="/abdominals" class="md:hidden mr-5 hover:text-indigo-500">Abdominals</router-link>
        <router-link to="/legs" class="md:hidden mr-5 hover:text-indigo-500">Legs</router-link>
        </ul>
    <ul class="flex flex-1 justify-end gap-x-10">
        <router-link v-if="user" class="cursor-pointer inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0" :to="{ name: 'Create' }"
          >Create</router-link
        >
        <router-link v-if="!user" class="cursor-pointer inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0" :to="{ name: 'Login' }"
          >Login</router-link
        >
        <li v-if="user" @click="logout" class="cursor-pointer">Logout</li>
      </ul>
  </div>
</header>
</template>

<script>
import store from "../store/index";
import { computed } from "vue";
import { supabase } from "../supabase/init";
import { useRouter } from "vue-router";
export default {
    data() {
      return {
        showMenu: false,
      };
    },
    methods: {
      toggleNav: function () {
        this.showMenu = !this.showMenu;
      },
    },
  setup() {
    // Get user from store
    const user = computed(() => store.state.user);

    // Setup ref to router
    const router = useRouter();

    // Logout function
    const logout = async () => {
      await supabase.auth.signOut();
      router.push({ name: "Home" });
    };

    return { logout, user };
  },
};
</script>