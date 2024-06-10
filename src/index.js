$(document).ready(function () {
  $(".slick-carousel").slick({
    autoplay: true, // Aktifkan autoplay
    autoplaySpeed: 2000, // Atur kecepatan autoplay (ms)
    arrows: false, // Tampilkan tombol navigasi prev/next
    dots: true, // Tampilkan titik navigasi
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// scrolling top
$(document).ready(function () {
  // Show or hide the button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollToTopBtn").fadeIn();
    } else {
      $("#scrollToTopBtn").fadeOut();
    }
  });

  // Smooth scrolling to top
  $("#scrollToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});

document.getElementById("importir").addEventListener("change", function () {
  if (this.value === "global") {
    window.location.href = "global.html";
  } else if (this.value === "US") {
    window.location.href = "market.html";
  }
});
