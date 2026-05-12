<section id="storage-units" style="display:none;">

  <!-- Hero Banner -->
  <div class="su-hero">
    <div class="su-hero-overlay"></div>
    <div class="su-hero-content">
      <div class="hero-tag">67 UNITS AVAILABLE</div>
      <h1>Self Storage Units</h1>
      <p>Secure, affordable storage for personal belongings, household items, business inventory, and more — right here in Paulding.</p>
    </div>
  </div>

  <!-- Intro + Unit Types -->
  <div class="su-section container">

    <div class="su-intro">
      <h2 class="section-title">Simple, Convenient Storage</h2>
      <p style="color:var(--muted); margin-top:0.6rem; line-height:1.7;">
        Need extra space? We offer convenient, affordable self-storage units for personal belongings,
        household items, business inventory, tools, seasonal equipment, and more.
        With <strong>67 total storage units available</strong>, we have options to fit a variety of needs.
      </p>
      <p style="color:var(--muted); margin-top:0.8rem; line-height:1.7;">
        Whether you are moving, downsizing, organizing your home, or need extra room for your business,
        our storage units provide a practical solution close to home.
      </p>
    </div>

    <!-- Unit Cards -->
    <div class="su-units-grid">

      <!-- Small Unit -->
      <div class="su-unit-card">
        <div class="su-unit-badge su-badge-small">SMALL</div>
        <div class="su-unit-image-wrap">
          <img src="assets/images/wp_rental_units.png" alt="Small Storage Unit 5x10" class="su-unit-img">
        </div>
        <div class="su-unit-body">
          <div class="su-unit-size">5' × 10'</div>
          <div class="su-unit-price">$35 <span>/month</span></div>
          <p class="su-unit-desc">
            A great fit for boxes, small furniture, seasonal décor, tools, or personal storage.
            Comparable to the space of a walk-in closet.
          </p>
          <ul class="su-unit-features">
            <li>✔ &nbsp;Walk-in closet sized</li>
            <li>✔ &nbsp;Seasonal décor &amp; tools</li>
            <li>✔ &nbsp;Small furniture items</li>
            <li>✔ &nbsp;Personal storage boxes</li>
          </ul>
          <a href="#su-form" class="su-cta-btn">Reserve Small Unit</a>
        </div>
      </div>

      <!-- Large Unit -->
      <div class="su-unit-card su-unit-featured">
        <div class="su-unit-badge su-badge-large">LARGE</div>
        <div class="su-unit-image-wrap">
          <img src="assets/images/wp_rental_units.png" alt="Large Storage Unit 10x15" class="su-unit-img">
        </div>
        <div class="su-unit-body">
          <div class="su-unit-size">10' × 15'</div>
          <div class="su-unit-price">$70 <span>/month</span></div>
          <p class="su-unit-desc">
            Ideal for larger household items, furniture, equipment, business storage,
            or the contents of a small apartment. Comparable to the space of a small garage.
          </p>
          <ul class="su-unit-features">
            <li>✔ &nbsp;Small garage sized</li>
            <li>✔ &nbsp;Full apartment contents</li>
            <li>✔ &nbsp;Business inventory</li>
            <li>✔ &nbsp;Large furniture &amp; equipment</li>
          </ul>
          <a href="#su-form" class="su-cta-btn">Reserve Large Unit</a>
        </div>
      </div>

    </div>
  </div>

  <!-- Divider -->
  <div style="background:#e8ebdf; height:4px; margin:0;"></div>

  <!-- Contact Form -->
  <div class="su-form-section" id="su-form">
    <div class="contact-container" style="margin-top:0; padding-top:60px; padding-bottom:60px;">

      <!-- Left Info -->
      <div class="contact-left" style="max-width:30%;">
        <img src="./assets/images/whispering_pines_contact_us.png" class="contact-img" alt="Whispering Pines Storage">

        <div class="title-hours-container">
          <div>
            <div class="contact-title">Whispering Pine</div>
            <div class="contact-info">
              1001 W Wayne St Apt 6B<br>
              Paulding, OH 45879<br>
              Phone: (419) 443-6613<br>
              info@almarproperties.com
            </div>
          </div>
          <div>
            <div class="contact-hours-title">Office Hours</div>
            <div class="contact-hours">
              Mon - Fri: 10:00AM to 6:00PM<br>
              Sat: 10:00AM to 5:00PM<br>
              Sun: 11:00AM to 5:00PM
            </div>
          </div>
          <div style="margin-top:30px;">
            <div class="contact-hours-title" style="font-size:18px;">Storage Availability</div>
            <div class="contact-hours">
              Storage availability may vary.<br>
              Contact us today to check<br>
              current availability and<br>
              reserve the right unit.
            </div>
          </div>
        </div>
      </div>

      <!-- Right Form -->
      <div class="contact-form-wrapper">
        <div class="contact-form-title-container">
          <div>
            <div class="contact-form-title">Reserve a Storage Unit</div>
            <div class="contact-subtitle">Fill out the form below and we'll get back to you shortly.</div>
          </div>
          <img src="./assets/images/wp_logo.png" class="contact-title-img" alt="Whispering Pine logo" />
        </div>

        <form id="storage-form" action="./includes/functions/send_storage_inquiry.php" method="POST">

          <div class="contact-row">
            <div class="contact-group">
              <label>First Name</label>
              <input type="text" name="first_name" class="contact-input" required>
            </div>
            <div class="contact-group">
              <label>Last Name</label>
              <input type="text" name="last_name" class="contact-input" required>
            </div>
          </div>

          <div class="contact-row">
            <div class="contact-group">
              <label>Email Address</label>
              <input type="email" name="email" class="contact-input" required>
            </div>
            <div class="contact-group">
              <label>Phone Number</label>
              <input type="tel" name="phone_number" class="contact-input" required>
            </div>
          </div>

          <div class="contact-row">
            <div class="contact-group" style="flex:1;">
              <label>Unit Type</label>
              <select name="unit_type" class="contact-input" required>
                <option value="" disabled selected>Select a unit size...</option>
                <option value="Small 5x10 - $35/month">Small 5×10 — $35/month</option>
                <option value="Large 10x15 - $70/month">Large 10×15 — $70/month</option>
              </select>
            </div>
          </div>

          <input name="form_botcheck" class="form-control" value="" type="hidden">

          <div class="g-recaptcha"
               data-callback="enableSubmitButtonInStorageForm"
               data-sitekey="6LfFJW4qAAAAAN4T6nRoKc6orfg2XZbyck5vU_9P"></div>

          <button
            id="storage-form-submit"
            class="contact-submit"
            data-loading-text="Sending..."
            type="submit">
            SUBMIT INQUIRY
          </button>

          <div id="storage-form-message" style="margin-top:10px;"></div>

        </form>
      </div>
    </div>
  </div>

</section>
