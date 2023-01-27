
$(function () {
    $(".mobile-menu").click(function (event) {
        event.stopPropagation();
        $("#hamburger-menu").addClass("open");
        $('.menu-content').addClass("open");
        $('.menu-content').addClass("open");
        $('.mobile-menu-content').addClass('visible');
        $('.menu-close').addClass('visible');
        smoother.paused(true);
    });

    $(".menu-close").click(function (event) {
        event.stopPropagation();
        $("#hamburger-menu").removeClass("open");
        $('.menu-content').removeClass("open");
        $('.mobile-menu-content').removeClass('visible');
        $('.menu-close').removeClass('visible');
        $('.menu-tab .tabs section').removeClass("active");
        smoother.paused(false);
    });

    $(".search-button").click(function (event) {
        event.stopPropagation();
        smoother.paused(true);
    });

    $(".search-close").click(function (event) {
        event.stopPropagation();
        smoother.paused(false);
    });

    $(".lang-button").click(function (event) {
        event.stopPropagation();
        smoother.paused(true);
    });

    $(".lang-close").click(function (event) {
        event.stopPropagation();
        smoother.paused(false);
    });
});


$(document).ready(function () {
    $(function () {
        var header = $("header");

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            }
        });
    });
});


// Hide Header
$(document).ready(function () {
    'use strict';
    var c, currentScrollTop = 0,
        navbar = $('header');

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;

        console.log(a);
    });
})


$(document).ready(function () {
    ( function( $ ) {
        // Variables
        const $tabLink = $( '#tabs-section .tab-link' );
        const $tabBody = $( '#tabs-section .tab-content' );
        let timerOpacity;
    
        // Toggle Class
        const init = () => {
            // Menu Click
            $tabLink.off( 'click' ).on( 'click', function( e ) {
                // Prevent Default
                e.preventDefault();
                e.stopPropagation();
    
                // Clear Timers
                window.clearTimeout( timerOpacity );
    
                // Toggle Class Logic
                // Remove Active Classes
                $tabLink.removeClass( 'active ' );
                $tabBody.removeClass( 'active ' );
                $tabBody.removeClass( 'active-content' );
    
                // Add Active Classes
                $( this ).addClass( 'active' );
                $( $( this ).attr( 'href' ) ).addClass( 'active' );
    
                // Opacity Transition Class
                timerOpacity = setTimeout( () => {
                    $( $( this ).attr( 'href' ) ).addClass( 'active-content' );
                }, 50 );
            } );
        };
        // Document Ready
        $( function() {
            init();
        } );
    }( jQuery ) );
});


$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;
    
        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click',
            { el: this.el, multiple: this.multiple },
            this.dropdown);
    };
  
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
            $this = $(this),
            //this is the ul.submenuItems
            $next = $this.next();
    
        $next.slideToggle();
        $this.parent().toggleClass('open');
    
        if(!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
    }
  
    var accordion = new Accordion($('.accordion-menu'), false);
})
