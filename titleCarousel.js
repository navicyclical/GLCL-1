let calendarHeader = () => {
  let currentTitle = document.getElementById("title");
  let titleDown = document.getElementById('titleDown');
  let titleUp = document.getElementById('titleUp');
  let titleCarousel = document.getElementById("title-carousel");
  let currentDate = new Date();
  let titleIndex = currentDate.getMonth();
  let titleSetter = (newTitle) => {
    currenttitle.innerHTML = newTitle;
  };
  let titlesInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  titleSetter(titlesInYear[titleIndex]);
  titleDown.addEventListener('click', ()=>{
    if (titleIndex > 0){
      titleIndex--;
      titleSetter(titlesInYear[titleIndex]);
    }
  });
  titleUp.addEventListener('click', ()=>{
    if (titleIndex < titlesInYear.length - 1){
      titleIndex++;
      titleSetter(titlesInYear[titleIndex]);
    }
  });
};

document.addEventListener('DOMContentLoaded', calendarHeader, false);
