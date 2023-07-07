//the variables for the pretty colors:
let body = document.getElementsByTagName('body')[0];
let colorsBtn = document.getElementById('colorsBtn');
let currentColor = 'green';

//the function that swaps the colors:
colorsBtn.addEventListener('click', function(event) {

    //checking case and executing it:
    switch (currentColor) {
    
        case 'green':
            body.style.setProperty('--bg-color', '#FEDEFF');
            currentColor = 'pink';
            break;
    
        case 'pink':
            body.style.setProperty('--bg-color', '#DEF5E5');
            currentColor = 'green';
            break;
    
    }

});