# Chapter 1: Types
TypeScript aims to solve a particular kind of problem when writing any kind of JavaScript code: that, at any given time, it is unknown what the type of a given variable you are using is. TypeScript essentially turns JavaScript's dynamically typed system into a static one, avoiding bugs and allowing for greater code completion.

## Primitives
In TypeScript, there are three primitives: `string`, `number` and `boolean`.

|   Type    |   Example             |
| --------- | -------------         |
|   string  |   `'hello'` `'james'` |
|   number  |   `123`               |
|   boolean |   `true, false`       |

There exist capital-cased version of each one, `String`, `Number`, and `Boolean`, but these are special built-in types and should generally be avoided.

## Arrays
Arrays can be defined by specifying a type then two square brackets. For instance, an array of numbers would be defined as `number[]`. Alternatively, the angle-bracket syntax can be used: `Array<number>`.

```ts
// an array of numbers
const numArr: number[] = [1, 2, 3];

// an array of strings
const strArr: Array<string> = ['my', 'name', 'jeff'];

// an array of booleans
const boolArr: boolean[] = [true, false];
```

## Any
If you think TypeScript is being annyoing, the `any` type exists to basically make it moot point and allow any type of value to be assigned to a variable. Use with caution.

```ts
let something: any = 'hello';
something = 123;
something = false;
```

### A Note on Any
By default, TypeScript will start off by implicitly typing most of your variables for you. In the event that TypeScript can't figure out what type you're using, it will default to `any`. If you want TypeScript to complain if it ever can't figure out something, use the `noImplicitAny` flag.