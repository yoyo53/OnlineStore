<template>
  <Header />
  <p class="txt">Your Profile</p>
  <div class="profil">
    <p class="txt1">Last Name : {{ this.user_info.lastname }}</p>
    <p class="txt1">First Name : {{ this.user_info.firstname }}</p>
    <p class="txt1">Email :  {{ this.user_info.email }}</p>
    <p class="txt1">Password : ********</p>
    <p class="txt1">Address : {{ this.user_info.address }}</p>
    <button class="btnlogout" @click="logout">Log Out</button>
  </div>

<Footer />

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

.profil {
  position: absolute;
  width: 30%;
  height: 700px;
  margin-left: 35%;
  margin-top: 1.5%;
  background: #FFFFFF;
  box-shadow: -5px 5px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.txt{
  margin-top: 1%;
  font-weight: 400;
  font-size: 36px;
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
left: 50%;
bottom: -1%;
transform: translate(-50%, -50%);
color: white;
font-size: 20px;
background: #868686;
border-radius: 20px;
}
</style>