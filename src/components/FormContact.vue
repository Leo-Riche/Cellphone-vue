<script>
import CarteContact from '@/components/CarteContact.vue'
import { useContactStore } from '@/stores/contact.js'
export default {
    name: 'FormContact',
    setup() {
        const contactStore = useContactStore()
        return {
            contactStore
        }
    },
    components: {
        CarteContact
    },
    data() {
        return {
            formContact: {
                nom: '',
                numero: '',
                },
            }
    },
    methods : {
        ajoutContact() {
            this.contactStore.ajoutContact(this.formContact)
            this.formContact = {
                nom: '',
                numero: '',
            }
        }
    },
}
</script>

<template>

    <CarteContact :contact="formContact"/>
    <form @submit.prevent="ajoutContact()">
        <input type="text" placeholder="Nom" v-model="formContact.nom">
        <input type="text" placeholder="Numéro" v-model="formContact.numero">
        <p class="error" v-if="formContact.numero.length < 10">Le numéro de téléphone doit faire 10 chiffres</p>
        <button type="submit">Ajouter</button>
    </form>

</template>

<style scoped>
form {
    background-color: #522bcf;
    width: 50vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
}

input {
    padding: 10px;
    border-radius: 5px;
    border: none;
}

button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #2c3e50;
    color: white;
    font-weight: bold;
}
</style>