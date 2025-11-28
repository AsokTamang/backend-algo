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




