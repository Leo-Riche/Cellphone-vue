<script>
import { useCalledStore } from '@/stores/called.js'

export default {
    name: 'FormClavier',
    setup() {
        const calledStore = useCalledStore()
        return {
            calledStore,
        }
    },
    data() {
        return {
            affichageNumero: ''
        }
    },
    computed: {
        contactsCalled () {
            console.log(this.calledStore.called)
            return this.calledStore.called
        },
    },
    components: {
    },
    methods: {
        ajouterNombre(nombre) {
            this.affichageNumero += nombre
            this.$emit('ajouterNombre', nombre)
        },
        appelerNumero() {
            console.log("test")
            calledStore.push(this.affichageNumero)
            console.log(calledStore.called)
        },
    },
}


</script>

<template>
    <h2 class="AfficherNumero"></h2>
    <form class="ClavierForm" @submit.prevent="appelerNumero"> 
        <div class="Clavier">
            <button type="button" @click="ajouterNombre('1')">1</button>
            <button type="button" @click="ajouterNombre('2')">2</button>
            <button type="button" @click="ajouterNombre('3')">3</button>
            <button type="button" @click="ajouterNombre('4')">4</button>
            <button type="button" @click="ajouterNombre('5')">5</button>
            <button type="button" @click="ajouterNombre('6')">6</button>
            <button type="button" @click="ajouterNombre('7')">7</button>
            <button type="button" @click="ajouterNombre('8')">8</button>
            <button type="button" @click="ajouterNombre('9')">9</button>
            <button type="button" @click="ajouterNombre('*')">*</button>
            <button type="button" @click="ajouterNombre('0')">0</button>
            <button type="button" @click="ajouterNombre('#')">#</button>
        </div>
        <input class="buttonAppeler" type="submit" value="Envoyer"/>
    </form>

</template>

<style scoped>

.Clavier {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4px;
}

.Clavier button {
    border: 1px solid #ccc;
    padding-block: 2rem;
    padding-inline: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 32px;
}
.Clavier button:hover {
    background-color: #ccc;
}
.buttonAppeler {
    border: 1px solid #ccc;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    margin-top: 1rem;
}
.ClavierForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


</style>