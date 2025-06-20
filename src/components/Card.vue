<template>
  <div class="rounded overflow-hidden shadow-lg">
    <img :src="imgSrc" alt="Card Image" class="w-full h-64 object-cover" />
    <div class="p-4">
      <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
      <p class="text-gray-700">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['imgSrc', 'title', 'description'])
</script>
