const toggle = document.querySelector('.toggle');
const toggleBtn = document.querySelector('.toggle-button');

toggle.addEventListener('click', handleToggle);

function handleToggle() {
  toggleBtn.classList.remove('light-mode-toggle');
  toggleBtn.classList.add('dark-mode-toggle');
  // toggleBtn.style.right = '0.1rem';
  // remove and add classes that style the toggle switch
}

// light mode 
// toggle button postition right .2rem
// toggle background color white
// toggle border color #333333

// dark mode 
// toggle button postition left .2rem
// toggle background color #333333
// toggle border color #cccccc