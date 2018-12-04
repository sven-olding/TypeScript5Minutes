function greeter(person) {
    return "Hallo " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Max", lastName: "Mustermann" };
document.body.innerHTML = greeter(user);
