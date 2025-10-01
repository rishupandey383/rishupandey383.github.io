document.addEventListener('DOMContentLoaded', () => {

    // --- Sticky Navbar on Scroll ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // --- Advanced Typing Effect ---
    const typingText = document.querySelector('.typing-text');
    const phrases = ["Full Stack Developer", "Problem Solver", "Lifelong Learner"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        const currentText = currentPhrase.substring(0, charIndex);
        typingText.textContent = currentText;
        typingText.classList.add('stop-blinking');

        if (!isDeleting && charIndex < currentPhrase.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = !isDeleting;
            typingText.classList.remove('stop-blinking');
            if (!isDeleting) {
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            setTimeout(typeEffect, 1200);
        }
    }
    typeEffect();
    
    // --- On-Scroll Fade-in Animation for individual elements ---
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        scrollObserver.observe(element);
    });

    // --- Mobile Menu Toggle ---
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLi = document.querySelectorAll('nav .nav-links li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

});
document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggle Functionality ---
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const currentTheme = localStorage.getItem('theme');
    
    // Set the initial theme based on localStorage or system preference
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            themeToggle.checked = true;
        }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.checked = true;
    }
    
    // Toggle theme when checkbox is clicked
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.setAttribute('data-theme', 'light');
                themeToggle.checked = true;
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeToggle.checked = false;
            }
        }
    });

    // --- Rest of your existing JavaScript code ---
    // Sticky Navbar on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Advanced Typing Effect
    const typingText = document.querySelector('.typing-text');
    const phrases = ["Full Stack Developer", "Problem Solver", "Lifelong Learner"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        const currentText = currentPhrase.substring(0, charIndex);
        typingText.textContent = currentText;
        typingText.classList.add('stop-blinking');

        if (!isDeleting && charIndex < currentPhrase.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = !isDeleting;
            typingText.classList.remove('stop-blinking');
            if (!isDeleting) {
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            setTimeout(typeEffect, 1200);
        }
    }
    typeEffect();
    
    // On-Scroll Fade-in Animation
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        scrollObserver.observe(element);
    });

    // Mobile Menu Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Active Nav Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLi = document.querySelectorAll('nav .nav-links li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

});