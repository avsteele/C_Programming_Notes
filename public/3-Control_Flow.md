# Control Flow

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

Whenever we do an assignment, the part on the right of the `=` is evaluated (i.e. calculated) first, **then** its value is assigned to the variable on the left side of the `=`.  **This is important**. While you would never see something like this in math class:

$$ x = x + 1 $$

But because of the way assignment works a similar looking statement in `C` is perfectly sensible:

```c
x = x + 1;
```

We do the right hand side first: take the current value of `x` and add one to it. **Then**
take the result and store it in the variable `x`.

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

The `if` statement lets you execute some section of code conditioned depending on how another expression evaluates. REview these examples:

```c
#include <stdio.h>
int main()
{
    if( 0 )
    {
        printf("This never prints \n");
    }
    if( 1 ) // 1, or anything other than 0
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

If the expression in the `if`'s `(...)` evaluates to `0`, then the next statement, or block of statements inside a `{}` will **NOT** be executed. If what in the `if`'s `()` evaluates to anything other than `0` then the statement or block following it **will** be executed. As you can see, you can think of 0 as `false` and anything else as `true`.

> NOTE: As you can see from the above example code. Statements like `a < b` evaluate to a numerical value; true to 1, and false to 0.
