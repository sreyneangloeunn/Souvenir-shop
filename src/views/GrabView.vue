<template>
  <div class="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-10" style="background-image: url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1350&q=80');">
    <div class="max-w-6xl mx-auto space-y-10 bg-white bg-opacity-90 p-6 rounded-xl shadow-lg">
      <!-- Page Title -->
      <h1 class="text-3xl font-bold text-center text-pink-700">Discover Beautiful Flowers Around the World</h1>

      <!-- Intro Text -->
      <div class="text-center text-gray-600 max-w-2xl mx-auto">
        <p>Welcome to our floral paradise! We offer a wide range of flowers from Cambodia and beyond—perfect for gifts, decorations, or garden collections.</p>
      </div>

      <!-- Flower Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="(flower, index) in flowerList"
          :key="index"
          :imgSrc="flower.img"
          :title="flower.name"
          :description="flower.description"
        />
      </div>

      <!-- Featured Flower -->
      <div class="bg-yellow-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 mt-12">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Tulip_-_floriade_canberra.jpg/800px-Tulip_-_floriade_canberra.jpg" alt="Tulip" class="w-full md:w-1/3 rounded-lg shadow" />
        <div>
          <h2 class="text-xl font-bold text-pink-700">🌷 Tulip (Special Feature)</h2>
          <p class="mt-2 text-gray-700">Tulips are one of the most beloved flowers worldwide, known for their vibrant colors and elegant shape. A top-seller in spring seasons!</p>
        </div>
      </div>

      <!-- Form Section -->
      <Form @submit="onFormSubmit">
        <input
          v-model="name"
          placeholder="Enter your name"
          class="w-full mt-6 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
        <button
          type="submit"
          class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </Form>

      <!-- Modal -->
      <Modal :show="showModal" @close="showModal = false">
        <div class="text-center space-y-4 p-6 bg-white rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-green-700">🎉 Thank you, {{ name }}!</h2>
          <p class="text-gray-700">Your interest means a lot to us. We’ll get back to you soon!</p>
          <button
            @click="showModal = false"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Close
          </button>
        </div>
      </Modal>

      <!-- Shop Contact Info -->
      <div class="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 mt-12 text-center space-y-3 max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold text-blue-800">🌼 Visit Sreyneang’s Flower Shop</h2>
        <p class="text-gray-700">123 Blossom Street, Phnom Penh, Cambodia</p>
        <p class="text-gray-700">Tel: +855 12 345 678</p>
        <p class="text-gray-700">Email: hello@sreyneangflowers.com</p>
        <p class="text-gray-700">Open: Mon–Sat, 8AM – 6PM</p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gradient-to-r from-pink-100 to-indigo-100 border-t border-indigo-200 py-8 shadow-inner mt-10">
      <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm space-y-4 md:space-y-0">
        <div class="text-center md:text-left">
          <p>
            © {{ currentYear }} 
            <span class="font-bold text-pink-600">Sreyneang’s Garden</span>. Made with
            <span class="text-red-400 animate-pulse">❤️</span> for flower lovers worldwide.
          </p>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="text-indigo-600 hover:text-pink-600 transition duration-300 font-medium">Privacy</a>
          <a href="#" class="text-indigo-600 hover:text-pink-600 transition duration-300 font-medium">Terms</a>
          <a href="#" class="text-indigo-600 hover:text-pink-600 transition duration-300 font-medium">Contact</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from '../components/Card.vue'
import Form from '../components/Form.vue'
import Modal from '../components/Model.vue'

const name = ref('')
const showModal = ref(false)
const currentYear = new Date().getFullYear()

const onFormSubmit = () => {
  showModal.value = true
}

const flowerList = ref([
  {
    name: 'Lotus (ផ្កាឈូក)',
    description: 'The lotus is a sacred flower in Cambodia, symbolizing purity and enlightenment.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Lotus_flower.jpg/640px-Lotus_flower.jpg',
  },
  {
    name: 'Rumdul (ផ្ការម្ពុល)',
    description: 'Rumdul is the national flower of Cambodia, known for its fragrant scent.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Mitrella_mesnyi_02.jpg',
  },
  {
    name: 'Frangipani (ផ្កាចំរូង)',
    description: 'A beautiful flower with a sweet scent, often seen in temples and gardens.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Plumeria_rubra_flowers_2.jpg',
  },
  {
    name: 'Bougainvillea',
    description: 'A vibrant tropical flower found in many Cambodian homes and gardens.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Bougainvillea_spectabilis_in_Hyderabad_W_IMG_8912.jpg',
  },
  {
    name: 'Hibiscus',
    description: 'A colorful flower with wide petals, common in Southeast Asia.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Hibiscus_rosa-sinensis_2.jpg',
  },
  {
    name: 'Orchid',
    description: 'Known for their exotic beauty, orchids grow abundantly in Cambodian forests.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Phalaenopsis_JPEG.png',
  },
  {
    name: 'Rose',
    description: 'Roses are classic flowers symbolizing love and romance. Available in many colors.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Red_rose_01.jpg',
  },
  {
    name: 'Sunflower',
    description: 'These cheerful flowers follow the sun and symbolize positivity and joy.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg',
  },
  {
    name: 'Lavender',
    description: 'Known for its calming fragrance, lavender is used in decor and aromatherapy.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Lavandula_angustifolia_English_Lavender.jpg',
  },
])
</script>
