<template>
  <div class="flex flex-col h-full">
    <Header />
    <section class="content grow">
      <p class="txt">Your Profile</p>
      <div class="profil">
        <p class="txt1">Last Name : {{ this.user_info.lastname }}</p>
        <p class="txt1">First Name : {{ this.user_info.firstname }}</p>
        <p class="txt1">Email :  {{ this.user_info.email }}</p>
        <p class="txt1">Password : ********</p>
        <p class="txt1">Address : {{ this.user_info.address }}</p>
        <button class="btnlogout" @click="logout">Log Out</button>
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
  name: "PageProfil",
  components: {Header,Footer},
  props: {},
  data() {
    return {
      user_info: {}
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
    const token = localStorage.getItem('water_warrior_token');
      const response = await fetch(this.$api_url + "users/profile", {
        headers: {
          "Authorization": token
        }
      });
      this.user_info = await response.json();
  },
  methods: {
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

.logo{
  padding-top:0%;
  width:85%;
  margin-left: 5%;
}

.content {
  padding: 0 20px 1em 20px;
}
.profil {
  margin: auto;
  padding: 1em;
  width: fit-content;
  background: #FFFFFF;
  box-shadow: -5px 5px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.txt{
  margin: 1em auto;
  width: fit-content;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  font-weight: bold;
  text-align: center;
  color: #080808;
}
.txt1{
  width: fit-content;
  margin: 1em;
  font-size: 20px;
  font-weight: bold;
}

.btnlogout {
  display: block;
  margin: auto;
  width: 147px;
  height: 49px;
  color: white;
  font-size: 20px;
  background: #868686;
  border-radius: 20px;
}
</style>