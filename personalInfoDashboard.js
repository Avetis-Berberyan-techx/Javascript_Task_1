// Variables and Data Types
const firstName = 'Avetis';
const lastName = 'Berberyan';
const birthYear = 2003;
const currentYear = 2025;
const isStudent = true;

const hobbies = [
  'watching basketball matches',
  'playing poker',
  'reading AI articles'
];

const contact = {
  email: 'avetisberberyan72@gmail.com',
  phone: '077793902',
  city: 'Stepanavan',
};

// Introduction
const age = currentYear - birthYear;

console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}.`);
console.log(`I am ${age} years old and currently ${isStudent ? 'a student' : 'not a student'}.`);

// Comparison: == vs ===
const ageString = '25';
const ageNumber = 25;

console.log(ageString == ageNumber);   // true (type coercion)
console.log(ageString === ageNumber);  // false (strict)

// Grading
const score = 55;
let grade;

if (score < 60) {
  grade = 'F';
} else if (score >= 60 && score <= 69) {
  grade = 'D';
} else if (score >= 70 && score <= 79) {
  grade = 'C';
} else if (score >= 80 && score <= 89) {
  grade = 'B';
} else if (score >= 90 && score <= 100) {
  grade = 'A';
}

// Grade comment
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
  case 'A':
    console.log('Excellent work');
    break;
  default:
    console.log('Invalid score');
}

// Final result
console.log(
  grade === 'F' || grade === 'D'
    ? 'You failed.'
    : 'You passed.'
);
