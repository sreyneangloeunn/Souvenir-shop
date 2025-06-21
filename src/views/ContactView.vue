<template>
  <div
    class="min-h-screen bg-cover bg-center bg-no-repeat px-10 py-14"
    style="background-image: url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1350&q=80');"
  >
    <div class="max-w-full mx-auto bg-white bg-opacity-95 p-12 rounded-xl shadow-lg space-y-12">
      <!-- Page Title -->
      <h1 class="text-5xl font-bold text-center text-pink-700">Contact Sreyneang’s Flower Shop</h1>

      <!-- Intro Text -->
      <p class="text-center text-gray-700 max-w-3xl mx-auto text-lg">
        We’d love to hear from you! Whether you have questions, need custom orders, or want to visit our shop, reach out anytime.
      </p>

      <!-- Contact Info Section -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700">
        <div>
          <h2 class="text-3xl font-semibold mb-6 text-pink-600">Our Location</h2>
          <p class="text-lg">🌸 123 Blossom Street, Phnom Penh, Cambodia</p>
          <p class="text-lg">📞 Tel: +855 12 345 678</p>
          <p class="text-lg">
            📧 Email:
            <a href="mailto:hello@sreyneangflowers.com" class="text-pink-600 underline">hello@sreyneangflowers.com</a>
          </p>
          <p class="text-lg">🕒 Open Hours: Mon – Sat, 8AM – 6PM</p>
          <p class="text-lg">🚗 Free parking available in front of the shop</p>
          <p class="mt-8 font-semibold text-xl">Follow us on Social Media:</p>
          <div class="flex space-x-6 mt-4 text-pink-600">
            <!-- Facebook -->
            <a href="#" aria-label="Facebook" class="hover:text-indigo-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.466h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.99 22 12z"
                />
              </svg>
            </a>

            <!-- Instagram -->
            <a href="#" aria-label="Instagram" class="hover:text-indigo-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M7.75 2C5.679 2 4 3.679 4 5.75v12.5C4 20.321 5.679 22 7.75 22h8.5c2.07 0 3.75-1.679 3.75-3.75V5.75C20 3.679 18.32 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm5.5-1.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
                />
              </svg>
            </a>

            <!-- Twitter -->
            <a href="#" aria-label="Twitter" class="hover:text-indigo-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.03 9.03 0 01-2.83 1.08 4.48 4.48 0 00-7.64 4.09 12.79 12.79 0 01-9.29-4.71 4.48 4.48 0 001.39 6 4.44 4.44 0 01-2.03-.56v.06a4.48 4.48 0 003.59 4.4 4.52 4.52 0 01-2.02.08 4.48 4.48 0 004.19 3.12 9 9 0 01-5.6 1.93 8.73 8.73 0 01-1.07-.06A12.71 12.71 0 007 19c8.34 0 12.91-6.9 12.91-12.88 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z"
                />
              </svg>
            </a>

            <!-- LinkedIn -->
            <a href="#" aria-label="LinkedIn" class="hover:text-indigo-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-11.75 14h-3v-9h3v9zm-1.5-10.26a1.74 1.74 0 110-3.48 1.74 1.74 0 010 3.48zm13.25 10.26h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.38v4.57h-3v-9h2.88v1.23h.04a3.16 3.16 0 012.85-1.57c3.05 0 3.61 2.01 3.61 4.62v4.72z"
                />
              </svg>
            </a>

            <!-- WhatsApp -->
            <a href="#" aria-label="WhatsApp" class="hover:text-indigo-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.52 3.48A11.944 11.944 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.07 1.52 5.78L0 24l6.42-1.49a11.91 11.91 0 005.58 1.41c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.44zm-8.52 16.48a9.828 9.828 0 01-5.19-1.51l-.37-.23-3.81.89.89-3.7-.24-.37a9.885 9.885 0 011.52-5.22 9.94 9.94 0 0114.11 0 9.94 9.94 0 010 14.11 9.852 9.852 0 01-6.9 2.03zm5.51-6.84c-.3-.15-1.77-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.93-2.25-.24-.6-.5-.52-.68-.53-.17 0-.38 0-.58 0-.2 0-.53.07-.81.38-.28.3-1.07 1.04-1.07 2.54 0 1.5 1.1 2.96 1.25 3.17.15.2 2.15 3.29 5.2 4.62.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.1 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Map Placeholder -->
        <div>
          <h2 class="text-3xl font-semibold mb-6 text-pink-600">Find Us Here</h2>
          <div
            class="w-full h-80 rounded-lg overflow-hidden shadow-inner border border-gray-300"
            aria-label="Map Location Placeholder"
          >
            <iframe
              class="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1359882636984!2d104.8951323152606!3d11.56210899187295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095141f4a0ca4b%3A0x7dfbb19a7ef41181!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1687391933714!5m2!1sen!2sus"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <!-- Contact Form -->
      <section>
        <h2 class="text-3xl font-semibold text-pink-600 mb-8 text-center">Send Us a Message</h2>
        <form @submit.prevent="onFormSubmit" class="max-w-4xl mx-auto space-y-8">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            required
            class="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-pink-400 text-lg"
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Your Email"
            required
            class="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-pink-400 text-lg"
          />
          <textarea
            v-model="form.message"
            placeholder="Your Message"
            rows="6"
            required
            class="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-pink-400 resize-none text-lg"
          ></textarea>
          <button
            type="submit"
            class="w-full bg-pink-600 text-white py-4 rounded-md font-semibold text-xl hover:bg-pink-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  </div>
  <!-- Footer -->
<footer class="bg-gradient-to-r from-pink-100 to-indigo-100 border-t border-indigo-200 py-8 shadow-inner mt-10">
  <div
    class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm space-y-4 md:space-y-0"
  >
    <div class="text-center md:text-left">
      <p>
        © {{ currentYear }}
        <span class="font-bold text-pink-600">Sreyneang’s Garden</span>. Made with
        <span class="text-red-400 animate-pulse">❤️</span> for flower lovers worldwide.
      </p>
      <p class="mt-1 text-gray-600">123 Blossom Street, Phnom Penh, Cambodia | Tel: +855 12 345 678 | hello@sreyneangflowers.com</p>
    </div>
    <div class="flex space-x-6">
      <!-- Social Icons -->
      <a href="#" aria-label="Facebook" class="text-indigo-600 hover:text-pink-600 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.466h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.99 22 12z"
          />
        </svg>
      </a>
      <a href="#" aria-label="Instagram" class="text-indigo-600 hover:text-pink-600 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M7.75 2C5.679 2 4 3.679 4 5.75v12.5C4 20.321 5.679 22 7.75 22h8.5c2.07 0 3.75-1.679 3.75-3.75V5.75C20 3.679 18.32 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm5.5-1.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
          />
        </svg>
      </a>
      <a href="#" aria-label="Twitter" class="text-indigo-600 hover:text-pink-600 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.03 9.03 0 01-2.85 1.09 4.52 4.52 0 00-7.69 4.12A12.84 12.84 0 013 4.7a4.48 4.48 0 001.4 6.05 4.48 4.48 0 01-2.05-.56v.06a4.52 4.52 0 003.6 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.21 3.13 9.07 9.07 0 01-5.63 1.95A9.4 9.4 0 012 19a12.84 12.84 0 006.95 2"
          />
        </svg>
      </a>
      <a href="#" aria-label="LinkedIn" class="text-indigo-600 hover:text-pink-600 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z"
          />
        </svg>
      </a>
      <a href="#" aria-label="YouTube" class="text-indigo-600 hover:text-pink-600 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M19.8 8.001c-.3-2.2-2.3-2.3-3.2-2.3H7.4c-.9 0-2.9.1-3.2 2.3a3.25 3.25 0 00-.1 2.287v1.424a3.25 3.25 0 00.1 2.287c.3 2.2 2.3 2.3 3.2 2.3h9.2c.9 0 2.9-.1 3.2-2.3a3.25 3.25 0 00.1-2.287v-1.424a3.25 3.25 0 00-.1-2.287zM10 14.5v-5l4.5 2.5-4.5 2.5z"
          />
        </svg>
      </a>
    </div>
  </div>
</footer>

</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

function onFormSubmit() {
  alert(`Thank you, ${form.name}! Your message has been sent.`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
/* Ensure the background covers full screen */
html,
body,
#app {
  height: 100%;
  margin: 0;
  font-family: 'Nunito', sans-serif;
}
</style>
