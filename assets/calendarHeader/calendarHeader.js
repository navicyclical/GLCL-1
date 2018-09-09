let calendarHeader = () => {
  let currentMonth = document.getElementById("month");
  let monthSetter = (monthName) => {currentMonth.innerHTML = monthName;};
  monthSetter("September");
  let monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
};

document.addEventListener('DOMContentLoaded', calendarHeader, false);
