$(document).ready(function() {

    /* Hamburger Menu */
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });

    /* Smooth Scroll Effec */
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.navbar__fixed').outerHeight()
        }, 500, 'linear');
    });

    /* Scroll To Top Button */
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

    /* Parallax */
    $('.header').parallax({imageSrc: '/img/header-image.jpeg'});
    $('.skills').parallax({imageSrc: '/img/skills.jpeg'});

    /* Smooth Scrolling Effect */
    $(function() {  
        jQuery.scrollSpeed(150, 700);     
    });

    /* Image Gallery */
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

    /* Sticky Navbar */
    var stickyNavTop = $('.navbar__fixed').offset().top;
		   	
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); 

        if (scrollTop > stickyNavTop) { 
            $('.navbar__fixed').addClass('sticky');
            $('.navbar__placeholder').css('margin-top', $('.navbar__fixed').outerHeight());
        } else {
            $('.navbar__fixed').removeClass('sticky');
            $('.navbar__placeholder').attr('style', '');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

});