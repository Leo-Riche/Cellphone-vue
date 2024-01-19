import { defineStore } from 'pinia';
import { useContactStore } from './contact';

export const useCalledStore = defineStore('called', {
    state: () => ({
        called: [
            {
                nom: 'Jean Dupont',
                numero: '06 12 34 56 78',
                date: '19-01-2024',
                heure: '14:30',
            },
        ],
    }),
    actions: {
        ajoutAppel(numero) {
            const contactStore = useContactStore();
            const contact = contactStore.contacts.find((contact) => contact.numero === numero);
            if (contact) {
                this.called.push({
                    nom: contact.nom,
                    numero: contact.numero,
                    date: new Date().toLocaleDateString(),
                    heure: new Date().toLocaleTimeString(),
                });
            }
        },
    },
})