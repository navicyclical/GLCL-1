let tracker = () => {
	let plus5 = document.getElementById('plus-5')
	let counter = document.getElementById('counter');
	let totalTime = 0;
	plus5.addEventListener('click', ()=>{
		totalTime += 5;
		counter.innerHTML = counter;
	});

	let minus5 = document.getElementById('minus-5')
	minus5.addEventListener('click', ()=>{
		totalTime -= 5;
		counter.innerHTML = counter;
	});
	console.log(min5);
};

document.addEventListener('DOMContentLoaded', tracker, false);
