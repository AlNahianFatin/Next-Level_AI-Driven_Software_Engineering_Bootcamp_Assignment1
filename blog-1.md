# Why `any` is a Type Safety Hole, Why `unknown` is Safer in TypeScript and The concept of type narrowing

## Introduction

TypeScript added `type safety` to Javascript because it helps catch errors at compile time. 
With `any` data type, any type of data can be passed, which may not show errors at compile time, but will eventually fail later.
This is why `any` can be recognized as a `Type Safety Hole`.

Example:

```ts
let value: any = "Hello";

value.toUpperCase();
value = 10;
value.toFixed(2); // Runtime Error
```

TypeScript does not warn us because `any` disables safety checks.
That is why any is called a type safety hole.


A better alternative is `unknown`, which forces developers to check data types before using them. 
The unknown type is also used for unpredictable data, but unlike any, TypeScript forces us to verify the type before using it.

Example:

```ts
let value: unknown = "Hello"; // Compile Time Error

value.toUpperCase();
```

This produces an error because TypeScript does not yet know whether value is a string.
We must first check the type.


Type narrowing means reducing a broad type into a more specific type using conditions like typeof, instanceof, or custom checks.

Example:

```ts
let value: unknown = "TypeScript";

if (typeof value === "string") {
    console.log(value.toUpperCase());
else 
    console.log("Invalid Input");
}
```

Inside the if block, TypeScript now understands that value is a string.
This process is called type narrowing.