<template>
<<<<<<< HEAD
    <Header />
=======
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
          <div class="flex items-center">
            <div class="flex items-center border-x border-blue-100">
              <span class="border-e border-blue-100">
                <a
                  href="/cart"
                  class="grid h-16 w-16 place-content-center border-b-4 border-cyan-700"
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
            </div>
          </div>
        </div>
      </div>
    </header>
>>>>>>> e7b0f141e20962c98aff1849ec1d38bf4d0b4b5d
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="mx-auto max-w-3xl mt-0">
          <header class="text-center">
            <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div class="mt-20">
            <ul class="space-y-4">
              <li class="flex items-center gap-4">
                <img
                  src="../assets/image 12.png"
                  alt=""
                  class="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 class="text-sm text-gray-900">Water Blaster</h3>

                  <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt class="inline">Size:</dt>
                      <dd class="inline"> 2L</dd>
                    </div>

                    <div>
                      <dt class="inline">Color:</dt>
                      <dd class="inline"> Red</dd>
                    </div>
                  </dl>
                </div>

                <div class="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label for="Line1Qty" class="sr-only"> Quantity </label>

                    <input
                      type="number"
                      min="1"
                      value="1"
                      id="Line1Qty"
                      class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button class="text-gray-600 transition hover:text-red-600">
                    <span class="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>

              <li class="flex items-center gap-4">
                <img
                  src="../assets/image 15.png"
                  alt=""
                  class="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 class="text-sm text-gray-900">Water Gun</h3>

                  <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt class="inline">Size:</dt>
                      <dd class="inline"> 1.5L</dd>
                    </div>

                    <div>
                      <dt class="inline">Color:</dt>
                      <dd class="inline"> Cyan</dd>
                    </div>
                  </dl>
                </div>

                <div class="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label for="Line2Qty" class="sr-only"> Quantity </label>

                    <input
                      type="number"
                      min="1"
                      value="1"
                      id="Line2Qty"
                      class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button class="text-gray-600 transition hover:text-red-600">
                    <span class="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>

              <li class="flex items-center gap-4">
                <img
                  src="../assets/image 14.png"
                  alt=""
                  class="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 class="text-sm text-gray-900">Water Rifle</h3>

                  <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt class="inline">Size:</dt>
                      <dd class="inline"> 1L</dd>
                    </div>

                    <div>
                      <dt class="inline">Color:</dt>
                      <dd class="inline"> Blue</dd>
                    </div>
                  </dl>
                </div>

                <div class="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label for="Line3Qty" class="sr-only"> Quantity </label>

                    <input
                      type="number"
                      min="1"
                      value="1"
                      id="Line3Qty"
                      class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button class="text-gray-600 transition hover:text-red-600">
                    <span class="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>

            <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div class="w-screen max-w-lg space-y-4">
                <dl class="space-y-0.5 text-sm text-gray-700">
                  <div class="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>47$</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>TVA</dt>
                    <dd>13$</dd>
                  </div>

                 

                  <div class="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>60$</dd>
                  </div>
                </dl>
                <div class="flex justify-end">
                  <a
                    href="#"
                    class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <footer class="fixed bottom-0 left-0 w-full bg-[#007EA7]">
      <div class="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-0 ">
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
  import Header from '../components/header.vue';
    export default {
      name: "PageCart",
      components: {Header},
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