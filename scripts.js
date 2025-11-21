/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const message = document.querySelector(".message");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value;

        if (email){
            message.textContent = `Thank you! Your email address '${email}' has been added to our mailing list!`;
        } else {
            message.textContent = `Please enter a valid email address.`
        }

        emailInput.value ='';
    });
});