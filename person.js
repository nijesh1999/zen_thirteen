function Person() {
  this.firstName = "";
  this.lastName = "";
  this.age = 0;
  this.height = "";
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

var person1 = new Person();
person1.firstName = "G";
person1.lastName = "Gowthaman";
person1.age = "24";
person1.height = "5.10";

alert(person1.getFullName());
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.height);

var person2 = new Person();
person2.firstName = "A";
person2.lastName = "kiran";
person2.age = "28";
person2.height = "7";
alert(person2.getFullName());
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.height);
