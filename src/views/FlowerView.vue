<template>
  <div class="max-w-6xl mx-auto p-6 space-y-12">
    <h1 class="text-3xl font-bold text-center text-blue-700">Discover Beautiful Flowers Around the World</h1>

    <!-- Promotion Banner -->
    <div class="bg-pink-100 border border-pink-300 text-pink-800 p-4 rounded-md text-center font-semibold animate-pulse">
      🌸 Spring Sale! Get 20% off on all tropical flowers! Use code <span class="underline">SPRING20</span> at checkout.
    </div>

    <!-- Categories Tabs -->
    <div>
      <nav class="flex space-x-4 justify-center mb-6">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="selectedCategory === cat ? 'border-b-2 border-pink-600 text-pink-600 font-semibold' : 'text-gray-600 hover:text-pink-600'"
          class="pb-2 transition"
        >
          {{ cat }}
        </button>
      </nav>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="(flower, index) in filteredFlowers"
          :key="index"
          :imgSrc="flower.img"
          :title="flower.name"
          :description="flower.description"
        >
          <template #footer>
            <div class="flex justify-between items-center mt-2">
              <span class="font-bold text-pink-600 text-lg">${{ flower.price }}</span>
              <button
                @click="addToCart(flower)"
                class="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700 transition"
              >
                Buy
              </button>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <!-- Featured Flower -->
    <section class="bg-yellow-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 mt-12">
      <img
        src="https://i.pinimg.com/736x/e8/74/b4/e874b4d76471d79cf138fdbbb8eb13e5.jpg"
        alt="Tulip"
        class="w-full md:w-1/3 rounded-lg shadow"
      />
      <div>
        <h2 class="text-xl font-bold text-pink-700">🌷 Tulip (Special Feature)</h2>
        <p class="mt-2 text-gray-700">
          Tulips are one of the most beloved flowers worldwide, known for their vibrant colors and elegant
          shape. A top-seller in spring seasons!
        </p>
        <button
          @click="addToCart({ name: 'Tulip', price: 15 })"
          class="mt-4 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          Buy Tulip - $15
        </button>
      </div>
    </section>

    <!-- Flower Care Tips -->
    <section class="bg-green-50 p-6 rounded-lg shadow-inner mt-12">
      <h3 class="text-2xl font-semibold mb-4 text-green-700">🌿 Flower Care Tips</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>Water flowers regularly but avoid overwatering to prevent root rot.</li>
        <li>Keep flowers in a sunny spot but avoid direct harsh afternoon sun.</li>
        <li>Trim stems every few days to help them absorb water better.</li>
        <li>Use fresh, clean water and change it every 2-3 days.</li>
        <li>Remove wilted flowers promptly to encourage new growth.</li>
      </ul>
    </section>

    <!-- Customer Reviews -->
    <section class="mt-12">
      <h3 class="text-2xl font-semibold text-center mb-8 text-purple-700">💬 What Our Customers Say</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <p class="italic text-gray-700">"Beautiful selection and fast delivery! My garden is blooming thanks to Sreyneang’s Garden."</p>
          <p class="mt-4 font-semibold text-pink-600">- Dara, Phnom Penh</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <p class="italic text-gray-700">"The flowers are fresh and healthy. Great customer service too!"</p>
          <p class="mt-4 font-semibold text-pink-600">- Sophie, France</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <p class="italic text-gray-700">"Lovely floral arrangements for my wedding. Highly recommend."</p>
          <p class="mt-4 font-semibold text-pink-600">- Lin, Singapore</p>
        </div>
      </div>
    </section>

    <!-- Newsletter Subscription -->
    <section class="bg-indigo-50 p-6 rounded-lg mt-12 text-center">
      <h3 class="text-xl font-semibold mb-4 text-indigo-700">Subscribe to Our Newsletter</h3>
      <p class="mb-4 text-gray-700 max-w-md mx-auto">
        Get exclusive offers, flower care tips, and updates delivered to your inbox.
      </p>
      <form @submit.prevent="subscribeNewsletter" class="flex justify-center gap-4 max-w-md mx-auto">
        <input
          v-model="email"
          type="email"
          placeholder="Your email address"
          required
          class="flex-grow border border-indigo-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Subscribe
        </button>
      </form>
      <p v-if="subscriptionSuccess" class="mt-4 text-green-600 font-semibold">Thank you for subscribing!</p>
    </section>

    <!-- Form & Modal -->
    <Form @submit="onFormSubmit">
      <input
        v-model="name"
        placeholder="Enter your name"
        class="w-full mt-4 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
      />
      <button
        type="submit"
        class="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </Form>

    <Modal :show="showModal" @close="showModal = false">
      <div class="text-center space-y-4">
        <h2 class="text-xl font-semibold">Hello {{ name }}</h2>
        <p>Thank you for exploring flowers with us!</p>
        <button
          @click="showModal = false"
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </Modal>
  </div>

  <!-- Footer -->
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
</template>

<script setup>
import { ref, computed } from 'vue'
import Card from '../components/Card.vue'
import Form from '../components/Form.vue'
import Modal from '../components/Model.vue'

const name = ref('')
const showModal = ref(false)
const email = ref('')
const subscriptionSuccess = ref(false)

const categories = ['All', 'Tropical', 'Seasonal', 'Popular']

const flowers = ref([
  {
    name: 'Rose',
    description: 'Classic red roses symbolize love and passion.',
    img: 'https://i.pinimg.com/736x/c9/14/68/c91468e0df690d82cc2cdb2c4a4e83af.jpg',
    category: 'Popular',
    price: 10,
  },
  {
    name: 'Sunflower',
    description: 'Bright and cheerful sunflowers that bring sunshine to your home.',
    img: 'https://i.pinimg.com/736x/4f/87/8c/4f878cd14e14ba72c5479897b60e228a.jpg',
    category: 'Seasonal',
    price: 8,
  },
  {
    name: 'Lavender',
    description: 'Fragrant lavender with calming properties and beautiful purple hues.',
    img: 'https://i.pinimg.com/736x/31/94/b1/3194b12dc56a57f62c087a110e298975.jpg',
    category: 'Popular',
    price: 12,
  },
  {
    name: 'Orchid',
    description: 'Elegant tropical orchids with exquisite petals.',
    img: 'https://i.pinimg.com/736x/bc/fb/76/bcfb76ea12b838c1cdaf7dacba3e62cf.jpg',
    category: 'Tropical',
    price: 15,
  },
  {
    name: 'Plumeria',
    description: 'Sweet-smelling tropical flowers, perfect for leis.',
    img: 'https://i.pinimg.com/736x/33/aa/25/33aa2579a47e4200468d3a94801a07ce.jpg',
    category: 'Tropical',
    price: 9,
  },
  {
    name: 'Tulip',
    description: 'Bright, colorful tulips, a symbol of spring and renewal.',
    img: 'https://i.pinimg.com/736x/bd/d2/9f/bdd29f88cde4224b3cde1c30ccbfbcad.jpg',
    category: 'Seasonal',
    price: 15,
  },
])

const selectedCategory = ref('All')

const filteredFlowers = computed(() => {
  if (selectedCategory.value === 'All') {
    return flowers.value
  }
  return flowers.value.filter((f) => f.category === selectedCategory.value)
})

const addToCart = (flower) => {
  alert(`Added ${flower.name} to your cart! Price: $${flower.price}`)
}

const onFormSubmit = () => {
  showModal.value = true
}

const subscribeNewsletter = () => {
  subscriptionSuccess.value = true
  email.value = ''
}

const currentYear = new Date().getFullYear()
</script>
