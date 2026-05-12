<?php
$message = "";
$status = "false";

$secretKey = "6LfFJW4qAAAAABCkYSiZCZcn615BhPx7jGatEOzk";

ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit("Invalid request.");
}

// Form Fields
$first_name  = trim($_POST['first_name'] ?? '');
$last_name   = trim($_POST['last_name'] ?? '');
$email       = trim($_POST['email'] ?? '');
$phone_number = trim($_POST['phone_number'] ?? '');
$unit_type   = trim($_POST['unit_type'] ?? '');
$recaptcha   = $_POST['g-recaptcha-response'] ?? '';
$botcheck    = $_POST['form_botcheck'];

// Verify reCAPTCHA
$userIP = $_SERVER["REMOTE_ADDR"];
$verifyURL = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$recaptcha&remoteip={$userIP}";

$response = file_get_contents($verifyURL);
$responseData = json_decode($response);

if (!$responseData->success) {
    exit("Captcha verification failed. Please try again.");
}

try {
     $email_to = "info@almarproperties.com, colarussoproperty@gmail.com, anthony@growsalt.com";
    $email_subject = "Whispering Pines Storage Unit Interest - Paulding";

    $message = '
        <html>
        <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9; }
            h2 { color: #234734; text-align: center; }
            .info-row { margin-bottom: 12px; }
            .info-label { font-weight: bold; display: inline-block; width: 180px; }
            .info-value { display: inline-block; }
            .unit-badge { display:inline-block; background:#234734; color:#fff; padding:4px 12px; border-radius:20px; font-size:13px; }
        </style>
        </head>
        <body>
        <div class="container">
            <h2>New Storage Unit Application</h2>
            <div class="info-row"><span class="info-label">First Name:</span> <span class="info-value">' . htmlspecialchars($first_name) . '</span></div>
            <div class="info-row"><span class="info-label">Last Name:</span> <span class="info-value">' . htmlspecialchars($last_name) . '</span></div>
            <div class="info-row"><span class="info-label">Email Address:</span> <span class="info-value">' . htmlspecialchars($email) . '</span></div>
            <div class="info-row"><span class="info-label">Phone Number:</span> <span class="info-value">' . htmlspecialchars($phone_number) . '</span></div>
            <div class="info-row"><span class="info-label">Unit Type:</span> <span class="info-value"><span class="unit-badge">' . htmlspecialchars($unit_type) . '</span></span></div>
            <p style="text-align:center; margin-top:20px; font-style:italic;">This email was generated from the Whispering Pine storage unit inquiry form.</p>
        </div>
        </body>
        </html>
    ';

    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: admin@salt-crm.com" . "\r\n";

    if ($botcheck == '') {
        if (@mail($email_to, $email_subject, $message, $headers)) {
            $message = 'Thank you! We have received your storage unit inquiry and will contact you shortly.';
            $status = "true";
        } else {
            $message = 'Inquiry could not be sent due to an unexpected error. Please try again later.';
            $status = "false";
        }
    } else {
        $message = 'Bot detected.';
        $status = "false";
    }
} catch (Exception $e) {
    $message = 'Something went wrong sending your inquiry.';
    $status = "false";
}

$status_array = array('message' => $message, 'status' => $status);
echo json_encode($status_array);
