let tracker = () => {
	let plus5 = document.getElementById('plus-5')
	let counter = document.getElementById('counter');
	let totalTime = 0;
	plus5.addEventListener('click', ()=>{
		totalTime += 5;
		counter.innerHTML = totalTime;
	});

	let minus5 = document.getElementById('minus-5')
	minus5.addEventListener('click', ()=>{
		totalTime -= 5;
		counter.innerHTML = totalTime;
	});
};

document.addEventListener('DOMContentLoaded', tracker, false);
