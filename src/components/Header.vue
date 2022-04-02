<template>
  <header>
    <h1><router-link :to="{path: '/'}">Punk API</router-link></h1>
    <h2>Brewdog's DIY Dog as an API</h2>
    <hr />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
h1 {
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

h1 a {
  text-decoration: none;
}

h2 {
  color: #6c757d;
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
</style>
