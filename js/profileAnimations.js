//declaring variables:
const profileImage = document.querySelector('img');
const currentClass = profileImage.classList;
const kukaArray = ['./img/kuka1.jpg','./img/kuka2.jpg','./img/kuka3.jpg','./img/kuka4.jpg','./img/kuka5.jpg','./img/kuka6.jpg','./img/kuka7.jpg','./img/kuka8.jpg','./img/kuka9.jpg','./img/kuka10.jpg','./img/kuka11.jpg','./img/kuka12.jpg','./img/kuka13.jpg','./img/kuka14.jpg','./img/kuka15.jpg','./img/kuka16.jpg']

//declaring the bright "hover" function:
function animate() {
  
  currentClass.add('bright');
  //removing both animation classes when over:
  onanimationend = () => currentClass.remove('bright', 'blur');

};

//doing the same for the image-swap-click function:
function blurNSwap() {

  currentClass.add('blur');

  //function that returns a random number from the array:
  let i = randomArrayNumber();
  
  //used afterwards to swap the image src with the value in it:
  profileImage.src = kukaArray[i];

  //also removing classes, for good measure:
  onanimationend = () => currentClass.remove('blur', 'bright');

}

let randomArrayNumber = function (value) {
  value = Math.floor(Math.random() * (16 - 1) + 0);
  return value;
}

//creating the "hover" and "click" event conditions:
profileImage.addEventListener('mouseenter', animate);
profileImage.addEventListener('click', blurNSwap);