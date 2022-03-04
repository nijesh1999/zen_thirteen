// Basefare + ((Cost per minute x time of the ride) + (cost per mile x ride distance) x surge boost multiplier) + booking fee = Passengers Ride Fare

function Uberprice() {
  this.Basefare = 0;
  this.CostperMinute = 0;
  this.CostperMile = 0;
  this.BookingFee = 0;
  this.SurgePrice = 0;
  this.Tipping = 0;
  this.TimeoftheRide = 0;
  this.rideDistance = 0;

  this.getUberFare = function () {
    return (
      this.Basefare +
      (this.CostperMinute * this.TimeoftheRide +
        this.CostperMile * this.rideDistance) +
      this.BookingFee
    );
  };
}

var person1 = new Uberprice();
person1.Basefare = "10";
person1.CostperMinute = "3";
person1.CostperMile = "2";
person1.BookingFee = "5";
person1.SurgePrice="3";
person1.Tipping = "1";
person1.TimeoftheRide="1";
person1.rideDistance="1"

console.log("total price",person1.getUberFare());
console.log(person1.Basefare);
console.log(person1.CostperMinute);
console.log(person1.CostperMile);
console.log(person1.BookingFee);
console.log(person1.SurgePrice);
console.log(person1.Tipping);
console.log(person1.TimeoftheRide);
console.log(person1.rideDistance);