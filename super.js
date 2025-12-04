class Character {
  #health; //health is set to private
  static count = 0; //static method is always on the count rather than the object
  constructor(name) {
    this.name = name;
    this.#health = 100;
    Character.incrementCount();

    //every time a new character is created, we just increase the numbers of character
  }
  static getCount() {
    return this.count;
  }
  static incrementCount() {
    Character.count++;
  }
  gethealth() {
    return this.#health; //as the health is private
  }
  sethealth(newhealth) {
    if (newhealth < 0) {
      this.#health = 0;
      return;
    }
    this.#health = newhealth;
  }

  takeDamage(damage) {
    this.#health -= damage; //decreasing the health by the certain amount of damage
    if (this.#health < 0) {
      this.#health = 0;
    }
  }
  get isAlive() {
    return this.#health > 0;
  }

  getStatus() {
    return `${this.name} has ${this.#health} health and is ${
      this.isAlive ? "alive" : "dead"
    }`;
  }
  /* Base Character Class
Your task is to design and implement a Character class with properties 'name' (a string), 'health' (a number), and isAlive (a boolean). This class will serve as a foundation for a simple game or simulation where characters can take damage and possibly "die" if their health reaches zero.

Class Structure:
Your class should have:
- a name property that is set through the constructor.
- a private health property initialized to 100.
- a static property count to track how many characters have been created.

Static Methods to add:
- incrementCount() to increase the count each time a new character is instantiated.
- getCount() to return the current number of characters.

Health Management:
- Include a getter and a setter for health. The setter should ensure that the health value does not fall below zero.

Damage Functionality:
- Implement a method 'takeDamage' which decreases the health value by a specified amount. 

Alive Status:
- Implement a getter for 'isAlive' that returns a boolean value. A character is considered alive if their health is greater than zero.

Status Report:
- Implement a method getStatus() that returns a string stating the character's name, 
  current health, and whether they are alive or dead.
*/
}

class Hero extends Character {
  constructor(name, inventory = []) {
    super(name); //here name,isalive and health is inherited from a character class
    this.inventory = inventory; //this is the collection of items for a hero
  }
  pickUpItem(item) {
    this.inventory.push(item); //here hero is just collecting an item
  }
  getItems() {
    return `${this.name} has following items: ${this.inventory.join(", ")}`;
  }

  /* The Hero class
The Hero class should inherit from Character. This new class should include additional functionality to manage an inventory of items that the hero can collect during gameplay.

Constructor:
- The constructor for the Hero class should initialize the hero with a name and an empty inventory for items.

Inventory Management:
- Implement a method pickUpItem that allows the hero to add items to their inventory.
- Items should simply be added to an array.

Item Retrieval:
- Implement a method getItems that returns a string listing all the items in the hero's inventory.
*/
}

class Villain extends Character {
  /* The Villain class
The Villain class should inherit from Character. This new class should include additional functionality to allow the villain to issue a threat.

Constructor:
- The constructor for the Villain class should initialize the villain with a name and a threat.

Threat
- The getThreat method should simply return the threat.
*/
  constructor(name, threat) {
    super(name);
    this.threat = threat;
  }
  getThreat() {
    return this.threat;
  }
}

// Example Usage
const merlin = new Hero("Merlin");
const medea = new Hero("Medea");
const troll = new Villain("Troll", "I will destroy your soul!");

console.log(troll.getThreat()); // I will destroy your soul!
merlin.pickUpItem("Sword");
merlin.takeDamage(15);
medea.takeDamage(5);
medea.pickUpItem("Shield");
console.log(merlin.getItems()); // Merlin has the following items: Sword
console.log(medea.getItems()); // Medea has the following items: Shield
troll.takeDamage(101);
console.log(troll.getStatus()); //Troll has 0 health and is dead.
console.log(medea.getStatus()); // Medea has 95 health and is alive.`
console.log(merlin.getStatus()); // Merlin has 85 health and is alive.
console.log(`Total characters created: ${Character.getCount()} `); // Total characters created: 3

function handleResize(e) {
  console.log("resize happened on event: " + e);
}
//so the throttle is the function that delays the task or the function for certain interval of time even if the user request it for many times.so, the function only runs after this delay
function throttle(func, delay) {
  let throttleTimeout = null;
  /*
Challenge:
1. Recreate the logic using an arrow function. 
   🤔 What is the best way to pass arguments remembering 
   that ideally this throttle function is reusable?
   🛟 hint.md for help! 
*/
  return (...args) => {
    //here we are capturing the arguments
    if (!throttleTimeout) {
      func(...args); //then we are using the passed function with its passed parameter which is an event in this case as in the arrow function, we cannot apply 'this' method
      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, delay);
    }
  };
}
const throttledHandleResize = throttle(handleResize, 1000);
window.addEventListener("resize", throttledHandleResize);

/*
Challenge:
    1. Create a generator that yields a random hex code on demand.
    - You might need to research how you can do something infinitely 
      inside a generator.
    - See if you can work out how to generate a random hex code.
    🛟 hint.md for help
*/
//so a generator function is a type of function that yeilds the data or any value that we want from there,
//we can manipulate the data with .next()
function* generator() {
  const letters = "0123456789ABCDEF";
  while (true) {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random(letters) * 16)];
    }
    yield color; //this will yield different colors
  }
}
const colorgenerator = generator(); //instance of color

document.getElementById("nextColorButton").addEventListener("click", () => {
  /*
Challenge:
    2. When the "Next Color" button is clicked, update 
       the textContent and backgroundColor attributes below.
*/
  color = colorgenerator.next().value;
  document.getElementById("colorText").textContent = color;
  document.getElementById("colorDisplay").style.backgroundColor = color;
});



import { organizationData } from '/data.js'

function searchEmployeeById(data,i) { 
  let results=[] /*  here i means the id
  
Challenge:
1. Write a function that searches for an employee in 'organizationData'. The function should recursively traverse the nested objects and find all employees with a specified ID. 

Stretch Goal:
💪 Complete the challenge without declaring any variable in the global scope.
*/
       for (let key in data) {
           if (key=='employees'){   //if we find the key which is equal to employees
             results=[...results,...data[key].filter((empl)=>empl.id ==i)]//here the employees' id must be equal to i
           }

           if(typeof data[key]==='object' && data[key]!=null) {    
                const deeper=searchEmployeeById(data[key],i);   //recursively going into deeper level by passing the nested object and the value of id
                results=[...results,...deeper]   //concating the output of the nested objects in the results too
              }

       }
       return results

}

const employee = searchEmployeeById(organizationData, 5) // pass in data and employee id.

console.log(employee) // Output: [{id: 5, name: "Kwame Mensah", position: "Sales Executive"}]



/*Challenge: Create & delete files
1. Find the file "virus.exe" and delete it. Lists the contents of the parent directory of "virus.exe" to check that the file was deleted correctly.
2. Inside "geography_game", create a new file called "rules.txt", and list the contents of "geography_game".

Hint: What should you always do as the first thing before typing any other commands?*/

//for the files
//so we can easily create files using touch any.js or any.txt anywhere using touch../any.js if we want to create a file in the ancestor dir
//and we can delete the file using rm any.js


//for the folders
//we can easily create folder using mkdir any  also sameway mkdir../any or mkdir../../any
//and inorder to remove the empty dir we can use rmdir any but
//for the non-empty dir, we must use rm -r any
//here any is the folder name


/*Main challenge: Write to files
1. Inside "geography_game", create a new directory called "about_the_game".
2. Write the string 'AB, CEO and creative genius' to a new file called "team_members.txt". This file should be placed inside "about_the_game".
3. Append the string '<your initials>, hard-working intern' to the file "team_members.txt".
4. Open the file in the sidebar to check that everything went well.

Important: Wrap your strings in single quotes.*/
//and inorder to write in the files we must use 'any ccode'>filename  and if this file doesnot exists then it automatically creates this file
//and inorder to add more codes or append the codes in the existing file we must use 'code' >> filename >> this symbol helps us to append the code in the existing file