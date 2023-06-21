<template>
  <header class="border-b border-blue-100">
    <div
      class="mx-auto flex h-16"
    >
      <div class="flex items-center gap-4">
        <a href="#" class="flex">
          <span class="sr-only">Logo</span>
          <img src="..\assets\logo-black.png" alt="logo" class="logo">

        </a>
      </div>

      <div class="flex flex-1 items-center justify-end gap-8">
          
  
          <div class="flex items-center">
            <div class="flex items-center border-x border-blue-100">
                <span class="border-e border-blue-100">
                    <div class="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-cyan-700">
                         <router-link to="/" class="flex">
                            <span class="sr-only">home</span>
                            <img src="..\assets\home.png" alt="icon" class="icon">
                         </router-link>
                    </div>
                </span>
                <span class="border-e border-blue-100">
                <router-link to="/signIn"
                  class="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-cyan-700"
                >
                  <svg
                    class="h-7 w-7"
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
                </router-link >
              </span>
  
              <span class="border-e border-e-blue-100">
                <router-link to="/signIn"
                  class="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-cyan-700"
                >
                  <svg
                    class="h-7 w-7"
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
                </router-link >  
              </span>
              <router-link to="/signIn"><button class="btnsignin" >Sign In</button></router-link >
              <router-link to="/signUp"><button class="btnsignup">Sign Up</button></router-link>
            </div>
          </div>
        </div>
      </div>
  </header>
  <div class="mx-auto mt-8 max-w-xl">
    <form action="#" class="sm:flex sm:gap-4">
      <div class="sm:flex-1">
        
        <label for="search" class="sr-only">Search</label>
        
        <input
          type="search"
          placeholder="Rechercher"
          class="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>
    </form>
  </div>
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

      <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4 mt-20 -ml-10">
        <li>
          <a href="#" class="block overflow-hidden group w-[300px] ml-[20px] mt-10">
            <div class="h-[400px] w-[300px]">
              <div class="image-container">
                <img src="..\assets\image 15.png" class="h-[350px] w-full object-cover">
                <div class="image-overlay">
                  <button class="add-to-cart-button">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="relative -mt-20 bg-white">
              <h3 class="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Water Gun 
              </h3>
              <span>Size : 2L</span>
              <br>
              <span>Color : Blue</span>
              <p class="mt-2">
                
                <span class="tracking-wider text-gray-900">34,99 $</span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="block overflow-hidden group w-[300px] ml-[20px] mt-10">
            <div class="h-[400px] w-[300px]">
              <div class="image-container">
                <img src="..\assets\image 12.png" class="h-[350px] w-full object-cover">
                <div class="image-overlay">
                  <button class="add-to-cart-button">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="relative -mt-20 bg-white">
              <h3 class="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Water Gun 
              </h3>
              <span>Size : 2L</span>
              <br>
              <span>Color : Red</span>
              <p class="mt-2">
                
                <span class="tracking-wider text-gray-900">34,99 $</span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="block overflow-hidden group w-[300px] ml-[20px] mt-10">
            <div class="h-[400px] w-[300px]">
              <div class="image-container">
                <img src="..\assets\image 11.png" class="h-[350px] w-full object-cover">
                <div class="image-overlay">
                  <button class="add-to-cart-button">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="relative -mt-20 bg-white">
              <h3 class="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Water Gun 
              </h3>
              <span>Size : 2L</span>
              <br>
              <span>Color : Blue</span>
              <p class="mt-2">
                
                <span class="tracking-wider text-gray-900">44,99 $</span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="block overflow-hidden group w-[300px] ml-[20px] mt-10">
            <div class="h-[400px] w-[300px]">
              <div class="image-container">
                <img src="..\assets\image 14.png" class="h-[350px] w-full object-cover">
                <div class="image-overlay">
                  <button class="add-to-cart-button">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="relative -mt-20 bg-white">
              <h3 class="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Water Gun 
              </h3>
              <span>Size : 2L</span>
              <br>
              <span>Color : Red</span>
              <p class="mt-2">
                
                <span class="tracking-wider text-gray-900">34,99 $</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <section class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 mt-20">
      <h2 class="text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Read trusted reviews from our customers
      </h2>

      <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <blockquote class="rounded-lg bg-gray-100 p-8">
          <div class="flex items-center gap-4">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-full"
            />

            <div>
              <div class="flex justify-center gap-0.5 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>

              </div>

              <p class="mt-1 text-lg font-medium text-gray-700">Julien Starck</p>
            </div>
          </div>

          <p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            "J'ai sortie le pistolet en pleine epreuve du Bac, cela n'a pas fait rire les surveillants..." 
          </p>
        </blockquote>

        <blockquote class="rounded-lg bg-gray-100 p-8">
          <div class="flex items-center gap-4">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-full"
            />

            <div>
              <div class="flex justify-center gap-0.5 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>

              <p class="mt-1 text-lg font-medium text-gray-700">Cédric Yoganathan</p>
            </div>
          </div>

          <p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            "Bonne capacité, l'eau est propulsé fort et loin, parfait pour la sécurité du WEI"
          </p>
        </blockquote>

        <blockquote class="rounded-lg bg-gray-100 p-8">
          <div class="flex items-center gap-4">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-full"
            />

            <div>
              <div class="flex justify-center gap-0.5 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>

              <p class="mt-1 text-lg font-medium text-gray-700">Hugo Trinh</p>
            </div>
          </div>

          <p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            "J'ai rajouté un briquet au canon et remplacer l'eau par de l'essence, très bon lance flamme !!"
          </p>
        </blockquote>
      </div>
    </div>
  </section>
 
  <Footer></Footer>

</template>
<script>

import Footer from '../components/footer.vue';


export default {
  name: "PageAccueilnotlog",
  components: {Footer},
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

img.object-cover {
object-fit: cover;
width: 100%;
height: 100%;
border-radius: 10px 10px 10px 10px;
border: 1px solid #007EA7;
}

.image-container {
  position: relative;
  height: 300px;
  width: 300px
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 10px;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.add-to-cart-button {
  padding: 12px 24px;
  background-color: #007EA7;
  color: #ffffff;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
}
.btnsignin {
    position: absolute;
    width: 147px;
    height: 49px;
    left: 39%;
    top: 1%;
    color: white;
    font-size: 20px;
    text-align: center;
    line-height: 43px;
    background: #007EA7;
    border-radius: 20px;
    
  }

  .btnsignup {
    position: absolute;
    width: 147px;
    height: 49px;
    left: 51%;
    top: 1%;
    color: white;
    font-size: 20px;
    background: #868686;
    border-radius: 20px;
    
  }
</style>

