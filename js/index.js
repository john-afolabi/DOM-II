// Your code goes here
// Mouseover and Mouseout
const navItems = Array.from(document.getElementsByClassName('nav-link'));
navItems.forEach(a => {
    a.addEventListener('mouseover', event => {
        event.currentTarget.style.color = '#fdbb4f';
    })

    a.addEventListener('mouseout', event => {
        event.currentTarget.style.color = '';
    })

});

// Keydown
const body = document.getElementsByTagName('body')[0];

document.addEventListener('keydown', event => {
    if (event.key === 'r') {
        body.style.backgroundColor = '#ffebcd';
    }
});

// Wheel
logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('wheel', event => {
    event.target.textContent = 'Funny Bus';
})

// Drag & Drop 


// Load
window.addEventListener('load', event => {
    alert('Page is fully loaded');
});

// Double click 
const introText = document.getElementsByClassName('intro')[0].children[2];
introText.addEventListener('dblclick', event => {
    event.target.style.backgroundColor = '#ffebcd';
})

// Submit
const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Form Submitted')
})

// Select
const firstname = document.querySelector('.first-name');
console.log(firstname);
firstname.addEventListener('select', event => {
   event.target.style.color = 'red'; 
})

// Focus
firstname.addEventListener('focus', event => {
    event.target.style.backgroundColor = 'yellow';
})

