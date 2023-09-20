/* MM Menu Open */
// document.addEventListener(
//     "DOMContentLoaded", () => {
//         new Mmenu( "#main_menu", {
//             "offCanvas": {
//                 "position": "left-front",
//                 // "page":{
//                 //     "selector": ".hero-inner-wrap",
//                 //     "insertMethod": "prepend",
//                 // },
//             },
//             "theme": "white",
//             "slidingSubmenus":false,
//             "scrollBugFix":{
//                 "fix": "true",
//             },
//             "navbar": false,
//             "navbars"	: [
//                 {
//                     position	: 'top',
//                     content		: [ '<a href="index.html" class="menu-logo"><img src="assets/images/menu-logo.svg" alt="Aura Sky Pool" /></a>', 'close' ]
//                 }, {
//                     position	: 'bottom',
//                     content		: [ '<div class="bae-btn-wrapper"><a href="#" class="btn"><span>BOOK AN EXPERIENCE</span></a></div><ul class="meniu-social-icons"><li><a href="#"><img src="assets/images/linkedin-m.svg" alt="Aura Sky Pool" /></a></li><li><a href="#"><img src="assets/images/trip_advisor-m.svg" alt="Aura Sky Pool" /></a></li><li><a href="#"><img src="assets/images/instagram-m.svg" alt="Aura Sky Pool" /></a></li><li><a href="#"><img src="assets/images/facebook-m.svg" alt="Aura Sky Pool" /></a></li></ul>' ]
//                 }
//             ]
//         });
//     }
// );
/* MM Menu Close */

/* Sticky Header Open */
// jQuery(window).scroll(function(){
//     var sticky = jQuery('.top-header'),
//         scroll = jQuery(window).scrollTop();
//     if (scroll >= 100) sticky.addClass('top-header-sticky');
//     else sticky.removeClass('top-header-sticky');
// });
/* Sticky Header Close */




/* Special Events Slider Open */
// jQuery('#specialEvents_slider').owlCarousel({
//     items:1,
//     loop:true,
//     margin:-376,
//     nav:true,
//     dots:true,
//     slideBy:1,
//     autoplay:true,
//     autoplayTimeout:8000,
//     autoplaySpeed:900,
//     dotsSpeed:900,
//     autoHeight:true,
//     navText: ["<div class='nav-button'><img src='assets/images/owl-arrow-left.svg' alt='Icon' /></div>", "<div class='nav-button'><img src='assets/images/owl-arrow-right.svg' alt='Icon' /></div>"],
//     responsive : {
//         0 : {
//             margin:-20,
//             nav:false,
//         },
//         767 : {
//             margin:-86,
//             nav:false,
//         },
//         991: {
//             margin:-86,
//             nav:true,
//         },
//         1281: {
//             margin:-191,
//             nav:true,
//         },
//         1441:{
//             margin:-376,
//             nav:true,
//         },
//     },
// });
/* Special Events Slider Close */


/*FAQ Open */
// jQuery( function() {
//     jQuery( ".faq li .accordion" ).accordion({
//         collapsible:true,
//         active:false,
//     });
// });
/*FAQ Close */

jQuery("#success_story_carousel").owlCarousel({
    // autoplay: true,
    autoplay: false,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      768: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 3
      }
    }
  });

