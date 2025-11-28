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