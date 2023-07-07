//declaring the variables:
const submitBtn = document.getElementById('submit');

//disabling at start:
submitBtn.classList.add('disabled');

//declarign the form variables:
const firstName = document.getElementById('first-name');
const email = document.getElementById('email');
const emailHasAtSign = () => email.value.match('@');
const comments = document.getElementById('comments');
const file = document.getElementById('file');

//declaring form enable function:
const checkIfEnableButton = () => {

    //if the variables contain something, then 'disabled' is lifted:
    if (
        firstName.value &&
        email.value &&
        emailHasAtSign() &&
        comments.value &&
        file.value
    ) {
        submitBtn.classList.remove('disabled')
    }
    else {
        submitBtn.classList.add('disabled')
    };

};

//declaring the function that will fire with each input change:
firstName.addEventListener('change', checkIfEnableButton)
email.addEventListener('change', checkIfEnableButton)
comments.addEventListener('change', checkIfEnableButton)
file.addEventListener('change', checkIfEnableButton)