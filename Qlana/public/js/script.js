document.addEventListener('DOMContentLoaded', () => {

    // --- Animasi Scroll ---
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };
    
    // Panggil sekali saat load & tambahkan event listener
    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);

    // --- Logika Form Pendaftaran ---
    const signupForm = document.getElementById('signup-form');
    const emailInput = document.getElementById('email-input');
    const formMessage = document.getElementById('form-message');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Mencegah form reload halaman

        const email = emailInput.value;
        formMessage.textContent = 'Mendaftar...';

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });

            const data = await response.json();

            if (response.ok) {
                formMessage.style.color = 'var(--cyber-green)';
                formMessage.textContent = data.message;
                emailInput.value = ''; // Kosongkan input setelah berhasil
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            formMessage.style.color = '#ff4d4d'; // Warna error
            formMessage.textContent = 'Terjadi kesalahan: ' + error.message;
        }
    });
});