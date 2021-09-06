let tabs = function(){
    $('.tabs-navigation__item').click(function(){
       let tabName = $(this).attr('show-tab'),
          tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
          tab = $(tabsBody).find('.' + tabName);
       $(this).addClass ('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
       $(tab).addClass('tab--active').siblings().removeClass('tab--active');
    });
 };
 
 let tabsMulti = function(){
   $('.tabs-multi__item').click(function(){
      let tabNameM = $(this).attr('show-tab'),
         tabsBodyM = $(this).closest('.tabs__multi').find('.tabs-multi__body')[0],
         tabMulti = $(tabsBodyM).find('.' + tabNameM);
      $(this).addClass ('tabs-multi__item--active').siblings().removeClass('tabs-multi__item--active');
      $(tabMulti).addClass('tab-multi--active').siblings().removeClass('tab-multi--active');
   });
};


$(document).ready(function () {
   $('.accordeon__title').click(function () {
      $(this).toggleClass('active').next().slideToggle();
      $('.accordeon__title').not(this).removeClass('active').next().slideUp();
     });
});

$('.stages-slider').slick({
   centerMode: true,
   centerPadding: '60px',
   slidesToShow: 3,
   dots: true,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 1500,
   infinite: true,
   responsive: [
     {
       breakpoint: 768,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 3
       }
     },
     {
       breakpoint: 480,
       settings: {
          dots: false,
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
       }
     }
   ]
 });

         $('.one').hover(function(){
            $('.oneA').addClass('hovered');
         }, function() {
            $('.oneA').removeClass('hovered');
         });
         $('.two').hover(function(){
            $('.twoA').addClass('hovered');
         }, function() {
            $('.twoA').removeClass('hovered');
         });
         $('.three').hover(function(){
            $('.threeA').addClass('hovered');
         }, function() {
            $('.threeA').removeClass('hovered');
         });
         $('.four').hover(function(){
            $('.fourA').addClass('hovered');
         }, function() {
            $('.fourA').removeClass('hovered');
         });
         $('.fife').hover(function(){
            $('.fifeA').addClass('hovered');
         }, function() {
            $('.fifeA').removeClass('hovered');
         });
         $('.six').hover(function(){
            $('.sixA').addClass('hovered');
         }, function() {
            $('.sixA').removeClass('hovered');
         });
         $('.seven').hover(function(){
            $('.sevenA').addClass('hovered');
         }, function() {
            $('.sevenA').removeClass('hovered');
         });
tabs();
tabsMulti();
 