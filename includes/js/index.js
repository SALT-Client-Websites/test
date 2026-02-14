// Get current page and post from URL
function getCurrentPageFromURL() {
  const path = window.location.pathname;
  const pathParts = path.split('/').filter(part => part !== '');
  
  let page = 'home';
  let post = '';
  
  if (pathParts.length > 0) {
    if (pathParts[0] === 'blog') {
      page = 'blog';
      if (pathParts.length > 1) {
        post = pathParts[1];
      }
    } else if (['about', 'amenities', 'gallery', 'contact'].includes(pathParts[0])) {
      page = pathParts[0];
    }
  }
  
  return { page, post };
}

// Helper functions for showing/hiding sections
function showSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = 'block';
  }
}

function hideSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = 'none';
  }
}

function showFooter2() {
  const footer2 = document.getElementById("footer-2");
  if (footer2) {
    footer2.style.display = "flex";
  }
}

// Handle page display based on current URL
function showPageBasedOnURL() {
  const { page, post } = getCurrentPageFromURL();
  
  // Hide all sections first
  hideSectionsOnLoad();
  
  if (page === 'blog' && post) {
    // Show specific blog post
    const postMapping = {
      'what-to-know-before-renting-apartment-paulding-ohio': 'post-one',
      'best-towns-live-near-van-wert-ohio-paulding-stands-out': 'post-two',
      'things-to-do-near-paulding-ohio-local-favorites-day-trips': 'post-three',
      'paulding-small-town-feel-big-comfort-close-home': 'post-four',
      'commuter-friendly-living-paulding-county': 'post-five',
      'local-dining-small-businesses-near-whispering-pines': 'post-six'
    };
    
    const postId = postMapping[post];
    if (postId) {
      showSection(postId);
      showFooter2();
    }
  } else if (page === 'blog') {
    // Show blog listing
    showSection('blog');
    showFooter2();
  } else if (page === 'home') {
    // Show home sections
    showSectionExeptBlog();
  } else {
    // Show specific section
    showSectionExeptBlog();
    // Scroll to specific section
    setTimeout(() => {
      const element = document.getElementById(page === 'about' ? 'abouts' : page);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}

// Initialize page based on current URL - REMOVED to avoid conflict with PHP

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
  const postTitles = {
    "#post-two-btn-1": "Best Towns to Live Near Van Wert, Ohio — And Why Paulding Stands Out",
    "#post-three-btn-1": "Things to Do Near Paulding, Ohio: From Local Favorites to Easy Day Trips",
    "#post-four-btn-1": "Paulding's Small-Town Feel: Big Comfort, Close to Home",
    "#post-five-btn-1": "Commuter-Friendly Living in Paulding County",
    "#post-six-btn-1": "Local Dining & Small Businesses Near Whispering Pines",
    "#post-one-btn-2": "What to Know Before Renting an Apartment in Paulding, Ohio",
    "#post-three-btn-2": "Things to Do Near Paulding, Ohio: From Local Favorites to Easy Day Trips",
    "#post-four-btn-2": "Paulding's Small-Town Feel: Big Comfort, Close to Home",
    "#post-five-btn-2": "Commuter-Friendly Living in Paulding County",
    "#post-six-btn-2": "Local Dining & Small Businesses Near Whispering Pines",
    "#post-one-btn-3": "What to Know Before Renting an Apartment in Paulding, Ohio",
    "#post-two-btn-3": "Best Towns to Live Near Van Wert, Ohio — And Why Paulding Stands Out",
    "#post-four-btn-3": "Paulding's Small-Town Feel: Big Comfort, Close to Home",
    "#post-five-btn-3": "Commuter-Friendly Living in Paulding County",
    "#post-six-btn-3": "Local Dining & Small Businesses Near Whispering Pines",
    "#post-one-btn-4": "What to Know Before Renting an Apartment in Paulding, Ohio",
    "#post-two-btn-4": "Best Towns to Live Near Van Wert, Ohio — And Why Paulding Stands Out",
    "#post-three-btn-4": "Things to Do Near Paulding, Ohio: From Local Favorites to Easy Day Trips",
    "#post-four-btn-4": "Paulding's Small-Town Feel: Big Comfort, Close to Home",
    "#post-five-btn-4": "Commuter-Friendly Living in Paulding County",
    "#post-six-btn-4": "Local Dining & Small Businesses Near Whispering Pines",
    "#post-one-btn-5": "What to Know Before Renting an Apartment in Paulding, Ohio",
    "#post-two-btn-5": "Best Towns to Live Near Van Wert, Ohio — And Why Paulding Stands Out",
    "#post-three-btn-5": "Things to Do Near Paulding, Ohio: From Local Favorites to Easy Day Trips",
    "#post-four-btn-5": "Paulding's Small-Town Feel: Big Comfort, Close to Home",
    "#post-six-btn-5": "Local Dining & Small Businesses Near Whispering Pines",
    "#post-one-btn-6": "What to Know Before Renting an Apartment in Paulding, Ohio",
    "#post-two-btn-6": "Best Towns to Live Near Van Wert, Ohio — And Why Paulding Stands Out",
    "#post-three-btn-6": "Things to Do Near Paulding, Ohio: From Local Favorites to Easy Day Trips",
    "#post-four-btn-6": "Paulding's Small-Town Feel: Big Comfort, Close to Home",
    "#post-five-btn-6": "Commuter-Friendly Living in Paulding County",
  };

  $(btnId).click(function (e) {
    e.preventDefault();

    const idToShow = btnId.slice(0, -6);

    idTohide.forEach((e) => {
      $(e).hide();
    });

    $(idToShow).show();

    // Update URL based on blog post title
    const title = postTitles[btnId];
    if (title) {
      // Create URL-friendly title from post title
      const urlTitle = title.toLowerCase()
        .replace(/[^a-z0-9\s-']/g, '') // Remove special characters except hyphens and apostrophes
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Replace multiple hyphens with single
      
      // Update URL - use clean SEO-friendly URL without navigation
      const newUrl = `/${urlTitle}`;
      history.pushState({ page: 'blog', post: urlTitle }, '', newUrl);
    }

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

    const href = this.getAttribute("href");
    
    // Skip if href is just "#"
    if (href === "#" || !href) {
      return;
    }

    const target = document.querySelector(href);
    
    // Skip if target element doesn't exist
    if (!target) {
      return;
    }

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

  const postTitles = {
    "post-one-btn": "What to Know Before Renting an Apartment in Paulding, Ohio",
    "post-two-btn": "Best Towns to Live Near Van Wert, Ohio — And Why Paulding Stands Out",
    "post-three-btn": "Things to Do Near Paulding, Ohio_ From Local Favorites to Easy Day Trips",
    "post-four-btn": "Paulding's Small-Town Feel_ Big Comfort, Close to Home",
    "post-five-btn": "Commuter-Friendly Living in Paulding County",
    "post-six-btn": "Local Dining & Small Businesses Near Whispering Pines"
  };

  postButtons.forEach((button) => {
    const postName = button.replace("-btn", "");
    const postBtn = document.getElementById(button);
    const postId = document.getElementById(postName);
    
    if (postBtn && postId) {
      postBtn.addEventListener("click", (event) => {
        event.preventDefault();
        
        // Hide all sections
        let sectionsToHide = [
          "about", "amenities", "gallery", "contact", "hero", "map", "cta", "footer",
          "blog", "post-one", "post-two", "post-three", "post-four", "post-five", "post-six"
        ];
        
        sectionsToHide.forEach((id) => {
          const section = document.getElementById(id);
          if (section) {
            section.style.display = "none";
          }
        });
        
        // Show selected post
        postId.style.display = "block";
        
        // Show footer2
        const footer2 = document.getElementById("footer-2");
        if (footer2) {
          footer2.style.display = "flex";
        }
        
        // Get blog post title and convert to URL
        const title = postTitles[button];
        
        if (title) {
          // Create URL-friendly title from post title
          const urlTitle = title.toLowerCase()
            .replace(/[^a-z0-9\s]+/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-'); // Replace multiple hyphens with single
          
          // Update URL - use clean SEO-friendly URL without navigation
          const newUrl = `/${urlTitle}`;
          history.pushState({ page: 'blog', post: urlTitle }, '', newUrl);
        }
        
        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
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
