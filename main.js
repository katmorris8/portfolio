const toggle = document.querySelector('.toggle');
const toggleBtn = document.querySelector('.toggle-button');

toggle.addEventListener('click', handleToggle);

function handleToggle() {
  if (toggle.classList.contains('toggle-light')) {
    toggle.classList.remove('toggle-light');
    toggle.classList.add('toggle-dark');
    toggleBtn.classList.remove('light-mode-toggle');
    toggleBtn.classList.add('dark-mode-toggle');
  } else if (toggle.classList.contains('toggle-dark')) {
    toggle.classList.remove('toggle-dark');
    toggle.classList.add('toggle-light');
    toggleBtn.classList.remove('dark-mode-toggle');
    toggleBtn.classList.add('light-mode-toggle');
  }
}

// light mode 
// toggle button postition right .2rem
// toggle background color white
// toggle border color #333333

// dark mode 
// toggle button postition left .2rem
// toggle background color #333333
// toggle border color #cccccc