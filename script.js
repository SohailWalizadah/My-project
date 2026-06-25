window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hide');
    }, 800);
});
// ========== دکمه بازگشت به بالا ==========
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== هدر هنگام اسکرول ==========
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========== منوی همبرگری (موبایل) ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '20px';
        navLinks.style.background = '#141414';
        navLinks.style.padding = '24px';
        navLinks.style.borderRadius = '16px';
        navLinks.style.border = '1px solid rgba(255, 215, 0, 0.15)';
        navLinks.style.flexDirection = 'column';
        navLinks.style.gap = '16px';
        navLinks.style.minWidth = '180px';
        navLinks.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.display = 'none';
    });
});

// ========== اسکرول نرم ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== تایپینگ افکت ==========
const typingElement = document.querySelector('.typing');
const texts = [
    ' Professional Web Developer ',
    'Developer UI/UX',
    'Front-end Developer ',
    'High degital work '
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
        setTimeout(typeEffect, 100);
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeEffect, 500);
            return;
        }
        setTimeout(typeEffect, 50);
    }
}

typeEffect();

// ========== انیمیشن مهارت‌ها هنگام اسکرول ==========
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
}, { threshold: 0.3 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ========== انیمیشن کارت‌ها ==========
const cards = document.querySelectorAll('.project-card, .skill-card, .contact-card');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
});

// ========== فرم تماس ==========
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('your massge is sended to me , i will call you soon');
    contactForm.reset();
});


