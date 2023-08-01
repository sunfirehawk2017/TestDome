# Two Sum
https://www.testdome.com/questions/c-sharp/two-sum/96020

Write a function that, when passed a list and a target sum, returns, efficiently with respect to time used, two distinct zero-based indices of any two of the numbers, whose sum is equal to the target sum. 
If there are no two numbers, the function should return _null_.

For example, _FindTwoSum(new List<int>() { 3, 1, 5, 7, 5, 9 }, 10)_ should return a _Tuple<int, int>_ containing any of the following pairs of indices:

* 0 and 3 (or 3 and 0) as 3 + 7 = 10
* 1 and 5 (or 5 and 1) as 1 + 9 = 10
* 2 and 4 (or 4 and 2) as 5 + 5 = 10

```C#
using System;
using System.Collections.Generic;

class TwoSum
{
    public static Tuple<int, int> FindTwoSum(List<int> list, int sum)
    {
        throw new NotImplementedException("Waiting to be implemented.");
    }

    public static void Main(string[] args)
    {
        Tuple<int, int> indices = FindTwoSum(new List<int>() { 3, 1, 5, 7, 5, 9 }, 10);
        if(indices != null) 
        {
            Console.WriteLine(indices.Item1 + " " + indices.Item2);
        }
    }
}
```
