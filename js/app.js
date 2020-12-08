'use strict';

console.log('Hello World');

Var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookies = []

function randomNumber (min, max){

  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
var myNumber = randomNumber(3,6);

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
}