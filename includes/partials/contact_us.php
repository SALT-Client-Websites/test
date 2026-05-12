<div class="contact-container" id="contact">

    <!-- LEFT BLOCK -->
    <div class="contact-left">
        <img src="./assets/images/whispering_pines_contact_us.png" class="contact-img" alt="Whispering Pines">

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
        </div>
    </div>

    <!-- RIGHT FORM -->
    <div class="contact-form-wrapper">

        <div class="contact-form-title-container">
            <div>
                <div class="contact-form-title">Request More Information</div>
                <div class="contact-subtitle">Send a Rental Application</div>
            </div>
            <img src="./assets/images/wp_logo.png" class="contact-title-img" alt="Whispering Pine logo" />
        </div>

        <form id="rental-form" action="./includes/functions/send_rental_application.php" method="POST">

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
                    <label>Contact Number</label>
                    <input type="text" name="phone_number" class="contact-input" required>
                </div>
            </div>

            <div class="contact-row">
                <div class="contact-group">
                    <label>Desired Move-in Date</label>
                    <input type="date" name="move_in" class="contact-input">
                </div>

                <div class="contact-group">
                    <label>List any pets you have</label>
                    <input type="text" name="pets" class="contact-input">
                </div>
            </div>

            <input name="form_botcheck" class="form-control" value="" type="hidden">

            <div class="g-recaptcha"
                data-callback="enableSubmitButtonInContactForm"
                data-sitekey="6LfFJW4qAAAAAN4T6nRoKc6orfg2XZbyck5vU_9P"></div>

            <button
                disabled="disabled"
                id="contact-form"
                class="contact-submit"
                data-loading-text="Sending..."
                type="submit">
                SUBMIT
            </button>
            <div id="form-message" style="margin-top:10px;"></div>
        </form>
    </div>

</div>