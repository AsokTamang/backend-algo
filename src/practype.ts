type Pizza = {
  name:string
  price:number
}

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let orderQueue:{
  pizza: { name: string; price: number } | undefined;
  status: string;
  id: number;
}[] = [];  //here we are assigning the type of this const which is an array of object having properties and corresponding values

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

function addNewPizza(pizzaobj: Pizza) {
  menu.push(pizzaobj);
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */
let nextOrderId = 1;
function placeOrder(pname: string) {
  const a: Pizza | undefined = menu.find(
    (pobj) => pobj.name === pname
  ); //here we are using find inorder to return the single object
  cashInRegister += a!.price; //here we are using ! so that a is not undefined
  const neworder = { pizza: a, status: "ordered", id: nextOrderId };
  nextOrderId += 1;
  orderQueue.push(neworder);
  return neworder;
}

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */
function completeOrder(orderId: number) {
  const order = orderQueue.find((ord) => ord.id === orderId);
  order!.status = "completed";
  return order;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
