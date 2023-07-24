<?php

class TextInput
{
  public $currentValue;
  
  function add($text) {
    $this->currentValue .= $text;
  }
  
  function getValue() {
    return $this->currentValue;
  }
}

class NumericInput extends TextInput
{
  function add($text) {
    if (is_numeric($text)) {
      return parent::add($text);
    }
  }
}

//$input = new TextInput();
//$input->add('1');
//$input->add('a');
//$input->add('0');
//echo $input->getValue();

$input = new NumericInput();
$input->add('1');
$input->add('a');
$input->add('0');
echo $input->getValue();
