'use strict';

var calendar = function calendar() {

  var firstDay = function firstDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
  };

  var lastDay = function lastDay(year, month) {
    return new Date(year, month, 0).getDate();
  };

  //TODO: Create currentTime, currentDay, currentMonth, currentYear variables based on this stack overflow answer
  //https://stackoverflow.com/a/6002265/5885911
  //Use const rather than let or var, we use const when a variable doesn't get reassigned or updated overtime.
  //Since these are functions, we don't expect the functions to change so we can make them constants.


  //TODO: Create the lastMonth function which takes the arguments, "year", "month", "dayOfWeek"
  //Create the previousMonth variable which is equal to month-1
  //Create the daysInPreviousMonth function which takes two arguments, "y", "p".
  // Y represents current year, p represents previousMonth
  //Within function
  //Create a variable called previousMonthArr which is equal to an emptyArr,
  //you would use let for this variable since we will be pushing items to the array
  //Create an ld variable which is equal to the lastDay function and takes the arguments, y and p
  //Create a variable i which is equal to 0, we will use let here since i is an index and will be updated
  //Create a while loop, which says while the index is less than daysOfTheWeek
  //Inside while loop
  //push ld to the previousMonthArr
  //decrement ld
  //increment i
  //outside of while loop, return previousMonthArr
  //outside of daysInPreviousMonth function
  //if previous month is less than 1
  //previous month = 12 (we're setting the previous month to December, if the current month is January)
  //return the daysInPreviousMonth function which takes the arguments year-1 and previousMonth
  //else
  //return the daysInPreviousMonth function which takes the arguments year and previousMonth
  //end lastMonth function


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
  var populateCalendarBody = function populateCalendarBody() {
    var currentDaysInMonth = lastDay(2018, 9);
    var firstDayOfMonth = firstDay(2018, 9);
    //TODO: Create lastMonthArr const which is equal to the lastMonth function which
    // takes the arguments currentYear, currentMonth, and firstDayOfMonth
    var daysInRow = 7;
    var totalRows = 6;
    var currentRows = 0;
    var currentDayOfMonthIndex = 1; //current day of current month (e.g. september)
    var currentCalendarDayIndex = 0; //current index of days on calendar (i.e. daysInRow * totalRows)
    //TODO: Create lmaIndex variable which is equal to the firstDayOfMonth-1

    while (currentRows < totalRows) {
      var calendarRow = document.createElement('div');
      for (var i = 0; i < daysInRow; i++) {
        var day = document.createElement('p');
        //TODO: Create a new if condition which says
        //"If the currentCalendarDayIndex is less than the firstDayOfMonth"
        //Within the if condition
        //set day inner html to the current lmaIndex of the lastMonthArr
        //add the 'grayedOut' class to the classList of the "day" variable
        //decrement the lmaIndex

        //This if condition says "start adding days to the calendar, if the
        //first weekday of the current month has been reached"
        if (currentCalendarDayIndex >= firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth) {
          day.innerHTML = currentDayOfMonthIndex;
          currentDayOfMonthIndex++;
        }

        //TODO: BONUS: You can add another if condition here if you want, which will just say "add grayed numbers to the end of the month until we run out of space on the calendar"


        currentCalendarDayIndex++;
        calendarRow.appendChild(day);
      }
      calendarBody.appendChild(calendarRow).className = "calendar-row";
      currentRows++;
    }
  };
  populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);
'use strict';

<<<<<<< HEAD
=======
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

>>>>>>> 554b02c7b37a9e6b6a516c54926263d0d5d79795
var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var titleCarouselWrapper = function titleCarouselWrapper() {
<<<<<<< HEAD
  var titleCarousel = document.getElementById("title-carousel");
  var titleIndex = 8;
=======
  var titleCarousel = document.getElementById('title-carousel');

>>>>>>> 554b02c7b37a9e6b6a516c54926263d0d5d79795
  var elementBuilder = function elementBuilder(elementType, elementId, appendTo, classes) {
    var el = document.createElement(elementType);
    if (classes) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));
    }
    el.id = elementId;
    appendTo.appendChild(el);
  };
<<<<<<< HEAD
=======

>>>>>>> 554b02c7b37a9e6b6a516c54926263d0d5d79795
  elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']);
  elementBuilder('p', 'title', titleCarousel);
  elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);

<<<<<<< HEAD
  var titleDown = document.getElementById('left-arrow');
  var titleUp = document.getElementById('right-arrow');
  var currentTitle = document.getElementById("title");

  var titleSetter = function titleSetter(newTitle) {
    currentTitle.innerHTML = newTitle;
  };

  var titlesInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  titleSetter(titlesInYear[titleIndex]);
  titleDown.addEventListener('click', function () {
    if (titleIndex > 0) {
      titleIndex--;
      titleSetter(titlesInYear[titleIndex]);
    }
  });
  titleUp.addEventListener('click', function () {
    if (titleIndex < titlesInYear.length - 1) {
      titleIndex++;
      titleSetter(titlesInYear[titleIndex]);
=======
  var title = document.getElementById('title');
  var titleSetter = function titleSetter(newTitle) {
    title.innerHTML = newTitle;
  };

  var titleArr = JSON.parse(titleCarousel.getAttribute('title-arr'));
  var leftArrow = document.getElementById('left-arrow');
  var rightArrow = document.getElementById('right-arrow');
  var titleIndex = Number(titleCarousel.getAttribute('title-starting-index'));

  titleSetter(titleArr[titleIndex]);

  leftArrow.addEventListener('click', function () {
    if (titleIndex > 0) {
      titleIndex--;
      titleSetter(titleArr[titleIndex]);
    }
  });
  rightArrow.addEventListener('click', function () {
    if (titleIndex < titleArr.length - 1) {
      titleIndex++;
      titleSetter(titleArr[titleIndex]);
>>>>>>> 554b02c7b37a9e6b6a516c54926263d0d5d79795
    }
  });
};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);