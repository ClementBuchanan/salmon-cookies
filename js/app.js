'use strict';

// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



//var containerParent = document.getElementById('container-parent');
var seattleList = document.getElementById('seattle');
var tokyoList = document.getElementById('tokyo');
var dubaiList = document.getElementById('dubai');
var parisList = document.getElementById('paris');
var limaList = document.getElementById('lima');


var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotals: 0,
  hourlySalesArray: [],

  getRandomCustomerCount: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      var customerForTheHour = this.getRandomCustomerCount();
      var hourTotal = Math.ceil(customerForTheHour * this.avg);
      this.hourlySalesArray.push(hourTotal);
      this.dailyTotals += hourTotal;
    }
  },
  render() {
    this.calculateHourlySales();

    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.hourlySalesArray[i] + ' cookies';
      seattleList.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'the total ' + this.dailyTotals;
    seattleList.appendChild(liElement);
  }

};

var tokyo = {
  name: 'Tokyo',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotals: 0,
  hourlySalesArray: [],

  getRandomCustomerCount: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      var customerForTheHour = this.getRandomCustomerCount();
      var hourTotal = Math.ceil(customerForTheHour * this.avg);
      this.hourlySalesArray.push(hourTotal);
      this.dailyTotals += hourTotal;
    }
  },
  render() {
    this.calculateHourlySales();

    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.hourlySalesArray[i] + ' cookies';
      seattleList.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'the total ' + this.dailyTotals;
    seattleList.appendChild(liElement);
  }

};

var dubai = {
  name: 'Dubai',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotals: 0,
  hourlySalesArray: [],

  getRandomCustomerCount: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      var customerForTheHour = this.getRandomCustomerCount();
      var hourTotal = Math.ceil(customerForTheHour * this.avg);
      this.hourlySalesArray.push(hourTotal);
      this.dailyTotals += hourTotal;
    }
  },
  render() {
    this.calculateHourlySales();

    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.hourlySalesArray[i] + ' cookies';
      seattleList.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'the total ' + this.dailyTotals;
    seattleList.appendChild(liElement);
  }

};

var paris = {
  name: 'Paris',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotals: 0,
  hourlySalesArray: [],

  getRandomCustomerCount: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      var customerForTheHour = this.getRandomCustomerCount();
      var hourTotal = Math.ceil(customerForTheHour * this.avg);
      this.hourlySalesArray.push(hourTotal);
      this.dailyTotals += hourTotal;
    }
  },
  render() {
    this.calculateHourlySales();

    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.hourlySalesArray[i] + ' cookies';
      seattleList.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'the total ' + this.dailyTotals;
    seattleList.appendChild(liElement);
  }

};

var lima = {
  name: 'Lima',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotals: 0,
  hourlySalesArray: [],

  getRandomCustomerCount: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      var customerForTheHour = this.getRandomCustomerCount();
      var hourTotal = Math.ceil(customerForTheHour * this.avg);
      this.hourlySalesArray.push(hourTotal);
      this.dailyTotals += hourTotal;
    }
  },
  render() {
    this.calculateHourlySales();

    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.hourlySalesArray[i] + ' cookies';
      seattleList.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'the total ' + this.dailyTotals;
    seattleList.appendChild(liElement);
  }

};



seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

seattle.renderList();
tokyo.renderList();
dubai.renderList();
paris.renderList();
lima.renderList();
