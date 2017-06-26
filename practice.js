//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      // to make context less ambiguous in an invokeing function

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //constructor:
      //explicit: changing the context of the this keyword by using .bind .apply ect..
      //implicit: looks for the context of the invoking object/function and assigns the value of this to the obj to the left of the .
      //default: looks at the context of the window obj.
  // 3) What is the difference between call and apply?

      //Answer

  // 4) What does .bind do?

      //Answer
      //allows us to easily set which specific object will be bound to this when a function or method is invoked. returns a function.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
 var user = {
   username: "ryan",
   email: "dude@dude.com",
   getUsername: function () {
     return this.username;
   }
 }
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.
  var Car = function (make, model, year) {
    this.move = 0;
    this.make = make;
    this.model = model;
    this.year = year;
  }
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);
console.log(prius);
console.log(mustang);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).
Car.prototype.moveCar = function () {
  return this.move += 10;
}
prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
var pYear = getYear.bind(prius)
var mYear = getYear.bind(mustang)
console.log(pYear());
console.log(mYear());
//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.bind(myUser)(); //Fix this
//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  //undefined
//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
    //the window obj

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
