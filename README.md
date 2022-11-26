# Project Euler 062 - Cubic Permutations

The cube, 41063625 (345<sup>3</sup>), can be permuted to produce two other cubes: 56623104 (384<sup>3</sup>) and 66430125 (405<sup>3</sup>).  In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.

Find the smallest cube for which exactly n permutations of its digits are cube.

Information at [Project Euler 062](https://projecteuler.net/problem=62)

## UX

**Getting Started**

Enter a whole number between 2 and 5 (without leading zeros such as 02) in the input field and select the Submit Button.  You will see the number entered as well as the smallest cube for which exactly n permutations of its digits are cube.  For example, if you entered 2, you would expect the smallest cube to be 125.  If you have made an invalid input, you will get an error message.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 2 or greater than 5
- Including leading zeros such as 02
- Entering a number, but it is not an integer

As a user, if I select the Reset Button, I can clear the information or start again.

As a user, I expect the function `cubicPermutations(2)` to return a number.

As a user, I expect the function `cubicPermutations(2)` to return 125.

As a user, I expect the function `cubicPermutations(3)` to return 41063625.

As a user, I expect the function `cubicPermutations(4)` to return 1006012008.

As a user, I expect the function `cubicPermutations(5)` to return 127035954683.

User Stories on function `cubicPermutations(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 062](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-62-cubic-permutations)

**Information Architecture**

The function `cubicPermutations(n)` returns a number, where `n` is a number from 2 to 5.

## Features

Allows the user to enter a number in order to get the smallest cube for that number of permutations of its digits are cube.  For example, if 2 was entered, the smallest cube would be 125.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

