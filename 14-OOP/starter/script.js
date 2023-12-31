'use strict';
console.log('worked');
function Car(make, speed) {
 this.make = make
 this.speed = speed
}

Car.prototype.accelerate = function () {
    this.speed +=10
    console.log(this.speed);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(this.speed);
}

let car1 = new Car("bmw", 120);
let car2 = new Car("Mercedes", 25)

car1.brake()
car1.accelerate()
car2.brake()
car2.brake()
car2.brake()
car2.accelerate()