const DateTime = luxon.DateTime;
const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: contacts,
      searchedContacts: contacts,
      currentContact: contacts[0],
      message: '',
      searched: '',
      isTyping: false,
    };
  },
  methods: {
    displayMessages(index) {
      this.currentContact = this.searchedContacts[index];
      this.searchedContacts = contacts;
      this.searched = '';
    },
    sendMessage() {
      let currentTime = DateTime.now()
        .setLocale('it')
        .toLocaleString(DateTime.TIME_24_SIMPLE);

      this.currentContact.messages.push({
        date: currentTime,
        message: this.message,
        status: 'sent',
      });
      this.isTyping = true;
      this.message = '';
      setTimeout(() => {
        this.isTyping = false;
        return this.currentContact.messages.push({
          date: DateTime.now()
            .setLocale('it')
            .toLocaleString(DateTime.TIME_24_SIMPLE),
          message: 'ok',
          status: 'received',
        });
      }, 1000);
    },
    searchContacts() {
      this.searchedContacts = this.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(this.searched.toLowerCase());
      });
    },
  },
}).mount('#app');
