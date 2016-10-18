$( document ).ready(function() {



$('#button2').click(function(){
  $('#jquery-div').load("jquery.txt");
  });

$("#button3").click(function(){
  $.ajax({url: "jquery2.txt", success: function(result){
        $("#jquery-2").html(result);
    }});
});

$("#button4").click(function(){
  $('#json').getJSON("data.json");
});

$("#button5").click(function(){
  $('#json2').load("data.json");
});


var cars = ["Saab", "Volvo", "BMW"];

var name = cars[0];
var length = cars.length;
console.log(name);
console.log(cars);
console.log(length);

cars.push('Toyota');
console.log(cars);
cars.pop();
console.log(cars);
cars.sort();
console.log(cars);

for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
};

var myToyota = {
  color: "blue",
  wheels: 4,
  engine: "V8"
};
console.log(myToyota.engine);

var myPrius = new Object();
myPrius.color = "grey";
myPrius.wheels = 4;
myPrius.engine = "Hybrid";
myPrius.drive = function(){
  console.log("Prius Custom method!!!");
}
console.log(myPrius);
myPrius.drive();

function car(color, wheels, engine){
  this.color = color;
  this.wheels = wheels;
  this.engine = engine;
}

var myCar = new car("red", 4, "hot rod");
var myCar2 = new car("purple", 16, "bowheeeemuth");
console.log(myCar2);

var scope1 = function(){
  var text = "Local Scope";

console.log(text);
}
var text2 = "Global Scope";
console.log(text2);

scope1();


var oldObject = {
  rusty: true,
  price: "expensive",
  feet: 4
}

var newObject = Object.create(oldObject);
console.log(newObject.price);

var a = {a: 1};
var b = Object.create(a);
var c = Object.create(b);
console.log(c.a);
console.log(document.URL );

var blah = myBlahFunction(23454545343,344356);

function myBlahFunction(a, b) {
  return a * b;
}

console.log(blah);

var myObject = {
    firstName:"Kevin",
    lastName: "No-Tan Huelsmann",
    fullName: function () {
        return this.firstName + " " + this.lastName + " is the baddest mo-fo!";
    }
}

console.log(myObject.fullName());

function whatsMyNameBitch(x, y) {
  this.firstName = x;
  this.lastName = y;
  this.fullName = function () {
    return this.firstName + " " + this.lastName + " is the baddest mo-fo!";
  }
}

var kevDog = new whatsMyNameBitch("Kevin", "John" );
console.log(kevDog.firstName);
console.log(kevDog.lastName);
console.log(kevDog.fullName());

var ammi = new whatsMyNameBitch("Ammi", "The Cuttest")
console.log(ammi.fullName());

});
