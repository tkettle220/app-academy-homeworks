const readline = require('readline');

window.setTimeout(function() {
  console.log('HAMMERTIME');
},5000)

function hammerTime(time) {
  window.setTimeout(function() {
    console.log(`${time} is hammertime!`)
  }, time)
}

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits() {

  reader.question("do u wan sum t", function(answer){
    console.log(`user said ${answer}`);
    reader.question("do u wan sum biskit", function(answer2){
      console.log(`user said ${anser2}`);
      const teaResponse = (answer === 'yes') ? 'do' : "don";
      const biskitResponse = (answer2 === 'yes') ? 'do' : "don't";
    });
  });
  console.log(`u ${teaResponse} wan sum t, an u ${biskitResponse} wan sum biskit`);
  reader.close();
}

function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat ();
const Noodles = new Dog ();
