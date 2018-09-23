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
    let previousMonth = month - 1;
    let daysInPreviousMonth = (y, p) => {
      let previousMonthArr = [];
      let ld = lastDay(y, p);
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
    const lastMonthArr = lastMonth(currentYear, currentMonth, firstDayOfMonth);
    const daysInRow = 7;
    const totalRows = 6;
    let currentRows = 0;
    let currentDayOfMonthIndex = 1; //current day of current month (e.g. september)
    let currentCalendarDayIndex = 0; //current index of days on calendar (i.e. daysInRow * totalRows)
    let lmaIndex = firstDayOfMonth - 1;
    while(currentRows < totalRows){
      const calendarRow = document.createElement('div');
      for(let i = 0; i<daysInRow; i++){
        const day = document.createElement('p');
          if (currentCalendarDayIndex < firstDayOfMonth){
            day.innerHTML = lastMonthArr[lmaIndex];
            day.classList.add('grayedOut');
            lmaIndex--;
          }
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
