//Exercise 1
// class Subject {
// 	constructor() {
// 		this.observers = [];
// 	}
// 	addObserver(obs) {
//         this.observers.push(obs);
//         console.log(this.observers);
//     }
//     removeObserver(obs) {
//         for(let i = 0; i < this.observers.length; i++){
//             if(obs == this.observers[i]){
//                 this.observers.splice(i, 1);
//             }
//         }
//         console.log(this.observers);
//     }
//     notifyObservers() {
//         this.observers.forEach((obs) => obs.update());
//     }
// }

// class Observer {
// 	update() {
// 		console.log('Observer updated!');
// 	}
// }
// const mySubject = new Subject();
// const obs1 = new Observer();
// const obs2 = new Observer();
// const obs3 = new Observer();
// mySubject.addObserver(obs1);
// mySubject.addObserver(obs2);
// mySubject.addObserver(obs3);
// mySubject.notifyObservers();
// mySubject.removeObserver(obs2);
// mySubject.notifyObservers();

//Exercise 2
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];

const {name: firstName, age: age, address:{city: myCity, country: myCountry}} = person;
let [, secondFruit, , fourthFruit] = fruits;

console.log(firstName, age, secondFruit, fourthFruit, myCity, myCountry);

//Exercise 3
async function fetchPosts() {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    try {
        const data = await fetch(url);
        const res = await data.json();
        console.log(res);
    } catch (err) {
        console.log('Could not fulfill this request. Please check the following error: ', err);
    }

	// Your async/await code here
}

// Call the function to fetch posts
//fetchPosts();

//Exercise 4
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(obs) {
        this.observers.push(obs);
        console.log(this.observers);
    }

    removeObserver(obs) {
        for(let i = 0; i < this.observers.length; i++){
            if(obs == this.observers[i]){
                this.observers.splice(i, 1);
            }
        }
        console.log(this.observers);
    }
	notifyObservers(data) {
		// TODO: Notify all observers with given data
        // console.log('from observers: ', this.observers);
        this.observers.forEach((obs) => {
            obs.update(data);
        });
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
        try {
            const data = await fetch(url);
            const res = await data.json();
            //console.log(res);
            this.notifyObservers(res);
        } catch (err) {
            console.log('Could not fulfill this request. Please check the following error: ', err);
        }
		// TODO: Fetch data from the API and notify observers
	}
}

class Observer {
	update(data) {
        try {
            console.log('update method: ', data);
            const {0: {title: firstTitle}} = data[0];
        } catch (err) {
            console.log('We got an error :( :', err);
        } finally {
            console.log('Nothing happened');
        }
		// TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.
	}
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method

const mySubject = new Subject();
const obs1 = new Observer();
const obs2 = new Observer();
const obs3 = new Observer();
mySubject.addObserver(obs1);
mySubject.addObserver(obs2);
mySubject.addObserver(obs3);
mySubject.fetchAndNotify();