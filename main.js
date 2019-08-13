const toggle = document.querySelector('.toggle');
const toggleBtn = document.querySelector('.toggle-button');

toggle.addEventListener('click', handleToggle);

function handleToggle() {
  // dark mode
  if (toggle.classList.contains('toggle-light')) {
    // changes to the toggle button
    toggle.classList.remove('toggle-light');
    toggle.classList.add('toggle-dark');
    toggleBtn.classList.remove('light-mode-toggle');
    toggleBtn.classList.add('dark-mode-toggle');

  // light mode
  } else if (toggle.classList.contains('toggle-dark')) {
    // changes to the toggle button
    toggle.classList.remove('toggle-dark');
    toggle.classList.add('toggle-light');
    toggleBtn.classList.remove('dark-mode-toggle');
    toggleBtn.classList.add('light-mode-toggle');
  }
}

// light mode 
// background color white
// class light-mode-hover:
// p color #333333
// a hover color #333333

// dark mode 
// background color #333333
// class dark-mode-hover:
// p color white
// a hover color white