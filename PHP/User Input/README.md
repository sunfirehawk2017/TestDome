# User Input

https://www.testdome.com/questions/php/user-input/92094

The user interface contains two types of user input controls: _TextInput_, which accepts all texts and _NumericInput_, which accepts only digits.

Implement the class _TextInput_ that contains:

* Public function _add($text)_ - adds the given text to the current value.
* Public function _getValue()_ - returns the current value (string).
Implement the class _NumericInput_ that:
* Inherits from _TextInput_.
* Overrides the _add_ method so that each non-numeric text is ignored.
For example, the following code should output '10':
```php
$input = new NumericInput();
$input->add('1');
$input->add('a');
$input->add('0');
echo $input->getValue();
```
#### PHP 8.1.11
```php
<?php

class TextInput
{

}

class NumericInput
{

}

//$input = new NumericInput();
//$input->add('1');
//$input->add('a');
//$input->add('0');
//echo $input->getValue();
```
