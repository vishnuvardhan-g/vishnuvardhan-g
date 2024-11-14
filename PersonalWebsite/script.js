// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (checking if fields are not empty)
    if (name && email && message) {
        // Display a confirmation message (can be customized further or sent to a server)
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        
        // Clear form fields after submission
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

// Scroll-to-top button functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = "↑";
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

// Show/hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
