$(function () {
  $("#login-show").click(function () {
    $("#login-modal").fadeIn();
  });

  $("#signup-show").click(function () {
    $("#signup-modal").fadeIn();
  });

  $(".close-modal").click(function () {
    $("#login-modal").fadeOut();
    $("#signup-modal").fadeOut();
  });

  var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper(".gallery-top", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: galleryThumbs,
    },
    autoplay: {
      delay: 6000,
    },
  });

  $("#top-btn").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });

  $(window).scroll(function () {
    $(".fadein").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});
