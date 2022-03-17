# Chapter 0: Setup
## Installation and Configuration
To use TypeScript with Node, install it onto a project.

```
$ npm install -D typescript
```

This installs typescript as a dev dependency. The typescript package allows the use of the `tsc` command, which will compile a `.ts` file into a `.js` file.

```
$ tsc app.ts
```

It allows allows you to create a `tsconfig.json` file using the `tsc --init` command. The config file controls many different aspects of compilation to JavaScript, including versioning and support levels.

```
$ tsc --init
```

Some pretty common ones include setting the `outDir` and `rootDir` to a source and output directory, and ignoring `./node_modules`.

```json
{
  "compilerOptions": {                        
    "target": "es6",                               
    "module": "commonjs",                           
    "outDir": "./dist",                             
    "rootDir": "./src",                             
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,                       
  },
  "exclude":[
    "./node_modules"
  ]
}
```

If such a `tsconfig.json` is defined in your project, using the `tsc` command will automatically compile your project without need for specifying specific source files. This is probably how it should always be done.

```
$ tsc
```

Manually compiling and running your code is fine and all, but `ts-node` will do the process for you.

```
$ npm install -D ts-node
```

The `ts-node` package allows you to use the `ts-node` command to point at and "run" a `.ts` file.

```
$ npx ts-node src/app.js
```

You can then configure the `package.json` file to run this automatically with `start`.

```json
...
"scripts": {
    "start": "npx ts-node ./src/app.ts"
}
...
```

```
$ npm start
```

## Installing Dependencies
You can use any npm package with TypeScript, so long as it has type definitions supported. For instance, the `express` package has a blue DT icon you can click to get to its type definitions page. We'll begin by installing the type definitions for Node itself.

```
$ npm i --save @types/node
```

This will allow you to get autocorrect and type checking for Node library features. To do the same for express, use the following.

```
$ npm i --save @types/express
```

Try typing in `console.log` to view the suggestions you now have. Isn't that swell?

## Extra Tip: Nodemon
The `nodemon` package allows you to automatically restart your code whenever a change is detected.

```
npm i -D nodemon
```

Edit your scripts to start with nodemon as follows.

```
...
"scripts": {
    "dev": "nodemon ./src/app.ts"
}
...
```

```
$ npm dev
```
