class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address, "Address");
        this.city = this.validateAddress(city, "City");
        this.state = this.validateAddress(state, "State");
        this.zip = this.validateZip(zip);
        this.phoneNumber = this.validatePhone(phoneNumber);
        this.email = this.validateEmail(email);
    }

    validateName(name, fieldName) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`${fieldName} Invalid: Must start with a capital letter and be at least 3 characters long.`);
        }
        return name;
    }

    validateAddress(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`${fieldName} Invalid: Must be at least 4 characters long.`);
        }
        return value;
    }

    validateZip(zip) {
        let zipRegex = /^[1-9][0-9]{5}$/;
        if (!zipRegex.test(zip)) {
            throw new Error("Invalid ZIP Code: Must be a 6-digit number.");
        }
        return zip;
    }

    validatePhone(phoneNumber) {
        let phoneRegex = /^[6-9][0-9]{9}$/;
        if (!phoneRegex.test(phoneNumber)) {
            throw new Error("Invalid Phone Number: Must be 10 digits starting with 6-9.");
        }
        return phoneNumber;
    }

    validateEmail(email) {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email Format.");
        }
        return email;
    }
}

class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
        console.log(`✅ Contact Added Successfully to ${this.name}!\n`);
    }

    displayContacts() {
        console.log(`\n--- 📖 Address Book: ${this.name} ---`);
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
            return;
        }
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.phoneNumber}, ${contact.email}`);
        });
    }

    findContact(name) {
        return this.contacts.find(c => c.firstName.toLowerCase() === name.toLowerCase());
    }

    updateContact(name, updatedData) {
        let contact = this.findContact(name);
        if (contact) {
            Object.keys(updatedData).forEach(key => {
                try {
                    contact[key] = contact[`validate${key.charAt(0).toUpperCase() + key.slice(1)}`](updatedData[key]);
                } catch (error) {
                    console.error(error.message);
                }
            });
            console.log(` Contact Updated Successfully in ${this.name}!`);
        } else {
            console.log(" Contact Not Found!");
        }
    }

    deleteContact(name) {
        let index = this.contacts.findIndex(c => c.firstName.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(` Contact Deleted Successfully from ${this.name}!`);
        } else {
            console.log(" Contact Not Found!");
        }
    }
}

let addressBooks = {};

function createAddressBook(name) {
    if (addressBooks[name]) {
        console.log(` Address Book "${name}" already exists!`);
        return;
    }
    addressBooks[name] = new AddressBook(name);
    console.log(` New Address Book "${name}" Created!\n`);
}

function getAddressBook(name) {
    return addressBooks[name] || null;
}

try {
    createAddressBook("Personal");
    createAddressBook("Work");

    let contact1 = new Contact("Mokshini", "Baglekar", "Ahinsa vihar", "Bhopal", "Madhya Pradesh", "400001", "9301000083", "mokshini.baglekar@gmail.com");
    let contact2 = new Contact("Bhavesh", "Malviya", "Vijay nagar", "Indore", "Madhya Pradesh", "110001", "7690000686", "bhavesh.malviya@gmail.com");

    let personalBook = getAddressBook("Personal");
    let workBook = getAddressBook("Work");

    if (personalBook) {
        personalBook.addContact(contact1);
        personalBook.displayContacts();
    }

    if (workBook) {
        workBook.addContact(contact2);
        workBook.displayContacts();
    }

    let foundContact = personalBook ? personalBook.findContact("Mokshini") : null;
    if (foundContact) {
        console.log("\n Contact Found:", foundContact);
        personalBook.updateContact("Mokshini", { city: "Mumbai", email: "mokshini.newemail@gmail.com" });
        personalBook.displayContacts();
    } else {
        console.log(" Contact Not Found!");
    }

    if (workBook) {
        workBook.deleteContact("Bhavesh");
        workBook.displayContacts();
    }

} catch (error) {
    console.error(error.message);
}


    constructor(){
        this.contacts = [];
      }
    
      addContact(contact) {
        this.contacts.push(contact)
      }
    
    }
    
    class AddressBookContact {
      
      constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){

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

