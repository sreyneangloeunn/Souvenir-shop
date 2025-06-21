<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

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
    <nav class="bg-blue-800 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo + Site Name with click -->
          <div
            class="flex items-center space-x-4 cursor-pointer"
            @click="openInfoModal"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvIDuW6RnMwHvuh-3ptcu5uvxYVTPJ0iF1g&s"
              alt="Logo"
              class="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
            />

            <a
              href="/sreyneang"
              class="text-white font-semibold text-xl tracking-wide hidden sm:inline"
            >
              Souvenir shop
            </a>
          </div>

          <!-- Navigation Links -->
          <div class="flex flex-wrap justify-center sm:justify-end items-center space-x-3 sm:space-x-5">
            <RouterLink
              to="/flower"
              class="px-4 py-2 text-white text-base font-medium hover:bg-blue-700 rounded-lg transition duration-200"
              active-class="bg-yellow-400 text-black"
            >
              Flowers
            </RouterLink>
            <RouterLink
              to="/ring"
              class="px-4 py-2 text-white text-base font-medium hover:bg-blue-700 rounded-lg transition duration-200"
              active-class="bg-yellow-400 text-black"
            >
              Rings
            </RouterLink>
            <RouterLink
              to="/clothes"
              class="px-4 py-2 text-white text-base font-medium hover:bg-blue-700 rounded-lg transition duration-200"
              active-class="bg-yellow-400 text-black"
            >
              Clothes
            </RouterLink>
            <RouterLink
              to="/contact"
              class="px-4 py-2 text-white text-base font-medium hover:bg-blue-700 rounded-lg transition duration-200"
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
