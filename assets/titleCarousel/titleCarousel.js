let titleCarouselWrapper = () => {
  let titleCarousel = document.getElementById("title-carousel");
  let titleIndex = 8;
  const elementBuilder = (elementType, elementId, appendTo, classes) => {
    let el = document.createElement(elementType);
    if (classes){
        el.classList.add(...classes);
    }
    el.id = elementId;
    appendTo.appendChild(el);
  }
  elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']);
  elementBuilder('p', 'title', titleCarousel);
  elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);

  let titleDown = document.getElementById('left-arrow');
  let titleUp = document.getElementById('right-arrow');
  let currentTitle = document.getElementById("title");

  let titleSetter = (newTitle) => {
    currentTitle.innerHTML = newTitle;
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

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);
