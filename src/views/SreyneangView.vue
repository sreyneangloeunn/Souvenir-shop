<script setup>
import List from '@/components/List.vue';
</script>

<template>
  <List/>
</template>

<style scoped>
@keyframes floatUp {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0.7;
  }
}
</style>
