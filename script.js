document.addEventListener('DOMContentLoaded', function () {
    const burgerBar = document.querySelector('.burger-bar');
    const navItems = document.querySelector('.nav-ul-items');
  
    burgerBar.addEventListener('click', function () {
      this.classList.toggle('active');
      navItems.classList.toggle('active');
    });
  });
  