<?php 

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "radoslaw.begej@gmail.com";
    $headers = "From: ".$email;
    $txt = "Masz woadomość od ".$name.".\n\n".$message;

    mail($mailTo,$subject,$txt,$headers);
    header("Location: index.php?mailsend");
}

?>
