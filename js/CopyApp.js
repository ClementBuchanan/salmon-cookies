'use strict';

// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



//var containerParent = document.getElementById('container-parent');

var table = document.getElementById('table');

var seattle = new Location('Seattle', 23, 65, 6.3);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
var dubai = new Location('Dubai', 11, 38, 3.7);
var paris = new Location('Paris', 20, 38, 2.3);
var lima = new Location('Lima', 2, 16, 4.6);

// Constructor function

seattle.intro();


function Location(name, min, max, avg){
  this.name = name,
  this.min = min,
  this.max = max,
  this.avg = avg,
  this.dailyTotals = 0,
  this.hourlySalesArray = [],

  this.intro = function(){
    console.log(`Hello ${this.name}`);
  },
  this.getRandomCustomerCount = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  this.calculateHourlySales = function() {
    for (var i = 0; i < hours.length; i++) {
      var customerForTheHour = this.getRandomCustomerCount();
      var hourTotal = Math.ceil(customerForTheHour * this.avg);
      this.hourlySalesArray.push(hourTotal);
      this.dailyTotals += hourTotal;
    }                   
  },
  this.render = function() {
    this.calculateHourlySales();

    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.hourlySalesArray[i] + ' cookies';
      // seattleList.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'the total ' + this.dailyTotals;
    // seattleList.appendChild(liElement);
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();