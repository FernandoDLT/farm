# Animal Classes

This JavaScript code demonstrates the use of classes to create different animal objects with inherited properties and methods.

## Animal Class

The `Animal` class serves as the base class for all animals. It has the following properties and methods:

### Properties

- `name`: The name of the animal.

### Methods

- `speak()`: Outputs a generic sound for the animal.

## Dog Class

The `Dog` class extends the `Animal` class and adds the specific property `breed` for dogs.

## Cat Class

The `Cat` class extends the `Animal` class and adds the specific property `breed` for cats.

## Bird Class

The `Bird` class extends the `Animal` class and adds the specific property `breed` for birds. It also overrides the `speak()` method to provide a custom sound.

## Fish Class

The `Fish` class extends the `Animal` class and adds the specific property `breed` for fish. It also overrides the `speak()` method to provide a custom sound.

## Lizzard Class

The `Lizzard` class extends the `Animal` class and adds the specific property `breed` for lizards. It also overrides the `speak()` method to provide a custom sound.

## Usage

You can create instances of different animal objects using the provided classes. For example:

```javascript
let simba = new Dog('Simba', 'Shepard');
let mischa = new Cat('Mischa', 'Persian');
let paco = new Bird('Paco', 'Cacatoo');
let phil = new Fish('Phil', 'Gold Fish');
let larry = new Lizzard('Larry', 'Gecco');
