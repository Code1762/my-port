// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Animate sections on scroll
  const animateSections = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (sectionTop < windowHeight * 0.75) {
              section.classList.add('animate-in');
          }
      });
  };

  window.addEventListener('scroll', animateSections);
  animateSections(); // Initial call

  // Typewriter effect for hero section
  const heroText = document.querySelector('.hero-content p');
  const text = heroText.textContent;
  heroText.textContent = '';
  let i = 0;
  const typeWriter = () => {
      if (i < text.length) {
          heroText.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 50);
      }
  };
  typeWriter();

  // Progress bar animation
  const animateProgressBars = () => {
      const progressBars = document.querySelectorAll('.progress');
      progressBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => {
              bar.style.width = width;
              bar.style.transition = 'width 1s ease-in-out';
          }, 200);
      });
  };

  // Intersection Observer for progress bars
  const progressSection = document.querySelector('#skills');
  const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
          animateProgressBars();
          observer.unobserve(progressSection);
      }
  }, { threshold: 0.5 });

  observer.observe(progressSection);

  // Add a scroll-to-top button
  const scrollTopButton = document.createElement('button');
  scrollTopButton.innerHTML = '&uarr;';
  scrollTopButton.className = 'scroll-top-btn';
  document.body.appendChild(scrollTopButton);

  scrollTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
          scrollTopButton.style.display = 'block';
      } else {
          scrollTopButton.style.display = 'none';
      }
  });

  // Form submission handling
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add your form submission logic here
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
  });
});