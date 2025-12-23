document.addEventListener('DOMContentLoaded', () => {
    initModeSwitcher();
    initTypewriter();
    initScrollInfinite();
});

/* --- 1. MODE SWITCHER LOGIC --- */
const initModeSwitcher = () => {
    const btnDev = document.getElementById('btn-dev');
    const btnHuman = document.getElementById('btn-human');
    const body = document.body;

    // Elements to toggle
    const devElements = document.querySelectorAll('.dev-content');
    const humanElements = document.querySelectorAll('.human-content');

    const setMode = (mode) => {
        if (mode === 'human') {
            body.classList.add('mode-human');
            btnHuman.classList.add('active');
            btnDev.classList.remove('active');

            // Toggle visibility
            toggleVisibility(devElements, false);
            toggleVisibility(humanElements, true);
        } else {
            body.classList.remove('mode-human');
            btnDev.classList.add('active');
            btnHuman.classList.remove('active');

            toggleVisibility(humanElements, false);
            toggleVisibility(devElements, true);
        }
    };

    const toggleVisibility = (elements, show) => {
        elements.forEach(el => {
            if (show) {
                el.classList.remove('hidden');
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
                el.classList.add('hidden');
            }
        });
    };

    btnDev.addEventListener('click', () => setMode('dev'));
    btnHuman.addEventListener('click', () => setMode('human'));

    // "Mis Pasiones" Logic
    const btnPassions = document.getElementById('btn-passions');
    if (btnPassions) {
        btnPassions.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor if it was one
            setMode('human'); // Switch to human mode
            // Smooth scroll to about section
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }
};

/* --- 2. TERMINAL TYPEWRITER EFFECT --- */
const initTypewriter = () => {
    /* 
       Optimized for the new HTML structure.
       Targetting .terminal-code if needed, but the current HTML uses static content for clarity.
       We can add a blinking cursor effect here if requested.
    */

    // For now, let's just make the cursor blink via CSS (already defined in styles?)
    // If we want a typing effect for the intro, we can add it here.
    console.log("Terminal initialized.");
};

/* --- 3. INFINITE SCROLL MARQUEE --- */
const initScrollInfinite = () => {
    const track = document.querySelector('.marquee-track');
    // If we need JS duplication we can do it here, but HTML already has it manually.
};
