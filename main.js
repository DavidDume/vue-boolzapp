const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: contacts,
      currentContact: contacts[0],
      message: '',
    };
  },
  methods: {
    displayMessages(index) {
      this.currentContact = contacts[index];
    },
    sendMessage() {
      this.currentContact.messages.push({
        date: '25/06/2021',
        message: this.message,
        status: 'sent',
      });
      this.message = '';
    },
  },
}).mount('#app');
