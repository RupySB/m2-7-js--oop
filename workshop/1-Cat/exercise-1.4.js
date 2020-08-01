// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

class Cat {
  constructor(name, breed) {
    this.species = "cat";
    this.tiredness = 100;
    this.hunger = 100;
    this.loneliness = 100;
    this.happiness = 100;
    this.breed = "Siamese";
    this.name = "Boots";
  }

  sleeping = (hours) => {
    this.tiredness = hours * -5;
    this.happiness = hours * 100;
  };
  eating = (numberofKibbles) => {
    this.hunger = numberofKibbles * 0.2;
    this.happiness = numberofKibbles * 50;
  };
  playing = (minutesofPlay) => {
    this.loneliness = minutesofPlay * 3;
    this.happiness = minutesofPlay * 25;
  };
  waiting = (hours) => {
    this.tiredness = hours * 4;
    this.hunger = hours * 3;
    this.loneliness = hours * 1.5;
    this.happiness = hours * 5;
  };
}

let Boots = new Cat("Boots", "Siamese");

// B) Make Boots wait 20 minutes and call then console.log(boots);

Boots.waiting(0.333);
// I put 0.33 since I used hours for everything!!
console.log(Boots);
