[Back](./2-Writing_Programs.md)
# 3 - Control Flow

This section will cover `C` statements, as well as some simple structures that will allow your program to alter its behavior based on the data it receives. These are the basic building blocks on which all programs are built.

## Variable Declaration and Assignment

So far, our programs have been made of simple statements, each ending in a semicolon.

```c
int main()
{
    // variable declaration
    int i;
    // assignment statement
    i = 5;
    // (re) assignment
    i = 10;
    // evaluation + assignment. Evaluate right side first, then update value of i 
    i = 2 + 3 * 4;
    // combo statement: declaration and assignment
    int j = 5;
}
```

First we have a **declaration statement**; in this we declare an `int` variable `i`. Declaring a variable means settings its type (`int` in this case) and name.  

After a variable is declared we are free to assign a value to it, and in the second line. An **assignment statement** is one that contains an `=`. It is ok to assign a new, different value to the same variable later, as in line 3.

When performing evaluations, `C` uses the same order-of-operations rules as in normal math.

Whenever we do an assignment, the part on the right of the `=` is evaluated (i.e. calculated) first, **then** its value is assigned to the variable on the left side of the `=`.  **This is important**. You would never see something like this in math class:

$$ x = x + 1 $$

but because of the way assignment works in `C` a similar looking statement in `C` is perfectly sensible:

```c
x = x + 1;
```

We do the right hand side first: take the current value of `x` and add one to it. **Then**
take the result and store it as the new value of the variable `x`.

> Exercise 3.1: What does the code below print out?

```c
int main()
{
    int x = 1;
    x = x + 2;
    x = x + 3;
    x = x + 4;
    printf("%d", x)

    return 0;
}
```

## The `if` statement

The `if` statement lets you execute some section of code conditioned (depending) on how another expression evaluates. Review these examples:

```c
#include <stdio.h>
int main()
{
    if( 0 )
    {
        printf("This never prints \n");
    }
    if( 1 ) // '1' can be anything other than 0
    {
        printf("This always prints \n");
    }

    int i = 4;
    int j = 5;

    if( i < j )
    {
        printf("i < j \n");
    }
    
    if( i > j )
    {
        printf("i > j \n");
    }

    printf( "%d \n", 1 < 2 ); // prints 1
    printf( "%d \n", 1 > 2 ); // prints 0
    return 0;
}
```

If the expression in the `if`'s `(...)` evaluates to `0` (false, basically), then the next block of statements inside a `{}` will **NOT** be executed. But if what's in the `if`'s `()` evaluates to anything other than `0` then the statement or block following it **will** be executed.

> NOTE: As you can see from the above example code, statements like `a < b` evaluate to a numerical value; true for 1, and false to 0.

## Variable Scope

If we have a variable inside a function, it's value is available only *inside* that function. Example:

```c
#include <stdio.h>

void Variables()
{
    int i = 1;
    double d = 1.2345;    
}

int main()
{
    int i = 9;
    double d = 6.7;
    Variables();
    printf("%d, %f \n", i, d);
}
```

This code will print out `9`, and `6.7`. The fact that we have another function which contains variables with the same name has no impact on what happens in `main()`.  

This is an example of what is caled **scope**. One scoping rule is that we can only access variables inside our own set of `{ }`. If the variable was delcared inside a different set of `{ }` we cannot see it. In other words, the code below will not compile.


```c
#include <stdio.h>

void test()
{
    int i = 10;
}

int main()
{
    // BAD CODE: will not compile!!
    print("%d", i);
}
```

However, using a variable delcaring in an **enclosing scope** is OK. Example:

```c
#include <stdio.h>

int main()
{
    char * message = "Hello"
    int i = 5;
    if(i>0)
    {
        printf("%s", message)
    }
}
```
Here the variable `message` wasn't declared in the set of `{}` where it is used, but it is declared inside a set of `{}` that **encloses** where it is used, so we can see it at the `printf` statement.

There's a lot more to say on scope rules, but this is enough to get us going.

## Global Variables

So far, all of our variables have been inside of functions, but this is not required.

```c
#include <stdio.h>

char * message = "Hello!";

void Print3Times()
{
    printf("%s %s %s\n", message, message, message);
}

int main() 
{
  printf("%s\n", message);
  Print3Times();
  return 0;
}
```

Here a string is delcared outside the two functions. Its value is available everywhere in the program. This is called a **global variable**.

## `while` statement

The `while` statement tells the program to run a [block](./Terms) of statements repeatedly until a certain conditional (as in `if`) is false. Example:

```c
#include <stdio.h>

int main()
{
    int timesToPrint = 5;
    int printedSoFar = 0;
    while(printedSoFar < timesToPrint)
    {
        printf("%s", "Hello");
        printedSoFar = printedSoFar + 1;
    }
}
```

In the above, first the program checks if `printedSoFar < timesToPrint` is true. If so, it runs whats inside the `{}` that follows. When its done, it checks if `printedSoFar < timesToPrint` again, and if still true it runs what is in `{}` again. It will continue do this for as long as the conditional is true. In the example, we increase the variable `printedSoFar` by 1 each loop. So the conitional will be false after the loop has run 5 times. In other words, this loop will print `Hello` 5 times. By changing the value of `timesToPrint` we can have it do this 10, 100, 1000 or however many times we wish.

BE CAREFUL! If you make a mistake with a `while` statement it is easy to cause your program to get into an infinite loop! 

If this happens you'll need to force the program to stop.  In REPLIT the `run` button  becomes a `stop` button while the program is running. Click this to halt your program.

Another example: suppose we want to find the sum of all the integers from 0 to some integer `n`. We could write this using a `while` loop like so.

```c
#include <stdio.h>

int main()
{
    int n = 5;

    int sum = 0;
    int currentNumber = 1;
    // NOTE: <= means 'less than or equal to'
    while(currentNumber <= n)
    {
        sum = sum + currentNumber;
        currentNumber = currentNumber + 1;
    }

    printf("%d \n", sum);
}
```

Be sure to paste this into your REPLIT and run it. Spend some time re-reading and playing around with it to make sure you understand what it is doing.

## The `for` statement

As it turns out, the kind of `while` loop we just created occurs quite often: `run a loop until a condition is met` + `change a variable each time the loop completes`. 

In these sitautions we can we can make our `sumToN` function more compact using the `for` statement.

But basically it sets up a situation where a statement (or set of statements inside a `{}`) will run over and over, until a certain conditional evaluates to false.

```c
#include <stdio.h>

int main() 
{
  int n= 5;
  int sum = 0;
  for(int i=0; i<=n; i=i+1)
  {
      sum = sum + i;
  }

  printf("%d \n", sum);
}
```

The `for` statement is a little strange looking; we will step through it piece by piece below. 

There are three statements inside the `for()`, each ending with a `;`.  The first (`int i=0`)runs just once, when the loops starts. It usually decalres a new variable and sets its initial value. The second statement (`i<=n`) is a test that runs before each loop. If true, the loops runs, if not, the loop exits. The last part (`i=i+1`) is a statement that runs once each time the loop ends. 

So here we delcare a variable(a 'loop variable' `i`), then we see if it is less than `5`. It is, so we run the code block `{..}` that follows. Each time the block completes, `i` is increased by `1`. Then the conditional is checked again, and so on.

## Summary

You are off to a great start! In this chapter you learned

* variable scope basics
* `if` statement
* `while` statement
* `for` statement

This guide just barely scrathces the surface of `C`. The aim hasbeen to give you a foundation what you can build on as you read other tutorials and continue to learn programming. Specd some time revewing the conecepts above. Take on some of the programming challenges listed below, then continue learning using some of other resources in books and on the web I've linked to below.

[Additional Resources](./Resources.html)

### Challenges

Try to write the following programs:

1) let the user input some text, then print out each letter of thier input on a new line.
2) let the user inptu some text, then count the number of `e`'s in thier input and print this put.
