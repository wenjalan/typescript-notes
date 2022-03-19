// a string
const str: string = 'hello world';

// a number
const x: number = 12345;

// a boolean
const flag: boolean = false;

// an any
let something: any = 'some string';
something = 123;
something = false;

console.log(str);
console.log(x);
console.log(flag);
console.log(something);

// an array of numbers
const arr: number[] = [1, 2, 3, 4, 5];
arr.forEach(x => console.log(x));

// an array of strings
const arr2: Array<string> = ['alan', 'fran', 'nick'];
arr2.forEach(name => console.log(name.toUpperCase()));