'use strict';

// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var table = document.getElementById('cookieTable');
var myStores = [];
//var containerParent = document.getElementById('container-parent');

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotals = 0;
  this.hourlySalesArray = [];

  myStores.push(this);
}

Store.prototype.getRandomCustomers = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

};

Store.prototype.calculateHourlySales = function () {
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = Math.ceil(this.getRandomCustomers() * this.avg);
    this.hourlySalesArray.push(hourlyTotal);
    this.dailyTotals += hourlyTotal;
  }
};
Store.prototype.render = function () {
  this.calculateHourlySales();
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);
  for (var i = 0; i < this.hourlySalesArray.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.hourlySalesArray[i];
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotals;
  trElement.appendChild(tdElement);
  table.appendChild(trElement);
};


//render table header
function renderHeader() {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'MyStores';
  trElement.appendChild(thElement);
  for (var i = 0; i < hours.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = hours[i];
    trElement.appendChild(tdElement);
  }
  table.appendChild(trElement);
  var tdElement = document.createElement('td');
  thElement.textContent = this.hourlySales[i];
  thElement.appendChild(tdElement);
}
// render table footer

function renderFooter() {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  trElement.appendChild(thElement);

  var totalHours = 0;
  var grandTotalOfTotals = 0;

  for (var i = 0; i < hours.length; i ++){
    totalHours = 0;
    for (var j = 0; j < myStores.length; j++){
      totalHours += myStores[j].hourlySalesArray[i];
      grandTotalOfTotals += myStores[j].hourlySalesArray[i];
    }
    thElement = document.createElement('th');
    thElement.textContent = totalHours;
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = grandTotalOfTotals;
  trElement.appendChild(thElement);
  table.appendChild(trElement);
}

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function renderAll() {
  renderHeader();
  for (var i=0; i < myStores.length; i++){
    myStores[i].render();
  }
  renderFooter();
}
renderAll();

// getRandomCustomerCount: function () {
//   return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
// },

// calculateHourlySales() {
//   for (var i = 0; i < hours.length; i++) {
//     var customerForTheHour = this.getRandomCustomerCount();
//     var hourTotal = Math.ceil(customerForTheHour * this.avg);
//     this.hourlySalesArray.push(hourTotal);
//     this.dailyTotals += hourTotal;
//   }
// }

// render() {
//   this.calculateHourlySales();

//   for (var i = 0; i < hours.length; i++) {
//     var liElement = document.createElement('li');
//     liElement.textContent = hours[i] + ': ' + this.hourlySalesArray[i] + ' cookies';
//     seattleList.appendChild(liElement);
//   }
//   liElement = document.createElement('li');
//   liElement.textContent = 'the total ' + this.dailyTotals;
//   seattleList.appendChild(liElement);
// }

// };

// var tokyo = {
//   name: 'Tokyo',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   dailyTotals: 0,
//   hourlySalesArray: [],

//   getRandomCustomerCount: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       var customerForTheHour = this.getRandomCustomerCount();
//       var hourTotal = Math.ceil(customerForTheHour * this.avg);
//       this.hourlySalesArray.push(hourTotal);
//       this.dailyTotals += hourTotal;
//     }
//   },
//   render() {
//     this.calculateHourlySales();

//     for (var i = 0; i < hours.length; i++) {
//       var liElement = document.createElement('li');
//       liElement.textContent = hours[i] + ': ' + this.hourlySalesArray[i] + ' cookies';
//       seattleList.appendChild(liElement);
//     }
//     liElement = document.createElement('li');
//     liElement.textContent = 'the total ' + this.dailyTotals;
//     seattleList.appendChild(liElement);
//   }

// };

// var dubai = {
//   name: 'Dubai',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   dailyTotals: 0,
//   hourlySalesArray: [],

//   getRandomCustomerCount: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       var customerForTheHour = this.getRandomCustomerCount();
//       var hourTotal = Math.ceil(customerForTheHour * this.avg);
//       this.hourlySalesArray.push(hourTotal);
//       this.dailyTotals += hourTotal;
//     }
//   },
//   render() {
//     this.calculateHourlySales();

//     for (var i = 0; i < hours.length; i++) {
//       var liElement = document.createElement('li');
//       liElement.textContent = hours[i] + ': ' + this.hourlySalesArray[i] + ' cookies';
//       seattleList.appendChild(liElement);
//     }
//     liElement = document.createElement('li');
//     liElement.textContent = 'the total ' + this.dailyTotals;
//     seattleList.appendChild(liElement);
//   }

// };

// var paris = {
//   name: 'Paris',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   dailyTotals: 0,
//   hourlySalesArray: [],

//   getRandomCustomerCount: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       var customerForTheHour = this.getRandomCustomerCount();
//       var hourTotal = Math.ceil(customerForTheHour * this.avg);
//       this.hourlySalesArray.push(hourTotal);
//       this.dailyTotals += hourTotal;
//     }
//   },
//   render() {
//     this.calculateHourlySales();

//     for (var i = 0; i < hours.length; i++) {
//       var liElement = document.createElement('li');
//       liElement.textContent = hours[i] + ': ' + this.hourlySalesArray[i] + ' cookies';
//       seattleList.appendChild(liElement);
//     }
//     liElement = document.createElement('li');
//     liElement.textContent = 'the total ' + this.dailyTotals;
//     seattleList.appendChild(liElement);
//   }

// };

// var lima = {
//   name: 'Lima',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   dailyTotals: 0,
//   hourlySalesArray: [],

//   getRandomCustomerCount: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       var customerForTheHour = this.getRandomCustomerCount();
//       var hourTotal = Math.ceil(customerForTheHour * this.avg);
//       this.hourlySalesArray.push(hourTotal);
//       this.dailyTotals += hourTotal;
//     }
//   },
//   render() {
//     this.calculateHourlySales();

//     for (var i = 0; i < hours.length; i++) {
//       var liElement = document.createElement('li');
//       liElement.textContent = hours[i] + ': ' + this.hourlySalesArray[i] + ' cookies';
//       seattleList.appendChild(liElement);
//     }
//     liElement = document.createElement('li');
//     liElement.textContent = 'the total ' + this.dailyTotals;
//     seattleList.appendChild(liElement);
//   }

// };



// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();

// seattle.renderList();
// tokyo.renderList();
// dubai.renderList();
// paris.renderList();
// lima.renderList();
