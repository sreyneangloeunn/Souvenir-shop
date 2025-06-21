<script setup>
import { ref } from 'vue'

defineProps({
  logoUrl: {
    type: String,
    default: 'https://image.similarpng.com/file/similarpng/original-picture/2020/05/Chef-logo-vector-PNG-1.png',
  },
  title: {
    type: String,
    default: 'Welcome to Our Souvenir Shop',
  },
  subtitle: {
    type: String,
    default: 'Discover beautifully handcrafted gifts and souvenirs inspired by Cambodian culture. From traditional to modern designs — each item tells a story.',
  },
  linkTo: {
    type: String,
    default: '/sreyneang',
  },
})

const users = ref([
  { id: 1, name: 'Sreyneang', role: 'Owner', email: 'sreyneang@example.com' },
  { id: 2, name: 'Sokha', role: 'Designer', email: 'sokha@example.com' },
  { id: 3, name: 'Sophea', role: 'Customer Support', email: 'sophea@example.com' },
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
  <div class="flex flex-col min-h-screen w-full bg-white p-8 overflow-auto">
    
    <!-- Mission & Vision -->
    <div class="bg-indigo-50 rounded-3xl shadow-lg p-10 mb-12 mx-auto w-full max-w-6xl">
      <h2 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6 text-center tracking-wide">Our Mission & Vision</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed">
        <div class="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
          <h3 class="text-2xl font-semibold text-indigo-600 mb-3">🎯 Mission</h3>
          <p>
            Our mission is to offer high-quality, handmade souvenirs that preserve cultural identity,
            empower artisans, and bring a piece of Cambodia to every traveler’s heart.
          </p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
          <h3 class="text-2xl font-semibold text-indigo-600 mb-3">🌟 Vision</h3>
          <p>
            We aim to be the most trusted and loved souvenir brand in Cambodia — where every purchase supports
            local communities and celebrates meaningful stories.
          </p>
        </div>
      </div>
    </div>

    <!-- Why Customers Love Us -->
    <div class="bg-yellow-50 rounded-3xl shadow-lg p-10 mb-12 mx-auto w-full max-w-6xl">
      <h2 class="text-3xl sm:text-4xl font-bold text-yellow-700 mb-6 text-center tracking-wide">What Makes Us Special?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 text-base">
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 class="text-lg font-semibold mb-2">🌺 Authentic Khmer Designs</h3>
          <p>Each product reflects the beauty of Cambodian heritage — from traditional fabrics to ancient patterns.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 class="text-lg font-semibold mb-2">🧵 Handmade by Local Artisans</h3>
          <p>We collaborate with talented craftspeople across Cambodia to bring you unique, one-of-a-kind items.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 class="text-lg font-semibold mb-2">🌏 Eco-Conscious & Ethical</h3>
          <p>From eco-friendly packaging to fair trade practices — we care about people and the planet.</p>
        </div>
      </div>
    </div>

    <!-- Team Table -->
    <div class="overflow-x-auto mb-10 bg-white rounded shadow mx-auto w-full max-w-6xl flex-grow">
      <h2 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6 text-center tracking-wide">Our Team</h2>
      <table class="min-w-full leading-normal">
        <thead>
          <tr class="bg-indigo-100">
            <th class="px-5 py-3 border-b-2 border-indigo-300 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wider">ID</th>
            <th class="px-5 py-3 border-b-2 border-indigo-300 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wider">Name</th>
            <th class="px-5 py-3 border-b-2 border-indigo-300 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wider">Role</th>
            <th class="px-5 py-3 border-b-2 border-indigo-300 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wider">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="hover:bg-indigo-50 cursor-pointer">
            <td class="px-5 py-5 border-b border-indigo-200 text-sm">{{ user.id }}</td>
            <td class="px-5 py-5 border-b border-indigo-200 text-sm">{{ user.name }}</td>
            <td class="px-5 py-5 border-b border-indigo-200 text-sm">{{ user.role }}</td>
            <td class="px-5 py-5 border-b border-indigo-200 text-sm">{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add New User Form -->
    <form @submit.prevent="addUser" class="bg-white rounded p-6 shadow mb-10 mx-auto w-full max-w-6xl">
      <h2 class="text-xl font-semibold mb-4 text-indigo-700">Add New Team Member</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <input v-model="newUser.name" type="text" placeholder="Name" class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
        <input v-model="newUser.role" type="text" placeholder="Role" class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
        <input v-model="newUser.email" type="email" placeholder="Email" class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
      </div>
      <button type="submit" class="mt-6 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">Add User</button>
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
