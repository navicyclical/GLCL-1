let minusFn = function(){
  let minus = document.getElementsByClassName('minus');
  console.log(minus);

  for (let i = 0; i < minus.length; i++) {
    console.log(minus[i]);
    let e = document.createElement('div');
    e.innerHTML = '-';
    minus[i].appendChild(e);
  }
}
document.addEventListener('DOMContentLoaded', fn, false);
