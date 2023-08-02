# Circle Inheritance
https://www.testdome.com/questions/typescript/circle-inheritance/47552

The _Circle_ class is used in a prototype for a game engine. Finish the class so that:

It inherits from the _GameObject_ class
It has one more public field, _radius_
It has only one constructor, that sets the radius, and sets the _x_ and _y_ fields using the _GameObject_ class
For example, executing the following code:

```TypeScript
let circle = new Circle(10, 50, 8);
console.log(circle.x, circle.y, circle.radius);
```
should print "10 50 8".

```TypeScript
class GameObject {
    constructor(public x: number, public y: number){}
}

class Circle {
}

//let circle = new Circle(10, 50, 8);
//console.log(circle.x, circle.y, circle.radius);  // should print "10 50 8"
```
