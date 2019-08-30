const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const toggleBtn = document.querySelector('.toggle-button');
const links = document.querySelectorAll('.link');
const paragraphs = document.querySelectorAll('.text');
const localStorageMode = localStorage.getItem('mode');

window.onload = checkLocalStorage();

toggle.addEventListener('click', handleToggle);

function checkLocalStorage() {
  if (!localStorageMode || localStorageMode === 'light') {
    lightMode();
  } else if (localStorageMode === 'dark') {
    darkMode();
  }
}

function handleToggle() {
  // turn dark mode on
  if (body.id === 'light-mode') {
    darkMode();

  // turn light mode on
  } else if (body.id === 'dark-mode') {
    lightMode();
  }
}

// changes from dark mode to light mode
function lightMode() {
  // changes to the toggle button
  toggle.classList.remove('toggle-dark');
  toggle.classList.add('toggle-light');
  toggleBtn.classList.remove('dark-mode-toggle');
  toggleBtn.classList.add('light-mode-toggle');

  // changes to the background color
  body.id = 'light-mode';

  // changes to the link color on hover
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('dark-mode-link');
    links[i].classList.add('light-mode-link');
  }

  // changes to the paragraph text color
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.remove('dark-mode-text');
    paragraphs[i].classList.add('light-mode-text');
  }

  // modify the local storage
  localStorage.clear();
  localStorage.setItem('mode', 'light');
}

// changes from light mode to dark mode
function darkMode() {
  // changes to the toggle button
  toggle.classList.remove('toggle-light');
  toggle.classList.add('toggle-dark');
  toggleBtn.classList.remove('light-mode-toggle');
  toggleBtn.classList.add('dark-mode-toggle');

  // changes to the background color
  body.id = 'dark-mode';

  // changes to the link color on hover
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('light-mode-link');
    links[i].classList.add('dark-mode-link');
  }

  // changes to the paragraph text color
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.remove('light-mode-text');
    paragraphs[i].classList.add('dark-mode-text');
  }

  // modify the local storage
  localStorage.clear();
  localStorage.setItem('mode', 'dark');
}

const menuButton = document.querySelector('.menu-btn');
menuButton.addEventListener('click', handleMenuClick);

function handleMenuClick() {
  if (menuButton.classList.contains('dark')) {
    // changes the menu text color from dark to light
    menuButton.classList.remove('dark');
    menuButton.classList.add('light');
    // expands the menu
    openMenu();
  } else if (menuButton.classList.contains('light')) {
    // changes the menu text color from light to dark
    menuButton.classList.remove('light');
    menuButton.classList.add('dark');
    // collapses the menu
    // closeMenu()
  }
}

const navBar = document.querySelector('.nav-bar');
const navLinks = document.querySelector('.nav-links');

function openMenu() {
  navLinks.classList.remove('closed-menu-nav-links');
  navLinks.classList.add('menu-open ');
}


// open menu classes:
// nav-bar --> open-menu-nav-bar
// nav-links --> menu-open ---
// menu-btn --> dark open-menu-btn
// header-bar --> open-menu-header
// header-img --> open-menu-img

// nav-links --> closed-menu-nav-links ---

// mobile menu button
// make the headshot, gradient filter and blue shape strict sizes
// fix nav spacing (maybe calc)
// .header-message padding
// adjust the size of the blue rectangle in the header
// adjust the hight of the header section
// make the project image link to the project page
// edit the project image with CSS filters
    // blur
    // greyscale
    // blue tranparent overlay
    // border
    // ajust the font size and weight on all screens