<?php
//    var_dump($_GET["id"]);  
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <div class="card text-center">
        <div class="card-header">
            <?php echo date('d/m/Y/l') ?>
        </div>
        <div class="card-body">
            <h5 class="card-title">Welcome to Download Your File</h5>
            <br>
            <br>
            <a download class="btn btn-info"  href="http://192.168.64.4/Wetransfer/upload/<?php echo $_GET["id"] ?>" >File to Download</a>
        </div>
        <div class="card-footer text-muted">
        <?php echo date('h:i:s:a') ?>
        </div>
    </div>
</body>
</html>



