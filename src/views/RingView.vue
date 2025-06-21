<template>
  <div class="bg-gray-50 min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-6 text-center">
      <h1 class="text-4xl font-extrabold mb-4">Exclusive Rings for Your Special Moments 💍</h1>
      <p class="max-w-xl mx-auto text-lg font-light">
        Discover the perfect gift for your loved ones. Elegant, timeless, and crafted with passion.
      </p>
    </section>

    <!-- Featured Offer Banner -->
    <section class="bg-yellow-100 py-4 text-center text-yellow-800 font-semibold tracking-wide">
      🎉 Limited Time Offer: Free Shipping on All Rings Over $100! 🎉
    </section>

    <!-- Rings Grid -->
    <main class="flex-grow max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        v-for="ring in rings"
        :key="ring.id"
        :imgSrc="ring.img"
        :title="ring.name"
        :description="ring.description"
        :price="ring.price"
      />
    </main>

    <!-- Newsletter Signup -->
    <section class="bg-white border-t border-gray-200 py-12 text-center">
      <h2 class="text-2xl font-bold mb-2">Stay in the Loop!</h2>
      <p class="mb-6 max-w-md mx-auto text-gray-600">Subscribe to get updates on new arrivals and exclusive deals.</p>
      <form @submit.prevent="subscribe" class="max-w-sm mx-auto flex gap-2">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          class="bg-pink-600 text-white px-6 rounded-r-md hover:bg-purple-700 transition"
        >
          Subscribe
        </button>
      </form>
      <p v-if="subscribed" class="mt-4 text-green-600 font-semibold">Thank you for subscribing! 🎉</p>
    </section>

    <footer class="bg-gradient-to-r from-pink-100 to-indigo-100 border-t border-indigo-200 mt-auto py-8 shadow-inner">
  <div
    class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm space-y-4 md:space-y-0"
  >
    <div class="text-center md:text-left">
      <p>
        © {{ currentYear }}
        <span class="font-bold text-pink-600">Sreyneang’s Garden</span>.
        Made with <span class="text-red-400 animate-pulse">❤️</span> for flower lovers worldwide.
      </p>
    </div>
    <div class="flex space-x-4">
      <a href="#" class="text-indigo-600 hover:text-pink-600 transition duration-300 font-medium">Privacy</a>
      <a href="#" class="text-indigo-600 hover:text-pink-600 transition duration-300 font-medium">Terms</a>
      <a href="#" class="text-indigo-600 hover:text-pink-600 transition duration-300 font-medium">Contact</a>
      <!-- Social Icons -->
      <a href="#" aria-label="Facebook" class="text-indigo-600 hover:text-pink-600 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.466h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.99 22 12z"
          />
        </svg>
      </a>
      <a href="#" aria-label="Instagram" class="text-indigo-600 hover:text-pink-600 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M7.75 2C5.679 2 4 3.679 4 5.75v12.5C4 20.321 5.679 22 7.75 22h8.5c2.07 0 3.75-1.679 3.75-3.75V5.75C20 3.679 18.32 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm5.5-1.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
          />
        </svg>
      </a>
    </div>
  </div>
</footer>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
import { ref } from 'vue'

const rings = [
  {
    id: 1,
    name: 'Eternal Love Ring',
    description: 'A delicate gold ring symbolizing everlasting love. Perfect for engagements or anniversaries. ⭐',
    price: '$120',
    img: 'https://i.pinimg.com/736x/aa/b5/3e/aab53ec5cabf03acce4ebea7afe86262.jpg',
  },
  {
    id: 2,
    name: 'Heart Diamond Ring',
    description: 'Heart-shaped diamond ring to show your true feelings. A gift from the heart. ❤️',
    price: '$2250',
    img: 'https://i.pinimg.com/736x/20/15/21/201521e75a264add7d1add4083388e2c.jpg',
  },
  {
    id: 3,
    name: 'Rose Gold Promise Ring',
    description: 'Beautiful rose gold promise ring, a symbol of commitment and love. 🌹',
    price: '$150',
    img: 'https://i.pinimg.com/736x/a6/07/2e/a6072e8688958fe6bf8191e9774f2597.jpg',
  },
  {
    id: 4,
    name: 'Classic Silver Band',
    description: 'Timeless silver band that never goes out of style. Perfect gift for any occasion. 💫',
    price: '$90',
    img: 'https://i.pinimg.com/736x/60/ca/aa/60caaa577e6cd0024d7f6078b7b2bab5.jpg',
  },
  {
    id: 5,
    name: 'Infinity Ring',
    description: 'Represent your infinite love with this elegant infinity ring. ∞',
    price: '$180',
    img: 'https://i.pinimg.com/736x/ed/8f/8b/ed8f8b6e60a06f0d262a205fe9c856c5.jpg',
  },
  {
    id: 6,
    name: 'Vintage Sapphire Ring',
    description: 'A vintage-inspired sapphire ring that tells a story of love and elegance. 💎',
    price: '$300',
    img: 'https://i.pinimg.com/736x/c7/63/f7/c763f74fe1edc552ffabfbb2e7c255e4.jpg',
  },
  {
    id: 7,
    name: 'Pearl Elegance Ring',
    description: 'Graceful pearl ring that shines with pure elegance. Perfect for anniversaries. 🦪',
    price: '$140',
    img: 'https://i.pinimg.com/736x/f5/06/67/f50667c3a22a01c26c8f70cfa5b93721.jpg',
  },
  {
    id: 8,
    name: 'Minimalist Gold Band',
    description: 'Simple yet stunning gold band for everyday elegance. ✨',
    price: '$110',
    img: 'https://i.pinimg.com/736x/ed/f4/f2/edf4f2ffad7dce60e430353162bd470f.jpg',
  },
  {
    id: 9,
    name: 'Crystal Heart Ring',
    description: 'Sparkling crystal heart ring to melt your lover’s heart. 💖',
    price: '$200',
    img: 'https://i.pinimg.com/736x/ab/3e/14/ab3e14fb4cf4e552d703427f349a19c7.jpg',
  },
  {
    id: 10,
    name: 'Golden Leaf Ring',
    description: 'Nature-inspired golden leaf ring symbolizing growth and love. 🍃',
    price: '$130',
    img: 'https://i.pinimg.com/736x/f3/39/22/f339225146e72d37b2b1b7daa5a54312.jpg',
  },
]

const email = ref('')
const subscribed = ref(false)

function subscribe() {
  if (email.value) {
    subscribed.value = true
    email.value = ''
  }
}
</script>

<style scoped>
/* Smooth shadow transition on card hover */
.card {
  transition: box-shadow 0.3s ease;
}
.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
