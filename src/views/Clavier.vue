<script>
import { defineComponent } from 'vue'
import FormClavier from '@/components/FormClavier.vue'
import { useCalledStore } from '@/stores/called.js'

export default {
  name: 'Clavier',
  setup() {
    return {}
  },
  components: {
    FormClavier
  },
  data() {
    return {
      displayedNumero: ''
    }
  },
  methods: {
    SetNumero(nombre) {
      this.displayedNumero += nombre;
    }
  }
}

</script>

<template>
  <main>
    <h1>Clavier</h1>
    <h2>{{ displayedNumero }}</h2>
    <FormClavier @ajouterNombre="SetNumero"/>
  </main>
</template>

<style scoped>

main {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

</style>