<template>
    <header class="border-b border-blue-100">
      <div
        class="mx-auto flex h-16"
      >
        <div class="flex items-center gap-4">
          <button type="button" class="p-2 lg:hidden">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
  
          <a href="#" class="flex">
            <span class="sr-only">Logo</span>
            <img src="..\assets\logo-black.png" alt="logo" class="logo">
  
          </a>
        </div>
  
        <div class="flex flex-1 items-center justify-end gap-8">
          <nav
            aria-label="Global"
            class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
          >
            <a
              href="/about"
              class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-cyan-700"
            >
              About
            </a>
            <a
              href="/products"
              class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-cyan-700"
            >
              Products
            </a>
  
            <a
              href="/contact"
              class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-cyan-700"
            >
              Contact
            </a>
          </nav>
  
          <div class="flex items-center">
            <div class="flex items-center border-x border-blue-100">
              <span class="border-e border-blue-100">
                <a
                  href="/cart"
                  class="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-cyan-700"
                >
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
  
                  <span class="sr-only">Cart</span>
                </a>
              </span>
  
              <span class="border-e border-e-blue-100">
                <a
                  href="/account"
                  class="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-cyan-700"
                >
                  <svg
                    class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
  
                  <span class="sr-only"> Account </span>
                </a>
              </span>
  
              <span class="hidden sm:block">
                <a
                  href="/search"
                  class="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-cyan-700"
                >
                  <svg
                    class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
  
                  <span class="sr-only"> Search </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>
  
          <p class="max-w-md mx-auto mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
            natus?
          </p>
        </header>
  
        <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a href="#" class="block overflow-hidden group">
              <div class="relative aspect-w-1 aspect-h-1">
                <img src="..\assets\image 11.png" class="object-cover w-full h-full">
              </div>
  
              <div class="relative pt-3 bg-white">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Water Gun 
                </h3>
  
                <p class="mt-2">
                  <span class="sr-only">Size : 2L</span>
                  <span class="sr-only">Color : Red</span>
                  <span class="tracking-wider text-gray-900">24,99 $</span>
                </p>
              </div>
            </a>
          </li>
  
          <li>
            <a href="#" class="block overflow-hidden group">
              <div class="relative aspect-w-1 aspect-h-1">
                <img src="..\assets\image 12.png" class="object-cover w-full h-full">
              </div>
  
              <div class="relative pt-3 bg-white">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Water Gun 
                </h3>
  
                <p class="mt-2">
                  <span class="sr-only">Size : 2L</span>
                  <span class="sr-only">Color : Blue</span>
                  <span class="tracking-wider text-gray-900">34,99 $</span>
                </p>
              </div>
            </a>
          </li>
  
          <li>
            <a href="#" class="block overflow-hidden group">
              <div class="relative aspect-w-1 aspect-h-1">
                <img src="..\assets\image 13.png" class="object-cover w-full h-full">
              </div>
  
              <div class="relative pt-3 bg-white">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Water Gun 
                </h3>
  
                <p class="mt-2">
                  <span class="sr-only">Size : 2L</span>
                  <span class="sr-only">Color : Blue</span>
                  <span class="tracking-wider text-gray-900">34,99 $</span>
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="block overflow-hidden group">
              <div class="relative aspect-w-1 aspect-h-1">
                <img src="..\assets\image 14.png" class="object-cover w-full h-full">
              </div>
  
              <div class="relative pt-3 bg-white">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Water Gun 
                </h3>
  
                <p class="mt-2">
                  <span class="sr-only">Size : 2L</span>
                  <span class="sr-only">Color : Blue</span>
                  <span class="tracking-wider text-gray-900">14,99 $</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  
    <footer class="fixed bottom-0 left-0 w-full bg-[#007EA7]">
      <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-0 ">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="flex justify-center text-teal-600 sm:justify-start">
            <img src="..\assets\logo-white.png">
          </div>
  
          <p class="mt-4 text-center text-sm text-white lg:mt-0 lg:text-right">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  
  
  </template>
  <script>
  export default {
    name: "PageAccueil",
    components: {},
    props: {},
    data() {
      // quickfix to have components available to pass as props
      return {};
    },
  };
  </script>
  <style scoped>
  .logo{
    padding-top:0%;
    width:85%;
    margin-left: 5%;
  }
  </style>