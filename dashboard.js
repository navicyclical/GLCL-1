let dashboard = () => {
  const dashBody = document.getElementById('body');
  const calendar = document.getElementById('calendar');
  const titleCarousel = document.getElementById('title-carousel');
  const currentTime = new Date();
  const currentMonth = currentTime.getMonth() + 1;
  let monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
  const carouselInitialState = (direction) => {
    return new CustomEvent('monthChange', {
      bubbles: false,
      detail: {
        titleArr: monthsInYear,
        titleIndex: currentMonth,
        loops: true
      }
    });
  }

  //TODO: MAKE IT DYNAMIC: titleCarousel.dispatchEvent(carouselInitialState());
  titleCarousel.dispatchEvent(carouselInitialState());


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
