<script setup>
import List from '@/components/List.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Hero Section -->
    <section class="text-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-100 to-pink-100">
      <h1 class="text-4xl font-bold mb-4 animate-bounce text-blue-800">
        Welcome to Sreyneang's Souvenir Shop!
      </h1>
      <p class="max-w-2xl mx-auto text-lg text-gray-700">
        Discover a curated collection of beautiful handmade souvenirs — from flower arrangements and artisan rings to traditional clothes and more.
        Every item tells a story and brings a piece of Cambodian charm to your life.
      </p>
    </section>

    <!-- Owner Section -->
    <section class="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md max-w-3xl mx-auto my-10">
      <img
        src="../../public/IMG_6123.JPG"
        alt="Owner Sreyneang"
        class="w-48 h-48 rounded-full object-cover shadow-lg mb-4"
      />
      <h3 class="text-xl font-semibold text-blue-800">Meet Sreyneang, Our Founder</h3>
      <p class="text-gray-600 max-w-xl text-center mt-2">
        Passionate about bringing the beauty of Cambodian culture and craftsmanship to the world, Sreyneang started this shop with love and dedication.
      </p>
    </section>

    <!-- Featured Section -->
    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-semibold text-center text-blue-700 mb-8">Popular Collections</h2>
      <div class="flex flex-col sm:flex-row justify-center gap-6">
        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all w-full sm:w-1/3">
          <h3 class="text-lg font-bold mb-2 text-pink-700">Handmade Flower Bouquets</h3>
          <p class="text-gray-600">Crafted with love, perfect for gifts and celebrations.</p>
        </div>
        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all w-full sm:w-1/3">
          <h3 class="text-lg font-bold mb-2 text-yellow-700">Silver & Gemstone Rings</h3>
          <p class="text-gray-600">Locally designed with natural elegance and authenticity.</p>
        </div>
        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all w-full sm:w-1/3">
          <h3 class="text-lg font-bold mb-2 text-indigo-700">Traditional Clothing</h3>
          <p class="text-gray-600">Stylish and cultural outfits that honor Cambodian heritage.</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold text-center text-blue-800 mb-8">Why Choose Us?</h2>
      <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-6 border rounded-lg shadow-sm hover:shadow-md">
          <h3 class="text-lg font-semibold text-green-700 mb-2">Locally Made</h3>
          <p class="text-gray-600">We support Cambodian artisans and source materials locally.</p>
        </div>
        <div class="p-6 border rounded-lg shadow-sm hover:shadow-md">
          <h3 class="text-lg font-semibold text-purple-700 mb-2">Authentic Craftsmanship</h3>
          <p class="text-gray-600">Every product is unique, made with traditional skills and love.</p>
        </div>
        <div class="p-6 border rounded-lg shadow-sm hover:shadow-md">
          <h3 class="text-lg font-semibold text-red-700 mb-2">Satisfaction Guarantee</h3>
          <p class="text-gray-600">We prioritize customer happiness with quality service and support.</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="bg-gradient-to-r from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold text-center text-blue-700 mb-12">What Our Customers Say</h2>
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <blockquote class="bg-white p-8 rounded-2xl shadow-md min-h-[180px]">
          <p class="text-gray-700 text-lg italic">“The handmade flower bouquet was so beautiful and fresh. It made my mom’s birthday extra special!”</p>
          <footer class="mt-6 text-sm text-gray-500">– Dara from Phnom Penh</footer>
        </blockquote>
        <blockquote class="bg-white p-8 rounded-2xl shadow-md min-h-[180px]">
          <p class="text-gray-700 text-lg italic">“I love the silver ring I bought. You can feel the care that went into making it.”</p>
          <footer class="mt-6 text-sm text-gray-500">– Lina from Siem Reap</footer>
        </blockquote>
      </div>
    </section>

    <!-- Product List -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 animate-[floatUp_2s_ease-in-out_infinite]">
      <List />
    </section>

    <!-- Call To Action -->
    <section class="text-center py-12 bg-blue-700 text-white">
      <h2 class="text-2xl font-bold mb-4">Ready to take home a piece of Cambodia?</h2>
      <p class="mb-6">Shop now and discover unique gifts and souvenirs that bring joy and culture together.</p>
      <RouterLink
        to="/brahok"
        class="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
      >
        Browse Products
      </RouterLink>
    </section>
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
