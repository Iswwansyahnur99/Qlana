// script.js
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. KURSOR KUSTOM (SUPER CEPAT) ---
    const cursor = document.querySelector('.cursor');
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    window.addEventListener('mousemove', e => {
        gsap.to(cursor, {
            duration: 0.2, // Durasi lebih singkat untuk responsivitas
            x: e.clientX,
            y: e.clientY,
            ease: 'power1.out'
        });
    });

    // Efek hover
    document.querySelectorAll('a, button, .feature-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 1.5, backgroundColor: 'var(--primary-color)', opacity: 0.5 });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', opacity: 1 });
        });
    });
    
    // --- 2. HEADER TRANSPARAN SAAT DI ATAS ---
    const header = document.querySelector('header');
    ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: self => {
            self.direction === -1 ? header.classList.remove('scrolled') : header.classList.add('scrolled');
        }
    });
    // Menghilangkan class 'scrolled' jika kembali ke paling atas
     window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            header.classList.remove('scrolled');
        }
    });


    // --- 3. GSAP ANIMATIONS ---
    gsap.registerPlugin(ScrollTrigger);

    // Animasi Parallax Hero Background
    gsap.to('.parallax-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Animasi Konten Hero
    gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
    });
    
    // Animasi Judul Section
    gsap.utils.toArray('.journey-intro h2, .journey-intro p, #how-to-play h2, #contact h2').forEach(el => {
        gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Animasi Kartu Fitur
    gsap.from('.feature-card', {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%',
        }
    });

    // Animasi Cara Kerja
    gsap.from('.step', {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 75%'
        }
    });
    
    // Animasi Kontak
     gsap.from('.contact-wrapper > p', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact-wrapper',
            start: 'top 70%',
        }
    });
});
