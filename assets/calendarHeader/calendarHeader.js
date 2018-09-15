let calendarHeader = () => {
  let currentMonth = document.getElementById("month");
  let monthDown = document.getElementById('monthDown');
  let monthUp = document.getElementById('monthUp');
  let currentDate = new Date();
  let monthIndex = currentDate.getMonth();
  let monthSetter = (newMonth) => {
    currentMonth.innerHTML = newMonth;
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


/*
//add months
let monthUp = document.getElementById("monthUp");
monthUp.addEventListener('click', ()=>{
  for (let i = 0; i < monthsInYear; i++){
    let singleMonth = monthsInYear[i];
    if (currentMonth === singleMonth){
      monthSetter(monthsInYear[i + 1]);
    } else if (currentMonth === "December"){
      break;
    }
  }
});
//subtract months
let monthDown = document.getElementById("monthDown");
monthDown.addEventListener('click', ()=>{
  for (let i = monthsInYear.length; i < 0; i--){
    let singleMonth = monthsInYear[i];
    if (currentMonth === singleMonth){
      monthSetter(monthsInYear[i - 1]);
    } else if (currentMonth === "January"){
      break;
    }
  }
});
*/
