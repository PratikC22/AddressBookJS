class Contact {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    mobileNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, mobileNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    toString() {
        return "\nFirst Name    : " + this.firstName +
            "\nLast Name     : " + this.lastName +
            "\nAddress       : " + this.address +
            "\nCity          : " + this.city +
            "\nState         : " + this.state +
            "\nZip           : " + this.zip +
            "\nMobile Number : " + this.mobileNumber +
            "\nEmail         : " + this.email;
    }

    get firstName() { return this.firstName; }
    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(firstName))
            this.firstName = firstName;
        else
            throw "Invalid first Name";
    }

    get lastName() { return this.lastName; }
    set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(lastName))
            this.lastName = lastName;
        else
            throw "Invalid  last Name";
    }

    get address() { return this.address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this.address = address;
        else
            throw "Invalid address ";
    }

    get city() { return this.city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this.city = city;
        else
            throw "Invalid city ";
    }

    get state() { return this.state; }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
            this.state = state;
        else
            throw "Invalid state";
    }

    get zip() { return this.zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if (zipRegex.test(zip))
            this.zip = zip;
        else
            throw "Invalid zip ";
    }

    get mobileNumber() { return this.mobileNumber; }
    set mobileNumber(mobileNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(mobileNumber))
            this.mobileNumber = mobileNumber;
        else
            throw "Invalid phone number";
    }

    get email() { return this.email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this.email = email;
        else
            throw "Invalid email";
    }
}

try {
    var addressBook = new Array();
    console.log("<<<<<Welcome to AddressBook Application>>>>>");
    addressBook.push(new Contact("Pratik", "Chaudhari", "Shriram colony", "Faizpur", "Maharastra", "425503", "9657586962", "pratikc1020@gmail.com"));
    addressBook.push(new Contact("Patrick", "Bateman", "55 West 81st Street, Upper West Side", "NYC", "NY", 10023, 1145658777, "Sakha2111@gmail.com"));
    addressBook.forEach((contact) => console.log(contact.toString()));
}
catch (e) {
    console.log('Regex test is fail \n' + e);
}
