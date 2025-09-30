//Practice 1
let movie = {
  title: "Rule your world",
  director: "Sanni Abdullahi",
  releaseYear: 2025,
  rating: 7.8,
  getSummary() {
    return `Inception ${this.releaseYear}, directed by ${this.director}, rated ${this.rating}`;
  },
};
console.log(movie.getSummary());
movie.isWatched = true;
console.log(movie.isWatched);

let movies = [
  {
    title: "Rule your world",
    director: "Sanni Abdullahi",
    releaseYear: 2025,
    rating: 7.8,
  },
  {
    title: "Give Up, You came with nothing",
    director: "Elven Festus",
    releaseYear: 2023,
    rating: 6.5,
  },
  {
    title: "Never from us",
    director: "Jeniffer Richards",
    releaseYear: 2025,
    rating: 8.0,
  },
];

for (let movie of movies) {
  greater = movie.rating;
  greater >= 8
    ? console.log(`Director: ${movie.director} Rating: ${greater}`)
    : null;
}

//Practice 2
let carItem = {
  name: "Toyota",
  price: 2000000,
  quantity: 3,
  getTotal() {
    return this.price * this.quantity;
  },
};
console.log(carItem.getTotal().toLocaleString());

let cart = [
  {
    name: "Toyota",
    price: 2000000,
    quantity: 3,
    getTotal() {
      return this.price * this.quantity;
    },
  },
  {
    name: "Ford",
    price: 2500000,
    quantity: 3,
    getTotal() {
      return this.price * this.quantity;
    },
  },
  {
    name: "Benz",
    price: 8000000,
    quantity: 3,
    getTotal() {
      return this.price * this.quantity;
    },
  },
];
function getCartTotal(cart) {
  console.log(
    Array.from(cart).reduce((prev,next)=>prev+next.getTotal(),0)
  )
}
getCartTotal(cart)



//Practice 3
let member = {
    name: "Usman",
    "Membership type" : "basic",
    borrowedBooks: ["The Jungle","Ride of die", "Two side of a coin"],
    borrowbooks(book){
       return this.borrowedBooks.push(book)
    },
    getBorrowedCount(){
        return "The total numbers of borrowed books is " + this.borrowedBooks.length
    },
    getMembershipInfo(){
        let message = `Hello ${this.name} your membership type is ${this["Membership type"]}`
        return message
    }
}
console.log(member.getBorrowedCount())
member.borrowbooks("King of Publica")
console.log(member.borrowedBooks)
console.log(member.getBorrowedCount())
console.log(member.getMembershipInfo())