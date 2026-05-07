function filterEvenNumbers(arrayOfNumbers: number[]): number[] {
    const result = arrayOfNumbers.filter((evenNum: number) => evenNum % 2 === 0);
    return result;
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]);


function reverseString(value: string): string {
    let reversedString: string = '';
    for (let i = value.length - 1; i >= 0; i--)
        reversedString += value.charAt(i);
    return `"${reversedString}"`;
}
reverseString("typescript");


type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string {
    if (typeof value === 'string')
        return `"String"`;
    else if (typeof value === 'number')
        return `"Number"`;
    else
        return `"Invalid input"`;
}
checkType("Hello");


function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return `"${obj[key]}"`;
};
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");


interface Book {
    title: string;
    author: string;
    publishedYear: number;
};
function toggleReadStatus(book: Book) {
    return { ...book, isRead: true };
};
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
};
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    };
    getDetails(): string {
        return (`"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`);
    };
};
const student = new Student("Alice", 20, "A");
student.getDetails();


function getIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter((num: number) => arr2.includes(num));
};
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);