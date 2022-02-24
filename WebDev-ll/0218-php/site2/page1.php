<?php 

if(isset($_POST['submit'])){
    session_start();

    $_SESSION['name'] = htmlentities($_POST['name']);
    $_SESSION['email'] = htmlentities($_POST['email']);

    header('Location: page2,php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page 1</title>
</head>
<body>
    

<form action="<?php echo $_ ?>" method="POST">
    <input type="text" name="name" placeholder="Enter a name" />
    <br>
    <input type="email" name="email" placeholder="Enter an Email" />
    <br>
    <input type="submit" name="submit" value="submit" />
    
</form>
</body>
</html>