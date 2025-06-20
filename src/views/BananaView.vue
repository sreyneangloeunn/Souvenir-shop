<template>
  <div class="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-10" style="background-image: url('https://images.unsplash.com/photo-1521337581100-8ca9a73a5f9b?auto=format&fit=crop&w=1350&q=80');">
    <div class="max-w-6xl mx-auto space-y-10 bg-white bg-opacity-90 p-6 rounded-xl shadow-lg">
      
      <!-- Page Title -->
      <h1 class="text-4xl font-extrabold text-center text-indigo-800 tracking-wide">
        ✨ Step Into Style with Sreyneang’s Fashion ✨
      </h1>

      <!-- Intro Text -->
      <div class="text-center text-gray-700 text-lg max-w-2xl mx-auto mt-4">
        <p>
          Discover the perfect blend of elegance and comfort. From chic streetwear to classy evening outfits, 
          our handpicked collection brings global fashion trends right to your wardrobe.
        </p>
        <p class="mt-2 font-medium text-indigo-600">Dress bold. Dress confident. Dress like you mean it.</p>
      </div>


      <!-- Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="(item, index) in clothesList"
          :key="index"
          :imgSrc="item.img"
          :title="item.name"
          :description="item.description"
        />
      </div>

      <!-- Featured Product -->
      <div class="bg-indigo-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 mt-12">
        <img src="https://images.unsplash.com/photo-1600180758890-e087a534ee80?auto=format&fit=crop&w=800&q=80" alt="Featured" class="w-full md:w-1/3 rounded-lg shadow" />
        <div>
          <h2 class="text-xl font-bold text-indigo-700">👚 Featured: Elegant Silk Dress</h2>
          <p class="mt-2 text-gray-700">This premium silk dress offers a blend of traditional charm and modern design. Available in multiple colors for all sizes.</p>
        </div>
      </div>

      <!-- Contact Form -->
      <Form @submit="onFormSubmit">
        <input
          v-model="name"
          placeholder="Enter your name"
          class="w-full mt-6 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
        <button
          type="submit"
          class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </Form>

      <!-- Modal -->
      <Modal :show="showModal" @close="showModal = false">
        <div class="text-center space-y-4 p-6 bg-white rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-green-700">🎉 Thank you, {{ name }}!</h2>
          <p class="text-gray-700">We appreciate your interest in our clothing collection. Stay stylish!</p>
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
        <h2 class="text-2xl font-bold text-indigo-800">🛍️ Visit Sreyneang’s Clothing Store</h2>
        <p class="text-gray-700">456 Style Street, Phnom Penh, Cambodia</p>
        <p class="text-gray-700">Tel: +855 99 888 777</p>
        <p class="text-gray-700">Email: contact@sreyneangfashion.com</p>
        <p class="text-gray-700">Open: Mon–Sun, 9AM – 8PM</p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gradient-to-r from-indigo-100 to-pink-100 border-t border-indigo-200 py-8 shadow-inner mt-10">
      <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm space-y-4 md:space-y-0">
        <div class="text-center md:text-left">
          <p>
            © {{ currentYear }} 
            <span class="font-bold text-indigo-600">Sreyneang’s Fashion</span>. Designed with 
            <span class="text-red-400 animate-pulse">❤️</span> for stylish shoppers.
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

// List of Clothing Items
const clothesList = ref([
  {
    name: 'Summer T-Shirt',
    description: 'Breathable cotton t-shirt perfect for warm weather.',
    img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Classic Denim Jacket',
    description: 'Timeless style that matches everything in your wardrobe.',
    img: 'https://images.unsplash.com/photo-1585386959984-a415522c89e3?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Casual Pants',
    description: 'Relaxed-fit pants for work or daily wear.',
    img: 'https://images.unsplash.com/photo-1618354691268-cc361f35258c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Elegant Silk Dress',
    description: 'Perfect for formal occasions and evening events.',
    img: 'https://images.unsplash.com/photo-1600180758890-e087a534ee80?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Hooded Sweatshirt',
    description: 'Cozy and stylish hoodie available in many colors.',
    img: 'https://images.unsplash.com/photo-1618354691876-1f25a70d178c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Street Style Sneakers',
    description: 'Trendy shoes designed for both comfort and fashion.',
    img: 'https://images.unsplash.com/photo-1596464716121-b7d2cdb674e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Men’s Formal Shirt',
    description: 'Elegant shirt suitable for office or weddings.',
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sporty Tracksuit',
    description: 'Perfect for workouts or a relaxed day.',
    img: 'https://images.unsplash.com/photo-1603252109303-2751441d6362?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Vintage Skirt',
    description: 'Bring retro vibes into your look.',
    img: 'https://images.unsplash.com/photo-1571731956672-643f7e5e1f39?auto=format&fit=crop&w=800&q=80',
  },
])
</script>
