'use strict';

// OOP Implementation
// ===============================================================

class Polygon {   //....... ABSTRACTION

  // constructor
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  // class instance methods 
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }

  sayHistory() {
    console.log('Hexagon has six sides');
  }

  getParaSum(){
  	return height + width;
  }
  
}


class Hexagon extends Polygon {   //....... INHERITANCE
  
  constructor(height, width) {
    super(height, width);		// ........ POLYMORPHISM
    this.name = 'Hexagon';
  }

  // class instance methods 
  sayName() {					// ........ POLYMORPHISM
    console.log('Hi, I am a ', this.name + '.' + 'with' + this.height + 'height');
  }

 }


  
let p = new Polygon(300, 400);    /* ENCAPSULATON */
p.sayName();
console.log('The width of this polygon is ' + p.width);

let q = new Hexagon(250, 450);
q.sayHistory();
q.sayName();
console.log('The height is' + q.height);