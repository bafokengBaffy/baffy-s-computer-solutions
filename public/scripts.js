//scripts.js

// Preloader
$(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
        $(this).remove();   
    });
});

// Header scroll effect
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
        $('.header').addClass('scrolled');
    } else {
        $('.header').removeClass('scrolled');
    }
});

// Smooth scrolling
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
    );
});

// Back to top button
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});

// Portfolio filtering
$('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    var filterValue = $(this).attr('data-filter');

    $('.portfolio-item').each(function () {
        if (filterValue === 'all' || $(this).attr('data-category') === filterValue) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

// Skill bars animation
$(window).on('scroll', function () {
    $('.skill-progress').each(function () {
        var skillPosition = $(this).offset().top;
        var windowHeight = $(window).height();
        var scrollPosition = $(window).scrollTop() + windowHeight;

        if (scrollPosition > skillPosition) {
            var width = $(this).attr('data-width');
            $(this).css('width', width + '%');
        }
    });
});

// Typing effect
var words = [
    "Web & mobile Development",
    "Network Solutions",
    "IT Consulting",
    "Software Development",
    "Cloud Services",
    "Machine Learning",
    "Computer Support"
];

var wordIndex = 0;
var charIndex = 0;
var isDeleting = false;
var typingSpeed = 100;

function type() {
    var currentWord = words[wordIndex];
    var displayText = currentWord.substring(0, charIndex);

    $('.typing-text b').text(displayText);

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, typingSpeed / 2);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, typingSpeed * 2);
    }
}

// Initialize typing effect
$(document).ready(function () {
    setTimeout(type, 1000);

    // Initialize WOW.js for animations
    new WOW().init();
});

// Portfolio hover effect
$('.portfolio-item').hover(
    function() {
        $(this).find('.portfolio-overlay').css('opacity', '1');
        $(this).find('.overlay-content').css('transform', 'translateY(0)');
    },
    function() {
        $(this).find('.portfolio-overlay').css('opacity', '0');
        $(this).find('.overlay-content').css('transform', 'translateY(20px)');
    }
);


