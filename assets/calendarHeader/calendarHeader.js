let calendarHeader = () => {
  let currentMonth = document.getElementById("month");
  let monthDown = document.getElementById('monthDown');
  let monthUp = document.getElementById('monthUp');
  let currentDate = new Date();
  let monthIndex = currentDate.getmonth();
  let monthSetter = (newmonth) => {
    currentmonth.innerHTML = newmonth;
  };
  let monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  monthSetter(monthsInYear[monthIndex]);
  monthDown.addEventListener('click', ()=>{
    if (monthIndex > 0){
      monthIndex--;
      monthSetter(monthsInYear[monthIndex]);
    }
  });
  monthUp.addEventListener('click', ()=>{
    if (monthIndex < monthsInYear.length - 1){
      monthIndex++;
      monthSetter(monthsInYear[monthIndex]);
    }
  });
};

document.addEventListener('DOMContentLoaded', calendarHeader, false);
