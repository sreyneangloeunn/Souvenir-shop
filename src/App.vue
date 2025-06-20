<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Modal from '@/components/Model.vue'  // adjust the path if needed

const showInfoModal = ref(false)

function openInfoModal() {
  showInfoModal.value = true
}

function closeInfoModal() {
  showInfoModal.value = false
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 font-sans">
    <!-- Navigation -->
    <nav class="bg-blue-700 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo + Site Name with click -->
          <div
            class="flex items-center space-x-4 cursor-pointer"
            @click="openInfoModal"
          >
            <img
              src="https://image.similarpng.com/file/similarpng/original-picture/2020/05/Chef-logo-vector-PNG-1.png"
              alt="Logo"
              class="h-12 w-auto"
            />
            
            <a href="/sreyneang"  class="text-white font-bold text-xl hidden sm:inline">ស្រីនាងCooking</a>
          </div>

          <!-- Navigation Links -->
          <div class="flex flex-wrap justify-center sm:justify-end items-center space-x-4 sm:space-x-6">
            <RouterLink
              to="/brahok"
              class="px-3 py-2 text-white text-base font-semibold hover:bg-blue-800 rounded-md transition duration-200"
              active-class="bg-yellow-400 text-black"
            >
              Flowers
            </RouterLink>
            <RouterLink
              to="/michha"
              class="px-3 py-2 text-white text-base font-semibold hover:bg-blue-800 rounded-md transition duration-200"
              active-class="bg-yellow-400 text-black"
            >
              Rings
            </RouterLink>
            <RouterLink
              to="/banana"
              class="px-3 py-2 text-white text-base font-semibold hover:bg-blue-800 rounded-md transition duration-200"
              active-class="bg-yellow-400 text-black"
            >
              Clothes
            </RouterLink>
            <RouterLink
              to="/grab"
              class="px-3 py-2 text-white text-base font-semibold hover:bg-blue-800 rounded-md transition duration-200"
              active-class="bg-yellow-400 text-black"
            >
              Contact Us
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>

    

    <!-- Page Content -->
    <main class="py-10 px-4 sm:px-6 lg:px-8">
      <RouterView />
    </main>

  </div>
</template>
