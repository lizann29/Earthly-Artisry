//burger line
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
  
    setInterval(nextSlide, 3000);
  });
  

document.addEventListener('DOMContentLoaded', function () {
  const reviewsSection = document.getElementById('reviews-section');
  const seeMoreButton = document.getElementById('btn-see-more');

  const userReviews = {};

  function fetchAndDisplayReviews(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const users = data.data.slice(0, 3); 

        function createUserElement(user) {
          const userElement = document.createElement('div');
          userElement.classList.add('user');

          const review = userReviews[user.id] || generateReview();
          userReviews[user.id] = review; 

          userElement.innerHTML = `
            <img src="${user.avatar}" alt="User Avatar">
            <h3>${user.first_name} ${user.last_name}</h3>
            <p>Email: ${user.email}</p>
            <p class="review">${review}</p>
          `;

          return userElement;
        }

        const blocks = [document.getElementById('block-one'), document.getElementById('block-two'), document.getElementById('block-three')];
        blocks.forEach(block => {
          block.innerHTML = ''; 
        });

        users.forEach((user, index) => {
          const userElement = createUserElement(user);
          blocks[index].appendChild(userElement);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  function generateReview() {
    const reviews = [
      "Great experience, highly recommended!",
      "Fantastic lessons, will definitely come back again!",
      "Amazing products and excellent customer service!",
      "Wonderful experience, would recommend to everyone!",
      "Amazing Courses!",
      "Outstanding service and exceptional value for money!"
    ];
    const randomIndex = Math.floor(Math.random() * reviews.length);
    return reviews[randomIndex];
  }

  fetchAndDisplayReviews(1);

  seeMoreButton.addEventListener('click', function () {
    fetchAndDisplayReviews(2); 
  });
});


// contact option

document.querySelector(".submit-button").addEventListener("click", function (event) {
  event.preventDefault();

  let username = document.querySelector("input[name='username']").value;
  let email = document.querySelector("input[name='email']").value;
  let message = document.querySelector("textarea[name='message']").value;

  if (username.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Error: All fields are required.");
    return;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Error: Invalid email address.");
    return;
  }
    const formData = {
      username: username,
      email: email,
      message: message
    };

    localStorage.setItem('contactFormData', JSON.stringify(formData));

    usernameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    alert('Thank you! We will contact you shortly.');
  });

