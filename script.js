
function toggleMenu() {
    const menu = document.querySelector('.menu');
    
    // Check the current state and toggle class
    if (menu.style.transform === 'translateX(0%)') {
      menu.style.transform = 'translateX(100%)'; // Slide out
    } else {
      menu.style.transform = 'translateX(0%)'; // Slide in
    }
  }
  