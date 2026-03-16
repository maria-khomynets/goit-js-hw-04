const profile = {
  username: 'Jacob',
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo());

profile.changeUsername('Marco');
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());


// У змінну pizzaResult записати результат виконання функції makePizza.

// У змінну drinkPointer записати посилання на функцію makeDrink.

// Потім викликати функцію через drinkPointer і записати результат у drinkResult.
function makePizza() {
  return "Pizza is ready!";
}

function makeDrink() {
  return "Drink is ready!";
}

const pizzaResult = ;
const drinkPointer = ;
const drinkResult = ;

console.log(pizzaResult);
console.log(drinkResult);
