function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    let email = document.forms["contactForm"]["email"].value;
    if (email == "") {
        alert("Email must be filled out");
        return false
    }
    let message = document.forms["contactForm"]["message"].value;
    if (message == "") {
        alert("Message must be filled out")
        return false
    }
    if (message != "" || email != "" || name != "") {
        alert("Form filled out successfully!");
    }
}

// new features for V2 of the website
// Smooth Scroll for Hero Button
document.getElementById('scroll-down').addEventListener('click', () => {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
});

// Highlight Active Navbar Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        } else {
            entry.target.classList.remove('section-visible');
        }
    });
});

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// Update Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

