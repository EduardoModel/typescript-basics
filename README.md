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
For example, to strong type an object to save the information abou an user
it is possible to define the obligatory fields inside and to give more flexibility.

```ts
    interface User {
        // Obligatory fields
        first_name: string;
        last_name: string;
        age: number;
        // Optional field
        nick_name?: string;
        // Any other field that can come
        [key: string]: any;
    }
```

## Functions
To strong type functions is pretty straight foward;
It is possible to define the type of the paramethers and the type of the return of the funciton.

```ts
    function powToString(base: number, exponent: number): string {
        return Math.pow(base, exponent).toString();
    }

    // This function will not return a result, thats why the return type is void
    // This approach is very useful when calling event listeners
    function iKeepTheResultForMe(a: number, b: number): void {
        const c = a + b;
    }
```

## Arrays
Strong type arrays is very useful to provide IntelliSense specially when dealing with 
an array of TODO's for example.

Another interesting data structure that is available is a tuple. A tuple
is basically a fixed-length array where each element in the array has its own type

```ts
    interface ToDo {
        created_at: number;
        title: string;
        description?: string;
    }

    let todosList: ToDo[];

    // Tuple
    type tupleExample = [number, string, boolean]
    let tupleArray: tupleExample = [5, 'some string', true];
```

## Generics
This gives the flexibility to define the type of an internal value of a class for example.

```ts
    class Observable<T> {
        constructor(public value: T){}
    }

    // Explicit declaration
    const x: Observable<number>;

    // Implicitly declaration
    const y = new Observable(2);
```