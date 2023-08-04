# Positionable
https://www.testdome.com/questions/typescript/positionable/64369

Consider the following code:
```TypeScript
class Positionable {
  locationX: number = 0;
  locationY: number = 0;
  moveTo(toX: number, toY: number) {
    this.locationX = toX;
    this.locationY = toY;
  }
}

class Rotatable {
  orientation: number = 0;
  rotate(orientation: number) {
    this.orientation += orientation;
  }
}

class MovingObject {
  locationX: number = 0;
  locationY: number = 0;
  orientation: number = 0;
  printPosition(){
    console.log(this.locationX, this.locationY);
  }
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

applyMixins(MovingObject, [Positionable, Rotatable]);
let mover = new MovingObject();
```
Select the statements that are correct.

(Select all acceptable answers.)

## Good Answers
* After the last line of code, rotate and moveTo can be called on mover.
* The printPosition method still exists on MovingObject after applyMixins is called.
## Bad Answers
* MovingObject’s repeated attributes are necessary to have the correct behavior of the mixed-in code.
* The MovingObject class could also be declared as an interface if it had no function definition.
* After the call to applyMixins the orientation attribute will be added to the Positionable class.
