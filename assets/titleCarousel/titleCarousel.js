let titleCarouselWrapper = () => {
  const elementBuilder = (elementType, elementId, appendTo, classes) => {
    const el = document.createElement(elementType);
    if(classes){
      el.classList.add(...classes);
    }
    el.id = elementId;
    appendTo.appendChild(el);
  }
  let titleCarousel = document.getElementById('title-carousel');
  let title = document.getElementById('title');
  let titleSetter = (newTitle) => {
    title.innerHTML = newTitle;
  };
  //TODO: CLEANUP: create an empty arrow function called carouselBuilder
  let carouselBuilder = () => {
    elementBuilder('p', 'left-arrow', titleCarousel, ['arrow','fas','fa-chevron-left']);//TODO: CLEANUP: carouselBuilder
    elementBuilder('p', 'title', titleCarousel);
    elementBuilder('p', 'right-arrow', titleCarousel, ['arrow','fas','fa-chevron-right']);
    let leftArrow = document.getElementById('left-arrow'); //TODO: CLEANUP: place in carouselEvents
    let rightArrow = document.getElementById('right-arrow'); //TODO: CLEANUP: place in carouselEvents
    titleSetter(titleArr[titleIndex]);//TODO: CLEANUP: carouselBuilder
  }


  //TODO: CLEANUP: create an arrow function called carouselEvents
  let carouselEvents = () => {

  }

  const arrowClick = (direction) => {
    return new CustomEvent('arrowClick', {
      bubbles: true,
      detail: { arrowDirection: direction }
    });
  }

  leftArrow.addEventListener('click', ()=>{
    if(titleIndex > 0){
      titleIndex--;
      titleSetter(titleArr[titleIndex]);
    } //TODO: LOOPS: Else, set the title index back to the end of the array then call title setter
    else {
      titleIndex = titleIndex.length - 1;
      titleSetter();
    }
    leftArrow.dispatchEvent(arrowClick('left'));
  });

  rightArrow.addEventListener('click', ()=>{
    if(titleIndex < titleArr.length-1){
      titleIndex++;
      titleSetter(titleArr[titleIndex]);
    } //TODO: LOOPS: Else, set the title index back to the beggining of the array then call title setter
    else {
        titleIndex = titleIndex[0];
        titleSetter();
    }
    rightArrow.dispatchEvent(arrowClick('right'));
  });

  //TODO: MAKE IT DYNAMIC: Create an event lister for "carouselInitialState" pass an event to the anonymous function that the add event listener takes
  //TODO: MAKE IT DYNAMIC: console log the event.detail and see what it outputs
  //TODO: MAKE IT DYNAMIC: create a (const) titleArr equal to the related field in the event object
  //TODO: MAKE IT DYNAMIC: create a (const) loops equal to the related field in the event object
  //TODO: MAKE IT DYNAMIC: create a (let) titleIndex equal to the related field in the event object
  //TODO: MAKE IT DYNAMIC: call carouselBuilder and pass titleArr and titleIndex to it
  //TODO: MAKE IT DYNAMIC: call carouselEvents and pass loops titleIndex and titleArr to it

  carouselInitialState.addEventListener();



};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);
