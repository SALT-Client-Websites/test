<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title><?php echo $currentPageTitle ?? 'Whispering Pine Apartments'; ?></title>

  <!-- Meta tags -->
  <meta name="description" content="Whispering Pine Apartments in Paulding, Ohio offer spacious 2-bedroom apartments with comfortable living in a quiet small-town community. Great value, convenient location, and a welcoming place to call home.">
  <meta name="keywords" content="Whispering Pine Apartments, Paulding Ohio apartments, apartments for rent in Paulding OH, 2 bedroom apartments Paulding Ohio, Paulding Ohio rentals, small town apartment living, affordable apartments Paulding OH, value apartments Ohio">
  <meta property="og:title" content="Whispering Pine Apartments – 2 Bedroom Apartments in Paulding, Ohio">
  <meta property="og:description" content="Discover comfortable 2-bedroom apartments in Paulding, Ohio. Whispering Pine Apartments offer great value living in a quiet, small-town setting with the space and comfort you need.">
  <meta property="og:image:alt" content="Whispering Pine Paulding Ohio Apartments">
  <meta property="og:url" content="https://www.liveatwhisperingpine.com/">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Whispering Pine Paulding Ohio Apartments">
  <meta name="twitter:description" content="Whispering Pine Apartments in Paulding, Ohio offer spacious 2-bedroom apartments with comfortable living in a quiet small-town community.">
  <meta name="twitter:image" content="./assets/images/wp_logo.png">

  <!-- Links -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="./assets/css/index.css">
  <link rel="stylesheet" href="./assets/css/blog.css">
  <link rel="icon" href="./assets/images/whispering_pines.ico" type="ico">
  <link rel="canonical" href="https://www.liveatwhisperingpine.com/">


  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
  <!-- Google recaptcha -->
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <script>
    function enableSubmitButtonInContactForm() {
      var recaptchaResponse = grecaptcha.getResponse();
      if (recaptchaResponse.length !== 0) {
        document.getElementById('contact-form').disabled = false;
      }
    }
    function enableSubmitButtonInStorageForm() {
      var recaptchaResponse = grecaptcha.getResponse();
      if (recaptchaResponse.length !== 0) {
        document.getElementById('storage-form-submit').disabled = false;
      }
    }
  </script>

  <!-- Schema Markup for Higher Google Ranking (JSON-LD) -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "Whispering Pine Rental",
      "description": "Cozy Colorado cabin rental surrounded by pine trees, mountain views, hot tub, hiking and family-friendly outdoor activities.",
      "image": "https://www.liveatwhisperingpine.com/assets/images/wp_logo.png",
      "url": "https://www.liveatwhisperingpine.com",
      "telephone": "419-352-5620",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1001 W Wayne St, Apt 6B",
        "addressLocality": "Paulding",
        "addressRegion": "OH",
        "postalCode": "45879",
        "addressCountry": "US"

      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.1370",
        "longitude": "‑84.5800"
      },
      "amenityFeature": [{
          "@type": "LocationFeatureSpecification",
          "name": "Hot Tub",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Mountain View",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Free WiFi",
          "value": true
        }
      ]
    }
  </script>

</head>

<body>

  <header>
    <div class="container wrap">
      <div class="logo">
        <a href="index.php">
          <img src="assets/images/logo.png" alt="logo" class="logo-img">
        </a>
      </div>

      <!-- Hamburger Icon -->
      <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav id="nav-menu">
        <a id="abouts" href="#about" style="display:flex">ABOUT US</a>
        <a id="amenity" href="#amenities">AMENITIES</a>
        <a id="galleries" href="#gallery">GALLERY</a>
        <a id="blog-link" href="#blogs">BLOG</a>
        <a id="storage-link" href="#storage-units">STORAGE UNITS</a>
        <a id="contacts" href="#contact" class="btn btn-primary">CONTACT US</a>
      </nav>
    </div>
  </header>