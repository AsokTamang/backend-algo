const books = {
  "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
  "b002": { title: "1984", price: 15.99, isAvailable: false },
  "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
  "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
}
a=(Object.entries(books))
final = []

v=a.filter((data)=>data[1].price>16).map((data)=>console.log(`ID:${data[0]} Book:${data[1].title} £${data[1].price}`))

console.log(v)


const user1 = {
  username: "rpchan",
  subscriptionLevel: "bronze",
}

const user2 = {
  username: "bcstevens",
  subscriptionLevel: "silver",
  accessPremiumFeature: true
}

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
return Object.hasOwn(userObj,prop) && userObj.hasOwnProperty(prop)  //hasown is based on the Object whereas hasownproperty is based on the object data itself

}

console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'))
console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature')) 

