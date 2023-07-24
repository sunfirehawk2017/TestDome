<?php

/**
 * @return array An array of two elements containing roots in any order
 */
function findRoots($a, $b, $c)
{
    $firstValue = (-$b + sqrt( pow($b, 2) - (4 * $a * $c))) / (2 * $a);
    $secondValue = (-$b - sqrt( pow($b, 2) - (4 * $a * $c))) / (2 * $a);
    return [$firstValue, $secondValue];
}

print_r(findRoots(2, 10, 8));
