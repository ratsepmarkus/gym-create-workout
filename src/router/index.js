import { createRouter, createWebHistory } from "vue-router";
import { supabase } from "../supabase/init";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Create from "../views/Create.vue";
import ViewWorkout from "../views/ViewWorkout.vue";
import Chest from '../views/Chest.vue'
import Back from '../views/Back.vue'
import Shoulders from '../views/Shoulders.vue'
import Biceps from '../views/Biceps.vue'
import Triceps from '../views/Triceps.vue'
import Abdominals from '../views/Abdominals.vue'
import Legs from '../views/Legs.vue'
const routes = [
  {
    path: '/chest',
    meta: { title: 'Chest' },
    component: Chest,
  },

  {
    path: '/back',
    meta: { title: 'Back' },
    component: Back,
  },
  {
    path: '/shoulders',
    meta: { title: 'Shoulders' },
    component: Shoulders,
  },
  {
    path: '/biceps',
    meta: { title: 'Biceps' },
    component: Biceps,
  },
  {
    path: '/triceps',
    meta: { title: 'Triceps' },
    component: Triceps,
  },
  {
    path: '/abdominals',
    meta: { title: 'Abdominals' },
    component: Abdominals,
  },
  {
    path: '/legs',
    meta: { title: 'Legs' },
    component: Legs,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      auth: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      auth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      auth: false,
    },
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
    meta: {
      title: "Create",
      auth: true,
    },
  },
  {
    path: "/view-workout/:workoutId",
    name: "View-Workout",
    component: ViewWorkout,
    meta: {
      title: "View Workout",
      auth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


// Route guard for auth routes
router.beforeEach((to, from, next) => {
  const user = supabase.auth.user();
  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next();
      return;
    }
    next({ name: "Login" });
    return;
  }
  next();
});

export default router;
