# Object Oriented Programming exercise

## V1

Make a base `SuperHero` class. Give it some properties, and actions (methods) that change those properties.

## V2

Make at least one of the methods interact with another `SuperHero`, such as `attack(otherHero)` or `giveMotivationalSpeech(otherHero)`. Be creative!

## V3

Add tests for your `SuperHero` class.

1. Write tests for what it should do in [tests.js](js/tests.js).
1. Open [index.html](index.html) to run the tests.

## V4

Make a base class with two subclasses that have two or special properties and actions, with tests covering all of the functionality, using [test-driven development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development).

1. Write a test for what it should do in [tests.js](js/tests.js).
1. Open [index.html](index.html) to run the tests.
1. Define the class in [super_hero.js](js/super_hero.js), and make the tests pass.
1. Repeat from step 1.

As an example, you could make a `SuperHuman` base class with `SuperHero` and `SuperVillain` subclasses. Maybe `SuperHero`es have the ability to have a shield, and therefore `attack(hero)` will have different behavior than `attack(villain)`.
