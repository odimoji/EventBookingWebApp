/*const darkMode = document.querySelector('#dark-mode');

darkMode.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
})


const firstname = document.querySelector('#firstname')


function formSubmit(event){
    event.preventDefault();

    const person = {
        firstname: firstname.value,
    };

    const personString = JSON.stringify(person);

    alert("Thankyou for your message, "+ person.firstname + ". We will be in touch shortly.")
}

const form = document.querySelector('#contact-form');
form.addEventListener('submit', formSubmit)
*/


const darkMode = document.querySelector('#dark-mode');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

const form = document.querySelector('#contact-form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');

function validateForm() {
    // Basic validation: Check if fields are not empty
    if (firstname.value.trim() === '' || lastname.value.trim() === '' || email.value.trim() === '' || phone.value.trim() === '' || message.value.trim() === '') {
        alert('All fields must be filled out');
        return false; // Prevent form submission
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Invalid email format');
        return false; // Prevent form submission
    }

    // Validate phone number format
    const phoneRegex = /^\d{10}$/; // Must be exactly 10 digits and contain only numbers
    if (!phoneRegex.test(phone.value)) {
        alert('Invalid phone number format');
        return false; // Prevent form submission
    }

    return true; // Allow form submission if all validations pass
}

function formSubmit(event) {
    event.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
        const person = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            phone: phone.value,
            message: message.value,
        };

        const personString = JSON.stringify(person);

        alert("Thank you for your message, " + person.firstname + ". We will be in touch shortly.");
    }
}

form.addEventListener('submit', formSubmit);

