const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const toggleBtn = document.querySelector('.toggle-button');
const links = document.querySelectorAll('.light-mode-link');
const paragraphs = document.querySelectorAll('.light-mode-text');

toggle.addEventListener('click', handleToggle);

function handleToggle() {
  // turn dark mode on
  if (body.id === 'light-mode') {
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

  // turn light mode on
  } else if (toggle.classList.contains('toggle-dark')) {
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
  }
}

// light mode 
// class light-mode-hover:
// p color #333333

// dark mode 
// class dark-mode-hover:
// p color white

// create a transition for the background color
// background color transition doesn't work
// paragraph transition only works on first click