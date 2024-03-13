document.addEventListener('DOMContentLoaded', function () {
    const burgerBar = document.querySelector('.burger-bar');
    const navItems = document.querySelector('.nav-ul-items');
  
    burgerBar.addEventListener('click', function () {
      this.classList.toggle('active');
      navItems.classList.toggle('active');
    });
  });
  


  //slide
  
  document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slideShow > div');
    let currentSlide = 0;
  
    function showSlide(n) {
      slides[currentSlide].style.display = 'none';
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = 'block';
    }
  
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
  
    setInterval(nextSlide, 3000); // автоматическая прокрутка каждые 3 секунды
  });
  