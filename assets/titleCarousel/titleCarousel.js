let titleCarouselWrapper = () => {
<<<<<<< HEAD
  let titleCarousel = document.getElementById("title-carousel");
  let titleIndex = 8;
  const elementBuilder = (elementType, elementId, appendTo, classes) => {
    let el = document.createElement(elementType);
    if (classes){
        el.classList.add(...classes);
=======
  let titleCarousel = document.getElementById('title-carousel');

  const elementBuilder = (elementType, elementId, appendTo, classes) => {
    const el = document.createElement(elementType);
    if(classes){
      el.classList.add(...classes);
>>>>>>> 554b02c7b37a9e6b6a516c54926263d0d5d79795
    }
    el.id = elementId;
    appendTo.appendChild(el);
  }
<<<<<<< HEAD
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
=======

  elementBuilder('p', 'left-arrow', titleCarousel, ['arrow','fas','fa-chevron-left']);
  elementBuilder('p', 'title', titleCarousel);
  elementBuilder('p', 'right-arrow', titleCarousel, ['arrow','fas','fa-chevron-right']);

  let title = document.getElementById('title');
  let titleSetter = (newTitle) => {
    title.innerHTML = newTitle;
  };

  let titleArr = JSON.parse(titleCarousel.getAttribute('title-arr'));
  let leftArrow = document.getElementById('left-arrow');
  let rightArrow = document.getElementById('right-arrow');
  let titleIndex = Number(titleCarousel.getAttribute('title-starting-index'));

  titleSetter(titleArr[titleIndex]);

  leftArrow.addEventListener('click', ()=>{
    if(titleIndex > 0){
      titleIndex--;
      titleSetter(titleArr[titleIndex]);
    }
  });
  rightArrow.addEventListener('click', ()=>{
    if(titleIndex < titleArr.length-1){
      titleIndex++;
      titleSetter(titleArr[titleIndex]);
>>>>>>> 554b02c7b37a9e6b6a516c54926263d0d5d79795
    }
  });
};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);
