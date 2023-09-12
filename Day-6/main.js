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

//Exercise 7

//Exercise 8

