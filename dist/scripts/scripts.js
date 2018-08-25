'use strict';

<<<<<<< HEAD
var fn = function fn() {
	var minus = document.getElementsByClassName('minus');

	for (var i = 0; i < minus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '-';
		minus[i].appendChild(e);
	}
};

document.addEventListener('DOMContentLoaded', fn, false);
=======
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
>>>>>>> 6a9f70d83d08d7afa475bdc3a3a6521caa2e32dc
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};