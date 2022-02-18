
<?php
echo '<br>--- 1 ---<br>';
$intNumber = 1000;
$charName = 'N';
$boolVal = true;
$floatNum = 10.292;
echo $intNumber . ', ' . $charName . ', ' . $boolVal . ', ' . $floatNum;

echo '<br>--- 2 ---<br>';
$add1 = 12;
$add2 = 7;
$addSum = $add1 + $add2;
echo $add1 . '+' . $add2 . '=' . $addSum;
echo '<br>';

$sub1 = 12;
$sub2 = 7;
$subSum = $sub1 - $sub2;
echo $sub1 . '-' . $sub2 . '=' . $subSum;
echo '<br>';

$mul1 = 12;
$mul2 = 7;
$mulSum = $mul1 * $mul2;
echo $mul1 . '*' . $mul2 . '=' . $mulSum;
echo '<br>';

$div1 = 12;
$div2 = 7;
$divSum = $div1 / $div2;
echo $div1 . '*' . $div2 . '=' . $divSum;
echo '<br>';

$amr1 = 12;
$amr2 = 7;
$amrSum = $amr1 % $amr2;
echo $amr1 . '%' . $amr2 . '=' . $amrSum;
echo '<br>';

echo '<br>--- 3 ---<br>';
$val = 8;
echo $val + 2;
echo '<br>';
echo $val + 2 - 4;
echo '<br>';
echo $val + 2 - 4 * 5;
echo '<br>';
echo ($val + 2 - 4) * 5 / 3;
echo '<br>';
echo ($val + 2 - 4) * 5 / 3 + 1;
echo '<br>';
echo ($val + 2 - 4) * 5 / 3 + 1 - 1;
echo '<br>';

echo '<br>--- 4 ---<br>';
if(date('F', time()) === 'December'){
    echo "It's December, cold, gonna stay home, be a potato couch.";
} else {
    echo "Not December, but still nope! Stay home and be a NEETo!";
}

echo '<br><br><br>--- 5 ---';
?>
<html xmlns="http://www.w3.org/1999/xhtml"  xml:lang="en" lang="en">
<head>
    <meta http-equiv="content-type" content="text/html;charset=iso-8859-1" />
    <title>Associative Array - Cities</title>
</head>
 
<body>
    <form>
        <p>Please choose a city:</p>

        <?php
            $city = array(
                'Japan' => 'Tokyo', 
                'Mexico' => 'Mexico City', 
                'USA' => 'New York City',  
                'India' => 'Mumbai', 
                'Korea' => 'Seoul', 
                'China' => 'Shanghai', 
                'Nigeria' => 'Lagos',  
                'Argentina' => 'Buenos Aires', 
                'Egypt' => 'Cairo', 
                'England' => 'London'
            );
        ?>

        <select name="city">
        <!-- dropdown goes here... -->
        <?php
            foreach($city as $key => $val){
            echo "<option value='". $key . "'>". $val. "</option>";
            }
        ?>
        </select>
    </form>

</body>
</html>