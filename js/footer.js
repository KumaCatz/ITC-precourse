//the variables for the generated footer part:
let codingLanguages = ['HTML', 'CSS', 'Javascript'];
const footer = document.querySelector('footer');

//the function that handles the footer text:
let footerUpdate = function(array) {

    let varThatConcatenatesTheText = [];
    let i = 0;

    while (i < array.length - 2) {
        varThatConcatenatesTheText += array[i] + ', ';
        i++;
    }

    if (i < array.length - 1) {
        varThatConcatenatesTheText += array[i] + ' and ';
        i++;
    }

    varThatConcatenatesTheText += array[i];

    footer.innerHTML = 'This page was built using: ' + varThatConcatenatesTheText;
    
};

//start executing:
footerUpdate(codingLanguages);


//My thanks to ITC Israel Tech Challenge, for providing me this amazing opportunity!
//My thanks to Karen Sommer, for the patience and support helping the new students, and Sean Feldman, for being an amazing teacher and an example to follow!