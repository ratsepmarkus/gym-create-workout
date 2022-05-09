<template>
  <div class="h-full w-full">
    <button
      type="button"
      @click="openModal"
    >
       <Cards :data='data'/>
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-50" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-2xl font-semibold leading-6 text-gray-900"
              >
                {{data.heading}}
              </DialogTitle>
              <div class="mt-2">
                <img :src="data.image_url" alt="" class="mx-auto">
                <h1 class="text-xl font-medium">
                 Exercise execution guide
                </h1>
                <div class="mt-2 mb-2">
                  <!-- Starting position + Starting position descriptio -->
                  <div>
                    <h1 class="text-xl font-medium">
                      Starting position
                    </h1>
                    <p class="pt-2">
                      {{data.starting_position_desc}}
                    </p>
                  </div>
                   <!-- Execution + Execution descriptio -->
                  <div class="mt-2 mb-2">
                    <h1 class="text-xl font-medium">
                      Execution
                    </h1>
                    <p class="pt-2">
                      {{data.execution_desc}}
                    </p>
                  </div>
                  <div class="space-y-2">
                  <!--  During the whole movement + description -->
                  <h2>
                    {{data.During_the_whole_movement}}
                  </h2>
                  <p class=" pl-5 space-y-3">
                    {{data.During_the_whole_movement_desc1}}
                  </p>
                  <p class=" pl-5 space-y-3">
                    {{data.During_the_whole_movement_desc2}}
                  </p>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import Cards from './Cards.vue'
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const props = defineProps({
    data:{
        type:Object,
        default:null
    }
})
console.log(props.data)
const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>
