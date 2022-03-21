# Object Types, Aliases, Interfaces
## Object Type
TypeScript allows you to define types in terms of an object. For instance, to create a function that accepts some JavaScript object with a x and a y coordinate:

```ts
function getDistToOriginSquared(point: {x: number; y: number}): number {
    return point.x * point.x + point.y * point.y;
}
```

Object types also support optionals.

```ts
function printName(person: {first: string; middle?: string, last: string}) {
    console.log('Hi, ' + person.first + person.middle ? person.middle : '' + ' ' + person.last);
}
```

## Aliases
If you get tired of defining the same object over and over, you can define it as its own type with an alias:

```ts
type Point = {
    x: number;
    y: number;
};

function printCoord(point: Point) {
    console.log('(' + point.x + ', ' + point.y + ')');
}
```

## Interfaces
Interfaces work a lot like type aliases, except they can be extended.

```ts
interface Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}