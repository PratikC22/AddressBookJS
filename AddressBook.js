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
}

let contact = new Contact("Pratik", "Chaudhari", "Shriram colony", "Faizpur", "Maharastra", "425503", "9657586962", "pratikc1020@gmail.com");
console.log(contact);
