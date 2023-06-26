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
        <h1 class="admin">Espace Administrateur</h1>

        <div class="flex flex-1 items-center justify-end gap-8">
          <nav
          aria-label="Global"
          class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500 mr-40"
        >
          <router-link to="/Products"
            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-cyan-700"
          >
            Produit
          </router-link>
          <router-link to="/Users"
            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-cyan-700"
          >
            Utilisateur
          </router-link>
          <router-link to="/Commandes"
            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-cyan-700"
          >
            Commande
          </router-link>
          </nav>
          <div class="flex items-center">
            <button class="btnlogout" @click="logout">Log Out</button>
          </div>
        </div>
      </div>
  </header>

  <p class="txt">Liste produits</p>
  <div class="profil">
    <form @submit.prevent="addProduct" id="product_form">

      <table class="user-table">
        <thead>
          <tr>
            <th>Photo du produit</th>
            <th>Nom du produit</th>
            <th>Description du produit</th>
            <th>Prix</th>
            <th>Quantité en stock</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in this.products">
            <td>
              <img :src="this.$api_url + 'products/image/' + product.id" class="h-[200px] m-auto">  
            </td>
            <td>{{ product.name }} </td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>
              <button class="text-gray-600 transition hover:text-red-600" type="button" @click="() => deleteProduct(product)">
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
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td><input type="file" @change="(event) => this.file = event.target.files[0]" required></td>
            <td><input type="text" v-model="this.name" class="rounded-md border-gray-400 border-2" required></td>
            <td><input type="text" v-model="this.description" class="rounded-md border-gray-400 border-2" required></td>
            <td><input type="number" v-model="this.price" class="rounded-md border-gray-400 border-2" required></td>
            <td><input type="number" v-model="this.stock" class="rounded-md border-gray-400 border-2" required></td>
            <td>
              <button class="text-gray-600 transition hover:text-red-600 rounded-md border-gray-400 border-2 px-1" type="submit">
                Add Item
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  </div>
</template>

<script>
import Header from '../components/header.vue';

export default {
  name: "PageAdminProduit",
  components: {},
  props: {},
  data() {
    return {
      products: [],
      file: "",
      name: "",
      description: "",
      price: 0,
      stock: 0
    };
  },
  async beforeCreate() {
    const token = localStorage.getItem('water_warrior_token');
    if (token != null) {
      let response = await fetch(this.$api_url + "users/verify", {
        headers: {
          "Authorization": token
        }
      });
      response = await response.json();
      if (!response.valid) {
        this.$router.push('/');
      }
      else if (!response.admin) {
        this.$router.push('/home');
      }
    }
    else {
      this.$router.push('/');
    }
  },
  async mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const token = localStorage.getItem('water_warrior_token');
      const response = await fetch(this.$api_url + "products/list", {
        headers: {
          "Authorization": token
        }
      });
      this.products = await response.json();
    },

    async deleteProduct(product) {
      const token = localStorage.getItem('water_warrior_token');
      await fetch(this.$api_url + `products/${product.id}`, {
        method: "DELETE",
        headers: {
          "Authorization": token
        }
      });
      this.getProducts();
    },

    async addProduct() {
      const token = localStorage.getItem('water_warrior_token');

      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('price', this.price);
      formData.append('stock', this.stock);

      await fetch(this.$api_url + "products/create", {
        method: "POST",
        headers: {
          "Authorization": token
        },
        body: formData
      });
      this.getProducts();
      document.getElementById("product_form").reset();
    },

    async logout() {
      const token = localStorage.getItem('water_warrior_token');
      await fetch(this.$api_url + "users/logout", {
        method: "DELETE",
        headers: {
          "Authorization": token
        }
      });
      localStorage.removeItem('water_warrior_token');
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.logo{
  padding-top:0%;
  width:85%;
  margin-left: 5%;
}

.txt{
  margin-top: 2%;
  font-weight: 400;
  font-size: 30px;
  line-height: 44px;
  font-weight: bold;
  text-align: center;
  color: #080808;
}
.txt1{
  margin-left: 5%;
  margin-top: 12%;
  font-size: 20px;
  font-weight: bold;
}

.btnlogout {
    position: absolute;
    min-width: 100px;
    width: 9%;
    height: 49px;
    left: 90%;
    top: 0.7%;
    color: white;
    font-size: 20px;
    background: #868686;
    border-radius: 20px;
  }

  .admin{
    text-align: center;
    display: flex;
    align-items: center;
    margin-left: 1em;
    font-size: 30px;
    font-weight: bold;
  }

  .user-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1%;

}

.user-table th,
.user-table td {
  padding: 8px;
  border: 1px solid #ccc;
}

.user-table th {
  font-weight: bold;
  background-color: #f0f0f0;
  text-align: center;
}
</style>