'use strict';

var minusFn = function minusFn() {
  var minus = document.getElementsByClassName('minus');
  console.log(minus);

  for (var i = 0; i < minus.length; i++) {
    console.log(minus[i]);
    var e = document.createElement('div');
    e.innerHTML = '-';
    minus[i].appendChild(e);
  }
};
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};