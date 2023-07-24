<?php

function groupByOwners(array $files) : array
{
    $result = array();
  
    foreach($files as $x => $val) {
      
      if (array_key_exists($val,$result)) {
        array_push($result[$val],$x);
      }
      else {
        $result[$val] = [$x];
      }
    }
  
    return $result;
}

$files = array(
    "Input.txt" => "Randy",
    "Code.py" => "Stan",
    "Output.txt" => "Randy"
);
var_dump(groupByOwners($files));
