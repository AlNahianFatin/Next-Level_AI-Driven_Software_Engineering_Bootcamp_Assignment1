# How `Generics` allow building reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Introduction

Generics give developers the opportunity to dynamically generalize and handle any type of data regardless of the data type.
This comes in handy when we don't know what type of data we are going to receive, but have to process the data anyway.  

Example:

```ts
// using generic with array
type Coordinates<X, Y> = [X, Y];
const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ['20', '30']; // No Error
```

Generic fetches the data and recognizes the data type automatically.
So, no matter what type of data we are going to pass, it will still return an array of coordinates


```ts
// using generic with function
const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: 'Advanced Pain in Life',
        ...studentInfo
    };
};
const student1 = {
    id: 234,
    name: 'Al Nahian Fatin',
    hasPen: true
};
const result1 = addStudentToCourse(student1);
console.log(result1);
```

This function produces an object regardless of the data type of the keys and number of keys the function receives at run time.