import { defineStore } from 'pinia';

export const useContactStore = defineStore('contact', {
    state: () => ({
            contacts: [
              {
                nom: 'Antoine',
                numero: "06 12 34 56 78",
              },
              {
                nom: 'Noah',
                numero: '006 45 67 89 01',
              },
              {
                nom: 'Dimitri',
                numero: '06 42 12 34 56',
              },
            ],
        
    }),
    actions: {
        ajoutContact(contact) {
            this.contacts.push(contact);
        },
    },
})