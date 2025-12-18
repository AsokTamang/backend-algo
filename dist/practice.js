"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];
function updateUser(id, updates) {
    // Find the user in the array by the id
    // Use Object.assign to update the found user in place. 
    // Check MDN if you need help with using Object.assign
    let found = users.find((user) => user.id === id);
    Object.assign(found, updates); //here we are overwriting the properties of found with the available properties from updates
}
// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
console.log(users);
//# sourceMappingURL=practice.js.map