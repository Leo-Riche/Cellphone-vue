<script>
import { useCalledStore } from '@/stores/called.js'

export default{
    name: 'CarteContact',
    props: [
        'contact'
    ],
    methods: {
        handleButtonClick() {
            const calledStore = useCalledStore()
            calledStore.ajoutAppel(this.contact.numero)
        }
    }
}
</script>

<template>
    <div class="ListContacts__item">
        <h2>{{ contact.nom }}</h2>
        <p>{{ contact.numero }}</p>
        <button @click="handleButtonClick">📞</button>
    </div>
</template>

<style scoped>
    div {
        width: 200px;
        margin: 0 auto;
        height: 200px;
        background-color: #522bcf;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
</style>