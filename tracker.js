let tracker = () => {
	let plus5 = document.getElementById('plus-5');
	let minus5 = document.getElementById('minus-5');
	let plus15 = document.getElementById('plus-15');
	let minus15 = document.getElementById('minus-15');
	let counter = document.getElementById('counter');
	let totalTime = 0;
	plus5.addEventListener('click', ()=>{
		totalTime += 5;
		counter.innerHTML = totalTime;
	});

	minus5.addEventListener('click', ()=>{
		totalTime -= 5;
		counter.innerHTML = totalTime;
	});

	plus15.addEventListener('click', ()=>{
		totalTime += 15;
		counter.innerHTML = totalTime;
	});

	minus15.addEventListener('click', ()=>{
		totalTime -= 15;
		counter.innerHTML = totalTime;
	});
};

document.addEventListener('DOMContentLoaded', tracker, false);
