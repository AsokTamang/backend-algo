type Pizza = {
  id:number
  name: string;
  price: number;
};

type statustype = "ordered" | "completed"; //here we are declaring that the type of status must be either ordered or completed and this syntax is called literal type unions

type Order = {
  id: number;
  pizza: Pizza;
  status: statustype;
};

const menu = [
  {id:1, name: "Margherita", price: 8 },
  {id:2, name: "Pepperoni", price: 10 },
  {id:3, name: "Hawaiian", price: 10 },
  { id:4,name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let orderQueue: Order[] = []; //here we are assigning the type of this const which is an array of object having properties and corresponding values

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

function addNewPizza(pizzaobj: Pizza) {
  menu.push(pizzaobj);
}

let nextOrderId = 1;
function placeOrder(pname: string) {
  const a: Pizza = menu.find((pobj) => pobj.name === pname)!; //here we are using find inorder to return the single object and ! shows that this object exists in our menu
  if (!a) {
    console.log("our menu doesnot has this item");
    return;
  }
  cashInRegister += a.price; //here we are using ! so that a is not undefined
  const neworder: Order = { pizza: a, status: "ordered", id: nextOrderId }; //here we are declaring that the neworder is of type Order where we use literal type unions
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
  const order = orderQueue.find((ord) => ord.id === orderId); //here we are finding the order of item based on the order id
  if (!order) {
    console.log("This item hasnot been ordered!");
    return;
  }
  order.status = "completed";
  return order;
}

function getPizzaDetail(identifier: string | number) {
  let pizzaa
  if (typeof identifier === "string") {
     pizzaa=menu.find((item) => item.name === identifier);
  } else {
       pizzaa=menu.find((order)=>order.id===identifier)  //first of all we are finding the order using the id then
  }
  return pizzaa;
}

addNewPizza({id:5, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id:6,name: "BBQ Chicken", price: 12 });
addNewPizza({id:7, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
