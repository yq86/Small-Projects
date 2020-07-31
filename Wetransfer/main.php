<?php
    require_once "vendor/autoload.php";

/*
        echo "<pre>";
        var_dump($_FILES);
        echo "</pre>";
        
*/
    if(isset($_POST['submit'])) {
        $file = $_FILES['file'];

        $fileName = $_FILES['file']['name'];
        $fileTmpName = $_FILES['file']['tmp_name']; // 路径
        $fileSize = $_FILES['file']['size'];
        $fileError = $_FILES['file']['error'];
        $filType = $_FILES['file']['type'];

        $fileDestination = 'upload/'.$fileName;
        move_uploaded_file($fileTmpName, $fileDestination);

        $zip = new ZipArchive();      

        $zipName = 'upload/'.uniqid('',true).'.zip';

    //    $zipName = 'upload/'.time().'.zip';
        $zipUrl = explode("/", $zipName)[1];   // download directly in the email
    //    $zipUrl = explode(".", $zipUrl)[0]; // to try

        if ($zip->open($zipName, ZIPARCHIVE::CREATE) !==TRUE) {
            $error.= "failed";
        } else {
            $zip->addFile($fileDestination);
        }
        $zip->close();


        header("Location: index.php?uploadsuccess");

        $emailFr = $_POST['emailFr'];
        $emailTo = $_POST['emailTo'];
/*
        echo "<pre>";
        echo $emailFr;
        echo $emailTo;
        echo "</pre>";

        $emailFr = filter_var($emailFr, FILTER_SANITIZE_EMAIL);
        $emailFr = filter_var($emailFr, FILTER_VALIDATE_EMAIL);
        $emailTo = filter_var($emailTo, FILTER_SANITIZE_EMAIL);
        $emailTo = filter_var($emailTo, FILTER_VALIDATE_EMAIL);
      */
        $msg = $_POST['msg'];
       
        
        // Create the Transport
        $transport = (new Swift_SmtpTransport('smtp.mailtrap.io', 465))
            ->setUsername('8e637c5c5db855')
            ->setPassword('f6d74f81fbfcfc');

        // Create the Mailer using your created Transport
        $mailer = new Swift_Mailer($transport);

    
        // Create a message
        $message = (new Swift_Message('New File'))
            ->setFrom([$emailFr => explode('@', $emailFr)[0]])
            ->setTo([$emailTo => explode('@', $emailTo)[0]])
            ->setBody('please download your file:<br><br> ' . 
            
        
        //      '<a href=' . 'http://192.168.64.4/Wetransfer/upload/' . $zipUrl. '>Click to Download</a>','text/html' // download directly in the email

        '<a href="http://192.168.64.4/Wetransfer/download.php?id='.$zipUrl.'" >Click to Download</a> <br><br>'.
       
        $msg,
        'text/html' // to try

        );

        // Send the message
        $result = $mailer->send($message);
 
}



