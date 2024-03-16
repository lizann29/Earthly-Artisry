document.addEventListener("DOMContentLoaded", function() {
    const sortButton = document.querySelector('.sort-button');
    const sortList = document.querySelector('.sort-list');
    const products = document.querySelectorAll('.each-photo');
  
    sortButton.addEventListener('click', function() {
      sortList.style.display = sortList.style.display === 'none' ? 'block' : 'none';
    });
  
    const sortProducts = function(sortOrder) {
      const sortedProducts = Array.from(products).sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('$', ''));
        const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('$', ''));
        return sortOrder === 'low-to-high' ? priceA - priceB : priceB - priceA;
      });
      document.querySelector('.photos-here').innerHTML = '';
      sortedProducts.forEach(product => {
        document.querySelector('.photos-here').appendChild(product);
      });
    };
  
    const sortLinks = document.querySelectorAll('.sort-list li');
    sortLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const sortOrder = this.dataset.sort;
        sortProducts(sortOrder);
        sortList.style.display = 'none';
      });
    });
  
    document.addEventListener('click', function(event) {
      const isClickInsideButton = sortButton.contains(event.target);
      const isClickInsideList = sortList.contains(event.target);
      if (!isClickInsideButton && !isClickInsideList) {
        sortList.style.display = 'none';
      }
    });
  });
  