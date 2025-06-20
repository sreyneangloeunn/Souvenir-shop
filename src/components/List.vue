<script setup>
import { ref } from 'vue'

defineProps({
  logoUrl: {
    type: String,
    default: 'https://image.similarpng.com/file/similarpng/original-picture/2020/05/Chef-logo-vector-PNG-1.png',
  },
  title: {
    type: String,
    default: 'សូមស្វាគមន៍មកកាន់គេហទំព័ររបស់យើង',
  },
  subtitle: {
    type: String,
    default: 'ហាងរបស់យើងផ្តល់នូវមុខម្ហូបជាច្រើនដែលមានរសជាតិពិសេសពីប្រទេសកម្ពុជា ដូចជា ប្រហុកខ្ទិះ មីឆា ភេសជ្ជះគ្រប់ប្រភេទ និងក្តាមប្រៃ!',
  },
  linkTo: {
    type: String,
    default: '/sreyneang',
  },
})

const users = ref([
  { id: 1, name: 'Sreyneang', role: 'Owner', email: 'sreyneang@example.com' },
  { id: 2, name: 'Sokha', role: 'Chef', email: 'sokha@example.com' },
  { id: 3, name: 'Sophea', role: 'Waiter', email: 'sophea@example.com' },
])

const newUser = ref({ name: '', role: '', email: '' })

function addUser() {
  if (newUser.value.name && newUser.value.role && newUser.value.email) {
    const id = users.value.length + 1
    users.value.push({ id, ...newUser.value })
    newUser.value = { name: '', role: '', email: '' }
  }
}
</script>

<template>
  <div
    class="flex flex-col min-h-screen w-full bg-white p-8 overflow-auto"
  >
    <!-- Header (logo/title/subtitle) -->
    <div
      class="flex flex-col items-center justify-center bg-pink-50 rounded-3xl shadow-lg p-16 mb-12 mx-auto w-full max-w-6xl"
      style="min-height: 320px;"
    >
      <router-link :to="linkTo" class="group relative">
        <div
          class="rounded-full p-2 bg-pink-200 shadow-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:animate-bounce cursor-pointer"
          style="width: 128px; height: 128px;"
        >
          <img
            :src="logoUrl"
            alt="Website Logo"
            class="h-full w-full rounded-full object-cover"
          />
        </div>
        <span
          class="absolute -top-4 right-0 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none"
          style="animation: floatUp 2s infinite alternate;"
        >❤️</span>
      </router-link>

      <router-link :to="linkTo" class="group mt-8">
        <h1
          class="text-4xl sm:text-5xl font-extrabold text-pink-600 cursor-pointer select-none tracking-widest drop-shadow-[2px_2px_6px_rgba(251,207,232,0.7)] group-hover:text-pink-800 group-hover:scale-105 transition-all duration-300"
        >
          {{ title }}
        </h1>
      </router-link>

      <p
        class="max-w-xl text-center mt-4 text-pink-500 text-lg leading-relaxed font-semibold relative before:absolute before:-bottom-1 before:left-1/2 before:w-20 before:h-1 before:bg-pink-300 before:rounded-full before:-translate-x-1/2 before:animate-pulse"
      >
        {{ subtitle }}
      </p>
    </div>

    <!-- Mission & Vision Section -->
<div class="bg-indigo-50 rounded-3xl shadow-lg p-10 mb-12 mx-auto w-full max-w-6xl">
  <h2 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6 text-center tracking-wide">
    Our Mission & Vision
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed">
    <div class="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
      <h3 class="text-2xl font-semibold text-indigo-600 mb-3">🎯 Mission</h3>
      <p>
        To provide our customers with delicious, authentic Cambodian cuisine using fresh ingredients,
        heartfelt service, and a warm atmosphere that celebrates our culinary culture.
      </p>
    </div>

    <div class="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
      <h3 class="text-2xl font-semibold text-indigo-600 mb-3">🌟 Vision</h3>
      <p>
        To become a leading name in Cambodian food excellence, both locally and internationally, while
        inspiring pride in our heritage and supporting our community through sustainable practices.
      </p>
    </div>
  </div>
</div>
    <!-- Table -->
    <div class="overflow-x-auto mb-10 bg-white rounded shadow mx-auto w-full max-w-6xl flex-grow">
        <h2 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6 text-center tracking-wide">
  Our Team
</h2>
      <table class="min-w-full leading-normal">
        <thead>
          <tr class="bg-indigo-100">
            <th
              class="px-5 py-3 border-b-2 border-indigo-300 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              class="px-5 py-3 border-b-2 border-indigo-300 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              class="px-5 py-3 border-b-2 border-indigo-300 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              class="px-5 py-3 border-b-2 border-indigo-300 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wider"
            >
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            class="hover:bg-indigo-50 cursor-pointer"
          >
            <td class="px-5 py-5 border-b border-indigo-200 text-sm">{{ user.id }}</td>
            <td class="px-5 py-5 border-b border-indigo-200 text-sm">{{ user.name }}</td>
            <td class="px-5 py-5 border-b border-indigo-200 text-sm">{{ user.role }}</td>
            <td class="px-5 py-5 border-b border-indigo-200 text-sm">{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Form -->
    <form
      @submit.prevent="addUser"
      class="bg-white rounded p-6 shadow mb-10 mx-auto w-full max-w-6xl"
    >
      <h2 class="text-xl font-semibold mb-4 text-indigo-700">Add New User</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <input
          v-model="newUser.name"
          type="text"
          placeholder="Name"
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          v-model="newUser.role"
          type="text"
          placeholder="Role"
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          v-model="newUser.email"
          type="email"
          placeholder="Email"
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        class="mt-6 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
      >
        Add User
      </button>
    </form>

    

  </div>
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
