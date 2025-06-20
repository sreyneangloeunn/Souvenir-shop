<template>
  <table class="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-md">
    <thead class="bg-gray-100">
      <tr>
        <th
          v-for="(header, index) in headers"
          :key="index"
          class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="hover:bg-gray-50 cursor-default">
        <td
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
        >
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  headers: {
    type: Array,
    required: true
  },
  rows: {
    type: Array,
    required: true
  }
})
</script>
