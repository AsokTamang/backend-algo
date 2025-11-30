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
return Object.hasOwn(userObj,prop) && userObj.hasOwnProperty(prop) && userObj[prop] == true  //hasown is based on the Object whereas hasownproperty is based on the object data itself

}

console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'))
console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature')) 

const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4]
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3]
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8]
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7]

function findPriceExtremes(arr){
/*
Challenge:
2. Find the highest number from the array 
   and store it in the const 'highest'. 
3. Find the lowest number from the array 
   and store it in the const 'lowest'. 
*/
    const highest = Math.max(...arr)
    const lowest = Math.min(...arr)
    console.log(`The highest average share price was ${highest}`)
    console.log(`The lowest average share price was ${lowest}`)
}

/*
Challenge:
1. Call this function with one array holding 
   all of the data from the 4 arrays above.
*/
findPriceExtremes([...averageSharePriceByMonthQ1,...averageSharePriceByMonthQ2,...averageSharePriceByMonthQ3,...averageSharePriceByMonthQ4])


const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    address:{
        name:'kathmandu'
    }
    }  

 
const studentDetailsCopy = {}

Object.assign(studentDetailsCopy, studentDetails)  //assign is for making the shallow copy of an object using the attribute target,source
studentDetailsCopy.address.name = 'Pokhara'   
//changing the data in the shallow copy of the original , can change the data of the original too

console.log(studentDetailsCopy)
console.log(studentDetails)


const button = document.getElementById('btn')

const product = {
    name: 'Vanilla Lip Gloss',
    sku: 'w234fg',
    stock: 276,
    getProductInfo: function() {
        console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
    }
}


button.addEventListener('click', product.getProductInfo.bind(product))




