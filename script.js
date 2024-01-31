// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle navigation menu on mobile devices
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
  
  // Contact form submission
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
  
    // Validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields');
      return;
    }
  
    // Send email using an API (replace URL with your own API endpoint)
    const url = 'https://myapi.com/send-email';
    const data = {
      name,
      email,
      message
    };
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Your message has been sent');
        form.reset();
      } else {
        alert('There was an error sending your message. Please try again later.');
      }
    })
    .catch(error => {
      alert('There was an error sending your message. Please try again later.');
      console.error(error);
    });
  });
  