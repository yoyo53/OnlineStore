<template>
    <header class="border-b border-blue-100">
      <div
        class="mx-auto flex h-16"
      >
        <div class="flex items-center gap-4">
          <router-link to="/home" class="flex">
            <span class="sr-only">Logo</span>
            <img src="..\assets\logo-black.png" alt="logo" class="logo">
          </router-link>
        </div>
  
        <div class="flex flex-1 items-center justify-end gap-8">
          
  
          <div class="flex items-center">
            <div class="flex items-center border-x border-blue-100">
                <span class="border-e border-blue-100">
                    <div class="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-cyan-700">
                         <router-link to="/home" class="flex">
                            <span class="sr-only">home</span>
                            <img src="..\assets\home.png" alt="icon" class="icon">
                         </router-link>
                    </div>
                </span>
                <span class="border-e border-blue-100">
                <router-link to="/cart"
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
                <router-link to="/account"
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
            </div>
          </div>
        </div>
      </div>
    </header>
  
  </template>
  
  <script>
    export default {
    name: "header_store"
    }
  </script>
  
  <style>
  .logo{
    padding-top:0%;
    width:85%;
    margin-left: 5%;
  }
  .icon{
    width: 50%;
    margin-left: 25%;

  }
  </style>