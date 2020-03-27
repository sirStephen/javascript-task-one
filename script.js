// name of student
const name = 'Otiono Gregory';

// name of courses
let courses = ['HTML', 'CSS'];

// course length
let numOfCourses = courses.length;
console.log(numOfCourses)

// display numbers output
let numDisplay = '';

// targets class attribute
let studentName = document.querySelector('.name');

// targets class attribute
let courseName = document.querySelector('.courses');

// targets class attribute
let numbers = document.querySelector('.numbers');

// displays name on the DOM
studentName.textContent = name;

// displays course on the DOM
courseName.textContent = courses;

for(let i = 1; i <= 200; i++) {
    if (numOfCourses % 2 === 1) {
        if (i % 2 === 1) {
            numDisplay += i + ',' + ' ';
        }
    } else if (numOfCourses % 2 === 0) {
        if (i % 2 === 0) {
            numDisplay += i + ',' + '';
        }
    }
}

numbers.textContent = numDisplay;
