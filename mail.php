<?php

  $name = $_POST['contact-name'];
  $email = $_POST['contact-email'];
  $message= $_POST['contact-message'];

  $myemail = 'danhart21390@gmail.com';
  $subject = 'Message from Dan Hart Web';
  $message .= "\n\n" . $name . "\n" . $email;
  $headers = 'From: ' . $name . ' <' . $email . '>';

  $mail = mail($myemail, $subject, $message, $headers);

  echo $mail;

?>
