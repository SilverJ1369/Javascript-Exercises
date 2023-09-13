//Exercise 1
function thisGlobal() {
    console.log(this);
}
thisGlobal();

const test = {
    score : 88,
    grade: function () {
        console.log(this);
    },
    failure: () => console.log(this),
}
test.grade();
test.failure();

//Exercise 2 & 3
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    greet() {
        console.log(`Hallo, Ich heiße ${this._name} und bin ${this._age} jahre alt!`);
    }
    //Exercise 4
    static info() {
        return `This is a person class`;
    }
    //Exercise 4
    infoCall() {
        console.log(Person.info());
    }
    //Exercise 5
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            console.log("Age must be greater than Zero!");
            } else {
                this._age = value;
            }
        }
    }
    
const person1 = new Person("Johannes", 27);
const person2 = new Person("Julia", 23);
person1.greet();
person2.greet();
//Exercise 4
console.log(Person.info());
person1.infoCall();
//Exercise 5
const person3 = new Person("Sarah", 64);
person3.age = -1;
console.log(person3.age);
person3.age = 24;
console.log(person3.age);

//Exercise 6 (scary)
//Done in seperate repo

//Exercise 7
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    removeBook(bookTitle) {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            if (book.title == bookTitle) {
              this.books.splice(i);
            }
    }
}
    listBooks() {
        this.books.forEach((element) => console.log(element));
    }
}

class Books {
    #ISBN;
    title;
    author;
    yearPublished;
    genre;
    constructor(ISBN, title, author, yearPublished, genre) {
        this.#ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.genre = genre;
    }
}
const myLibrary = new Library;
myLibrary.addBook(new Books(1, "The Beginning", "That one guy", 1919, "Action"));
myLibrary.addBook(new Books(2, "The Middle", "That one guy", 1921, "Action"));
console.log(myLibrary);
myLibrary.removeBook("The Middle");
console.log(myLibrary);
myLibrary.listBooks();

//Exercise 8
class Student {
    name;
    grades = [];
    constructor(name, grades) {
        this.name = name;
        this.grades = grades || [];
    }
    addGrades(grade) {
        this.grades.push(grade);
    }
    findAverage() {
        return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    }
}

const myStudent = new Student("Joe");
myStudent.addGrades(79);
myStudent.addGrades(84);
myStudent.addGrades(99);
myStudent.addGrades(94);
myStudent.addGrades(64);
myStudent.addGrades(78);
console.log(myStudent.findAverage());