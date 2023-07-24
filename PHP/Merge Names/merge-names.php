<?php

function unique_names(array $array1, array $array2): array
{
    $result = array();
  
    for ($x = 0; $x < count($array1); $x++) {
      if (!in_array($array1[$x],$result)) {
        array_push($result,$array1[$x]);
      }
    }
  
    for ($x = 0; $x < count($array2); $x++) {
      if (!in_array($array2[$x],$result)) {
        array_push($result,$array2[$x]);
      }
    }
  
    return $result;
}

$names = unique_names(['Ava', 'Emma', 'Olivia'], ['Olivia', 'Sophia', 'Emma']);
echo join(', ', $names); // should print Emma, Olivia, Ava, Sophia
