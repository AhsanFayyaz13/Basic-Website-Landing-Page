// Change nav color on scroll
window.addEventListener('scroll', function () {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Change nav item color on hover
const navItems = document.querySelectorAll('nav a');

navItems.forEach(item => {
    item.addEventListener('mouseover', function () {
        this.style.color = '#fd7419ff';
        this.style.transition = 'color 0.3s ease';
        this.style.fontSize = '1.1rem';
        
    });

    item.addEventListener('mouseout', function () {
        if (window.scrollY > 50) {
            this.style.color = 'black';
        } else {
            this.style.color = 'white';
        }
    });
});