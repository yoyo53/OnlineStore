<template>
  <PageAccueil  />
</template>

<script>
import PageAccueilnotlog from "./views/PageAccueilnotlog.vue";
import PageAccueil from "./views/PageAccueil.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import PageCart from "./views/PageCart.vue";
import PageProfil from "./views/PageProfil.vue";
export default {
  name: "App",
  components: {
    PageAccueilnotlog: PageAccueilnotlog,
    PageAccueil: PageAccueil,
    SignIn: SignIn,
    SignUp: SignUp,
    PageCart: PageCart,
    PageProfil: PageProfil
},
};
</script>

<style>
</style>
