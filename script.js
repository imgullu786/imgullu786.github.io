
/*_____________________scroll section active_________________*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll ('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector ('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

  

/*_____________________home menu icon_________________*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}


window.onscroll = () => {  
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active'); 
};

/*_____________________scroll reveal_________________*/
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-content, .services-container, .contact form, .social-handle, .skills img', { origin: 'bottom' });

/*_____________________typed js_________________*/
var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'App Developer', 'Open Source Contributer'],
    typeSpeed: 100,
    loop: true
  });