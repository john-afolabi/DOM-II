// Your code goes here
// Mouseover
const navItems = Array.from(document.getElementsByClassName('nav-link'));
navItems.forEach(a => {
    a.addEventListener('mouseover', event => {
        event.currentTarget.style.color = '#fdbb4f';
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