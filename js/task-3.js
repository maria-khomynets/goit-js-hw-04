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

function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest('Mango', greet); // "Registering Mango!"
// "Welcome Mango!"

registerGuest('Mango', notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes
