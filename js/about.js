//defining variables:
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const mapShown = document.querySelector('iframe');
const mapArray = ['https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0487976737!2d-46.87549270374255!3d-23.68153146900086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo%2C%20Brazil!5e0!3m2!1sen!2sil!4v1678210329449!5m2!1sen!2sil', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72429.80028800368!2d35.14459982647847!3d31.789163303992133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem!5e0!3m2!1sen!2sil!4v1678385114510!5m2!1sen!2sil', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28824.176160018298!2d34.57727713493729!3d31.529655087719092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15028152b5bc422b%3A0x9eca44351ad2130a!2sSderot!5e0!3m2!1sen!2sil!4v1678385163531!5m2!1sen!2sil', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27064.519301893397!2d34.71203897282877!3d32.013355290864645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b312412bb38b%3A0xb2961a65cc489c32!2sBat%20Yam!5e0!3m2!1sen!2sil!4v1678385198571!5m2!1sen!2sil'];


//creating the main map-change function:
let mapUpdate = function(array) {

    //updating current map src value:
    mapShown.src = array[currentMapIndex];

    //doing the button adjustments:
    if (currentMapIndex === 0) {
        previousBtn.classList.add('disabled');
    }
    else if (currentMapIndex === 3) {
        nextBtn.classList.add('disabled');
    }
    else {
        nextBtn.classList.remove('disabled');
        previousBtn.classList.remove('disabled');
    };
    
}

//this is to keep track where we're at:
let currentMapIndex = 0;

//adding functionality to the buttons:
previousBtn.addEventListener('click', function(event) {
    currentMapIndex -= 1;
    mapUpdate(mapArray);
});
nextBtn.addEventListener('click', function(event) {
    currentMapIndex += 1;
    mapUpdate(mapArray);
});

//executing at start:
mapUpdate(mapArray);