// Get the hamburger icon and the navigation menu
const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');

// Add a click event listener to the hamburger icon
menuIcon.addEventListener('click', () => {
  // Toggle the 'responsive' class on the navigation menu
  nav.classList.toggle('responsive');
});