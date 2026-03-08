import $ from 'jquery';

$(function () {
  $(window).on('scroll', function () {
    parallaxScroll();
  });

  function parallaxScroll() {
    const scrolled = $(window).scrollTop() as number;
    $("#parallax-bg-1").css("top", (0 - scrolled * 0.25) + "px");
    $("#parallax-bg-2").css("top", (0 - scrolled * 0.4) + "px");
    $("#parallax-bg-3").css("top", (0 - scrolled * 0.75) + "px");
  }
});
