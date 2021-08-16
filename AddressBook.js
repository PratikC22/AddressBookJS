class Contact {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    mobileNumber;
    email;

    constructor(params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.mobileNumber = params[6];
        this.email = params[7];
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

    addressBook.push(new Contact("Dwight", "Schrute", "1725 Slough Avenue", "Scranton", "PA", 100663, 9657586962, "arm@dundermifflin.com"));
    addressBook.push(new Contact("Patrick", "Bateman", "55 West 81st Street, Upper West Side", "NYC", "NY", 10023, 9845658777, "pat@priceNprice.com"));

    console.log('contacts before being updated \n');
    addressBook.forEach((contact) => console.log(contact.toString()));

    addressBook.filter(contact => contact.firstName == 'Patrick').map(contact => contact.firstName = 'Wilson');
    console.log('contacts after being updated \n');
    addressBook.forEach((contact) => console.log(contact.toString()));

    let index = addressBook.findIndex(contact => Contact.firstName = 'Wilson');
    addressBook.slice(index, 1);
    console.log("contact after deletted ");
    addressBook.forEach((contact) => console.log(contact.toString()));

    let count = 0;
    function findNumberOfContacts(contact) {
        if (contact != null)
            return count++;
    }
    addressBook.reduce(findNumberOfContacts, 0);
    console.log(' Total number of contacts in array  : ' + count);

    let newContact = new Contact("Jim", 'Halpert', "1245 Burrough Avenue", 'Scranton', 'PA', "450 678", "91 9878415244", "jim@dundermifflin.com");


    function checkDuplicates(count, contact) {
        if (contact != null)
            count++;
        return count;
    }

    function addContact() {
        if (countDuplicate == 0) addressBook.push(newContact);
        else console.log("\nContact not added in the address book. Duplicate Entry found.\n");
    }

    let countDuplicate = addressBook.filter(contact => contact.firstName == newContact.firstName)
        .map(contact => contact).reduce(checkDuplicates, 0);

    addContact();

    console.log('Checking duplicate while adding new contact in the address book ');
    addressBook.forEach((contact) => console.log(contact.toString()));

    function countPersonByCity(countByCity, contact) {
        if (contact != null)
            countByCity++;
        return countByCity;
    }

    function searchByCity() {
        if (searchByCity == 0) console.log('Search not found by city name ' + searchCity);
        else console.log("\n" + searchByCity + ' Search found by city name ' + searchCity);
    }
    let searchCity = 'Scranton';
    searchByCity = addressBook.filter(contact => contact.city == searchCity).map(contact => contact).reduce(countPersonByCity, 0);
    searchByCity();

    function countPersonByCity(countByState, contact) {
        if (contact != null)
            countByState++;
        return countByState;
    }
    function searchByState() {
        if (serchByState == 0) console.log('Search not found by state name ' + searchState);
        else console.log('\n ' + serchByState + ' Search found by state name ' + searchState);
    }
    let searchState = 'PA';
    let serchByState = addressBook.filter(contact => contact.state == searchState).map(contact => contact).reduce(countPersonByCity, 0);
    searchByState();
} catch (e) {
    console.log('Regex test is fail \n' + e);
}