function titleize(names, fun) {
  let title_names = names.map(x => `Mx. ${x} Jingleheimer Schmidt`);
  fun(title_names);
}

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log( `${this.name} the elephant goes 'phrRRRRRR!!!!!'`)
};

Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.addTrick(trick) = function() {
  this.tricks.push(trick);
}

Elephant.prototype.play = function() {
  let rand_trick = this.tricks[Math.floor(Math.random() * this.tricks.length)]
  console.log(`${this.name} is ${rand_trick}`)
}

Elephant.paradeHelper = function (elephant){
  console.log(`${elephant.name} is trotting by!`);
}

function dinerBreakfast(food) {
  let foods = ["cheesy scrambled eggs"];
  printFood(foods);
  return function(food) {
    foods.push(food);
    printFood(foods);
  }
}

function printFood(foods) {
  let food_list = foods.join(' and ')
  console.log(`I'd like ${food_list} please`)
}
