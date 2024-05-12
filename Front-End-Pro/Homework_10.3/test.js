const contact = {
    contacts: [
        { name: "Dmytro", phoneNumber: "+38068645645", email: "dmytro@gmail.com" },
        { name: "Alex", phoneNumber: "+380635235423", email: "alex@gmail.com" },
        { name: "Bogdan", phoneNumber: "+38093423141", email: "bogdan@gmail.com" }
    ],

    searchContact: function(name) {
        return this.contacts.find(contact => contact.name === name);
    },

    addContact: function(name, phoneNumber, email) {
        this.contacts.push({ name, phoneNumber, email });
    }
};

const foundContact = contact.searchContact("Alex");
console.log(foundContact);
contact.addContact("Vlad", "+38067534534", "vlad@gmail.com");
console.log(contact.contacts);
