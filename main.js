document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL REVEAL ANIMATION
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Berhenti mengamati setelah elemen muncul
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


    // 2. MAGNETIC HERO GRAPHIC EFFECT
    const heroGraphic = document.querySelector('.orbit-container');
    const heroText = document.querySelector('.hero-text');
    
    if (window.innerWidth > 992) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 40;
            const y = (window.innerHeight / 2 - e.pageY) / 40;

            if (heroGraphic) {
                heroGraphic.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
            if (heroText) {
                heroText.style.transform = `translate3d(${-x/2}px, ${-y/2}px, 0)`;
            }
        });
    }


    // 3. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "0.8rem 0";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
        } else {
            navbar.style.padding = "1.25rem 0";
            navbar.style.boxShadow = "none";
        }
    });


    // 4. SMOOTH SCROLL FOR ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});