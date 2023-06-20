<template>
  <SignIn  />
</template>

<script>
import PageAccueilnotlog from "./views/PageAccueilnotlog.vue";
import PageAccueil from "./views/PageAccueil.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";

export default {
  name: "App",
  components: {
    PageAccueilnotlog: PageAccueilnotlog,
    PageAccueil: PageAccueil,
    SignIn: SignIn,
    SignUp: SignUp,
},
};
</script>

<style>
</style>
