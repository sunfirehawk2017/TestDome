# Pipeline

https://www.testdome.com/questions/php/pipeline/92115

As part of a data processing pipeline, complete the implementation of the _make_pipeline_ method:

* The _make_pipeline_ method should accept a variable number of functions, and it should return a new function that accepts one parameter _$arg_.
* The returned function should call the first function in _make_pipeline_ with the parameter _$arg_, and call the second function with the result of the first function.
* The returned function should continue calling each function in _make_pipeline_ in order, following the same pattern, and return the value from the last function.

For example, calling _make_pipeline(function($x) { return $x * 3; }, function($x) { return $x + 1; }, function($x) { return $x / 2; })_, and then calling the returned function with 3 should return 5.
