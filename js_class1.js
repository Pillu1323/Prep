// Practicing creating objects using class construnctor with inheritance
// ES6

class Girl {
  constructor() {
    this.name = 'Pillu';
  }
  intro() {
    console.log('She is Pillu');
  }
}

class boy {
  constructor() {
    this.name = 'Vaibhav';
  }
  intro() {
    console.log('He is Vaibhav');
  }
}

class love extends Girl {
  constructor() {
    super();
  }
  loVe() {
    console.log('They love eachOther very much');
  }
}

// const Pillu = new Girl();
const Vaibhav = new boy();
const Love = new love();
Love.intro(); //She is Pillu
Vaibhav.intro(); //He is Vaibhav
Love.loVe(); //They love eachOther very much
