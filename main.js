// navbar and mobile menu
const mainMenu = document.querySelector('.navbar__item');
const closeMenu = document.querySelector('.close_menu');
const openMenu = document.querySelector('.open_menu');

openMenu.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);

function openNav() {

    document.getElementById("myNav").style.width = "100%";
    
    
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
