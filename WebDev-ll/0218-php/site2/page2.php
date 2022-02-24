<?php
    session_start();

    // $_SESSION['name'] = 'Yuki';

    $name = $_SESSION['name'];
    $email = $_SESSION['email']

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page 2</title>
</head>
<body>
    <h1>This is page 2</h1>

    <h4>Thank you <?php echo $name ?>, 
        you have subscribed with the email 
        <?php echo $email ?>
    </h4>

    <a href="page3.php">Go to Page 3</a>    
</body>
</html>