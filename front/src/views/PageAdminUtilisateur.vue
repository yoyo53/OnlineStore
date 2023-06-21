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
            <button class="btnlogout">Log Out</button>
          </div>
        </div>
      </div>
  </header>

  <p class="txt">Liste Utilisateur</p>
  <div class="profil">
    <table class="user-table">
      <thead>
        <tr>
          <th class="co">Prénom</th>
          <th class="co">Nom</th>
          <th class="co">Email</th>
          <th class="co">Téléphone</th>
          <th class="co">Commande</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
          <td>0623135486</td>
          <td>voir (liste de ses commande cliquable qui redirige vers la commande)</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import Header from '../components/header.vue';

export default {
  name: "PageAdminUtilisateur",
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {};
  },
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
    width: 147px;
    height: 49px;
    left: 92%;
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