$(document).ready(function() {

    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false

    });
    $(".testimonial_slide").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<i class ="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i >']

    });
    $(".expert_doctor_slider").owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<i class ="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i >'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            766: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 4
            }
        }

    });


});

// all class selector

const stickyHeader = document.querySelector('.header_menu');


// sticky menu on scroll envent
window.addEventListener('scroll', function() {
    stickyHeader.classList.toggle('sticky', window.scrollY > 300)
});