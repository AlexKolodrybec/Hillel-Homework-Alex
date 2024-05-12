const userInfo = {
    name: "Alex",
    age: "17",
    location: "Volodymyr",
    getInfo: function() {
      return `Ім'я: ${userInfo.name}, вік: ${userInfo.age}, місце проживання: ${userInfo.location}`
    },
}

console.log(userInfo.getInfo())