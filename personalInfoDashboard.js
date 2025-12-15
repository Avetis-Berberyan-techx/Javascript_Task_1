var firstName = 'Avetis';
var lastName = 'Berberyan';
var birthYear = 2003;
var currentYear = 2025;
var isStudent = true;
var hobbies = ['watching basketball matches','playing poker','reading AI articles'];
var contact = {
  email:'avetisberberyan72@gmail.com',
  phone:'077793902',
  city:'Stepanavan',
};


// Introduction to myself
console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}`);
console.log(`I am ${currentYear - birthYear} years old and currently ${isStudent ? "a student" : "not a student"}.`);

//comparison of == and ===
var ageString = '25';
var ageNumber = 25;

console.log(ageString==ageNumber);
console.log(ageString===ageNumber);


// Grading
var score = 55;
var grade;
if(score<=60){
  console.log('F');
  grade = 'F';
}else if(60<=score<=69){
  console.log('D');
  grade = 'D';
}else if(70<=score<=79){
  console.log('C');
  grade = 'C';
}else if(80<=score<=89){
  console.log('B');
  grade = 'B';
}else if(90<=score<=100){
  console.log('A');
  grade = 'A';
}

//Grade comment
switch (grade) {
  case 'F':
    console.log('Needs serious effort');
    break;
  case 'D':
    console.log('Try harder');
    break;
  case 'C':
    console.log('Keep improving');
    break;
  case 'B':
    console.log('Good job');
    break;
  default:
    console.log('Excellent work');
    break;
}

//Result
console.log(grade==='F'||grade==='D'?'You Failed.':'You passed.');

