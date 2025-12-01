const books = {
  b001: { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
  b002: { title: "1984", price: 15.99, isAvailable: false },
  b003: { title: "The Great Gatsby", price: 12.49, isAvailable: true },
  b004: { title: "Moby Dick", price: 22.5, isAvailable: false },
};
a = Object.entries(books);
final = [];

v = a
  .filter((data) => data[1].price > 16)
  .map((data) =>
    console.log(`ID:${data[0]} Book:${data[1].title} £${data[1].price}`)
  );

console.log(v);

const user1 = {
  username: "rpchan",
  subscriptionLevel: "bronze",
};

const user2 = {
  username: "bcstevens",
  subscriptionLevel: "silver",
  accessPremiumFeature: true,
};

function canAccessPremiumFeature(userObj, prop) {
  /*
Challenge:
1. Write logic to check if the object has the property. 
   Do this challenge twice, once with hasOwn and once 
   with hasOwnProperty. All the function need do is return
   a boolean. 
   Bonus: use short circuiting to only return true if 
   'accessPremiumFeature' both exists AND is true.
   u
*/
  return (
    Object.hasOwn(userObj, prop) &&
    userObj.hasOwnProperty(prop) &&
    userObj[prop] == true
  ); //hasown is based on the Object whereas hasownproperty is based on the object data itself
}

console.log(canAccessPremiumFeature(user1, "accessPremiumFeature"));
console.log(canAccessPremiumFeature(user2, "accessPremiumFeature"));

const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4];
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3];
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8];
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7];

function findPriceExtremes(arr) {
  /*
Challenge:
2. Find the highest number from the array 
   and store it in the const 'highest'. 
3. Find the lowest number from the array 
   and store it in the const 'lowest'. 
*/
  const highest = Math.max(...arr);
  const lowest = Math.min(...arr);
  console.log(`The highest average share price was ${highest}`);
  console.log(`The lowest average share price was ${lowest}`);
}

/*
Challenge:
1. Call this function with one array holding 
   all of the data from the 4 arrays above.
*/
findPriceExtremes([
  ...averageSharePriceByMonthQ1,
  ...averageSharePriceByMonthQ2,
  ...averageSharePriceByMonthQ3,
  ...averageSharePriceByMonthQ4,
]);

const studentDetails = {
  firstName: "janaka",
  lastName: "siriwardena",
  age: 28,
  country: "sri lanka",
  email: "j.siri@totalinternet.com",
  discordUsername: "JS1",
  address: {
    name: "kathmandu",
  },
};

const studentDetailsCopy = {};

Object.assign(studentDetailsCopy, studentDetails); //assign is for making the shallow copy of an object using the attribute target,source
studentDetailsCopy.address.name = "Pokhara";
//changing the data in the shallow copy of the original , can change the data of the original too

console.log(studentDetailsCopy);
console.log(studentDetails);

const button = document.getElementById("btn");

const product = {
  name: "Vanilla Lip Gloss",
  sku: "w234fg",
  stock: 276,
  getProductInfo: function () {
    console.log(
      `Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`
    );
  },
};

button.addEventListener("click", product.getProductInfo.bind(product));

/*
Challenge:
1. Create a constructor function called 'Character'.
2. Give it 'name' and 'collectedItemsArr' properties. 
    - 'name' should hold the character’s name.
	- 'collectedItemsArr' should hold an array of items. 
       Initialise it to an empty array.
3. Create an 'addItem' method which takes in an item as 
   a parameter and adds it to 'collectedItemsArr'.
4. The addItem method should log out a sentence like 
   `Merlin now has: wand, map, potion`.
5. Check it’s working by creating several instances of 
   Character and adding items to their arrays.
*/

/*
Challenge:
1. Create a constructor function called 'Character'.
2. Give it 'name' and 'collectedItemsArr' properties. 
    - 'name' should hold the character’s name.
	- 'collectedItemsArr' should hold an array of items. 
       Initialise it to an empty array.
3. Create an 'addItem' method which takes in an item as 
   a parameter and adds it to 'collectedItemsArr'.
4. The addItem method should log out a sentence like 
   `Merlin now has: wand, map, potion`.
5. Check it’s working by creating several instances of 
   Character and adding items to their arrays.
*/

class Character {
  constructor(name) {
    this.name = name;
    this.collectedItemsArr = [];
  }

  addItem(item) {
    //this function takes an item as a parameter which is used for adding to the collectedItemsArr
    this.collectedItemsArr.push(item);
    console.log(`${this.name} now has : ${this.collectedItemsArr.join(",")}`);
  }
}

function Event(name, location, date) {
  this.name = name;
  this.location = location;
  this.date = date;
}

Event.prototype.getDetails = function () {
  return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
};
w;
function Conference(name, location, date, keynoteSpeaker) {
  Event.call(this, name, location, date); //here we are inheriting the properties of event to the conference
  this.keynoteSpeaker = keynoteSpeaker;
}
Conference.prototype = Object.create(Event); //here we are inheriting the method of Event
Conference.prototype.constructor = Conference;
Conference.prototype.getDetails = function () {
  //here we are creating a method called getdetails of the function Conference
  const basedetails = Event.prototype.getDetails.call(this); //then we are calling the event's version of getdetails here
  return `${basedetails} keynoteSpeaker:${this.keynoteSpeaker}`;
};

/*`
Challenge:
    1. Set up a constructor for 'Conference' which 
       should take in 'keynoteSpeaker' as a parameter. 
    2. 'Conference' should inherit from 'Event'.
    3. 'Conference' should have its own method 'getDetails'
       which calls Event's getDetails method and returns a string 
       with name, location, date, and keynote speaker.  
    4. When you set up an instance of Conference and call 
       getDetails you should log out: 
       Event: 10 Nights of JS, Location: Scrimba HQ, Date: 2025-09-29 Keynote Speaker: Ashley Smith
       📝 The new method should be on the prototype. 
*/

const conference = new Conference(
  "10 Nights of JS",
  "Scrimba HQ",
  "2025-09-29",
  "Ashley Smith"
);
console.log(conference.getDetails());

class Event {
  constructor(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = date;
  }

  getDetails() {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
  }
}

class TennisMatch extends Event {
  constructor(name, location, date, player1, player2) {
    super(name, location, date); //here we are inheriting the property from class Event
    this.player1 = player1;
    this.player2 = player2;
  }
  getDetails() {
    const eventdetails = super.getDetails(); //here we are calling or inheriting the function called getdetails from class event
    return `${eventdetails} Match: ${this.player1} vs ${this.player2}`;
  }
}
/*
Challenge:
    1. Set up a class 'TennisMatch' which 
       should take in 'player1' and 'player2' as parameters. 
    2. 'TennisMatch' should inherit properties and methods 
       from 'Event'.
    3. 'TennisMatch' should have its own method 'getDetails'
       which calls Event's getDetails method to get the 
       basic details of the event. It should return this string:
       ${eventBasics} Match: ${this.player1} vs ${this.player2}
    4. Uncomment my code below to create a new instance of TennisMatch
       and call the getDetails method. 
       Hint.md for help 🛟
*/

// const tennisMatch = new TennisMatch("Grand Slam Final", "Wimbledon", "2025-07-15", "J Bloggs", "B Doe")
// console.log(tennisMatch.getDetails())

class Employee {
  constructor(name) {
    this.name = name;
  }
  static getNewIntern(name) {
    return { name: name, role: "intern", startDate: Date.now() };
  }
  /*
Challenge:
1. Set up a static method called getNewIntern. 
   getNewIntern should return an object with a 'name' property, 
   a 'role' property which is hard-coded to ‘intern’, and a 
   'startDate' property which should be the time of code execution. 
   (🤔 How can you use JS to get the time right now?)
*/
}

console.log(Employee.getNewIntern("Dave"));
