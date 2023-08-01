using System;

public class QuadraticEquation
{
    public static Tuple<double, double> FindRoots(double a, double b, double c)
    {      
        double firstValue = ((-b + Math.Sqrt(Math.Pow(b, 2) - (4 * a * c))) / (2 * a));
        double secondValue = ((-b - Math.Sqrt(Math.Pow(b, 2) - (4 * a * c))) / (2 * a));
      
        return new Tuple<double, double>(firstValue, secondValue);
    }

    public static void Main(string[] args)
    {
        Tuple<double, double> roots = QuadraticEquation.FindRoots(2, 10, 8);
        Console.WriteLine("Roots: " + roots.Item1 + ", " + roots.Item2);
    }
}
