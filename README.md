# typescript-basics
### A brief introduction to the typescript typing system

Typescript is a superset of Javascript that allows to strong type the code.
The main advantage is that the documentation is been generated "automatically" as the code grows.

## Primitives
Some primitives can be **number**, **string**, **boolean**, etc. 

```ts
    const answerToLifeTheUniverseAndEverything = 42 // Implicitly defined as a number
    const theFalseAnwser: number = 43; // Explicitly defined as a number
    
    let theAuthor: string;
    theAuthor = "Douglas Adams"; // Perfeclty fine
    theAuthor = 42; // That is an error

    // All the following attributions are correct because of the type any
    let aFlexibleVariable: any;
    aFlexibleVariable = "a name";
    aFlexibleVariable = 10;
    aFlexibleVariable = false;
```

## Types
The types are very useful to define a specific primitive type or better utilized
to restring the possible valid values for the variable of that type.

```ts
    // A good practice is to name the types with Pascal Case
    type TextStyle = 'bold' | 'italic'; // <-- Thie are the valid values

    const pStyle: TextStyle = 'another_type'; // This will throw an error!

    // The types can be a mix from different types as well
    type Mixture = 'string' | 4 | true;
```

## Interfaces
To strong type objects an interface is the way to go.