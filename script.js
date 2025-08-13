// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
navToggle?.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form validation (client-side only)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Clear previous errors
    ['name','email','message'].forEach(id => {
      const el = document.getElementById('err-' + id);
      if (el) el.textContent = '';
    });

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    if (!name.value.trim()) {
      document.getElementById('err-name').textContent = 'Please enter your name.';
      valid = false;
    }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      document.getElementById('err-email').textContent = 'Enter a valid email address.';
      valid = false;
    }
    if (!message.value.trim() || message.value.length < 10) {
      document.getElementById('err-message').textContent = 'Message should be at least 10 characters.';
      valid = false;
    }

    if (valid) {
      // Simulated success
      alert('Thanks! Your message was sent (demo).');
      form.reset();
    }
  });
}

// Smooth scroll for anchor links (with reduced-motion respect)
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      if (prefersReduced) {
        target.scrollIntoView();
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
