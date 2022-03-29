// loader
const loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
// =================carosel=============
$(".sliderWrapper").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// testimonial
$(".testimonialWrapper").slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// =============jquery file================
$(document).ready(function () {
  // =====================navbar==================
  $(window).scroll(function () {
    if (this.scrollY > 30) {
      $("#topBar").addClass("sticky");
    } else {
      $("#topBar").removeClass("sticky");
    }
    // ======================scroll up button==================
    if (this.scrollY > 100) {
      $(".scrollUpBtn").fadeIn();
    } else {
      $(".scrollUpBtn").fadeOut();
    }
  });

  // ===================progress bar=======================
  $(window)
    .scroll(function () {
      $("svg.radial-progress").each(function (index, value) {
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if (
          $(window).scrollTop() >
          $(this).offset().top - $(window).height() * 0.75 &&
          $(window).scrollTop() <
          $(this).offset().top + $(this).height() - $(window).height() * 0.25
        ) {
          // Get percentage of progress
          percent = $(value).data("percentage");
          // Get radius of the svg's circle.complete
          radius = $(this).find($("circle.complete")).attr("r");
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - (percent * circumference) / 100;
          // Transition progress for 1.25 seconds
          $(this)
            .find($("circle.complete"))
            .animate({ "stroke-dashoffset": strokeDashOffset }, 1250);
        }
      });
    })
    .trigger("scroll");

  // mobile menu
  $(".mobileMenu").click(function () {
    $(".menu").toggleClass("showMenu");
    $(".mobileMenu i").toggleClass("fa-times");
  });

  //click event scrollup btn
  $(".scrollUpBtn").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
    return false;
  });

  // switch icon drak
  $("#dark").click(function () {
    $(
      "#myAbout, #pricing, #education, .educationTitle, header#topBar, #contact, #certificate, #testimonial"
    ).toggleClass("darkColor");
    $(
      "#mySarvice, #contact .contactWrapper .column.left, .right,.scrollUpBtn i, #gallery"
    ).toggleClass("darkColor");
    $(".singleSarvice").toggleClass("serviceBackround");
    $("h1,h2,h3,h4,h5,h6, ul.mainMenuItem li a, .mobileMenu i").toggleClass(
      "whiteColor"
    );
    $("#youtuber").toggleClass("darkColor");
    $("#portfolio, ul.subMenu").toggleClass("portfolioDark");
    $("ul.mainMenuItem li:first-child a").toggleClass("liColor");
    $("ul.mainMenuItem li a:hover").toggleClass("liColor");
    $("#homeSlider").toggleClass("homeSliderDark");
    $("#dark").toggleClass("darkModeIcon");
  });
});

// ========================typed jquery===============================
var typed = new Typed(".typing", {
  strings: ["Freelancer", "Designer", "Developer"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});

// contextmenu disable
document.addEventListener("contextmenu",function(e){
   e.preventDefault();
});