<?php
    $people[] = 'Yuki'; // like people.push() in JS
    $people[] = 'Chiho';
    $people[] = 'Ayaka';
    $people[] = 'Ayako';
    $people[] = 'Sho';
    $people[] = 'Shoko';


    $q = $_REQUEST['q'];

    $suggestion = '';

    if($q !== ''){
        $q = strtolower($q);
        $len = strlen($q);

        foreach($people as $person){
            if(stristr($q, substr($person, 0, $len))){

                if($suggestion == ""){
                    $suggestion = $person;
                } else {
                    $suggestion .= ", $person";
                }
            }
        }
    }

    echo $suggestion === "" ? "No suggestion" : $suggestion;

?>