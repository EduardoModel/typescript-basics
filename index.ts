import * as _ from 'lodash';

console.log('Just the introduction');

// An example of a async await function
async function aAsyncFunction(){
    const value = await fetch("https://www.google.com");
    console.log(value);
}

/*
    An example of a method of the DOM library.
    Here is possible to visualize how IntelliSense helps a lot during development,
    avoiding the need to consult any external library documentation.
*/
const url = new URL("...").toString();

/*
    For third-party libraries are always interesting to have the types of it.
    Sometimes the library contains all his types but sometimes it doesn't.
    Fortunately, the community took care already and wrote a ton of modules
    that contains all the necessary types for the libraries.
*/

console.log(
    _.pickBy({
        a: 1,
        b: '2',
        c: 3
    }, _.isNumber)
);

/*
    About the typing: it can be explicitly or implicitly
*/

// At the time the value is attributed to a variable, the type will be automatically inferred
let theAnswerToLifeTheUniverseAndEverything = 42; // <-- There is an implicity declaration
let theAnswerToLifeTheUniverseAndEverythingExplicit: number = 42; // <-- There is an explicit declaration

/*
    And if it tried to give another value type to the variable, that isn't a number, the compiler will
    present an error.
    Here is where typescript shines because if the code were sent to production, this error would 
    only be caught later on.
*/

// theAnswerToLifeTheUniverseAndEverything = "AAAA";

/*
    To give more flexibility for a variable the type any can be given, but
    this approach isn't encouraged because it can lead to the same errors without typescript.
*/

let anyValueIsValid: any = "ANY VALUE";

/*
    To define a variable to have a specific type,
    it just needs to be defined with the following syntax: variable name: type.
*/

let name: string;
let age: number;

/*
    Another tip: if there is an implicit variable declaration,
    it is not needed to add the explicit type annotation for the variable
*/

let itIsANumberForSure = 42;

/*
    To create an own type is use the reserved keyword type followed with
    the type name (in Pascal Case) and with the type itself.
    The real power of this is to limit the valid values for a variable of that type.
*/

type TextStyle = 'bold' | 'italic';

let textFont: TextStyle = 'bold'; // This will throw an error!

/*
    To strong type objects it just need to declare an interface and you are good to go
*/

interface User {
    // All this three fields are requiered
    first_name: string;
    last_name: string;
    age: number;
    // Another types are optional, giving the interface a loot of flexibility
    [key: string]: any
}

/*
    To strong type functions is like a mixture with C++ and PHP
*/

function pow(base: number, exponent: number): number {
    // If the return isn't the right one it will throw an error as well
    return Math.pow(base, exponent);
}

/*
    For functions that doesn't return a value, the appropriated return value type
    is void.
    This approach is for event listeners, for example:
*/

function iDoMathForMyself(a: number, b: number): void {
    const c = a + b;
}

/*
    To strong type arrays just use the syntax array[type].
    This approach is very useful when is needed to iterate through
    an array to get some IntelliSense.
*/

let userList: User[] = [] // Array of users

/*
    The other data structure that is available is the tuple.
    A tuple is a fixed-length array where each element in the array has its own type
*/

type MyList = [number, string, boolean];

const myListArray: MyList = [42, 'Douglas Adamns', true]; 

// Define the values as optional. That can be used for functions as well
type MyListOptional = [number?, string?, boolean?];

/*
    Another powerful resource is generics.
    With them is possible to define the internal value for an observable for example.
*/

class Observable<T> {
    constructor(public value: T){}
}

// Explicit declaration
// const x: Observable<number>;

// Implicitly declaration
const y = new Observable(2);