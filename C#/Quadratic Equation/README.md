# Quadratic Equation
https://www.testdome.com/questions/c-sharp/quadratic-equation/96024

Implement the function _FindRoots_ to find the roots of the quadratic equation: ax2 + bx + c = 0. The function should return a tuple containing roots in any order. If the equation has only one solution, the function should return that solution as both elements of the tuple. The equation will always have at least one solution.

The roots of the quadratic equation can be found with the following formula: ![quadratic equation](https://www.testdome.com/resources/media/5a64d421-4412-401e-81e7-95560ad2daa4/Quadratic.png)

For example, _FindRoots(2, 10, 8)_ should return _(-1, -4)_ or _(-4, -1)_ as the roots of the equation 2x2 + 10x + 8 = 0 are -1 and -4.

```C#
using System;

public class QuadraticEquation
{
    public static Tuple<double, double> FindRoots(double a, double b, double c)
    {
        throw new NotImplementedException("Waiting to be implemented.");
    }

    public static void Main(string[] args)
    {
        Tuple<double, double> roots = QuadraticEquation.FindRoots(2, 10, 8);
        Console.WriteLine("Roots: " + roots.Item1 + ", " + roots.Item2);
    }
}
```
