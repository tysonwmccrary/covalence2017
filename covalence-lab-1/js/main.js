
console.log('Tyson McCrary\'s Resume')

//global variable scope

var first = 'Tyson';
var firstName = first.toUpperCase();
var last = 'McCrary';
var lastName = last.toUpperCase();

function hello(firstName, lastName) {
    console.log(firstName, lastName);
}
hello(firstName,lastName);


var mySelf = 'I\'m from Chattanooga, TN.';
var hobbies = 'SkateBoarding, Tutoring, Playing Chess, Reading, and Learning How to Code.';
var college = 'I graduated from Tuskegee University with a degree in Mechanical Engieering.';

function intro(mySelf, hobbies, college) {
    console.log(mySelf + ' ' + college + ' ' + 'I enjoy staying active by' + ' ' + hobbies);
}
intro( mySelf, hobbies, college);



console.log('My Career')

//global variable scope with array

var experience = ['Hamilton County Department of Education,', 'Nuclear Facilities,', 'Metallurgy'];

function resume(experience){
    console.log('I have worked in 3 different industries within the last 10 years' + ' ' + experience[0] + ' ' + experience[1] + ' ' + 'and' + experience[2] + '.');
}
resume(experience);

console.log('My Experience');

//local variable scope

function career(engineer, educator, coder) {
    var engineer = 'five years experience in up keeping Nuclear facilities to their Maxium Standards';
    var educator = 'provide tutoring services to Elementary, Middle and High Schools.';
    var coder = 'new to coding and working to become better each day'; 
    console.log('I have' + ' ' + engineer + ' ' + 'and' + ' ' + educator + ' ' + 'Currenty, I\'m' + ' ' + coder + '.');    
}
 career();

//local variable scope with array

 function places (powerPlant, schools){
    var powerPlant = ['Bellefonte', 'Browns Ferry', 'Watts Bar'];
    var schools = ['Hillcrest Elementary School', 'Dalewood Middle School', 'Brainerd High School'];
    console.log('I have prepared design packages for' + ' ' + powerPlant + '.');
    console.log('After changing careers, I started substituting for Hamilton County at' + ' ' + schools + '.');
}
places();


console.log('List of skills.');

var computerSkills = ['Microsoft', 'Excel', 'PowerPoint'];
var codingSkills = ['HTML', 'CSS', 'Javascript'];

function skills(computerSkills, codingSkills){
    console.log(computerSkills[0],computerSkills[1],computerSkills[2],);
    console.log(codingSkills[0],codingSkills[1],codingSkills[2]);
}
skills(computerSkills,codingSkills);


var aboutMe = 36;
var more = 45
function me(aboutMe){
    if (18 < aboutMe){
        console.log('I\'m looking forward to becoming more knowledgeable in web developing,');
    } if (45 > aboutMe){
        console.log('and happily apply this to my skill list.')
    }
    }
    me(aboutMe);

    
