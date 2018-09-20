let titleCarouselWrapper = () => {
  let currentTitle = document.getElementById("title");
  let titleDown = document.getElementById('titleDown');
  let titleUp = document.getElementById('titleUp');
  let titleCarousel = document.getElementById("title-carousel");
  //let currentDate = new Date();
  let titleIndex = 8;
  //there is a better way to write these two, DRY:
  let elementBuilder = (elementType, elementId, appendTo, classes) => {
    let el = document.createElement(elementType);
    el.classList.add(...classes);
    el.id = elementId;
    appendTo.appendChild(el);
  }
  elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']);
  //elementBuilder('p', 'title', titleCarousel);
  elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);
  /*
  the non-DRY way
  let la=document.createElement('p');
  la.classList.add('arrow', 'fas', 'fa-chevron-left');
  la.id = 'left-arrow';
  titleCarousel.appendChild(la);
  let ra=document.createElement('p');
  ra.classList.add('arrow', 'fas', 'fa-chevron-right');
  ra.id = 'right-arrow';
  titleCarousel.appendChild(ra);
  let titleSetter = (newTitle) => {
    currenttitle.innerHTML = newTitle;
  };
  */
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
