function getStockData() {
  return {
    name: "QtechAI",
    sym: "QTA",
    price: Math.random(0, 3).toFixed(2), //here we are getting the random numbers between 0 and 3 and then fixing the decimal upto 2
    time: new Date().toLocaleTimeString(),
  };
}
console.log(getStockData());

const playlistHtml = [];

playlistHtml.push(
  `<section class="card">
    <div class="card-start">
        <img src="/images/${playlistArr[i].albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${playlistArr[i].title}</h4>
            <p class="card-artist">${playlistArr[i].artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
    `
);

document.getElementById("container").innerHTML = playlistHtml;

//we use map method only when it is required to return the new array
//and we use forEach method when it is required for just iterating over the array but not to return the new array

/*
Challenge: Refactor the Library System Code.

You are working with a piece of code that handles 
information about books in a library system. The 
current code is functional but can be improved to 
be more concise and efficient by using short-circuiting, 
nullish coalescing, and Optional Chaining.

The existing code performs the following tasks:
- Pushes an object with title, author, year published, 
  and availability to an array 'collection'
- Provides default values for missing information.
*/

const collection = [];

function addBookToCollection(title, author, yearPublished, libraryData) {
  // Explicitly check for title
  if (title === undefined || title === null || title === "") {
    title = "Unknown Title";
  }

  // Explicitly check for author
  if (author === undefined || author === null || author === "") {
    author = "Unknown Author";
  }

  // Explicitly check if yearPublished is undefined or null
  if (yearPublished === undefined || yearPublished === null) {
    yearPublished = "Not Specified";
  }

  // Explicitly check for availability at main library
  let availability = "Not Available"; // Default value
  if (libraryData) {
    if (libraryData.locations) {
      if (libraryData.locations.mainLibrary) {
        availability = "Available";
      }
    }
  }

  // Push the book object to 'collection'
  collection.push({
    title: title,
    author: author,
    yearPublished: yearPublished,
    availability: availability,
  });
}
// Examples of adding a book
addBookToCollection("JavaScript: The Good Parts", "Douglas Crockford", 2008, {
  locations: { mainLibrary: true },
});
addBookToCollection("", "William Shakespeare", null, null);
addBookToCollection("House of Giants", "Gemma Small", "", null, {
  locations: { mainLibrary: null },
});
console.log(collection); // House of Giants is not yet published!!

/*
Challenge: Refactor the Library System Code.

You are working with a piece of code that handles 
information about books in a library system. The 
current code is functional but can be improved to 
be more concise and efficient by using short-circuiting, 
nullish coalescing, and Optional Chaining.

The existing code performs the following tasks:
- Pushes an object with title, author, year published, 
  and availability to an array 'collection'
- Provides default values for missing information.
*/


/*
Challenge: Refactor the Library System Code.

You are working with a piece of code that handles 
information about books in a library system. The 
current code is functional but can be improved to 
be more concise and efficient by using short-circuiting, 
nullish coalescing, and Optional Chaining.

The existing code performs the following tasks:
- Pushes an object with title, author, year published, 
  and availability to an array 'collection'
- Provides default values for missing information.
*/


function addBookToCollection(title, author, yearPublished, libraryData) {
    // Explicitly check for title
    title = title || 'Unknown Title'

    // Explicitly check for author
    author = author || 'Unknown Author'

    // Explicitly check if yearPublished is undefined or null
    yearPublished = yearPublished ?? 'Not Specified'

    // Explicitly check for availability at main library
    // let availability = 'Not Available' // Default value
    // if (libraryData) {
    //     if (libraryData.locations) {
    //         if (libraryData.locations.mainLibrary) {
    //             availability = 'Available'
    //         }
    //     }
    // }
    
    const availability = libraryData?.locations?.mainLibrary && "Available" || "Not Available"

    // Push the book object to 'collection'
    collection.push({
        title: title,
        author: author,
        yearPublished: yearPublished,
        availability: availability
    })
}
// Examples of adding a book
addBookToCollection('JavaScript: The Good Parts', 'Douglas Crockford', 2008, { locations: { mainLibrary: true}})
addBookToCollection('', '', null, null, )
addBookToCollection('House of Giants', 'Gemma Small', '', null, {locations: { mainLibrary: null}})
console.log(collection) // House of Giants is not yet published!!



const books = {
  "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
  "b002": { title: "1984", price: 15.99, isAvailable: false },
  "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
  "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
}

/*
Challenge:
  1. Use Object.keys to get an array of keys. 
     You can store it in a const 'bookKeys'. 
  2. Iterate over bookKeys twice.
     A) First log each individual key in the array.
     B) Then log only the book titles.
*/
const bookKeys=Object.keys(books)  //this will create an array of the keys stored in a const books
const keys = ()=>bookKeys.forEach((book)=>console.log(book))  //this prints the keys 
const titles = ()=>bookKeys.forEach((book)=>console.log(books[book]))  //this prints the title based on the keys

const bookvalues = Object.values(books)
bookvalues.forEach((bv)=console.log(bv.price))
/*
Output: b001
        b002
        b003
        b004
Output: To Kill a Mockingbird
        1984
        The Great Gatsby
        Moby Dick
*/


const athlete1 = { name: 'Alice', averageTime10KmMins: 58.3 }
const athlete2 = { name: 'Dave', averageTime10KmMins: 53.2 }
const athlete3 = { name: 'Micky', averageTime10KmMins: 64.5 }
const athlete4 = { name: 'Judy', averageTime10KmMins: 66.0 }

/* Challenge */

/* 1. Create a map object "athletes" to store the athletes. */
const athletes = new Map()

function addAthlete(athlete, time) {
/* 2. This function should add athletes to the "athletes" map. */
  athletes.set(athlete,time)   //here we are setting the time to this certain athlete inside the map athletes
}

function getSummary(){
/* This function should make the following appear in the console */
    athletes.forEach((value,key)=>console.log(`${key.name}'s average time is ${key.averageTime10KmMins} but today ${key.name} achieved ${value}`))
    
//Alice's average time is 58.3 but today Alice achieved 57.3
//Dave's average time is 53.2 but today Dave achieved 61.1
//Micky's average time is 64.5 but today Micky achieved 59.9
//Judy's average time is 66 but today Judy achieved 61.6
}

addAthlete(athlete1, 57.3)
addAthlete(athlete2, 61.1)
addAthlete(athlete3, 59.9)
addAthlete(athlete4, 61.6)

getSummary()


/* Challenge:
    1. Refactor this code to use a Set instead  
       of an array so no tags can be duplicated!
*/

const postTags = new Set()

function addTag(newTag) {
    postTags.add(newTag)
}

addTag('history')
addTag('romans')
addTag('sociology')
addTag('history')
addTag('history')

postTags.forEach((tag) => console.log(tag))



function scorePoint(playerName) {
    let score = 0
    return {   //here we are returning the object which has the key-name and the function as a value
        displayScore: function () {
            console.log(`${playerName} has ${score} points`)
        },
        incrementScore: function(){
          score++
        },
        decrementScore: function(){
          score--
        }
/*
Challenge:
   1. Add two more functions to this object. One to increment 
      the score and one to decrement the score. Call those functions 
      a couple of times for each player and then call displayScore 
      to check it’s working. 
*/
    }
}

const player1 = scorePoint('Vicky')
const player2 = scorePoint('Leo')
player1.incrementScore()
player2.incrementScore()
player1.decrementScore()
player2.decrementScore()
player1.displayScore()
player2.displayScore()




/* 
Challenge: 
    1. Write a function that simulates a simple bank account. 
       The function should store the balance and enable users  
       to deposit money, withdraw money, and check the balance.

Requirements:

- The account balance should start at zero.

- The function should return an object containing 
  3 functions. One for depositing money, one for 
  withdrawing money, and a getBalance function which 
  logs the balance and the account holder's name.

- Deposits should add to the balance, and withdrawals should subtract 
  from it. 
*/

function createBankAccount(name) {
  let balance = 0 //initially the balance is 0
    
// Write logic here 
return (
  {
    withdraw: function(amount){
      balance-=amount
      return balance

    },
    deposit: function(amount) {
      balance+=amount
      return balance
    },
    getBalance:function() {
       console.log(`balance of ${name} is ${balance}.`)
    }
  }
)   
}

const daveAccount = createBankAccount('dave')
const wendyAccount = createBankAccount('wendy')
console.log(daveAccount.deposit(50))
console.log(daveAccount.withdraw(20))


// Test your code by calling the functions.