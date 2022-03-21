# Chapter 2: Variables, Functions and Type Annotations
## Variables
In TypeScript, to define a variable with a static type, you can add a type annotation after the identifier.

```ts
let name: string = 'Alan';
```

However, TypeScript actually infers what types your variables are most of the time. So one can simply type `let name = 'Alan'` and TypeScript will automatically infer that `name` is a type `string`.

```ts
let name = 'Alan';
```

## Functions
TypeScript allows you to define the type of both the return value and the parameters of a function. For instance, to define the type of a parameter:

```ts
function greeting(name: string) {
    console.log(`Hello, ${name}!`);
}
```

And then, to define the type of the return value, place the type after the parameter list.

```ts
function square(x: number): number {
    return x * x;
}
```

Usually, TypeScript can infer the type of the returned value for you, so the above syntax isn't always necessary. It can be used in case of documentation, preventing accidental changes, or just for personal preference.

### Anonymous Functions
When anonymous functions are used, TypeScript will automatically infer their types.

```ts
const names = ['alan', 'james', 'david'];

names.forEach((s) => {
    // s is inferred type string
    console.log(s.toUpperCase());
})
```