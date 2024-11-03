// mostrar introducción
document.getElementById('enter-button').addEventListener('click', () => {
    const introElement = document.getElementById('intro');
    const navElement = document.getElementById('main-nav');

    if (introElement) introElement.classList.add('hide');
    if (navElement) navElement.classList.add('show');
    document.body.classList.add('loaded');
});

infoButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) modal.style.display = 'none';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// el formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const fields = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    if (Object.values(fields).some(field => field === '')) {
                alert('Todos los campos son obligatorios.');
            } else if (!validateEmail(fields.email)) {
                alert('Introduce un correo electrónico válido.');
            } else if (!validatePhone(fields.phone)) {
                alert('Introduce un número de teléfono válido.');
            } else {
                alert('Gracias por contactarnos. Le responderemos pronto.');
                contactForm.reset(); // Limpia el formulario después de mostrar el mensaje
            }
        });
    

// validaciones
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
