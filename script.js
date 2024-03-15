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
  

  // // apis
  // document.addEventListener('DOMContentLoaded', function () {
  //   const reviewsSection = document.getElementById('reviews-section');
  //   const seeMoreButton = document.getElementById('btn-see-more');
  
  //   // Function to fetch reviews and populate the section
  //   function fetchAndDisplayReviews() {
  //     fetch('https://reqres.in/api/users?page=1')
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         return response.json();
  //       })
  //       .then(data => {
  //         const users = data.data.slice(0, 3); // First three users
  
  //         // Function to create user element
  //         function createUserElement(user, index) {
  //           const userElement = document.createElement('div');
  //           userElement.classList.add('user');
  
  //           userElement.innerHTML = `
  //             <img src="${user.avatar}" alt="User Avatar">
  //             <h3>${user.first_name} ${user.last_name}</h3>
  //             <p>Email: ${user.email}</p>
  //             <p class="review" id="review-${user.id}"></p>
  //           `;
  //           return userElement;
  //         }
  
  //         // Append user elements to blocks
  //         const blocks = [document.getElementById('block-one'), document.getElementById('block-two'), document.getElementById('block-three')];
  //         users.forEach((user, index) => {
  //           const userElement = createUserElement(user, index);
  //           blocks[index].appendChild(userElement);
  //         });
  
  //         // Fetch and display reviews for each user
  //         users.forEach(user => {
  //           fetch(`https://reqres.in/api/users/${user.id}`)
  //             .then(response => {
  //               if (!response.ok) {
  //                 throw new Error('Network response was not ok');
  //               }
  //               return response.json();
  //             })
  //             .then(userData => {
  //               const reviewElement = document.getElementById(`review-${userData.data.id}`);
  //               reviewElement.textContent = "amazing classes"; // You can set the review here
  //             })
  //             .catch(error => {
  //               console.error('There was a problem with the fetch operation:', error);
  //             });
  //         });
  //       })
  //       .catch(error => {
  //         console.error('There was a problem with the fetch operation:', error);
  //       });
  //   }
  
  //   // Click event listener for the "Reviews" section
  //   reviewsSection.addEventListener('click', function () {
  //     fetchAndDisplayReviews();
  //   });
  
  //   // Click event listener for the "See More" button
  //   seeMoreButton.addEventListener('click', function () {
  //     // Fetch and display more reviews or implement your logic here
  //   });
  // });
  
//   document.addEventListener('DOMContentLoaded', function () {
//   const reviewsSection = document.getElementById('reviews-section');
//   const seeMoreButton = document.getElementById('btn-see-more');

//   // Function to fetch reviews and populate the section
//   function fetchAndDisplayReviews(pageNumber) {
//     fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         const users = data.data.slice(0, 3); // First three users

//         // Function to create user element
//         function createUserElement(user) {
//           const userElement = document.createElement('div');
//           userElement.classList.add('user');

//           userElement.innerHTML = `
//             <img src="${user.avatar}" alt="User Avatar">
//             <h3>${user.first_name} ${user.last_name}</h3>
//             <p>Email: ${user.email}</p>
//             <p class="review" id="review-${user.id}">amazing classes</p>
//           `;
//           return userElement;
//         }

//         // Clear existing reviews
//         const blocks = [document.getElementById('block-one'), document.getElementById('block-two'), document.getElementById('block-three')];
//         blocks.forEach(block => {
//           block.innerHTML = ''; // Clear existing content
//         });

//         // Append user elements to blocks
//         users.forEach((user, index) => {
//           const userElement = createUserElement(user);
//           blocks[index].appendChild(userElement);
//         });
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }

//   // Function to initially fetch and display reviews from the first page
//   fetchAndDisplayReviews(1);

//   // Click event listener for the "See More" button
//   seeMoreButton.addEventListener('click', function () {
//     fetchAndDisplayReviews(2); // Fetch reviews from the second page
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const reviewsSection = document.getElementById('reviews-section');
  const seeMoreButton = document.getElementById('btn-see-more');

  // Object to store reviews for each user
  const userReviews = {};

  // Function to fetch reviews and populate the section
  function fetchAndDisplayReviews(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const users = data.data.slice(0, 6); // First six users

        // Function to create user element
        function createUserElement(user) {
          const userElement = document.createElement('div');
          userElement.classList.add('user');

          // Retrieve or generate review for the user
          const review = userReviews[user.id] || generateReview();
          userReviews[user.id] = review; // Store the review for future use

          userElement.innerHTML = `
            <img src="${user.avatar}" alt="User Avatar">
            <h3>${user.first_name} ${user.last_name}</h3>
            <p>Email: ${user.email}</p>
            <p class="review">${review}</p>
          `;

          return userElement;
        }

        // Clear existing reviews
        const blocks = [document.getElementById('block-one'), document.getElementById('block-two'), document.getElementById('block-three')];
        blocks.forEach(block => {
          block.innerHTML = ''; // Clear existing content
        });

        // Append user elements to blocks
        users.forEach((user, index) => {
          const userElement = createUserElement(user);
          blocks[index].appendChild(userElement);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  // Function to generate a random review
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

  // Function to initially fetch and display reviews from the first page
  fetchAndDisplayReviews(1);

  // Click event listener for the "See More" button
  seeMoreButton.addEventListener('click', function () {
    fetchAndDisplayReviews(2); // Fetch reviews from the second page
  });
});


// contact option

document.querySelector(".submit-button").addEventListener("click", function (event) {
  event.preventDefault();

  let username = document.querySelector("input[name='username']").value;
  let email = document.querySelector("input[name='email']").value;
  let message = document.querySelector("textarea[name='message']").value;

  // Check if any of the fields are empty
  if (username.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Error: All fields are required.");
    return;
  }

  // Email validation
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Error: Invalid email address.");
    return;
  }
    // Create an object to store form data
    const formData = {
      username: username,
      email: email,
      message: message
    };

    // Store form data in local storage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Clear form fields
    usernameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    alert('Thank you! We will contact you shortly.');
  });

