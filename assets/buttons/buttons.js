<<<<<<< HEAD
var fn = function (){
	var minus = document.getElementsByClassName('minus');

for(var i = 0; i<minus.length; i++){
	var e = document.createElement('p');
	e.innerHTML = '-';
	minus[i].appendChild(e);
	}

};

=======
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
>>>>>>> 6a9f70d83d08d7afa475bdc3a3a6521caa2e32dc
document.addEventListener('DOMContentLoaded', fn, false);
