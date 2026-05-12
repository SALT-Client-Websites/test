<?php
$message = "";
$status = "false";
$font_style = 'font-family:Arial, Helvetica';

$secretKey = "6LfFJW4qAAAAABCkYSiZCZcn615BhPx7jGatEOzk";

// GOOGLE reCAPTCHA Validation Check
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit("Invalid request.");
}

// Get Form Fields
$first_name = trim($_POST['first_name'] ?? '');
$last_name  = trim($_POST['last_name'] ?? '');
$email      = trim($_POST['email'] ?? '');
$move_in    = trim($_POST['move_in'] ?? '');
$pets       = trim($_POST['pets'] ?? '');
$phone_number       = trim($_POST['phone_number'] ?? '');
$recaptcha  = $_POST['g-recaptcha-response'] ?? '';
$botcheck = $_POST['form_botcheck'];

// Verify reCAPTCHA
$userIP = $_SERVER["REMOTE_ADDR"];
$verifyURL = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$recaptcha&remoteip={$userIP}";

$response = file_get_contents($verifyURL);
$responseData = json_decode($response);

if (!$responseData->success) {
    exit("Captcha verification failed. Please try again.");
}

try {
    // Subject and Headers
    $email_subject = 'Whispering Pine Rental Interest - Paulding';
    $headers = 'From: ' . 'admin@salt-crm.com' . "\r\n" .
        'Reply-To: ' . 'admin@salt-crm.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Recipient and subjects
    $email_to = "info@almarproperties.com, colarussoproperty@gmail.com, anthony@growsalt.com";
    $email_subject = "Whispering Pines Rental Interest - Paulding";

    // Email body (HTML)
    $message = '
        <html>
        <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9; }
            h2 { color: #2a7ae2; text-align: center; }
            .info-row { margin-bottom: 12px; }
            .info-label { font-weight: bold; display: inline-block; width: 180px; }
            .info-value { display: inline-block; }
        </style>
        </head>
        <body>
        <div class="container">
            <h2>New Rental Application Received</h2>
            <div class="info-row"><span class="info-label">First Name:</span> <span class="info-value">' . htmlspecialchars($first_name) . '</span></div>
            <div class="info-row"><span class="info-label">Last Name:</span> <span class="info-value">' . htmlspecialchars($last_name) . '</span></div>
            <div class="info-row"><span class="info-label">Email Address:</span> <span class="info-value">' . htmlspecialchars($email) . '</span></div>
            <div class="info-row"><span class="info-label">Contact Number:</span> <span class="info-value">' . htmlspecialchars($phone_number) . '</span></div>
            <div class="info-row"><span class="info-label">Desired Move-in Date:</span> <span class="info-value">' . htmlspecialchars($move_in) . '</span></div>
            <div class="info-row"><span class="info-label">Pets:</span> <span class="info-value">' . htmlspecialchars($pets) . '</span></div>
            <p style="text-align:center; margin-top:20px; font-style:italic;">This email was generated from the Whispering Pine rental inquiry form.</p>
        </div>
        </body>
        </html>
    ';

    // Headers for HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: admin@salt-crm.com" . "\r\n";

    if ($botcheck == '') {
        $message = isset($message) ? "Message: $message\n\n" : '';

        if (@mail($email_to, $email_subject, $message, $headers)) :
            $message = 'We have successfully received your application and will get back to you as soon as possible.';
            $status = "true";
        else :
            $message = 'Application <strong>could not</strong> be sent due to some Unexpected Error. Please Try Again later.<br /><br />';
            $status = "false";
        endif;
    } else {
        $message = 'Bot <strong>Detected</strong>.! Clean yourself Botster.!';
        $status = "false";
    }
} catch (Exception $e) {
    $message = 'Somthing went wrong sending your application';
    $status = "false";
}

$status_array = array('message' => $message, 'status' => $status);
echo json_encode($status_array);
