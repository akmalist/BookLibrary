 
console.log("Test");

 let myLibrary = [];

 function Book(){
     //the contsructor
 }

 function addBooktoLibrary(){

 }


 function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

// don't do this!!!
EighthGrader.prototype = Object.create(Student.prototype)

function NinthGrader(name) {
  this.name = name
  this.grade = 9
}

console.log(EighthGrader)