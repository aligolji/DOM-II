// Your code goes here

//1 - keydown   /   keyup
let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener = ('keydown', () => {
    logoHeading.style.letterSpacing = '10px';
    logoHeading.style.color = 'red';
    event.stopPropagation ();
});
logoHeading.addEventListener = ('keyup', () => {
    logoHeading.style.letterSpacing = '';
});

console.log(logoHeading);


//2 - copy
let intro = document.querySelector('.intro');
intro.addEventListener = ('copy', () => {
    // intro.style.backgroundColor = '#E68A00';
    alert('The text is on the bus.🚌');
});
console.log(intro);



// 3 - mousedown    /   mouseup
let homeLink = document.querySelector('.nav-link');
homeLink.addEventListener('mousedown', () => {
    homeLink.style.color = 'yellow';
    homeLink.style.backgroundColor = 'black';
});
homeLink.addEventListener('mouseup', () => {
    homeLink.style.color = '';
    homeLink.style.backgroundColor = '';
});

console.log(homeLink);



//4 - dblclick
let busPic = document.querySelector('.intro img');
busPic.addEventListener('dblclick', () => {
    alert("The wheels on the bus go round and round... Now you can't get it out of your head!");
    busPic.style.filter = 'blur(8px)';
});



//5 - mouseover / mouseout
busPic.addEventListener('mouseover', () => {
    busPic.style.filter = 'grayscale(100%)';
});
busPic.addEventListener('mouseout', () => {
    busPic.style.transform = 'scaleX(-1)';
});
console.log(busPic);



//6 - drag  /   dragend
let contentSection = document.querySelector('.content-section');
contentSection.addEventListener('drag', () => {
    contentSection.style.backgroundColor = 'blue';
    contentSection.style.fontStyle = 'italic';
});
contentSection.addEventListener('dragend', () => {
    contentSection.style.backgroundColor = '#E68A00';
});

console.log(contentSection);


//7



//preventDefault

let nav = document.querySelector('.nav');
nav.addEventListener('click', () => {
    event.preventDefault();
});