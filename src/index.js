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

document.addEventListener("DOMContentLoaded", function () {
  const importirPage = document.getElementById("importir");

  if (importirPage) {
    importirPage.addEventListener("change", function () {
      if (this.value === "global") {
        window.location.href = "global.html";
      } else if (this.value === "US") {
        window.location.href = "market.html";
      }
    });
  }

  const togglePassword = document.getElementById("togglePassword");
  const loginForm = document.getElementById("loginForm");

  if (togglePassword) {
    togglePassword.addEventListener("click", function () {
      const passwordInput = document.getElementById("exampleInputPassword1");
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      this.classList.toggle("fa-eye-slash");
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("exampleInputEmail1").value;
      const password = document.getElementById("exampleInputPassword1").value;
      const errorMessage = document.getElementById("errorMessage");

      if (email === "kkp@mail.com" && password === "test123") {
        window.location.href = "artikelDashboard.html";
      } else {
        errorMessage.textContent = "Email atau password anda salah!";
      }
    });
  }
});

const dropZone = document.getElementById("dropZone");

dropZone.addEventListener("click", function () {
  document.getElementById("fileInput").click();
});

document
  .getElementById("fileInput")
  .addEventListener("change", handleFileSelect);

function handleDragOver(event) {
  event.preventDefault();
  dropZone.classList.add("border-primary");
}

function handleDragLeave(event) {
  event.preventDefault();
  dropZone.classList.remove("border-primary");
}

function handleDrop(event) {
  event.preventDefault();
  dropZone.classList.remove("border-primary");

  const files = event.dataTransfer.files;
  handleFiles(files);
}

function handleFileSelect(event) {
  const files = event.target.files;
  handleFiles(files);
}

function handleFiles(files) {
  const fileSizeLimit = 10 * 1024 * 1024; // 10 MB in bytes

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.size > fileSizeLimit) {
      alert("File size exceeds the limit of 10 MB.");
      return;
    }
    // You can handle the file here (e.g., upload it to server)
    alert.log("File selected:", file.name);
  }
}

// uplod file div

const bpsToggle = document.getElementById("bps");
const uncomToggle = document.getElementById("uncom");
const bpsDiv = document.getElementById("bpsDiv");
const uncomDiv = document.getElementById("uncomDiv");

uncomToggle.addEventListener("click", () => {
  if (bpsToggle.classList.contains("active")) {
    bpsToggle.classList.remove("active");
    uncomToggle.classList.add("active");
    bpsDiv.classList.add("d-none");
    uncomDiv.classList.remove("d-none");
    bpsToggle.addEventListener("click", () => {
      bpsToggle.classList.add("active");
      uncomToggle.classList.remove("active");
      bpsDiv.classList.remove("d-none");
      uncomDiv.classList.add("d-none");
    });
  }
});

const uplodButton = document.getElementById("uplodBtn");
const uplodTable = document.getElementById("uplodTable");

uplodButton.addEventListener("click", () => {
  if (uplodTable.classList.contains("d-none")) {
    uplodTable.classList.toggle("d-none");
  }
});

const adminCmsToggle = document.getElementById("adminCms");
const adminApiToggle = document.getElementById("adminApi");
const cmsDiv = document.getElementById("cmsDiv");
const apiDiv = document.getElementById("apiDiv");

adminApiToggle.addEventListener("click", () => {
  if (adminCmsToggle.classList.contains("active")) {
    adminCmsToggle.classList.remove("active");
    adminApiToggle.classList.add("active");
    cmsDiv.classList.add("d-none");
    apiDiv.classList.remove("d-none");
    adminCmsToggle.addEventListener("click", () => {
      adminCmsToggle.classList.add("active");
      adminApiToggle.classList.remove("active");
      cmsDiv.classList.remove("d-none");
      apiDiv.classList.add("d-none");
    });
  }
});

// active link in different pages
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".active-side")?.forEach((element) => {
      element.classList.remove("active-side");
    });

    link.classList.add("active-side");
  });
});

const currentPath = window.location.pathname;

navLinks.forEach((link) => {
  const linkPath = link.getAttribute("href");

  if (currentPath.includes(linkPath) && linkPath !== "/") {
    link.classList.add("active-side");
  }
});
