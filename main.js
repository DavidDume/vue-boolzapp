const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: contacts,
      currentContact: contacts[0],
    };
  },
  methods: {
    displayMessages(index) {
      this.currentContact = contacts[index];
      console.log(currentContact);
    },
  },
}).mount('#app');
