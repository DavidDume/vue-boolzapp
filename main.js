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
        .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);

      this.currentContact.messages.push({
        date: currentTime,
        message: this.message,
        status: 'sent',
      });
      this.message = '';
      setTimeout(() => {
        this.currentContact.messages.push({
          date: DateTime.now()
            .setLocale('it')
            .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
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
