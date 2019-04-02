<?php
$name = $_POST["name"];
$email = $_POST["email"];
$number = $_POST["number"];
$message = $_POST["message"];


$EmailTo = "lobanov.ihor.20@gmail.com";
$Title = "Berghoef";

// prepare email body text
$Fields .= "Name: ";
$Fields .= $name;
$Fields .= "\n";

$Fields.= "Email: ";
$Fields .= $email;
$Fields .= "\n";

$Fields .= "Phone number: ";
$Fields .= $number;
$Fields .= "\n";

$Fields .= "Message: ";
$Fields .= $message;
$Fields .= "\n";


// send email
$success = mail($EmailTo,  $Title,  $Fields, "From:".$email);
?>


