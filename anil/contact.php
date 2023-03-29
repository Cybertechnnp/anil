<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Insert code here to process the contact form data (e.g. save to database, send email to website owner)

  // Send a response to the browser
  $response = array('success' => true, 'message' => 'Thank you for your message!');
  header('Content-Type: application/json');
  echo json_encode($response);
} else {
  http_response_code(400);
  echo 'Error: Invalid request.';
}

?>
