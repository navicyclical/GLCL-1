let tracker = () => {
	let plus5 = document.getElementById('plus-5')
	let counter = document.getElementById('counter');
	let i = 0;
	min5.addEventListener('click', ()=>{
		i += 5;
		counter.innerHTML = i;
	});

	let minus5 = document.getElementById('minus-5')
	let counter = document.getElementById('counter');
	let i = 0;
	min5.addEventListener('click', ()=>{
		i += 5;
		counter.innerHTML = i;
	});
	console.log(min5);
};

document.addEventListener('DOMContentLoaded', tracker, false);
