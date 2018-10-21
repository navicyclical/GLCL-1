'use strict';

var fn = function fn() {
	// adding p tag for minus
	var minus = document.getElementsByClassName('minus');

	for (var i = 0; i < minus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '-';
		minus[i].appendChild(e);
	}

	//adding p tag for plus
	var plus = document.getElementsByClassName('plus');
	for (var i = 0; i < plus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '+';
		plus[i].appendChild(e);
	}
};

document.addEventListener('DOMContentLoaded', fn, false);
'use strict';

var calendar = function calendar() {

  // Returns the first weekday of a month as an integer, e.g. 6 = Saturday
  var firstDay = function firstDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
  };

  // Returns an integer representing the total number of days in a month
  var lastDay = function lastDay(year, month) {
    return new Date(year, month, 0).getDate();
  };

  // Return today's date and time
  var currentTime = new Date();

  // returns the month (from 0 to 11)
  var currentMonth = currentTime.getMonth() + 1;

  // returns the day of the month (from 1 to 31)
  var currentDay = currentTime.getDate();

  // returns the year (four digits)
  var currentYear = currentTime.getFullYear();

  var lastMonth = function lastMonth(year, month, dayOfWeek) {
    var previousMonth = month - 1;
    var daysInPreviousMonth = function daysInPreviousMonth(y, p) {
      var previousMonthArr = [];
      var ld = lastDay(y, p);
      var i = 0;
      while (i < daysOfTheWeek.length) {
        previousMonthArr.push(ld);
        ld--;
        i++;
      }
      return previousMonthArr;
    };
    if (previousMonth < 1) {
      previousMonth = 12;
      return daysInPreviousMonth(year - 1, previousMonth);
    } else {
      return daysInPreviousMonth(year, previousMonth);
    }
  };

  var daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  var calendarHead = document.getElementById('calendar-head');
  var populateCalendarHead = function populateCalendarHead() {
    for (var i = 0; i < daysOfTheWeek.length; i++) {
      var day = document.createElement('p');
      day.innerHTML = daysOfTheWeek[i];
      calendarHead.appendChild(day);
    }
  };
  populateCalendarHead();

  var calendarBody = document.getElementById('calendar-body');
  var populateCalendarBody = function populateCalendarBody(selectedYear, selectedMonth) {
    calendarBody.innerHTML = '';
    var currentDaysInMonth = lastDay(selectedYear, selectedMonth);
    var firstDayOfMonth = firstDay(selectedYear, selectedMonth);
    var lastMonthArr = lastMonth(selectedYear, selectedMonth, firstDayOfMonth);
    var daysInRow = 7;
    var totalRows = 6;
    var currentRows = 0;
    var currentDayOfMonthIndex = 1; //current day of current month (e.g. september)
    var currentCalendarDayIndex = 0; //current index of days on calendar (i.e. daysInRow * totalRows)
    var lastDaysIndex = 1;
    var lmaIndex = firstDayOfMonth - 1;

    while (currentRows < totalRows) {
      var calendarRow = document.createElement('div');
      for (var i = 0; i < daysInRow; i++) {
        var day = document.createElement('p');
        if (currentCalendarDayIndex < firstDayOfMonth) {
          day.innerHTML = lastMonthArr[lmaIndex];
          day.classList.add('grayedOut');
          lmaIndex--;
        } else if (currentCalendarDayIndex >= firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth) {
          day.innerHTML = currentDayOfMonthIndex;
          currentDayOfMonthIndex++;
        } else {
          day.innerHTML = lastDaysIndex;
          day.classList.add('grayedOut');
          lastDaysIndex++;
        }
        currentCalendarDayIndex++;
        calendarRow.appendChild(day);
      }
      calendarBody.appendChild(calendarRow).className = "calendar-row";
      currentRows++;
    }
  };
  populateCalendarBody(currentYear, currentMonth);
  var calendar = document.getElementById('calendar');
  var currentMonthIndex = currentMonth.valueOf();
  var currentYearIndex = currentYear.valueOf();

  calendar.addEventListener('monthChange', function (event) {
    // change the current month and if neccessary, the current year
    var changeDirection = event.detail.changeDirection;
    if (changeDirection === 'left') {
      currentMonthIndex = currentMonthIndex - 1;
      //TODO: if month is 0, decrement the year and set the month to december
      if (currentMonth === 0) {
        currentYearIndex = currentYearIndex - 1;
        currentMonthIndex = 12;
      }
      populateCalendarBody(currentYearIndex, currentMonthIndex);
    } else if (changeDirection === 'right') {
      currentMonthIndex = currentMonthIndex + 1;
      //TODO: if month is 13, increment the year and set the month to january
      if (currentMonth === 13) {
        currentYearIndex = currentYearIndex + 1;
        currentMonthIndex = 1;
      }
      populateCalendarBody(currentYearIndex, currentMonthIndex);
    }
  }, true);
};

document.addEventListener('DOMContentLoaded', calendar, false);
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var titleCarouselWrapper = function titleCarouselWrapper() {
  var elementBuilder = function elementBuilder(elementType, elementId, appendTo, classes) {
    var el = document.createElement(elementType);
    if (classes) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));
    }
    el.id = elementId;
    appendTo.appendChild(el);
  };
  var titleCarousel = document.getElementById('title-carousel');
  var title = document.getElementById('title');
  var titleSetter = function titleSetter(newTitle) {
    title.innerHTML = newTitle;
  };
  //TODO: CLEANUP: create an empty arrow function called carouselBuilder
  var carouselBuilder = function carouselBuilder() {
    elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']); //TODO: CLEANUP: carouselBuilder
    elementBuilder('p', 'title', titleCarousel);
    elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);
    var leftArrow = document.getElementById('left-arrow'); //TODO: CLEANUP: place in carouselEvents
    var rightArrow = document.getElementById('right-arrow'); //TODO: CLEANUP: place in carouselEvents
    titleSetter(titleArr[titleIndex]); //TODO: CLEANUP: carouselBuilder
  };

  var titleArr = JSON.parse(titleCarousel.getAttribute('title-arr')); //TODO: MAKE IT DYNAMIC: delete

  var titleIndex = Number(titleCarousel.getAttribute('title-starting-index')); //TODO: MAKE IT DYNAMIC: delete

  titleSetter(titleArr[titleIndex]); //TODO: CLEANUP: carouselBuilder

  //TODO: CLEANUP: create an arrow function called carouselEvents
  var carouselEvents = function carouselEvents() {};

  var arrowClick = function arrowClick(direction) {
    return new CustomEvent('arrowClick', {
      bubbles: true,
      detail: { arrowDirection: direction }
    });
  };

  leftArrow.addEventListener('click', function () {
    if (titleIndex > 0) {
      titleIndex--;
      titleSetter(titleArr[titleIndex]);
    } //TODO: LOOPS: Else, set the title index back to the end of the array then call title setter
    else {
        titleIndex = titleIndex.length - 1;
        titleSetter();
      }
    leftArrow.dispatchEvent(arrowClick('left'));
  });

  rightArrow.addEventListener('click', function () {
    if (titleIndex < titleArr.length - 1) {
      titleIndex++;
      titleSetter(titleArr[titleIndex]);
    } //TODO: LOOPS: Else, set the title index back to the beggining of the array then call title setter
    rightArrow.dispatchEvent(arrowClick('right'));
  });

  //TODO: MAKE IT DYNAMIC: Create an event lister for "carouselInitialState" pass an event to the anonymous function that the add event listener takes
  //TODO: MAKE IT DYNAMIC: console log the event.detail and see what it outputs
  //TODO: MAKE IT DYNAMIC: create a (const) titleArr equal to the related field in the event object
  //TODO: MAKE IT DYNAMIC: create a (const) loops equal to the related field in the event object
  //TODO: MAKE IT DYNAMIC: create a (let) titleIndex equal to the related field in the event object
  //TODO: MAKE IT DYNAMIC: call carouselBuilder and pass titleArr and titleIndex to it
  //TODO: MAKE IT DYNAMIC: call carouselEvents and pass loops titleIndex and titleArr to it

};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);