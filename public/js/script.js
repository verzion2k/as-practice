$(document).ready(function() {

    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("toTopBtn").style.display = "block";
        } else {
            document.getElementById("toTopBtn").style.display = "none";
        }
    }

    $("#toTopBtn").click(function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    $('.header').parallax({imageSrc: '/img/header-image.jpeg'});
    $('.skills').parallax({imageSrc: '/img/skills.jpeg'});

    $(function() {  
        jQuery.scrollSpeed(150, 700);     
    });

    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout: 4000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});