interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hallo " + person.firstName + " " + person.lastName;
}

let user =  { firstName: "Max", lastName: "Mustermann" };

document.body.innerHTML = greeter(user);

