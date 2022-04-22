# Exercise Answers

## Exercise 1

> Exercise 1 (written): 
>
> 1) Write a function which returns twice the input
> 2) Write a function which return the negative of its input

$$ f(x) = 2 * x$$
$$ f(x) = -x$$

## Exercise 2 

> Exercise 2: What value is output (returned) by `PlusOne(-1)`?

0

## Exercise 3:

> Exercise 3:
>
> 1) Write a `C` function which takes a input a a single integer parameter returns twice the value.

```C
int Twice(int x)
{
    return 2 * x;
}
```

> 2) Write a `C` function which returns takes a single integer input parameter returns twice the value of it.

```C
int Negative(int x)
{
    return -x;
}
```

> 3) Write a `C` function which takes two integer parameters and returns the first minus the second

```c
int Subtract(int a, int b)
{
    return a - b;
}
```

## Exercise 4:

> Exercise 4: What is the value returned by `AddThreeTimes_v2(11)`? 

11 + 10 + 10 + 10 = 41 

## Exercise 5:

>Exercise 5: Write a function that takes a `double` named `radius` as input and returns a double which is the area of a circle with that radius. (hint: you can approximate $\pi$ as 3.1412)

```c
double CircleArea(double radius)
{
    double pi = 3.1412;
    return pi * radius * radius;
}
```

Of course its OK if oyu named your function differently, or maybe didn't have the separate line defining a variable for `pi`.