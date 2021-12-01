// lexical this is passed as a scope in arrow function
function startGame() {
  this.lives = 0;
  this.addLives = () => {
    this.oneUp = setTimeout(() => {
      console.log(++this.lives); // this.lives here will be passed as lexical this to its ()=> fn
    }, 1000); // its then passes to its upper fn, if upper is arrow fn
  }; // then it is passed to its upper fn until it finds its value
}

var mario = new startGame();
mario.addLives();

function startGame() {
  this.lives = 0;
  this.addLives = function () {
    this.oneUp = setTimeout(function () {
      console.log(++this.lives); // this belongs to its own function  //NaN
    }, 1000);
  };
}
