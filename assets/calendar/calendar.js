let calendar = () => {

  const firstDay = (year, month) => {
    return new Date(year, month - 1, 1).getDay();
  }

  const lastDay = (year, month) => {
    return new Date(year, month, 0).getDate();
  }

  const currentTime = new Date();
  const currentDay = currentTime.getDay();
  const currentMonth = currentTime.getMonth() - 1;
  const currentYear = currentTime.getFullYear();


const lastMonth = (year, month, dayOfWeek) => {
  const previousMonth = month - 1;
  let daysInPreviousMonth = (y, p) => {
    let previousMonthArr = [];
    const ld = lastDay(y, p);
    let i = 0;
    while (i < daysOfTheWeek.length){
      previousMonthArr.push(ld);
      ld--;
      i++;
    }
    return previousMonthArr;
  }
  if (previousMonth < 1){
    previousMonth = 12;
    return daysInPreviousMonth(year - 1, previousMonth);
  } else {
    return daysInPreviousMonth(year, previousMonth);
  }
}
const lastMonth = (year, month, dayOfWeek) => {
  const previousMonth = month - 1;
  const daysInPreviousMonth = (y,p) => {
    let previousMonthArr = [];
    let ld = lastDay(y, p);
    let i = 0;

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
  const populateCalendarBody = () => {
    const currentDaysInMonth = lastDay(2018, 9);
    const firstDayOfMonth = firstDay(2018, 9);
    //TODO: Create lastMonthArr const which is equal to the lastMonth function which
    // takes the arguments currentYear, currentMonth, and firstDayOfMonth
    const daysInRow = 7;
    const totalRows = 6;
    let currentRows = 0;
    let currentDayOfMonthIndex = 1; //current day of current month (e.g. september)
    let currentCalendarDayIndex = 0; //current index of days on calendar (i.e. daysInRow * totalRows)
    //TODO: Create lmaIndex variable which is equal to the firstDayOfMonth-1

    while(currentRows < totalRows){
      const calendarRow = document.createElement('div');
      for(let i = 0; i<daysInRow; i++){
        const day = document.createElement('p');
        //TODO: Create a new if condition which says
        //"If the currentCalendarDayIndex is less than the firstDayOfMonth"
          //Within the if condition
          //set day inner html to the current lmaIndex of the lastMonthArr
          //add the 'grayedOut' class to the classList of the "day" variable
          //decrement the lmaIndex

        //This if condition says "start adding days to the calendar, if the
        //first weekday of the current month has been reached"
        if(currentCalendarDayIndex>=firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth){
          day.innerHTML = currentDayOfMonthIndex;
          currentDayOfMonthIndex++;
        }

        //TODO: BONUS: You can add another if condition here if you want, which will just say "add grayed numbers to the end of the month until we run out of space on the calendar"


        currentCalendarDayIndex++;
        calendarRow.appendChild(day);
      }
      calendarBody
      .appendChild(calendarRow)
      .className = "calendar-row";
      currentRows++;
    }
  }
  populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);
