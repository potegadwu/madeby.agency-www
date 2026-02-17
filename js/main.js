/* ============================================
   madeby.agency — Interactive Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Burger Menu Logic ---
    const burger = document.getElementById('burger');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuLinks = document.querySelectorAll('.menu-link');

    if (burger && menuOverlay) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menuOverlay.classList.toggle('active');

            // Lock body scroll when menu is open
            if (menuOverlay.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80; // Header height
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // --- Newsletter Form Submission (Simulated) ---
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = newsletterForm.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'WYSYŁANIE...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.textContent = 'DZIĘKUJEMY!';
                btn.style.background = '#FFF500';
                btn.style.color = '#3D2B24';
                btn.style.opacity = '1';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                    newsletterForm.reset();
                }, 3000);
            }, 1000);
        });
    }

});
