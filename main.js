/********************
 * YOUR CODE BELOW! *
 ********************/


//takes in a number and returns whether or not it is greater than five.
function moreThan5(num) {
  return num > 5;
}

const result1 = moreThan5(4);
result1;
const result2 = moreThan5(10);
result2;

//takes in a score (as a number) and a top score (as a number) 
//and returns whether or not the score is greater than the top score.
function isNewTopScore(score, topScore) {
  return score > topScore;
}

const score0 = isNewTopScore(45, 95);
score0;
const score1 = isNewTopScore(99, 95);
score1;

//that takes in a grade (as a number) and returns whether or
// not it's between `60` and `71`, _inclusive_.
function isInDanger(grade) {
  return grade >= gradeMin && grade <= gradeMax;
}

const gradeMin = 60;
const gradeMax = 71;
const grade0 = isInDanger(65);
grade0;
const grade1 = isInDanger(45);
grade1;


//that takes in a grade (as a number) and returns whether or 
//not it's between `72` and `83`, _inclusive_.
function isCoasting(grade) {
  return grade >= 72 && grade <= 83;
}

const gradeMinAgain = 72;
const gradeMaxAgain = 83;
const grade00 = isCoasting(75);
grade00;
const grade01 = isCoasting(99);
grade01;

// that takes in a grade (as a number) and returns whether or
// not its between `84` and `92`, _inclusive_.
function isSucceeding(grade) {
  return grade >= 84 && grade <= 92;
}

const gradeMinX3 = 84;
const gradeMaxX3 = 92;
const grade000 = isSucceeding(88);
grade000;
const grade001 = isSucceeding(99);
grade001;

//that takes in a grade (as a number) and returns whether or 
//not it's below `60`.
function isFailing(grade) {
  return grade < 60;  
}


const failing1 = isFailing(55);
failing1;
const failing2 = isFailing(88);
failing2;


//that takes in a grade (as a number) and returns whether or 
//not it's above `92`.
function isAcing(grade) {
  return grade > 92;
}

const goodGrade = isAcing(100);
goodGrade;
const badGrade = isAcing(12);
badGrade;

//that takes in a role (as a string) and returns if 
//its value is "student".
function isStudent(role) {
  return role === 'student';
}

const role0 = isStudent('parent');
role0;
const role1 = isStudent('student');
role1;

//that takes in a role (as a string) and returns if
// its value is "teacher".
function isTeacher(role) {
  return role === 'teacher';
}

const role00 = isTeacher('teacher');
role00;
const role01 = isTeacher('parent');
role01;


//that takes in a role (as a string) and returns if its value
// is "admin".
function isAdmin(role) {
  return role === 'admin';
}

const role000 = isAdmin('teacher');
role000;
const role001 = isAdmin('admin');
role001;

//that takes in school level (as a string) and returns if 
//its value is "elementary".

function isElementary(school) {
  return school === 'elementary';
}

const typeSchool1 = isElementary('middle');
typeSchool1;
const typeSchool2 = isElementary('elementary');
typeSchool2;


//that takes in two names (as strings) and returns whether
// they're different.
function areDifferentPeople(person1, person2) {
  return person1 !== person2;
}

const same0 = areDifferentPeople('Sam', 'Ezekiel');
same0;
const same1 = areDifferentPeople('Sam', 'Sam');
same1;


//that takes in a role (as a string) and a level (as a _number_) 
//and returns 
//whether they're both a teacher and the level they teach at is 
//`6` to `8` _inclusive_.
function isMiddleSchoolTeacher(role, level) {
  return (role === 'teacher') && (level <= 8 && level >=6)
}

const teacher0 = isMiddleSchoolTeacher('teacher', 7);
teacher0;
const student5 = isMiddleSchoolTeacher('student', 7);
student5;

//that takes in a school level (as a string) 
// and a role (as a string)
// and returns whether
// they're NOT an elementary school administrator. 
//(An elementary school teacher is not, nor is a middle school 
//administrator.
// And an expert scuba diver most definitely is not.)
function notAnElementarySchoolAdministrator(schoolLevel, role) {
  return (schoolLevel !== 'elementary') || (role !== 'admin')
}

const try0 = notAnElementarySchoolAdministrator('elementary', 'administrator');
try0;
const tryAgain = notAnElementarySchoolAdministrator('elementary', 'student');
tryAgain;
const tryOneMoreTime = notAnElementarySchoolAdministrator('middleSchool', 'administrator');
tryOneMoreTime;

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
