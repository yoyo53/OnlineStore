<template>
  <Header />
  <p class="txt">Your Profile</p>
  <div class="profil">
    <p class="txt1">Last Name :</p>
    <p class="txt1">First Name :</p>
    <p class="txt1">Email :</p>
    <p class="txt1">Password :</p>
    <p class="txt1">Phone :</p>
    <p class="txt1">Address :</p>

  </div>

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
import Header from '../components/header.vue';

export default {
  name: "PageProfil",
  components: {Header},
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
  margin-top: 2%;
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
</style>