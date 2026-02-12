function hideSectionsOnLoad() {
  const sections = [
    "blog",
    "post-one",
    "post-two",
    "post-three",
    "post-four",
    "post-five",
    "post-six",
    "footer-2",
  ];

  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = "none";
    }
  });
}

function showPostByClickingSeeMore(btnId, idTohide) {
  $(btnId).click(function (e) {
    e.preventDefault();

    const idToShow = btnId.slice(0, -6);

    idTohide.forEach((e) => {
      $(e).hide();
    });

    $(idToShow).show();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Dynamic date year
document.getElementById("wp2-year").textContent = new Date().getFullYear();

// Mobile View hamburger drawer
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Close menu when any link inside navMenu is clicked
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
  });
});

// Go to section when nav menu is clicked
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const headerOffset = 100;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// Gallery section slider in mobile view every 3 seconds
const screenWidth = window.innerWidth;
const carousel = document.querySelector(".gallery-grid") ?? "";
const slides = document.querySelectorAll(".slide");

let index = 0;
let startX = 0;
let endX = 0;

function autoSlide() {
  index++;
  if (index >= slides.length) index = 0;

  if (screenWidth <= 768) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }
}

setInterval(autoSlide, 4000);

// ----------------------------
//      TOUCH SWIPE SUPPORT
// ----------------------------

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;

  let diff = startX - endX;

  // SWIPE LEFT → next slide
  if (diff > 50) {
    index++;
    if (index >= slides.length) index = 0;
  }

  // SWIPE RIGHT → previous slide
  if (diff < -50) {
    index--;
    if (index < 0) index = slides.length - 1;
  }

  // Apply slide movement
  if (screenWidth <= 768) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }
});

function pageShower(postBtn, post, sectionToShow) {
  postBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let sectionsToHide = [
      "about",
      "amenities",
      "gallery",
      "contact",
      "hero",
      "map",
      "cta",
      "footer",
      "blog",
      "post-one",
      "post-two",
      "post-three",
      "post-four",
      "post-five",
      "post-six",
    ];

    sectionsToHide.filter((section) => section != sectionToShow);

    sectionsToHide.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        section.style.display = "none";
      }
    });

    post.style.display = "block";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    showFooter2();
  });
}

// Handle page / post shower
function blogPostShower() {
  const postButtons = [
    "post-one-btn",
    "post-two-btn",
    "post-three-btn",
    "post-four-btn",
    "post-five-btn",
    "post-six-btn",
  ];

  postButtons.forEach((button) => {
    const postName = button.replace("-btn", "");
    const postBtn = document.getElementById(button);
    const postId = document.getElementById(postName);
    pageShower(postBtn, postId, postName);
  });
}

// FORM VALIDATION + AJAX SUBMISSION HANDLER
$(document).ready(function () {
  hideSectionsOnLoad();

  blogPostShower();

  // Handle "You Might Also Like" buttons for each post
  showPostByClickingSeeMore(`#post-one-btn-1`, [
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-two-btn-1`, [
    "#post-one",
    "#post-three",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-one-btn-2`, [
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-two-btn-2`, [
    "#post-one",
    "#post-three",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-three-btn-2`, [
    "#post-one",
    "#post-two",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-four-btn-2`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-five-btn-2`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-six-btn-2`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-five",
  ]);
  showPostByClickingSeeMore(`#post-one-btn-3`, [
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-two-btn-3`, [
    "#post-one",
    "#post-three",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-three-btn-3`, [
    "#post-one",
    "#post-two",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-four-btn-3`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-five-btn-3`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-six-btn-3`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-five",
  ]);
  showPostByClickingSeeMore(`#post-one-btn-4`, [
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-two-btn-4`, [
    "#post-one",
    "#post-three",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-three-btn-4`, [
    "#post-one",
    "#post-two",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-four-btn-4`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-five-btn-4`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-six-btn-4`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-five",
  ]);
  showPostByClickingSeeMore(`#post-one-btn-5`, [
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-two-btn-5`, [
    "#post-one",
    "#post-three",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-three-btn-5`, [
    "#post-one",
    "#post-two",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-four-btn-5`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-five-btn-5`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-six-btn-5`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-five",
  ]);
  showPostByClickingSeeMore(`#post-one-btn-6`, [
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-two-btn-6`, [
    "#post-one",
    "#post-three",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-three-btn-6`, [
    "#post-one",
    "#post-two",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-four-btn-6`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-five-btn-6`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-six-btn-6`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-five",
  ]);
  showPostByClickingSeeMore(`#post-three-btn-1`, [
    "#post-one",
    "#post-two",
    "#post-four",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-four-btn-1`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-five",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-five-btn-1`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-six",
  ]);
  showPostByClickingSeeMore(`#post-six-btn-1`, [
    "#post-one",
    "#post-two",
    "#post-three",
    "#post-four",
    "#post-five",
  ]);

  $("#rental-form").submit(function (e) {
    e.preventDefault(); // Prevent default submission

    const form = $(this);
    const submitBtn = form.find('button[type="submit"]');
    const msgBox = form.find("#form-message");
    const originalText = submitBtn.text();

    // Get the move-in date value
    const moveinDateVal = form.find('input[name="move_in"]').val();

    if (moveinDateVal) {
      const selectedDate = new Date(moveinDateVal);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // ignore time portion

      if (selectedDate < today) {
        msgBox.html(
          '<div style="padding:10px; background:#f8d7da; color:#721c24; border-radius:6px;">Move-in date cannot be earlier than today.</div>'
        );
        return; // stop submission
      }
    }

    // Disable button & show loading
    submitBtn.prop("disabled", true).text(submitBtn.data("loading-text"));

    // Delay 7 seconds to let any plugin DOM updates finish
    setTimeout(function () {
      form[0].reset();
      if (typeof grecaptcha !== "undefined") grecaptcha.reset();
    }, 7000);

    $.ajax({
      url: form.attr("action"),
      type: form.attr("method"),
      data: form.serialize(),
      dataType: "json",
      success: function (response) {
        if (response.success) {
          // Success message
          msgBox.html(
            '<div style="padding:10px; background:#d4edda; color:#155724; border-radius:6px;">' +
              response.message +
              "</div>"
          );

          setTimeout(function () {
            submitBtn.prop("disabled", false).text(originalText);
            msgBox.fadeOut("slow");
          }, 3000);
        } else {
          msgBox.html(
            '<div style="padding:10px; background:#f8d7da; color:#721c24; border-radius:6px;">' +
              response.message +
              "</div>"
          );
        }
        submitBtn.prop("disabled", false).text(originalText);
        setTimeout(function () {
          msgBox.fadeOut("slow");
        }, 7000);
      },
      error: function () {
        msgBox.html(
          '<div style="padding:10px; background:#f8d7da; color:#721c24; border-radius:6px;">An error occurred. Please try again.</div>'
        );
        submitBtn.prop("disabled", false).text(originalText);
      },
    });
  });

  // Scroll event handler
  function scrollTo(event) {
    const targetSelector = event.currentTarget.getAttribute("href");
    const target = document.querySelector(targetSelector);

    if (!target) return;

    const headerOffset = 100;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  // When about is clicked
  const about = document.getElementById("abouts");
  about.addEventListener("click", (event) => {
    event.preventDefault();

    hideBlogPage();
    showSectionExeptBlog();
    scrollTo(event);
  });

  // When amenities is clicked
  const amenity = document.getElementById("amenity");
  amenity.addEventListener("click", (event) => {
    event.preventDefault();

    hideBlogPage();
    showSectionExeptBlog();
    scrollTo(event);
  });

  // When gallery is clicked
  const gallery = document.getElementById("galleries");
  gallery.addEventListener("click", (event) => {
    event.preventDefault();

    hideBlogPage();
    showSectionExeptBlog();
    scrollTo(event);
  });

  // When contact us is clicked
  const contacts = document.getElementById("contacts");
  contacts.addEventListener("click", (event) => {
    event.preventDefault();

    hideBlogPage();
    showSectionExeptBlog();
    scrollTo(event);
  });

  function showFooter2() {
    const footer2 = document.getElementById("footer-2");
    footer2.style.display = "flex";
  }
});

function showSectionExeptBlog() {
  const sectionsToShow = [
    "about",
    "amenities",
    "gallery",
    "contact",
    "hero",
    "map",
    "cta",
    "footer",
  ];

  sectionsToShow.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = "flex";
    }
  });
}

function hideBlogPage() {
  const blogSection = document.getElementById("blog");
  blogSection.style.display = "none";
}

// Hide all section when blog is clicked
document.addEventListener("DOMContentLoaded", () => {
  const blogLink = document.getElementById("blog-link");
  const blogSection = document.getElementById("blog");
  const footer2 = document.getElementById("footer-2");

  const sectionsToHide = [
    "about",
    "amenities",
    "gallery",
    "contact",
    "hero",
    "map",
    "cta",
    "footer",
    "post-one",
    "post-two",
    "post-three",
    "post-four",
    "post-five",
    "post-six",
  ];

  blogLink.addEventListener("click", (event) => {
    event.preventDefault();

    blogSection.style.display = "block";
    footer2.style.display = "flex";

    sectionsToHide.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        section.style.display = "none";
      }
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
