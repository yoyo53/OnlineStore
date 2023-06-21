<template>
  <Header />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import Header from '../components/header.vue';

export default {
  name: 'AboutView',
  components:{Header}

}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
