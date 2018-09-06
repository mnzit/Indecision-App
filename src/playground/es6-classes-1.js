
class Person  {
    constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}


class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `. Their major is ${this.major}`;
        }
        return description;
    }
}

const me = new Student('Manjit Shakya',20,'BIT');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += `. I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const travellerNibesh = new Traveller('Nivesh Maharjan', 20, 'Kathmandu');
console.log(travellerNibesh.getGreeting());

const travellerDikesh = new Traveller();
console.log(travellerDikesh.getGreeting());
