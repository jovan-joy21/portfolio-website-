document.addEventListener('DOMContentLoaded', () => {
  // contact form
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent!');
    form.reset();
  });
});
