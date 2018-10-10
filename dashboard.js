let dashboard = () => {
  const dashBody = document.getElementById('body');
  const calendar = document.getElementById('calendar');
  //TODO: MAKE IT DYNAMIC: get title carousel by id
  //TODO: MAKE IT DYNAMIC: copy current time const from calendar.js
  //TODO: MAKE IT DYNAMIC: copy current month const from calendar.js
  //TODO: MAKE IT DYNAMIC: create monthsInYear array and make it equal to an array of 12 strings which are the names of the 12 months of the year in order
  const monthChange = (direction) => {
    return new CustomEvent('monthChange', {
      bubbles: false,
      detail: { changeDirection: direction }
    });
  }

  //TODO: MAKE IT DYNAMIC: copy the entire monthChange const and paste it here
  //TODO: MAKE IT DYNAMIC: change the variable name and event name 'monthChange' to 'carouselInitialState'
  //TODO: MAKE IT DYNAMIC: delete the existing properties and values in the detail object
  //TODO: MAKE IT DYNAMIC: create 3 properties in the detail object
  //TODO: MAKE IT DYNAMIC: titleArr with the value monthsInYear
  //TODO: MAKE IT DYNAMIC: titleIndex with the value currentMonth
  //TODO: MAKE IT DYNAMIC: loops with the value true

  //TODO: MAKE IT DYNAMIC: titleCarousel.dispatchEvent(carouselInitialState());


  dashBody.addEventListener('arrowClick', function(event){
    calendar.dispatchEvent(monthChange(event.detail.arrowDirection));
  }, true);

  $.ajax({
    method: "GET",
    url: "http://localhost:3000/User",
    dataType: "json"
  }).then((response)=>{
    console.log('response', response);
  });


};

document.addEventListener('DOMContentLoaded', dashboard, false);
