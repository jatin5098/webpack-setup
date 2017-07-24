// scss
import './css/main.scss';

// import _ from 'lodash';

function component () {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

class EcmaSix {
  constructor() {
    this.a = 10;
    this.b = 20;
    this.arr = [1, 2, 3, 4, 5];
  }

  arrayParse() {
    arr.forEach((e) => {
      return e * e;
    });
  }

  stringliterals() {
    let customer = { name: "Foo" },
        card = { amount: 7, product: "Bar", unitprice: 42 },
        message = `Hello ${customer.name}`;
  }
}

let esSix = new EcmaSix();
esSix.arrayParse();


//Inheritance

class Parent {
  constructor() {
    console.log('In Parent Class');
  }
}

class Child extends Parent{
  constructor() {
    // Here, it calls the parent class' constructor
    super();
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error
    console.log('In Child Class');
    
  }
}

//Static Method
class StaticMethodCall {
  static staticMethod() {
    return 'Static method has been called';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}
StaticMethodCall.staticMethod(); 
// 'Static method has been called'

StaticMethodCall.anotherStaticMethod(); 
// 'Static method has been called from another static method'



//Map
let map = new Map().set(1, 'one')
                   .set(2, 'two')
                   .set(3, 'three');
map.get(1);


//Promise
var aPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Promise Called');
			resolve('Success');
        }, 300);
	});
}
aPromise()
  .then(aPromise())
  .then(aPromise())
  .then(aPromise())
  .then(aPromise())
  .then((data) => {
      console.log(data);
  });

Promise.all([
  aPromise(),
	aPromise(),
	aPromise()
]).then((data) => {
    console.log(data);
});


//Callbacks
// define our function with the callback argument
some_function = (arg1, arg2, callback) => {
  // this generates a random number between
  // arg1 and arg2
  var my_number = arg1 + arg2;
  // then we're done, so we'll call the callback and
  // pass our result
  callback(my_number);
}
// call the function
some_function(5, 15, (num) => {
  // this anonymous function will run when the
  // callback is called
  console.log("callback called! " + num);
});


// 
let testCallback = (agr1, arg2, callback) => {
	callback(agr1 + arg2);
}
testCallback(4, 6, function(data) {
	console.log('Callback called ' + data);
})