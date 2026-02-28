// the forEach loops cannot be used as await...

const users = [
  { id: 1, name: "Ayan", age: 20 },
  { id: 2, name: "Rohit", age: 22 },
  { id: 3, name: "Priya", age: 19 }
]
// the forEach cannot be awaited
users.forEach(user => {
    console.log(user.name)
})