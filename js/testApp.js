'use strict';

var containerParent = document.getElementById('container-parent');
var impeyanList = document.getElementById('impeyan');
var blueList = document.getElementById('blue-earred');
var reevesList = document.getElementById('reeves');
// console.log(impeyanList, blueList, reevesList);

var impeyan = {
  title: 'Impeyan, Male',
  src: 'img/impeyan.jpg',
  alt: 'Male Impeyan Pheasant with brilliant blue, green, black, and orange colors standing in grass near rocks',
  colors: ['Blue', 'Orange', 'Green'],
  pContent: 'The Himalayan Monal, Lophophorus impejanus also known as the Impeyan Monal, Impeyan Pheasant, and Danphe, is a bird in the pheasant family, Phasianidae. It is the national bird of Nepal. the Himalayan Monal has been classified as monophyletic. However, studies have shown that the male Himalayan Monal of northwestern India lacks the white rump of other Himalayan Monals, and it has more green on the breast, indicating the possibility of a second subspecies.',
  render: function () {
    // create element
    var sectionElement = document.createElement('section');

    // give it content
    // its content will be other elements - created later

    // append to the DOM
    containerParent.appendChild(sectionElement);

    //create element
    var imgElement = document.createElement('img');
    // give it content
    imgElement.setAttribute('src', this.src);
    // append it to the DOM
    sectionElement.appendChild(imgElement);

    //create element, append it to DOM, give content later
    var articleElement = document.createElement('article');
    sectionElement.appendChild(articleElement);

    //create element
    var h2Element = document.createElement('h2');
    // give it content
    h2Element.textContent = this.title;
    //append it to the DOM
    articleElement.appendChild(h2Element);

    //create element
    var pElement = document.createElement('p');
    // give it content
    pElement.textContent = this.pContent;
    //append it to the DOM
    articleElement.appendChild(pElement);
  },
  renderList: function () {
    for (var i = 0; i < this.colors.length; i++) {
      // create element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = this.colors[i];
      // append it to the DOM
      impeyanList.appendChild(liElement);
    }
    liElement = document.createElement('li');
    // give it content
    liElement.textContent = 'the total';
    // append it to the DOM
    impeyanList.appendChild(liElement);
  }
};

var blueEarred = {
  title: 'BlueEarred, Male',
  src: 'img/blue-earred.jpg',
  alt: 'BLue Earred relevant message',
  colors: ['Blue', 'Black', 'Red'],
  pContent: 'Blue Eared Pheasants are a rich blue-gray color, but with bright red facial patches and distinguishing white ear coverts along the sides of the head. The top of the head is highlighted by dark blue-black coloring that matches the darker blue-gray of the full tail. Tails are made up of 24 gracefully flowing feathers. Legs and feet are scarlet and match the facial patches.  Blue Eared Pheasants are vocal and amiable birds. Although pheasants in general tend to be a bit standoffish, Blue Eared Pheasants are one of the friendliest of species and have been known to approach their caretakers and eat out of their hands.',
  render: function () {
    // create element
    var sectionElement = document.createElement('section');

    // give it content
    // its content will be other elements - created later

    // append to the DOM
    containerParent.appendChild(sectionElement);

    //create element
    var imgElement = document.createElement('img');
    // give it content
    imgElement.setAttribute('src', this.src);
    // append it to the DOM
    sectionElement.appendChild(imgElement);

    //create element, append it to DOM, give content later
    var articleElement = document.createElement('article');
    sectionElement.appendChild(articleElement);

    //create element
    var h2Element = document.createElement('h2');
    // give it content
    h2Element.textContent = this.title;
    //append it to the DOM
    articleElement.appendChild(h2Element);

    //create element
    var pElement = document.createElement('p');
    // give it content
    pElement.textContent = this.pContent;
    //append it to the DOM
    articleElement.appendChild(pElement);
  },
  renderList: function () {
    for (var i = 0; i < this.colors.length; i++) {
      // create element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = this.colors[i];
      // append it to the DOM
      blueList.appendChild(liElement);
    }
    liElement = document.createElement('li');
    // give it content
    liElement.textContent = 'the total';
    // append it to the DOM
    blueList.appendChild(liElement);
  }
};

var reeves = {
  title: 'Reeves, Pair',
  src: 'img/reeves-pair.png',
  alt: 'Reeves Pair relevant message',
  colors: ['Gold', 'Black', 'White'],
  pContent: 'Reeves\'s pheasant is a species unique to central and eastern China. With its long tail, the bird is speedy both while flying and on the ground. During fast flight, the long tails help the bird control its direction and buffers its landing. Female birds usually appear to be very attached to their nests. They are reluctant to leave and make intimidating poses even if humans approach the nests.',
  render: function () {
    // create element
    var sectionElement = document.createElement('section');

    // give it content
    // its content will be other elements - created later

    // append to the DOM
    containerParent.appendChild(sectionElement);

    //create element
    var imgElement = document.createElement('img');
    // give it content
    imgElement.setAttribute('src', this.src);
    // append it to the DOM
    sectionElement.appendChild(imgElement);

    //create element, append it to DOM, give content later
    var articleElement = document.createElement('article');
    sectionElement.appendChild(articleElement);

    //create element
    var h2Element = document.createElement('h2');
    // give it content
    h2Element.textContent = this.title;
    //append it to the DOM
    articleElement.appendChild(h2Element);

    //create element
    var pElement = document.createElement('p');
    // give it content
    pElement.textContent = this.pContent;
    //append it to the DOM
    articleElement.appendChild(pElement);
  },
  renderList: function () {
    for (var i = 0; i < this.colors.length; i++) {
      // create element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = this.colors[i];
      // append it to the DOM
      reevesList.appendChild(liElement);
    }
    liElement = document.createElement('li');
    // give it content
    liElement.textContent = 'the total';
    // append it to the DOM
    reevesList.appendChild(liElement);
  }
};

// how to manipulate DOM
// create element
// give it content
// append it to the DOM

impeyan.render();
blueEarred.render();
reeves.render();

impeyan.renderList();
blueEarred.renderList();
reeves.renderList();