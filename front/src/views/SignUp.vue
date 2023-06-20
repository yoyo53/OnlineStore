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
            <img src="..\assets\logo-black.png" alt="logo" class="logo ml-3">
  
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
    <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
            <aside
            class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
            >
            <img
                alt="Pattern"
                src="..\assets\Group 2.png"
                class="absolute inset-0 object-cover ml-20 mt-5"
            />
            </aside>

            <main
            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
            <div class="max-w-xl lg:max-w-3xl mb-40 ml-60">
                <a class="block text-blue-600" href="/">
                <span class="sr-only">Home</span>
                <svg
                    class="h-8 sm:h-10"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                    />
                </svg>
                </a>

                <h1
                class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                >
                Welcome to Water Warriors
                </h1>

                <p class="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                dolorum aliquam, quibusdam aperiam voluptatum.
                </p>

                <form action="#" class="mt-8 grid grid-cols-6 gap-6">

                    <div class="col-span-6">
                        <label for="Email" class="block text-sm font-medium text-gray-700">
                        Email
                        </label>

                        <input
                        type="email"
                        id="Email"
                        name="email"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm h-10"
                        />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label
                        for="Password"
                        class="block text-sm font-medium text-gray-700"
                        >
                        Password
                        </label>

                        <input
                        type="password"
                        id="Password"
                        name="password"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm h-10"
                        />
                    </div>
                    


                    <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
                        class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        >
                        Log In
                        </button>

                        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                        Don't have an account?
                        <a href="../views/SignUp.vue" class="text-gray-700 underline">Sign Up</a>.
                        </p>
                    </div>
                </form>
            </div>
            </main>
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
  name: "SignIn",
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {};
  },
};
</script>