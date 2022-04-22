# Writing `C` Programs

Time to write and run your first `C` program on the computer. We are going to get set up so you can code right in your web browser.

<TODO: LINK TO video showing how to set up at repl.>

After watching the above you should have your [REPLIT](https://replit.com) account set up and be able to write some `C`.

By the end of this chapter you will be able to write programs that can print out messages to the user and get input from thier keyboard.

## The REPLIT interface

With your new project open in REPLIT here is what you should see:

On the left is a window with a list of the files in our project. For now we will just be working with the file it created for us automatically as part of the setup, called `main.c`.

In the middle is a window showing the contents of the `main.c` text file. By convention `C` code files have file  names ending with `.c` or `.h`.

THe dark window on the right is the window which will show the output of our program when we run it. You can also type commands here as well. This is called the **Console**

If you click the green button at the top you can see some things output in Console. You can do this now if you like or wait until we review the code first below.

## Exploring your first program

Lets return to the code in `main.c`. There are some new things here so we'll explain them one at a time.

```c
int main() {  
  return 0;
}
```

Remember when I said the names of functions didn't affect their behavior? Well, there is one exception. All `C` programs start working in a special function called `main`. It has to have this name (with correct capitalization) for your program to work.

As you can see the `main` function has no inputs (parameters) and returns an value of type `int`. The value is used to tell the system the exit status; traditionally a 0 means "everything is fine" and any other value signals to the system there might have been an error. We'll play with this below.

> NOTE: From here on we will call function inputs by their proper name, `parameters`. We will also refer to the output by its proper name, `return value`.

Make sure the code above is the only thing in your `main.c` file (delete anything else if you haven't already as shown in the video) then hit the green button. In the console you will see it spit out this.

```sh
> make -s
> ./main 
>
```

The first line, `make -s`, is the system turning your text file `main.c` into a *executable* form the computer can run. This is called *compiling*. The compilation process will create a new file, in this case called just `main`. Note that Replit is hiding this newly created file by default, which is why you don't see it in the file listing in the left window; I'll tell you how to see this file later.

The second line is it running (*executing*) the `main` file that was just compiled. (NOTE: the `./` before `main` is just telling it to look for that file in the current directory or folder).

The program does not produce any output to the console, so the program just starts and stops without any other notification.

> NOTE `main.c` is just the default filename given by REPLIT, it could have been anything. It doesn't have any significance or connection to the `int main()` function above. (However, do not rename this file just yet to test this as we'de need ot make some other changes for the run button to work correctly if you do)

> Exercise: Rename the `main` function to something else. Then hit the green run button again. Uh-Oh! The `make` command which *compiles* our code had an error. No need to read the error message in detail, just observe that if we don't have a function named `main` our program cannot *compile*. Restore the function name to `main` before proceeding.

> Exercise: Change `main`'s return value to an `int` other than 0. You will see the program compiles and runs to completion OK, but if you look in the console it outputs a red message warning us that the program's **exit status** was not 0. (Note: If the value you return isn't 1..127 the reported exit code may not match).

## Comments

```c
int main() {  
  // This is a comment. It has no effect on the program.
  return 0;
}
```

Everything on a line following a `//` will be ignored by the compiler. Use comments to document what your code is doing.  The more complex your code is the more important this becomes.

## Printing Console

The easiest way to send a message to the user is to have it printed out to the console (the rightmost window in REPLIT). Now we will see how to do this. We'll need two new items to do this. 

First, in file listing window click the icon near the top that, when you hover over it with your mouse, says `Add File`. CLick it and name the file `myinclude.c`. Now open it and add the following code

```c
int r = 5;
```

Now click on `main.c` to open it. and change it to the following.

```c
int main() {
  #include "myinclude.c"
  return r;
}
```

The `#include "myinclude.c"` takes the contents of the file called `myinclude.c`, which we created above, and just inserts it into the file at the location of `#include`. You can verify this by compiling & running the program (green button as usual). It might seem odd, just looking at the code, that we can `return r;` without ever defining this variable, but thats what the inserted code from `myinclude.c` has done for us.

Most of the time `#include` appears at teh very top of a code file, and it enables the use of functions defined in other files. To see how this works, now modify your `main.c` to the following. Then run it.

```c
#include <stdio.h>

int main() {
  printf("Hello");
  printf("Goodbye");
  return 0;
}
```

Now that you've tried the code above and seen it outputs `HelloGoodbye` to the console, let's discuss what it is doing.

`#include <stdio.h>` adds the code from the file `stdio.h` to `main.c`. This file isn't in our list of files on the left, rather it is from the [Standard Library](/Terms.md/) that comes with the version of `C` we are using here. The compiler knows where to look for this file. `stdio` is short for "**st**an**d**ard **i**nput/**o**utput"; it has functions that let us print to the screen, read from the user's keyboard, and work with files, and more.

The `printf` function lets you print some text to the console. Here it will print `Hello`. Enter the code above into your Replit and run it to see this printed to the console. What if we wanted our `Goodbye` to start on a new line after `Hello`? You **cannot** do it like the code below:

```c
#include <stdio.h>

int main() {
  // This will not compile!
  printf("Hello
  ");
  printf("Goodbye
  ");
  return 0;
}
```

This code will not compile **but** if you add the special character `\n` after `Hello` (so it becomes `"Hello\n"`), then the console will jump to the next line and start outputting there whatever is printed next. Try this now.

```c
#include <stdio.h>

int main() {
  // This will not compile!
  printf("Hello\n");
  printf("Goodbye\n");
  return 0;
}
```

> Note: `\n` is the special *newline* character. We can't get it by hitting the enter key, we need this `\n` . Anytime you see something preceded by a backslash (`\`), expect the slash and what comes after it to do something special. There are other special characters we can't insert with the keyboard and these are usually input with a `\` followed by something else.

`printf` can do a lot more than just print some static piece of text like `"Hello"`. The `f` in `printf` stands for 'format'; this function will allow you control how the words and numbers are displayed. `printf` can do a lot, I'll just give a few examples in the code block below. If you want to learn more you can [read the documentation](https://en.cppreference.com/w/c/io/printf), but given the complexity of this function, sometimes the easier option is to search the web for some guidance.

```c
#include <stdio.h>

int main() {
  int i = 9;
  double d = 3.1415926;
  // %d means print variable 'i' as unsigned integer
  printf("A cat has %d lives. \n", i);
  // %f means print floating point with decimal
  printf("pi is approximately: %f\n", d);
  // we can specify we want only 4 digits after teh decimal
  printf("pi to the 4th decimal is: %.4f\n", d);
  // you can print multiple items at once
  printf("%d / %f = %f ", i, d, i/d );
  return 0;
}
```

Every place there is a `%` tells `printf` to insert a value there. The letters and numbers immediately after the `%` specify *how* it should be printed. The value(s) to be inserted at each of these locations are the values `""` quotes. Therefore, the number of `%` needs to be equal to  number of values after the text.

`printf` does return a value (the number of characters it printed) but we are not using that value in this example. Like any function we are free to ignore/discard its return value if it is not needed. See below.

```c
#include <stdio.h>

int main()
{
  int i = 10;
  int printCount = printf("The number is %d \n", i);
  printf("That last line had %d characters.");
  // we have ignored the return value of the second printf by not assigning it to a variable
}
```

## More Types: arrays and strings

Before we move to reading user input from the console we'll need to pause to introduce some new types.

### Array

Imagine we want to store many values of a particular type. Up until now, every time we want to work with an `int` we have created a named `int` variable then assigned it a value.  If we has dozen or thousands of values to store, it would of course be impractical to have a named variable for each value. In such situations, we instead can create an **array** of `int`s.

First read the example code, then the explanation that follows.

```c
int main()
{
  // create an int array with 10 elements
  int intArray[10];
  // set the first element
  intArray[0] = 1;
  // set the last element
  intArray[9] = 5;
  // print out the values of first, last elements
  printf("The first element is %d", intArray[0]);
  printf("The last element is %d", intArray[9]);
}
```

To create an array, we use the following syntax: the type of the array's *elements* comes first, then the name, then inside square brackets (`[]`) is the number of elements the array can hold. The example code above shows how you can create an array and then set and read its elements.

When we want to accessing a value in the array (to set or read its value), the part in the `[]` is called the **index**. The 1st element is `intArray[0]` and goes up from there.

When you first create an array, the values of the members are not set (initialized) to any particular (or even valid) value. Referring to the example: the values of `intArray[1]` through `intArray[8]`, since they are never set, could be anything, and may differ each time you run your problem. It is good practice to not access an array element until it has been set.

Attempting to read or write an index beyond the last element is an error. Doing so can crash your problem or lead to unexpected behavior. For instance, in the example above you must never assign or read `intArray[10]` or higher. Accessing elements beyond the end of your array is called a [buffer overflow](https://en.wikipedia.org/wiki/Buffer_overflow).

### strings

We have already used strings above; every time we used `printf` the part in quotes `"..."` is a string. For now, think of strings like an array of `char`s, with the special feature that they always end with the special character `\0`.

Put the example below into REPLIT and run it to test these concepts.

```c
int main()
{
  char *s = "Hello";
  printf( "%s \n", s);

  printf( "%c \n", s[0]); // H
  printf( "%c \n", s[1]); // e
  printf( "%c \n", s[2]); // l
  printf( "%c \n", s[3]); // l
  printf( "%c \n", s[4]); // o
  printf( "%d \n", s[5]); // \0
}
```

Don't worry for now about what the type `char *` means.  We'll cover that in the next chapter. Just notice we can access each element of the string as if it were something like an array of characters.  The `printf` format specification for a character is `%c`. Notice that to demonstrate the `\0` character at the end of th string we tell it to print out like an integer.

## Reading from the Console

Now that you know the basics of strings and arrays you can start to obtain typed user input from the console.

Copy the code below to your REPLIT, run it. Then proceed to the explanation below.

```c
#include <stdio.h>

int main() {
  // prompt the user for input
  printf("Type something: ");

  // create an array to hold the user input
  char buffer[128];
  // fill the array with what they type
  fgets(buffer, 128, stdin);
  // print what they typed back to the user (%s is the format code for a string)
  printf("You typed     : %s",buff);

  return 0;
}
```

The `fgets` function takes three arguments. The third is where it will collect the data from. `stdin` is short for standard input, which in this case is what appears at the console. The default behavior is that it will stop collecting when use user hits enter. The second argument is the maximum number of characters it will collect from `stdin`. The first is a character array that will hold the data; storage for this purpose is often called a **buffer**.

The second argument (size) is important because `fgets` has no other way to know how big the buffer is. It is very important the value here is no larger than the buffer size for the reasons discussed in the array section above.

## Summary

With this chapter complete you:

* write, compile, and run programs on REPLIT
* write to the console via `printf`
* read user input from the console with `fgets`
* have a basic understanding of what an array is

In the next section we will see how your programs can alter their behavior conditional on user input.
