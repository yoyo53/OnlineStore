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
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
            
            
       
            <main
            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
            <div class="form">

                <div class="max-w-xl lg:max-w-3xl mb-60 ml-10 mt-10">
                    <a class="block text-blue-600" href="/">
                    <span class="sr-only">Home</span>
                    </a>

                    <h1
                    class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                    >
                    Welcome to Water Warriors
                    </h1>

                    <p class="mt-4 leading-relaxed text-gray-500 mb-20 mr-10">
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
                        class="mt-1 w-5/6 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm h-10"
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
                        class="mt-1 w-4/5 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm h-10"
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
                    <img
                      alt="Pattern"
                      src="..\assets\Group 2.png"
                      class="img"
                    />
                </div>
            </div>
            </main>
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
<style>

.form{
    position: absolute;
    width: 686px;
    height: 667px;
    left: 20.15%;
    top: 14.5%;
    
    background: #FFFFFF;
    box-shadow: -5px 5px 5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px 0px 20px;
}

.img{ 
    position: absolute;
    margin-left: 100.1%;
    margin-top: -69.5%;
    position: relative;
    height: 667px;
    width: 520px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 0px 23px 24px 0px;
}

</style>