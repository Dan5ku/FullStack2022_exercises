//Exercise 3.1

const greet = () => {
    console.log("Hello there");
};

greet();

const sum = (a, b, c) => {
    return a + b + c;
};

sum();

//Exercise 3.2

const names = ["Lily", "Aurelius", "Peter"];

function longestName(names) {
    names.sort(function(a, b) {return b.length - a.length});
    return names[0].length;
}

console.log(longestName(names));

//3.3

let n = Math.floor(Math.random() * 2);
n == 0 ? console.log("Good morning") : console.log("Good evening");

//3.4

let N = getRndInteger(1,10);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

N%2 == 0 ? console.log(N, "is Even Number") :  console.log(N, "is Odd Number!");

//3.5

const args = ["a", "b","c", "d"];

let x = Math.floor(Math.random() * args.length);

console.log(args[x]);

//3.6

const southamericans = ["Pele", "Maradona", "Messi"];
const europeans = ["Baggio", "Zidane", "Litmanen"];

let footballers = [...southamericans, ...europeans];

console.log(footballers);

//3.7

const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

[X ,Y] = nums;
console.log(X,Y);

[X , Z, Y] = nums;
console.log(X,Y);

[X , Z, Y, E, ...R] = nums;
console.log(R);

//3.8

const person1 = {
    name: "Vilja",
    lastName: "Pelto",
  };
  
const person2 = {
    name: "Miina",
    lastName: "Kenttä",
  };

const people = []

people.push(person1);
people.push(person2);

console.log(people);

const peoples = people.map(item => {
    return item
})

console.log("Good evening! ", people[person1.name]);
console.log("Good evening! ", people[person2.name]);