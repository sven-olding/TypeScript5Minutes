class Student implements Person {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = (firstName + " " + middleInitial + " " + lastName).trim();
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hallo " + person.firstName + " " + person.lastName;
}

let user =  new Student("Max", "M.", "Mustermann");

document.body.innerHTML = greeter(user);

