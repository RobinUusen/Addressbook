// define variables
// contact data
const firstName = document.querySelector('#first_name').value;
const lastName = document.querySelector('#last_name').value;
const city = document.querySelector('#city').value;
const street = document.querySelector('#street').value;
const postCode = document.querySelector('#postcode').value;
const phone = document.querySelector('#phone').value;
const contact = [firstName, lastName, city, street, postCode, phone];

// app data
const form = document.querySelector('#contact-form');
const contacts = document.querySelector('#contacts-table');

// define event listeners
// add contact to table - submit button
form.addEventListener('submit', addContact);

// project functions
// addContact
function addContact(e) {
    if (firstName == '' | lastName == '' | city == '' | street == '' | postCode == '' | phone == '') {
        alert("Add new contact data!")
    } else {
        console.log("Create contact");
        const person = new Person(firstName.value, lastName.value, city.value, street.value, postCode.value, phone.value);
       console.log("create user interface");
       const ui = new UI();
       ui. addPersonToTable(person);
        console.log(contacts);
        e.preventDefault();
    }
}