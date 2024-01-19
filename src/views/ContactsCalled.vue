<script>
import { useCalledStore } from '@/stores/called.js'

export default {
    name: 'ContactsCalled',
    setup() {
        const calledStore = useCalledStore()
        return {
            calledStore
        }
    },
    computed: {
        contactsCalled () {
            return this.calledStore.called
        },
    },
    components: {
    },
}

</script>

<template>

    <main>
        <h1>Contacts appelés</h1>

        <div class="ContactsCalled">
            <div class="ContactsCalled__item" v-for="contact in contactsCalled" :key="contact.nom">
                <h2>Nom : {{ contact.nom }}</h2>
                <p>Numéro : {{ contact.numero }}</p>
                <p>Date : {{ contact.date }}</p>
                <p>Heure : {{ contact.heure }}</p>
            </div>
        </div>
    </main>

</template>

<style scoped>
main {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.ContactsCalled {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
}

.ContactsCalled__item {
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.ContactsCalled__item h2 {
    margin: 0;
}

.ContactsCalled__item p {
    margin: 0;
}

</style>