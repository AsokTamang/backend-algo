type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type usertype = Partial<User>  //here partial means this usertype consists of either all of the properties or some of the properties from the type User
const users: User[] = [
    { id:1, username: "john_doe", role: "member" },
    { id:2, username: "jane_smith", role: "contributor" },
    { id:3, username: "alice_jones", role: "admin" },
    { id:4,username: "charlie_brown", role: "member" },
];
let userid = users[(users.length)-1]!.id;  //here we are retrieving the id of the last object from the users

function updateUser(id: number, updates: usertype) {
    // Find the user in the array by the id
    // Use Object.assign to update the found user in place. 
    // Check MDN if you need help with using Object.assign
    let found = users.find((user)=>user.id===id)!;
    Object.assign(found,updates); //here we are overwriting the properties of found with the available properties from updates
}

function addNewUser(newUser:any): User {
    
    const user:User = {...newUser,id:userid++};
    
    users.push(user);
    return user;
    // Create a new variable called `user`, add an `id` property to it
    // and spread in all the properties of the `newUser` object. Think
    // about how you should set the type for this `user` object.
    // Push the new object to the `users` array, and return the object
    // from the function at the end
}





// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
addNewUser({ username: "joe_schmoe", role: "member" })
console.log(users)