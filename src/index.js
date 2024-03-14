$(document).ready(function () {
  $(".slick-carousel").slick({
    autoplay: true, // Aktifkan autoplay
    autoplaySpeed: 2000, // Atur kecepatan autoplay (ms)
    arrows: false, // Tampilkan tombol navigasi prev/next
    dots: true, // Tampilkan titik navigasi
    slidesToShow: 3,
    slidesToScroll: 3,
  });
});
