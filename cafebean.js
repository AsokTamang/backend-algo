/*
When the page loads, this site should display the
'header', 'hero', and 'nav' sections only.

As a user scrolls, more content should be added.
There are ten content sections in total, which are
loading from apiData.js

The handleScroll function should be debounced to
limit the number of times a scroll event triggers it.

If no debounce time is passed in, it should default
to 100 milliseconds.
 
At the moment, the code is broken.

Challenge:
1. Identify and fix the bugs in this code.
*/

import { cafeDataArr } from "/apiData.js";
let sectionCount = 0;

function* fetchDataGenerator(maxSections = 10) {
  while (true) {
    if (sectionCount >= maxSections) {
      console.log("Max section limit reached, stopping generator.");
      return;
    }
    const fakeApiResponse = { sectionText: cafeDataArr[sectionCount] };
    // Simulate an asynchronous API call with a promise

    yield new Promise(
      (
        resolve //the generator function yields but doesnot return
      ) => setTimeout(() => resolve(fakeApiResponse), 100)
    );
    sectionCount++;
  }
}

const generator = fetchDataGenerator(); //creating an instance of generator

function handleScroll() {
  const result = generator.next();  //as the next instance of the generator has value and done property
  if (result.done) {  //if the next instance is done, then it means there are no more datas to be shown so we just return
    console.log("No more sections to load.");
    return;
  }  
  
  
  //if there are still more datas ahead, then we use .then inorder to show the datas which means the next is not done .
    result.value
      .then((data) => {
        // Process and display the data
        const contentSection = document.createElement("section");
        const sectionHeader = document.createElement("h3");
        const sectionTeaser = document.createElement("p");
        sectionHeader.innerText = data.sectionText.heading;
        sectionTeaser.innerText = data.sectionText.teaser;
        contentSection.appendChild(sectionHeader);
        contentSection.appendChild(sectionTeaser);
        document.body.appendChild(contentSection);
      })
      .catch((error) => {
        console.error("Failed to load section:", error);
      });
  
    
  
}

// Debouncing function
function debounce(func, timeout = 100) {
  let debouncetime;
  return function (...args) {
    clearTimeout(debouncetime);
    debouncetime = setTimeout(() => {
      func.apply(this, args);
    }, timeout); //after this certain period of delay, we are applying this function
  };
}

// Attach debounced handler to scroll event
document.addEventListener("scroll", debounce(handleScroll)); //here handlescroll is the function that is being debounced
