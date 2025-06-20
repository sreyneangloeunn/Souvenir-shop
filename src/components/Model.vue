<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <button @click="$emit('close')" class="absolute top-3 right-4 text-gray-600 text-xl">&times;</button>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps(['show'])
</script>
