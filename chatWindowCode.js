Jyoti (to All):
const currentTime = new Date();

9:38 AMJyoti (to All):
const currentMonth = currentTime.getMonth() + 1;

9:42 AMJyoti (to All):
let dashboard = () => { const dashBody = document.getElementById('body'); const calendar = document.getElementById('calendar'); const titleCarousel = document.getElementById('title-carousel'); const currentTime = new Date(); const currentMonth = currentTime.getMonth() + 1; const monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"]; const monthChange = (direction) => { return new CustomEvent('monthChange', { bubbles: false, detail: { changeDirection: direction } }); } const carouselInitialState = (direction) => { return new CustomEvent('carouselInitialState', { bubbles: false, detail: { titleArr:monthsInYear, titleIndex:currentMonth, loops:true } }); titleCarousel.dispatchEvent(carouselInitialState()); dashBody.addEventListener('arrowClick', function(event){ calendar.dispatchEvent(monthChange(event.detail.arrowDirection)); }, true); $.ajax({ method: "GET", url: "http://localhost:3000/User",
dataType: "json"
}).then((response)=>{
console.log('response', response);
});


};

document.addEventListener('DOMContentLoaded', dashboard, false);


// for 10/14 lecture(video time 10:14ish AM):

let titleCarouselWrapper = () => { let titleCarousel = document.getElementById('title-carousel'); const elementBuilder = (elementType, elementId, appendTo, classes) => { const el = document.createElement(elementType); if (classes) { el.classList.add(...classes); } http://el.id = elementId;
appendTo.appendChild(el);
}

const titleSetter = (el, newTitle) => {
el.innerHTML = newTitle;
};

const carouselBuilder = (titleArr, titleIndex) => {
elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']);
elementBuilder('p', 'title', titleCarousel);
elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);
const title = document.getElementById('title');
titleSetter(title, titleArr[titleIndex]);
}

const carouselEvents = (loops, titleIndex, titleArr) => {
const title = document.getElementById('title');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

const arrowClick = (direction) => {
return new CustomEvent('arrowClick', {
bubbles: true,
detail: {
arrowDirection: direction
}
});
}

leftArrow.addEventListener('click', () => {
if (titleIndex > 0) {
titleIndex--;
titleSetter(title, titleArr[titleIndex]);
} else {
titleIndex = titleArr.length-1;
titleSetter(title, titleArr[titleIndex]);
}
leftArrow.dispatchEvent(arrowClick('left'));
});

rightArrow.addEventListener('click', () => {
if (titleIndex < titleArr.length - 1) {
titleIndex++;
titleSetter(title, titleArr[titleIndex]);
} else {
titleIndex = 0;
titleSetter(title, titleArr[titleIndex]);
}
rightArrow.dispatchEvent(arrowClick('right'));
});
}


titleCarousel.addEventListener('carouselInitialState', (event) => {
const loops = event.detail.loops;
const titleArr = event.detail.titleArr;
const titleIndex = event.detail.titleIndex;
carouselBuilder(titleArr, titleIndex);
carouselEvents(loops, titleIndex, titleArr);
})

};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);


//from 10:24ish:

{
"user":{
"id": 1,
"name":"Jane",
"goal": 90
},
"practiceSessions":[
{
"date": "mm/dd/yyyy",
"timePracticed": 90,
"goalMet": true
},
{
"date": "mm/dd/yyyy",
"timePracticed": 60,
"goalMet": false
},
{
"date": "mm/dd/yyyy",
"timePracticed": 35,
"goalMet": false
}
]
}

10:25 AMJyoti (to All):
{
"user":{
"id": 1,
"name":"Jane",
"goal": 90
},
"practiceSessions":[]
}

10:31 AMJyoti (to All):
let calendar = () => {

const calendar = document.getElementById('calendar');
if(calendar){
// Returns the first weekday of a month as an integer, e.g. 6 = Saturday
const firstDay = (year, month) => {
return new Date(year, month - 1, 1).getDay();
}

// Returns an integer representing the total number of days in a month
const lastDay = (year, month) => {
return new Date(year, month, 0).getDate();
}

// Return today's date and time
const currentTime = new Date();

// returns the month (from 0 to 11)
const currentMonth = currentTime.getMonth() + 1;

// returns the day of the month (from 1 to 31)
const currentDay = currentTime.getDate();

// returns the year (four digits)
const currentYear = currentTime.getFullYear();

const lastMonth = (year, month, dayOfWeek) => {
let previousMonth = month - 1;
const daysInPreviousMonth = (y, p) => {
let previousMonthArr = [];
let ld = lastDay(y, p);
let i = 0;
while(i < daysOfTheWeek.length){
previousMonthArr.push(ld);
ld--;
i++;
}
return previousMonthArr;
}
if(previousMonth < 1){
previousMonth = 12;
return daysInPreviousMonth(year-1, previousMonth);
}else{
return daysInPreviousMonth(year, previousMonth);
}
}

const daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const calendarHead = document.getElementById('calendar-head');
const populateCalendarHead = () => {
for(let i = 0; i<daysOfTheWeek.length; i++){
let day = document.createElement('p');
day.innerHTML = daysOfTheWeek[i];
calendarHead.appendChild(day);
}
}
populateCalendarHead();

const calendarBody = document.getElementById('calendar-body');
const populateCalendarBody = (selectedYear, selectedMonth) => {
calendarBody.innerHTML = '';
const currentDaysInMonth = lastDay(selectedYear, selectedMonth);
const firstDayOfMonth = firstDay(selectedYear, selectedMonth);
const lastMonthArr = lastMonth(selectedYear, selectedMonth, firstDayOfMonth);
const daysInRow = 7;
const totalRows = 6;
let currentRows = 0;
let currentDayOfMonthIndex = 1; //current day of current month (e.g. september)
let currentCalendarDayIndex = 0; //current index of days on calendar (i.e. daysInRow * totalRows)
let lastDaysIndex = 1;
let lmaIndex = firstDayOfMonth-1;

while(currentRows < totalRows){
const calendarRow = document.createElement('div');
for(let i = 0; i<daysInRow; i++){
const day = document.createElement('p');
if(currentCalendarDayIndex < firstDayOfMonth){
day.innerHTML = lastMonthArr[lmaIndex];
day.classList.add('grayedOut');
lmaIndex--;
}else if(currentCalendarDayIndex>=firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth){
day.innerHTML = currentDayOfMonthIndex;
currentDayOfMonthIndex++;
}else{
day.innerHTML = lastDaysIndex;
day.classList.add('grayedOut');
lastDaysIndex++;
}
currentCalendarDayIndex++;
calendarRow.appendChild(day);
}
calendarBody
.appendChild(calendarRow)
.className = "calendar-row";
currentRows++;
}
}
populateCalendarBody(currentYear, currentMonth);

let currentMonthIndex = currentMonth.valueOf();
let currentYearIndex = currentYear.valueOf();

calendar.addEventListener('monthChange', function(event){
// change the current month and if neccessary, the current year
const changeDirection = event.detail.changeDirection;
if(changeDirection === 'left'){
currentMonthIndex=currentMonthIndex-1;
//TODO: if month is 0, decrement the year and set the month to december
populateCalendarBody(currentYearIndex, currentMonthIndex);
}else if(changeDirection === 'right'){
currentMonthIndex=currentMonthIndex+1;
//TODO: if month is 13, increment the year and set the month to january
populateCalendarBody(currentYearIndex, currentMonthIndex);
}
}, true);
}
};

document.addEventListener('DOMContentLoaded', calendar, false);

10:32 AMJyoti (to All):
let titleCarouselWrapper = () => { let titleCarousel = document.getElementById('title-carousel'); const elementBuilder = (elementType, elementId, appendTo, classes) => { const el = document.createElement(elementType); if (classes) { el.classList.add(...classes); } http://el.id = elementId;
appendTo.appendChild(el);
}

const titleSetter = (el, newTitle) => {
el.innerHTML = newTitle;
};

const carouselBuilder = (titleArr, titleIndex) => {
elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']);
elementBuilder('p', 'title', titleCarousel);
elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);
const title = document.getElementById('title');
titleSetter(title, titleArr[titleIndex]);
}

const carouselEvents = (loops, titleIndex, titleArr) => {
const title = document.getElementById('title');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

const arrowClick = (direction) => {
return new CustomEvent('arrowClick', {
bubbles: true,
detail: {
arrowDirection: direction
}
});
}

leftArrow.addEventListener('click', () => {
if (titleIndex > 0) {
titleIndex--;
titleSetter(title, titleArr[titleIndex]);
} else {
titleIndex = titleArr.length-1;
titleSetter(title, titleArr[titleIndex]);
}
leftArrow.dispatchEvent(arrowClick('left'));
});

rightArrow.addEventListener('click', () => {
if (titleIndex < titleArr.length - 1) {
titleIndex++;
titleSetter(title, titleArr[titleIndex]);
} else {
titleIndex = 0;
titleSetter(title, titleArr[titleIndex]);
}
rightArrow.dispatchEvent(arrowClick('right'));
});
}

if(titleCarousel){
titleCarousel.addEventListener('carouselInitialState', (event) => {
const loops = event.detail.loops;
const titleArr = event.detail.titleArr;
const titleIndex = event.detail.titleIndex;
carouselBuilder(titleArr, titleIndex);
carouselEvents(loops, titleIndex, titleArr);
})
}


};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);

// 10:38

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

//11:00 tracker.js:

let tracker = () => { let {user,practiceSessions} = {}; // let user = {}; // let practiceSessions = {}; const getUser = () => { $.ajax({ method: "GET", url: "http://localhost:3000/user", dataType: "json" }).then((response)=>{ console.log('User', response); user = response; }); } const getPracticeSessions = () => { $.ajax({ method: "GET", url: "http://localhost:3000/practiceSessions", dataType: "json" }).then((response)=>{ console.log('practiceSessions', response); practiceSessions = response; }); } getPracticeSessions(); getUser(); // https://stackoverflow.com/a/15764763/5885911 const getFormattedDate = (date) => { var year = date.getFullYear(); var month = (1 + date.getMonth()).toString(); month = month.length > 1 ? month : '0' + month; var day = date.getDate().toString(); day = day.length > 1 ? day : '0' + day; return month + '/' + day + '/' + year; } const updatePracticeSessions = () => { let dataForPassing = {}; dataForPassing['date'] = getFormattedDate(new Date()); dataForPassing['timePracticed'] = 60; dataForPassing['goalMet'] = true; $.ajax({ method: "POST", url: "http://localhost:3000/practiceSessions",
data: dataForPassing,
dataType: "json"
}).then((response)=>{
console.log('response', response);
});
}

//POST - send some data to the database
//PUT - update pre-existing data on the database
//GET - gets data from the database
//DELETE - deletes data from the database


// let dataForPassing = {};
// dataForPassing['date'] = getFormattedDate(new Date());
// dataForPassing['timePracticed'] = currentTotalTime;
// dataForPassing['goalMet'] = currentTotalTime >= user.goal;





let counter = document.getElementById('counter');
let totalTime = 0;
const timeInADay = 1440;
const plusMinusEventCreator = (id, plus, increment) => {
let el = document.getElementById(id);
el.addEventListener('click', () => {
if (plus === true) {
if(totalTime < timeInADay){
totalTime += increment;
}else{
totalTime = timeInADay;
}
} else if (plus === false) {
if(totalTime >= increment){
totalTime -= increment;
}else{
totalTime = 0;
}
}
counter.innerHTML = totalTime;
updatePracticeSessions(totalTime);
});
};
// plus 5
plusMinusEventCreator('plus-5', true, 5);
// minus 5
plusMinusEventCreator('minus-5', false, 5);
// plus 15
plusMinusEventCreator('plus-15', true, 15);
// minus 15
plusMinusEventCreator('minus-15', false, 15);

}

document.addEventListener('DOMContentLoaded', tracker, false);
