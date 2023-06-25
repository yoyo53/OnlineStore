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
          <a
            href="/Users"
            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-cyan-700"
          >
            Utilisateur
          </a>
          <a
            href="/Commandes"
            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-cyan-700"
          >
            Commande
          </a>
          </nav>
          <div class="flex items-center">
            <button class="btnlogout" @click="logout">Log Out</button>
          </div>
        </div>
      </div>
  </header>

  <p class="txt">Liste Commande</p>
  <div class="profil">
    <table class="user-table">
      <thead>
        <tr>
          <th>Statut de la commande</th>
          <th>nombre de produits</th>
          <th>Nom du Client</th>
          <th>Email du Client</th>
          <th>Address du Client</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in this.orders">
          <td>{{ order.status }}</td>
          <td>{{ order.nb_products }} </td>
          <td>{{ order.client?.lastname }}</td>
          <td>{{ order.client?.email }}</td>
          <td>{{ order.client?.address }}</td>
          <td>
            <button class="text-gray-600 transition hover:text-red-600" @click="() => deleteOrder(order)">
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
    </table>

  </div>
</template>

<script>
import Header from '../components/header.vue';

export default {
  name: "PageAdminCommande",
  components: {},
  props: {},
  data() {
    return {
      orders: []
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
    this.getOrders();
  },
  methods: {
    async getOrders() {
      const token = localStorage.getItem('water_warrior_token');
      const response = await fetch(this.$api_url + "orders", {
        headers: {
          "Authorization": token
        }
      });
      this.orders = await response.json();
      for (let order of this.orders) {
        let content = await fetch(this.$api_url + `orders/${order.id}/products`, {
          headers: {
            "Authorization": token
          }
        });
        content = await content.json();
        order.nb_products = content.map(item => item.quantity).reduce((a, b) => a + b, 0);
        let client = await fetch(this.$api_url + `users/profile/${order.client}`, {
          headers: {
            "Authorization": token
          }
        });
        order.client = await client.json();
      }
    },

    async deleteOrder(user) {
      const token = localStorage.getItem('water_warrior_token');
      await fetch(this.$api_url + `orders/${user.id}`, {
        method: "DELETE",
        headers: {
          "Authorization": token
        }
      });
      this.getOrders();
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
    margin-left: 29.5%;
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