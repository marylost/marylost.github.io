document.addEventListener('DOMContentLoaded', () => {

// --- hamburger to cross icon ---
/*const toggleButton = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');
const menuLinks = document.querySelectorAll('.navbar-menu a');

const toggleMenu = (forceClose = false) => {
  
  const isOpen = forceClose ? false : menu.classList.toggle('is-open');
  
  if (forceClose) {
    menu.classList.remove('is-open');
    toggleButton.classList.remove('is-active');
  } else {
    toggleButton.classList.toggle('is-active', isOpen);
  }
  
  const currentState = menu.classList.contains('is-open');
  toggleButton.setAttribute('aria-expanded', currentState);
  document.body.style.overflow = currentState ? 'hidden' : '';
};

toggleButton.addEventListener('click', () => toggleMenu());

menuLinks.forEach(link => {
  link.addEventListener('click', () => toggleMenu(true));
});*/


// --- EMAILJS CONFIG & FORM ---

const contactForm = document.getElementById("contact-form");
    const statusMessage = document.querySelector(".form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            // Honeypot anti-spam
            const honey = contactForm.querySelector('input[name="last_name_confirm"]').value;
            if (honey !== "") {
                console.warn("Spam detected");
                return;
            }

            // Feedback visivo immediato
            statusMessage.textContent = "Invio in corso...";
            statusMessage.style.color = "var(--neutral-700)";

            // ID Servizio e ID Template da EmailJS
            emailjs.sendForm("service_huqibxo", "template_07ey6jm", this)
                .then(() => {
                    statusMessage.textContent = "Messaggio inviato correttamente. Ti risponderò presto!";
                    statusMessage.style.color = "var(--success-500)";
                    contactForm.reset();
                }, (error) => {
                    console.error("EmailJS Error:", error);
                    statusMessage.textContent = "Ops! Qualcosa è andato storto. Riprova più tardi.";
                    statusMessage.style.color = "var(--error-500)";
                });
        });
    }

});

