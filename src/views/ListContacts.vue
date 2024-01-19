<script>
import CarteContact from '@/components/CarteContact.vue';
import FormContact from '@/components/FormContact.vue';
import { RouterLink } from 'vue-router'

import { useContactStore } from '@/stores/contact.js'

export default {
  name: 'ListContacts',
  setup() {
    const contactStore = useContactStore()
    return {
        contactStore
    }
  },
  computed: {
    contacts () {
        return this.contactStore.contacts
    },
  },
  components: {
    CarteContact,
    FormContact
  },
}

</script>

<template>
    <main>
        <RouterLink to="AddContact">
            <button>+</button>
        </RouterLink>
        <h1>List Contacts</h1>
        <div class="ListContacts" v-for="contact in contacts" :key="contact.nom">
            <CarteContact :contact="contact"/>
        </div>
    </main>
</template>

<style scoped>

* {
    box-sizing: border-box;
}

button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: #522bcf;
    color: white;
    font-size: 2rem;
    position: fixed;
    right: 20px;
}

main {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

main h1 {
    text-align: center;
}

.ListContacts {
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
}
.ListContacts__item {
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.ListContacts__item h2 {
    margin: 0;
}
.ListContacts__item p {
    margin: 0;
}

</style>