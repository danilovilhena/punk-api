<template>
  <v-app>
    <main>
      <Header />
      <router-view />
    </main>
  </v-app>
</template>

<style>
main {
  max-width: 80rem;
  width: 95%;
  margin: 0 auto;
  padding: 1rem;
}

@media (max-width: 400px) {
  main {
    width: 100%;
    padding: 1rem .5rem;
  }
}
</style>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header
  }
};
</script>
