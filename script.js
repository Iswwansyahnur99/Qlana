// script.js
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. KURSOR KUSTOM ---
    const cursor = document.querySelector('.cursor');
    window.addEventListener('mousemove', e => {
        gsap.to(cursor, {
            x: e.clientX - cursor.offsetWidth / 2,
            y: e.clientY - cursor.offsetHeight / 2,
            duration: 0.5,
            ease: 'power3.out'
        });
    });

    // Efek hover pada elemen interaktif
    document.querySelectorAll('a, .feature-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 2, backgroundColor: 'var(--primary-color)', border: 'none' });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', border: '2px solid var(--primary-color)' });
        });
    });

    // --- 2. 3D SPLINE ELEMENT ---
    const splineContainer = document.querySelector('.spline-container');
    const splineApp = document.createElement('spline-viewer');
    splineApp.setAttribute('url', 'https://prod.spline.design/hCv0f-aW40NI3bTx/scene.splinecode');
    splineContainer.appendChild(splineApp);

    // --- 3. GSAP ANIMATIONS ---
    gsap.registerPlugin(ScrollTrigger);
    
    // Animasi Teks Hero
    const heroTitle = new SplitType('.reveal-type', { types: 'words' });
    const heroWords = heroTitle.words;

    gsap.fromTo(heroWords, 
        { y: 115 }, 
        { y: 0, duration: 1.3, ease: 'power4.out', stagger: 0.05, delay: 1 }
    );
    
    // Animasi Tombol & Paragraf Hero
    gsap.fromTo('.cta-button, .hero-content p', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: 1.8 }
    );
    
    // Animasi Judul Section saat di-scroll
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Animasi Kartu Fitur (stagger)
    gsap.from('.feature-card', {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%',
        }
    });

    // Animasi Langkah 'Cara Kerja' (stagger)
    gsap.utils.toArray('.step').forEach(step => {
        gsap.fromTo(step, 
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: step,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
    
    // Animasi Kontak
    gsap.from('.contact-wrapper > *', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
        }
    });

});
