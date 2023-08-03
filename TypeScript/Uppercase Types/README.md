# Uppercase Types
https://www.testdome.com/questions/typescript/uppercase-types/19743

The following code initializes strings as three different types and attempts to make them uppercase. Which statements about the behavior of the typescript compiler are correct?
```TypeScript
let stringType: string = "string type";
stringType.toUpperCase();

let anyType: any = "any type";
anyType.toUpper();
anyType.toUpperCase();

let objectType: Object = "object type";
objectType.toUpperCase();
```
(Select all acceptable answers.)

## Good Answers
* The typescript compiler confirms that toUpperCase exists on the stringType instance.
* The typescript compiler states that the toUpperCase function does not exist on the objectType instance.
## Bad Answers
* The typescript compiler states that toUpper does not exist on the anyType instance;
* The typescript compiler confirms that toUpperCase exists on the anyType instance.
* The typescript compiler confirms that the toUpperCase function exists on the objectType instance.
