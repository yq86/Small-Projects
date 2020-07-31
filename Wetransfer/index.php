<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">     
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
        <title>Contact me</title>
    </head>
    <body>                   
        <form method="POST" enctype="multipart/form-data" action="main.php">
            <div class="container">
                <div class="form-group">
                    <label>Choose a File</label>
                    <input type="file" name="file" class="form-control">
                </div>
                <div>
                    <label>Email to</label>
                    <input type="email" name="emailTo" class="form-control" value="<?php echo isset($_POST['emailTo']) ? $emailTo : ''; ?>">
                </div>
                <div>
                    <label>Your Email</label>
                    <input type="email" name="emailFr" class="form-control" value="<?php echo isset($_POST['emailFr']) ? $emailFr : ''; ?>">
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="msg" class="form-control"><?php echo isset($_POST['msg']) ? $message : ''; ?></textarea>
                </div>
                <br>
                <button type="submit" name="submit" class="btn btn-primary">UPLOAD</button>
            </div>    
        </form>       
    </body>
</html>