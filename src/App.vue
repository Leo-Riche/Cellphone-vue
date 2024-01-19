<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Liste de contacts</RouterLink>
      <RouterLink to="/ContactsCalled">Contacts appelés</RouterLink>
      <RouterLink to="/Clavier">Clavier</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

header {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

</style>
