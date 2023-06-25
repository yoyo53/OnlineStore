<template>
  <div class="flex flex-col h-full">
    <Header />
    <section class="grow">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="mx-auto max-w-3xl mt-0">
          <header class="text-center">
            <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div class="mt-20">
            <ul class="space-y-4">
              <li class="flex items-center gap-4" v-for="item in this.cart">
                <img
                  :src="this.$api_url + 'products/image/' + item.id"
                  alt=""
                  class="h-28 w-28 rounded object-cover"
                />

                <div>
                  <h3 class="text-xl text-gray-900">{{ item.name }}</h3>

                  <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      {{ item.description }}
                    </div>
                  </dl>
                </div>

                <div class="flex flex-1 items-center justify-end gap-2">
                  <form @submit.prevent="">
                    <label for="Line1Qty" class="sr-only"> Quantity </label>

                    <input
                      type="number"
                      min="1"
                      v-model="item.quantity"
                      @change="() => updateItemQuantity(item)"
                      id="Line1Qty"
                      class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button class="text-gray-600 transition hover:text-red-600" @click="() => deleteFromCart(item)">
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
                    <dd>{{ this.total_price }}$</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>TVA</dt>
                    <dd>{{ this.total_price * 0.2 }}$</dd>
                  </div>

                 

                  <div class="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>{{ this.total_price * 1.2 }}$</dd>
                  </div>
                </dl>
                <div class="flex justify-end">
                  <button @click="checkout"
                    class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="w-full bg-[#007EA7]">
    <div class="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-0 ">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex justify-center text-teal-600 sm:justify-start">
          <router-link to="/home" class="flex">
            <span class="sr-only">Logo</span>
            <img src="..\assets\logo-white.png" alt="logo" class="logo">
          </router-link>
        </div>

        <p class="mt-4 text-center text-sm text-white lg:mt-0 lg:text-right">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  <Footer />

  </div>
  
  
  </template>
  <script>
  import Header from '../components/header.vue';
  import Footer from '../components/footer.vue';

    export default {
      name: "PageCart",
      components: {Header,Footer},
      props: {},
      data() {
        return {
          cart: []
        };
      },
      async beforeCreate() {
        const token = localStorage.getItem('water_warrior_token');
        if  (token != null) {
          let response = await fetch(this.$api_url + "users/verify", {
            headers: {
              "Authorization": token
            }
          });
          response = await response.json();
          if (!response.valid) {
            this.$router.push('/');
          }
        }
        else {
          this.$router.push('/');
        }
      },

      async mounted() {
        this.loadCart();
      },
      methods: {
        async updateItemQuantity(item) {
          const token = localStorage.getItem('water_warrior_token');
          let cart = await fetch(this.$api_url + "users/cart", {
            headers: {
              "Authorization": token
            }
          });
          cart = await cart.json();
          await fetch(this.$api_url + `orders/${cart.id}/products/quantity`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": token
            },
            body: JSON.stringify({product_id: item.id, quantity: item.quantity})
          });
        },

        async loadCart() {
          const token = localStorage.getItem('water_warrior_token');
          let response = await fetch(this.$api_url + "users/cart", {
            headers: {
              "Authorization": token
            }
          });
          response = await response.json();
          let cart = await fetch(this.$api_url + `orders/${response.id}/products`, {
            headers: {
              "Authorization": token
            }
          });
          cart = await cart.json();
          this.cart = [];
          for (let item of cart) {
            let response = await fetch(this.$api_url + `products/details/${item.product_id}`);
            response = await response.json();
            response.quantity = item.quantity;
            this.cart.push(response);
          }
        },

        async deleteFromCart(product) {
          const token = localStorage.getItem('water_warrior_token');
          const response = await fetch(this.$api_url + "users/cart", {
            headers: {
              "Authorization": token
            }
          });
          const cart = await response.json();
          await fetch(this.$api_url + `orders/${cart.id}/products`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": token
            },
            body: JSON.stringify({product_id: product.id})
          });
          this.loadCart();
        },

        async checkout() {
          const token = localStorage.getItem('water_warrior_token');
          let response = await fetch(this.$api_url + "users/cart", {
            headers: {
              "Authorization": token
            }
          });
          response = await response.json();
          await fetch(this.$api_url + `orders/${response.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": token
            },
            body: JSON.stringify({status: 'paid'})
          });
          alert("payment successful, you will receive your commands in approximately 10 years");
          this.$router.push('home');
        }
      },

      computed: {
        total_price() {
          return this.cart.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);
        }
      }
    };
  </script>
  <style scoped>
  .logo{
    padding-top:0%;
    width:85%;
    margin-left: 5%;
  }
  </style>