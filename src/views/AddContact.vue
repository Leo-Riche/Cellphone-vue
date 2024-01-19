<script>
import FormContact from '@/components/FormContact.vue';
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: 'AddContact',
    setup() {
        return {};
    },
    components: { FormContact }
}

</script>

<template>

    <RouterLink to="/">
        <button>X</button>
    </RouterLink>

    <FormContact />

    <main>

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
    position: fixed;
    /* bottom: 20px; */
    right: 20px;
}

</style>