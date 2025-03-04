
class AddressBook {

    constructor(){
      this.contacts = [];
    }
  
    addContact(contact) {
      if (this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
        throw new Error("Duplicate Contact");
      }
      this.contacts.push(contact)
    }
  
    editContact(name, newContact) {
      let index = this.contacts.findIndex(c => c.firstName === name);
      if (index === -1) throw new Error("Contact Not Found");
      this.contacts[index] = newContact;
    }
  
    deleteContact(name) {
      let index = this.contacts.findIndex(c => c.firstName === name);
      if (index === -1) throw new Error("Contact Not Found");
      this.contacts.splice(index, 1);
    }
  
    getContactCount() {
      return this.contacts.reduce(count => count + 1, 0);
    }
  
  }
  
  class AddressBookContact {
    
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){
      let nameRegex = new RegExp('^[A-Z][a-zA-Z]{2,}$')
      let baseRegex = new RegExp('^[A-Za-z0-9]{4,}$')
      let zipRegex = new RegExp('^[1-9][0-9]{5}$')
      let phoneNumberRegex = new RegExp('^[5-9][0-9]{9}$')
      let emailRegex = new RegExp('^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  
      if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) throw new Error("Name should be atleast 3 characters long and should start with capital letter")
      if (!baseRegex.test(address)) throw new Error("Address should be atleast 4 characters long")
      if (!baseRegex.test(city)) throw new Error("City should be atleast 4 characters long")
      if (!baseRegex.test(state)) throw new Error("State should be atleast 4 characters long")
      if (!zipRegex.test(zip)) throw new Error("Enter a valid zip code")
      if (!phoneNumberRegex.test(phoneNumber)) throw new Error("Enter a valid phone number")
      if (!emailRegex.test(email)) throw new Error("Enter a valid email address")
  
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
  
  }