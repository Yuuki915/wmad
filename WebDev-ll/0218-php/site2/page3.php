<?php
    session_start();

    print_r($_SESSION);

    $name = isset($_SESSION['name']) ? $_SESSION['name'] : "Guest";
    $email = isset($_SESSION['email']) ? $_SESSION['email'] : "Not subscribed";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page 3</title>
</head>
<body>
    <h1>
        Hello <?php echo $name . ' (' . $email . ')' ?>
    </h1>
    <a href="page4.php">Go to next page...</a>
</body>
</html>