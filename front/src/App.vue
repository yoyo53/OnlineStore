<template>

<router-view></router-view>
<PageAccueilnotlog />
</template>

<script>
import PageAccueilnotlog from "./views/PageAccueilnotlog.vue";
import PageAccueil from "./views/PageAccueil.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import PageCart from "./views/PageCart.vue";
import PageProfil from "./views/PageProfil.vue";

import Header from './components/header.vue';

export default {
  name: "App",
  components: {
    Header,
    PageAccueilnotlog,
    PageAccueil,
    SignIn,
    SignUp,
    PageCart,
    PageProfil
  }
}
</script>

<style>
.logo{
  padding-top:0%;
  width:85%;
  margin-left: 5%;
}
</style>
