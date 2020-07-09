// Your code goes here

//1/2 - keydown   /   keyup
let logo = document.querySelector('.logo-heading');
window.addEventListener('keydown', () => {
    logo.style.letterSpacing = '15px';
});

window.addEventListener('keyup', () => {
    alert('You just keyed the bus!!🚌');
});

//keypress syntax
// window.addEventListener('keydown', keyPress, false);
// function keyPress(enterKey) {
//     if (enterKey.keyCode == '13') {
//         alert('You just ENTERed!');
//     }
// }


//3 - copy - NEEDS WORK - NOT FUNCTIONING
let intro = document.querySelector('.intro');
intro.addEventListener('copy', () => {
    // intro.style.backgroundColor = '#E68A00';
    alert('The text is on the bus.🚌');
});



// 4/5 - mousedown    /   mouseup
let homeLink = document.querySelector('.nav-link');
homeLink.addEventListener('mousedown', () => {
    homeLink.style.color = 'yellow';
    homeLink.style.backgroundColor = 'black';
    homeLink.style.fontSize = '25px';
});
homeLink.addEventListener('mouseup', () => {
    homeLink.style.color = '';
    homeLink.style.backgroundColor = '';
    homeLink.style.fontSize = '';
});




//6 - dblclick
let busPic = document.querySelector('.intro img');
busPic.addEventListener('dblclick', () => {
    alert("The wheels on the bus go round and round... Now you can't get it out of your head!");
    busPic.style.filter = 'blur(8px)';
});



//7/8 - mouseover / mouseout
busPic.addEventListener('mouseover', () => {
    busPic.style.filter = 'grayscale(100%)';
});
busPic.addEventListener('mouseout', () => {
    busPic.style.transform = 'scaleX(-1)';
});



//9/10 - drag  /   dragend
let contentSection = document.querySelector('.content-section');
contentSection.addEventListener('drag', () => {
    contentSection.style.backgroundColor = 'blue';
    contentSection.style.fontStyle = 'italic';
});
contentSection.addEventListener('dragend', () => {
    contentSection.style.backgroundColor = '#E68A00';
});



//7
let advAwaits = document.querySelectorAll('.content-section');
    // advAwaits.addEventListener('click', () => {

    // });

console.log(advAwaits[1]);




//preventDefault

let nav = document.querySelector('.nav');
nav.addEventListener('click', () => {
    event.preventDefault();
});