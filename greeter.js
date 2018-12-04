var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = (firstName + " " + middleInitial + " " + lastName).trim();
    }
    return Student;
}());
function greeter(person) {
    return "Hallo " + person.firstName + " " + person.lastName;
}
var user = new Student("Max", "M.", "Mustermann");
document.body.innerHTML = greeter(user);
